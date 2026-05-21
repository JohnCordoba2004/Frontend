<template>
  <section class="relative min-h-[92vh] flex items-center overflow-hidden bg-slate-950">

    <!-- Fondo con gradiente + orbes decorativos -->
    <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(56,189,248,0.15)_0%,transparent_60%)]">
    </div>
    <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(16,185,129,0.08)_0%,transparent_60%)]">
    </div>

    <!-- Grid de puntos decorativo -->
    <div
      class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNikiLz48L3N2Zz4=')] opacity-60">
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-0 w-full">
      <div class="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

        <!-- Columna izquierda: Texto -->
        <div class="hero-text flex flex-col gap-8">

          <!-- Pill de estado -->
          <div
            class="inline-flex items-center gap-2 self-start bg-white/5 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full text-sky-300 text-sm font-medium">
            <span class="w-2 h-2 bg-emerald-400 rounded-full animate-pulse shrink-0"></span>
            Medicina Prepagada Veterinaria
          </div>

          <!-- Título -->
          <div>
            <h1 class="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.9] text-white">
              Tu mascota<br />
              merece atención<br />
              <span class="text-transparent bg-clip-text bg-linear-to-r from-sky-400 to-emerald-400">
                de verdad
              </span>
            </h1>
          </div>

          <!-- Descripción -->
          <p class="text-base sm:text-lg text-slate-400 max-w-md leading-relaxed">
            Planes personalizados de medicina prepagada para perros y gatos.
            Atención veterinaria de calidad <strong class="text-slate-200 font-medium">cuando más la necesitas</strong>.
          </p>

          <!-- CTAs -->
          <div class="flex flex-col sm:flex-row gap-3">
            <a href="/Planes"
              class="inline-flex items-center justify-center gap-2 px-7 py-4 bg-sky-500 hover:bg-sky-400 active:scale-95 text-white text-sm font-bold rounded-2xl transition-all duration-200 shadow-lg shadow-sky-500/25 group">
              Ver nuestros planes
              <span class="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </a>
            <a href="/Afiliate"
              class="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white/5 hover:bg-white/10 active:scale-95 border border-white/10 hover:border-white/20 text-white text-sm font-bold rounded-2xl transition-all duration-200 backdrop-blur-sm">
              Afiliarme ahora
            </a>
          </div>

          <!-- Indicadores de confianza -->
          <div class="flex flex-wrap items-center gap-6 pt-2 border-t border-white/10">
            <div class="flex items-center gap-2.5">
              <div class="flex items-center gap-0.5 text-amber-400 text-sm">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </div>
              <div>
                <p class="text-white text-sm font-bold leading-none">4.9/5</p>
                <p class="text-slate-500 text-xs mt-0.5">Calificación clientes</p>
              </div>
            </div>
            <div class="flex items-center gap-1.5 text-sm text-slate-400">
              <span class="text-emerald-400 font-bold">✓</span> Atención 24/7
            </div>
            <div class="flex items-center gap-1.5 text-sm text-slate-400">
              <span class="text-emerald-400 font-bold">✓</span> Cobertura nacional
            </div>
          </div>

        </div>

        <!-- Columna derecha: Imagen -->
        <div class="hero-image relative flex justify-center lg:justify-end">
          <div class="relative w-full max-w-lg lg:max-w-xl">

            <!-- Halo decorativo detrás de la imagen -->
            <div
              class="absolute inset-0 rounded-3xl bg-linear-to-br from-sky-500/20 to-emerald-500/10 blur-2xl scale-110">
            </div>

            <img src="https://res.cloudinary.com/diro0cqpe/image/upload/v1759439965/thumbnail_perro_1_c45ff4.webp"
              alt="Mascota Feliz - PetSalud Colombia" class="relative w-full rounded-3xl shadow-2xl object-cover" />

            <!-- Badge: Protegido -->
            <div
              class="absolute -top-4 -right-3 sm:-right-6 bg-slate-900 border border-white/10 rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3">
              <div class="w-10 h-10 bg-emerald-500/20 rounded-xl flex items-center justify-center text-xl shrink-0">🐾
              </div>
              <div>
                <p class="font-bold text-emerald-400 text-sm leading-none">Protegido</p>
                <p class="text-xs text-slate-500 mt-1">por PetSalud</p>
              </div>
            </div>

            <!-- Badge: +10.000 mascotas -->
            <div
              class="absolute -bottom-4 -left-3 sm:-left-6 bg-slate-900 border border-white/10 rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3">
              <div class="w-10 h-10 bg-sky-500/20 rounded-xl flex items-center justify-center text-xl shrink-0">🏥</div>
              <div>
                <p class="font-bold text-sky-400 text-sm leading-none">+10.000</p>
                <p class="text-xs text-slate-500 mt-1">Mascotas protegidas</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import { gsap } from 'gsap'

onMounted(() => {
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

  tl.fromTo('.hero-text',
    { opacity: 0, y: 40 },
    { opacity: 1, y: 0, duration: 0.9 }
  ).fromTo('.hero-image',
    { opacity: 0, y: 30, scale: 0.97 },
    { opacity: 1, y: 0, scale: 1, duration: 0.9 },
    '-=0.6'
  )
})
</script>