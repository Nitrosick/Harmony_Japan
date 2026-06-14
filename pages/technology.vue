<template>
  <div class="technology-page">
    <section class="hero section content">
      <p class="eyebrow">SAF Technology</p>
      <h1>Search Anywhere Framework for distributed enterprise data</h1>
      <p class="lead">
        SAF is designed to work across existing datastores, log platforms, databases, monitoring tools and security systems without forcing all data into one storage first. It provides a unified search and analytics layer for IT operations, cybersecurity and business data.
      </p>
    </section>

    <section class="section content">
      <article class="feature-card">
        <h2>Analyze data where it already lives</h2>
        <p>
          SAF allows organizations to reuse current enterprise datastores such as Hadoop, Elasticsearch, OpenSearch, ClickHouse, PostgreSQL, MS SQL and other connected systems. This is the core idea of Search Anywhere: building a transparent search and analytics layer across distributed sources without starting from a full reindexing or migration project.
        </p>
        <p>
          By layering analytics over existing data sources, SAF can help consolidate IT operations, cybersecurity and business data into one analytical experience. This can reduce duplication of storage, simplify investigations and support a more flexible enterprise data architecture.
        </p>

        <div class="visual-placeholder">
          <video
            class="technology-video"
            src="/videos/search-anywhere-video.mp4"
            autoplay
            muted
            loop
            controls
            playsinline
            preload="metadata"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </article>
    </section>

    <section class="section content">
      <h2>Built for high-volume enterprise environments</h2>
      <div class="metrics-grid">
        <article
          v-for="card in metricCards"
          :key="card.metric"
          class="metric-card"
        >
          <p class="metric">{{ card.metric }}</p>
          <h3>{{ card.label }}</h3>
          <p>{{ card.text }}</p>
        </article>
      </div>
    </section>

    <section class="section content">
      <article class="feature-card">
        <h2>From machine data to corporate knowledge</h2>

        <div class="visual-placeholder">
          <video
            class="technology-video"
            src="/videos/saf.mp4"
            autoplay
            muted
            loop
            controls
            playsinline
            preload="metadata"
          >
            Your browser does not support the video tag.
          </video>
        </div>

        <p>
          SAF is not limited to logs and metrics. The platform can connect operational data with documents, procedures, knowledge bases and other context sources, helping teams investigate incidents, understand dependencies and reuse corporate knowledge.
        </p>

        <div class="concept-grid">
          <article
            v-for="item in contextCards"
            :key="item.title"
            class="concept-item"
          >
            <h3>{{ item.title }}</h3>
            <p>{{ item.text }}</p>
          </article>
        </div>
      </article>
    </section>

    <section class="section content">
      <h2>Why SAF</h2>
      <div class="why-grid">
        <article
          v-for="item in whyCards"
          :key="item.title"
          class="small-card"
        >
          <h3>{{ item.title }}</h3>
          <p>{{ item.text }}</p>
        </article>
      </div>
    </section>

    <section class="section content">
      <h2>Key technology capabilities</h2>
      <div class="capability-list">
        <article
          v-for="item in capabilities"
          :key="item.title"
          class="capability-row"
        >
          <h3>{{ item.title }}</h3>
          <p>{{ item.text }}</p>
        </article>
      </div>
    </section>

    <section class="section content cta-wrap">
      <article class="feature-card cta-card">
        <h2>Evaluate SAF for your data environment</h2>
        <p>
          If your organization already has valuable data distributed across multiple platforms, SAF can be assessed as an analytical layer before committing to large-scale migration or tool replacement.
        </p>
        <div class="hero-actions">
          <Button
            text="See SAF overview"
            to="/saf"
            :adaptable="false"
          />
          <Button
            text="Contact us"
            to="/contact?inquiry=SAF"
          />
        </div>
      </article>
    </section>
  </div>
</template>

<script setup>
const metricCards = [
  {
    metric: '>1PB/day',
    label: 'Data indexing',
    text: 'Cluster-scalable architecture designed for high-volume enterprise data environments.'
  },
  {
    metric: '100+',
    label: 'Commands and operations',
    text: 'SAF search language helps build flexible pipelines, transformations and analytical workflows.'
  },
  {
    metric: '>150',
    label: 'Correlation searches',
    text: 'Predefined and customizable correlation searches can support SIEM, IT operations, DevOps monitoring and business scenarios.'
  }
]

const contextCards = [
  {
    title: 'Data',
    text: 'Machine data from distributed systems, applications, infrastructure and security tools.'
  },
  {
    title: 'Features',
    text: 'Analytics, dashboards, search language, correlation logic and operational workflows.'
  },
  {
    title: 'Use cases',
    text: 'IT operations, cybersecurity, observability, compliance support and business analytics.'
  }
]

