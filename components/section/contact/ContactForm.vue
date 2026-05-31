<template>
  <section
    id="contact-form"
    class="form-section content"
  >
    <p class="form-eyebrow">
      {{ $t('contact.form.eyebrow') }}
    </p>
    <h2>{{ $t('contact.form.title') }}</h2>

    <form
      class="form"
      @submit.prevent="onSubmit"
    >
      <div class="form-grid">
        <label
          v-for="field in textFields"
          :key="field.key"
          class="form-field"
        >
          <span class="form-label">
            {{ $t(`contact.form.fields.${field.key}.label`) }}
            <span
              v-if="field.required"
              class="form-required"
            >
              *
            </span>
          </span>
          <input
            v-model.trim="form[field.key]"
            :type="field.type"
            :placeholder="$t(`contact.form.fields.${field.key}.placeholder`)"
            class="form-input"
          >
          <span
            v-if="errors[field.key]"
            class="form-error"
          >
            {{ errors[field.key] }}
          </span>
        </label>

        <label class="form-field form-field-full">
          <span class="form-label">
            {{ $t('contact.form.fields.inquiry_type.label') }}
            <span class="form-required">*</span>
          </span>
          <select
            v-model="form.inquiry_type"
            class="form-input"
          >
            <option value="">
              {{ $t('contact.form.fields.inquiry_type.placeholder') }}
            </option>
            <option
              v-for="option in inquiryOptions"
              :key="option.value"
              :value="option.value"
            >
              {{ option.label }}
            </option>
          </select>
          <span
            v-if="errors.inquiry_type"
            class="form-error"
          >
            {{ errors.inquiry_type }}
          </span>
        </label>

        <label class="form-field form-field-full">
          <span class="form-label">
            {{ $t('contact.form.fields.message.label') }}
            <span class="form-required">*</span>
          </span>
          <textarea
            v-model.trim="form.message"
            :placeholder="$t('contact.form.fields.message.placeholder')"
            class="form-input form-textarea"
            rows="7"
          />
          <span
            v-if="errors.message"
            class="form-error"
          >
            {{ errors.message }}
          </span>
        </label>
      </div>

      <input
        v-model="form.selected_pricing_configuration"
        type="hidden"
      >

      <label class="form-consent">
        <input
          v-model="form.consent"
          type="checkbox"
        >
        <span>{{ $t('contact.form.fields.consent.label') }}</span>
      </label>
      <span
        v-if="errors.consent"
        class="form-error"
      >
        {{ errors.consent }}
      </span>

      <p class="form-disclaimer">
        {{ $t('contact.form.disclaimer') }}
      </p>

      <div class="form-actions">
        <Button
          :text="$t('contact.form.submit')"
          :adaptable="false"
        />
        <a
          v-if="preparedMailto"
          :href="preparedMailto"
          class="form-mailto"
        >
          {{ $t('contact.form.open_mailto_again') }}
        </a>
      </div>

      <p
        v-if="submitMessage"
        class="form-status"
      >
        {{ submitMessage }}
      </p>
    </form>
  </section>
</template>

<script setup>
const route = useRoute()
const { t, tm } = useI18n()

const textFields = [
  { key: 'name', type: 'text', required: true },
  { key: 'company', type: 'text', required: true },
  { key: 'job_title', type: 'text', required: false },
  { key: 'email', type: 'email', required: true },
  { key: 'phone', type: 'tel', required: false },
  { key: 'country_region', type: 'text', required: false }
]

const inquiryOptionKeys = ['saf', 'pricing', 'partnership', 'saf_based_development', 'demo', 'media', 'other']

const inquiryOptions = computed(() => {
  return inquiryOptionKeys.map(key => ({
    value: key,
    label: t(`contact.form.fields.inquiry_type.options.${key}`)
  }))
})

const form = reactive({
  name: '',
  company: '',
  job_title: '',
  email: '',
  phone: '',
  country_region: '',
  inquiry_type: '',
  message: '',
  selected_pricing_configuration: typeof route.query.pricing === 'string' ? route.query.pricing : '',
  consent: false
})

