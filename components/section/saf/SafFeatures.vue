<template>
  <section class="features content">
    <h2>{{ $t('saf.page.modules.title') }}</h2>

    <p class="description features-description">
      {{ $t('saf.page.modules.text') }}
    </p>

    <div class="tabs">
      <button
        v-for="item in modules"
        :key="item.key"
        class="tabs-item"
        :class="{ 'tabs-item-active': currentTab === item.key }"
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

          <p class="description">
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
const domain = 'https://harmonytec.jp'

const modules = [
  {
    key: 'core',
    title: 'Core',
    image: `${domain}/images/saf/core.webp`,
    description: 'The module is the central unit of the Search Anywhere Framework, orchestrating the interaction among its various components and providing a unified access point to their functionalities. It not only enables automated actions and notifications in response to search queries but also houses tools for constructing the Asset-Service-Model, granting users the capability to visually trace and represent causality relationships, such as degradation in service quality or specific IT/IS infrastructure malfunctions.'
  },
  {
    key: 'incident_manager',
    title: 'Incident Manager',
    image: `${domain}/images/saf/incident_manager.webp`,
    description: 'The module is a comprehensive solution dedicated to the life cycle management of incidents spanning areas of information security, IT infrastructure, abnormal user behaviors, and business process errors. Its primary role is to capture crucial events as incidents, streamlining the organization and offering tools to manage identified incidents.'
  },
  {
    key: 'inventory',
    title: 'Inventory',
    image: `${domain}/images/saf/inventory.webp`,
    description: 'The module allows users to create a unified database of users and assets, including servers, workstations, network devices, information systems, and objects in a cluster infrastructure. It ensures that the asset database is kept up to date.'
  },
  {
    key: 'mitre_attack',
    title: 'MITRE ATT&CK',
    image: `${domain}/images/saf/mitre_attack.webp`,
    description: 'The module equips organizations to effectively deploy multiple MITRE ATT&CK use scenarios within their infrastructure. Users can evaluate their toolsets coverage of ATT&CK techniques, craft specialized threat models tailored to their IT landscape components, and detect potential technique use based on data source events.'
  },
  {
    key: 'compliance',
    title: 'Compliance',
    image: `${domain}/images/saf/compliance.webp`,
    description: "The module revolutionizes regulatory conformance by automating and streamlining assessments through a Data-Driven approach. Moving beyond traditional methods, this module captures machine data from various sources, providing a holistic dashboard view of an organization's compliance. With continuous insights and an emphasis on objectivity, it transforms compliance from a task into a strategic advantage, enhancing both security and regulatory alignment."
  },
  {
    key: 'cyber_security',
    title: 'Cyber Security',
    image: `${domain}/images/saf/cyber_security.webp`,
    description: 'The module enriches the Security Analytics Platform with curated content. It encompasses ready-made correlation rules, incident detection mechanisms, response playbooks, configurations to integrate any security tool with SAF, and pre-installed dashboards, all delivered in the form of periodic content updates.'
  },
  {
    key: 'network',
    title: 'Network',
    image: `${domain}/images/saf/network.webp`,
    description: 'The module is a robust tool for meticulous network monitoring and management. It auto-collects and analyzes equipment and communication data, allowing for swift issue detection and response. Resource tracking ensures optimal device performance and prevents inefficiencies, reducing maintenance costs.'
  },
  {
    key: 'servers',
    title: 'Servers',
    image: `${domain}/images/saf/servers.webp`,
    description: 'The module monitors and analyzes server processes, resource usage, including CPU, memory, and disk activity, aiding in optimizing resources and preventing inefficiencies. With S.M.A.R.T. protocol integration, the module preemptively detects potential hard drive issues.'
  },
  {
    key: 'microsoft_active_directory',
    title: 'Microsoft Active Directory',
    image: `${domain}/images/saf/active_directory.webp`,
    description: 'The module controls of the main domain services, controls of user accounts: who is the domain administrator, who is the local administrator, notification when adding/removing an account from specific groups, determination of accounts that have not logged in for a certain period of time. Notification of the need to change passwords. Control of Active Directory security events.'
  },
  {
    key: 'microsoft_exchange',
    title: 'Microsoft Exchange',
    image: `${domain}/images/saf/microsoft_exchange.webp`,
    description: 'The module controls the operation of the main mail server services, allows analysis of email flow by recipients, senders, and detects spikes in activity. Auditing access to mailboxes, determining instances of mail forwarding, auto-replies, etc. Detection of anomalies in mail traffic.'
  },
  {
    key: 'netmap',
    title: 'NetMap',
    image: `${domain}/images/saf/netmap.webp`,
    description: 'The module streamlines network topology understanding by analyzing events from network devices to identify and categorize them, further detailing their connections, ports, and interfaces. It auto-discovers network topologies by leveraging MAC address tables, ARP tables, and the LLDP protocol, pinpointing vendors and hostnames of connected devices.'
  },
  {
    key: 'uba',
    title: 'UBA',
    image: `${domain}/images/saf/uba.webp`,
    description: 'The module provides mechanisms for detecting deviations in the behavior of various types of objects: users, hosts, administrators, information systems, business processes, etc. The universal scoring mechanism allows for identifying potential intruders, compromised accounts, calculating a cybersecurity index, analyzing operational efficiency and labor discipline, and combating fraud.'
  },
  {
    key: 'trading_antifraud',
    title: 'Trading Antifraud',
    image: 'https://saf-systems.com/images/icons/modules/trading-antifraud-icon.svg',
    // image: `${domain}/images/saf/.webp`,
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

const preloadImage = (src) => {
  return new Promise((resolve, reject) => {
    const img = new Image()

    img.onload = () => resolve()
    img.onerror = reject
    img.src = src
  })
}

onMounted(async () => {
  await Promise.all([
    preloadImage(`${domain}/images/saf/core.webp`),
    preloadImage(`${domain}/images/saf/incident_manager.webp`),
    preloadImage(`${domain}/images/saf/inventory.webp`),
    preloadImage(`${domain}/images/saf/mitre_attack.webp`),
    preloadImage(`${domain}/images/saf/compliance.webp`),
    preloadImage(`${domain}/images/saf/cyber_security.webp`),
    preloadImage(`${domain}/images/saf/network.webp`),
    preloadImage(`${domain}/images/saf/servers.webp`),
    preloadImage(`${domain}/images/saf/active_directory.webp`),
    preloadImage(`${domain}/images/saf/microsoft_exchange.webp`),
    preloadImage(`${domain}/images/saf/netmap.webp`),
    preloadImage(`${domain}/images/saf/uba.webp`)
    // preloadImage(`${domain}/images/saf/.webp`)
  ])
})
</script>

<style lang="scss" scoped>
.features {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: rem(30);
  padding: 0 fluid(80, 20);
}

.features-description {
  max-width: rem(960);
  text-align: center;
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

  &-image img {
    object-fit: contain;

    @include bp-md {
      width: 100%;
      height: auto;
    }
  }

  &-text {
    display: flex;
    flex-direction: column;
    gap: rem(30);
    max-width: rem(500);
  }
}
</style>
