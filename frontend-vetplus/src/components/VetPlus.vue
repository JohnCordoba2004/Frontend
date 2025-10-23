<template>
  <section class="bg-white py-16 sm:py-24 lg:py-32 xl:py-40">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-16">
        <!-- Imagen / ilustación-->
        <div class="flex-1 w-full lg:w-auto">
          <img src="https://res.cloudinary.com/diro0cqpe/image/upload/v1759439966/veterinario_cuidando_mascota_ewbuxl.jpg"
            alt="veterinario_cuidando_mascota" 
            class="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px] rounded-xl shadow-lg object-cover">
        </div>

        <!-- Texto -->
        <div class="flex-1 w-full lg:w-auto">
          <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 lg:mb-8 leading-tight">
            ¿Qué es VetPlus?
          </h2>

          <p class="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-600 leading-relaxed mb-6 sm:mb-8 text-balance">
            Es la única Medicina Prepagada Veterinaria con el cual su mascota podrá contar con todos los servicios médicos
            de la más alta calidad. Con VetPlus® usted tendrá cobertura total en medicina preventiva, atención y
            tratamiento de urgencias, enfermedades y accidentes
          </p>

          <ul class="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
            <li class="flex items-start gap-3 sm:gap-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 sm:w-6 sm:h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span class="text-sm sm:text-base lg:text-lg text-gray-700">Cobertura nacional con veterinarios certificados</span>
            </li>
            <li class="flex items-start gap-3 sm:gap-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 sm:w-6 sm:h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span class="text-sm sm:text-base lg:text-lg text-gray-700">Atención 24/7 para emergencias</span>
            </li>
            <li class="flex items-start gap-3 sm:gap-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 sm:w-6 sm:h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span class="text-sm sm:text-base lg:text-lg text-gray-700">Planes flexibles y adaptados a tu mascota</span>
            </li>
          </ul>

          <a href="/VetPlus"
            class="inline-block px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 bg-gradient-to-r from-sky-600/30 to-sky-300 text-blue-900 rounded-lg hover:shadow-lg transition-all duration-300 text-sm sm:text-base lg:text-lg font-medium">
            Ver más
          </a>

        </div>
      </div>
    </div>
  </section>
</template>
<script setup></script>