const errors = reactive({
  name: '',
  company: '',
  email: '',
  inquiry_type: '',
  message: '',
  consent: ''
})

const preparedMailto = ref('')
const submitMessage = ref('')

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const clearErrors = () => {
  Object.keys(errors).forEach((key) => {
    errors[key] = ''
  })
}

const validate = () => {
  clearErrors()

  if (!form.name) {
    errors.name = t('contact.form.errors.required')
  }

  if (!form.company) {
    errors.company = t('contact.form.errors.required')
  }

  if (!form.email) {
    errors.email = t('contact.form.errors.required')
  } else if (!emailPattern.test(form.email)) {
    errors.email = t('contact.form.errors.email')
  }

  if (!form.inquiry_type) {
    errors.inquiry_type = t('contact.form.errors.required')
  }

  if (!form.message) {
    errors.message = t('contact.form.errors.required')
  }

  if (!form.consent) {
    errors.consent = t('contact.form.errors.consent')
  }

  return !Object.values(errors).some(Boolean)
}

const buildSubject = () => {
  const optionLabel = inquiryOptions.value.find(option => option.value === form.inquiry_type)?.label || form.inquiry_type
  return `[Harmony Technology] ${optionLabel} inquiry from ${form.company}`
}

const buildBody = () => {
  const optionLabel = inquiryOptions.value.find(option => option.value === form.inquiry_type)?.label || form.inquiry_type
  const lines = [
    'Harmony Technology inquiry',
    '',
    `Name: ${form.name}`,
    `Company: ${form.company}`,
    `Job Title: ${form.job_title || '-'}`,
    `Email: ${form.email}`,
    `Phone: ${form.phone || '-'}`,
    `Country / Region: ${form.country_region || '-'}`,
    `Inquiry Type: ${optionLabel}`,
    `Selected pricing configuration: ${form.selected_pricing_configuration || '-'}`,
    '',
    'Message:',
    form.message,
    '',
    'Please do not include confidential information in this initial inquiry.'
  ]

  return lines.join('\n')
}

const onSubmit = () => {
  submitMessage.value = ''

  if (!validate()) {
    return
  }

  const mailto = `mailto:info@harmonytec.jp?subject=${encodeURIComponent(buildSubject())}&body=${encodeURIComponent(buildBody())}`
  preparedMailto.value = mailto
  submitMessage.value = t('contact.form.status')

  if (import.meta.client) {
    window.location.href = mailto
  }
}
</script>

<style lang="scss" scoped>
.form-section {
  display: flex;
  flex-direction: column;
  gap: rem(20);
  padding: 0 fluid(80, 20) rem(64);
}

.form-eyebrow {
  margin: 0;
  font-size: rem(14);
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  opacity: 0.55;
}

.form {
  display: flex;
  flex-direction: column;
  gap: rem(18);
  width: 100%;
  max-width: rem(980);
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: rem(18);

  @include bp-md {
    grid-template-columns: 1fr;
  }
}

.form-field {
  display: flex;
  flex-direction: column;
  gap: rem(8);
}

.form-field-full {
  grid-column: 1 / -1;
}

.form-label {
  font-weight: 600;
}

.form-required {
  color: #f09a9a;
}

.form-input {
  width: 100%;
  border-radius: rem(18);
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.04);
  color: $color-text;
  padding: rem(16) rem(18);

  &::placeholder {
    color: rgba(255, 255, 255, 0.45);
  }
}

.form-textarea {
  resize: vertical;
  min-height: rem(180);
}

.form-consent {
  display: flex;
  align-items: flex-start;
  gap: rem(10);
  max-width: rem(980);

  input {
    margin-top: rem(4);
  }
}

.form-disclaimer,
.form-status {
  max-width: rem(980);
  margin: 0;
  opacity: 0.72;
}

.form-actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: rem(16);
}

.form-mailto {
  font-weight: 600;
  text-decoration: underline;
}

.form-error {
  color: #f09a9a;
  font-size: rem(14);
}
</style>
