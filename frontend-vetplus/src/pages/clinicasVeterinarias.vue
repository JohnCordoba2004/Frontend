<template>
  <section class="bg-white py-8 sm:py-12 lg:py-14">
    <div class="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
      <!-- Titulo -->
      <div class=" flex items-center gap-4 text-center mb-8 sm:mb-10 lg:mb-12">
        <i class="fa-solid fa-kit-medical text-2xl"></i>
        <h2 class="text-sm sm:text-3xl md:text-3xl lg:text-2xl font-bold">Clínicas Veterinarias</h2>
      </div>

      <!-- Loading -->
      <div v-if="loading" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
        <SkeletonCard v-for="n in 6" :key="n" />
      </div>

      <!-- Grid clinicas -->
      <div v-else class="grid gap-6 sm:gap-8 lg:gap-10 grid-cols-1 sm:grid-cols-3 lg:grid-cols-4">
        <!-- Cards de cada plan -->
        <div v-for="clinica in planesRaw" :key="clinica._id"
          class="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden">

          <!-- Contenido de la card -->
          <div class="p-4 sm:p-5 lg:p-6 flex flex-col h-full mt-auto gap-2 sm:gap-4">

            <div class="flex-grow">
              <!-- Titulo -->
              <h3
                class="text-lg sm:text-xl lg:text-xl text-balance sm:text-pretty font-semibold text-gray-600 mb-3 sm:mb-4 text-start">
                {{ clinica.name }}
              </h3>

              <!-- Direccion -->
              <div class="flex items-start text-sm mt-2 gap-2 sm:gap-2.5">
                <i class="fa-solid fa-location-pin"></i>
                <h3 class="text-sm sm:text-xs">
                  Direccion:
                  <a :href="`https://www.google.com/maps/search/?api=1&query=${clinica.direction[0]} ${clinica.city}`"
                    target="_blank">
                    {{ clinica.direction[0] }}
                  </a>
                </h3>
              </div>

              <!-- Telefono -->
              <div class="flex items-start text-sm mt-2 gap-2 sm:gap-2.5">
                <i class="fa-solid fa-square-phone"></i>
                <h3 class="text-sm sm:text-xs">
                  Telefono:
                  <span class="text-balance">
                    {{ clinica.phone.join(', ').replace(",", "-") }}
                  </span>
                </h3>
              </div>

              <!-- Web -->
              <div class="flex items-start text-sm mt-2 gap-2 sm:gap-2.5 ">
                <i class="fa-solid fa-earth-americas mt-1"></i>
                <h3 class="text-sm flex-1 break-all">
                  Web:
                  <a :href="clinica.webs[0]" target="_blank" class="hover:underline font-medium">
                    {{ clinica.webs.join(', ') }}
                  </a>
                </h3>
              </div>
            </div>

            <!-- Ciudad -->
            <div class="city text-center mt-10 bg-sky-100">
              <i class="fa-solid fa-map-pin"></i>
              {{ clinica.city }}
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>

  <section class="bg-gray-100 py-8 sm:py-10">
    <div class="mx-auto flex max-w-6xl flex-col gap-6 px-4 sm:px-6 md:px-8 lg:flex-row lg:gap-8 xl:px-10 2xl:px-0">
      <!-- Cobertura -->
      <div class="flex-1 min-w-[260px] rounded-2xl bg-gray-200 p-4 shadow-md sm:min-w-[300px] sm:p-6">
        <!-- Contenido cobertura -->
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

      <!-- Afiliate Box -->
      <div class="flex-1 min-w-[260px] rounded-2xl bg-gray-200 p-4 shadow-md sm:min-w-[300px] sm:p-6">
        <!-- Contenido afiliate -->
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
  <Copyright />
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import Copyright from '../components/copyright.vue';
import SkeletonCard from '../components/SkeletonCard.vue';
import { useHead } from '@unhead/vue'

useHead({
  title: ' Clínicas veterinarias',
  meta: [
    { name: 'description', content: 'Gana beneficios recomendando VetPlus a tus amigos.' }
  ]
})

const planesRaw = ref([])//Se guarda lo que llega de la api
const loading = ref(true)
const API_URL = "https://backend-vetplus.onrender.com"

onMounted(async () => {
  try {
    const res = await fetch(`${API_URL}/api/clinicas`)
    //Guardamos los datos en la variable "raw"
    planesRaw.value = await res.json()
  } catch (error) {
    console.error("Error al cargar los planes", error)
  } finally {
    loading.value = false
  }
})

</script>
