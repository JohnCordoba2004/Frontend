<template>
  <section
    class="hero-content relative min-h-[90vh] flex items-center bg-linear-to-br from-sky-50 via-white to-sky-100 overflow-hidden">
    <!-- Fondo decorativo sutil -->
    <div class="absolute inset-0 bg-[radial-gradient(at_top_right,#bae6fd_0%,transparent_50%)]"></div>

    <div class="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-0 relative z-10">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        <!-- Columna izquierda - Texto -->
        <div class="space-y-8 lg:space-y-10">
          <div
            class="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full text-sky-600 text-sm font-medium shadow-sm">
            <span class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            Medicina Prepagada Veterinaria
          </div>

          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter leading-none text-gray-900">
            Tu mascota merece<br>
            <span class="text-sky-600">atención de verdad</span>
          </h1>

          <p class="text-lg lg:text-xl text-gray-600 max-w-lg leading-relaxed">
            Planes personalizados de medicina prepagada para perros y gatos.
            Atención veterinaria de calidad cuando más la necesitas.
          </p>

          <div class="flex flex-col sm:flex-row gap-4">
            <a href="/Planes"
              class="px-8 py-4 bg-sky-600 hover:bg-sky-700 text-white font-semibold rounded-2xl text-center transition-all duration-300 shadow-lg shadow-sky-500/30">
              Ver nuestros planes
            </a>
            <a href="/Afiliate"
              class="px-8 py-4 border-2 border-sky-600 text-sky-700 hover:bg-sky-50 font-semibold rounded-2xl text-center transition-all duration-300">
              Afiliarme ahora
            </a>
          </div>

          <!-- Confianza -->
          <div class="flex items-center gap-8 text-sm text-gray-500 pt-4">
            <div class="flex items-center gap-2">
              <span class="text-2xl">⭐</span>
              <div>
                <div class="font-medium text-gray-900">4.9/5</div>
                <div class="text-xs">Calificación de clientes</div>
              </div>
            </div>
            <div>✓ Atención 24/7</div>
            <div>✓ Cobertura nacional</div>
          </div>
        </div>

        <!-- Columna derecha - Imagen -->
        <div class="hero-content relative flex justify-center lg:justify-end">
          <div class="relative">
            <img src="https://res.cloudinary.com/diro0cqpe/image/upload/v1759439965/thumbnail_perro_1_c45ff4.webp"
              alt="Mascota Feliz - PetSalud" class="w-full max-w-lg lg:max-w-xl rounded-3xl shadow-2xl">
            <!-- Badge flotante -->
            <div class="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl px-5 py-3 flex items-center gap-3">
              <div class="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center text-2xl">🐾</div>
              <div>
                <div class="font-semibold text-emerald-700">Protegido</div>
                <div class="text-xs text-gray-500">por PetSalud</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue';
import { gsap } from 'gsap';

onMounted(() => {
  gsap.fromTo(".hero-content",
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
  );
});
</script>