<template>
  <div class="use-cases-page">
    <section class="hero content">
      <p class="eyebrow">
        SAF in practice
      </p>

      <h1>Use Cases</h1>

      <p class="subtitle">
        Examples of how SAF helps organizations search, analyze, correlate, and visualize machine data across cybersecurity, IT operations, and business processes.
      </p>

      <p class="description">
        SAF is used in projects where organizations need to work with large volumes of distributed machine data, improve visibility, reduce investigation time, and connect technical events with business impact.
      </p>
    </section>

    <section class="overview content">
      <h2>Category overview</h2>

      <div class="pill-group">
        <button
          v-for="category in categoryOptions"
          :key="category"
          type="button"
          class="pill pill-filter"
          :class="{ 'pill-active': isCategoryActive(category) }"
          :aria-pressed="isCategoryActive(category)"
          @click="onCategoryClick(category)"
        >
          {{ category }}
        </button>
      </div>
    </section>

    <section class="catalog content">
      <h2>Use case catalog</h2>

      <div class="catalog-grid">
        <article
          v-for="item in filteredUseCases"
          :key="item.title"
          class="case-card"
        >
          <p class="case-meta">
            {{ item.meta }}
          </p>

          <h3>{{ item.title }}</h3>

          <p class="case-summary">
            {{ item.summary }}
          </p>

          <ul class="case-highlights">
            <li
              v-for="highlight in item.highlights"
              :key="highlight"
            >
              {{ highlight }}
            </li>
          </ul>
        </article>
      </div>
    </section>

    <section class="common content">
      <h2>What these projects have in common</h2>

      <ul class="common-list">
        <li>SAF connects data from different systems without forcing all analytics into one rigid tool.</li>
        <li>Security, IT operations, and business teams can work with the same machine data from different perspectives.</li>
        <li>Existing data collection infrastructure and historical data can often be reused.</li>
        <li>The platform is relevant when investigation speed, visibility, scalability, and cost control are important.</li>
        <li>SAF is useful when technical events need to be connected with business impact.</li>
      </ul>
    </section>

    <section class="final-cta content">
      <h2>Discuss a SAF use case for your organization</h2>

      <p>
        Harmony Technology can help discuss where SAF may fit in your data, security, monitoring, or operational analytics landscape in Japan.
      </p>
      
      <div class="final-cta-actions">
        <Button
          text="Start the conversation"
          to="/contact"
          :adaptable="false"
        />
        <Button
          text="View SAF overview"
          to="/saf"
        />
      </div>
    </section>
  </div>
</template>

<script setup>
const ALL_CATEGORIES = 'All Categories'

