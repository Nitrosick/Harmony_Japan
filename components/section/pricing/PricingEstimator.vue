<template>
  <section
    id="pricing-estimator"
    class="estimator content"
  >
    <article class="step-card">
      <p class="step-label">
        Step 1
      </p>
      <h2 class="step-title">
        Review the licensing model
      </h2>
      <p class="step-text">
        The SAF license estimate is primarily based on raw data volume, selected bundle and modules, and deployment/support scope confirmed during quotation.
      </p>
      <div class="model-points">
        <div class="model-point">
          <h3>Raw Data Volume</h3>
          <p>Storage is normalized to TB for pricing calculation across all supported input modes.</p>
        </div>
        <div class="model-point">
          <h3>Bundle and Modules</h3>
          <p>Bundle direction defines a baseline scope. Custom lets you choose modules manually.</p>
        </div>
        <div class="model-point">
          <h3>Commercial Confirmation</h3>
          <p>This price is a preliminary estimate and is not a public offer.</p>
        </div>
      </div>
    </article>

    <article class="step-card">
      <p class="step-label">
        Step 2
      </p>
      <h2 class="step-title">
        Estimate data volume
      </h2>
      <fieldset class="mode-fieldset">
        <legend>Calculation mode</legend>
        <div class="mode-grid">
          <label
            v-for="option in modeOptions"
            :key="option.value"
            class="mode-option"
            :class="{ active: form.mode === option.value }"
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

      <div class="fields-grid">
        <label
          v-if="form.mode === 'direct_tb'"
          class="field"
        >
          <span>Raw Data Volume (TB)</span>
          <input
            v-model="form.direct_tb"
            type="number"
            step="0.01"
            min="0"
            placeholder="Enter TB"
          >
        </label>

        <template v-if="form.mode === 'flow'">
          <label class="field">
            <span>Daily ingest rate (GB/day)</span>
            <input
              v-model="form.flow_gb_day"
              type="number"
              step="0.01"
              min="0"
              placeholder="Enter GB/day"
            >
          </label>
          <label class="field">
            <span>Retention days</span>
            <input
              v-model="form.flow_retention_days"
              type="number"
              step="1"
              min="0"
              placeholder="Enter retention days"
            >
          </label>
        </template>

        <template v-if="form.mode === 'eps'">
          <label class="field">
            <span>EPS</span>
            <input
              v-model="form.eps"
              type="number"
              step="0.01"
              min="0"
              placeholder="Enter EPS"
            >
          </label>
          <label class="field">
            <span>Average event size (bytes)</span>
            <input
              v-model="form.avg_event_size"
              type="number"
              step="1"
              min="0"
              placeholder="Enter average event size"
            >
          </label>
          <label class="field">
            <span>Retention days</span>
            <input
              v-model="form.eps_retention_days"
              type="number"
              step="1"
              min="0"
              placeholder="Enter retention days"
            >
          </label>
        </template>
      </div>

      <p class="storage-line">
        Calculated storage volume: <strong>{{ storageNumberDisplay }}</strong>
      </p>
    </article>

    <article class="step-card">
      <p class="step-label">
        Step 3
      </p>
      <h2 class="step-title">
        Select bundle and modules
      </h2>

      <div class="bundle-grid">
        <button
          v-for="bundle in bundleOptions"
          :key="bundle.value"
          type="button"
          class="bundle-btn"
          :class="{ active: form.bundle === bundle.value }"
          @click="form.bundle = bundle.value"
        >
          {{ bundle.label }}
        </button>
      </div>

      <p class="helper-note">
        For Security, IT Ops, and Compliance, module scope is preselected and locked. For Custom, choose modules manually.
      </p>

      <div class="modules-grid">
        <button
          v-for="module in modulesCatalog"
          :key="module.id"
          type="button"
          class="module-card"
          :class="moduleStateClass(module)"
          :disabled="!isModuleToggleAllowed(module)"
          @click="toggleModule(module)"
        >
          <div class="module-top">
            <strong>{{ module.label }}</strong>
            <span
              v-if="module.id === 'core'"
              class="module-tag required"
            >
              Required
            </span>
            <span
              v-else-if="module.visualOnly"
              class="module-tag"
            >
              Visual only
            </span>
          </div>
          <div class="module-badges">
            <span
              v-for="badge in module.badges"
              :key="badge"
              class="badge"
            >
              {{ badge }}
            </span>
          </div>
          <p
            v-if="module.visualOnly"
            class="module-note"
          >
            Included in request summary, excluded from pricing API calculation.
          </p>
        </button>
      </div>

      <p class="helper-note helper-note-small">
        Some advanced modules may require commercial confirmation and are included in the request summary.
      </p>
    </article>

    <article class="result-card">
      <div class="result-head">
        <h2>Estimated annual license cost</h2>
        <p>USD</p>
      </div>

      <p
        v-if="errorMessage"
        class="error-line"
      >
        {{ errorMessage }}
      </p>

      <dl class="result-grid">
        <div>
          <dt>Bundle</dt>
          <dd>{{ selectedBundleLabel || '-' }}</dd>
        </div>
        <div>
          <dt>Storage volume</dt>
          <dd>{{ storageNumberDisplay }}</dd>
        </div>
        <div class="result-full">
          <dt>Selected modules</dt>
          <dd>{{ selectedModuleLabelsDisplay }}</dd>
        </div>
      </dl>

      <div class="result-price">
        <span>Estimated annual license cost</span>
        <strong>{{ result ? formatUsd(result.total) : '-' }}</strong>
      </div>

      <p class="disclaimer">
        This price is a preliminary estimate and is not a public offer.
      </p>

      <div class="result-actions">
        <Button
          :text="loading ? 'Calculating...' : 'Calculate estimate'"
          :adaptable="false"
          :disabled="loading"
          @click="onCalculate"
        />
        <Button
          text="Request a quotation"
          :to="pricingQuoteLink"
          :adaptable="false"
          :disabled="!result"
        />
      </div>
    </article>
  </section>
