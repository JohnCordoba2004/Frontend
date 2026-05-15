<template>
  <div class="bg-gray-50 min-h-screen">
    <main class="max-w-5xl mx-auto px-6 py-12 lg:py-20">

      <!-- Botón Regresar -->
      <button @click="$router.back()"
        class="flex items-center gap-3 text-gray-600 hover:text-gray-900 mb-10 transition-colors group">
        <span class="text-2xl group-hover:-translate-x-1 transition-transform">←</span>
        <span class="font-medium">Regresar a beneficios</span>
      </button>

      <!-- Loading -->
      <div v-if="loading" class="flex justify-center py-32">
        <SkeletonCard />
      </div>

      <!-- Error / No encontrado -->
      <div v-else-if="error" class="text-center py-32">
        <p class="text-red-600 text-2xl mb-6">{{ error }}</p>
        <router-link to="/beneficios"
          class="inline-block px-8 py-4 bg-sky-600 text-white rounded-2xl hover:bg-sky-700 transition-all">
          Volver al listado de beneficios
        </router-link>
      </div>

      <!-- Contenido del Beneficio -->
      <div v-else-if="beneficio" class="bg-white rounded-3xl shadow-2xl overflow-hidden">

        <!-- Header -->
        <div class="bg-linear-to-br from-emerald-600 to-emerald-500 text-white py-16 px-10 text-center">
          <h1 class="text-4xl lg:text-5xl font-bold tracking-tight">
            {{ beneficio.name }}
          </h1>
        </div>

        <div class="p-10 lg:p-16">

          <!-- Imagen principal -->
          <div class="flex justify-center mb-12">
            <img :src="beneficio.img" :alt="beneficio.name" class="max-w-md lg:max-w-lg rounded-2xl shadow-xl"
              @error="manejarErrorImg(beneficio)">
          </div>

          <!-- Información -->
          <div class="grid md:grid-cols-2 gap-10 max-w-3xl mx-auto">

            <!-- Dirección -->
            <div>
              <div class="flex items-center gap-3 mb-3">
                <i class="fa-solid fa-location-dot text-3xl text-emerald-600"></i>
                <h3 class="text-xl font-semibold text-gray-900">Dirección</h3>
              </div>
              <div>
                <a v-if="beneficio.direction && beneficio.direction.length"
                  :href="`https://www.google.com/maps/search/?api=1&query=${beneficio.direction}`" target="_blank"
                  class="text-gray-700 hover:text-sky-600 hover:underline transition-colors">
                  {{ beneficio.direction[0] }}
                </a>
                <p v-else class="text-gray-400 italic">Dirección no disponible</p>
              </div>
            </div>

            <!-- Teléfono -->
            <div>
              <div class="flex items-center gap-3 mb-3">
                <i class="fa-solid fa-phone text-3xl text-emerald-600"></i>
                <h3 class="text-xl font-semibold text-gray-900">Teléfono</h3>
              </div>
              <p class="text-gray-700 text-lg">{{ beneficio.telefono.join('') }}</p>
            </div>

            <!-- Web -->
            <div>
              <div class="flex items-center gap-3 mb-3">
                <i class="fa-solid fa-globe text-3xl text-emerald-600"></i>
                <h3 class="text-xl font-semibold text-gray-900">Sitio Web</h3>
              </div>
              <a :href="beneficio.web" target="_blank" class="text-emerald-600 hover:underline text-lg break-all">
                {{ beneficio.web.join('') }}
              </a>
            </div>

            <!-- Contacto -->
            <div>
              <div class="flex items-center gap-3 mb-3">
                <i class="fa-solid fa-user text-3xl text-emerald-600"></i>
                <h3 class="text-xl font-semibold text-gray-900">Contacto</h3>
              </div>
              <p class="text-gray-700 text-lg">{{ beneficio.contact.join('') }}</p>
            </div>
          </div>

          <!-- Descripción -->
          <div class="mt-16 border-t border-gray-100 pt-12">
            <h3 class="text-2xl font-semibold text-gray-900 mb-6">Descripción del beneficio</h3>
            <p class="text-gray-700 text-lg leading-relaxed">
              {{ beneficio.desc.join('') }}
            </p>
          </div>

          <!-- Imagen Full -->
          <div class="mt-16 flex justify-center">
            <img :src="beneficio.imgFull" :alt="beneficio.name" class="max-w-3xl w-full rounded-2xl shadow-xl"
              @error="manejarErrorImg(beneficio)">
          </div>
        </div>
      </div>
    </main>

    <footerInfo />
    <copyright />
  </div>
</template>

<script setup>
import footerInfo from '../components/footerInfo.vue';
import copyright from '../components/copyright.vue';
import SkeletonCard from '../components/SkeletonCard.vue';
import { ref, onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';
import { useHead } from '@unhead/vue';

const route = useRoute();
const beneficio = ref(null);
const loading = ref(false);
const error = ref(null);
const API_URL = import.meta.env.VITE_API_URL || ['https://backend-', 'vet', 'plus.onrender.com'].join('')


useHead({
  title: computed(() => beneficio.value ? beneficio.value.name : 'Cargando beneficio...'),
});

onMounted(async () => {
  try {
    const res = await fetch(`${API_URL}/api/beneficios/${route.params.id}`);
    if (!res.ok) throw new Error("No se encontro el beneficio");
    beneficio.value = await res.json()
  } catch (error) {
    console.error("❌ Error al cargar los beneficios:", error);
    error.value = "No se pudo cargar la información. Inténtalo de nuevo.";
  } finally {
    loading.value = false;
  }
});

// Manejo de error de imagen
const manejarErrorImg = (item) => {
  if (item.img) item.img = 'https://res.cloudinary.com/diro0cqpe/image/upload/v1773625013/RUNNING_PAWS_LOGO2_rem3yf.png';
  if (item.imgFull) item.imgFull = 'https://res.cloudinary.com/diro0cqpe/image/upload/v1773625013/RUNNING_PAWS_LOGO2_rem3yf.png';
};
</script>
