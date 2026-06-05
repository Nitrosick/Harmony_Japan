<template>
  <section
    id="calculator-preview"
    class="calculator content"
  >
    <p class="calculator-eyebrow">
      {{ $t('pricing.calculator.eyebrow') }}
    </p>
    <h2>{{ $t('pricing.calculator.title') }}</h2>
    <p class="calculator-text">
      {{ $t('pricing.calculator.text') }}
    </p>

    <form
      class="calculator-form"
      @submit.prevent="onCalculate"
    >
      <fieldset class="calculator-group">
        <legend>{{ $t('pricing.calculator.fields.mode.label') }}</legend>
        <div class="calculator-options">
          <label
            v-for="option in modeOptions"
            :key="option.value"
            class="calculator-option"
          >
            <input
              v-model="form.mode"
              type="radio"
              :value="option.value"
            >
            <span>{{ option.label }}</span>
          </label>
        </div>
      </fieldset>

      <div class="calculator-grid">
        <label
          v-if="form.mode === 'direct_tb'"
          class="calculator-field"
        >
          <span>{{ $t('pricing.calculator.fields.direct_tb.label') }}</span>
          <input
            v-model="form.direct_tb"
            type="number"
            step="0.01"
            min="0"
            :placeholder="$t('pricing.calculator.fields.direct_tb.placeholder')"
          >
        </label>

        <template v-if="form.mode === 'flow'">
          <label class="calculator-field">
            <span>{{ $t('pricing.calculator.fields.flow_gb_day.label') }}</span>
            <input
              v-model="form.flow_gb_day"
              type="number"
              step="0.01"
              min="0"
              :placeholder="$t('pricing.calculator.fields.flow_gb_day.placeholder')"
            >
          </label>
          <label class="calculator-field">
            <span>{{ $t('pricing.calculator.fields.flow_retention_days.label') }}</span>
            <input
              v-model="form.flow_retention_days"
              type="number"
              step="1"
              min="0"
              :placeholder="$t('pricing.calculator.fields.flow_retention_days.placeholder')"
            >
          </label>
        </template>

        <template v-if="form.mode === 'eps'">
          <label class="calculator-field">
            <span>{{ $t('pricing.calculator.fields.eps.label') }}</span>
            <input
              v-model="form.eps"
              type="number"
              step="0.01"
              min="0"
              :placeholder="$t('pricing.calculator.fields.eps.placeholder')"
            >
          </label>
          <label class="calculator-field">
            <span>{{ $t('pricing.calculator.fields.avg_event_size.label') }}</span>
            <input
              v-model="form.avg_event_size"
              type="number"
              step="1"
              min="0"
              :placeholder="$t('pricing.calculator.fields.avg_event_size.placeholder')"
            >
          </label>
          <label class="calculator-field">
            <span>{{ $t('pricing.calculator.fields.eps_retention_days.label') }}</span>
            <input
              v-model="form.eps_retention_days"
              type="number"
              step="1"
              min="0"
              :placeholder="$t('pricing.calculator.fields.eps_retention_days.placeholder')"
            >
          </label>
        </template>

        <label class="calculator-field calculator-field-full">
          <span>{{ $t('pricing.calculator.fields.bundle.label') }}</span>
          <select v-model="form.bundle">
            <option value="">
              {{ $t('pricing.calculator.fields.bundle.placeholder') }}
            </option>
            <option
              v-for="bundle in bundleOptions"
              :key="bundle.value"
              :value="bundle.value"
            >
              {{ bundle.label }}
            </option>
          </select>
        </label>
      </div>

      <fieldset class="calculator-group">
        <legend>{{ $t('pricing.calculator.modules.label') }}</legend>
        <div class="calculator-modules">
          <label
            v-for="module in moduleOptions"
            :key="module.value"
            class="calculator-option"
          >
            <input
              v-model="form.modules"
              type="checkbox"
              :value="module.value"
            >
            <span>{{ module.label }}</span>
          </label>
        </div>
      </fieldset>

      <p class="calculator-storage">
        {{ $t('pricing.calculator.storage_label') }}:
        <strong>{{ storageNumberDisplay }}</strong>
      </p>

      <p
        v-if="errorMessage"
        class="calculator-error"
      >
        {{ errorMessage }}
      </p>

      <div class="calculator-actions">
        <Button
          :text="loading ? $t('pricing.calculator.states.calculating') : $t('pricing.calculator.actions.calculate')"
          :adaptable="false"
        />
      </div>
    </form>

    <div
      v-if="result"
      class="calculator-result"
    >
      <h3>{{ $t('pricing.calculator.result.title') }}</h3>
      <p class="calculator-result-value">
        {{ $t('pricing.calculator.result.annual_estimate') }}:
        <strong>{{ formatUsd(result.total) }}</strong>
      </p>
      <p class="calculator-result-meta">
        {{ $t('pricing.calculator.result.bundle_label') }}: {{ result.bundleLabel }}
      </p>
      <p class="calculator-result-meta">
        {{ $t('pricing.calculator.result.storage_label') }}: {{ result.storageNumber.toFixed(2) }} TB
      </p>
      <p class="calculator-disclaimer">
        {{ $t('pricing.calculator.disclaimer') }}
      </p>

      <div class="calculator-result-actions">
        <Button
          :text="$t('pricing.calculator.result.actions.request_quote')"
          :to="pricingQuoteLink"
          :adaptable="false"
        />
        <Button
          :text="$t('pricing.calculator.result.actions.schedule_demo')"
          :to="pricingDemoLink"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