</template>

<script setup>
const API_URL = '/api/saf-pricing'

const bundleConfig = {
  siem: { calcName: 'CheckSAP', bundle: 'siem', flag: 'sap0', label: 'Security' },
  it_ops: { calcName: 'CheckITOps', bundle: 'it', flag: 'itops0', label: 'IT Ops' },
  compliance: { calcName: 'CheckCompliance', bundle: 'bi', flag: 'compliance0', label: 'Compliance' },
  custom: { calcName: 'CheckCustom', bundle: 'custom', flag: 'safcustom0', label: 'Custom' }
}

const bundlePresets = {
  siem: ['core', 'IM0', 'inventory0', 'cs0', 'mitre', 'ai_security'],
  it_ops: ['core', 'IM0', 'inventory0', 'service_monitor_toolkit', 'network0', 'servers0', 'msad0', 'msexch0', 'netmap0'],
  compliance: ['core', 'IM0', 'inventory0', 'compl0'],
  custom: ['core']
}

const modulesCatalog = [
  { id: 'core', label: 'Core', apiKey: null, visualOnly: false, badges: ['Security', 'IT Ops', 'Compliance', 'Custom'] },
  { id: 'IM0', label: 'Incident Manager', apiKey: 'IM0', visualOnly: false, badges: ['Security', 'IT Ops', 'Compliance'] },
  { id: 'inventory0', label: 'Inventory', apiKey: 'inventory0', visualOnly: false, badges: ['Security', 'IT Ops', 'Compliance'] },
  { id: 'cs0', label: 'Cyber Security', apiKey: 'cs0', visualOnly: false, badges: ['Security'] },
  { id: 'network0', label: 'Network', apiKey: 'network0', visualOnly: false, badges: ['IT Ops'] },
  { id: 'servers0', label: 'Servers', apiKey: 'servers0', visualOnly: false, badges: ['IT Ops'] },
  { id: 'msad0', label: 'Microsoft AD', apiKey: 'msad0', visualOnly: false, badges: ['IT Ops'] },
  { id: 'msexch0', label: 'Microsoft Exchange', apiKey: 'msexch0', visualOnly: false, badges: ['IT Ops'] },
  { id: 'netmap0', label: 'NetMap', apiKey: 'netmap0', visualOnly: false, badges: ['IT Ops'] },
  { id: 'compl0', label: 'Compliance', apiKey: 'compl0', visualOnly: false, badges: ['Compliance'] },
  { id: 'service_monitor_toolkit', label: 'Service Monitor Toolkit', apiKey: null, visualOnly: true, badges: ['IT Ops', 'Custom'] },
  { id: 'mitre', label: 'MITRE ATT&CK', apiKey: null, visualOnly: true, badges: ['Security', 'Custom'] },
  { id: 'ai_security', label: 'AI Security', apiKey: null, visualOnly: true, badges: ['Security', 'Custom'] }
]

