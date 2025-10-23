<template>
  <section class="bg-gray-50 py-12 sm:py-16 lg:py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Titulo de seccion -->
      <div class="text-center mb-8 sm:mb-10 lg:mb-12">
        <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          Nuestros Planes
        </h2>
        <p class="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Elige el plan que mejor se adapte a tu mascota y disfruta de la tranquilidad de tener su salud protegida
        </p>
      </div>

      <!-- Loading -->
      <div v-if="loading" class="text-center text-gray-600 py-8">
        <div class="inline-flex items-center gap-2">
          <div class="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600"></div>
          <span class="text-sm sm:text-base">Cargando Planes...</span>
        </div>
      </div>

      <!-- Grid de planes -->
      <div v-else class="grid gap-6 sm:gap-8 lg:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <!-- Card de cada plan -->
        <div v-for="plan in planes" :key="plan._id"
          class="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden">

          <!-- Imagen -->
          <div class="relative">
            <img :src="plan.img || '/default-plan.png'" :alt="plan.name"
              class="w-full h-40 sm:h-48 lg:h-56 object-cover" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>

          <!-- Contenido de la card -->
          <div class="p-4 sm:p-5 lg:p-6 flex flex-col">
            <!-- Titulo -->
            <h3 class="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4 text-center">
              {{ plan.name }}
            </h3>

            <!-- Descripcion -->
            <p class="text-gray-600 text-xs sm:text-sm lg:text-balance mb-6 sm:mb-8 text-center leading-relaxed flex-1">
              {{ plan.desc }}
            </p>

            <!-- Lista de coberturas -->
            <ul class="space-y-2 sm:space-y-6 flex-1 mb-6 sm:mb-8">
              <li v-for="(beneficio, index) in plan.benefits" :key="index"
                class="flex items-center gap-3 text-gray-700 text-xs sm:text-sm lg:text-base text-pretty">
                <span class="flex-shrink-0 mt-0.5">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                    class="text-green-500">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </span>
                <span>{{ beneficio }}</span>
              </li>
            </ul>

            <!-- Boton -->
            <RouterLink :to="`/planes/${plan._id}`"
              class="w-full px-4 py-2 sm:py-3 bg-blue-600 text-white text-center rounded-lg hover:bg-blue-700 transition-colors duration-300 text-sm sm:text-base font-medium">
              Ver más
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref, onMounted } from 'vue';

// Estado
const planes = ref([])
const loading = ref(true)

// URL de Render
const API_URL = 'https://backend-vetplus.onrender.com'

// Llamado a la API
onMounted(async () => {
  try {
    const res = await fetch(`${API_URL}/api/planes/tipo/dog`)
    planes.value = await res.json()
  } catch (error) {
    console.error("Error al cargar los planes", error);
  } finally {
    loading.value = false
  }
})
</script>