<template>
  <section class="bg-white py-12 lg:py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12
    gap-12 items-start">
      <div class="lg:col-span-8 flex flex-col">
        <h1 class="text-3xl lg:text-4xl text-sky-500 font-bold mb-8 border-b border-gray-100 pb-4">
          ¿Por qué VetPlus <span class="font-light text-gray-400">®</span>?
        </h1>
        <div class="space-y-6 mb-12">
          <div
            class="bg-white p-auto sm:p-auto lg:p-2 shadow-xl rounded-xl lg:rounded-2xl border border-gray-100 float-right ml-6">
            <img src="https://res.cloudinary.com/diro0cqpe/image/upload/v1759885003/porq-V_u8cq1u.jpg"
              alt="Mascota VetPlus" class="rounded-xl w-full object-cover shadow-inner">
          </div>
          <p v-for="(parrafo, i) in introText" :key="i"
            class="text-gray-700 leading-relaxed text-base lg:text-lg italic first-of-type:not-italic">
            {{ parrafo }}
          </p>
        </div>

        <div class="space-y-6">
          <div v-for="(punto, index) in puntosPorQue" :key="index" class="flex items-start gap-3">
            <span class="text-sky-500 font-bold text-xl leading-none">•</span>
            <p class="text-gray-700 text-sm lg:text-base">
              <strong class="text-gray-900">{{ punto.titulo }}:</strong> {{ punto.desc }}
            </p>
          </div>
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
  <Copyright />
</template>

<script setup>
import footerInfo from '../components/footerInfo.vue';
import Copyright from '../components/copyright.vue';
import { useHead } from '@unhead/vue'

useHead({
  title: '¿Por qué VetPlus®?',
  meta: [
    // Descripción normal para Google
    { name: 'description', content: 'VetPlus Medicina Prepagada ofrece planes con excelentes coberturas, servicios, clínicas veterinarias y beneficios adicionales que se ajustan a sus necesidades...' },

    // Configuración para WhatsApp / Redes Sociales
    { property: 'og:title', content: 'VetPlus | Medicina Prepagada' },
    { property: 'og:description', content: 'Conoce nuestros planes y red de veterinarios.' },
    { property: 'og:image', content: 'https://res.cloudinary.com/diro0cqpe/image/upload/v1759885003/porq-V_u8cq1u.jpg' },
    { property: 'og:type', content: 'website' }
  ]
})

const introText = [
  'El cuidado médico de nuestras mascotas no debe ser motivo de preocupación.',
  'Entendemos lo difícil que puede ser enfrentarse a situaciones como: ¿Cuánto me costará este tratamiento de urgencia? o ¿Será necesario practicarle ese costoso procedimiento médico a mi mascota?',
  'Desafortunadamente, igual que con nosotros, una eventualidad médica puede llegar en cualquier momento para su mascota.',
  'VetPlus® está diseñado para acompañarlo en esos momentos, cubriéndolo de grandes facturas inesperadas y garantizándole un completo servicio médico cuándo su mejor amigo más lo necesita.',
  'VetPlus® es sin lugar a dudas la mejor opción en medicina prepagada veterinaria. Usted se preguntará entones: ¿Por qué VetPlus®?'
];

const puntosPorQue = [
  {
    titulo: "Por su cubrimiento",
    desc: "Vetplus® cuenta con planes de amplia cobertura en servicios médicos veterinarios, dándole la tranquilidad de que su mascota recibirá la más completa atención en los momentos difíciles."
  },
  {
    titulo: "Por su flexibilidad",
    desc: "La amplia gama de planes que ofrecemos se adaptan a sus necesidades y presupuesto. Desde planes básicos de cobertura en medicina preventiva hasta planes con coberturas en cualquier evento de urgencia, con VetPlus® usted cuenta con la flexibilidad de escoger su nivel de cobertura preferido."
  },
  {
    titulo: "Por su precio",
    desc: "Afiliándose a VetPlus su mascota tendrá acceso a servicios médicos especializados al alcance de su bolsillo. Con una pequeña cuota mensual, usted tendrá la tranquilidad de estar cubierto ante esas emergencias médicas que podrían costarle una fortuna."
  },
  {
    titulo: "Por la calidad",
    desc: "La amplia red de médicos veterinarios ha sido configurada para ofrecerle los mejores servicios médicos disponibles en nuestro país."
  },
  {
    titulo: "Por sus beneficios",
    desc: "No tiene que esperar a una emergencia médica para recibir atención y acompañamiento, VetPlus ofrece a todos sus afiliados un gran portafolio de beneficios adicionales."
  },
  {
    titulo: "Por el respaldo",
    desc: "VetPlus® es el resultado del trabajo de profesionales con amplia experiencia en el sector de medicina veterinaria y jóvenes emprendedores con ideas innovadoras."
  }
];
</script>