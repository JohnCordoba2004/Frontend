<template>
  <div class="bg-white min-h-screen">
    <section class="max-w-7xl mx-auto px-6 py-16 lg:py-24">
      <!-- Título -->
      <div class="text-center mb-16">
        <div class="inline-flex items-center gap-3 bg-sky-100 text-sky-700 px-6 py-3 rounded-3xl mb-6">
          <i class="fa-solid fa-hospital text-xl"></i>
          <span class="font-medium">Nuestra Red</span>
        </div>
        <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
          Clínicas Veterinarias
        </h1>
        <p class="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
          Encuentra las mejores clínicas aliadas a PetSalud en todo el país
        </p>
      </div>

      <!-- Loading -->
      <div v-if="loading" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <SkeletonCard v-for="n in 6" :key="n" />
      </div>

      <!-- Grid de Clínicas -->
      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="clinica in planesRaw" :key="clinica._id"
          class="bg-white border border-gray-100 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col">

          <div class="p-8 flex flex-col h-full">
            <!-- Nombre -->
            <h3 class="font-semibold text-2xl text-gray-900 mb-8 line-clamp-2">
              {{ clinica.name || 'Clínica sin nombre registrado' }}
            </h3>

            <!-- Dirección -->
            <div class="flex items-start gap-4 mb-6">
              <i class="fa-solid fa-location-dot text-2xl text-sky-500 mt-1 shrink-0"></i>
              <div>
                <p class="text-gray-600 text-sm">Dirección</p>
                <a 
                  v-if="clinica.direction && clinica.direction.length"
                  :href="`https://www.google.com/maps/search/?api=1&query=${clinica.direction[0]} ${clinica.city}`"
                  target="_blank"
                  class="text-gray-800 hover:text-sky-600 hover:underline transition-colors">
                  {{ clinica.direction[0] }}
                </a>
                <p v-else class="text-gray-400 italic">Dirección no disponible</p>
              </div>
            </div>

            <!-- Teléfono -->
            <div class="flex items-start gap-4 mb-6">
              <i class="fa-solid fa-phone text-2xl text-sky-500 mt-1 shrink-0"></i>
              <div>
                <p class="text-gray-600 text-sm">Teléfono</p>
                <p class="text-gray-800">
                  {{ clinica.phone && clinica.phone.length 
                    ? clinica.phone.join(' • ') 
                    : 'No disponible' }}
                </p>
              </div>
            </div>

            <!-- Web -->
            <div class="flex items-start gap-4 mb-8">
              <i class="fa-solid fa-globe text-2xl text-sky-500 mt-1 shrink-0"></i>
              <div>
                <p class="text-gray-600 text-sm">Sitio web</p>
                <a 
                  v-if="clinica.webs && clinica.webs.length"
                  :href="clinica.webs[0]" 
                  target="_blank"
                  class="text-sky-600 hover:underline font-medium break-all">
                  {{ clinica.webs[0] }}
                </a>
                <p v-else class="text-gray-400 italic">No disponible</p>
              </div>
            </div>

            <!-- Ciudad -->
            <div class="mt-auto pt-6 border-t border-gray-100">
              <div class="inline-flex items-center gap-2 bg-sky-50 text-sky-700 px-6 py-3 rounded-2xl text-sm font-medium">
                <i class="fa-solid fa-map-pin"></i>
                {{ clinica.city && clinica.city.length 
                  ? clinica.city.join(" • ") 
                  : 'Ciudad no especificada' }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Sección inferior -->
    <section class="bg-gray-100 py-16">
      <div class="max-w-6xl mx-auto px-6">
        <div class="grid md:grid-cols-2 gap-8">
          <!-- Afíliate -->
          <div class="bg-white rounded-3xl p-10 shadow-sm">
            <div class="flex items-center gap-5 mb-6">
              <div class="w-14 h-14 bg-emerald-100 rounded-3xl flex items-center justify-center text-4xl">🐾</div>
              <h2 class="text-2xl font-semibold text-gray-900">¿Quieres afiliarte?</h2>
            </div>
            <p class="text-gray-600 mb-8">
              Descubre lo fácil que es proteger la salud de tu mascota con PetSalud.
            </p>
            <a href="/Afiliate" 
              class="block w-full text-center py-4 bg-sky-600 hover:bg-sky-700 text-white font-semibold rounded-2xl transition-all">
              Afíliate ahora
            </a>
          </div>

          <!-- Cobertura -->
          <div class="bg-white rounded-3xl p-10 shadow-sm">
            <div class="flex items-center gap-5 mb-6">
              <div class="w-14 h-14 bg-sky-100 rounded-3xl flex items-center justify-center text-4xl">📍</div>
              <h2 class="text-2xl font-semibold text-gray-900">Nuestra red</h2>
            </div>
            <p class="text-gray-600 mb-8">
              Contamos con una amplia red de clínicas y veterinarios certificados en todo el país.
            </p>
            <a href="/NuestraRed" 
              class="block w-full text-center py-4 bg-sky-600 hover:bg-sky-700 text-white font-semibold rounded-2xl transition-all">
              Ver toda la red
            </a>
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
import { ref, onMounted } from 'vue';
import { useHead } from '@unhead/vue';

const planesRaw = ref([]);
const loading = ref(true);
const API_URL = import.meta.env.VITE_API_URL || ['https://backend-', 'vet', 'plus.onrender.com'].join('')

useHead({
  title: 'Clínicas Veterinarias - PetSalud',
  meta: [
    {
      name: 'description',
      content: 'Encuentra las mejores clínicas veterinarias aliadas a PetSalud en todo Colombia.'
    }
  ]
});

onMounted(async () => {
  try {
    const res = await fetch(`${API_URL}/api/clinicas`);
    if (res.ok) {
      planesRaw.value = await res.json();
    }
  } catch (error) {
    console.error("Error al cargar clínicas:", error);
  } finally {
    loading.value = false;
  }
});
</script>