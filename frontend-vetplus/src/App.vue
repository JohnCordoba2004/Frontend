<script setup lang="ts">
import { useRoute } from 'vue-router';
import { computed } from 'vue';
import Header from './components/Header.vue';
import { useHead } from '@unhead/vue'

useHead({
  titleTemplate: '%s | PetSalud',
  title: 'Medicina Prepagada Veterinaria'
})

const route = useRoute()

const mostrarHeader = computed(() => {
  return route.name !== "Login" && route.name !== "Admin"
})

// Generar canonical dinámico
const canonicalUrl = computed(() => {
  const baseUrl = 'https://petsalud.com'
  return `${baseUrl}${route.path}`
})

// Agregar canonical a head
useHead({
  link: [
    {
      rel: 'canonical',
      href: canonicalUrl
    }
  ]
})
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <header v-if="mostrarHeader">
      <div>
        <Header />
      </div>
    </header>

    <main class="flex-1">
      <RouterView />
    </main>
    <!-- <Copyright /> -->
  </div>
</template>

<style scoped>
/* No necesitas estilos extra aquí si usas las clases de Tailwind de arriba */
</style>