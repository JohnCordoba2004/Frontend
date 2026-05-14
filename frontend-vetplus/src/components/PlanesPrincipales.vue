<template>
  <section class="bg-gray-50 py-16 sm:py-20 lg:py-24">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">

      <!-- Título de sección -->
      <div class="text-center mb-12 lg:mb-16">
        <span class="inline-block px-5 py-2 bg-sky-100 text-sky-700 text-sm font-medium rounded-full mb-4">
          Nuestros Planes
        </span>
        <h2 class="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
          Elige el plan ideal<br>para tu mascota
        </h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          Planes diseñados según la edad, raza y necesidades específicas de tu perro o gato.
        </p>
      </div>

      <!-- Skeleton Loading -->
      <div v-if="loading" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        <SkeletonCard v-for="n in 3" :key="n" />
      </div>

      <!-- Grid de Planes -->
      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        <div v-for="plan in planesRaw" :key="plan._id"
          class="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col h-full">
          <!-- Imagen -->
          <div class="relative h-56 overflow-hidden">
            <img :src="plan.img || '/default-plan.png'" :alt="plan.name"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
            <div
              class="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium shadow">
              {{ plan.tipo || 'Plan' }}
            </div>
          </div>

          <!-- Contenido -->
          <div class="flex-1 p-6 flex flex-col">
            <h3 class="text-2xl font-bold text-gray-900 mb-3">
              {{ plan.name }}
            </h3>

            <p class="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
              {{ plan.desc }}
            </p>

            <!-- Beneficios -->
            <ul class="space-y-3 mb-8 flex-1">
              <li v-for="(beneficio, index) in plan.benefits" :key="index"
                class="flex items-start gap-3 text-sm text-gray-700">
                <span class="text-green-500 mt-0.5">✓</span>
                <span>{{ beneficio }}</span>
              </li>
            </ul>

            <!-- Botón -->
            <RouterLink :to="`/planes/${plan._id}`"
              class="mt-auto w-full py-4 bg-sky-600 hover:bg-sky-700 text-white font-semibold rounded-2xl text-center transition-all duration-300 flex items-center justify-center gap-2 group-hover:gap-3">
              Ver detalles del plan
              <span class="transition-transform group-hover:translate-x-1">→</span>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import SkeletonCard from './SkeletonCard.vue';

const props = defineProps({
  tipoFiltro: {
    type: String,
    default: 'dog'
  }
});

const planesRaw = ref([])
const loading = ref(true)
const API_URL = import.meta.env.VITE_API_URL || ['https://backend-', 'vet', 'plus.onrender.com'].join('')

const endpointPlanes = computed(() =>
  `${API_URL}/api/planes/tipo/${props.tipoFiltro}`
);

onMounted(async () => {
  try {
    const res = await fetch(endpointPlanes.value)

    if (!res.ok) throw new Error("No fue posible cargar los planes")

    planesRaw.value = await res.json()
  } catch (error) {
    console.error("Error al cargar los planes:", error)
  } finally {
    loading.value = false
  }
})
</script>