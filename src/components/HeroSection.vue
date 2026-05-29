<template>
  <v-container fluid class="hero-section pa-0">
    <v-row align="center" justify="center" class="ma-0" style="min-height: 85vh; padding-top: 80px; padding-bottom: 40px;">
      <v-col cols="12" md="8" class="text-center px-6">
        <v-avatar size="200" size-md="360" class="mb-6 elevation-10">
          <v-img
            src="https://metalmacana.github.io/assets/images/foto_carnet_grey_uzcategui.jpg"
            alt="Grey Uzcátegui"
          ></v-img>
        </v-avatar>
        <h1 class="text-h4 text-md-h2 font-weight-bold mb-2 text-primary">{{ $t('hero.title') }}</h1>
        <h2 class="text-body-1 text-md-h5 font-weight-light mb-6 text-grey-darken-1">
          {{ $t('hero.subtitle') }}
        </h2>
        
        <p class="text-body-2 text-md-body-1 mb-8 mx-auto" style="max-width: 700px" v-html="$t('hero.description')">
        </p>

        <div class="d-flex flex-wrap justify-center align-center ga-4">
          <v-btn
            color="primary"
            size="large"
            prepend-icon="mdi-email-outline"
            class="px-8 w-100 w-sm-auto"
            @click="$emit('scroll-to', 'contact')"
          >
            {{ $t('hero.contactBtn') }}
          </v-btn>

          <v-btn
            color="secondary"
            size="large"
            prepend-icon="mdi-calendar-check"
            class="px-8 w-100 w-sm-auto"
            href="https://calendly.com/greyuzcategui"
            target="_blank"
          >
            {{ $t('hero.scheduleBtn') }}
          </v-btn>

          <v-btn
            variant="outlined"
            color="primary"
            size="large"
            prepend-icon="mdi-file-document-outline"
            class="px-8 w-100 w-sm-auto"
            href="/cv-grey-uzcategui-resume-2026.pdf"
            target="_blank"
          >
            {{ $t('hero.resumeBtn') }}
          </v-btn>

          <v-btn
            variant="outlined"
            color="primary"
            size="large"
            prepend-icon="mdi-file-document-multiple-outline"
            class="px-8 w-100 w-sm-auto"
            href="/cv-grey-uzcategui-extended-2026.pdf"
            target="_blank"
          >
            {{ $t('hero.extendedBtn') }}
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useTheme } from 'vuetify'

const { t } = useI18n()
const theme = useTheme()
const themeGradient = computed(() => {
  return theme.global.current.value.dark 
    ? 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)' 
    : 'linear-gradient(135deg, #F8FAFC 0%, #E2E8F0 100%)'
})
defineEmits(['scroll-to'])
</script>

<style scoped>
.hero-section {
  min-height: 90vh;
  background: v-bind('themeGradient');
}
</style>
