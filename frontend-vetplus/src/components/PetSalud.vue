<template>
  <section class="bg-white py-16 sm:py-20 lg:py-28">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        <!-- Imagen -->
        <div class="relative">
          <img
            src="https://res.cloudinary.com/diro0cqpe/image/upload/v1759439966/veterinario_cuidando_mascota_ewbuxl.jpg"
            alt="Veterinario cuidando mascota - PetSalud"
            class="w-full rounded-3xl shadow-2xl object-cover aspect-4/3 lg:aspect-square">
          <!-- Badge flotante -->
          <div class="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-5 flex items-center gap-4">
            <div class="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center text-3xl">
              🐾
            </div>
            <div>
              <div class="font-semibold text-emerald-700">+10.000</div>
              <div class="text-sm text-gray-500">Mascotas protegidas</div>
            </div>
          </div>
        </div>

        <!-- Contenido texto -->
        <div class="space-y-8">
          <div>
            <span class="inline-block px-4 py-1.5 bg-sky-100 text-sky-700 text-sm font-medium rounded-full mb-4">
              ¿Qué es PetSalud?
            </span>
            <h2 class="text-4xl sm:text-5xl font-bold leading-tight text-gray-900">
              Medicina prepagada<br>pensada para tu mascota
            </h2>
          </div>

          <p class="text-lg text-gray-600 leading-relaxed">
            PetSalud es la primera medicina prepagada veterinaria en Colombia.
            Te permite acceder a atención médica de calidad, preventiva y de urgencia
            sin preocuparte por costos altos e inesperados.
          </p>

          <div class="space-y-6">
            <div class="flex gap-4">
              <div class="w-8 h-8 bg-emerald-100 rounded-2xl flex items-center justify-center shrink-0 mt-1">
                <span class="text-emerald-600 text-xl">✓</span>
              </div>
              <div>
                <h4 class="font-semibold text-gray-900">Cobertura nacional</h4>
                <p class="text-gray-600">Atención en cualquier veterinaria o médico del país</p>
              </div>
            </div>

            <div class="flex gap-4">
              <div class="w-8 h-8 bg-emerald-100 rounded-2xl flex items-center justify-center shrink-0 mt-1">
                <span class="text-emerald-600 text-xl">✓</span>
              </div>
              <div>
                <h4 class="font-semibold text-gray-900">Atención 24/7</h4>
                <p class="text-gray-600">Emergencias y urgencias sin costo adicional</p>
              </div>
            </div>

            <div class="flex gap-4">
              <div class="w-8 h-8 bg-emerald-100 rounded-2xl flex items-center justify-center shrink-0 mt-1">
                <span class="text-emerald-600 text-xl">✓</span>
              </div>
              <div>
                <h4 class="font-semibold text-gray-900">Planes personalizados</h4>
                <p class="text-gray-600">Adaptados según la edad, raza y necesidades de tu mascota</p>
              </div>
            </div>
          </div>

          <a href="/PetSalud"
            class="inline-flex items-center gap-3 px-8 py-4 bg-sky-600 hover:bg-sky-700 text-white font-semibold rounded-2xl transition-all duration-300 group">
            Conocer más sobre PetSalud
            <span class="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

