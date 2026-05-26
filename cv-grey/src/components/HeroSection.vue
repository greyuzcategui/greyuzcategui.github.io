<template>
  <v-container fluid class="fill-height hero-section bg-grey-lighten-4">
    <v-row align="center" justify="center">
      <v-col cols="12" md="8" class="text-center">
        <v-avatar size="180" class="mb-6 elevation-10">
          <v-img
            src="https://metalmacana.github.io/assets/images/foto_carnet_grey_uzcategui.jpg"
            alt="Grey Uzcátegui"
          ></v-img>
        </v-avatar>
        <h1 class="text-h2 font-weight-bold mb-2 text-primary">Grey Uzcátegui</h1>
        <h2 class="text-h5 font-weight-light mb-6 text-grey-darken-1">
          Ingeniero de Sistemas | Líder Técnico | Arquitecto de Software
        </h2>
        
        <p class="text-body-1 mb-8 mx-auto" style="max-width: 700px">
          Soy un ingeniero de sistemas dedicado al diseño y desarrollo de soluciones tecnológicas. 
          Mi enfoque se basa en crear relaciones <strong>ganar-ganar</strong> a través de la innovación 
          y la excelencia técnica.
        </p>

        <v-btn
          color="primary"
          size="large"
          prepend-icon="mdi-email-outline"
          class="mr-4 px-8"
          @click="$emit('scroll-to', 'contact')"
        >
          Contáctame
        </v-btn>

        <v-btn
          variant="outlined"
          color="primary"
          size="large"
          prepend-icon="mdi-download"
          class="px-8"
        >
          Descargar CV
        </v-btn>
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
