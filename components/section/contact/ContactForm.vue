<template>
  <section
    id="contact-form"
    class="contact-form"
  >
    <form
      class="form"
      @submit.prevent="onSubmit"
    >
      <FormGrid>
        <FormInput
          v-model="form.name"
          :label="$t('contact.form.fields.name.label')"
          required
          :error="errors.name"
        />

        <FormInput
          v-model="form.company"
          :label="$t('contact.form.fields.company.label')"
          required
          :error="errors.company"
        />

        <FormInput
          v-model="form.job_title"
          :label="$t('contact.form.fields.job_title.label')"
          :error="errors.job_title"
        />

        <FormInput
          v-model="form.email"
          :label="$t('contact.form.fields.email.label')"
          type="email"
          required
          :error="errors.email"
        />

        <FormInput
          v-model="form.phone"
          :label="$t('contact.form.fields.phone.label')"
          type="tel"
          :error="errors.phone"
        />

        <FormInput
          v-model="form.country_region"
          :label="$t('contact.form.fields.country_region.label')"
          :error="errors.country_region"
        />

        <FormSelect
          v-model="form.inquiry_type"
          :label="$t('contact.form.fields.inquiry_type.label')"
          :error="errors.inquiry_type"
          full-width
          :options="inquiryOptions"
        />

        <FormTextarea
          v-model="form.message"
          :label="$t('contact.form.fields.message.label')"
          :error="errors.message"
          required
          full-width
        />
      </FormGrid>

      <input
        v-model="form.selected_pricing_configuration"
        type="hidden"
      >

      <FormHoneypot
        v-model="form.website"
      />

      <FormConsent
        v-model="form.consent"
        :label="$t('contact.form.fields.consent.label')"
        :error="errors.consent"
      />

      <div class="form-actions">
        <Button
          :text="submitButtonText"
          :disabled="loading"
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
import FormSelect from '~/components/form/FormSelect.vue'

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

  .form-submit {
    width: 100%;
    max-width: rem(340);
  }
}

@include bp-sm {
  .form-submit {
    height: rem(64);
    font-size: rem(18);
  }
}
</style>
