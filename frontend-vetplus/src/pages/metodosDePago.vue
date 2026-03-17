<template>
  <section class="bg-white py-12 lg:py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12
    gap-12 items-start">
      <div class="lg:col-span-8 flex flex-col">
        <h1 class="text-3xl lg:text-4xl text-sky-400 font-bold mb-8 border-b border-gray-100 pb-4">
          Métodos de pago
        </h1>

        <div class="space-y-6 mb-12">
          <div class="bg-white p-auto sm:p-auto lg:p-2 shadow-xl rounded-xl lg:rounded-2xl border border-gray-100 ml-2
            lg:ml-6 sm:ml-2 lg:float-right">
            <img src="https://res.cloudinary.com/diro0cqpe/image/upload/v1759885003/tab-pagos_xzmb2p.jpg"
              alt="metodo-pago" class="rounded-xl max-w-full sm:w-1/2 lg:w-[350px] object-cover shadow-inner">
          </div>
          <p class="text-gray-500 font-bold">
            Para hacer tu vida más fácil, VetPlus® te ofrece diversos canales de pago para las cuotas mensuales de
            afiliación:
            Ver más
          </p>
          <div class="flex items-start gap-3" v-for="(punto, i) in puntosPagos" :key="i">
            <span class="text-sky-500 font-bold text-xl leading-none">•</span>
            <p class="text-gray-700 text-sm lg:text-base">
              <strong class="text-gray-900">{{ punto.titulo }}:</strong>{{ punto.desc }}
            </p>
          </div>
          <p class="text-gray-500 font-thin ">
            Si tienes dudas sobre cómo pagar tu cuota o no estás seguro sobre tu saldo a la fecha, comunícate a nuestra
            línea de atención
            <a href="tel:+57 310 7850994" class="text-sky-400 font-bold">
              (+57) 310 7850994
            </a>
            o escríbenos un correo a
            <a href="mailto:facturacion@vetpluscolombia.com?subject=Emergencia%20Mascota&body=Hola,%20necesito%20asistencia..."
              class="text-sky-400 font-bold">
              facturacion@vetpluscolombia.com
            </a>
          </p>
          <div class="flex items-center justify-center mt-20 w-full">
            <a href="https://www.zonapagos.com/basica/" target="_blank">
              <img src="https://res.cloudinary.com/diro0cqpe/image/upload/v1759885003/PAGOS-EN-LINEA_Short_ebyhtv.png"
                alt="PagosEnLinea" class="lg:w-[600px] w-full">
            </a>
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
  <copyright />
</template>

<script setup>
import footerInfo from '../components/footerInfo.vue';
import copyright from '../components/copyright.vue';
import { useHead } from '@unhead/vue'

useHead({
  title: 'Métodos de pago',
  meta: [
    // Descripción normal para Google
    { name: 'description', content: 'VetPlus Medicina Prepagada ofrece planes con excelentes coberturas, servicios, clínicas veterinarias y beneficios adicionales que se ajustan a sus necesidades...' },

    // Configuración para WhatsApp / Redes Sociales
    { property: 'og:title', content: 'VetPlus | Medicina Prepagada' },
    { property: 'og:description', content: 'Conoce nuestros planes y red de veterinarios.' },
    { property: 'og:image', content: 'https://res.cloudinary.com/diro0cqpe/image/upload/v1759885003/tab-pagos_xzmb2p.jpg' },
    { property: 'og:type', content: 'website' }
  ]
})
const puntosPagos = [
  {
    titulo: "Pago por internet (PSE)",
    desc: "A través de nuestra página web, ingresa al link Pagar mi factura. Desde allí podrás efectuar tu pago con tu tarjeta de crédito o desde tu cuenta bancaria, a través del portal PSE.  "
  },
  {
    titulo: "Débito automático",
    desc: "A través del registro de la afiliación en tu banco, puedes autorizar el pago a través del débito automático de tu cuenta bancaria ahorros o corriente."
  }
  ,
  {
    titulo: "Cargo a tarjeta de crédito",
    desc: "En el momento de la afiliación, puedes autorizar el cargo mensual a tu tarjeta de crédito."
  },
  {
    titulo: "Pago anual",
    desc: "Puedes realizar tu pago anual y recibe un descuento en la totalidad de tu plan."
  }
]
</script>