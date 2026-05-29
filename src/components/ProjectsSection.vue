<template>
  <div>
    <h3 class="text-h4 font-weight-bold mb-4 text-center text-primary">{{ $t('portfolio.title') }}</h3>
    <p class="text-center text-body-1 mb-10 mx-auto" style="max-width: 700px">
      {{ $t('portfolio.subtitle') }}
    </p>
    
    <v-row class="ma-0">
      <v-col v-for="i in 3" :key="i" cols="12" md="4">
        <v-card class="h-100 rounded-xl elevation-4 overflow-hidden border-primary" variant="outlined">
          <v-img
            src="https://via.placeholder.com/600x400/2C3E50/FFFFFF?text=Proyecto+Destacado"
            height="200"
            cover
          ></v-img>
          <v-card-item class="bg-surface">
            <v-card-title class="text-h6 font-weight-bold">
              {{ $t(`portfolio.featured.${i-1}.title`) }}
            </v-card-title>
            <v-card-subtitle class="text-secondary font-weight-bold">
              {{ $t(`portfolio.featured.${i-1}.tech`) }}
            </v-card-subtitle>
          </v-card-item>
          <v-card-text class="bg-surface grow">
            <p class="text-body-2 text-justify">
              {{ $t(`portfolio.featured.${i-1}.desc`) }}
            </p>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions class="bg-surface pa-4">
            <v-btn color="primary" variant="flat" block prepend-icon="mdi-eye-outline">
              {{ $t('portfolio.viewCase') }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <div class="text-center mt-12">
      <v-btn
        color="primary"
        variant="outlined"
        size="large"
        prepend-icon="mdi-briefcase-search"
        @click="$router.push({ name: 'portfolio' })"
      >
        {{ $t('portfolio.viewMore') }}
      </v-btn>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>
