<template>
  <v-app>
    <!-- Navegación Lateral para móviles -->
    <v-navigation-drawer v-model="drawer" temporary>
      <v-list>
        <v-list-item
          prepend-avatar="https://metalmacana.github.io/assets/images/foto_carnet_grey_uzcategui.jpg"
          title="Grey Uzcátegui"
          subtitle="Ingeniero de Sistemas"
        ></v-list-item>
        <v-divider></v-divider>
        <v-list-item link title="Inicio" @click="scrollTo('home')"></v-list-item>
        <v-list-item link title="Sobre mí" @click="scrollTo('about')"></v-list-item>
        <v-list-item link title="Resumen" @click="scrollTo('resume')"></v-list-item>
        <v-list-item link title="Habilidades" @click="scrollTo('skills')"></v-list-item>
        <v-list-item link title="Contacto" @click="scrollTo('contact')"></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- Barra de Navegación -->
    <v-app-bar flat class="px-md-10" color="white" elevation="1">
      <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer" class="hidden-md-and-up"></v-app-bar-nav-icon>
      
      <v-toolbar-title class="font-weight-bold text-primary">
        GREY UZCÁTEGUI
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <div class="hidden-sm-and-down">
        <v-btn variant="text" @click="scrollTo('home')">Inicio</v-btn>
        <v-btn variant="text" @click="scrollTo('about')">Sobre mí</v-btn>
        <v-btn variant="text" @click="scrollTo('resume')">Resumen</v-btn>
        <v-btn variant="text" @click="scrollTo('skills')">Habilidades</v-btn>
        <v-btn color="primary" variant="flat" class="ml-4" @click="scrollTo('contact')">Contacto</v-btn>
      </div>

      <v-btn
        icon="mdi-theme-light-dark"
        variant="text"
        @click="toggleTheme"
        class="ml-2"
      ></v-btn>
    </v-app-bar>

    <v-main style="overflow-x: hidden;">
      <section id="home">
        <HeroSection @scroll-to="scrollTo" />
      </section>

      <v-container :fluid="$vuetify.display.smAndDown">
        <section id="about" class="py-12">
          <AboutSection />
        </section>

        <v-divider></v-divider>

        <section id="resume" class="py-12">
          <ResumeSection />
        </section>

        <v-divider></v-divider>

        <section id="skills" class="py-12">
          <SkillsSection />
        </section>

        <v-divider></v-divider>

        <section id="contact" class="py-12">
          <ContactSection />
        </section>
      </v-container>
    </v-main>

    <v-footer class="bg-grey-darken-4 text-white text-center d-flex flex-column py-6 w-100">
      <div class="mb-4">
        <v-btn v-for="icon in icons" :key="icon" :icon="icon" class="mx-4" variant="text"></v-btn>
      </div>
      <v-divider class="mb-4" color="white"></v-divider>
      <div>
        {{ new Date().getFullYear() }} — <strong>Ing. Grey Uzcátegui</strong>
      </div>
    </v-footer>
  </v-app>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  import { useTheme } from 'vuetify'
  import HeroSection from '@/components/HeroSection.vue'
  import AboutSection from '@/components/AboutSection.vue'
  import ResumeSection from '@/components/ResumeSection.vue'
  import SkillsSection from '@/components/SkillsSection.vue'
  import ContactSection from '@/components/ContactSection.vue'

  const theme = useTheme()
  const drawer = ref(false)
  const icons = ['mdi-linkedin', 'mdi-github', 'mdi-twitter', 'mdi-email']

  function toggleTheme() {
    theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
  }

  function scrollTo(id: string) {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      drawer.value = false
    }
  }
</script>

<style>
html, body {
  overflow-x: hidden !important;
  width: 100% !important;
  margin: 0 !important;
  padding: 0 !important;
}

#app {
  overflow-x: hidden !important;
  width: 100% !important;
}

section {
  scroll-margin-top: 64px;
}
</style>
