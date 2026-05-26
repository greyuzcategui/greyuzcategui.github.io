<template>
  <v-row class="ma-0">
    <v-col cols="12" md="4">
      <v-card variant="flat" class="bg-grey-lighten-4 pa-4 rounded-lg">
        <h3 class="text-h5 font-weight-bold mb-4 text-primary">Datos Personales</h3>
        <v-list bg-color="transparent" density="comfortable">
          <v-list-item prepend-icon="mdi-map-marker" title="Ubicación" subtitle="Caracas, Venezuela"></v-list-item>
          <v-list-item prepend-icon="mdi-cake" title="Nacimiento" subtitle="06 Noviembre 1987"></v-list-item>
          <v-list-item prepend-icon="mdi-email" title="Email" subtitle="ing.greyuzcategui@gmail.com"></v-list-item>
          <v-list-item prepend-icon="mdi-web" title="Web" subtitle="greyuzcategui.github.io"></v-list-item>
        </v-list>
        <v-btn
          block
          color="primary"
          variant="tonal"
          class="mt-4"
          prepend-icon="mdi-linkedin"
          href="https://linkedin.com/in/greyuzcategui"
          target="_blank"
        >
          LinkedIn
        </v-btn>
      </v-card>
    </v-col>

    <v-col cols="12" md="8">
      <h3 class="text-h4 font-weight-bold mb-4">Perfil Profesional</h3>
      <p class="text-body-1 mb-6 text-justify">
        Ingeniero de Sistemas con 15 años de trayectoria en el desarrollo de aplicaciones web (Frontend y Backend). 
        Durante los últimos 3 años, he evolucionado hacia roles de <strong>liderazgo técnico y arquitectura</strong>, 
        asumiendo responsabilidades en la formación de equipos, diseño de soluciones escalables, 
        gestión de requerimientos (PMO) y administración de infraestructura (DevOps).
      </p>
      
      <v-row>
        <v-col cols="12" sm="6">
          <v-card variant="outlined" class="pa-4 h-100 border-primary">
            <v-icon color="primary" size="large" class="mb-2">mdi-xml</v-icon>
            <h4 class="text-h6 font-weight-bold mb-2">Desarrollo Fullstack</h4>
            <p class="text-body-2">Diseño y construcción de aplicaciones robustas con Java, PHP, Groovy, Vue.js y React.</p>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6">
          <v-card variant="outlined" class="pa-4 h-100 border-primary">
            <v-icon color="primary" size="large" class="mb-2">mdi-account-group</v-icon>
            <h4 class="text-h6 font-weight-bold mb-2">Liderazgo Técnico</h4>
            <p class="text-body-2">Formación de talentos, mentoría de desarrolladores y gestión ágil de proyectos.</p>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6">
          <v-card variant="outlined" class="pa-4 h-100 border-primary">
            <v-icon color="primary" size="large" class="mb-2">mdi-cloud-sync</v-icon>
            <h4 class="text-h6 font-weight-bold mb-2">Arquitectura & Cloud</h4>
            <p class="text-body-2">Diseño de sistemas distribuidos, microservicios y despliegue en entornos Cloud.</p>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6">
          <v-card variant="outlined" class="pa-4 h-100 border-primary">
            <v-icon color="primary" size="large" class="mb-2">mdi-brain</v-icon>
            <h4 class="text-h6 font-weight-bold mb-2">IA & Optimización</h4>
            <p class="text-body-2">Implementación de soluciones guiadas por IA y LLMs para optimizar procesos de negocio.</p>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
</script>
