<template>
  <div class="bg-white">

    <!-- Hero de página -->
    <section class="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
      <div class="grid lg:grid-cols-12 gap-14 lg:gap-20 items-center">

        <!-- Columna izquierda: texto -->
        <div class="lg:col-span-7 flex flex-col gap-8">

          <!-- Pill -->
          <span
            class="inline-flex items-center gap-2 self-start bg-violet-50 text-violet-700 border border-violet-200 px-5 py-2 rounded-full text-xs font-bold tracking-widest uppercase">
            <i class="fa-solid fa-cat"></i>
            Planes para Gatos
          </span>

          <!-- Título -->
          <h1 class="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.9] text-slate-900">
            Protección completa<br />
            para tu <span
              class="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-sky-500">minino</span>
          </h1>

          <!-- Descripción -->
          <div class="flex flex-col gap-4 text-slate-600 text-base sm:text-lg leading-relaxed max-w-lg">
            <p>
              PetSalud ofrece planes con excelentes coberturas, servicios, clínicas veterinarias y
              beneficios adicionales <strong class="text-slate-800 font-semibold">adaptados a las necesidades de tu
                gato</strong>.
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
              class="absolute inset-0 bg-gradient-to-br from-violet-100 to-sky-50 rounded-full blur-3xl scale-110 opacity-70">
            </div>

            <img src="https://res.cloudinary.com/diro0cqpe/image/upload/v1779344512/planGato_do6ogn.png"
              alt="Planes para Gatos - PetSalud Colombia"
              class="relative w-full h-auto object-contain drop-shadow-2xl" />

            <!-- Badge: adaptado -->
            <div
              class="absolute -top-3 -right-3 sm:-right-6 bg-white border border-slate-100 rounded-2xl shadow-lg px-4 py-2.5 flex items-center gap-2">
              <span
                class="flex items-center justify-center w-7 h-7 rounded-xl bg-emerald-100 text-emerald-600 text-xs font-bold shrink-0">✓</span>
              <span class="text-slate-700 text-sm font-semibold">Adaptado a tu gato</span>
            </div>

            <!-- Badge: cobertura -->
            <div
              class="absolute -bottom-3 -left-3 sm:-left-6 bg-sky-600 text-white rounded-2xl shadow-lg px-4 py-2.5 flex items-center gap-2">
              <span class="text-xl shrink-0">🛡️</span>
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
    <PlanesPrincipales tipoFiltro="cat" />
    <MedicinaPreventiva />
    <footerInfo />

  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import PlanesPrincipales from '../components/PlanesPrincipales.vue'
import MedicinaPreventiva from '../components/MedicinaPreventiva.vue'
import footerInfo from '../components/footerInfo.vue'

import { useHead } from '@unhead/vue'

const features = [
  'Cobertura nacional',
  'Atención 24/7',
  'Enfermedades crónicas',
  'Medicina preventiva',
]

useHead({
  title: 'Planes para Gatos 🐱 | PetSalud Colombia',
  meta: [
    { name: 'description', content: 'Planes especializados para gatos con excelente cobertura médica, medicina preventiva, urgencias y enfermedades crónicas. PetSalud Colombia.' },
    { property: 'og:title', content: 'PetSalud | Planes para Gatos' },
    { property: 'og:description', content: 'Planes de medicina prepagada veterinaria adaptados a tu gato. Cobertura preventiva, urgencias y enfermedades crónicas.' },
    { property: 'og:image', content: 'https://res.cloudinary.com/diro0cqpe/image/upload/v1779344512/planGato_do6ogn.png' },
    { property: 'og:type', content: 'website' },
  ],
})
</script>