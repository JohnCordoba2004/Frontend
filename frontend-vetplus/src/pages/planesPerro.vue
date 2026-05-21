<template>
  <div class="bg-white">

    <!-- Hero de página -->
    <section class="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
      <div class="grid lg:grid-cols-12 gap-14 lg:gap-20 items-center">

        <!-- Columna izquierda: texto -->
        <div class="lg:col-span-7 flex flex-col gap-8">

          <!-- Pill -->
          <span
            class="inline-flex items-center gap-2 self-start bg-sky-50 text-sky-700 border border-sky-200 px-5 py-2 rounded-full text-xs font-bold tracking-widest uppercase">
            <i class="fa-solid fa-dog"></i>
            Planes para Perros
          </span>

          <!-- Título -->
          <h1 class="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.9] text-slate-900">
            Protección completa
            <br />para tu
            <span class="text-transparent bg-clip-text bg-linear-to-r from-sky-500 to-sky-700">mejor
              amigo</span>
          </h1>

          <!-- Descripción -->
          <div class="flex flex-col gap-4 text-slate-600 text-base sm:text-lg leading-relaxed max-w-lg">
            <p>
              PetSalud ofrece planes con excelentes coberturas, servicios, clínicas veterinarias y
              beneficios adicionales <strong class="text-slate-800 font-semibold">adaptados a las necesidades de tu
                perro</strong>.
            </p>
            <p>
              Si tu mascota desarrolla una enfermedad crónica, PetSalud le brindará cobertura completa para su
              tratamiento.
            </p>
          </div>

          <!-- Features rápidas -->
          <div class="flex flex-wrap gap-3">
            <span v-for="f in features" :key="f"
              class="inline-flex items-center gap-1.5 px-4 py-2 bg-slate-50 border border-slate-200 rounded-full text-xs font-semibold text-slate-600">
              <span class="text-emerald-500 font-bold">✓</span> {{ f }}
            </span>
          </div>

          <!-- CTA -->
          <div class="pt-2">
            <RouterLink to="/Afiliate"
              class="inline-flex items-center gap-2 px-8 py-4 bg-sky-600 hover:bg-sky-700 active:scale-95 text-white font-bold text-base rounded-2xl shadow-lg shadow-sky-500/25 transition-all duration-200 group">
              Cotizar mi plan
              <span class="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </RouterLink>
          </div>

        </div>

        <!-- Columna derecha: imagen -->
        <div class="lg:col-span-5 flex justify-center lg:justify-end">
          <div class="relative w-full max-w-md lg:max-w-lg">

            <!-- Halo decorativo -->
            <div
              class="absolute inset-0 bg-linear-to-br from-sky-100 to-emerald-50 rounded-full blur-3xl scale-110 opacity-70">
            </div>

            <img src="https://res.cloudinary.com/diro0cqpe/image/upload/v1779344341/planPerro_tvup1c.png"
              alt="Planes para Perros - PetSalud Colombia"
              class="relative w-full h-auto object-contain drop-shadow-2xl" />

            <!-- Badge: adaptado -->
            <div
              class="absolute -top-3 -right-3 sm:-right-6 bg-white border border-slate-100 rounded-2xl shadow-lg px-4 py-2.5 flex items-center gap-2">
              <span
                class="flex items-center justify-center w-7 h-7 rounded-xl bg-emerald-100 text-emerald-600 text-xs font-bold shrink-0">✓</span>
              <span class="text-slate-700 text-sm font-semibold">Adaptado a tu perro</span>
            </div>

            <!-- Badge: cobertura -->
            <div
              class="absolute -bottom-3 -left-3 sm:-left-6 bg-sky-600 text-white rounded-2xl shadow-lg px-4 py-2.5 flex items-center gap-2">
              <span class="text-xl shrink-0"> <i class="fa-solid fa-shield-dog" style="color: aliceblue;"></i></span>
              <div>
                <p class="text-xs font-bold leading-none">Cobertura total</p>
                <p class="text-sky-200 text-xs mt-0.5">Preventiva + urgencias</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>

    <!-- Secciones hijas -->
    <PlanesPrincipales />
    <MedicinaPreventiva />
    <footerInfo />
    <!-- <Copyright /> -->

  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import MedicinaPreventiva from '../components/MedicinaPreventiva.vue'
import PlanesPrincipales from '../components/PlanesPrincipales.vue'
import Copyright from '../components/copyright.vue'
import footerInfo from '../components/footerInfo.vue'
import { useHead } from '@unhead/vue'

const features = [
  'Cobertura nacional',
  'Atención 24/7',
  'Enfermedades crónicas',
  'Medicina preventiva',
]

useHead({
  title: 'Planes para Perros 🐾 | PetSalud Colombia',
  meta: [
    { name: 'description', content: 'PetSalud Medicina Prepagada ofrece planes con excelentes coberturas, servicios, clínicas veterinarias y beneficios adicionales adaptados a las necesidades de tu perro.' },
    { property: 'og:title', content: 'PetSalud | Planes para Perros' },
    { property: 'og:description', content: 'Planes de medicina prepagada veterinaria adaptados a tu perro. Cobertura preventiva, urgencias y enfermedades crónicas.' },
    { property: 'og:image', content: 'https://res.cloudinary.com/diro0cqpe/image/upload/v1761360294/planes-para-perros_r6zggu.png' },
    { property: 'og:type', content: 'website' },
  ],
})
</script>