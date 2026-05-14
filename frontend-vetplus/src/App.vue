<script setup lang="ts">
import { useRoute } from 'vue-router';
import { computed } from 'vue';
import Header from './components/Header.vue';
// import Copyright from './components/copyright.vue'; // Asegúrate de que la ruta sea correcta
import { useHead } from '@unhead/vue'

useHead({
  // El %s se sustituye por el título de la página actual
  titleTemplate: '%s | PetSalud',
  title: 'Medicina Prepagada Veterinaria'
})

const route = useRoute()

const mostrarHeader = computed(() => {
  return route.name !== "Login" && route.name !== "Admin"
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