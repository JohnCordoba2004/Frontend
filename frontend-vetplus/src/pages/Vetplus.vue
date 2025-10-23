<template>
  <section class="py-4 px-0 max-w-6xl ml-40">
    <div class="grid grid-cols-3 gap-8">
      <!-- Main Content Area (Left - 2 columns) -->
      <div class="col-span-2">
        <div class="mb-10">
          <div class="px-4 py-8">
            <h1 class="text-2xl md:text-4xl mb-8 font-bold border-b border-b-gray-200 shadow-lg">
              Que es VetPlus?
            </h1>
            <p class="tracking-tighter font-semibold text-sm">
              VetPlus Medicina Prepagada le ofrece una gran variedad de planes para su perro o gato con excelentes
              coberturas
              para la atención de enfermedades, urgencias, accidentes y tratamientos médicos preventivos de rutina, que
              se
              ajustan a sus necesidades. Estos planes le permiten acceder a todos los servicios médicos de manera
              oportuna,
              a
              través de nuestra amplia red de clínicas y médicos en todo el país, con coberturas ilimitadas en la
              mayoría de
              los servicios.
            </p>
          </div>
          <img src="https://res.cloudinary.com/diro0cqpe/image/upload/v1760044256/Info_que_es_Vetplus_obg5tb.png"
            alt="info vetplus" />
        </div>
      </div>

      <!-- Sidebar (Right - 1 column) -->
      <div class="col-span-1 space-y-6">
        <!-- Cobertura Box -->
        <div class="bg-gray-200 rounded-lg p-6">
          <div class="flex items-center mb-4">
            <div class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
              <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
            </div>
            <h2 class="text-lg font-bold">Cobertura</h2>
          </div>
          <p class="text-sm mb-4">
            La red de veterinarias a su servicio...
          </p>
          <a href="/NuestraRed"
            class="bg-blue-300 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-400 transition-colors">
            Listado Completo +
          </a>
        </div>

        <!-- Afiliate Box -->
        <div class="bg-gray-200 rounded-lg p-6">
          <div class="flex items-center mb-4">
            <div class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
              <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z" />
              </svg>
            </div>
            <h2 class="text-lg font-bold">Afiliate</h2>
          </div>
          <p class="text-sm mb-4">
            Descubre la forma más fácil de cuidar a tu mascota...
          </p>
          <a href="/Afiliate"
            class="bg-blue-300 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-400 transition-colors">
            Afiliate aquí +
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- Footer info component -->
  <footerInfo />

  <!-- De Interés Component -->
  <copy />
</template>
<script setup>
import copyright from '../components/copyright.vue';
import footerInfo from '../components/footerInfo.vue';
</script>