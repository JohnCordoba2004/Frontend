<template>
  <div class="min-h-screen bg-white">

    <!-- Hero interno de la página -->
    <div class="bg-slate-950 pt-20 pb-16 sm:pb-20 relative overflow-hidden">
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(56,189,248,0.12)_0%,transparent_60%)]">
      </div>
      <div class="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <span
          class="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-sky-300 text-xs font-bold tracking-widest uppercase mb-6">
          <i class="fa-solid fa-circle-info"></i>
          Conoce PetSalud
        </span>
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter leading-[0.95] text-white max-w-2xl">
          ¿Qué es <span
            class="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-emerald-400">PetSalud?</span>
        </h1>
        <p class="mt-5 text-slate-400 text-base sm:text-lg max-w-xl leading-relaxed">
          La primera Medicina Prepagada Veterinaria en Colombia, diseñada para cuidar a quienes más quieres.
        </p>
      </div>
    </div>

    <!-- Contenido principal -->
    <section class="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
      <div class="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">

        <!-- Columna izquierda -->
        <div class="lg:col-span-7 flex flex-col gap-10">

          <!-- Texto intro -->
          <div class="flex flex-col gap-5 text-slate-600 text-base sm:text-lg leading-relaxed">
            <p>
              PetSalud es la primera <strong class="text-slate-900 font-semibold">Medicina Prepagada
                Veterinaria</strong> en Colombia.
              Te permite acceder a atención médica de alta calidad, preventiva y de urgencia,
              sin preocuparte por costos altos e inesperados.
            </p>
            <p>
              Nuestros planes están diseñados según la edad, raza y necesidades específicas de tu perro o gato,
              ofreciendo cobertura en consultas, tratamientos, cirugías, medicamentos y mucho más.
            </p>
          </div>

          <!-- Stats rápidas -->
          <div class="grid grid-cols-3 gap-4">
            <div v-for="stat in stats" :key="stat.label"
              class="bg-slate-50 rounded-2xl p-5 flex flex-col gap-1 border border-slate-100">
              <span class="text-2xl">{{ stat.icono }}</span>
              <p class="text-xl sm:text-2xl font-black text-slate-900 leading-none mt-1">{{ stat.valor }}</p>
              <p class="text-xs text-slate-500 leading-snug">{{ stat.label }}</p>
            </div>
          </div>

          <!-- Imagen -->
          <div class="rounded-3xl overflow-hidden shadow-xl border border-slate-100">
            <img
              src="https://res.cloudinary.com/diro0cqpe/image/upload/v1759439966/veterinario_cuidando_mascota_ewbuxl.jpg"
              alt="Veterinario cuidando mascota - PetSalud Colombia"
              class="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" />
          </div>
        </div>

        <!-- Columna derecha: tarjetas -->
        <div class="lg:col-span-5 flex flex-col gap-5 lg:sticky lg:top-8">

          <p class="text-xs font-bold tracking-widest uppercase text-slate-400">Lo que nos define</p>

          <div v-for="card in cards" :key="card.titulo"
            class="group bg-white border border-slate-100 hover:border-slate-200 rounded-3xl p-7 shadow-sm hover:shadow-lg transition-all duration-200 flex flex-col gap-5">
            <div class="flex items-center gap-4">
              <div :class="`w-12 h-12 ${card.bg} rounded-2xl flex items-center justify-center text-2xl shrink-0`">
                {{ card.icono }}
              </div>
              <h3 class="text-lg font-bold text-slate-900">{{ card.titulo }}</h3>
            </div>
            <p class="text-slate-500 text-sm leading-relaxed">{{ card.desc }}</p>
            <a :href="card.link"
              class="inline-flex items-center gap-1.5 text-sky-600 hover:text-sky-700 text-sm font-semibold transition-all duration-200 group/link">
              {{ card.cta }}
              <span class="transition-transform duration-200 group-hover/link:translate-x-1">→</span>
            </a>
          </div>

        </div>
      </div>
    </section>

    <footerInfo />
    <!-- <Copyright /> -->
  </div>
</template>

<script setup>
import footerInfo from '../components/footerInfo.vue'
import Copyright from '../components/copyright.vue'

const stats = [
  { icono: '🐾', valor: '+10K', label: 'Mascotas protegidas' },
  { icono: '🏥', valor: '+500', label: 'Veterinarias aliadas' },
  { icono: '⭐', valor: '4.9/5', label: 'Calificación clientes' },
]

const cards = [
  {
    icono: '📍',
    bg: 'bg-sky-50',
    titulo: 'Cobertura Nacional',
    desc: 'Contamos con una amplia red de clínicas y médicos veterinarios certificados en todo el país.',
    link: '/NuestraRed',
    cta: 'Ver red completa',
  },
  {
    icono: '🐾',
    bg: 'bg-emerald-50',
    titulo: 'Afíliate Ahora',
    desc: 'Descubre la forma más fácil y económica de cuidar la salud de tu mascota con planes diseñados para ti.',
    link: '/Afiliate',
    cta: 'Quiero afiliarme',
  },
  {
    icono: '📋',
    bg: 'bg-amber-50',
    titulo: 'Nuestros Planes',
    desc: 'Explora todos nuestros planes médicos y encuentra el que mejor se adapta a la raza y edad de tu mascota.',
    link: '/Planes',
    cta: 'Ver todos los planes',
  },
]
</script>