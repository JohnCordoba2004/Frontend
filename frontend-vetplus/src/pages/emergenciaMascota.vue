<template>
  <section class="bg-white py-12 lg:py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12
    gap-12 items-start">
      <div class="lg:col-span-8 flex flex-col">
        <h1 class="text-3xl lg:text-4xl text-sky-500 font-bold mb-8 border-b border-gray-100 pb-4">
          Tengo una emergencia con mi mascota
        </h1>
        <div class="space-y-6 mb-12">
          <div class="title mb-4">
            <h2 class="text-lg font-bold text-gray-700">¿Qué debo hacer?</h2>
          </div>

          <div
            class="bg-white p-auto sm:p-auto lg:p2 shadow-xl rounded-xl lg:rounded-2xl border border-gray-100 ml-6 lg:float-right">
            <img src="https://res.cloudinary.com/diro0cqpe/image/upload/v1769182868/clinicas3_vmqdrl.jpg"
              alt="Mascota VetPlus" class="rounded-xl max-w-full sm:w-1/2 lg:w-[350px] object-cover shadow-inner ">
          </div>
          <div v-for="(parrafo, index) in listaEmergencias" :key="index" class="flex items-start gap-4">
            <div
              class="flex-shrink-0 w-8 h-8 bg-sky-300 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-sm mt-1">
              {{ index + 1 }}
            </div>
            <p class="text-gray-700 leading-relaxed text-sm sm:text-pretty flex-1">
              {{ parrafo }}
            </p>
          </div>
          <p class="text-pretty text-gray-600 font-bold text-lg">
            Si tiene alguna duda o necesita ayuda,
            <br>
            no dude en comunicarse a nuestra línea de atención ((571)5556999),
            <br>
            las 24 horas del día, los 7 días de la semana.
          </p>
        </div>

      </div>

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
  </section>
  <footerInfo />
  <copyright />
</template>

<script setup>
import footerInfo from '../components/footerInfo.vue';
import copyright from '../components/copyright.vue';
import { useHead } from '@unhead/vue';

useHead({
  title: '¿Qué hacer en una Emergencia?',
  meta: [
    // Descripción normal para Google
    { name: 'description', content: 'Guía de acción rápida ante emergencias veterinarias. Encuentra clínicas 24/7 y pasos a seguir para salvar la vida de tu mascota.' },

    // Configuración para WhatsApp / Redes Sociales
    { property: 'og:title', content: 'VetPlus | Medicina Prepagada' },
    { property: 'og:description', content: 'Conoce nuestros planes y red de veterinarios.' },
    { property: 'og:image', content: 'https://res.cloudinary.com/diro0cqpe/image/upload/v1759885003/tab-urgencias_u8a38g.jpg' },
    { property: 'og:type', content: 'website' }
  ]
})

const listaEmergencias = [
  "Consulte nuestra red de veterinarios y seleccione el médico de su preferencia. Si tiene dudas o no sabe a dónde llevarlo, llámenos a nuestra línea de atención ((571) 5556999) y con gusto le asesoramos. No olvide llevar el carné de afiliación y cualquier documentación que pueda ser de ayuda para el médico, como resultados de exámenes previos y carné de vacunas.",
  "Su médico se comunicará con VetPlus® y solicitará las aprobaciones necesarias, de acuerdo con su plan actual.",
  "El médico veterinario valorará su mascota y de ser necesario le realizará los procedimientos de urgencia; le sugerirá los próximos pasos como exámenes, procedimientos complementarios, medicamentos, entre otros.",
  "Una vez recibidas las autorizaciones por parte de VetPlus, deberá cancelar a su médico el número de bonos indicados, de acuerdo con su plan, si tiene duda acerca de este monto, puede llamarnos en ese mismo instante y confirmaremos la información proporcionada por su médico."
]
</script>