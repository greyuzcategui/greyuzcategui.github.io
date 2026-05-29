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

    <h1 class="text-h3 font-weight-bold mb-4 text-center text-primary">
      {{ $t('portfolio.extendedTitle') }}
    </h1>
    <p class="text-center text-body-1 mb-12 mx-auto" style="max-width: 800px">
      {{ $t('portfolio.extendedSubtitle') }}
    </p>

    <v-row>
      <v-col v-for="i in 6" :key="i" cols="12" md="6" lg="4">
        <v-card class="h-100 rounded-xl elevation-2 bg-surface" border>
          <v-card-item>
            <div class="d-flex align-center mb-2">
              <v-icon color="secondary" class="mr-2">mdi-check-circle-outline</v-icon>
              <span class="text-overline font-weight-bold text-secondary">{{ $t('portfolio.caseStudy') }}</span>
            </div>
            <v-card-title class="text-h6 font-weight-bold text-wrap">
              {{ $t(`portfolio.all.${i-1}.title`) }}
            </v-card-title>
          </v-card-item>

          <v-card-text>
            <div class="mb-4">
              <div class="text-subtitle-2 font-weight-bold text-primary mb-1">{{ $t('portfolio.challenge') }}:</div>
              <p class="text-body-2">{{ $t(`portfolio.all.${i-1}.challenge`) }}</p>
            </div>
            <div class="mb-4">
              <div class="text-subtitle-2 font-weight-bold text-primary mb-1">{{ $t('portfolio.solution') }}:</div>
              <p class="text-body-2">{{ $t(`portfolio.all.${i-1}.solution`) }}</p>
            </div>
            <div class="d-flex flex-wrap ga-2 mt-4">
              <v-chip v-for="tag in 3" :key="tag" size="x-small" color="primary" variant="tonal">
                Tech {{ tag }}
              </v-chip>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

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
  </v-container>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>
