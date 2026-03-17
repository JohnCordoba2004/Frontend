<template>
  <section class="py-4 px-4 lg:px-0 max-w-6xl mx-auto responsive-container">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">

      <div class="md:col-span-2">
        <div class="mb-10">
          <div class="py-4 md:py-8">
            <h1 class="text-2xl md:text-4xl mb-4 md:mb-6 font-bold">
              ¿Que es VetPlus?
            </h1>
            <p class="tracking-tight font-medium text-gray-700 leading-relaxed text-justify">
              VetPlus Medicina Prepagada le ofrece una gran variedad de planes para su perro o gato con excelentes
              coberturas para la atención de enfermedades, urgencias, accidentes y tratamientos médicos preventivos de
              rutina,
              que se ajustan a sus necesidades. Estos planes le permiten acceder a todos los servicios médicos de manera
              oportuna, a través de nuestra amplia red de clínicas y médicos en todo el país, con coberturas ilimitadas
              en la
              mayoría de los servicios.
            </p>
          </div>

          <div class="mt-4">
            <img src="https://res.cloudinary.com/diro0cqpe/image/upload/v1760044256/Info_que_es_Vetplus_obg5tb.png"
              alt="info vetplus" class="rounded-lg shadow-lg" />
          </div>
        </div>
      </div>

      <div class="col-span-1 space-y-8">
        <div class="bg-gray-100 rounded-2xl p-6 shadow-sm border-l-4 border-sky-500">
          <div class="flex items-center mb-4">
            <div class="w-10 h-10 bg-sky-500 rounded-full flex items-center justify-center mr-3 text-white shadow-md">
              <i class="fa-solid fa-location-dot text-lg"></i>
            </div>
            <h2 class="text-lg font-bold text-gray-800">Cobertura</h2>
          </div>
          <p class="text-gray-600 text-sm mb-4 leading-relaxed">
            La red de veterinarias a su servicio. Contamos con los mejores profesionales en todo el país.
          </p>
          <a href="/NuestraRed"
            class="inline-block bg-sky-400 text-white px-5 py-2 rounded-lg text-xs font-bold uppercase tracking-widest hover:bg-sky-500 transition-all shadow-sm">
            Listado Completo +
          </a>
        </div>

        <div class="bg-gray-100 rounded-2xl p-6 shadow-sm border-l-4 border-sky-500">
          <div class="flex items-center mb-4">
            <div class="w-10 h-10 bg-sky-500 rounded-full flex items-center justify-center mr-3 text-white shadow-md">
              <i class="fa-solid fa-paw text-lg"></i>
            </div>
            <h2 class="text-lg font-bold text-gray-800">Afíliate</h2>
          </div>
          <p class="text-gray-600 text-sm mb-4 leading-relaxed">
            Descubre la forma más fácil de cuidar a tu mascota con planes diseñados para ti.
          </p>
          <a href="/Afiliate"
            class="inline-block bg-sky-400 text-white px-5 py-2 rounded-lg text-xs font-bold uppercase tracking-widest hover:bg-sky-500 transition-all shadow-sm">
            Afíliate aquí +
          </a>
        </div>

      </div>

    </div>
  </section>

  <footerInfo />
  <Copyright />

</template>

<style scoped>
/* Ajuste extra por si el max-width se siente muy apretado en tablets */
@media (max-width: 1024px) {
  .responsive-container {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
}
</style>
<script setup>
import footerInfo from '../components/footerInfo.vue';
import Copyright from '../components/copyright.vue';

</script>