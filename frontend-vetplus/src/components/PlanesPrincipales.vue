<template>
  <section class="bg-white py-16 sm:py-20 lg:py-28">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">

      <!-- Título de sección -->
      <div class="text-center mb-12 lg:mb-16">
        <span class="inline-flex items-center gap-2 self-start justify-center w-full mb-4 text-sky-700">
          <i class="fa-solid fa-heartbeat"></i>
          <span
            class="inline-block px-5 py-2 bg-sky-50 border border-sky-200 text-sky-700 text-xs font-bold tracking-widest uppercase rounded-full">
            Planes disponibles
          </span>
        </span>
        <h2 class="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.9] text-slate-900 mb-6">
          Elige el plan<br><span class="text-transparent bg-clip-text bg-linear-to-r from-sky-500 to-emerald-500">ideal
            para tu mascota</span>
        </h2>
        <p class="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Planes diseñados según la edad, raza y necesidades específicas de tu perro o gato. Con cobertura completa y
          beneficios exclusivos.
        </p>
      </div>

      <!-- Skeleton Loading -->
      <div v-if="loading" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        <SkeletonCard v-for="n in 3" :key="n" />
      </div>

      <!-- Grid de Planes -->
      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        <div v-for="plan in planesRaw" :key="plan._id"
          class="group relative bg-white rounded-2xl overflow-hidden hover:shadow-2xl hover:scale-100 transition-all duration-300 flex flex-col h-full border-none shadow-lg">

          <!-- Halo decorativo de fondo -->
          <div
            class="absolute top-0 right-0 w-40 h-40 bg-sky-50 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10">
          </div>

          <!-- Imagen -->
          <div class="relative h-56 overflow-hidden bg-linear-to-br from-sky-50 to-emerald-50">
            <img :src="plan.img || '/default-plan.png'"
              :alt="`${plan.name} - Plan de medicina prepagada veterinaria PetSalud`"
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">

            <!-- Badge tipo plan -->
            <div
              class="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full text-xs font-bold shadow-lg border border-white/50">
              <span class="text-sky-600">{{ plan.tipo || 'Plan' }}</span>
            </div>
          </div>

          <!-- Contenido -->
          <div class="flex-1 p-6 lg:p-7 flex flex-col">
            <!-- Nombre del plan -->
            <h3 class="text-2xl lg:text-3xl font-black text-slate-900 mb-3 tracking-tight">
              {{ plan.name }}
            </h3>

            <!-- Descripción -->
            <p class="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-2 shrink-0">
              {{ plan.desc }}
            </p>

            <!-- Beneficios -->
            <ul class="space-y-2 mb-8 flex-1">
              <li v-for="(beneficio, index) in plan.benefits?.slice(0, 4)" :key="index"
                class="flex items-start gap-3 text-sm text-slate-700">
                <span class="text-emerald-500 font-bold text-lg shrink-0">✓</span>
                <span class="leading-relaxed">{{ beneficio }}</span>
              </li>
            </ul>

            <!-- Botón -->
            <RouterLink :to="`/planes/${plan._id}`"
              class="mt-auto w-full py-3.5 bg-linear-to-r from-sky-600 to-sky-700 hover:from-sky-700 hover:to-sky-800 active:scale-95 text-white font-bold rounded-xl text-center transition-all duration-300 flex items-center justify-center gap-2 group-hover:gap-3 shadow-lg shadow-sky-600/25">
              Ver detalles
              <span class="transition-transform group-hover:translate-x-1">
                <i class="fa-solid fa-angle-right"></i></span>
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