const useCases = [
  {
    title: 'SIEM migration from Microsoft Sentinel to SAF',
    meta: 'Cybersecurity / Online Services',
    summary: 'In the reference case, the team moved a live security workload from Sentinel to SAF while preserving investigation continuity. The project focused on lowering SIEM operating cost without losing correlation depth.',
    highlights: [
      'Migration completed as a production transition project.',
      'Reported timeline included a fast rollout cycle.',
      'Reported outcomes included a major cost reduction versus the previous stack.',
      'Detection and investigation scenarios were transferred to the new platform.'
    ]
  },
  {
    title: 'Security Data Lake for a financial regulator',
    meta: 'Cybersecurity / Finance',
    summary: 'The reference implementation created a centralized security data lake for supervisory and investigative needs. The project combined log collection, long-term storage, and cross-domain analysis support.',
    highlights: [
      'The project included ingestion from many security and infrastructure sources.',
      'Reported scope expanded from a small initial source set to a broad source landscape.',
      'Longer retention and searchability were key design goals.',
      'The platform was used to support regulator-facing visibility tasks.'
    ]
  },
  {
    title: 'SIEM migration from ArcSight to SAF',
    meta: 'Cybersecurity / Finance',
    summary: 'In the reference case, a financial organization replaced ArcSight with SAF to modernize SIEM operations. The migration prioritized performance growth and coverage expansion.',
    highlights: [
      'Reported throughput increased from the initial migration baseline.',
      'The project included growth to a much larger event-processing volume.',
      'Use case coverage expanded significantly after transition.',
      'Large internal user groups were supported in the target setup.'
    ]
  },
  {
    title: 'Anti-fraud for international retail',
    meta: 'Anti-fraud / Retail',
    summary: 'The reference project connected distributed business and operational signals for fraud analytics in retail operations. The goal was earlier anomaly detection across global business processes.',
    highlights: [
      'The case involved a large international operating footprint.',
      'Many business systems were connected for cross-process analysis.',
      'The project enabled broader fraud pattern correlation.',
      'Reported outcomes included stronger visibility into suspicious behavior chains.'
    ]
  },
  {
    title: 'Anti-fraud for consumer goods distribution',
    meta: 'Anti-fraud / Retail',
    summary: 'In this reference case, SAF supported anti-fraud analytics for a high-volume distribution environment. The project scaled around continuously growing data streams.',
    highlights: [
      'The implementation handled a very large source landscape.',
      'New data sources were added on a regular basis.',
      'A broad internal user base consumed analytics outputs.',
      'The project emphasized operational scalability and query performance.'
    ]
  },
  {
    title: 'Cybersecurity Situation Center for industrial holding',
    meta: 'Cybersecurity / Manufacturing',
    summary: 'The reference program established a group-level cybersecurity situation center across a diversified industrial organization. SAF was used to consolidate security visibility across distributed assets.',
    highlights: [
      'The scope included large-scale host and infrastructure coverage.',
      'Cross-subsidiary security monitoring was centralized for analysts.',
      'The project improved correlation across heterogeneous environments.',
      'Situation-center workflows were supported with unified machine data views.'
    ]
  },
  {
    title: 'Anti-fraud in HR processes',
    meta: 'Business Intelligence / Oil & Gas',
    summary: 'This reference case focused on anti-fraud and control analytics in HR-related workflows. SAF linked technical and process-level records to surface high-risk patterns.',
    highlights: [
      'The project integrated many internal enterprise systems.',
      'Large user populations were included in the analytical scope.',
      'Cross-process checks were built around HR and related operations.',
      'The implementation supported investigation of non-obvious process anomalies.'
    ]
  },
  {
    title: 'International airlines SIEM implementation',
    meta: 'Cybersecurity / Transport',
    summary: 'In the reference case, an airline group implemented a SIEM foundation with SAF across distributed offices and operational entities. The project addressed both central monitoring and global visibility.',
    highlights: [
      'Reported telemetry flow included sustained event processing from many sources.',
      'Regional and branch environments were connected into one monitoring model.',
      'The setup supported security operations and investigation readiness.',
      'The project emphasized stable ingestion and response-oriented visibility.'
    ]
  },
  {
    title: 'Anti-fraud for trading activities',
    meta: 'Anti-fraud / Manufacturing',
    summary: 'The reference project targeted fraud risk in trading and related operational activities. SAF was used to correlate activity traces across many systems and locations.',
    highlights: [
      'The scope included numerous business applications and branch entities.',
      'The project combined operational and transactional perspectives.',
      'Cross-system pattern detection was a key requirement.',
      'Reported outcomes included stronger risk visibility for internal control teams.'
    ]
  },
  {
    title: 'Preventive maintenance and pipeline diagnostics',
    meta: 'Business Intelligence / Oil & Gas',
    summary: 'In this reference case, SAF supported predictive and preventive analytics for large-scale pipeline and field operations. The implementation focused on turning machine telemetry into actionable maintenance insight.',
    highlights: [
      'The project included very large equipment and sensor coverage.',
      'Billions of historical measurements were part of the analytical baseline.',
      'Teams used machine data trends for early issue detection.',
      'Operational decisions were supported with data-driven diagnostics.'
    ]
  },
  {
    title: 'Operational performance monitoring',
    meta: 'Business Intelligence / Finance',
    summary: 'The reference case applied SAF to monitor process efficiency and operational KPIs. The project linked machine data and process metrics to improve performance management.',
    highlights: [
      'The setup included a broad parameter set for ongoing tracking.',
      'Historical depth was used for trend and deviation analysis.',
      'Teams monitored operational quality and process stability.',
      'The project supported continuous performance improvement cycles.'
    ]
  },
  {
    title: 'Internal-process anti-fraud for international bank',
    meta: 'Anti-fraud / Finance',
    summary: 'In the reference banking project, SAF supported anti-fraud analytics across internal processes and controls. The implementation connected high-volume events with process-level context.',
    highlights: [
      'The project handled sustained event flow in a large enterprise environment.',
      'Many internal systems were integrated into the analytical perimeter.',
      'Fraud-risk scenarios were mapped to process and user behavior signals.',
      'Reported outcomes included stronger internal control observability.'
    ]
  },
  {
    title: 'Call center optimization',
    meta: 'Business Intelligence / Telecom',
    summary: 'This reference case used SAF to optimize call center operations through machine-data-driven analysis. The project focused on quality, efficiency, and resource balancing.',
    highlights: [
      'The scope included a large operator workforce.',
      'Operational telemetry and process records were analyzed together.',
      'Management teams gained clearer visibility into service bottlenecks.',
      'The project supported data-backed improvement actions.'
    ]
  },
  {
    title: 'SOC operation methodology for telecom operator',
    meta: 'Cybersecurity / Telecom',
    summary: 'In the reference telecom case, SAF supported SOC workflow formalization and day-to-day operational methodology. The implementation aligned event handling, correlation, and response practices.',
    highlights: [
      'The project structured SOC processes around repeatable use cases.',
      'Analyst workflows were standardized for faster triage.',
      'Operational visibility improved across network and security signals.',
      'The case emphasized practical SOC execution, not only tooling.'
    ]
  },
  {
    title: 'Network and server infrastructure monitoring',
    meta: 'IT Operations / Finance',
    summary: 'The reference deployment addressed large-scale infrastructure monitoring with SAF. The project combined network and server visibility in one operational view.',
    highlights: [
      'Reported scope included thousands of network devices and servers.',
      'The setup consolidated data from heterogeneous infrastructure domains.',
      'Operations teams used shared views for incident and performance analysis.',
      'The project focused on faster issue detection and troubleshooting context.'
    ]
  },
  {
    title: 'Data Lake migration from Elastic Stack to SAF',
    meta: 'Data Lake / IT Operations / Cybersecurity',
    summary: 'In the reference migration, the organization moved data lake and analytical workloads from Elastic Stack to SAF. The project targeted better control over scale, cost, and cross-domain analytics.',
    highlights: [
      'Migration covered existing collection and analytical use patterns.',
      'Security and IT data domains were consolidated in one platform model.',
      'The project focused on preserving continuity during platform transition.',
      'Reported outcomes included improved operational manageability.'
    ]
  },
  {
    title: 'Network Access Control for chemical holding',
    meta: 'IT Operations / Cybersecurity / Manufacturing',
    summary: 'The reference case used SAF in a network access control context for a large chemical holding. The implementation combined asset visibility and access-monitoring perspectives.',
    highlights: [
      'Reported scope covered a large inventory of hardware and software assets.',
      'Network control logic was supported with centralized machine-data analysis.',
      'Operational and security teams shared a common visibility layer.',
      'The project improved tracking of access-related anomalies and policy adherence.'
    ]
  }
]

