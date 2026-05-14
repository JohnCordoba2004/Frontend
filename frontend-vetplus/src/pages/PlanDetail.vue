<template>
  <div class="bg-gray-50 min-h-screen">
    <main class="max-w-5xl mx-auto px-6 py-12 lg:py-20">

      <!-- Loading -->
      <div v-if="loading" class="flex justify-center py-32">
        <SkeletonCard />
      </div>

      <!-- Error -->
      <div v-else-if="error" class="text-center py-32">
        <p class="text-red-600 text-2xl">{{ error }}</p>
        <button @click="window.location.reload()"
          class="mt-8 px-10 py-4 bg-sky-600 text-white rounded-2xl hover:bg-sky-700 transition-all">
          Intentar nuevamente
        </button>
      </div>

      <!-- Contenido del Plan -->
      <div v-else class="bg-white rounded-3xl shadow-2xl overflow-hidden">

        <!-- Header con gradiente -->
        <div class="bg-linear-to-br from-sky-700 to-sky-500 text-white py-16 px-10 text-center">
          <h1 class="text-4xl lg:text-5xl font-bold tracking-tighter">
            {{ plan.name }}
          </h1>
        </div>

        <div class="p-10 lg:p-16">
          <!-- Imagen grande -->
          <div class="flex justify-center mb-14">
            <img v-if="plan.img" :src="plan.img" :alt="plan.name" class="max-w-2xl w-full rounded-3xl shadow-xl">
          </div>

          <!-- Descripción -->
          <div class="max-w-3xl mx-auto text-center mb-16">
            <p class="text-gray-700 text-[17px] leading-relaxed">
              {{ plan.desc }}
            </p>
            <p v-if="plan.descName" class="mt-6 text-gray-600">
              {{ plan.descName }}
            </p>
          </div>

          <!-- Beneficios -->
          <div v-if="plan.benefits && plan.benefits.length" class="mb-16">
            <h3 class="text-2xl font-semibold text-center text-gray-900 mb-10">¿Qué incluye este plan?</h3>
            <ul class="grid md:grid-cols-2 gap-6">
              <li v-for="(beneficio, index) in plan.benefits" :key="index"
                class="flex gap-4 bg-gray-50 rounded-2xl p-6">
                <div class="text-emerald-500 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span class="text-gray-700 leading-relaxed">{{ beneficio }}</span>
              </li>
            </ul>
          </div>

          <!-- Precio destacado -->
          <div class="bg-linear-to-br from-sky-50 to-white border border-sky-100 rounded-3xl p-12 text-center mb-16">
            <p v-if="plan.price" class="text-5xl font-bold text-sky-700">
              ${{ plan.price.toLocaleString('es-CO') }}
              <span class="text-2xl font-normal text-sky-600">/ mes</span>
            </p>
            <p v-if="plan.descPrice" class="text-sky-600 mt-4 text-lg">
              {{ plan.descPrice }}
            </p>
          </div>

          <!-- Medicina Preventiva -->
          <MedicinaPreventiva containerClass="rounded-3xl" />
        </div>
      </div>
    </main>

    <!-- Sección inferior -->
    <section class="bg-[#DDE0E5] py-16">
      <div class="max-w-5xl mx-auto px-6">
        <div class="grid md:grid-cols-2 gap-8">
          <div class="bg-white rounded-3xl p-10 shadow">
            <div class="flex items-center gap-5 mb-6">
              <div class="w-16 h-16 bg-emerald-100 rounded-3xl flex items-center justify-center text-4xl">🐾</div>
              <h2 class="text-2xl font-semibold">¿Quieres afiliarte?</h2>
            </div>
            <p class="text-gray-600 mb-8 leading-relaxed">
              Descubre lo fácil que es proteger la salud de tu mascota con PetSalud.
            </p>
            <a href="/Afiliate"
              class="block w-full text-center py-4 bg-sky-600 hover:bg-sky-700 text-white font-semibold rounded-2xl transition-all">
              Afíliate ahora
            </a>
          </div>

          <div class="bg-white rounded-3xl p-10 shadow">
            <div class="flex items-center gap-5 mb-6">
              <div class="w-16 h-16 bg-sky-100 rounded-3xl flex items-center justify-center text-4xl">📍</div>
              <h2 class="text-2xl font-semibold">Nuestra red</h2>
            </div>
            <p class="text-gray-600 mb-8 leading-relaxed">
              Contamos con una amplia red de clínicas y veterinarios certificados en todo el país.
            </p>
            <a href="/NuestraRed"
              class="block w-full text-center py-4 bg-sky-600 hover:bg-sky-700 text-white font-semibold rounded-2xl transition-all">
              Ver clínicas disponibles
            </a>
          </div>
        </div>
      </div>
    </section>

    <Copyright />
  </div>
</template>

<script setup>
import MedicinaPreventiva from "../components/MedicinaPreventiva.vue";
import Copyright from "../components/copyright.vue";
import SkeletonCard from "../components/SkeletonCard.vue";
import { ref, onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';
import { useHead } from '@unhead/vue';

const route = useRoute();
const plan = ref(null);
const loading = ref(true);
const error = ref(null);
const API_URL = import.meta.env.VITE_API_URL || ['https://backend-', 'vet', 'plus.onrender.com'].join('')

useHead({
  title: computed(() => plan.value ? `${plan.value.name} | PetSalud` : 'Plan - PetSalud'),
});

onMounted(async () => {
  try {
    const res = await fetch(`${API_URL}/api/planes/${route.params.id}`);
    if (!res.ok) throw new Error("Plan no encontrado");
    plan.value = await res.json();
  } catch (err) {
    error.value = "No se pudo cargar el plan. Por favor intenta más tarde.";
    console.error(err);
  } finally {
    loading.value = false;
  }
});
</script>