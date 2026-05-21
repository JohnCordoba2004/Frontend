<template>
  <div class="bg-white min-h-screen">
    <main class="max-w-6xl mx-auto px-6 py-12 lg:py-20">

      <!-- Botón Regresar -->
      <button @click="$router.back()"
        class="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900 mb-10 transition-all duration-300 group font-semibold text-sm">
        <span class="text-xl group-hover:-translate-x-1 transition-transform"><i class="fa-solid fa-arrow-left"></i></span>
        Regresar
      </button>

      <!-- Loading -->
      <div v-if="loading" class="flex justify-center py-32">
        <SkeletonCard />
      </div>

      <!-- Error / No encontrado -->
      <div v-else-if="error" class="text-center py-32">
        <div class="mb-8">
          <i class="fa-solid fa-circle-exclamation text-6xl text-red-500 mb-4"></i>
        </div>
        <p class="text-red-600 text-2xl mb-6 font-bold">{{ error }}</p>
        <router-link to="/beneficios"
          class="inline-flex items-center gap-2 px-8 py-4 bg-sky-600 hover:bg-sky-700 text-white rounded-2xl font-bold transition-all duration-300 shadow-lg shadow-sky-600/25">
          <i class="fa-solid fa-arrow-left"></i>
          Volver al listado
        </router-link>
      </div>

      <!-- Contenido del Beneficio -->
      <div v-else-if="beneficio" class="space-y-8">

        <!-- Hero Section -->
        <div class="bg-gradient-to-br from-emerald-50 via-white to-sky-50 rounded-3xl border border-emerald-100 overflow-hidden shadow-xl">
          <div class="grid lg:grid-cols-2 gap-8 lg:gap-12 p-8 lg:p-16 items-center">
            
            <!-- Imagen -->
            <div class="flex justify-center lg:justify-start order-2 lg:order-1">
              <div class="relative">
                <div class="absolute inset-0 bg-gradient-to-br from-emerald-200 to-sky-200 rounded-3xl blur-2xl opacity-40 -z-10 scale-110"></div>
                <img :src="beneficio.img" :alt="beneficio.name" 
                  class="max-w-sm w-full rounded-3xl shadow-2xl object-contain hover:scale-105 transition-transform duration-500"
                  @error="manejarErrorImg(beneficio)">
              </div>
            </div>

            <!-- Texto -->
            <div class="order-1 lg:order-2">
              <div class="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase mb-4">
                <i class="fa-solid fa-star"></i>
                Beneficio Exclusivo
              </div>
              <h1 class="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.9] text-slate-900 mb-6">
                {{ beneficio.name }}
              </h1>
              <p class="text-lg text-slate-600 leading-relaxed mb-8 max-w-lg">
                {{ beneficio.desc.join('') }}
              </p>
            </div>
          </div>
        </div>

        <!-- Información en Grid -->
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <!-- Dirección -->
          <div class="group bg-white rounded-2xl border border-slate-200 hover:border-emerald-300 p-6 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-100">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 text-xl group-hover:scale-110 transition-transform">
                <i class="fa-solid fa-location-dot"></i>
              </div>
              <h3 class="text-lg font-bold text-slate-900">Dirección</h3>
            </div>
            <a v-if="beneficio.direction && beneficio.direction.length"
              :href="`https://www.google.com/maps/search/?api=1&query=${beneficio.direction}`" target="_blank"
              class="text-slate-600 hover:text-emerald-600 hover:underline transition-colors text-sm leading-relaxed block">
              {{ beneficio.direction[0] }}
            </a>
            <p v-else class="text-slate-400 italic text-sm">No disponible</p>
          </div>

          <!-- Teléfono -->
          <div class="group bg-white rounded-2xl border border-slate-200 hover:border-sky-300 p-6 transition-all duration-300 hover:shadow-lg hover:shadow-sky-100">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center text-sky-600 text-xl group-hover:scale-110 transition-transform">
                <i class="fa-solid fa-phone"></i>
              </div>
              <h3 class="text-lg font-bold text-slate-900">Teléfono</h3>
            </div>
            <a :href="`tel:${beneficio.telefono.join('')}`" class="text-slate-600 hover:text-sky-600 text-lg font-semibold transition-colors">
              {{ beneficio.telefono.join('') }}
            </a>
          </div>

          <!-- Web -->
          <div class="group bg-white rounded-2xl border border-slate-200 hover:border-violet-300 p-6 transition-all duration-300 hover:shadow-lg hover:shadow-violet-100">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center text-violet-600 text-xl group-hover:scale-110 transition-transform">
                <i class="fa-solid fa-globe"></i>
              </div>
              <h3 class="text-lg font-bold text-slate-900">Sitio Web</h3>
            </div>
            <a :href="beneficio.web" target="_blank" class="text-violet-600 hover:text-violet-700 hover:underline font-medium text-sm break-all line-clamp-2 transition-colors">
              {{ beneficio.web.join('') }}
            </a>
          </div>

          <!-- Contacto -->
          <div class="group bg-white rounded-2xl border border-slate-200 hover:border-amber-300 p-6 transition-all duration-300 hover:shadow-lg hover:shadow-amber-100">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center text-amber-600 text-xl group-hover:scale-110 transition-transform">
                <i class="fa-solid fa-user"></i>
              </div>
              <h3 class="text-lg font-bold text-slate-900">Contacto</h3>
            </div>
            <p class="text-slate-600 font-semibold text-sm">{{ beneficio.contact.join('') }}</p>
          </div>
        </div>

        <!-- Imagen Full Width -->
        <div v-if="beneficio.imgFull" class="relative rounded-3xl overflow-hidden shadow-2xl">
          <img :src="beneficio.imgFull" :alt="beneficio.name" 
            class="w-full h-96 lg:h-[500px] object-cover hover:scale-105 transition-transform duration-700"
            @error="manejarErrorImg(beneficio)">
          <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>
      </div>
    </main>

    <footerInfo />
  </div>
</template>

<script setup>
import footerInfo from '../components/footerInfo.vue';
// import copyright from '../components/copyright.vue';
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
