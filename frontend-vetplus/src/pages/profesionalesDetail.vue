<template>
  <div class="min-h-screen flex flex-col">

    <div class="flex-grow">
      <div class="max-w-7xl mx-auto py-14 px-4">
        <div v-if="loading" class="max-w-7xl mx-auto py-10 px-4">
          <div class="h-10 bg-gray-200 rounded-md w-1/3 mb-4 py-8 animate-pulse"></div>

          <div class="bg-white shadow-lg rounded-xl p-8 flex mt-2 flex-col gap-6 border-gray-100 animate-pulse">
            <div class="flex items-center gap-3">
              <div class="w-6 h-6 bg-gray-200 rounded-full"></div>
              <div class="h-4 bg-gray-200 rounded w-1/4"></div>
            </div>
            <div class="flex items-center gap-3">
              <div class="w-6 h-6 bg-gray-200 rounded-full"></div>
              <div class="h-4 bg-gray-200 rounded w-1/3"></div>
            </div>

            <div class="space-y-4 mt-6">
              <div class="h-4 bg-gray-200 rounded w-full"></div>
              <div class="h-4 bg-gray-200 rounded w-full"></div>
              <div class="h-4 bg-gray-200 rounded w-5/6"></div>
            </div>
          </div>
        </div>

        <div class="text-center text-red-400 text-lg" v-else-if="error">{{ error }}</div>

        <div v-else-if="profesional">
          <h1 class="text-2xl font-bold text-gray-900 mb-auto py-4">
            {{ profesional.name }}
          </h1>
          <div class="bg-white shadow-lg rounded-xl p-8 flex mt-2 flex-col gap-4 sm:gap-6 border-gray-100">
            <div class="text-start text-lg flex items-center gap-2">
              <i class="fa-solid fa-flask"></i>
              <h3 class="text-xs sm:text-lg">
                Especialidad:
                {{ profesional.specialty.join(", ") }}</h3>
            </div>
            <div class="text-start text-lg flex items-center gap-2">
              <i class="fa-solid fa-flask"></i>
              <h3 class="text-xs sm:text-lg">
                Dirección:
                {{ profesional.direction.join(", ") }}</h3>
            </div>
            <div class="text-start text-lg flex items-center gap-2">
              <i class="fa-solid fa-flask"></i>
              <h3 class="text-xs sm:text-lg">
                Web:
                {{ profesional.webs.join(", ") }}</h3>
            </div>
            <div class="text-gray-700 leading-relaxed mt-6 text-lg">
              <p v-for="(parrafo, index) in profesional.desc" :key="index"
                class="text-base sm:text-lg mb-6 text-justify font-normal">
                {{ parrafo }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <footer>
      <section class="bg-[#bbbcbe] py-8 sm:py-10">
        <div class="mx-auto flex max-w-6xl flex-col gap-6 px-4 sm:px-6 md:px-8 lg:flex-row lg:gap-8 xl:px-10 2xl:px-0">
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
        </div>
      </section>
      <copyright />
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { useRoute } from "vue-router";
import { useHead } from "@unhead/vue";
import MedicinaPreventiva from "../components/MedicinaPreventiva.vue";
import copyright from '../components/copyright.vue';
import SkeletonCard from "../components/SkeletonCard.vue";

const route = useRoute();
const profesional = ref(null);
const loading = ref(true);
const error = ref(null);
const API_URL = "https://backend-vetplus.onrender.com";

useHead({
  title: computed(() => profesional.value ? profesional.value.name : "Cargando profesional..."),
  meta: [
    {
      name: 'description',
      // Corregido: profesional.desc suele ser un array según tu v-for, tomamos el primer párrafo para la meta tag
      content: computed(() => profesional.value ? profesional.value.desc[0] : 'Conoce a nuestros profesionales en VetPlus.')
    },
    {
      property: "og:title",
      content: computed(() => profesional.value ? `${profesional.value.name} | VetPlus` : 'VetPlus')
    },
    {
      property: "og:image",
      content: computed(() => profesional.value?.img || "")
    }
  ]
})

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