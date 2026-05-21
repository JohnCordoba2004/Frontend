<template>
  <section class="bg-slate-50 py-20 sm:py-28 overflow-hidden">
    <div class="max-w-6xl mx-auto px-6 lg:px-8">

      <!-- Encabezado -->
      <div class="mb-12">
        <p class="text-sky-600 text-xs font-semibold tracking-widest uppercase mb-3">Información útil</p>
        <h2 class="text-4xl sm:text-5xl font-bold text-slate-900 leading-tight">
          De <span class="text-sky-600">Interés</span>
        </h2>
      </div>

      <!-- Layout: tabs verticales + contenido -->
      <div class="flex flex-col lg:flex-row gap-6 lg:gap-10">

        <!-- Tabs -->
        <div class="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-1 lg:pb-0 lg:w-60 shrink-0">
          <button v-for="tab in tabs" :key="tab.id" @click="activeTab = tab.id;" :class="[
            'flex items-center gap-3 px-4 py-3.5 rounded-2xl text-left whitespace-nowrap lg:whitespace-normal transition-all duration-200 text-sm font-medium w-auto lg:w-full shrink-0',
            activeTab === tab.id
              ? 'bg-sky-600 text-white shadow-md shadow-sky-200'
              : 'bg-white text-slate-400 hover:text-slate-800 border border-slate-200 hover:border-slate-400 hover:shadow-sm'
          ]">
            <span class="text-xl shrink-0">{{ tab.icon }}</span>
            <span class="hidden sm:inline">{{ tab.label }}</span>
          </button>
        </div>

        <!-- Panel -->
        <div class="flex-1 bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden min-h-100">
          <div v-for="tab in tabs" :key="tab.id">
            <div v-if="isActive(tab.id)" class="flex flex-col lg:flex-col h-full">

              <!-- Imagen -->
              <div class="lg:w-full shrink-0 overflow-hidden bg-white p-4 border-b border-slate-200 shadow-md">
                <img :src="tab.image" :alt="`${tab.label} - ${tab.title} - PetSalud medicina prepagada veterinaria`"
                  class="w-full h-20 lg:h-full object-cover transition-transform duration-700 hover:scale-105" />
              </div>

              <!-- Texto -->
              <div class="flex-1 flex flex-col justify-center p-8 lg:p-10">
                <span
                  class="inline-flex items-center gap-1.5 self-start mb-5 px-3 py-1 rounded-full bg-sky-50 text-sky-600 text-xs font-semibold tracking-wide">
                  {{ tab.icon }} {{ tab.label }}
                </span>
                <h3 class="text-2xl sm:text-4xl font-bold text-slate-800 leading-snug mb-4">
                  {{ tab.title }}
                </h3>
                <p class="text-slate-500 leading-relaxed mb-8 text-sm sm:text-base">
                  {{ tab.description }}
                </p>

                <a :href="tab.link"
                  class="inline-flex items-center gap-2 self-start px-5 py-3 bg-sky-600 hover:bg-sky-800 active:scale-95 text-white text-sm font-semibold rounded-2xl transition-all duration-200 shadow-sm shadow-sky-200 group">
                  {{ tab.cta }}
                  <span class="transition-transform duration-200 group-hover:translate-x-1">
                    <i class="fa-solid fa-arrow-right"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const tabs = [
  {
    id: 'petsalud',
    label: '¿Por qué PetSalud?',
    icon: '🐾',
    image: 'https://res.cloudinary.com/diro0cqpe/image/upload/v1779247627/porquePetSalud_b6kcnk.png',
    title: 'Una eventualidad médica puede llegar en cualquier momento y sin aviso',
    description: 'PetSalud es sin lugar a dudas la mejor opción en medicina prepagada veterinaria. Siempre estaremos ahí para acompañarte. Cobertura, flexibilidad, calidad, precio y muchos más beneficios.',
    link: '/porQuePetSalud',
    cta: 'Conocer más sobre PetSalud',
  },
  {
    id: 'urgencias',
    label: 'Urgencias',
    icon: '🚨',
    image: 'https://res.cloudinary.com/diro0cqpe/image/upload/v1779247628/urgencias_ypzs3r.png',
    title: 'Tengo una emergencia con mi mascota, ¿qué debo hacer?',
    description: 'Aquí encontrarás toda la información que necesitas en caso de tener una urgencia con tu mascota. Actúa rápido y correctamente.',
    link: '/emergenciaMascota',
    cta: 'Ver guía de emergencias',
  },
  {
    id: 'pago',
    label: 'Formas de Pago',
    icon: '💳',
    image: 'https://res.cloudinary.com/diro0cqpe/image/upload/v1779247628/metodoPago2_wqktlq.png',
    title: 'Formas de pago disponibles',
    description: 'Para hacer tu vida más fácil, PetSalud te ofrece diversos canales de pago para las cuotas mensuales de tu afiliación.',
    link: '/metodosDePago',
    cta: 'Ver métodos de pago',
  },
  {
    id: 'referidos',
    label: 'Plan Referidos',
    icon: '🎁',
    image: 'https://res.cloudinary.com/diro0cqpe/image/upload/v1779256942/planReferidos2_priqfw.png',
    title: 'Plan Referidos',
    description: 'Comparte tu experiencia con PetSalud y gana beneficios. Hemos diseñado este plan para recompensar tu contribución al crecer nuestra familia de afiliados.',
    link: '/planReferidos',
    cta: 'Conocer el Plan Referidos',
  },
]
const activeTab = ref('petsalud')

const isActive = (tabId) => activeTab.value === tabId
</script>