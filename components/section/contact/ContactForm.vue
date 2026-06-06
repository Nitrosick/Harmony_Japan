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
      <input
        v-model="form.website"
        type="text"
        class="form-honeypot"
        tabindex="-1"
        autocomplete="off"
        aria-hidden="true"
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
          :text="submitButtonText"
          :adaptable="false"
        />
      </div>

      <p
        v-if="submitMessage"
        class="form-status"
        :class="submitMessageType"
      >
        {{ submitMessage }}
      </p>
    </form>
  </section>
</template>

<script setup>
const route = useRoute()
const { t } = useI18n()

const textFields = [
  { key: 'name', type: 'text', required: true },
  { key: 'company', type: 'text', required: true },
  { key: 'job_title', type: 'text', required: false },
  { key: 'email', type: 'email', required: true },
  { key: 'phone', type: 'tel', required: false },
  { key: 'country_region', type: 'text', required: false }
]

const inquiryOptionKeys = ['saf', 'pricing', 'partnership', 'saf_based_development', 'demo', 'media', 'other']

const normalizeInquiryType = (value) => {
  if (typeof value !== 'string') return ''

  const normalized = value
    .trim()
    .toLowerCase()
    .replace(/[\s-]+/g, '_')

  return inquiryOptionKeys.includes(normalized)
    ? normalized
    : ''
}

const inquiryOptions = computed(() => {
  return inquiryOptionKeys.map(key => ({
    value: key,
    label: t(`contact.form.fields.inquiry_type.options.${key}`)
  }))
})

const initialInquiryType = normalizeInquiryType(route.query.inquiry) || (typeof route.query.pricing === 'string' ? 'pricing' : '')
const initialSelectedPricingConfiguration = typeof route.query.pricing === 'string' ? route.query.pricing : ''

const form = reactive({
  name: '',
  company: '',
  job_title: '',
  email: '',
  phone: '',
  country_region: '',
  inquiry_type: initialInquiryType,
  message: '',
  selected_pricing_configuration: initialSelectedPricingConfiguration,
  consent: false,
  website: ''
})

const errors = reactive({
  name: '',
  company: '',
  email: '',
  inquiry_type: '',
  message: '',
  consent: ''
})

const loading = ref(false)
const submitMessage = ref('')
const submitMessageType = ref('')

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

const submitButtonText = computed(() => (
  loading.value ? t('contact.form.sending') : t('contact.form.submit')
))

const resetForm = () => {
  form.name = ''
  form.company = ''
  form.job_title = ''
  form.email = ''
  form.phone = ''
  form.country_region = ''
  form.inquiry_type = initialInquiryType
  form.message = ''
  form.selected_pricing_configuration = initialSelectedPricingConfiguration
  form.consent = false
  form.website = ''
}

const onSubmit = async () => {
  if (loading.value) return

  submitMessage.value = ''
  submitMessageType.value = ''

  if (!validate()) {
    return
  }

  loading.value = true

  try {
    const payload = {
      name: form.name,
      company: form.company,
      jobTitle: form.job_title || '',
      email: form.email,
      phone: form.phone || '',
      countryRegion: form.country_region || '',
      inquiryType: form.inquiry_type,
      message: form.message,
      selectedPricingConfiguration: form.selected_pricing_configuration || '',
      consent: form.consent,
      website: form.website || ''
    }

    const response = await $fetch('/api/contact', {
      method: 'POST',
      body: payload
    })

    if (!response?.success) {
      throw new Error('contact_submit_failed')
    }

    resetForm()
    clearErrors()
    submitMessageType.value = 'success'
    submitMessage.value = t('contact.form.status_success')
  } catch {
    submitMessageType.value = 'error'
    submitMessage.value = t('contact.form.status_error')
  } finally {
    loading.value = false
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

.form-honeypot {
  position: absolute;
  left: -9999px;
  width: 1px;
  height: 1px;
  opacity: 0;
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

.form-status {
  &.success {
    color: #9ad6a5;
    opacity: 1;
  }

  &.error {
    color: #f09a9a;
    opacity: 1;
  }
}
</style>
