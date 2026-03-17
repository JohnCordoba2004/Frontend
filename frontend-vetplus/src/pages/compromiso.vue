<template>
  <div class="bg-white py-12 lg:py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
      <div class="lg:col-span-8 flex flex-col">
        <h1 class="text-3xl lg:text-4xl text-sky-400 font-bold mb-8 border-b border-gray-100 pb-4">
          Nuestra Empresa
        </h1>
        <div class="section-compromiso">
          <h3 class="text-gray-700 text-lg lg:text-2xl mb-2 lg:mb-4">
            Nuestro compromiso es ofrecer a todas las mascotas total acceso a medicina veterinaria de calidad
          </h3>
          <p class="text-gray-800">
            <strong class="text-sky-600 text-lg">VetPlus®</strong>
            es una empresa colombiana, resultado del trabajo de un grupo
            interdisciplinario de emprendedores con experiencia en el sector de medicina veterinaria, que entendió la
            necesidad de los amantes de las mascotas de acceder a servicios veterinarios de alta calidad, en cualquier
            momento, sin esperar cuantiosas facturas.
          </p>
        </div>
        <div class="mt-5.5">
          <h3 class="text-gray-700 text-lg lg:text-2xl mb-2 lg:mb-4">
            ¿Cómo iniciamos?
          </h3>
          <div v-for="(parrafo, i) in comoInicamos" :key="i" class="flex items-center gap-4 mb-4 lg:mb-6 text-gray-800">
            <p class="text-gray-700 leading-relaxed pt-1 flex-1" v-html="formatearTexto(parrafo)"></p>
          </div>
        </div>
        <div class="mt-5.5">
          <h3 class="text-gray-700 text-lg lg:text-2xl mb-2 lg:mb-4">
            Nuestra evolución
          </h3>
          <div v-for="(parrafo, i) in nuestraEvo" :key="i" class="flex items-center gap-4 mb-4 lg:mb-6 text-gray-800">
            <p class="text-gray-700 leading-relaxed pt-1 flex-1" v-html="formatearTexto(parrafo)"></p>
          </div>
        </div>
        <span class="text-pretty font-bold text-gray-800 text-lg">
          Anímate a ser parte de VetPlus®! Obtén una cotización e inicia el camino hacia una medicina veterinaria de
          calidad para tu mascota.
        </span>
      </div>
      <!--aside  -->
      <div class="lg:col-span-4 space-y-8">
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
  </div>
  <FooterInfo />
  <Copyright />
</template>

<script setup>
import Copyright from '../components/copyright.vue';
import FooterInfo from '../components/footerInfo.vue';

const comoInicamos = [
  "En el año 2012 un grupo de profesionales ideó la primera versión de VetPlus, en un esfuerzo por renovar la forma en que nuestros perros y gatos recibían tratamientos médicos de urgencia. Fue así como en el año 2013 recibimos a nuestros afiliados pioneros, con el lanzamiento del primer modelo en planes de medicina prepagada: VetPlus® Oro y VetPlus® Platino.",
  "Fuimos pioneros en la identificación de nuestros afiliados con tecnología de microchip, así como en la introducción de bonos como compensación por los servicios médicos veterinarios, elemento exitosamente usado por la gran mayoría de instituciones prestadoras de medicina prepagada humana en nuestro país."
]

const nuestraEvo = [
  "Tras un exitoso inicio y una asombrosa acogida entre los amantes responsables  de mascotas, entendimos que nuestro crecimiento debería ir acompañado por una ampliación en nuestra red de prestadores de servicios, así como el refinamiento de la medicina preventiva en nuestras coberturas y la adición de novedosos tratamientos médicos para atender las cada vez más exigentes necesidades de nuestras mascotas afiliados.",
  "Así fue como en el año 2015 junto con un equipo de médicos veterinarios reinventamos el concepto de medicina prepagada y relanzamos VetPlus®, ofreciendo una gama de planes mucho más amplia y personalizable, que le permite a los dueños de mascotas elegir el paquete de servicios que mejor se acomode al perfil médico de sus mascotas, accediendo a la más alta tecnología en medicina veterinaria."
]

const formatearTexto = (texto) => {
  return texto.replace(/VetPlus®/g, '<span class="text-sky-600 font-bold">VetPlus®</span>')
}
</script>