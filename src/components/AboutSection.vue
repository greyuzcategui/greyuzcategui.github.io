<template>
  <v-row class="ma-0">
    <v-col cols="12" md="4">
      <v-card variant="flat" color="background" class="pa-4 rounded-lg">
        <h3 class="text-h5 font-weight-bold mb-4 text-primary">{{ $t('about.personalData') }}</h3>
        <v-list bg-color="transparent" density="comfortable">
          <v-list-item prepend-icon="mdi-map-marker" :title="$t('about.location')" :subtitle="$t('about.locationVal')"></v-list-item>
          <v-list-item prepend-icon="mdi-cake" :title="$t('about.birth')" :subtitle="$t('about.birthVal')"></v-list-item>
          <v-list-item 
            prepend-icon="mdi-email" 
            :title="$t('about.email')" 
            subtitle="ing.greyuzcategui@gmail.com"
            href="mailto:ing.greyuzcategui@gmail.com"
          ></v-list-item>
          <v-list-item 
            prepend-icon="mdi-web" 
            :title="$t('about.web')" 
            subtitle="greyuzcategui.github.io"
            href="https://greyuzcategui.github.io"
            target="_blank"
          ></v-list-item>
          <v-list-item 
            prepend-icon="mdi-phone" 
            :title="$t('about.phone')" 
            subtitle="+58 412-6008196"
            href="tel:+584126008196"
          ></v-list-item>
          <v-list-item 
            prepend-icon="mdi-whatsapp" 
            :title="$t('about.whatsapp')" 
            subtitle="+58 412-6008196"
            href="https://wa.me/584126008196"
            target="_blank"
          ></v-list-item>
          <v-list-item 
            prepend-icon="mdi-send" 
            :title="$t('about.telegram')" 
            subtitle="@greyuzcategui"
            href="https://t.me/greyuzcategui"
            target="_blank"
          ></v-list-item>
          <v-list-item 
            prepend-icon="mdi-calendar-check" 
            :title="$t('about.calendly')" 
            subtitle="calendly.com/greyuzcategui"
            href="https://calendly.com/greyuzcategui"
            target="_blank"
          ></v-list-item>
          <v-list-item 
            prepend-icon="mdi-linkedin" 
            title="LinkedIn" 
            subtitle="linkedin.com/in/ing-grey-uzcategui/"
            href="https://www.linkedin.com/in/ing-grey-uzcategui/"
            target="_blank"
          ></v-list-item>
        </v-list>
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
