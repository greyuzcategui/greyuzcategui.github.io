<template>
  <div>
    <section id="home">
      <HeroSection @scroll-to="scrollTo" />
    </section>

    <section id="about" class="py-16 bg-surface">
      <v-container :fluid="$vuetify.display.smAndDown">
        <AboutSection />
      </v-container>
    </section>

    <section id="resume" class="py-16 bg-background">
      <v-container :fluid="$vuetify.display.smAndDown">
        <ResumeSection />
      </v-container>
    </section>

    <section id="skills" class="py-16 bg-surface">
      <v-container :fluid="$vuetify.display.smAndDown">
        <SkillsSection />
      </v-container>
    </section>

    <section id="courses" class="py-16 bg-background">
      <v-container :fluid="$vuetify.display.smAndDown">
        <CoursesSection />
      </v-container>
    </section>

    <section id="contact" class="py-16 bg-surface">
      <v-container :fluid="$vuetify.display.smAndDown">
        <ContactSection />
      </v-container>
    </section>
  </div>
</template>

<script setup lang="ts">
import HeroSection from '@/components/HeroSection.vue'
import AboutSection from '@/components/AboutSection.vue'
import ResumeSection from '@/components/ResumeSection.vue'
import SkillsSection from '@/components/SkillsSection.vue'
import CoursesSection from '@/components/CoursesSection.vue'
import ContactSection from '@/components/ContactSection.vue'

function scrollTo(id: string) {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>
