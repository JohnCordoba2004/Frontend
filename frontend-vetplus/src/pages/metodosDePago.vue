<template>
  <!-- Hero Section -->
  <section class="bg-gradient-to-br from-slate-50 to-white py-16 lg:py-24">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

        <!-- Contenido izquierdo -->
        <div class="lg:col-span-6">
          <p class="text-emerald-600 text-xs font-semibold tracking-widest uppercase mb-3">💳 Formas de pago</p>
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
            Métodos de <span class="text-emerald-600">pago</span>
          </h1>
          <p class="text-lg text-slate-600 leading-relaxed mb-8">
            Para hacer tu vida más fácil, PetSalud te ofrece diversos canales de pago para las cuotas mensuales de tu
            afiliación.
          </p>
          <div class="flex flex-col sm:flex-row gap-3">
            <a href="https://www.zonapagos.com/basica/" target="_blank"
              class="inline-flex items-center justify-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-2xl transition-all duration-200 shadow-md hover:shadow-lg group">
              Pagar en línea
              <span class="transition-transform duration-200 group-hover:translate-x-1">
                <i class="fa-solid fa-arrow-right"></i>
              </span>
            </a>
            <a href="tel:+573000000000"
              class="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-slate-300 text-slate-600 hover:border-slate-400 hover:bg-slate-50 font-semibold rounded-2xl transition-all duration-200">
              Llamar
              <span class="text-lg">📞</span>
            </a>
          </div>
        </div>

        <!-- Imagen derecha -->
        <div class="lg:col-span-6">
          <div class="rounded-3xl overflow-hidden shadow-xl border border-slate-100 bg-white p-2">
            <img src="https://res.cloudinary.com/diro0cqpe/image/upload/v1779247628/metodoPago2_wqktlq.png"
              alt="Métodos de Pago"
              class="w-full h-auto object-cover rounded-2xl transition-transform duration-700 hover:scale-105">
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Métodos Section -->
  <section class="bg-white py-20 lg:py-28">
    <div class="max-w-6xl mx-auto px-6 lg:px-8">
      <!-- Encabezado -->
      <div class="mb-16">
        <h2 class="text-4xl sm:text-5xl font-bold text-slate-900 leading-tight">
          Elige tu forma de <span class="text-sky-600">pago</span>
        </h2>
        <p class="text-lg text-slate-600 mt-4">Contamos con múltiples opciones para tu comodidad.</p>
      </div>

      <!-- Grid de métodos -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div v-for="(punto, index) in puntosPagos" :key="index"
          class="bg-gradient-to-br from-slate-50 to-white rounded-3xl p-8 border border-slate-100 hover:border-sky-200 hover:shadow-lg transition-all duration-300 group">

          <!-- Número -->
          <div
            class="w-12 h-12 bg-emerald-600 text-white rounded-2xl flex items-center justify-center font-bold text-xl mb-5 group-hover:bg-emerald-700 transition-colors">
            {{ String(index + 1).padStart(2, '0') }}
          </div>

          <!-- Contenido -->
          <h3 class="text-xl font-bold text-slate-900 mb-3">{{ punto.titulo }}</h3>
          <p class="text-slate-600 leading-relaxed text-sm">{{ punto.desc }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Contacto Section -->
  <section class="bg-gradient-to-r from-emerald-50 to-blue-50 py-16 lg:py-20">
    <div class="max-w-4xl mx-auto px-6 lg:px-8">
      <div class="bg-white rounded-3xl p-8 lg:p-10 border border-emerald-100 shadow-lg">
        <div class="flex flex-col md:flex-row gap-6 items-start md:items-center">
          <div class="text-4xl shrink-0">📞</div>
          <div class="flex-1">
            <h3 class="text-2xl font-bold text-slate-900 mb-3">¿Tienes preguntas sobre el pago?</h3>
            <p class="text-slate-600 leading-relaxed mb-4">
              Si tienes dudas sobre cómo pagar tu cuota o no estás seguro sobre tu saldo a la fecha, no dudes en
              comunicarte con nosotros.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 text-base font-semibold">
              <a href="tel:+573000000000" class="text-emerald-600 hover:text-emerald-700 flex items-center gap-2 group">
                <i class="fa-solid fa-phone"></i>
                (+57) 300 000 0000
              </a>
              <a href="mailto:facturacion@petsalud.demo"
                class="text-emerald-600 hover:text-emerald-700 flex items-center gap-2 group">
                <i class="fa-solid fa-envelope"></i>
                facturacion@petsalud.demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section class="bg-gradient-to-r from-emerald-600 to-emerald-700 py-16 lg:py-20">
    <div class="max-w-4xl mx-auto px-6 lg:px-8 text-center">
      <h2 class="text-3xl sm:text-4xl font-bold text-white mb-6">¿Aún no eres afiliado?</h2>
      <p class="text-emerald-100 text-lg mb-8 leading-relaxed">
        Elige el plan perfecto para tu mascota y comienza a disfrutar de nuestros beneficios.
      </p>
      <RouterLink to="/Afiliate"
        class="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-emerald-600 font-semibold rounded-2xl hover:bg-slate-50 transition-all duration-200 shadow-lg group">
        Afíliate ahora
        <span class="transition-transform duration-200 group-hover:translate-x-1">
          <i class="fa-solid fa-arrow-right"></i>
        </span>
      </RouterLink>
    </div>
  </section>

  <footerInfo />
</template>

<script setup>
import { useSEO } from '../composables/useSEO';
import footerInfo from '../components/footerInfo.vue';
import { RouterLink } from 'vue-router';

const { setPageSEO } = useSEO();

setPageSEO({
  title: 'Métodos de Pago | Formas de Pagar tu Afiliación',
  description: 'Conoce las diferentes formas de pago para tu afiliación a PetSalud. PSE, débito automático, tarjeta de crédito y planes anuales disponibles.',
  keywords: 'métodos de pago, formas de pago PetSalud, pago mensual, PSE, débito automático, tarjeta crédito',
  image: 'https://res.cloudinary.com/diro0cqpe/image/upload/v1779247628/metodoPago2_wqktlq.png'
});

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
