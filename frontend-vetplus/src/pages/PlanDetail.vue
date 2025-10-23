<template>
  <section class="max-w-7xl mx-auto py-10 px-4">
    <!-- Estado de carga -->
    <div v-if="loading" class="text-center text-gray-600 text-lg">
      Cargando plan...
    </div>

    <!-- Error al cargar -->
    <div v-else-if="error" class="text-center text-red-600 text-lg">
      {{ error }}
    </div>

    <!-- Plan cargado correctamente -->
    <div v-else class="bg-white shadow-lg rounded-xl p-6 ">
      <h1 class="text-3xl font-bold text-gray-900 mb-4 py-8">
        {{ plan.name }}
      </h1>

      <!-- Imagen del plan -->
      <div class="mb-6 flex justify-center">
        <img v-if="plan.img" :src="plan.img" :alt="plan.name" class="w-120 object-cover rounded-lg mb-10" />
      </div>


      <!-- Descripcion -->
      <p class="text-gray-600 text-sm mb-10 text-start">
        {{ plan.desc }}
      </p>

      <!-- Desc Name -->
      <p class="text-gray-500 text-sm mb-10 text-left text-balance">
        {{ plan.descName }}
      </p>

      <!-- Lista de beneficios -->
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

      <div class="bg-sky-200 mb-10 px-2 py-4 my-10 rounded-lg">
        <!-- Precio -->
        <p v-if="plan.price" class="text-lg font-semibold text-sky-600 mx-4">
          Precio: ${{ plan.price.toLocaleString() }} /mes
        </p>

        <!-- Desc Price -->
        <p class="text-sm font-semibold text-sky-600 mx-4">
          {{ plan.descPrice }}
        </p>
      </div>

      <!-- Botón para volver -->
      <!-- <router-link to="/planes" class="inline-block mt-6 text-blue-500 hover:underline">
        ← Volver a todos los planes
      </router-link> -->
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const plan = ref(null);
const loading = ref(true);
const error = ref(null);

// URL de tu API
const API_URL = "https://backend-vetplus.onrender.com";

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
