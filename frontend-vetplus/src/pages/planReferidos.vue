<template>
  <div class="bg-white py-12 lg:py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
      <div class="lg:col-span-8 flex flex-col">
        <h1 class="text-3xl lg:text-4xl text-sky-400 font-bold mb-8 border-b border-gray-100 pb-4">
          Plan referidos
        </h1>

        <div class="space-y-6 mb-12">
          <div
            class="bg-white p-auto sm:p-auto lg:p-2 shadow-xl rounded-xl lg:rounded-2xl border border-gray-100 sm:ml-2 ml-2 lg:ml-6 lg:float-right">
            <img src="https://res.cloudinary.com/diro0cqpe/image/upload/v1759885003/tab-referidos_gnjgkk.jpg"
              alt="PlanReferidos">
          </div>
          <p class="text-pretty mx-auto leading-relaxed">
            Para nosotros es muy importante que compartas tu experiencia con VetPlus® con tus amigos y familia. Por
            ello, hemos diseñado el Plan Referidos para recompensar tu contribución para ampliar nuestra familia de
            afiliados. Para obtener tu beneficio, debes realizar lo siguiente:
          </p>
          <div class="flex items-center gap-4" v-for="(refer, i) in puntosReferidos" :key="i">
            <div
              class="flex-shrink-0 w-8 h-8 bg-sky-300 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-sm mt-2">
              {{ i + 1 }}
            </div>
            <p class="text-gray-700 leading-relaxed text-sm sm:text-pretty flex-1">
              {{ refer }}
            </p>
          </div>
          <div v-for="(punto, i) in referidos" :key="i" class="flex items-start gap-3 ml-15">
            <span class="text-sky-500 font-bold text-xl leading-none">•</span>
            <p class="text-gray-700 text-sm lg:text-base">
              <strong class="text-gray-900">{{ punto.titulo }}: </strong>{{ punto.desc }}
            </p>
          </div>
          <p class="text-gray-800 text-lg font-bold">Con tu aporte, cada vez más mascotas disfrutarán de servicios
            médicos de calidad.
            Anímate!!</p>
        </div>
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
import { useHead } from '@unhead/vue'


useHead({
  title: 'Plan referidos',
  meta: [
    // Descripción normal para Google
    { name: 'description', content: 'VetPlus Medicina Prepagada ofrece planes con excelentes coberturas, servicios, clínicas veterinarias y beneficios adicionales que se ajustan a sus necesidades...' },

    // Configuración para WhatsApp / Redes Sociales
    { property: 'og:title', content: 'VetPlus | Medicina Prepagada' },
    { property: 'og:description', content: 'Conoce nuestros planes y red de veterinarios.' },
    { property: 'og:image', content: 'https://res.cloudinary.com/diro0cqpe/image/upload/v1761360294/planes-para-perros_r6zggu.png' },
    { property: 'og:type', content: 'website' }
  ]
})

const puntosReferidos = [
  "Envíanos los datos de contacto (nombre, teléfono y/o correo electrónico) de tu referido a referidos@vetpluscolombia.com",
  "Si tu referido se convierte en un afiliado a VetPlus® te entregaremos lo siguiente :"
]
const referidos = [
  {
    titulo: "Un referido",
    desc: "10% de descuento en próxima mensualidad."
  },
  {
    titulo: "Cinco referidos",
    desc: "1 mes de afiliación de cortesía."
  },
]
</script>