const selectedCategory = ref(ALL_CATEGORIES)

const normalizeCategory = (value) => String(value || '').toLowerCase().trim()

const splitCategories = (categoryLabel) => {
  return String(categoryLabel || '')
    .split('/')
    .map((item) => item.trim())
    .filter(Boolean)
}

const categoryOptions = computed(() => {
  const categories = useCases.flatMap((item) => splitCategories(item.meta))

  return [ALL_CATEGORIES, ...Array.from(new Set(categories))]
})

const isCategoryActive = (category) => {
  return normalizeCategory(selectedCategory.value) === normalizeCategory(category)
}

const onCategoryClick = (category) => {
  selectedCategory.value = category
}

const filteredUseCases = computed(() => {
  if (isCategoryActive(ALL_CATEGORIES)) return useCases

  return useCases.filter((item) =>
    splitCategories(item.meta).some(
      (category) => normalizeCategory(category) === normalizeCategory(selectedCategory.value)
    )
  )
})
</script>

<style lang="scss" scoped>
.use-cases-page {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0;
  overflow: hidden;
  background-color: #000212;

  > * {
    position: relative;
    z-index: 1;
  }

  &::before,
  &::after {
    position: absolute;
    left: 50%;
    content: '';
    width: rem(1840);
    border-radius: 50%;
    transform: translateX(-50%);
    pointer-events: none;
    z-index: 0;
  }

  &::before {
    top: rem(900);
    height: rem(1800);
    background: radial-gradient(
      ellipse at center,
      rgba(7, 63, 61, 0.65) 0%,
      rgba(7, 63, 61, 0.3) 44%,
      rgba(7, 63, 61, 0) 70%
    );
    filter: blur(rem(40));
    transform: translateX(-50%) scaleY(-1);
  }

  &::after {
    top: rem(3600);
    height: rem(2200);
    background: radial-gradient(
      ellipse at center,
      rgba(7, 63, 61, 0.6) 0%,
      rgba(7, 63, 61, 0.28) 38%,
      rgba(7, 63, 61, 0) 66%
    );
    filter: blur(rem(40));
    transform: translateX(-50%) scaleY(-1);
  }

  @include bp-md {
    &::before,
    &::after {
      width: rem(1420);
    }
  }
}

