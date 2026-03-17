<template>
  <div class="main max-w-screen-xl mx-auto py-20">
    <!-- Grid -->
    <div class="benefits grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
      <div class="benefits__card bg-white shadow-lg shadow-gray-700 rounded-xl p-6 md:p-8 lg:p-10"
        v-for="benefits in Beneficios">
        <div class="border-b border-gray-100 mb-10">
          <h1 class="items-start text-lg lg:text-4xl text-gray-700 mt-4">RUNNING PAWS </h1>
        </div>
        <img :src="benefits.img" :alt="benefits.name" @error='manejarErrorImg(benefits)'>
        <div class="flex flex-col gap-4 items-start mb-10">
          <span class="text-gray-600 text-sm md:text-lg lg:text-sm font-bold mt-6">Dir: {{ benefits.direction }}</span>
          <span class="text-gray-600 text-sm md:text-lg lg:text-sm font-bold">Tel: {{ benefits.tel }}</span>
          <span class="text-gray-600 text-sm md:text-lg lg:text-sm font-bold">Web:
            <a :href="benefits.web" target="_blank" class="hover:underline font-bold">
              {{ benefits.web }}
            </a>
          </span>
          <span class="text-gray-600 text-sm md:text-lg lg:text-sm font-bold">{{ benefits.desc }}</span>
          <span class="text-gray-600 text-sm md:text-lg lg:text-sm font-bold">Contacto: {{ benefits.contact }}</span>
        </div>

        <RouterLink :to="'/beneficios/' + benefits.id"
          class="w-full px-2 py-1.5 sm:py-2 bg-sky-100 text-sky-400 text-center rounded-lg hover:bg-blue-700 transition-colors duration-300 text-sm sm:text-base font-medium ">
          Ver más
        </RouterLink>
      </div>
    </div>
  </div>
  <footerInfo />
  <copyright />
</template>

<script setup>
import { RouterLink } from 'vue-router';
import { useHead } from "@unhead/vue";
import footerInfo from '../components/footerInfo.vue';
import copyright from '../components/copyright.vue';

useHead({
  title: 'Beneficios',
  meta: [
    // Descripción normal para Google
    { name: 'description', content: 'Conoce los descuentos y ventajas exclusivas de VetPlus para afiliados.' },
    // Configuración para WhatsApp / Redes Sociales
    { property: 'og:title', content: 'VetPlus | Medicina Prepagada' },
    { property: 'og:description', content: 'Conoce nuestros planes y red de veterinarios.' },
    { property: 'og:image', content: 'https://res.cloudinary.com/diro0cqpe/image/upload/v1759885003/tab-urgencias_u8a38g.jpg' },
    { property: 'og:type', content: 'website' }
  ]
})

const Beneficios = [
  {
    id: 1,
    name: 'RUNNING PAWS',
    direction: 'Trv 59 B No. 128 A - 83',
    tel: 3186146763,
    web: 'https://www.runningpaws.biz',
    desc: '15% de descuento en planes de educación y adiestramiento canino',
    contact: 'Harold Penna',
    img: 'https://res.cloudinary.com/diro0cqpe/image/upload/v1773625013/RUNNING_PAWS_LOGO2_rem3yf.png',
    imgFull: 'https://res.cloudinary.com/diro0cqpe/image/upload/v1773604373/AlianzaVetplusRunningPaws2018_xffa1h.png',
  }
]


const manejarErrorImg = (item) => {
  item.img = 'https://res.cloudinary.com/diro0cqpe/image/upload/v1773625013/RUNNING_PAWS_LOGO2_rem3yf.png'
}
</script>