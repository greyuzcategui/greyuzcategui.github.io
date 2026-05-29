<template>
  <div>
    <h3 class="text-h4 font-weight-bold mb-10 text-center">{{ $t('contact.title') }}</h3>
    
    <v-row class="ma-0">
      <!-- Información de contacto -->
      <v-col cols="12" md="5">
        <h4 class="text-h5 font-weight-bold mb-6">{{ $t('contact.subtitle') }}</h4>
        <p class="text-body-1 mb-8" v-html="$t('contact.description')">
        </p>

        <v-list bg-color="transparent">
          <v-list-item
            prepend-icon="mdi-email-outline"
            :title="$t('contact.labels.email')"
            subtitle="ing.greyuzcategui@gmail.com"
            class="mb-4"
          ></v-list-item>
          
          <v-list-item
            prepend-icon="mdi-linkedin"
            title="LinkedIn"
            subtitle="linkedin.com/in/ing-grey-uzcategui/"
            href="https://www.linkedin.com/in/ing-grey-uzcategui/"
            target="_blank"
            class="mb-4"
          ></v-list-item>

          <v-list-item
            prepend-icon="mdi-map-marker-outline"
            :title="$t('contact.labels.location')"
            :subtitle="$t('about.locationVal')"
          ></v-list-item>
        </v-list>
      </v-col>

      <!-- Formulario de contacto -->
      <v-col cols="12" md="7">
        <v-card class="pa-6 elevation-4 rounded-xl">
          <v-form v-model="valid" @submit.prevent="submitForm">
            <v-row class="ma-0">
              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="formData.name"
                  :label="$t('contact.form.name')"
                  variant="outlined"
                  hide-details="auto"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="formData.email"
                  :label="$t('contact.form.email')"
                  variant="outlined"
                  hide-details="auto"
                  required
                  type="email"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="formData.subject"
                  :label="$t('contact.form.subject')"
                  variant="outlined"
                  hide-details="auto"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-textarea
                  v-model="formData.message"
                  :label="$t('contact.form.message')"
                  variant="outlined"
                  rows="4"
                  hide-details="auto"
                  required
                ></v-textarea>
              </v-col>
              <v-col cols="12">
                <v-btn
                  color="primary"
                  size="large"
                  block
                  prepend-icon="mdi-send"
                  type="submit"
                  :disabled="!valid"
                >
                  {{ $t('contact.form.submit') }}
                </v-btn>
              </v-col>
            </v-row>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const valid = ref(false)
const formData = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const submitForm = () => {
  // Aquí iría la lógica para enviar el formulario (ej: Formspree, EmailJS o tu propio backend)
  alert(t('contact.form.demoAlert'))
}
</script>
