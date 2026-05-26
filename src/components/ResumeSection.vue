<template>
  <div>
    <h3 class="text-h4 font-weight-bold mb-8 text-center">Trayectoria Profesional</h3>
    
    <v-timeline :side="$vuetify.display.xs ? 'end' : undefined" :density="$vuetify.display.xs ? 'compact' : 'default'" align="start">
      <!-- Uzmar / Comexport -->
      <v-timeline-item
        dot-color="primary"
        size="small"
      >
        <template v-slot:opposite v-if="!$vuetify.display.xs">
          <div class="text-h6 font-weight-bold text-primary">2025 - Presente</div>
        </template>
        <v-card class="elevation-2 rounded-lg">
          <v-card-title class="text-h6 pb-0 text-wrap">
            Líder de Proyecto & Arquitecto de Software
          </v-card-title>
          <v-card-subtitle class="text-primary font-weight-bold">
            Agencia Uzmar / Caso Comexport <span v-if="$vuetify.display.xs">| 2025 - Pres.</span>
          </v-card-subtitle>
          <v-card-text class="text-body-2">
            Liderazgo de célula de desarrollo para plataforma ERP/CRM logística de misión crítica. 
            Arquitectura completa del sistema (Laravel 11, Vue.js, MySQL) y mentoría técnica de desarrolladores.
          </v-card-text>
        </v-card>
      </v-timeline-item>

      <!-- Freelance Proyectos Internacionales -->
      <v-timeline-item
        dot-color="secondary"
        size="small"
      >
        <template v-slot:opposite v-if="!$vuetify.display.xs">
          <div class="text-h6 font-weight-bold text-secondary">2024 - 2025</div>
        </template>
        <v-card class="elevation-2 rounded-lg">
          <v-card-title class="text-h6 pb-0 text-wrap">
            Consultor Senior Fullstack & DevOps
          </v-card-title>
          <v-card-subtitle class="text-secondary font-weight-bold">
            Clientes Internacionales <span v-if="$vuetify.display.xs">| 2024 - 2025</span>
          </v-card-subtitle>
          <v-card-text class="text-body-2">
            Migración de infraestructuras IoT a AWS/Docker, implementación de motores de workflows visuales en React y desarrollo de aplicaciones móviles híbridas con Ionic.
          </v-card-text>
        </v-card>
      </v-timeline-item>

      <!-- Sondeos -->
      <v-timeline-item
        dot-color="primary-darken-1"
        size="small"
      >
        <template v-slot:opposite v-if="!$vuetify.display.xs">
          <div class="text-h6 font-weight-bold text-grey-darken-1">2019 - Presente</div>
        </template>
        <v-card class="elevation-2 rounded-lg">
          <v-card-title class="text-h6 pb-0 text-wrap">
            Desarrollador Backend / Fullstack Senior
          </v-card-title>
          <v-card-subtitle class="text-grey-darken-1 font-weight-bold">
            Sondeos (ATX, Arg) <span v-if="$vuetify.display.xs">| 2019 - Pres.</span>
          </v-card-subtitle>
          <v-card-text class="text-body-2">
            Evolución de monolitos hacia microservicios con Java/Spring Boot y arquitecturas orientadas a eventos con Apache Kafka. Optimización de mensajería masiva y desarrollo Core Multichannel.
          </v-card-text>
        </v-card>
      </v-timeline-item>

      <!-- Kiwisoftware -->
      <v-timeline-item
        dot-color="grey"
        size="small"
      >
        <template v-slot:opposite v-if="!$vuetify.display.xs">
          <div class="text-h6 font-weight-bold text-grey">2017 - 2019</div>
        </template>
        <v-card class="elevation-2 rounded-lg">
          <v-card-title class="text-h6 pb-0 text-wrap">
            Ingeniero de Sistemas Web / Líder
          </v-card-title>
          <v-card-subtitle class="text-grey font-weight-bold">
            Kiwisoftware RL <span v-if="$vuetify.display.xs">| 2017 - 2019</span>
          </v-card-subtitle>
          <v-card-text class="text-body-2">
            Formulación de proyectos, estimaciones de tiempos y desarrollo fullstack bajo Software Libre (PHP/Laravel).
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>

    <v-divider class="my-12"></v-divider>

    <!-- Educación -->
    <h3 class="text-h4 font-weight-bold mb-10 text-center">Educación</h3>
    <v-row justify="center">
      <v-col cols="12" md="10">
        <v-list lines="two" border rounded-lg>
          <v-list-item
            prepend-icon="mdi-school"
            title="Maestría en Ingeniería de Sistemas (Mención Control)"
            subtitle="Universidad Simón Bolívar | 2013 - 2015"
          ></v-list-item>
          <v-divider inset></v-divider>
          <v-list-item
            prepend-icon="mdi-certificate"
            title="Ingeniero de Sistemas"
            subtitle="UNEXPO Luis Caballero Mejías | 2004 - 2010"
          ></v-list-item>
          <v-divider inset></v-divider>
          <v-list-item
            prepend-icon="mdi-brain"
            title="Especialización en IA y LLMs"
            subtitle="Formación continua en workflows guiados por IA"
          ></v-list-item>
        </v-list>
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
</script>
