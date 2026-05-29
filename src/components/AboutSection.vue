<template>
  <v-row class="ma-0">
    <v-col cols="12" md="4">
      <v-card variant="flat" class="bg-grey-lighten-4 pa-4 rounded-lg">
        <h3 class="text-h5 font-weight-bold mb-4 text-primary">{{ $t('about.personalData') }}</h3>
        <v-list bg-color="transparent" density="comfortable">
          <v-list-item prepend-icon="mdi-map-marker" :title="$t('about.location')" :subtitle="$t('about.locationVal')"></v-list-item>
          <v-list-item prepend-icon="mdi-cake" :title="$t('about.birth')" :subtitle="$t('about.birthVal')"></v-list-item>
          <v-list-item prepend-icon="mdi-email" :title="$t('about.email')" subtitle="ing.greyuzcategui@gmail.com"></v-list-item>
          <v-list-item prepend-icon="mdi-web" :title="$t('about.web')" subtitle="greyuzcategui.github.io"></v-list-item>
        </v-list>
        <v-btn
          block
          color="primary"
          variant="tonal"
          class="mt-4"
          prepend-icon="mdi-linkedin"
          href="https://www.linkedin.com/in/ing-grey-uzcategui/"
          target="_blank"
        >
          LinkedIn
        </v-btn>
      </v-card>
    </v-col>

    <v-col cols="12" md="8">
      <h3 class="text-h4 font-weight-bold mb-4">{{ $t('about.profile') }}</h3>
      <p class="text-body-1 mb-6 text-justify" v-html="$t('about.profileDesc')">
      </p>
      
      <v-row>
        <v-col cols="12" sm="6">
          <v-card variant="outlined" class="pa-4 h-100 border-primary">
            <v-icon color="primary" size="large" class="mb-2">mdi-xml</v-icon>
            <h4 class="text-h6 font-weight-bold mb-2">{{ $t('about.fullstack') }}</h4>
            <p class="text-body-2">{{ $t('about.fullstackDesc') }}</p>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6">
          <v-card variant="outlined" class="pa-4 h-100 border-primary">
            <v-icon color="primary" size="large" class="mb-2">mdi-account-group</v-icon>
            <h4 class="text-h6 font-weight-bold mb-2">{{ $t('about.leadership') }}</h4>
            <p class="text-body-2">{{ $t('about.leadershipDesc') }}</p>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6">
          <v-card variant="outlined" class="pa-4 h-100 border-primary">
            <v-icon color="primary" size="large" class="mb-2">mdi-cloud-sync</v-icon>
            <h4 class="text-h6 font-weight-bold mb-2">{{ $t('about.architecture') }}</h4>
            <p class="text-body-2">{{ $t('about.architectureDesc') }}</p>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6">
          <v-card variant="outlined" class="pa-4 h-100 border-primary">
            <v-icon color="primary" size="large" class="mb-2">mdi-brain</v-icon>
            <h4 class="text-h6 font-weight-bold mb-2">{{ $t('about.ai') }}</h4>
            <p class="text-body-2">{{ $t('about.aiDesc') }}</p>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