const API_URL = '/api/saf-pricing'

const bundleConfig = {
  siem: { calcName: 'CheckSAP', bundle: 'siem', flag: 'sap0', labelKey: 'siem' },
  it_ops: { calcName: 'CheckITOps', bundle: 'it', flag: 'itops0', labelKey: 'it_ops' },
  compliance: { calcName: 'CheckCompliance', bundle: 'bi', flag: 'compliance0', labelKey: 'compliance' },
  custom: { calcName: 'CheckCustom', bundle: 'custom', flag: 'safcustom0', labelKey: 'custom' }
}

const moduleApiMap = {
  IM0: 'IM0',
  inventory0: 'inventory0',
  cs0: 'cs0',
  ma0: 'ma0',
  network0: 'network0',
  servers0: 'servers0',
  msad0: 'msad0',
  msexch0: 'msexch0',
  netmap0: 'netmap0',
  compl0: 'compl0'
}

const { t } = useI18n()

const form = reactive({
  mode: 'direct_tb',
  direct_tb: '',
  flow_gb_day: '',
  flow_retention_days: '',
  eps: '',
  avg_event_size: '',
  eps_retention_days: '',
  bundle: '',
  modules: []
})

const loading = ref(false)
const errorMessage = ref('')
const result = ref(null)

const modeOptions = computed(() => [
  { value: 'direct_tb', label: t('pricing.calculator.modes.direct_tb') },
  { value: 'flow', label: t('pricing.calculator.modes.flow') },
  { value: 'eps', label: t('pricing.calculator.modes.eps') }
])

const bundleOptions = computed(() => [
  { value: 'siem', label: t('pricing.calculator.bundles.siem') },
  { value: 'it_ops', label: t('pricing.calculator.bundles.it_ops') },
  { value: 'compliance', label: t('pricing.calculator.bundles.compliance') },
  { value: 'custom', label: t('pricing.calculator.bundles.custom') }
])

const moduleOptions = computed(() => [
  { value: 'IM0', label: t('pricing.calculator.modules.items.IM0') },
  { value: 'inventory0', label: t('pricing.calculator.modules.items.inventory0') },
  { value: 'cs0', label: t('pricing.calculator.modules.items.cs0') },
  { value: 'ma0', label: t('pricing.calculator.modules.items.ma0') },
  { value: 'network0', label: t('pricing.calculator.modules.items.network0') },
  { value: 'servers0', label: t('pricing.calculator.modules.items.servers0') },
  { value: 'msad0', label: t('pricing.calculator.modules.items.msad0') },
  { value: 'msexch0', label: t('pricing.calculator.modules.items.msexch0') },
  { value: 'netmap0', label: t('pricing.calculator.modules.items.netmap0') },
  { value: 'compl0', label: t('pricing.calculator.modules.items.compl0') }
])

const parsePositiveNumber = (value) => {
  const parsed = Number(value)
  return Number.isFinite(parsed) && parsed > 0 ? parsed : null
}

const round2 = (value) => Math.round(value * 100) / 100

const storageNumber = computed(() => {
  if (form.mode === 'direct_tb') {
    const tb = parsePositiveNumber(form.direct_tb)
    return tb ? round2(tb) : null
  }

  if (form.mode === 'flow') {
    const gbDay = parsePositiveNumber(form.flow_gb_day)
    const retention = parsePositiveNumber(form.flow_retention_days)
    if (!gbDay || !retention) return null
    return round2((gbDay * retention) / 1024)
  }

  const eps = parsePositiveNumber(form.eps)
  const avgSize = parsePositiveNumber(form.avg_event_size)
  const retention = parsePositiveNumber(form.eps_retention_days)
  if (!eps || !avgSize || !retention) return null
  return round2((eps * avgSize * 86400 * retention) / (1024 ** 4))
})

const storageNumberDisplay = computed(() => (
  storageNumber.value ? `${storageNumber.value.toFixed(2)} TB` : '-'
))

const pricingSummary = computed(() => {
  if (!result.value) return ''
  return `b:${result.value.bundle};s:${result.value.storageNumber.toFixed(2)};t:${Math.round(result.value.total)}`
})

