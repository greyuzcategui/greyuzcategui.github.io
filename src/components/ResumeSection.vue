<template>
  <div>
    <h3 class="text-h4 font-weight-bold mb-8 text-center">{{ $t('resume.title') }}</h3>
    
    <v-timeline :side="$vuetify.display.xs ? 'end' : undefined" :density="$vuetify.display.xs ? 'compact' : 'default'" align="start">
      <!-- Uzmar / Comexport -->
      <v-timeline-item
        dot-color="primary"
        size="small"
      >
        <template v-slot:opposite v-if="!$vuetify.display.xs">
          <div class="text-h6 font-weight-bold text-primary">2025 - {{ $t('resume.present') }}</div>
        </template>
        <v-card class="elevation-2 rounded-lg">
          <v-card-title class="text-h6 pb-0 text-wrap">
            {{ $t('resume.jobs.uzmar.role') }}
          </v-card-title>
          <v-card-subtitle class="text-primary font-weight-bold">
            {{ $t('resume.jobs.uzmar.company') }} <span v-if="$vuetify.display.xs">| 2025 - {{ $t('resume.present') }}</span>
          </v-card-subtitle>
          <v-card-text class="text-body-2">
            {{ $t('resume.jobs.uzmar.desc') }}
          </v-card-text>
        </v-card>
      </v-timeline-item>

      <!-- Freelance Proyectos Internacionales -->
      <v-timeline-item
        dot-color="secondary"
        size="small"
      >
        <template v-slot:opposite v-if="!$vuetify.display.xs">
          <div class="text-h6 font-weight-bold text-secondary">2024 - 2025</div>
        </template>
        <v-card class="elevation-2 rounded-lg">
          <v-card-title class="text-h6 pb-0 text-wrap">
            {{ $t('resume.jobs.freelance.role') }}
          </v-card-title>
          <v-card-subtitle class="text-secondary font-weight-bold">
            {{ $t('resume.jobs.freelance.company') }} <span v-if="$vuetify.display.xs">| 2024 - 2025</span>
          </v-card-subtitle>
          <v-card-text class="text-body-2">
            {{ $t('resume.jobs.freelance.desc') }}
          </v-card-text>
        </v-card>
      </v-timeline-item>

      <!-- Sondeos -->
      <v-timeline-item
        dot-color="primary-darken-1"
        size="small"
      >
        <template v-slot:opposite v-if="!$vuetify.display.xs">
          <div class="text-h6 font-weight-bold text-grey-darken-1">2019 - {{ $t('resume.present') }}</div>
        </template>
        <v-card class="elevation-2 rounded-lg">
          <v-card-title class="text-h6 pb-0 text-wrap">
            {{ $t('resume.jobs.sondeos.role') }}
          </v-card-title>
          <v-card-subtitle class="text-grey-darken-1 font-weight-bold">
            {{ $t('resume.jobs.sondeos.company') }} <span v-if="$vuetify.display.xs">| 2019 - {{ $t('resume.present') }}</span>
          </v-card-subtitle>
          <v-card-text class="text-body-2">
            {{ $t('resume.jobs.sondeos.desc') }}
          </v-card-text>
        </v-card>
      </v-timeline-item>

      <!-- Kiwisoftware -->
      <v-timeline-item
        dot-color="grey"
        size="small"
      >
        <template v-slot:opposite v-if="!$vuetify.display.xs">
          <div class="text-h6 font-weight-bold text-grey">2017 - 2019</div>
        </template>
        <v-card class="elevation-2 rounded-lg">
          <v-card-title class="text-h6 pb-0 text-wrap">
            {{ $t('resume.jobs.kiwi.role') }}
          </v-card-title>
          <v-card-subtitle class="text-grey font-weight-bold">
            {{ $t('resume.jobs.kiwi.company') }} <span v-if="$vuetify.display.xs">| 2017 - 2019</span>
          </v-card-subtitle>
          <v-card-text class="text-body-2">
            {{ $t('resume.jobs.kiwi.desc') }}
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>

    <div class="text-center mt-8">
      <v-btn
        color="primary"
        variant="outlined"
        prepend-icon="mdi-plus"
        @click="$router.push({ name: 'extended-resume' })"
      >
        {{ $t('resume.viewMore') }}
      </v-btn>
    </div>

    <v-divider class="my-12"></v-divider>

    <!-- Educación -->
    <h3 class="text-h4 font-weight-bold mb-10 text-center">{{ $t('resume.educationTitle') }}</h3>
    <v-row justify="center">
      <v-col cols="12" md="10">
        <v-list lines="two" border rounded-lg>
          <v-list-item
            prepend-icon="mdi-school"
            :title="$t('resume.education.master.title')"
            :subtitle="$t('resume.education.master.school')"
          ></v-list-item>
          <v-divider inset></v-divider>
          <v-list-item
            prepend-icon="mdi-certificate"
            :title="$t('resume.education.degree.title')"
            :subtitle="$t('resume.education.degree.school')"
          ></v-list-item>
          <v-divider inset></v-divider>
          <v-list-item
            prepend-icon="mdi-brain"
            :title="$t('resume.education.ai.title')"
            :subtitle="$t('resume.education.ai.school')"
          ></v-list-item>
        </v-list>
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