.hero,
.overview,
.catalog,
.common,
.final-cta {
  display: flex;
  flex-direction: column;
  gap: rem(24);
  width: min(100%, rem(1280));
  margin: 0 auto;
  padding: rem(96) fluid(80, 20) 0;
}

.hero {
  min-height: rem(760);
  justify-content: center;
  padding-top: rem(160);
  padding-bottom: rem(54);
}

.eyebrow {
  margin: 0;
  color: #adadad;
  font-size: rem(20);
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  opacity: 1;
}

h1 {
  max-width: rem(1100);
  font-size: fluid(72, 44);
  line-height: fluid(70, 48);
  letter-spacing: -1px;
}

h2 {
  font-size: fluid(60, 36);
  line-height: 1.2;
  letter-spacing: -0.4px;
}

h3 {
  font-size: rem(28);
  font-weight: 500;
  line-height: 1.3;
  letter-spacing: -0.4px;
}

.subtitle,
.description {
  max-width: rem(1080);
  margin: 0;
  color: #adadad;
  font-size: rem(22);
  font-weight: 500;
  line-height: rem(32);
  opacity: 0.95;
}

.description {
  max-width: rem(1020);
  opacity: 0.86;
}

.pill-group {
  display: flex;
  flex-wrap: wrap;
  gap: rem(14);
}

.pill {
  padding: rem(10) rem(18);
  border-radius: rem(999);
  border: 1px solid rgba(113, 255, 195, 0.2);
  background: rgba(1, 180, 235, 0.1);
  color: #ffffff;
  font-size: rem(16);
  line-height: rem(24);
}

.pill-filter {
  appearance: none;
  font: inherit;
  line-height: inherit;
  cursor: pointer;
  transition: border-color $transition-time, background-color $transition-time, color $transition-time, opacity $transition-time;

  &:hover,
  &:focus-visible {
    border-color: rgba(255, 255, 255, 0.45);
    background: rgba(255, 255, 255, 0.08);
  }

  &:focus-visible {
    outline: 2px solid rgba(113, 255, 195, 0.45);
    outline-offset: 2px;
  }
}

.pill-active {
  border-color: rgba(255, 255, 255, 0.48);
  background: rgba(255, 255, 255, 0.12);
  color: #ffffff;
}

.pill-secondary {
  border-color: rgba(255, 255, 255, 0.24);
  background: rgba(255, 255, 255, 0.06);
}

