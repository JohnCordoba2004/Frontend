<template>
  <section class="bg-white py-16 lg:py-24">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">

        <!-- Columna izquierda - Contenido principal -->
        <div class="lg:col-span-8">
          <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-10">
            Nuestra Empresa
          </h1>

          <!-- Nuestro compromiso -->
          <div class="mb-12">
            <h2 class="text-2xl font-semibold text-gray-800 mb-4">Nuestro compromiso</h2>
            <p class="text-gray-700 leading-relaxed text-[15.5px] lg:text-base">
              Nuestro compromiso es ofrecer a todas las mascotas total acceso a medicina veterinaria de calidad.
            </p>
          </div>

          <!-- Cómo iniciamos -->
          <div class="mb-12">
            <h2 class="text-2xl font-semibold text-gray-800 mb-5">¿Cómo iniciamos?</h2>
            <div v-for="(parrafo, i) in comoInicamos" :key="i"
              class="mb-8 text-gray-700 leading-relaxed text-[15.5px] lg:text-base">
              {{ parrafo }}
            </div>
          </div>

          <!-- Nuestra evolución -->
          <div class="mb-12">
            <h2 class="text-2xl font-semibold text-gray-800 mb-5">Nuestra evolución</h2>
            <div v-for="(parrafo, i) in nuestraEvo" :key="i"
              class="mb-8 text-gray-700 leading-relaxed text-[15.5px] lg:text-base">
              {{ parrafo }}
            </div>
          </div>

          <!-- Llamada final -->
          <p class="text-gray-800 text-lg font-bold leading-relaxed pt-6">
            Anímate a ser parte de PetSalud! Obtén una cotización e inicia el camino hacia una medicina veterinaria de
            calidad para tu mascota.
          </p>
        </div>

        <!-- Columna derecha - Tarjetas -->
        <div class="lg:col-span-4 space-y-6 lg:sticky lg:top-8">

          <!-- Tarjeta Cobertura -->
          <div
            class="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div class="flex items-center gap-4 mb-6">
              <div class="w-12 h-12 bg-sky-100 rounded-2xl flex items-center justify-center text-3xl">📍</div>
              <h3 class="text-2xl font-semibold text-gray-900">Cobertura Nacional</h3>
            </div>
            <p class="text-gray-600 leading-relaxed mb-6">
              La red de veterinarias a su servicio. Contamos con los mejores profesionales en todo el país.
            </p>
            <a href="/NuestraRed"
              class="inline-flex items-center gap-2 text-sky-600 font-medium hover:text-sky-700 transition-all">
              Ver listado completo
              <span class="text-xl">→</span>
            </a>
          </div>

          <!-- Tarjeta Afíliate -->
          <div
            class="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div class="flex items-center gap-4 mb-6">
              <div class="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center text-3xl">🐾</div>
              <h3 class="text-2xl font-semibold text-gray-900">Afíliate Ahora</h3>
            </div>
            <p class="text-gray-600 leading-relaxed mb-6">
              Descubre la forma más fácil de cuidar a tu mascota con planes diseñados para ti.
            </p>
            <a href="/Afiliate"
              class="inline-flex items-center gap-2 text-sky-600 font-medium hover:text-sky-700 transition-all">
              Afíliate aquí
              <span class="text-xl">→</span>
            </a>
          </div>

        </div>

      </div>
    </div>
  </section>

  <FooterInfo />
  <Copyright />
</template>

<script setup>
import FooterInfo from '../components/footerInfo.vue';
import Copyright from '../components/copyright.vue';

const comoInicamos = [
  "En el año 2012 un grupo de profesionales ideó la primera versión de PetSalud, en un esfuerzo por renovar la forma en que nuestros perros y gatos recibían tratamientos médicos de urgencia. Fue así como en el año 2013 recibimos a nuestros afiliados pioneros, con el lanzamiento del primer modelo en planes de medicina prepagada: PetSalud Oro y PetSalud Platino.",
  "Fuimos pioneros en la identificación de nuestros afiliados con tecnología de microchip, así como en la introducción de bonos como compensación por los servicios médicos veterinarios, elemento exitosamente usado por la gran mayoría de instituciones prestadoras de medicina prepagada humana en nuestro país."
]

const nuestraEvo = [
  "Tras un exitoso inicio y una asombrosa acogida entre los amantes responsables de mascotas, entendimos que nuestro crecimiento debería ir acompañado por una ampliación en nuestra red de prestadores de servicios, así como el refinamiento de la medicina preventiva en nuestras coberturas y la adición de novedosos tratamientos médicos para atender las cada vez más exigentes necesidades de nuestras mascotas afiliados.",
  "Así fue como en el año 2015 junto con un equipo de médicos veterinarios reinventamos el concepto de medicina prepagada y relanzamos PetSalud, ofreciendo una gama de planes mucho más amplia y personalizable, que le permite a los dueños de mascotas elegir el paquete de servicios que mejor se acomode al perfil médico de sus mascotas, accediendo a la más alta tecnología en medicina veterinaria."
]
</script>