const form = reactive({
  mode: 'direct_tb',
  direct_tb: '',
  flow_gb_day: '',
  flow_retention_days: '',
  eps: '',
  avg_event_size: '',
  eps_retention_days: '',
  bundle: 'siem',
  customModules: []
})

const loading = ref(false)
const errorMessage = ref('')
const result = ref(null)

const modeOptions = [
  { value: 'direct_tb', label: 'By Data Volume (TB)' },
  { value: 'flow', label: 'By Daily Ingest Rate (GB/day)' },
  { value: 'eps', label: 'By EPS' }
]

const bundleOptions = [
  { value: 'siem', label: 'Security' },
  { value: 'it_ops', label: 'IT Ops' },
  { value: 'compliance', label: 'Compliance' },
  { value: 'custom', label: 'Custom' }
]

const parsePositiveNumber = (value) => {
  const parsed = Number(value)
  return Number.isFinite(parsed) && parsed > 0 ? parsed : null
}

const round2 = (value) => Math.round(value * 100) / 100

const storageNumber = computed(() => {
  if (form.mode === 'direct_tb') {
    const directTb = parsePositiveNumber(form.direct_tb)
    return directTb ? round2(directTb) : null
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

const selectedModuleIds = computed(() => {
  if (!form.bundle) return []

  if (form.bundle !== 'custom') {
    return bundlePresets[form.bundle] || []
  }

  return ['core', ...form.customModules]
})

const selectedModules = computed(() => (
  modulesCatalog.filter(module => selectedModuleIds.value.includes(module.id))
))

const selectedModuleLabelsDisplay = computed(() => {
  if (!selectedModules.value.length) return '-'
  return selectedModules.value.map(module => module.label).join(', ')
})

const selectedBundleLabel = computed(() => (
  form.bundle ? bundleConfig[form.bundle]?.label || '' : ''
))

const selectedApiModules = computed(() => (
  selectedModules.value.filter(module => module.apiKey).map(module => module.apiKey)
))

const formatUsd = (value) => (
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0
  }).format(value)
)

const pricingSummary = computed(() => {
  if (!result.value) return ''
  return `Bundle: ${selectedBundleLabel.value}; Storage: ${result.value.storageNumber.toFixed(2)} TB; Estimate: ${formatUsd(result.value.total)}; Modules: ${selectedModuleLabelsDisplay.value}`
})

const pricingQuoteLink = computed(() => (
  result.value
    ? `/contact?inquiry=Pricing&pricing=${encodeURIComponent(pricingSummary.value)}`
    : '/contact?inquiry=Pricing'
))

const isModuleSelected = (module) => selectedModuleIds.value.includes(module.id)

const isModuleToggleAllowed = (module) => (
  form.bundle === 'custom' && module.id !== 'core'
)

const moduleStateClass = (module) => ({
  active: isModuleSelected(module),
  locked: !isModuleToggleAllowed(module),
  inactive: !isModuleSelected(module)
})

const toggleModule = (module) => {
  if (!isModuleToggleAllowed(module)) return

  const target = form.customModules
  const index = target.indexOf(module.id)
  if (index >= 0) {
    target.splice(index, 1)
    return
  }
  target.push(module.id)
}

watch(
  () => [
    form.mode,
    form.direct_tb,
    form.flow_gb_day,
    form.flow_retention_days,
    form.eps,
    form.avg_event_size,
    form.eps_retention_days,
    form.bundle,
    form.customModules.join('|')
  ],
  () => {
    if (loading.value) return
    result.value = null
    errorMessage.value = ''
  }
)

const validate = () => {
  if (!form.bundle) {
    errorMessage.value = 'Please select a bundle.'
    return false
  }

  if (!storageNumber.value) {
    errorMessage.value = 'Storage volume could not be calculated. Check the selected mode inputs.'
    return false
  }

  if (storageNumber.value <= 0) {
    errorMessage.value = 'Please enter positive numeric values.'
    return false
  }

  return true
}

const onCalculate = async () => {
  if (loading.value) return

  errorMessage.value = ''
  result.value = null

  if (!validate()) return

  const selectedBundle = bundleConfig[form.bundle]
  if (!selectedBundle) {
    errorMessage.value = 'Please select a bundle.'
    return
  }

  const data = {
    storageNumber: { type: 'number', value: storageNumber.value },
    bundle: { type: 'string', value: selectedBundle.bundle },
    isStorageWay: { type: 'string', value: '1' },
    [selectedBundle.flag]: { type: 'checkbox', value: true }
  }

  selectedApiModules.value.forEach((moduleApiKey) => {
    data[moduleApiKey] = { type: 'checkbox', value: true }
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
      storageNumber: storageNumber.value
    }
  } catch (error) {
    const message = String(error?.message || '')
    if (message.includes('Failed to fetch') || message.includes('NetworkError')) {
      errorMessage.value = 'The calculator request could not be completed from your browser (network or CORS restriction).'
    } else {
      errorMessage.value = 'Unable to calculate estimate right now. Please try again or contact Harmony Technology.'
    }
  } finally {
    loading.value = false
  }
}
</script>

<style lang="scss" scoped>
.estimator {
  display: flex;
  flex-direction: column;
  gap: rem(24);
  max-width: rem(1280);
  padding: 0 fluid(80, 20) rem(32);
}

.step-card,
.result-card {
  display: flex;
  flex-direction: column;
  gap: rem(18);
  padding: rem(30);
  border: 1px solid rgba(131, 221, 210, 0.28);
  border-radius: rem(32);
  background:
    radial-gradient(circle at top right, rgba(54, 158, 164, 0.2), transparent 48%),
    linear-gradient(180deg, rgba(10, 22, 44, 0.9) 0%, rgba(3, 10, 24, 0.88) 100%);
  box-shadow: 0 rem(30) rem(70) rgba(0, 0, 0, 0.26);
}

.step-label {
  margin: 0;
  font-size: rem(13);
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(154, 242, 222, 0.9);
}

.step-title {
  margin: 0;
  font-size: fluid(36, 28);
  line-height: 1.15;
}

.step-text,
.helper-note,
.disclaimer {
  margin: 0;
  font-size: rem(16);
  line-height: 1.55;
  opacity: 0.84;
}

.helper-note-small {
  font-size: rem(14);
  opacity: 0.72;
}

.model-points {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: rem(14);

  @include bp-lg {
    grid-template-columns: 1fr;
  }
}

.model-point {
  padding: rem(16) rem(18);
  border: 1px solid rgba(137, 212, 204, 0.26);
  border-radius: rem(22);
  background: rgba(9, 20, 37, 0.65);

  h3 {
    margin: 0 0 rem(6);
    font-size: rem(19);
  }

  p {
    margin: 0;
    opacity: 0.8;
    line-height: 1.52;
  }
}

.mode-fieldset {
  margin: 0;
  padding: 0;
  border: 0;

  legend {
    margin-bottom: rem(10);
    font-weight: 600;
    opacity: 0.9;
  }
}

.mode-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: rem(10);

  @include bp-lg {
    grid-template-columns: 1fr;
  }
}

