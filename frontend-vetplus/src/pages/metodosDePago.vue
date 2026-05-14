<template>
  <section class="bg-white py-12 lg:py-20">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">

        <!-- Columna izquierda - Contenido principal -->
        <div class="lg:col-span-8">
          <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-10">
            Métodos de pago
          </h1>

          <div class="space-y-10 mb-12">
            <!-- Imagen flotante a la derecha -->
            <div class="float-right ml-8 mb-8 w-full max-w-xs lg:max-w-sm">
              <div class="bg-white p-3 shadow-2xl rounded-3xl border border-gray-100">
                <img 
                  src="https://res.cloudinary.com/diro0cqpe/image/upload/v1759885003/tab-pagos_xzmb2p.jpg"
                  alt="Métodos de pago"
                  class="rounded-2xl w-full object-cover shadow-inner"
                >
              </div>
            </div>

            <p class="text-gray-700 leading-relaxed text-base lg:text-lg">
              Para hacer tu vida más fácil, PetSalud te ofrece diversos canales de pago para las cuotas mensuales de tu afiliación:
            </p>

            <!-- Lista de métodos de pago -->
            <div class="space-y-8">
              <div v-for="(punto, index) in puntosPagos" :key="index" class="flex items-start gap-5">
                <div class="shrink-0 w-8 h-8 bg-sky-100 text-sky-600 rounded-2xl flex items-center justify-center font-bold text-xl mt-1">
                  {{ index + 1 }}
                </div>
                <div>
                  <strong class="text-gray-900 block mb-1">{{ punto.titulo }}</strong>
                  <p class="text-gray-600 leading-relaxed">{{ punto.desc }}</p>
                </div>
              </div>
            </div>

            <!-- Información de contacto -->
            <div class="mt-16 bg-sky-50 border border-sky-100 rounded-3xl p-8">
              <p class="text-gray-700 font-medium leading-relaxed">
                Si tienes dudas sobre cómo pagar tu cuota o no estás seguro sobre tu saldo a la fecha, 
                comunícate a nuestra línea de atención 
                <a href="tel:+573000000000" class="text-sky-600 font-semibold hover:underline">
                  (+57) 300 000 0000
                </a>
                o escríbenos un correo a 
                <a href="mailto:facturacion@petsalud.demo" 
                   class="text-sky-600 font-semibold hover:underline">
                  facturacion@petsalud.demo
                </a>
              </p>
            </div>

            <!-- Botón de pago en línea -->
            <div class="flex justify-center mt-12">
              <a href="https://www.zonapagos.com/basica/" target="_blank" 
                class="inline-block">
                <img 
                  src="https://res.cloudinary.com/diro0cqpe/image/upload/v1759885003/PAGOS-EN-LINEA_Short_ebyhtv.png"
                  alt="Pagos en línea"
                  class="max-w-full lg:max-w-[620px] hover:scale-105 transition-transform duration-300"
                >
              </a>
            </div>
          </div>
        </div>

        <!-- Columna derecha - Tarjetas -->
        <div class="lg:col-span-4 space-y-6 lg:sticky lg:top-8">
          <!-- Tarjeta Cobertura -->
          <div class="bg-white rounded-3xl p-7 shadow-sm border border-gray-100 hover:shadow-xl transition-all">
            <div class="flex items-center gap-4 mb-5">
              <div class="w-11 h-11 bg-sky-100 rounded-2xl flex items-center justify-center text-3xl">📍</div>
              <h3 class="text-xl font-semibold text-gray-900">Cobertura Nacional</h3>
            </div>
            <p class="text-gray-600 text-[15px] leading-relaxed mb-6">
              La red de veterinarias a su servicio. Contamos con los mejores profesionales en todo el país.
            </p>
            <a href="/NuestraRed" 
              class="inline-flex items-center gap-2 text-sky-600 font-medium hover:text-sky-700 transition-colors">
              Ver listado completo 
              <span class="text-lg">→</span>
            </a>
          </div>

          <!-- Tarjeta Afíliate -->
          <div class="bg-white rounded-3xl p-7 shadow-sm border border-gray-100 hover:shadow-xl transition-all">
            <div class="flex items-center gap-4 mb-5">
              <div class="w-11 h-11 bg-emerald-100 rounded-2xl flex items-center justify-center text-3xl">🐾</div>
              <h3 class="text-xl font-semibold text-gray-900">Afíliate Ahora</h3>
            </div>
            <p class="text-gray-600 text-[15px] leading-relaxed mb-6">
              Descubre la forma más fácil de cuidar a tu mascota con planes diseñados para ti.
            </p>
            <a href="/Afiliate" 
              class="inline-flex items-center gap-2 text-sky-600 font-medium hover:text-sky-700 transition-colors">
              Afíliate aquí 
              <span class="text-lg">→</span>
            </a>
          </div>
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

const puntosPagos = [
  {
    titulo: "Pago por internet (PSE)",
    desc: "A través de nuestra página web, ingresa al link Pagar mi factura. Desde allí podrás efectuar tu pago con tu tarjeta de crédito o desde tu cuenta bancaria, a través del portal PSE."
  },
  {
    titulo: "Débito automático",
    desc: "A través del registro de la afiliación en tu banco, puedes autorizar el pago a través del débito automático de tu cuenta bancaria ahorros o corriente."
  },
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
