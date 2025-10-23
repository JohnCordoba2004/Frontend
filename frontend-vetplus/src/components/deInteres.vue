<template>
  <section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
    <!-- Título -->
    <h2 class="text-xl sm:text-2xl lg:text-3xl font-bold text-sky-700 mb-6 sm:mb-8 flex items-center gap-2 sm:gap-3">
      <span class="text-2xl sm:text-3xl lg:text-4xl"><i class="fa-solid fa-star"></i></span>
      <span class="hidden sm:inline">De Interés...</span>
      <span class="sm:hidden">De Interés</span>
    </h2>

    <!-- Tabs -->
    <div class="flex flex-wrap border-b border-gray-300 mb-6 sm:mb-8 overflow-x-auto">
      <button v-for="tab in tabs" :key="tab.id" @click="activeTab = tab.id" :class="[
        'px-3 sm:px-4 lg:px-6 py-2 sm:py-3 font-semibold rounded-t-md transition-colors cursor-pointer whitespace-nowrap text-xs sm:text-sm lg:text-base',
        activeTab === tab.id
          ? 'bg-white border-x border-t border-gray-300 text-sky-600'
          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
      ]">
        {{ tab.label }}
      </button>
    </div>

    <!-- Contenido -->
    <div class="bg-white p-4 sm:p-6 lg:p-8 rounded-b-md shadow-lg">
      <div v-if="activeTab === 'vetplus'" class="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8">
        <img src="https://res.cloudinary.com/diro0cqpe/image/upload/v1759885003/porq-V_u8cq1u.jpg" alt="VetPlus"
          class="w-full lg:w-1/3 h-48 sm:h-56 lg:h-64 object-cover rounded-lg shadow-md" />
        <div class="flex-1">
          <h3 class="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 text-gray-800 text-balance leading-tight">
            Una eventualidad médica puede llegar en cualquier momento y sin aviso
          </h3>
          <p class="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed mb-4 sm:mb-6 text-balance">
            VetPlus® es sin lugar a dudas la mejor opción en medicina prepagada veterinaria. Siempre estaremos ahí para
            acompañarte. Cubrimiento, Flexibilidad, Calidad, Precio y muchos más beneficios.
          </p>
          <a href="/porQueVetplus"
            class="inline-block bg-sky-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-sky-700 transition-colors duration-300 text-sm sm:text-base font-medium">
            Más... +
          </a>
        </div>
      </div>

      <div v-if="activeTab === 'urgencias'" class="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8">
        <img src="https://res.cloudinary.com/diro0cqpe/image/upload/v1759885003/tab-urgencias_u8a38g.jpg"
          alt="Urgencias" class="w-full lg:w-1/3 h-48 sm:h-56 lg:h-64 object-cover rounded-lg shadow-md" />
        <div class="flex-1">
          <h3 class="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 text-gray-800 text-balance leading-tight">
            Tengo una emergencia con mi mascota.
          </h3>
          <p class="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed mb-4 sm:mb-6 text-balance">
            Tengo una emergencia con mi mascota, ¿qué debo hacer? Aquí, toda la información que debes saber en caso de
            tener una urgencia con tu mascota.
          </p>
          <a href="/emergenciaMascota"
            class="inline-block bg-sky-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-sky-700 transition-colors duration-300 text-sm sm:text-base font-medium">
            Más... +
          </a>
        </div>
      </div>

      <div v-if="activeTab === 'pago'" class="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8">
        <img src="https://res.cloudinary.com/diro0cqpe/image/upload/v1759885003/tab-pagos_xzmb2p.jpg" alt="Pago"
          class="w-full lg:w-1/3 h-48 sm:h-56 lg:h-64 object-cover rounded-lg shadow-md" />
        <div class="flex-1">
          <h3 class="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 text-gray-800 text-balance leading-tight">
            Formas de pago
          </h3>
          <p class="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed mb-4 sm:mb-6 text-balance">
            Para hacer tu vida más fácil, VetPlus® te ofrece diversos canales de pago para las cuotas mensuales de
            afiliación.
          </p>
          <a href="/metodosDePago"
            class="inline-block bg-sky-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-sky-700 transition-colors duration-300 text-sm sm:text-base font-medium">
            Más... +
          </a>
        </div>
      </div>

      <div v-if="activeTab === 'referidos'" class="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8">
        <img src="https://res.cloudinary.com/diro0cqpe/image/upload/v1759885003/tab-referidos_gnjgkk.jpg"
          alt="Referidos" class="w-full lg:w-1/3 h-48 sm:h-56 lg:h-64 object-cover rounded-lg shadow-md" />
        <div class="flex-1">
          <h3 class="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 text-gray-800 text-balance leading-tight">
            Plan Referidos
          </h3>
          <p class="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed mb-4 sm:mb-6 text-balance">
            Para nosotros es muy importante que compartas tu experiencia con VetPlus® con tus amigos y familia. Por
            ello, hemos diseñado el Plan Referidos para recompensar tu contribución para ampliar nuestra familia de
            afiliados.
          </p>
          <a href="/planReferidos"
            class="inline-block bg-sky-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-sky-700 transition-colors duration-300 text-sm sm:text-base font-medium">
            Más... +
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const tabs = [
  { id: "vetplus", label: "¿Por qué VetPlus®?" },
  { id: "urgencias", label: "Urgencias" },
  { id: "pago", label: "Pago" },
  { id: "referidos", label: "Referidos" },
];

const activeTab = ref("vetplus");
</script>