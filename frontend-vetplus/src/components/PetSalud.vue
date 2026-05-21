<template>
  <section class="bg-white py-20 sm:py-28 overflow-hidden">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

        <!-- Imagen -->
        <div class="relative">
          <!-- Decoración de fondo -->
          <div class="absolute -top-6 -left-6 w-64 h-64 bg-sky-50 rounded-full blur-3xl opacity-70 pointer-events-none">
          </div>
          <div
            class="absolute -bottom-6 -right-6 w-48 h-48 bg-emerald-50 rounded-full blur-2xl opacity-60 pointer-events-none">
          </div>

          <img
            src="https://res.cloudinary.com/diro0cqpe/image/upload/v1759439966/veterinario_cuidando_mascota_ewbuxl.jpg"
            alt="Veterinario cuidando mascota - PetSalud Colombia"
            class="relative w-full rounded-3xl shadow-xl object-cover aspect-square lg:aspect-[4/5]" />

          <!-- Badge flotante mascotas protegidas -->
          <div
            class="absolute -bottom-5 -left-4 sm:-left-8 bg-white rounded-2xl shadow-xl px-5 py-4 flex items-center gap-3 border border-slate-100">
            <div class="w-11 h-11 bg-emerald-100 rounded-xl flex items-center justify-center text-2xl shrink-0">
              🐾
            </div>
            <div>
              <p class="font-bold text-emerald-700 text-sm leading-none">+10.000</p>
              <p class="text-xs text-slate-500 mt-1">Mascotas protegidas</p>
            </div>
          </div>

          <!-- Badge flotante años de experiencia -->
          <div
            class="absolute -top-4 -right-4 sm:-right-6 bg-sky-600 text-white rounded-2xl shadow-lg px-5 py-4 flex items-center gap-3">
            <div class="text-2xl shrink-0">🏆</div>
            <div>
              <p class="font-bold text-sm leading-none">Nº1 en Colombia</p>
              <p class="text-xs text-sky-200 mt-1">Medicina prepagada vet.</p>
            </div>
          </div>
        </div>

        <!-- Contenido texto -->
        <div class="flex flex-col gap-8">

          <!-- Encabezado -->
          <div>
            <span
              class="inline-flex items-center gap-2 bg-sky-50 text-sky-700 border border-sky-200 px-5 py-2 rounded-full text-xs font-bold tracking-widest uppercase mb-5">
              <i class="fa-solid fa-circle-info"></i>
              ¿Qué es PetSalud?
            </span>
            <h2 class="text-4xl sm:text-5xl font-bold leading-tight text-slate-900">
              Medicina prepagada<br />
              <span class="text-sky-600">pensada para tu mascota</span>
            </h2>
          </div>

          <p class="text-base sm:text-lg text-slate-500 leading-relaxed">
            PetSalud es la primera medicina prepagada veterinaria en Colombia.
            Te permite acceder a atención médica de calidad, preventiva y de urgencia,
            <strong class="text-slate-700 font-semibold">sin preocuparte por costos altos e inesperados</strong>.
          </p>

          <!-- Features -->
          <ul class="flex flex-col gap-5">
            <li v-for="feature in features" :key="feature.titulo" class="flex items-start gap-4">
              <span
                class="flex items-center justify-center w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-600 text-lg shrink-0 mt-0.5">
                {{ feature.icono }}
              </span>
              <div>
                <h4 class="font-semibold text-slate-900 text-sm">{{ feature.titulo }}</h4>
                <p class="text-slate-500 text-sm mt-0.5 leading-relaxed">{{ feature.desc }}</p>
              </div>
            </li>
          </ul>

          <!-- CTA -->
          <div class="flex flex-col sm:flex-row gap-3 pt-2">
            <RouterLink to="/PetSalud"
              class="inline-flex items-center justify-center gap-2 px-7 py-4 bg-sky-600 hover:bg-sky-700 active:scale-95 text-white text-sm font-semibold rounded-2xl transition-all duration-200 shadow-sm shadow-sky-200 group">
              Conocer más sobre PetSalud
              <span class="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </RouterLink>
            <RouterLink to="/Planes"
              class="inline-flex items-center justify-center gap-2 px-7 py-4 bg-slate-100 hover:bg-slate-200 active:scale-95 text-slate-700 text-sm font-semibold rounded-2xl transition-all duration-200">
              Ver planes
            </RouterLink>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router';

const features = [
  {
    icono: '🗺️',
    titulo: 'Cobertura nacional',
    desc: 'Atención en cualquier veterinaria o médico del país.',
  },
  {
    icono: '🚨',
    titulo: 'Atención 24/7',
    desc: 'Emergencias y urgencias sin costo adicional a cualquier hora.',
  },
  {
    icono: '🎯',
    titulo: 'Planes personalizados',
    desc: 'Adaptados según la edad, raza y necesidades de tu mascota.',
  },
]
</script>