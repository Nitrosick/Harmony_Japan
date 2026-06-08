<template>
  <section class="features content">
    <p class="features-eyebrow">
      {{ $t('saf.page.modules.eyebrow') }}
    </p>

    <h2>{{ $t('saf.page.modules.title') }}</h2>

    <p class="features-description">
      {{ $t('saf.page.modules.text') }}
    </p>

    <div class="features-tabs">
      <button
        v-for="item in modules"
        :key="item.key"
        class="features-tabs-item"
        :class="{ 'tab-active': currentTab === item.key }"
        @click.prevent="currentTab = item.key"
      >
        {{ item.title }}
      </button>
    </div>

    <div class="features-content">
      <Motion
        :key="currentTab"
        :initial="motionInitial"
        :while-in-view="motionInView"
      >
        <div class="features-content-image">
          <img
            :src="currentImage"
            :alt="`${currentModule.title} icon`"
            loading="lazy"
            width="520"
            height="400"
            @error="onImgError"
          >
        </div>
      </Motion>

      <Motion
        :key="`${currentTab}-text`"
        :initial="motionInitial"
        :while-in-view="motionInView"
      >
        <div class="features-content-text">
          <h3>{{ currentModule.title }}</h3>

          <p class="features-content-description">
            {{ currentModule.description }}
          </p>
          
          <Button
            :text="$t('saf.page.modules.cta')"
            to="/contact"
            :adaptable="false"
          />
        </div>
      </Motion>
    </div>
  </section>
</template>

<script setup>
const modules = [
  {
    key: 'core',
    title: 'Core',
    image: 'https://saf-systems.com/images/icons/modules/core-icon.svg',
    description: 'The module is the central unit of the Search Anywhere Framework, orchestrating the interaction among its various components and providing a unified access point to their functionalities. It not only enables automated actions and notifications in response to search queries but also houses tools for constructing the Asset-Service-Model, granting users the capability to visually trace and represent causality relationships, such as degradation in service quality or specific IT/IS infrastructure malfunctions.'
  },
  {
    key: 'incident_manager',
    title: 'Incident Manager',
    image: 'https://saf-systems.com/images/icons/modules/im-icon.svg',
    description: 'The module is a comprehensive solution dedicated to the life cycle management of incidents spanning areas of information security, IT infrastructure, abnormal user behaviors, and business process errors. Its primary role is to capture crucial events as incidents, streamlining the organization and offering tools to manage identified incidents.'
  },
  {
    key: 'inventory',
    title: 'Inventory',
    image: 'https://saf-systems.com/images/icons/modules/inventory-icon.svg',
    description: 'The module allows users to create a unified database of users and assets, including servers, workstations, network devices, information systems, and objects in a cluster infrastructure. It ensures that the asset database is kept up to date.'
  },
  {
    key: 'mitre_attack',
    title: 'MITRE ATT&CK',
    image: 'https://saf-systems.com/images/icons/modules/mitre-icon.svg',
    description: 'The module equips organizations to effectively deploy multiple MITRE ATT&CK use scenarios within their infrastructure. Users can evaluate their toolsets coverage of ATT&CK techniques, craft specialized threat models tailored to their IT landscape components, and detect potential technique use based on data source events.'
  },
  {
    key: 'compliance',
    title: 'Compliance',
    image: 'https://saf-systems.com/images/icons/modules/compliance-icon.svg',
    description: "The module revolutionizes regulatory conformance by automating and streamlining assessments through a Data-Driven approach. Moving beyond traditional methods, this module captures machine data from various sources, providing a holistic dashboard view of an organization's compliance. With continuous insights and an emphasis on objectivity, it transforms compliance from a task into a strategic advantage, enhancing both security and regulatory alignment."
  },
  {
    key: 'cyber_security',
    title: 'Cyber Security',
    image: 'https://saf-systems.com/images/icons/modules/cs-icon.svg',
    description: 'The module enriches the Security Analytics Platform with curated content. It encompasses ready-made correlation rules, incident detection mechanisms, response playbooks, configurations to integrate any security tool with SAF, and pre-installed dashboards, all delivered in the form of periodic content updates.'
  },
  {
    key: 'network',
    title: 'Network',
    image: 'https://saf-systems.com/images/icons/modules/network-icon.svg',
    description: 'The module is a robust tool for meticulous network monitoring and management. It auto-collects and analyzes equipment and communication data, allowing for swift issue detection and response. Resource tracking ensures optimal device performance and prevents inefficiencies, reducing maintenance costs.'
  },
  {
    key: 'servers',
    title: 'Servers',
    image: 'https://saf-systems.com/images/icons/modules/servers-icon.svg',
    description: 'The module monitors and analyzes server processes, resource usage, including CPU, memory, and disk activity, aiding in optimizing resources and preventing inefficiencies. With S.M.A.R.T. protocol integration, the module preemptively detects potential hard drive issues.'
  },
  {
    key: 'microsoft_active_directory',
    title: 'Microsoft Active Directory',
    image: 'https://saf-systems.com/images/icons/modules/mad-icon.svg',
    description: 'The module controls of the main domain services, controls of user accounts: who is the domain administrator, who is the local administrator, notification when adding/removing an account from specific groups, determination of accounts that have not logged in for a certain period of time. Notification of the need to change passwords. Control of Active Directory security events.'
  },
  {
    key: 'microsoft_exchange',
    title: 'Microsoft Exchange',
    image: 'https://saf-systems.com/images/icons/modules/me-icon.svg',
    description: 'The module controls the operation of the main mail server services, allows analysis of email flow by recipients, senders, and detects spikes in activity. Auditing access to mailboxes, determining instances of mail forwarding, auto-replies, etc. Detection of anomalies in mail traffic.'
  },
  {
    key: 'netmap',
    title: 'NetMap',
    image: 'https://saf-systems.com/images/icons/modules/netmap-icon.svg',
    description: 'The module streamlines network topology understanding by analyzing events from network devices to identify and categorize them, further detailing their connections, ports, and interfaces. It auto-discovers network topologies by leveraging MAC address tables, ARP tables, and the LLDP protocol, pinpointing vendors and hostnames of connected devices.'
  },
  {
    key: 'uba',
    title: 'UBA',
    image: 'https://saf-systems.com/images/icons/modules/uba-icon.svg',
    description: 'The module provides mechanisms for detecting deviations in the behavior of various types of objects: users, hosts, administrators, information systems, business processes, etc. The universal scoring mechanism allows for identifying potential intruders, compromised accounts, calculating a cybersecurity index, analyzing operational efficiency and labor discipline, and combating fraud.'
  },
  {
    key: 'trading_antifraud',
    title: 'Trading Antifraud',
    image: 'https://saf-systems.com/images/icons/modules/trading-antifraud-icon.svg',
    description: 'The module is designed to detect and prevent corporate fraud in trading activities. The built-in mechanisms of the Trading Antifraud module enable profiling of employee activities and identification of high-risk transactions. The module operates using data enrichment mechanisms through integration with corporate information sources (ERP, CRM, etc.) and external information services (exchanges, information agencies).'
  }
]

