<template>
  <div>
    <h3 class="text-h4 font-weight-bold mb-10 text-center text-primary">{{ $t('courses.title') }}</h3>
    
    <v-row class="ma-0">
      <v-col 
        v-for="key in courses" 
        :key="key" 
        cols="12" 
        sm="6" 
        md="4" 
        lg="3"
      >
        <v-card 
          variant="flat" 
          class="pa-4 h-100 rounded-lg border-s-lg border-primary elevation-1"
          color="surface"
        >
          <div class="d-flex align-start">
            <v-icon color="primary" class="mr-3 mt-1">mdi-certificate-outline</v-icon>
            <div class="text-body-2 font-weight-bold text-wrap">
              {{ $t(`courses.list.${key}`) }}
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t, tm } = useI18n()

// Lista de claves para los cursos sincronizada con el archivo JSON
const courses = [
  'pwa', 'docker_intro', 'vue', 'docker_adv', 'java8', 
  'marketing', 'asterisk', 'automation', 'ccna', 'telecom', 'ibm'
]
</script>

<style scoped>
.border-s-lg {
  border-left-width: 6px !important;
  border-left-style: solid !important;
}
</style>
