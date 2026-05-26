<template>
  <div>
    <h3 class="text-h4 font-weight-bold mb-10 text-center">Contacto</h3>
    
    <v-row class="ma-0">
      <!-- Información de contacto -->
      <v-col cols="12" md="5">
        <h4 class="text-h5 font-weight-bold mb-6">¿Tienes un proyecto en mente?</h4>
        <p class="text-body-1 mb-8">
          Estoy disponible para consultorías, desarrollo de proyectos a medida o para formar parte de equipos innovadores. 
          Hablemos y creemos una relación <strong>ganar-ganar</strong>.
        </p>

        <v-list bg-color="transparent">
          <v-list-item
            prepend-icon="mdi-email-outline"
            title="Email"
            subtitle="ing.greyuzcategui@gmail.com"
            class="mb-4"
          ></v-list-item>
          
          <v-list-item
            prepend-icon="mdi-linkedin"
            title="LinkedIn"
            subtitle="linkedin.com/in/greyuzcategui"
            href="https://linkedin.com/in/greyuzcategui"
            target="_blank"
            class="mb-4"
          ></v-list-item>

          <v-list-item
            prepend-icon="mdi-map-marker-outline"
            title="Ubicación"
            subtitle="Caracas, Venezuela"
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
                  label="Nombre"
                  variant="outlined"
                  hide-details="auto"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="formData.email"
                  label="Email"
                  variant="outlined"
                  hide-details="auto"
                  required
                  type="email"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="formData.subject"
                  label="Asunto"
                  variant="outlined"
                  hide-details="auto"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-textarea
                  v-model="formData.message"
                  label="Mensaje"
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
                  Enviar Mensaje
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

const valid = ref(false)
const formData = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const submitForm = () => {
  // Aquí iría la lógica para enviar el formulario (ej: Formspree, EmailJS o tu propio backend)
  alert('Gracias por tu mensaje. Esta es una demostración, el formulario no está conectado actualmente.')
}
</script>