const whyCards = [
  {
    title: 'Work across existing data sources',
    text: 'Reuse current datastores and tools instead of starting every project with data centralization.'
  },
  {
    title: 'Reduce integration friction',
    text: 'Build a unified analytical layer across systems, teams and technical domains.'
  },
  {
    title: 'Support hybrid environments',
    text: 'Combine on-premises, cloud and private-cloud data sources in one search and analytics experience.'
  },
  {
    title: 'Improve investigation speed',
    text: 'Connect logs, metrics, traces, security events and business context to reduce manual analysis.'
  },
  {
    title: 'Keep architecture flexible',
    text: 'Start with a focused use case and expand into broader monitoring, security or analytics scenarios.'
  },
  {
    title: 'Optimize monitoring TCO',
    text: 'Complement or consolidate selected monitoring and analytics functions without forcing immediate replacement of existing tools.'
  }
]

const capabilities = [
  {
    title: 'On-premises by default',
    text: 'SAF can be deployed in customer-controlled infrastructure for organizations that need strong control over logs, incidents, dashboards and sensitive operational data.'
  },
  {
    title: 'Private cloud / service provider scenarios',
    text: 'SAF can also support managed service, private cloud and multi-tenant service models where appropriate.'
  },
  {
    title: 'Custom dashboards and correlation logic',
    text: 'Teams can create dashboards, correlation rules, alerting scenarios and integrations with service desk, messengers, scripts and REST APIs.'
  },
  {
    title: 'Scalable architecture',
    text: 'SAF is designed for vertical and horizontal scaling and can be adapted to changing data volumes and enterprise workloads.'
  },
  {
    title: 'Search language',
    text: 'Pipeline-style search logic supports filtering, transformation, aggregation and analytical workflows.'
  },
  {
    title: 'Integration-ready platform',
    text: 'SAF can work with existing datastores, monitoring systems, security tools and business applications through connectors, APIs and data pipelines.'
  }
]
</script>

<style lang="scss" scoped>
.technology-page {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0;
  overflow: hidden;
  background: #000212;

  > * {
    position: relative;
    z-index: 1;
  }

  &::before,
  &::after {
    position: absolute;
    left: 50%;
    width: rem(1840);
    border-radius: 50%;
    transform: translateX(-50%);
    pointer-events: none;
    content: '';
    z-index: 0;
  }

  &::before {
    top: rem(520);
    height: rem(2000);
    background: radial-gradient(
      ellipse at center,
      rgba(10, 96, 90, 0.58) 0%,
      rgba(10, 96, 90, 0.22) 45%,
      rgba(10, 96, 90, 0) 72%
    );
    filter: blur(rem(40));
  }

  &::after {
    top: rem(3000);
    height: rem(2200);
    background: radial-gradient(
      ellipse at center,
      rgba(12, 84, 110, 0.5) 0%,
      rgba(12, 84, 110, 0.2) 40%,
      rgba(12, 84, 110, 0) 70%
    );
    filter: blur(rem(44));
  }

  @include bp-md {
    &::before,
    &::after {
      width: rem(1420);
    }
  }
}

.section {
  width: min(100%, rem(1280));
  margin: 0 auto;
  padding: rem(30) fluid(80, 20) 0;
}

.hero {
  min-height: rem(560);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: rem(20);
  padding-top: rem(134);
  padding-bottom: rem(20);

  h1 {
    max-width: rem(1080);
    font-size: fluid(72, 42);
    line-height: 1.1;
    letter-spacing: -0.02em;
  }
}

.eyebrow {
  margin: 0;
  font-size: rem(14);
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(160, 248, 227, 0.9);
}

.lead {
  max-width: rem(1040);
  margin: 0;
  font-size: rem(22);
  line-height: rem(34);
  color: rgba(237, 249, 255, 0.84);
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: rem(14);
}

.feature-card {
  display: flex;
  flex-direction: column;
  gap: rem(20);
  padding: rem(34);
  border: 1px solid rgba(132, 217, 209, 0.24);
  border-radius: rem(32);
  background:
    radial-gradient(circle at top right, rgba(46, 133, 137, 0.24), transparent 54%),
    linear-gradient(180deg, rgba(8, 20, 39, 0.94) 0%, rgba(3, 11, 25, 0.9) 100%);
  box-shadow: 0 rem(24) rem(70) rgba(0, 0, 0, 0.28);

  h2 {
    font-size: fluid(56, 32);
    line-height: 1.15;
  }

  p {
    margin: 0;
    color: rgba(233, 246, 251, 0.8);
    line-height: 1.55;
  }
}

