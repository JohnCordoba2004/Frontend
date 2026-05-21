<template>
  <div class="bg-gray-50 min-h-screen">
    <main class="max-w-4xl mx-auto px-6 py-12 lg:py-20">

      <!-- Botón Regresar -->
      <div class="mb-8">
        <button @click="$router.back()"
          class="flex items-center gap-3 text-gray-600 hover:text-gray-900 transition-colors group">
          <span class="text-2xl group-hover:-translate-x-1 transition-transform">←</span>
          <span class="font-medium text-lg">Regresar</span>
        </button>
      </div>

      <!-- Loading -->
      <div v-if="loading" class="flex flex-col items-center justify-center py-32">
        <SkeletonCard />
      </div>

      <!-- Error -->
      <div v-else-if="error" class="text-center py-32">
        <p class="text-red-600 text-2xl mb-6">{{ error }}</p>
        <button @click="window.location.reload()"
          class="px-10 py-4 bg-sky-600 text-white rounded-2xl hover:bg-sky-700 transition-all">
          Intentar nuevamente
        </button>
      </div>

      <!-- Contenido del Profesional -->
      <div v-else-if="profesional" class="bg-white rounded-3xl shadow-2xl overflow-hidden">

        <!-- Header -->
        <div class="bg-linear-to-br from-sky-700 to-sky-500 text-white py-16 px-10 text-center">
          <h1 class="text-4xl lg:text-5xl font-bold tracking-tight">
            {{ profesional.name }}
          </h1>
        </div>

        <div class="p-10 lg:p-16 space-y-12">

          <!-- Especialidad -->
          <div>
            <div class="flex items-center gap-4 mb-4">
              <i class="fa-solid fa-flask text-3xl text-sky-600"></i>
              <h3 class="text-2xl font-semibold text-gray-900">Especialidad</h3>
            </div>
            <p class="text-gray-700 text-lg">
              {{ profesional.specialty && profesional.specialty.length
                ? profesional.specialty.join(" • ")
                : 'No especificada' }}
            </p>
          </div>

          <!-- Dirección -->
          <div>
            <div class="flex items-center gap-4 mb-4">
              <i class="fa-solid fa-location-dot text-3xl text-sky-600"></i>
              <h3 class="text-2xl font-semibold text-gray-900">Dirección</h3>
            </div>
            <p class="text-gray-700 text-lg">
              <a :href="`https://www.google.com/maps/search/?api=1&query=${profesional.direction.join(', ')}`"
                target="_blank" class="hover:text-sky-600 hover:underline">
                {{ profesional.direction.join(', ') || 'Dirección no disponible' }}
              </a>
            </p>
          </div>

          <!-- Web -->
          <div v-if="profesional.webs && profesional.webs.length">
            <div class="flex items-center gap-4 mb-4">
              <i class="fa-solid fa-globe text-3xl text-sky-600"></i>
              <h3 class="text-2xl font-semibold text-gray-900">Sitio Web</h3>
            </div>
            <a :href="profesional.webs[0]" target="_blank" class="text-sky-600 hover:underline text-lg break-all">
              {{ profesional.webs[0] }}
            </a>
          </div>

          <!-- Descripción -->
          <div v-if="profesional.desc && profesional.desc.length" class="pt-8 border-t border-gray-100">
            <h3 class="text-2xl font-semibold text-gray-900 mb-6">Información adicional</h3>
            <div class="prose prose-lg text-gray-700 leading-relaxed">
              <p v-for="(parrafo, index) in profesional.desc" :key="index" class="mb-6">
                {{ parrafo }}
              </p>
            </div>
          </div>

        </div>
      </div>
    </main>

    <!-- Sección inferior -->
    <section class="bg-[#DDE0E5] py-16">
      <div class="max-w-6xl mx-auto px-6">
        <div class="grid md:grid-cols-2 gap-8">
          <div class="bg-white rounded-3xl p-10 shadow-sm">
            <div class="flex items-center gap-5 mb-6">
              <div class="w-14 h-14 bg-emerald-100 rounded-3xl flex items-center justify-center text-4xl">🐾</div>
              <h2 class="text-2xl font-semibold text-gray-900">¿Quieres afiliarte?</h2>
            </div>
            <p class="text-gray-600 mb-8">
              Descubre lo fácil que es proteger la salud de tu mascota con PetSalud.
            </p>
            <RouterLink to="/Afiliate"
              class="block w-full text-center py-4 bg-sky-600 hover:bg-sky-700 text-white font-semibold rounded-2xl transition-all">
              Afíliate ahora
            </RouterLink>
          </div>

          <div class="bg-white rounded-3xl p-10 shadow-sm">
            <div class="flex items-center gap-5 mb-6">
              <div class="w-14 h-14 bg-sky-100 rounded-3xl flex items-center justify-center text-4xl">📍</div>
              <h2 class="text-2xl font-semibold text-gray-900">Nuestra red</h2>
            </div>
            <p class="text-gray-600 mb-8">
              Contamos con una amplia red de clínicas y veterinarios certificados en todo el país.
            </p>
            <RouterLink to="/NuestraRed"
              class="block w-full text-center py-4 bg-sky-600 hover:bg-sky-700 text-white font-semibold rounded-2xl transition-all">
              Ver toda la red
            </RouterLink>
          </div>
        </div>
      </div>
    </section>

    <Copyright />
  </div>
</template>

<script setup>
import Copyright from '../components/copyright.vue';
import SkeletonCard from '../components/SkeletonCard.vue';
import { ref, onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';
import { useHead } from '@unhead/vue';
import { RouterLink } from 'vue-router';

const route = useRoute();
const profesional = ref(null);
const loading = ref(true);
const error = ref(null);
const API_URL = import.meta.env.VITE_API_URL || ['https://backend-', 'vet', 'plus.onrender.com'].join('')

useHead({
  title: computed(() => profesional.value ? profesional.value.name : 'Cargando profesional...'),
});

onMounted(async () => {
  try {
    const res = await fetch(`${API_URL}/api/profesionales/${route.params.id}`);
    if (!res.ok) throw new Error("No se encontró el profesional");
    profesional.value = await res.json();
  } catch (err) {
    console.error("❌ Error al cargar el profesional:", err);
    error.value = "No se pudo cargar la información. Inténtalo de nuevo.";
  } finally {
    loading.value = false;
  }
});
</script>