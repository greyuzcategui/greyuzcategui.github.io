<template>
  <div>
    <h3 class="text-h4 font-weight-bold mb-10 text-center">{{ $t('skills.title') }}</h3>
    
    <v-row class="ma-0">
      <v-col v-for="category in skillCategories" :key="category.key" cols="12" md="6" lg="4">
        <v-card variant="outlined" class="pa-6 h-100 border-grey-lighten-2">
          <div class="d-flex align-center mb-4">
            <v-icon :color="category.color" size="large" class="mr-3">{{ category.icon }}</v-icon>
            <h4 class="text-h6 font-weight-bold">{{ $t(`skills.categories.${category.key}`) }}</h4>
          </div>
          
          <div class="d-flex flex-wrap gap-2">
            <v-chip
              v-for="skill in category.skills"
              :key="skill"
              :color="category.color"
              variant="tonal"
              class="ma-1 font-weight-medium"
              label
            >
              {{ skill }}
            </v-chip>
          </div>
        </v-card>
      </v-col>
    </v-row>

    <div class="text-center mt-12">
      <v-btn
        color="primary"
        variant="outlined"
        prepend-icon="mdi-plus"
        @click="$router.push({ name: 'technical-skills' })"
      >
        {{ $t('skills.viewMore') }}
      </v-btn>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const skillCategories = [
  {
    key: 'backend',
    icon: 'mdi-server',
    color: 'primary',
    skills: ['Java (Spring Boot)', 'PHP (Laravel)', 'Groovy (Grails)', 'Ruby on Rails', 'Node.js']
  },
  {
    key: 'frontend',
    icon: 'mdi-monitor-screenshot',
    color: 'secondary',
    skills: ['Vue.js 3 (Vuetify)', 'React.js', 'Angular', 'Ionic', 'HTML5 / CSS3', 'JavaScript (ES6+)']
  },
  {
    key: 'databases',
    icon: 'mdi-database',
    color: 'success',
    skills: ['MySQL', 'PostgreSQL', 'Oracle DB', 'MongoDB', 'Redis', 'IBM DB2']
  },
  {
    key: 'architecture',
    icon: 'mdi-cloud-cog',
    color: 'info',
    skills: ['Microservicios', 'Apache Kafka', 'Docker', 'AWS', 'Git / GitLab', 'CI/CD', 'WebSockets']
  },
  {
    key: 'ai',
    icon: 'mdi-brain',
    color: 'deep-purple-accent-2',
    skills: ['LLMs', 'Prompt Engineering', 'AI Workflows', 'AI-Driven Dev']
  },
  {
    key: 'others',
    icon: 'mdi-cog-box',
    color: 'grey-darken-2',
    skills: ['Scrum', 'TDD / Unit Testing', 'REST APIs', 'Clean Code', 'PMO / Gestión']
  }
]
</script>

<style scoped>
.v-card {
  transition: transform 0.2s, box-shadow 0.2s;
}
.v-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 20px rgba(0,0,0,0.1) !important;
}
</style>
