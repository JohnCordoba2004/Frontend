<template>
  <div class="bg-white min-h-screen">

    <!-- Hero interno -->
    <div class="bg-slate-950 pt-20 pb-16 sm:pb-20 relative overflow-hidden">
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(56,189,248,0.12)_0%,transparent_60%)]">
      </div>
      <div class="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <span
          class="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-sky-300 text-xs font-bold tracking-widest uppercase mb-6">
          <i class="fa-solid fa-hospital"></i>
          Nuestra Red
        </span>
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter leading-[0.95] text-white max-w-2xl">
          Profesionales y clínicas que
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-emerald-400"> cuidan a tu
            mascota</span>
        </h1>
        <p class="mt-5 text-slate-400 text-base sm:text-lg max-w-xl leading-relaxed">
          Especialistas certificados y centros médicos aliados listos para atender a tu mascota en todo el país.
        </p>
      </div>
    </div>

    <!-- Contenido principal -->
    <section class="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
      <div class="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">

        <!-- Tarjetas de red -->
        <div class="lg:col-span-8">

          <!-- Contador rápido -->
          <div class="grid grid-cols-3 gap-4 mb-10">
            <div v-for="stat in stats" :key="stat.label"
              class="bg-slate-50 border border-slate-100 rounded-2xl p-4 flex flex-col gap-1">
              <span class="text-xl">{{ stat.icono }}</span>
              <p class="text-xl font-black text-slate-900 leading-none mt-1">{{ stat.valor }}</p>
              <p class="text-xs text-slate-500">{{ stat.label }}</p>
            </div>
          </div>

          <!-- Grid de tarjetas -->
          <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div v-for="card in cards" :key="card.label"
              class="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
              <!-- Imagen -->
              <div class="h-52 overflow-hidden shrink-0">
                <img :src="card.img" :alt="card.label"
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>

              <!-- Contenido -->
              <div class="p-6 flex flex-col gap-4 flex-1">
                <div class="flex items-center gap-3">
                  <span class="flex items-center justify-center w-9 h-9 rounded-xl text-xl shrink-0"
                    :class="card.iconBg">
                    {{ card.icono }}
                  </span>
                  <h3 class="font-bold text-slate-900 text-base leading-snug">{{ card.label }}</h3>
                </div>
                <p class="text-slate-500 text-xs leading-relaxed flex-1">{{ card.desc }}</p>
                <a :href="card.link"
                  class="inline-flex items-center justify-center gap-2 w-full py-3 bg-sky-600 hover:bg-sky-700 active:scale-95 text-white text-sm font-bold rounded-2xl transition-all duration-200 group/btn">
                  {{ card.cta }}
                  <span class="transition-transform duration-200 group-hover/btn:translate-x-1">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Sidebar sticky -->
        <aside class="lg:col-span-4 lg:sticky lg:top-8 flex flex-col gap-5">

          <!-- Card Afíliate -->
          <div class="bg-slate-950 rounded-3xl p-7 flex flex-col gap-5 border border-white/5 relative overflow-hidden">
            <div
              class="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(56,189,248,0.1)_0%,transparent_70%)]">
            </div>
            <div class="relative z-10 flex flex-col gap-5">
              <div class="w-12 h-12 bg-emerald-500/20 rounded-2xl flex items-center justify-center text-2xl">🐾</div>
              <div>
                <h2 class="text-xl font-bold text-white mb-2">Afíliate a PetSalud</h2>
                <p class="text-slate-400 text-sm leading-relaxed">
                  Descubre la forma más fácil de cuidar a tu mascota con planes diseñados especialmente para ti.
                </p>
              </div>
              <a href="/Afiliate"
                class="inline-flex items-center justify-center gap-2 w-full py-3.5 bg-sky-500 hover:bg-sky-400 active:scale-95 text-white text-sm font-bold rounded-2xl transition-all duration-200 shadow-lg shadow-sky-500/20 group">
                Afíliate aquí
                <span class="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>

          <!-- Card ¿Dudas? -->
          <div class="bg-sky-50 border border-sky-100 rounded-3xl p-7 flex flex-col gap-4">
            <div class="w-10 h-10 bg-sky-100 rounded-xl flex items-center justify-center text-xl">💬</div>
            <div>
              <h3 class="font-bold text-slate-900 text-base mb-1">¿Tienes dudas?</h3>
              <p class="text-slate-500 text-sm leading-relaxed">
                Nuestro equipo está disponible para orientarte sobre la red de atención más cercana.
              </p>
            </div>
            <a href="mailto:contacto@petsaludcolombia.com"
              class="inline-flex items-center gap-2 text-sky-600 hover:text-sky-700 text-sm font-semibold transition-colors duration-200 group">
              Escríbenos
              <span class="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </a>
          </div>

        </aside>
      </div>
    </section>

    <footerInfo />
    <!-- <copyright /> -->
  </div>
</template>

<script setup>
import footerInfo from '../components/footerInfo.vue'
import copyright from '../components/copyright.vue'
import { useHead } from '@unhead/vue'

const stats = [
  { icono: '🏥', valor: '+500', label: 'Clínicas aliadas' },
  { icono: '👨‍⚕️', valor: '+800', label: 'Profesionales' },
  { icono: '🗺️', valor: '32', label: 'Departamentos' },
]

const cards = [
  {
    img: 'https://res.cloudinary.com/diro0cqpe/image/upload/v1769182290/clinicas1_vmjxp6.jpg',
    icono: '🏥',
    iconBg: 'bg-sky-50',
    label: 'Clínicas Veterinarias',
    desc: 'Centros médicos especializados con equipos de diagnóstico y atención de urgencias en todo el país.',
    link: '/ClinicasVeterinarias',
    cta: 'Ver clínicas',
  },
  {
    img: 'https://res.cloudinary.com/diro0cqpe/image/upload/v1769182290/clinicas2_wxtcp0.jpg',
    icono: '👨‍⚕️',
    iconBg: 'bg-emerald-50',
    label: 'Profesionales Adscritos',
    desc: 'Médicos veterinarios certificados y especializados listos para atender a tu mascota.',
    link: '/ProfesionalesVet',
    cta: 'Ver profesionales',
  },
  {
    img: 'https://res.cloudinary.com/diro0cqpe/image/upload/v1769182868/clinicas3_vmqdrl.jpg',
    icono: '➕',
    iconBg: 'bg-violet-50',
    label: 'Otros Servicios',
    desc: 'Laboratorios, farmacias veterinarias y servicios complementarios para el cuidado de tu mascota.',
    link: '/Otros',
    cta: 'Ver servicios',
  },
]

useHead({
  title: 'Nuestra Red 🏥 | PetSalud Colombia',
  meta: [
    { name: 'description', content: 'Conoce los especialistas y centros médicos aliados a PetSalud. Profesionales certificados listos para atender a tu mascota en todo el país.' },
    { property: 'og:title', content: 'PetSalud | Nuestra Red de Atención' },
    { property: 'og:description', content: 'Más de 500 clínicas y 800 profesionales veterinarios aliados en todo Colombia.' },
    { property: 'og:type', content: 'website' },
  ],
})
</script>