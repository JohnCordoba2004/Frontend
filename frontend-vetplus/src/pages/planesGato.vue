<template>
  <div class="bg-white">
    <!-- Sección Hero -->
    <section class="max-w-7xl mx-auto px-6 py-20 lg:py-28">
      <div class="grid lg:grid-cols-12 gap-16 lg:gap-20 items-center">

        <!-- Columna izquierda - Texto -->
        <div class="lg:col-span-7 space-y-10">
          <div>
            <span
              class="inline-block px-6 py-2.5 bg-sky-100 text-sky-700 rounded-3xl text-sm font-medium tracking-wide mb-6">
              Planes para Gatos
            </span>
            <h1 class="text-5xl lg:text-6xl font-bold text-gray-900 leading-none tracking-tighter">
              Protección completa<br>para tu minino
            </h1>
          </div>

          <div class="prose prose-lg text-gray-700 leading-relaxed max-w-prose">
            <p>
              PetSalud Medicina Prepagada ofrece planes con excelentes coberturas, servicios, clínicas veterinarias y
              beneficios adicionales que se ajustan perfectamente a las necesidades de tu gato.
            </p>
            <p>
              Si tu mascota desarrolla una enfermedad crónica, PetSalud le brindará cobertura completa para su
              tratamiento.
            </p>
          </div>

          <!-- Solo el botón Cotizar (como pediste) -->
          <div class="pt-6">
            <router-link to="/Afiliate"
              class="inline-block px-10 py-4 bg-sky-600 hover:bg-sky-700 text-white font-semibold text-lg rounded-2xl shadow-lg shadow-sky-200 transition-all active:scale-95">
              Cotizar mi plan
            </router-link>
          </div>
        </div>

        <!-- Columna derecha - Imagen -->
        <div class="lg:col-span-5 flex justify-center lg:justify-end">
          <div class="relative">
            <img src="https://res.cloudinary.com/diro0cqpe/image/upload/v1761360430/planes-para-gatos_kb7mwo.png"
              alt="Planes para Gatos - PetSalud"
              class="w-full max-w-md lg:max-w-xl h-auto object-contain drop-shadow-2xl">
            <!-- Badge elegante -->
            <div
              class="absolute -top-5 -right-5 bg-white rounded-2xl shadow-xl px-5 py-3 text-sm font-medium flex items-center gap-2">
              <span class="text-emerald-500">✓</span>
              <span class="text-gray-700">Adaptado a tu gato</span>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- Componentes incluidos -->
    <div class="custom-planes">
      <PlanesPrincipales tipoFiltro="cat" />
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
  title: 'Planes para Gatos - PetSalud',
  meta: [
    {
      name: 'description',
      content: 'Planes especializados para gatos con excelente cobertura médica y medicina preventiva.'
    }
  ]
})
</script>