const currentTab = ref(modules[0].key)

const motionInitial = { x: 30, opacity: 0 }
const motionInView = { x: 0, opacity: 1, transition: { duration: 0.8, ease: 'easeInOut' } }

const currentModule = computed(() => {
  return modules.find(item => item.key === currentTab.value) || modules[0]
})

const currentImage = computed(() => {
  return currentModule.value.image
})

const onImgError = (event) => {
  event.target.src = modules[0].image
}
</script>

<style lang="scss" scoped>
.features {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: rem(24);
  padding: rem(64) fluid(80, 20);
}

.features-eyebrow {
  margin: 0;
  font-size: rem(14);
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  opacity: 0.55;
}

.features-description {
  max-width: rem(960);
  margin: 0;
  text-align: center;
  opacity: 0.72;
}

.features-tabs {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: rem(10);
  margin-top: rem(12);
}

.features-tabs-item {
  padding: rem(10) rem(18);
  border-radius: rem(999);
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.12);
  opacity: 0.65;
  transition: opacity $transition-time, border-color $transition-time, background-color $transition-time;

  &:hover {
    opacity: 1;
  }
}

.tab-active {
  opacity: 1;
  border-color: rgba(255, 255, 255, 0.45);
  background-color: rgba(255, 255, 255, 0.06);
  pointer-events: none;
}

.features-content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: fluid(40, 20);
  width: 100%;
  margin-top: rem(12);

  @include bp-md {
    flex-direction: column;
  }
}

.features-content-image img {
  object-fit: contain;

  @include bp-md {
    width: 100%;
    height: auto;
  }
}

.features-content-text {
  display: flex;
  flex-direction: column;
  gap: rem(24);
  max-width: rem(500);
}

.features-content-description {
  margin: 0;
  opacity: 0.72;
}
</style>
