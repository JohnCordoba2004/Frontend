<template>
  <div class="min-h-screen bg-white">
    <section class="max-w-7xl mx-auto px-6 py-16 lg:py-24">
      <div class="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">

        <!-- Columna izquierda - Contenido principal -->
        <div class="lg:col-span-7">
          <div class="mb-12">
            <span class="inline-block px-5 py-2 bg-sky-100 text-sky-700 rounded-full text-sm font-medium mb-6">
              Conoce PetSalud
            </span>
            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 mb-8">
              ¿Qué es PetSalud?
            </h1>
            <div class="prose prose-lg text-gray-600 max-w-none leading-relaxed">
              <p>
                PetSalud es la primera <strong>Medicina Prepagada Veterinaria</strong> en Colombia.
                Te permite acceder a atención médica de alta calidad, preventiva y de urgencia,
                sin preocuparte por costos altos e inesperados.
              </p>
              <p>
                Nuestros planes están diseñados según la edad, raza y necesidades específicas de tu perro o gato,
                ofreciendo cobertura en consultas, tratamientos, cirugías, medicamentos y mucho más.
              </p>
            </div>
          </div>

          <!-- Imagen grande -->
          <div class="rounded-3xl overflow-hidden shadow-2xl">
            <img src="https://res.cloudinary.com/diro0cqpe/image/upload/v1759439966/veterinario_cuidando_mascota_ewbuxl.jpg"
              alt="Qué es PetSalud" class="w-full h-auto object-cover">
          </div>
        </div>

        <!-- Columna derecha - Tarjetas de interés -->
        <div class="lg:col-span-5 space-y-6">

          <!-- Tarjeta Cobertura -->
          <div class="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all group">
            <div class="flex items-center gap-4 mb-6">
              <div class="w-12 h-12 bg-sky-100 rounded-2xl flex items-center justify-center text-3xl">
                📍
              </div>
              <h3 class="text-2xl font-semibold text-gray-900">Cobertura Nacional</h3>
            </div>
            <p class="text-gray-600 leading-relaxed mb-6">
              Contamos con una amplia red de clínicas y médicos veterinarios certificados en todo el país.
            </p>
            <a href="/NuestraRed"
              class="inline-flex items-center gap-2 text-sky-600 font-medium group-hover:gap-3 transition-all">
              Ver red completa
              <span class="text-xl">→</span>
            </a>
          </div>

          <!-- Tarjeta Afíliate -->
          <div class="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all group">
            <div class="flex items-center gap-4 mb-6">
              <div class="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center text-3xl">
                🐾
              </div>
              <h3 class="text-2xl font-semibold text-gray-900">Afíliate Ahora</h3>
            </div>
            <p class="text-gray-600 leading-relaxed mb-6">
              Descubre la forma más fácil y económica de cuidar la salud de tu mascota con planes diseñados para ti.
            </p>
            <a href="/Afiliate"
              class="inline-flex items-center gap-2 text-sky-600 font-medium group-hover:gap-3 transition-all">
              Quiero afiliarme
              <span class="text-xl">→</span>
            </a>
          </div>

        </div>
      </div>
    </section>

    <!-- Componentes del footer -->
    <footerInfo />
    <Copyright />
  </div>
</template>

<script setup>
import footerInfo from '../components/footerInfo.vue';
import Copyright from '../components/copyright.vue';
</script>
