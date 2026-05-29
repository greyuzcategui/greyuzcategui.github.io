<template>
  <v-app>
    <!-- Navegación Lateral para móviles -->
    <v-navigation-drawer v-model="drawer" temporary>
      <v-list>
        <v-list-item
          prepend-avatar="https://metalmacana.github.io/assets/images/foto_carnet_grey_uzcategui.jpg"
          title="Grey Uzcátegui"
          :subtitle="$t('hero.subtitle')"
        ></v-list-item>
        <v-divider></v-divider>
        <v-list-item link :title="$t('nav.home')" @click="scrollTo('home')"></v-list-item>
        <v-list-item link :title="$t('nav.about')" @click="scrollTo('about')"></v-list-item>
        <v-list-item link :title="$t('nav.resume')" @click="scrollTo('resume')"></v-list-item>
        <v-list-item link :title="$t('nav.skills')" @click="scrollTo('skills')"></v-list-item>
        <v-list-item link :title="$t('nav.contact')" @click="scrollTo('contact')"></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- Barra de Navegación -->
    <v-app-bar flat class="px-md-10" elevation="1">
      <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer" class="hidden-md-and-up"></v-app-bar-nav-icon>
      
      <v-toolbar-title class="font-weight-bold text-primary">
        GREY UZCÁTEGUI
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <div class="hidden-sm-and-down">
        <v-btn variant="text" @click="scrollTo('home')">{{ $t('nav.home') }}</v-btn>
        <v-btn variant="text" @click="scrollTo('about')">{{ $t('nav.about') }}</v-btn>
        <v-btn variant="text" @click="scrollTo('resume')">{{ $t('nav.resume') }}</v-btn>
        <v-btn variant="text" @click="scrollTo('skills')">{{ $t('nav.skills') }}</v-btn>
        <v-btn color="primary" variant="flat" class="ml-4" @click="scrollTo('contact')">{{ $t('nav.contact') }}</v-btn>
      </div>

      <v-menu>
        <template v-slot:activator="{ props }">
          <v-btn
            icon="mdi-translate"
            variant="text"
            v-bind="props"
            class="ml-2"
          ></v-btn>
        </template>
        <v-list>
          <v-list-item @click="changeLanguage('es')">
            <v-list-item-title>Español</v-list-item-title>
          </v-list-item>
          <v-list-item @click="changeLanguage('en')">
            <v-list-item-title>English</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-btn
        icon="mdi-theme-light-dark"
        variant="text"
        @click="toggleTheme"
        class="ml-2"
      ></v-btn>
    </v-app-bar>

    <v-main style="overflow-x: hidden;">
      <router-view />
    </v-main>

    <v-footer class="text-center d-flex flex-column py-8 w-100" elevation="1" border="t">
      <div class="mb-4">
        <v-btn
          v-for="social in socialLinks"
          :key="social.icon"
          :icon="social.icon"
          :href="social.link"
          target="_blank"
          class="mx-4"
          variant="text"
          color="primary"
        ></v-btn>
      </div>
      <v-divider class="mb-6 w-50 mx-auto"></v-divider>
      <div class="text-body-2 font-weight-medium text-grey-darken-1">
        {{ new Date().getFullYear() }} — <strong>Ing. Grey Uzcátegui</strong>
      </div>
    </v-footer>
  </v-app>
</template>

<script lang="ts" setup>
  import { ref, watch } from 'vue'
  import { useTheme } from 'vuetify'
  import { useRoute, useRouter } from 'vue-router'
  import i18n from '@/plugins/i18n'

  const theme = useTheme()
  const route = useRoute()
  const router = useRouter()
  const drawer = ref(false)
  const socialLinks = [
    { icon: 'mdi-linkedin', link: 'https://www.linkedin.com/in/ing-grey-uzcategui/' },
    { icon: 'mdi-whatsapp', link: 'https://wa.me/584126008196' },
    { icon: 'mdi-send', link: 'https://t.me/greyuzcategui' },
    { icon: 'mdi-email', link: 'mailto:ing.greyuzcategui@gmail.com' }
  ]

  function toggleTheme() {
    theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
  }

  function changeLanguage(lang: 'es' | 'en') {
    i18n.global.locale.value = lang
  }

  async function scrollTo(id: string) {
    drawer.value = false

    if (route.name !== 'home') {
      await router.push({ name: 'home' })
      // Pequeña espera para asegurar que el DOM se cargó
      setTimeout(() => {
        const element = document.getElementById(id)
        if (element) element.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    } else {
      const element = document.getElementById(id)
      if (element) element.scrollIntoView({ behavior: 'smooth' })
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
