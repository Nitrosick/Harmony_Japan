<template>
  <section
    id="contact-form"
    class="contact-form"
  >
    <form
      class="form"
      @submit.prevent="onSubmit"
    >
      <div class="form-grid">
        <label class="form-field">
          <span class="form-label">{{ $t('contact.form.fields.name.label') }}*</span>
          <input
            v-model.trim="form.name"
            type="text"
            class="form-input"
          >
          <span
            v-if="errors.name"
            class="form-error"
          >
            {{ errors.name }}
          </span>
        </label>

        <label class="form-field">
          <span class="form-label">{{ $t('contact.form.fields.company.label') }}*</span>
          <input
            v-model.trim="form.company"
            type="text"
            class="form-input"
          >
          <span
            v-if="errors.company"
            class="form-error"
          >
            {{ errors.company }}
          </span>
        </label>

        <label class="form-field">
          <span class="form-label">{{ $t('contact.form.fields.job_title.label') }}</span>
          <input
            v-model.trim="form.job_title"
            type="text"
            class="form-input"
          >
        </label>

        <label class="form-field">
          <span class="form-label">{{ $t('contact.form.fields.email.label') }}*</span>
          <input
            v-model.trim="form.email"
            type="email"
            class="form-input"
          >
          <span
            v-if="errors.email"
            class="form-error"
          >
            {{ errors.email }}
          </span>
        </label>

        <label class="form-field">
          <span class="form-label">{{ $t('contact.form.fields.phone.label') }}</span>
          <input
            v-model.trim="form.phone"
            type="tel"
            class="form-input"
          >
        </label>

        <label class="form-field">
          <span class="form-label">{{ $t('contact.form.fields.country_region.label') }}</span>
          <input
            v-model.trim="form.country_region"
            type="text"
            class="form-input"
          >
        </label>

        <label class="form-field form-field-full">
          <span class="form-label">{{ $t('contact.form.fields.inquiry_type.label') }}</span>
          <select
            v-model="form.inquiry_type"
            class="form-input form-select"
          >
            <option value=""></option>
            <option
              v-for="option in inquiryOptions"
              :key="option.value"
              :value="option.value"
            >
              {{ option.label }}
            </option>
          </select>
        </label>

        <label class="form-field form-field-full">
          <span class="form-label">{{ $t('contact.form.fields.message.label') }}*</span>
          <textarea
            v-model.trim="form.message"
            class="form-input form-textarea"
            rows="4"
          ></textarea>
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
          class="form-consent-input"
        >
        <span class="form-consent-text">
          {{ $t('contact.form.fields.consent.label') }}
        </span>
      </label>
      <span
        v-if="errors.consent"
        class="form-error form-error-consent"
      >
        {{ errors.consent }}
      </span>

      <div class="form-actions">
        <button
          type="submit"
          class="form-submit"
          :disabled="loading"
        >
          {{ submitButtonText }}
        </button>
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
      inquiryType: form.inquiry_type || 'other',
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
.contact-form {
  max-width: rem(920);
  margin: 0 auto;
  filter: drop-shadow(0 rem(4) rem(2) rgba(0, 0, 0, 0.25));
}

.form {
  display: flex;
  flex-direction: column;
  gap: rem(24);
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: rem(24);
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
  padding: 0 rem(4);
  color: $color-text;
  font-size: rem(16);
  font-weight: 400;
  line-height: rem(26);
}

.form-input {
  width: 100%;
  height: rem(56);
  border-radius: rem(20);
  border: 1px solid rgba(1, 180, 235, 0.1);
  background: rgba(1, 180, 235, 0.1);
  color: $color-text;
  font-family: $font-main;
  font-size: rem(16);
  font-weight: 400;
  line-height: rem(26);
  padding: 0 rem(20);
  transition: border-color $transition-time, background-color $transition-time;

  &:focus {
    border-color: rgba(1, 180, 235, 0.5);
    background: rgba(1, 180, 235, 0.16);
  }
}

.form-select {
  appearance: none;
  background-image:
    linear-gradient(45deg, transparent 50%, var(--color-light-grey) 50%),
    linear-gradient(135deg, var(--color-light-grey) 50%, transparent 50%);
  background-position:
    calc(100% - #{rem(24)}) calc(50% - #{rem(4)}),
    calc(100% - #{rem(18)}) calc(50% - #{rem(4)});
  background-size: rem(6) rem(6), rem(6) rem(6);
  background-repeat: no-repeat;
  padding-right: rem(44);
}

.form-textarea {
  min-height: rem(114);
  height: rem(114);
  padding-top: rem(15);
  padding-bottom: rem(15);
  resize: none;
}

.form-honeypot {
  position: absolute;
  left: -9999px;
  width: 1px;
  height: 1px;
  opacity: 0;
  pointer-events: none;
}

.form-consent {
  display: flex;
  align-items: flex-start;
  gap: rem(24);
}

.form-consent-input {
  appearance: none;
  display: grid;
  place-content: center;
  width: rem(24);
  height: rem(24);
  margin-top: rem(6);
  border: 2px solid var(--color-light-grey);
  border-radius: rem(6);
  background: transparent;
  flex-shrink: 0;
  cursor: pointer;

  &::before {
    content: '';
    width: rem(10);
    height: rem(10);
    border-radius: rem(2);
    background-color: $color-text;
    transform: scale(0);
    transition: transform $transition-time;
  }

  &:checked {
    border-color: $color-text;
  }

  &:checked::before {
    transform: scale(1);
  }
}

.form-consent-text {
  color: var(--color-light-grey);
  font-size: rem(16);
  font-weight: 400;
  line-height: rem(26);
}

.form-actions {
  display: flex;
  justify-content: center;
  width: 100%;
}

.form-submit {
  width: rem(340);
  height: rem(72);
  border-radius: rem(24);
  background-color: $color-text;
  color: var(--color-blue);
  font-family: $font-main;
  font-size: rem(20);
  font-weight: 600;
  line-height: rem(22);
  transition: color $transition-time, opacity $transition-time;

  &:hover,
  &:focus-visible {
    color: var(--color-light-blue);
  }

  &:disabled {
    opacity: 0.75;
    cursor: not-allowed;
  }
}

.form-error {
  color: #f09a9a;
  font-size: rem(14);
  line-height: 1.5;
  padding-left: rem(4);
}

.form-error-consent {
  margin-top: rem(-14);
  padding-left: rem(48);
}

.form-status {
  margin: 0;
  text-align: center;
  font-size: rem(16);
  line-height: rem(26);

  &.success {
    color: #9ad6a5;
  }

  &.error {
    color: #f09a9a;
  }
}

@include bp-md {
  .form {
    gap: rem(20);
  }

  .form-grid {
    grid-template-columns: 1fr;
    gap: rem(20);
  }

  .form-consent {
    gap: rem(16);
  }

  .form-consent-input {
    margin-top: rem(4);
  }

  .form-submit {
    width: 100%;
    max-width: rem(340);
  }
}

@include bp-sm {
  .form-label,
  .form-input,
  .form-consent-text {
    font-size: rem(15);
  }

  .form-submit {
    height: rem(64);
    font-size: rem(18);
  }
}
</style>
