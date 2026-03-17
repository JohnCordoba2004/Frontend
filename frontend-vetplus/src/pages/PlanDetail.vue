<template>
  <div>
    <main>
      <section class="max-w-6xl mx-auto py-10 px-4">
        <div v-if="loading" class="grid grid-cols-1 lg:grid-cols-1">
          <SkeletonCard />
        </div>

        <div v-else-if="error" class="text-center text-red-600 text-lg">
          {{ error }}
        </div>

        <div v-else class="bg-white shadow-lg rounded-xl p-6 flex flex-col border border-gray-100">
          <h1 class="text-3xl font-bold text-gray-900 mb-4 py-8">
            {{ plan.name }}
          </h1>

          <div class="mb-6 flex justify-center">
            <img v-if="plan.img" :src="plan.img" :alt="plan.name" class="w-120 object-cover rounded-lg mb-10" />
          </div>

          <p class="text-gray-600 text-sm mb-10 text-start">
            {{ plan.desc }}
          </p>

          <p class="text-gray-500 text-sm mb-10 text-left text-balance">
            {{ plan.descName }}
          </p>

          <ul v-if="plan.benefits && plan.benefits.length" class="space-y-3 mb-6">
            <li v-for="(beneficio, index) in plan.benefits" :key="index"
              class="flex items-start gap-4 text-gray-700 text-sm text-balance tracking-wide">
              <span>
                <svg width=" 18" height="18" viewBox="0 0 1.5 1.5" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M1.169 0.451a0.063 0.063 0 0 0 -0.089 0l-0.466 0.466 -0.196 -0.196A0.063 0.063 0 1 0 0.331 0.813l0.24 0.24a0.063 0.063 0 0 0 0.089 0l0.51 -0.51a0.063 0.063 0 0 0 0 -0.092" />
                </svg>
              </span>
              <span>{{ beneficio }}</span>
            </li>
          </ul>

          <div class="bg-sky-200 mb-10 px-2 py-4 my-10 rounded-3xl">
            <p v-if="plan.price" class="text-lg font-semibold text-sky-600 mx-4">
              Precio: ${{ plan.price.toLocaleString() }} /mes
            </p>

            <p class="text-sm font-semibold text-sky-600 mx-4">
              {{ plan.descPrice }}
            </p>
          </div>

          <MedicinaPreventiva containerClass="rounded-[30px] shadow-lg" />
        </div>
      </section>

      <section class="bg-[#DDE0E5] py-8 sm:py-10">
        <div class="mx-auto flex max-w-6xl flex-col gap-6 px-4 sm:px-6 md:px-8 lg:flex-row lg:gap-8 xl:px-10 2xl:px-0">
          <div class="flex-1 min-w-[260px] rounded-2xl bg-gray-100 p-4 shadow-md sm:min-w-[300px] sm:p-6">
            <div class="mb-4 flex items-center">
              <div class="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-blue-500 sm:h-12 sm:w-12">
                <svg class="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z" />
                </svg>
              </div>
              <h2 class="text-lg font-bold">Afíliate</h2>
            </div>
            <p class="mb-4 text-sm leading-relaxed sm:text-base">
              Descubre la forma más fácil de cuidar a tu mascota...
            </p>
            <a href="/Afiliate"
              class="inline-flex w-fit items-center rounded-lg bg-blue-300 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-400">
              Afíliate aquí +
            </a>
          </div>
          <div class="flex-1 min-w-[260px] rounded-2xl bg-gray-100 p-4 shadow-md sm:min-w-[300px] sm:p-6">
            <div class="mb-4 flex items-center">
              <div class="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-blue-500 sm:h-12 sm:w-12">
                <svg class="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
              <h2 class="text-lg font-bold">Cobertura</h2>
            </div>
            <p class="mb-4 text-sm leading-relaxed sm:text-base">
              La red de veterinarias a su servicio...
            </p>
            <a href="/NuestraRed"
              class="inline-flex w-fit items-center rounded-lg bg-blue-300 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-400">
              Listado Completo +
            </a>
          </div>
        </div>
      </section>
    </main>
    <copyright />
  </div>
</template>

<script setup>
import MedicinaPreventiva from "../components/MedicinaPreventiva.vue";
import copyright from "../components/copyright.vue";
import SkeletonCard from "../components/SkeletonCard.vue"; // Corregido: Importación faltante
import { ref, onMounted, computed } from 'vue'
import { useHead } from '@unhead/vue'
import { useRoute } from 'vue-router'

// Corregido: Declaración de variables movida arriba para evitar ReferenceError
const route = useRoute();
const plan = ref(null);
const loading = ref(true);
const error = ref(null);
const API_URL = "https://backend-vetplus.onrender.com";

// Corregido: useHead ahora usa 'plan.value' en lugar de 'beneficio' para ser consistente
useHead({
  title: computed(() => plan.value ? plan.value.name : 'Cargando plan...'),
  meta: [
    {
      name: 'description',
      content: computed(() => plan.value ? plan.value.desc : 'Cargando detalles del plan...')
    },
    {
      property: 'og:title',
      content: computed(() => plan.value ? `${plan.value.name} | VetPlus` : 'VetPlus')
    },
    {
      property: 'og:image',
      content: computed(() => plan.value?.img || 'https://res.cloudinary.com/diro0cqpe/image/upload/v1759367091/P-DIamante_acqsig.jpg')
    }
  ]
})

onMounted(async () => {
  try {
    const res = await fetch(`${API_URL}/api/planes/${route.params.id}`);
    if (!res.ok) throw new Error("No se encontró el plan");

    plan.value = await res.json();
  } catch (err) {
    console.error("❌ Error al cargar el plan:", err);
    error.value = "No se pudo cargar el plan. Inténtalo de nuevo.";
  } finally {
    loading.value = false;
  }
});
</script>