.catalog-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: rem(24);

  @include bp-lg {
    grid-template-columns: 1fr;
  }
}

.case-card {
  display: flex;
  flex-direction: column;
  gap: rem(16);
  padding: rem(36) rem(32);
  border-radius: rem(32);
  background: radial-gradient(91.71% 91.71% at 100% 100%, rgba(255, 255, 255, 0.08) 0%, rgba(3, 0, 20, 0) 100%);
  border: 1px solid rgba(113, 255, 195, 0.2);
  box-shadow: 0 rem(4) rem(4) rgba(0, 0, 0, 0.25);
}

.case-meta {
  margin: 0;
  color: #adadad;
  font-size: rem(16);
  line-height: rem(26);
  letter-spacing: 0.04em;
  text-transform: uppercase;
  opacity: 0.9;
}

.case-summary {
  margin: 0;
  color: #adadad;
  font-size: rem(22);
  line-height: rem(32);
  opacity: 0.95;
}

.case-highlights {
  margin: 0;
  padding-left: rem(22);
  display: flex;
  flex-direction: column;
  gap: rem(10);
  color: #ffffff;
  font-size: rem(20);
  line-height: rem(30);
  opacity: 0.92;

  li::marker {
    color: rgba(113, 255, 195, 0.82);
  }
}

.common-list {
  margin: 0;
  padding-left: rem(24);
  display: flex;
  flex-direction: column;
  gap: rem(14);
  max-width: rem(1120);
  color: #adadad;
  font-size: rem(22);
  line-height: rem(32);
  opacity: 0.95;

  li::marker {
    color: rgba(113, 255, 195, 0.82);
  }
}

.final-cta p {
  max-width: rem(980);
  margin: 0;
  color: #adadad;
  font-size: rem(22);
  line-height: rem(32);
  opacity: 0.95;
}

.final-cta-actions {
  display: flex;
  flex-wrap: wrap;
  gap: rem(20);
  margin-top: rem(16);
}

.final-cta-actions :deep(.button) {
  width: rem(340);
  min-height: rem(72);
  border-radius: rem(24);
  padding: rem(19) rem(20);
  font-size: rem(20);
  line-height: rem(22);
}

.final-cta-actions :deep(.button:nth-child(2)) {
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid #ffffff;
  color: #ffffff;
  box-shadow: 0 rem(4) rem(4) rgba(0, 0, 0, 0.25);
}

.final-cta-actions :deep(.button:nth-child(2):hover),
.final-cta-actions :deep(.button:nth-child(2):focus-visible) {
  color: #ffffff;
  border-color: rgba(255, 255, 255, 0.78);
}

@include bp-md {
  .hero,
  .overview,
  .catalog,
  .common,
  .final-cta {
    gap: rem(20);
    padding-top: rem(76);
  }

  .hero {
    min-height: rem(600);
    padding-top: rem(128);
  }

  .subtitle,
  .description,
  .case-summary,
  .common-list,
  .final-cta p {
    font-size: rem(20);
    line-height: rem(30);
  }

  .case-highlights {
    font-size: rem(18);
    line-height: rem(28);
  }

  .case-card {
    padding: rem(30) rem(24);
  }
}

@include bp-sm {
  .hero,
  .overview,
  .catalog,
  .common,
  .final-cta {
    padding-top: rem(64);
  }

  .hero {
    min-height: auto;
    padding-top: rem(116);
    padding-bottom: rem(42);
  }

  .eyebrow {
    font-size: rem(14);
  }

  .subtitle,
  .description,
  .case-summary,
  .common-list,
  .final-cta p {
    font-size: rem(18);
    line-height: rem(28);
  }

  .case-meta {
    font-size: rem(14);
    line-height: rem(22);
  }

  .case-highlights {
    font-size: rem(16);
    line-height: rem(24);
  }

  .final-cta-actions :deep(.button) {
    width: 100%;
    min-height: rem(64);
    font-size: rem(18);
  }
}
</style>
