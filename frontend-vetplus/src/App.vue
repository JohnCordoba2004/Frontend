<script setup lang="ts">
import Header from './components/Header.vue';
// import Copyright from './components/copyright.vue'; // Asegúrate de que la ruta sea correcta
import { useHead } from '@unhead/vue'

useHead({
  // El %s se sustituye por el título de la página actual
  titleTemplate: '%s | VetPlus',
})
  title: 'Medicina Prepagada Veterinaria'
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <header>
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