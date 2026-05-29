<template>
  <v-container class="py-12">
    <v-btn
      variant="text"
      prepend-icon="mdi-arrow-left"
      color="primary"
      class="mb-8"
      @click="$router.push({ name: 'home' })"
    >
      {{ $t('nav.back') }}
    </v-btn>

    <h1 class="text-h3 font-weight-bold mb-12 text-center text-primary">
      {{ $t('resume.extendedTitle') }}
    </h1>

    <v-timeline side="end" align="start">
      <v-timeline-item
        v-for="(job, key) in allJobs"
        :key="key"
        dot-color="primary"
        size="small"
      >
        <template v-slot:opposite>
          <div class="text-h6 font-weight-bold">{{ job.period }}</div>
        </template>
        <v-card class="elevation-2 rounded-lg mb-4 cursor-pointer" @click="openModal(job)">
          <v-card-title class="text-h6 pb-0 text-wrap">
            {{ job.role }}
          </v-card-title>
          <v-card-subtitle class="text-primary font-weight-bold">
            {{ job.company }}
          </v-card-subtitle>
          <v-card-text class="text-body-2">
            {{ job.shortDesc }}
            <div class="mt-2 text-primary font-weight-bold">
              {{ $t('resume.viewDetails') }}...
            </div>
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>

    <div class="text-center mt-12">
      <v-btn
        size="large"
        color="primary"
        prepend-icon="mdi-arrow-left"
        @click="$router.push({ name: 'home' })"
      >
        {{ $t('nav.back') }}
      </v-btn>
    </div>

    <!-- Modal de Detalles -->
    <v-dialog v-model="dialog" max-width="800px">
      <v-card v-if="selectedJob" class="rounded-xl pa-4">
        <v-card-title class="d-flex justify-space-between align-center text-wrap">
          <div class="text-h5 font-weight-bold">{{ selectedJob.role }}</div>
          <v-btn icon="mdi-close" variant="text" @click="dialog = false"></v-btn>
        </v-card-title>
        <v-card-subtitle class="text-primary text-h6 mb-4">
          {{ selectedJob.company }} | {{ selectedJob.period }}
        </v-card-subtitle>
        <v-divider></v-divider>
        <v-card-text class="py-6">
          <div v-html="selectedJob.longDesc" class="text-body-1"></div>
        </v-card-text>
        <v-card-actions class="justify-end pb-4 pr-4">
          <v-btn color="primary" variant="flat" @click="dialog = false">Cerrar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, tm, rt } = useI18n()
const dialog = ref(false)
const selectedJob = ref<any>(null)

// Extraemos todos los trabajos definidos en el i18n
const allJobs = computed(() => {
  const jobs: any = tm('resume.allJobsList')
  return Object.keys(jobs).map(key => ({
    id: key,
    role: rt(jobs[key].role),
    company: rt(jobs[key].company),
    period: rt(jobs[key].period),
    shortDesc: rt(jobs[key].shortDesc),
    longDesc: rt(jobs[key].longDesc)
  }))
})

function openModal(job: any) {
  selectedJob.value = job
  dialog.value = true
}
</script>
