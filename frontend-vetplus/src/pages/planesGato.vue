<template>
  <section class="bg-gray-200 relative py-16 sm:py-24 lg:py-32 xl:py-10 overflow-hidden">
    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-2">
      <div class="flex flex-col lg:flex-row items-start lg:items-center gap-8 sm:gap-12 lg:gap-2">
        <!-- Texto a la izquierda -->
        <div class="flex-1 w-full lg:w-auto lg:flex-[1.1]">
          <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 sm:mb-8 leading-tight">
            Planes para Gatos
          </h1>

          <p class="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed mb-6 sm:mb-8 text-balance">
            VetPlus Medicina Prepagada ofrece planes con excelentes coberturas, servicios, clínicas veterinarias y
            beneficios adicionales que se ajustan a sus necesidades, además si su mascota desarrolla una enfermedad
            crónica VetPlus le dará cobertura completa para el tratamiento.
          </p>

          <p class="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed mb-6 sm:mb-8 text-balance">
            Para conocer más sobre cada uno de nuestros planes, haga clic en el botón <router-link to="/Planes"
              class="text-sky-600 hover:text-sky-700 font-medium">Ver mas</router-link> y para
            cotizar alguno de nuestros planes, haga clic en el botón <router-link to="/Afiliate"
              class="text-sky-600 hover:text-sky-700 font-medium">Afiliate</router-link> para conocer los
            pasos y precios específicos para tu mascota.
          </p>
        </div>

        <!-- Imagen a la derecha - Solo visible en desktop -->
        <div class="hidden lg:flex flex-1 w-full lg:w-auto lg:flex-[0.4] justify-center lg:justify-end items-end">
          <img src="https://res.cloudinary.com/diro0cqpe/image/upload/v1761360430/planes-para-gatos_kb7mwo.png"
            alt="Perro Basset Hound - Planes para perros VetPlus"
            class="w-full max-w-xl h-auto object-contain object-bottom">
        </div>

      </div>
    </div>
  </section>

  <div class="custom-planes">
    <PlanesPrincipales tipoFiltro="cat" />
  </div>

  <div class="custom-medicina">
    <MedicinaPreventiva />
  </div>

  <section class="bg-[#bbbcbe] py-8 sm:py-10">
    <div class="mx-auto flex max-w-6xl flex-col gap-6 px-4 sm:px-6 md:px-8 lg:flex-row lg:gap-8 xl:px-10 2xl:px-0">
      <!-- Cobertura -->
      <div class="flex-1 min-w-[260px] rounded-2xl bg-gray-100 p-4 shadow-md sm:min-w-[300px] sm:p-6">
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
      <div class="flex-1 min-w-[260px] rounded-2xl bg-gray-100 p-4 shadow-md sm:min-w-[300px] sm:p-6">
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
import MedicinaPreventiva from '../components/MedicinaPreventiva.vue';
import PlanesPrincipales from '../components/PlanesPrincipales.vue';
import Copyright from '../components/copyright.vue';
import { useHead } from '@unhead/vue'

useHead({
  title: 'Planes Gato 🐾',
  meta: [
    // Descripción normal para Google
    { name: 'description', content: 'VetPlus Medicina Prepagada ofrece planes con excelentes coberturas, servicios, clínicas veterinarias y beneficios adicionales que se ajustan a sus necesidades...' },

    // Configuración para WhatsApp / Redes Sociales
    { property: 'og:title', content: 'VetPlus | Medicina Prepagada' },
    { property: 'og:description', content: 'Conoce nuestros planes y red de veterinarios.' },
    { property: 'og:image', content: 'https://res.cloudinary.com/diro0cqpe/image/upload/v1761360430/planes-para-gatos_kb7mwo.png' },
    { property: 'og:type', content: 'website' }
  ]
})
</script>

<style>
/* Sobrescribe el color de fondo del componente copyright */
/* Múltiples selectores para asegurar que funcione */
.custom-copyright section.bg-sky-600,
.custom-copyright section[class*="bg-sky"],
.custom-copyright>*>section {
  background-color: #006698 !important;
  /* Cambia este color al que quieras */
  /* Ejemplos de colores:
     #dc2626 = rojo
     #059669 = verde esmeralda
     #7c3aed = morado
     #ea580c = naranja
     #1e40af = azul oscuro
     #000000 = negro
     #ffffff = blanco
  */
}

.custom-planes section.bg-gray-50,
.custom-planes section[class*="bg-gray-50"],
.custom-planes section>*>section {
  background-color: #f6f7f8;
}


.custom-medicina section.bg-gray-200,
.custom-medicina section[class*="bg-gray-200"],
.custom-medicina section>*>section {
  background-color: #E5E7EB;
}
</style>