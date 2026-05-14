<template>
  <section class="bg-white py-16 sm:py-20">
    <div class="max-w-6xl mx-auto px-6 lg:px-8">

      <!-- Título -->
      <div class="flex items-center gap-3 mb-10">
        <span class="text-4xl">⭐</span>
        <h2 class="text-3xl sm:text-4xl font-bold text-gray-900">
          De Interés...
        </h2>
      </div>

      <!-- Tabs Mejorados -->
      <div class="flex border-b border-gray-200 mb-8 overflow-x-auto pb-1 scrollbar-hide">
        <button v-for="tab in tabs" :key="tab.id" @click="activeTab = tab.id" :class="[
          'px-6 py-4 font-medium text-sm sm:text-base whitespace-nowrap transition-all border-b-2 -mb-px',
          activeTab === tab.id
            ? 'border-sky-600 text-sky-600 font-semibold'
            : 'border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300'
        ]">
          {{ tab.label }}
        </button>
      </div>

      <!-- Contenido de los tabs -->
      <div class="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 sm:p-8 lg:p-10 min-h-[380px]">

        <!-- Tab: ¿Por qué PetSalud? -->
        <div v-if="activeTab === 'petsalud'" class="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          <img src="https://res.cloudinary.com/diro0cqpe/image/upload/v1759885003/porq-V_u8cq1u.jpg" alt="PetSalud"
            class="w-full lg:w-5/12 rounded-2xl shadow-md object-cover">
          <div class="flex-1">
            <h3 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-5 leading-tight">
              Una eventualidad médica puede llegar en cualquier momento y sin aviso
            </h3>
            <p class="text-gray-600 leading-relaxed mb-6">
              PetSalud es sin lugar a dudas la mejor opción en medicina prepagada veterinaria.
              Siempre estaremos ahí para acompañarte. Cobertura, Flexibilidad, Calidad, Precio y muchos más beneficios.
            </p>
            <a href="/porQuePetSalud"
              class="inline-flex items-center gap-2 px-6 py-3 bg-sky-600 hover:bg-sky-700 text-white rounded-2xl font-medium transition-all">
              Conocer más sobre PetSalud
              <span class="text-xl">→</span>
            </a>
          </div>
        </div>

        <!-- Tab: Urgencias -->
        <div v-if="activeTab === 'urgencias'" class="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          <img src="https://res.cloudinary.com/diro0cqpe/image/upload/v1759885003/tab-urgencias_u8a38g.jpg"
            alt="Urgencias" class="w-full lg:w-5/12 rounded-2xl shadow-md object-cover">
          <div class="flex-1">
            <h3 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-5 leading-tight">
              Tengo una emergencia con mi mascota, ¿qué debo hacer?
            </h3>
            <p class="text-gray-600 leading-relaxed mb-6">
              Aquí encontrarás toda la información que necesitas saber en caso de tener una urgencia con tu mascota.
              Actúa rápido y correctamente.
            </p>
            <a href="/emergenciaMascota"
              class="inline-flex items-center gap-2 px-6 py-3 bg-sky-600 hover:bg-sky-700 text-white rounded-2xl font-medium transition-all">
              Ver guía de emergencias
              <span class="text-xl">→</span>
            </a>
          </div>
        </div>

        <!-- Tab: Pago -->
        <div v-if="activeTab === 'pago'" class="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          <img src="https://res.cloudinary.com/diro0cqpe/image/upload/v1759885003/tab-pagos_xzmb2p.jpg"
            alt="Formas de pago" class="w-full lg:w-5/12 rounded-2xl shadow-md object-cover">
          <div class="flex-1">
            <h3 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-5 leading-tight">
              Formas de pago disponibles
            </h3>
            <p class="text-gray-600 leading-relaxed mb-6">
              Para hacer tu vida más fácil, PetSalud te ofrece diversos canales de pago para las cuotas mensuales de tu
              afiliación.
            </p>
            <a href="/metodosDePago"
              class="inline-flex items-center gap-2 px-6 py-3 bg-sky-600 hover:bg-sky-700 text-white rounded-2xl font-medium transition-all">
              Ver métodos de pago
              <span class="text-xl">→</span>
            </a>
          </div>
        </div>

        <!-- Tab: Referidos -->
        <div v-if="activeTab === 'referidos'" class="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          <img src="https://res.cloudinary.com/diro0cqpe/image/upload/v1759885003/tab-referidos_gnjgkk.jpg"
            alt="Plan Referidos" class="w-full lg:w-5/12 rounded-2xl shadow-md object-cover">
          <div class="flex-1">
            <h3 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-5 leading-tight">
              Plan Referidos
            </h3>
            <p class="text-gray-600 leading-relaxed mb-6">
              Comparte tu experiencia con PetSalud y gana beneficios.
              Hemos diseñado este plan para recompensar tu contribución al crecer nuestra familia de afiliados.
            </p>
            <a href="/planReferidos"
              class="inline-flex items-center gap-2 px-6 py-3 bg-sky-600 hover:bg-sky-700 text-white rounded-2xl font-medium transition-all">
              Conocer el Plan Referidos
              <span class="text-xl">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const tabs = [
  { id: "petsalud", label: "¿Por qué PetSalud?" },
  { id: "urgencias", label: "Urgencias" },
  { id: "pago", label: "Formas de Pago" },
  { id: "referidos", label: "Plan Referidos" },
];

const activeTab = ref("petsalud");
</script>