h2 {
  margin: 0;
  font-size: fluid(56, 32);
  line-height: 1.16;
}

.visual-placeholder {
  display: flex;
  flex-direction: column;
  min-height: rem(320);
  margin-top: rem(6);
  padding: rem(18);
  border-radius: rem(28);
  border: 1px solid rgba(141, 214, 218, 0.28);
  background:
    linear-gradient(180deg, rgba(8, 25, 41, 0.9), rgba(7, 16, 29, 0.88)),
    radial-gradient(circle at 24% 12%, rgba(60, 135, 126, 0.3), transparent 56%);
  justify-content: center;

  h3 {
    margin: 0;
    font-size: fluid(34, 26);
    line-height: 1.2;
  }
}

.technology-video {
  display: block;
  width: 100%;
  height: auto;
  border-radius: rem(18);
  background: rgba(2, 8, 18, 0.9);
}

.placeholder-label {
  margin: 0;
  font-size: rem(12);
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(160, 246, 231, 0.92);
}

.placeholder-caption {
  max-width: rem(780);
  font-size: rem(16);
  color: rgba(232, 247, 252, 0.72);
}

.metrics-grid,
.why-grid {
  display: grid;
  gap: rem(14);
}

.metrics-grid {
  margin-top: rem(18);
  grid-template-columns: repeat(3, minmax(0, 1fr));

  @include bp-lg {
    grid-template-columns: 1fr;
  }
}

.metric-card,
.small-card,
.capability-row {
  display: flex;
  flex-direction: column;
  gap: rem(10);
  padding: rem(22);
  border-radius: rem(24);
  border: 1px solid rgba(126, 203, 214, 0.25);
  background: rgba(8, 23, 40, 0.64);

  h3 {
    margin: 0;
    font-size: rem(27);
    line-height: 1.24;
  }

  p {
    margin: 0;
    color: rgba(236, 248, 255, 0.78);
    line-height: 1.5;
  }
}

.metric-card {
  gap: rem(8);
  border-color: rgba(126, 203, 214, 0.14);
  background: linear-gradient(180deg, rgba(8, 23, 40, 0.5), rgba(8, 23, 40, 0.36));
}

.metric {
  margin: 0;
  font-size: fluid(52, 34);
  font-weight: 700;
  letter-spacing: -0.02em;
  color: rgba(166, 247, 225, 0.96);
}

.concept-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: rem(14);

  @include bp-lg {
    grid-template-columns: 1fr;
  }
}

.concept-item {
  padding: rem(16) rem(6) rem(6);
  border-top: 1px solid rgba(145, 214, 223, 0.24);

  h3 {
    margin: 0 0 rem(8);
    font-size: rem(24);
    line-height: 1.24;
  }

  p {
    margin: 0;
    color: rgba(236, 248, 255, 0.76);
    line-height: 1.5;
  }
}

.why-grid {
  margin-top: rem(20);
  grid-template-columns: repeat(3, minmax(0, 1fr));

  @include bp-lg {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @include bp-md {
    grid-template-columns: 1fr;
  }
}

.small-card {
  border-color: rgba(126, 203, 214, 0.2);
  background: rgba(8, 23, 40, 0.58);
}

.capability-list {
  display: flex;
  flex-direction: column;
  gap: rem(10);
  margin-top: rem(18);
}

.capability-row {
  gap: rem(7);
  padding: rem(20);
}

.cta-wrap {
  padding-bottom: rem(100);
}

.cta-card {
  margin-top: rem(16);
}

@include bp-md {
  .hero {
    min-height: auto;
    padding-top: rem(122);
    padding-bottom: rem(14);
  }

  .section {
    padding-top: rem(26);
  }

  .lead {
    font-size: rem(20);
    line-height: rem(30);
  }

  .feature-card {
    padding: rem(24);
  }

  .visual-placeholder {
    min-height: rem(250);
    padding: rem(14);
  }

  .metric-card,
  .small-card,
  .capability-row {
    padding: rem(18);

    h3 {
      font-size: rem(23);
    }
  }

  .cta-wrap {
    padding-bottom: rem(80);
  }
}

@include bp-sm {
  .hero {
    gap: rem(18);
    padding-top: rem(110);
    padding-bottom: rem(12);
  }

  .section {
    padding-top: rem(22);
  }

  .lead {
    font-size: rem(18);
    line-height: rem(28);
  }

  .hero-actions {
    width: 100%;

    :deep(.button) {
      width: 100%;
    }
  }

  .feature-card {
    padding: rem(20);
    border-radius: rem(26);
  }

  .visual-placeholder {
    min-height: rem(220);
    border-radius: rem(22);
  }

  .concept-item {
    padding-left: 0;
    padding-right: 0;
  }
}
</style>