const pricingQuoteLink = computed(() => (
  `/contact?inquiry=Pricing&pricing=${encodeURIComponent(pricingSummary.value)}`
))

const pricingDemoLink = computed(() => (
  `/contact?inquiry=Pricing&pricing=${encodeURIComponent(pricingSummary.value)}&demo=1`
))

const validate = () => {
  if (!form.bundle) {
    errorMessage.value = t('pricing.calculator.errors.bundle_required')
    return false
  }

  if (!storageNumber.value) {
    errorMessage.value = t('pricing.calculator.errors.storage_required')
    return false
  }

  if (storageNumber.value <= 0) {
    errorMessage.value = t('pricing.calculator.errors.positive_values')
    return false
  }

  return true
}

const formatUsd = (value) => (
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0
  }).format(value)
)

const onCalculate = async () => {
  errorMessage.value = ''
  result.value = null

  if (!validate()) return

  const selectedBundle = bundleConfig[form.bundle]
  if (!selectedBundle) {
    errorMessage.value = t('pricing.calculator.errors.bundle_required')
    return
  }

  const data = {
    storageNumber: { type: 'number', value: storageNumber.value },
    bundle: { type: 'string', value: selectedBundle.bundle },
    isStorageWay: { type: 'string', value: '1' },
    [selectedBundle.flag]: { type: 'checkbox', value: true }
  }

  form.modules.forEach((moduleKey) => {
    const apiKey = moduleApiMap[moduleKey]
    if (!apiKey) return
    data[apiKey] = { type: 'checkbox', value: true }
  })

  loading.value = true

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        calcName: selectedBundle.calcName,
        data
      })
    })

    if (!response.ok) {
      throw new Error('api_response_not_ok')
    }

    const payload = await response.json()
    const totalRaw = payload?.data?.total
    const total = Number(totalRaw)

    if (!payload?.success || !Number.isFinite(total)) {
      throw new Error('invalid_api_payload')
    }

    result.value = {
      total,
      storageNumber: storageNumber.value,
      bundle: selectedBundle.bundle,
      bundleLabel: t(`pricing.calculator.bundles.${selectedBundle.labelKey}`)
    }
  } catch (error) {
    const message = String(error?.message || '')
    if (message.includes('Failed to fetch') || message.includes('NetworkError')) {
      errorMessage.value = t('pricing.calculator.errors.cors_or_network')
    } else {
      errorMessage.value = t('pricing.calculator.errors.api_failed')
    }
  } finally {
    loading.value = false
  }
}
</script>

<style lang="scss" scoped>
.calculator {
  display: flex;
  flex-direction: column;
  gap: rem(18);
  padding: 0 fluid(80, 20) rem(64);
}

.calculator-eyebrow {
  margin: 0;
  font-size: rem(14);
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  opacity: 0.55;
}

.calculator-text {
  max-width: rem(980);
  margin: 0;
  opacity: 0.76;
}

.calculator-form {
  display: flex;
  flex-direction: column;
  gap: rem(18);
  max-width: rem(1080);
}

.calculator-group {
  display: flex;
  flex-direction: column;
  gap: rem(12);
  margin: 0;
  padding: rem(18);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: rem(20);

  legend {
    padding: 0 rem(8);
    font-weight: 700;
  }
}

.calculator-options {
  display: flex;
  flex-wrap: wrap;
  gap: rem(14);
}

.calculator-option {
  display: flex;
  align-items: center;
  gap: rem(8);
}

.calculator-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: rem(14);

  @include bp-lg {
    grid-template-columns: repeat(2, 1fr);
  }

  @include bp-md {
    grid-template-columns: 1fr;
  }
}

.calculator-field {
  display: flex;
  flex-direction: column;
  gap: rem(8);

  input,
  select {
    width: 100%;
    border-radius: rem(14);
    border: 1px solid rgba(255, 255, 255, 0.12);
    background: rgba(255, 255, 255, 0.04);
    color: $color-text;
    padding: rem(12) rem(14);
  }
}

.calculator-field-full {
  grid-column: 1 / -1;
}

.calculator-modules {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: rem(10);

  @include bp-md {
    grid-template-columns: 1fr;
  }
}

.calculator-storage,
.calculator-error {
  margin: 0;
}

.calculator-error {
  color: #f09a9a;
}

.calculator-actions {
  display: flex;
  flex-wrap: wrap;
  gap: rem(14);
}

.calculator-result {
  display: flex;
  flex-direction: column;
  gap: rem(12);
  max-width: rem(980);
  padding: rem(20);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: rem(20);
  background: rgba(255, 255, 255, 0.04);
}

.calculator-result-value,
.calculator-result-meta,
.calculator-disclaimer {
  margin: 0;
}

.calculator-result-actions {
  display: flex;
  flex-wrap: wrap;
  gap: rem(14);
  margin-top: rem(8);
}
</style>