.mode-option {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: rem(56);
  padding: rem(12) rem(14);
  border: 1px solid rgba(117, 186, 205, 0.35);
  border-radius: rem(999);
  background: rgba(9, 20, 37, 0.6);
  color: rgba(236, 251, 255, 0.88);
  text-align: center;
  transition: border-color $transition-time, background-color $transition-time, color $transition-time;
  cursor: pointer;

  input {
    position: absolute;
    opacity: 0;
    pointer-events: none;
  }

  &.active {
    border-color: rgba(166, 243, 227, 0.85);
    background: rgba(40, 116, 114, 0.34);
    color: #fff;
  }
}

.fields-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: rem(12);

  @include bp-lg {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @include bp-md {
    grid-template-columns: 1fr;
  }
}

.field {
  display: flex;
  flex-direction: column;
  gap: rem(8);

  span {
    opacity: 0.92;
  }

  input {
    width: 100%;
    min-height: rem(56);
    padding: rem(12) rem(16);
    border: 1px solid rgba(126, 190, 198, 0.35);
    border-radius: rem(20);
    background: rgba(7, 18, 35, 0.8);
    color: $color-text;
    font: inherit;
  }
}

.storage-line {
  margin: 0;
  font-size: rem(16);
}

.bundle-grid {
  display: flex;
  flex-wrap: wrap;
  gap: rem(10);
}

