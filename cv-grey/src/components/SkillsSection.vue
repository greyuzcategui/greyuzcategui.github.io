<template>
  <div>
    <h3 class="text-h4 font-weight-bold mb-10 text-center">Conocimientos Técnicos</h3>
    
    <v-row>
      <v-col v-for="category in skillCategories" :key="category.title" cols="12" md="6" lg="4">
        <v-card variant="outlined" class="pa-6 h-100 border-grey-lighten-2">
          <div class="d-flex align-center mb-4">
            <v-icon :color="category.color" size="large" class="mr-3">{{ category.icon }}</v-icon>
            <h4 class="text-h6 font-weight-bold">{{ category.title }}</h4>
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
  </div>
</template>

<script setup lang="ts">
const skillCategories = [
  {
    title: 'Backend',
    icon: 'mdi-server',
    color: 'primary',
    skills: ['Java (Spring Boot)', 'PHP (Laravel)', 'Groovy (Grails)', 'Ruby on Rails', 'Node.js']
  },
  {
    title: 'Frontend & Mobile',
    icon: 'mdi-monitor-screenshot',
    color: 'secondary',
    skills: ['Vue.js 3 (Vuetify)', 'React.js', 'Angular', 'Ionic', 'HTML5 / CSS3', 'JavaScript (ES6+)']
  },
  {
    title: 'Bases de Datos',
    icon: 'mdi-database',
    color: 'success',
    skills: ['MySQL', 'PostgreSQL', 'Oracle DB', 'MongoDB', 'Redis', 'IBM DB2']
  },
  {
    title: 'Arquitectura & DevOps',
    icon: 'mdi-cloud-cog',
    color: 'info',
    skills: ['Microservicios', 'Apache Kafka', 'Docker', 'AWS', 'Git / GitLab', 'CI/CD', 'WebSockets']
  },
  {
    title: 'Inteligencia Artificial',
    icon: 'mdi-brain',
    color: 'deep-purple-accent-2',
    skills: ['LLMs', 'Prompt Engineering', 'AI Workflows', 'AI-Driven Dev']
  },
  {
    title: 'Metodologías & Otros',
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
