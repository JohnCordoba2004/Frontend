<template>
  <div class="bg-white">
    <section class="max-w-7xl mx-auto px-6 py-20 lg:py-28 relative">
      <div class="grid lg:grid-cols-12 gap-16 lg:gap-20 items-center">

        <!-- Columna izquierda - Texto -->
        <div class="lg:col-span-7">
          <div class="inline-block px-6 py-2 bg-sky-100 text-sky-700 rounded-3xl text-sm font-medium mb-6">
            Planes para Perros
          </div>

          <h1 class="text-5xl lg:text-6xl font-bold text-gray-900 leading-none tracking-tighter mb-8">
            Protección completa<br>para tu mejor amigo
          </h1>

          <div class="max-w-lg text-gray-700 leading-relaxed text-[17px]">
            <p class="mb-4">
              PetSalud Medicina Prepagada ofrece planes con excelentes coberturas, servicios, clínicas veterinarias y
              beneficios adicionales que se ajustan perfectamente a las necesidades de tu perro.
            </p>
            <p>
              Si tu mascota desarrolla una enfermedad crónica, PetSalud le brindará cobertura completa para su
              tratamiento.
            </p>
          </div>

          <!-- Botón único - como en tu imagen -->
          <div class="mt-10">
            <router-link to="/Afiliate"
              class="inline-block px-10 py-4 bg-sky-600 hover:bg-sky-700 text-white font-semibold text-lg rounded-2xl shadow-lg shadow-sky-200 transition-all active:scale-95">
              Cotizar mi plan
            </router-link>
          </div>
        </div>

        <!-- Columna derecha - Imagen con badge -->
        <div class="lg:col-span-5 flex justify-center lg:justify-end relative">
          <div class="relative">
            <img src="https://res.cloudinary.com/diro0cqpe/image/upload/v1761360294/planes-para-perros_r6zggu.png"
              alt="Planes para Perros - PetSalud"
              class="w-full max-w-md lg:max-w-lg h-auto object-contain drop-shadow-2xl">

            <!-- Badge elegante como en tu imagen -->
            <div
              class="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl px-5 py-2.5 text-sm font-medium flex items-center gap-2 border border-gray-100">
              <span class="text-emerald-500 text-base">✓</span>
              <span class="text-gray-700">Adaptado a tu perro</span>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- Resto de la página -->
    <div class="custom-planes">
      <PlanesPrincipales />
    </div>

    <div class="custom-medicina">
      <MedicinaPreventiva />
    </div>

    <Copyright />
  </div>
</template>

<script setup>
import PlanesPrincipales from '../components/PlanesPrincipales.vue';
import MedicinaPreventiva from '../components/MedicinaPreventiva.vue';
import Copyright from '../components/copyright.vue';

import { useHead } from '@unhead/vue';

useHead({
  title: 'Planes para Perros - PetSalud',
  meta: [
    {
      name: 'description',
      content: 'Encuentra el plan ideal para tu perro con cobertura completa y precios accesibles.'
    }
  ]
})
</script>