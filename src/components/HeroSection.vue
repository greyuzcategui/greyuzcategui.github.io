<template>
  <v-container fluid class="hero-section bg-grey-lighten-4 pa-0">
    <v-row align="center" justify="center" class="ma-0" style="min-height: 85vh; padding-top: 80px; padding-bottom: 40px;">
      <v-col cols="12" md="8" class="text-center px-6">
        <v-avatar size="200" size-md="360" class="mb-6 elevation-10">
          <v-img
            src="https://metalmacana.github.io/assets/images/foto_carnet_grey_uzcategui.jpg"
            alt="Grey Uzcátegui"
          ></v-img>
        </v-avatar>
        <h1 class="text-h4 text-md-h2 font-weight-bold mb-2 text-primary">Grey Uzcátegui</h1>
        <h2 class="text-body-1 text-md-h5 font-weight-light mb-6 text-grey-darken-1">
          Ingeniero de Sistemas | Líder Técnico | Arquitecto de Software
        </h2>
        
        <p class="text-body-2 text-md-body-1 mb-8 mx-auto" style="max-width: 700px">
          Soy un ingeniero de sistemas dedicado al diseño y desarrollo de soluciones tecnológicas. 
          Mi enfoque se basa en crear relaciones <strong>ganar-ganar</strong> a través de la innovación 
          y la excelencia técnica.
        </p>

        <div class="d-flex flex-column flex-sm-row justify-center align-center">
          <v-btn
            color="primary"
            size="large"
            prepend-icon="mdi-email-outline"
            class="mb-4 mb-sm-0 mr-sm-4 px-8 w-100 w-sm-auto"
            @click="$emit('scroll-to', 'contact')"
          >
            Contáctame
          </v-btn>

          <v-btn
            variant="outlined"
            color="primary"
            size="large"
            prepend-icon="mdi-download"
            class="px-8 w-100 w-sm-auto"
            href="/cv_grey_uzcategui_2026.pdf"
            target="_blank"
            download
          >
            Descargar CV
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
defineEmits(['scroll-to'])
</script>

<style scoped>
.hero-section {
  min-height: 90vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
}
</style>
