<template>
  <div class="bg-white min-h-screen">
    <section class="max-w-7xl mx-auto px-6 py-16 lg:py-24">
      <div class="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">

        <!-- Columna principal - Tarjetas -->
        <div class="lg:col-span-9">
          <div class="mb-12">
            <span class="inline-block px-5 py-2 bg-sky-100 text-sky-700 rounded-3xl text-sm font-medium mb-4">
              Nuestra Red
            </span>
            <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Profesionales y clínicas<br>que cuidan a tu mascota
            </h1>
          </div>

          <div class="grid md:grid-cols-3 gap-8">
            <!-- Tarjeta 1 -->
            <div
              class="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div class="h-64 overflow-hidden">
                <img src="https://res.cloudinary.com/diro0cqpe/image/upload/v1769182290/clinicas1_vmjxp6.jpg"
                  alt="Clínicas Veterinarias"
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
              </div>
              <div class="p-8">
                <a href="/ClinicasVeterinarias"
                  class="block text-center bg-sky-600 hover:bg-sky-700 text-white font-semibold py-4 rounded-2xl transition-all">
                  Clínicas Veterinarias
                </a>
              </div>
            </div>

            <!-- Tarjeta 2 -->
            <div
              class="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div class="h-64 overflow-hidden">
                <img src="https://res.cloudinary.com/diro0cqpe/image/upload/v1769182290/clinicas2_wxtcp0.jpg"
                  alt="Profesionales Adscritos"
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
              </div>
              <div class="p-8">
                <a href="/ProfesionalesVet"
                  class="block text-center bg-sky-600 hover:bg-sky-700 text-white font-semibold py-4 rounded-2xl transition-all">
                  Profesionales Adscritos
                </a>
              </div>
            </div>

            <!-- Tarjeta 3 -->
            <div
              class="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div class="h-64 overflow-hidden">
                <img src="https://res.cloudinary.com/diro0cqpe/image/upload/v1769182868/clinicas3_vmqdrl.jpg"
                  alt="Otros"
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
              </div>
              <div class="p-8">
                <a href="/Otros"
                  class="block text-center bg-sky-600 hover:bg-sky-700 text-white font-semibold py-4 rounded-2xl transition-all">
                  Otros Servicios
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Sidebar -->
        <div class="lg:col-span-3 lg:sticky lg:top-8">
          <div class="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
            <div class="flex items-center gap-4 mb-6">
              <div class="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center text-3xl">🐾</div>
              <h2 class="text-2xl font-semibold text-gray-900">Afíliate</h2>
            </div>

            <p class="text-gray-600 leading-relaxed mb-8">
              Descubre la forma más fácil de cuidar a tu mascota con planes diseñados especialmente para ti.
            </p>

            <a href="/Afiliate"
              class="block w-full text-center bg-sky-600 hover:bg-sky-700 text-white font-semibold py-4 rounded-2xl transition-all">
              Afíliate aquí
            </a>
          </div>
        </div>

      </div>
    </section>

    <footerInfo />
    <copyright />
  </div>
</template>

<script setup>
import footerInfo from '../components/footerInfo.vue';
import copyright from '../components/copyright.vue';

import { useHead } from '@unhead/vue';

useHead({
  title: 'Nuestra Red - PetSalud',
  meta: [
    {
      name: 'description',
      content: 'Conoce los especialistas y centros médicos aliados a PetSalud. Profesionales certificados listos para atender a tu mascota en todo el país.'
    }
  ]
})
</script>