<template>
  <div class="bg-white min-h-screen">
    <section class="max-w-7xl mx-auto px-6 py-16 lg:py-24">
      <!-- Título -->
      <div class="text-center mb-16">
        <div class="inline-flex items-center gap-3 bg-emerald-100 text-emerald-700 px-6 py-3 rounded-3xl mb-6">
          <i class="fa-solid fa-gift text-xl"></i>
          <span class="font-medium">Beneficios Exclusivos</span>
        </div>
        <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
          Beneficios para Afiliados
        </h1>
        <p class="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
          Descuentos y ventajas especiales para ti y tu mascota
        </p>
      </div>

      <!-- Loading -->
      <div v-if="loading" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <SkeletonCard v-for="n in 3" :key="n" />
      </div>

      <!-- Grid de Beneficios -->
      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="benefit in beneficios" :key="benefit.id"
          class="bg-white border border-gray-100 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col">

          <!-- Imagen -->
          <div class="h-56 bg-gray-100 flex items-center justify-center p-6">
            <img :src="benefit.img" :alt="benefit.name" class="max-h-40 w-auto object-contain"
              @error="manejarErrorImg(benefit)">
          </div>

          <div class="p-8 flex flex-col grow">
            <h3 class="font-semibold text-2xl text-gray-900 mb-6">
              {{ benefit.name }}
            </h3>

            <!-- Dirección -->
            <div class="flex items-start gap-3 mb-4">
              <i class="fa-solid fa-location-dot text-xl text-sky-500 mt-1"></i>
              <div>
                <a v-if="benefit.direction && benefit.direction.length"
                  :href="`https://www.google.com/maps/search/?api=1&query=${benefit.direction[0]}`" target="_blank"
                  class="text-gray-700 hover:text-sky-600 hover:underline transition-colors">
                  {{ benefit.direction[0] }}
                </a>
                <p v-else class="text-gray-400 italic">Dirección no disponible</p>
              </div>
            </div>

            <!-- Teléfono -->
            <div class="flex items-start gap-3 mb-4">
              <i class="fa-solid fa-phone text-xl text-sky-500 mt-1"></i>
              <p class="text-gray-700">{{ benefit.telefono.join('') }}</p>
            </div>

            <!-- Web -->
            <div class="flex items-start gap-3 mb-6">
              <i class="fa-solid fa-globe text-xl text-sky-500 mt-1"></i>
              <a :href="benefit.web" target="_blank" class="text-sky-600 hover:underline font-medium">
                {{ benefit.web.join('') }}
              </a>
            </div>

            <!-- Descripción -->
            <p class="text-gray-600 leading-relaxed grow">
              {{ benefit.desc.join('') }}
            </p>

            <!-- Contacto -->
            <p class="text-sm text-gray-500 mt-6">
              Contacto: <span class="font-medium text-gray-700">{{ benefit.contact.join(' • ') }}</span>
            </p>

            <!-- Botón Ver más -->
            <RouterLink :to="`/beneficios/${benefit._id}`"
              class="mt-8 block w-full text-center bg-sky-600 hover:bg-sky-700 text-white py-4 rounded-2xl font-semibold transition-all">
              Ver más
            </RouterLink>
          </div>
        </div>
      </div>
    </section>

    <footerInfo />
    <copyright />
  </div>
</template>

<script setup>
import copyright from '../components/copyright.vue';
import SkeletonCard from '../components/SkeletonCard.vue';
import { ref, onMounted } from 'vue';
import { useHead } from '@unhead/vue';
import footerInfo from '../components/footerInfo.vue';


const beneficios = ref([])
const loading = ref(true)
const API_URL = import.meta.env.VITE_API_URL || ['https://backend-', 'vet', 'plus.onrender.com'].join('')


useHead({
  title: 'Beneficios - PetSalud',
  meta: [
    { name: 'description', content: 'Conoce los descuentos y ventajas exclusivas de PetSalud para afiliados.' }
  ]
})

// Función para manejar error de imagen
const manejarErrorImg = (item) => {
  item.img = 'https://res.cloudinary.com/diro0cqpe/image/upload/v1778818725/5E5A7522-scaled_efabdh.jpg'
}

onMounted(async () => {
  try {
    const res = await fetch(`${API_URL}/api/beneficios`);
    if (res.ok) {
      beneficios.value = await res.json();
    }
  } catch (error) {
    console.error("Errro al cargar beneficios", error)
  } finally {
    loading.value = false
  }
})

</script>