.bundle-btn {
  min-height: rem(52);
  padding: rem(11) rem(22);
  border: 1px solid rgba(120, 198, 208, 0.4);
  border-radius: rem(999);
  background: rgba(9, 20, 37, 0.62);
  color: $color-text;
  font: inherit;
  font-weight: 600;
  cursor: pointer;
  transition: border-color $transition-time, background-color $transition-time, color $transition-time;

  &.active {
    border-color: rgba(166, 243, 227, 0.9);
    background: rgba(41, 121, 118, 0.34);
  }
}

.modules-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: rem(12);

  @include bp-lg {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @include bp-md {
    grid-template-columns: 1fr;
  }
}

.module-card {
  display: flex;
  flex-direction: column;
  gap: rem(11);
  min-height: rem(150);
  padding: rem(16);
  border: 1px solid rgba(122, 197, 203, 0.28);
  border-radius: rem(24);
  background: rgba(8, 19, 35, 0.66);
  color: $color-text;
  text-align: left;
  transition: border-color $transition-time, background-color $transition-time, opacity $transition-time;

  &.active {
    border-color: rgba(160, 244, 224, 0.9);
    background: linear-gradient(180deg, rgba(31, 84, 90, 0.45), rgba(11, 35, 56, 0.72));
  }

  &.inactive {
    opacity: 0.66;
  }

  &.locked {
    cursor: default;
  }
}

.module-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: rem(10);
}

.module-tag {
  padding: rem(5) rem(10);
  border-radius: rem(999);
  background: rgba(71, 124, 150, 0.33);
  font-size: rem(12);
  font-weight: 600;
  white-space: nowrap;
}

.module-tag.required {
  background: rgba(53, 139, 118, 0.45);
}

.module-badges {
  display: flex;
  flex-wrap: wrap;
  gap: rem(8);
}

.badge {
  display: inline-flex;
  align-items: center;
  min-height: rem(26);
  padding: rem(3) rem(10);
  border: 1px solid rgba(135, 187, 213, 0.38);
  border-radius: rem(999);
  font-size: rem(12);
  opacity: 0.9;
}

.module-note {
  margin: 0;
  font-size: rem(12);
  line-height: 1.45;
  opacity: 0.76;
}

.result-head {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: rem(12);

  h2,
  p {
    margin: 0;
  }

  p {
    opacity: 0.72;
    font-weight: 600;
  }
}

.result-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: rem(14);
  margin: 0;

  @include bp-md {
    grid-template-columns: 1fr;
  }

  dt {
    margin: 0 0 rem(6);
    opacity: 0.72;
    font-size: rem(14);
  }

  dd {
    margin: 0;
    font-size: rem(18);
  }
}

.result-full {
  grid-column: 1 / -1;
}

.result-price {
  display: flex;
  flex-direction: column;
  gap: rem(8);
  padding: rem(20);
  border: 1px solid rgba(151, 232, 214, 0.4);
  border-radius: rem(24);
  background: linear-gradient(180deg, rgba(23, 72, 76, 0.46), rgba(7, 21, 41, 0.78));

  span {
    font-size: rem(15);
    opacity: 0.86;
  }

  strong {
    font-size: fluid(44, 32);
    line-height: 1.1;
  }
}

.result-actions {
  display: flex;
  flex-wrap: wrap;
  gap: rem(12);
}

.error-line {
  margin: 0;
  color: #f4a6a6;
}
</style>
