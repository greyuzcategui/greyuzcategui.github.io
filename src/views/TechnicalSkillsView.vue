<template>
  <v-container class="py-12">
    <v-btn
      variant="text"
      prepend-icon="mdi-arrow-left"
      color="primary"
      class="mb-8"
      @click="$emit('scroll-to', 'skills')"
    >
      {{ $t('nav.back') }}
    </v-btn>

    <h1 class="text-h3 font-weight-bold mb-4 text-center text-primary">
      {{ $t('skills.extendedTitle') }}
    </h1>
    <p class="text-center text-body-1 mb-12 mx-auto" style="max-width: 800px">
      {{ $t('skills.extendedSubtitle') }}
    </p>

    <!-- Grid de Categorías Detalladas extraídas del CV Extendido -->
    <v-row>
      <v-col 
        v-for="(category, key) in extendedSkills" 
        :key="key" 
        cols="12" 
        md="6"
        lg="4"
      >
        <v-card variant="outlined" class="pa-6 h-100 border-primary rounded-xl elevation-2 bg-surface">
          <div class="d-flex align-center mb-6">
            <v-avatar color="primary" size="48" class="mr-4">
              <v-icon color="white" size="large">{{ category.icon }}</v-icon>
            </v-avatar>
            <div>
              <h3 class="text-h6 font-weight-bold leading-tight">{{ $t(`skills.categories.${key}`) }}</h3>
            </div>
          </div>

          <v-divider class="mb-6"></v-divider>

          <div v-for="(sub, subKey) in category.subgroups" :key="subKey" class="mb-4">
            <h4 v-if="sub.title" class="text-subtitle-2 font-weight-bold mb-2 text-secondary d-flex align-center">
              {{ sub.title }}
            </h4>
            <div class="d-flex flex-wrap ga-2">
              <v-chip
                v-for="skill in sub.items"
                :key="skill"
                color="primary"
                variant="tonal"
                size="small"
                class="font-weight-medium"
              >
                {{ skill }}
              </v-chip>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>

    <!-- Botón Volver inferior -->
    <div class="text-center mt-12">
      <v-btn
        size="large"
        color="primary"
        prepend-icon="mdi-arrow-left"
        @click="$emit('scroll-to', 'skills')"
      >
        {{ $t('nav.back') }}
      </v-btn>
    </div>
  </v-container>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

defineEmits(['scroll-to'])
const { t } = useI18n()

// Estructura sincronizada exactamente con el documento CV Extendido
const extendedSkills = {
  softwareEngineering: {
    icon: 'mdi-cog-outline',
    subgroups: [
      { title: '', items: ['Arquitectura MVC', 'Consultoría en Diseño WEB', 'Metodología Scrum'] }
    ]
  },
  clientSide: {
    icon: 'mdi-monitor-screenshot',
    subgroups: [
      { title: 'Frameworks & Libs', items: ['Vue.js 3', 'Angular 2', 'React.js', 'jQuery', 'Extjs', 'Ionic'] },
      { title: 'Fundamentos', items: ['JavaScript (Intermedio)', 'HTML5 / CSS3', 'SASS / SCSS'] },
      { title: 'Herramientas', items: ['Gulp', 'NPM'] }
    ]
  },
  serverSide: {
    icon: 'mdi-server',
    subgroups: [
      { title: 'Lenguajes', items: ['PHP', 'Java', 'Groovy', 'Ruby', '.NET (Visual Basic 6)'] },
      { title: 'Frameworks', items: ['Laravel', 'SpringBoot', 'Grails', 'Ruby on Rails', 'Codeigniter', 'Slim Framework'] },
      { title: 'Protocolos', items: ['HTTP', 'REST APIs'] }
    ]
  },
  databases: {
    icon: 'mdi-database',
    subgroups: [
      { title: 'SQL & Herramientas', items: ['PostgreSQL (PgAdmin)', 'MySQL (Workbench)', 'Oracle DB (Toad)', 'IBM DB2', 'SQL Server'] },
      { title: 'NoSQL & Cache', items: ['MongoDB', 'Redis'] },
      { title: 'Lenguaje DB', items: ['DML', 'DDL', 'DCL', 'PLSQL', 'SQL Programático', 'Modelaje'] }
    ]
  },
  specificExperience: {
    icon: 'mdi-check-decagram',
    subgroups: [
      { title: '', items: ['POO (Programación Orientada a Objetos)', 'Testing', 'TDD (Test Driven Development)', 'Desarrollo de APIs'] }
    ]
  },
  otherTools: {
    icon: 'mdi-toolbox-outline',
    subgroups: [
      { title: 'Infraestructura', items: ['Docker', 'Portainer', 'AWS (EC2, RDS)', 'Heroku', 'Hostinger', 'Apache'] },
      { title: 'Versionado & Colaboración', items: ['GIT', 'GitLab', 'GitHub'] },
      { title: 'IDEs', items: ['IntelliJ Idea', 'Netbeans', 'Visual Studio Code'] },
      { title: 'Varios', items: ['Kafka', 'WebSockets', 'Postman', 'JMeter', 'Wordpress'] }
    ]
  },
  osServers: {
    icon: 'mdi-laptop',
    subgroups: [
      { title: 'Sistemas', items: ['Linux Debian', 'Linux Ubuntu', 'Windows'] },
      { title: 'Servidores Web', items: ['Apache', 'Configuración de Servidores'] }
    ]
  },
  aiLlm: {
    icon: 'mdi-brain',
    subgroups: [
      { title: 'IA Generativa', items: ['Modelos de Lenguaje (LLMs)', 'Prompt Engineering', 'AI Workflows', 'AI-Driven Development'] },
      { title: 'Soluciones', items: ['Problemas de Clasificación con IA', 'Automatización con IA'] }
    ]
  }
}
</script>
