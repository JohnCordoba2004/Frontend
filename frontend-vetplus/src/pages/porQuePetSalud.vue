<template>
  <!-- Hero Section -->
  <section class="bg-gradient-to-br from-slate-50 to-white py-16 lg:py-24">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

        <!-- Contenido izquierdo -->
        <div class="lg:col-span-6">
          <p class="text-sky-600 text-xs font-semibold tracking-widest uppercase mb-3">¿Por qué elegirnos?</p>
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
            ¿Por qué <span class="text-sky-600">PetSalud</span> <span class="font-light">®</span>?
          </h1>
          <p class="text-lg text-slate-600 leading-relaxed mb-8">
            Una eventualidad médica puede llegar en cualquier momento. PetSalud es sin lugar a dudas la mejor opción en
            medicina prepagada veterinaria.
          </p>
          <RouterLink href="/Afiliate"
            class="inline-flex items-center gap-2 px-6 py-3.5 bg-sky-600 hover:bg-sky-700 text-white text-sm font-semibold rounded-2xl transition-all duration-200 shadow-md shadow-sky-200 group">
            Afíliate ahora
            <span class="transition-transform duration-200 group-hover:translate-x-1">
              <i class="fa-solid fa-arrow-right"></i>
            </span>
          </RouterLink>
        </div>

        <!-- Imagen derecha -->
        <div class="lg:col-span-6">
          <div class="rounded-3xl overflow-hidden shadow-xl border border-slate-100 bg-white p-2">
            <img src="https://res.cloudinary.com/diro0cqpe/image/upload/v1779247627/porquePetSalud_b6kcnk.png"
              alt="¿Por qué PetSalud?"
              class="w-full h-auto object-cover rounded-2xl transition-transform duration-700 hover:scale-105">
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Razones Section -->
  <section class="bg-white py-20 lg:py-28">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <!-- Encabezado -->
      <div class="mb-16">
        <h2 class="text-4xl sm:text-5xl font-bold text-slate-900 leading-tight">
          Seis razones para <span class="text-sky-600">confiar en nosotros</span>
        </h2>
      </div>

      <!-- Grid de razones -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="(punto, index) in puntosPorQue" :key="index"
          class="bg-gradient-to-br from-slate-50 to-white rounded-3xl p-8 border border-slate-100 hover:border-sky-200 hover:shadow-lg transition-all duration-300 group">

          <!-- Número -->
          <div
            class="w-12 h-12 bg-sky-600 text-white rounded-2xl flex items-center justify-center font-bold text-xl mb-5 group-hover:bg-sky-700 transition-colors">
            {{ String(index + 1).padStart(2, '0') }}
          </div>

          <!-- Contenido -->
          <h3 class="text-xl font-bold text-slate-900 mb-3">{{ punto.titulo }}</h3>
          <p class="text-slate-600 leading-relaxed text-sm">{{ punto.desc }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section class="bg-gradient-to-r from-sky-600 to-sky-700 py-16 lg:py-20">
    <div class="max-w-4xl mx-auto px-6 lg:px-8 text-center">
      <h2 class="text-3xl sm:text-4xl font-bold text-white mb-6">¿Listo para cuidar a tu mascota?</h2>
      <p class="text-sky-100 text-lg mb-8 leading-relaxed">
        Descubre nuestros planes flexibles y diseñados para tu presupuesto. Tu mascota merece lo mejor.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <RouterLink to="/Afiliate"
          class="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-sky-600 font-semibold rounded-2xl hover:bg-slate-50 transition-all duration-200 shadow-lg group">
          Explorar planes
          <span class="transition-transform duration-200 group-hover:translate-x-1">
            <i class="fa-solid fa-arrow-right"></i>
          </span>
        </RouterLink>
        <RouterLink to="/NuestraRed"
          class="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white font-semibold rounded-2xl hover:bg-white hover:bg-opacity-10 transition-all duration-200 group">
          Ver red de veterinarias
          <span class="transition-transform duration-200 group-hover:translate-x-1">
            <i class="fa-solid fa-arrow-right"></i>
          </span>
        </RouterLink>
      </div>
    </div>
  </section>

  <footerInfo />
  <!-- <Copyright /> -->
</template>

<script setup>
import { useSEO } from '../composables/useSEO';
import footerInfo from '../components/footerInfo.vue';
import Copyright from '../components/copyright.vue';
import { RouterLink } from 'vue-router';

const { setPageSEO } = useSEO();

setPageSEO({
  title: '¿Por qué PetSalud? | Razones para Elegirnos',
  description: 'Descubre las 6 razones por las que PetSalud es la mejor medicina prepagada veterinaria en Colombia. Cobertura, flexibilidad, precio y calidad.',
  keywords: 'por qué PetSalud, medicina prepagada veterinaria, planes para mascotas, PetSalud Colombia',
  image: 'https://res.cloudinary.com/diro0cqpe/image/upload/v1779247627/porquePetSalud_b6kcnk.png'
});

const puntosPorQue = [
  {
    titulo: "Por su cubrimiento",
    desc: "PetSalud cuenta con planes de amplia cobertura en servicios médicos veterinarios, dándole la tranquilidad de que su mascota recibirá la más completa atención."
  },
  {
    titulo: "Por su flexibilidad",
    desc: "Amplia gama de planes que se adaptan a sus necesidades y presupuesto. Desde medicina preventiva hasta coberturas en urgencias."
  },
  {
    titulo: "Por su precio",
    desc: "Servicios médicos especializados al alcance de tu bolsillo. Con una pequeña cuota mensual, estarás cubierto ante emergencias."
  },
  {
    titulo: "Por la calidad",
    desc: "Amplia red de médicos veterinarios configurada para ofrecerle los mejores servicios médicos disponibles en el país."
  },
  {
    titulo: "Por sus beneficios",
    desc: "No solo urgencias. PetSalud ofrece a todos sus afiliados un gran portafolio de beneficios adicionales y servicios especiales."
  },
  {
    titulo: "Por el respaldo",
    desc: "PetSalud es resultado del trabajo de profesionales con amplia experiencia y jóvenes emprendedores con ideas innovadoras."
  }
];
</script>