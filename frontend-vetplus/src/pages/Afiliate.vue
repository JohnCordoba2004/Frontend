<script setup>
import { ref } from 'vue';
import { useMascotaStore } from '../stores/mascotasStore'

/* Imports Steps */
import StepMascota from '../components/StepMascota.vue';
import StepPlanes from '../components/StepPlanes.vue';
import StepResumen from '../components/StepResumen.vue';
import StepFinal from '../components/StepFinal.vue';

/* Import components */
import MedicinaPreventiva from "../components/MedicinaPreventiva.vue"
// import Copyright from "../components/copyright.vue"
import footerInfo from '../components/footerInfo.vue';

// Control del paso actual
const store = useMascotaStore();
const currentStep = ref(1);

const steps = [
  { number: 1, label: "MASCOTA" },
  { number: 2, label: "PLAN" },
  { number: 3, label: "RESUMEN" },
  { number: 4, label: "FINAL" },
];

// Función para avanzar
const nextStep = () => {
  currentStep.value++;
  window.scrollTo(0, 0);
};

const prevStep = () => {
  currentStep.value--;
  window.scrollTo(0, 0)
}
</script>

<template>
  <div class="bg-gray-50 flex items-start justify-start p-4 mb-4">

    <div :class="[
      'max-w-7xl bg-white rounded-4xl mx-auto shadow-2xl p-4 overflow-hidden flex flex-col transition-all duration-500',
      currentStep === 1 ? 'max-w-6xl' : currentStep === 3 ? 'max-w-3xl' : currentStep === 4 ? 'max-w-5xl' : 'max-w-2xl'
    ]">

      <!-- ==================== STEPPER MEJORADO ==================== -->
      <!-- STEPPER SUPERIOR -->
      <div class="px-8 pt-8 pb-6 ">
        <div class="flex items-center justify-between max-w-2xl mx-auto">
          <div v-for="(step, index) in steps" :key="step.number" class="flex flex-col items-center flex-1 relative">
            <div
              class="w-10 h-10 rounded-2xl flex items-center justify-center text-base font-bold transition-all border-2 z-10"
              :class="[
                currentStep >= step.number
                  ? 'bg-sky-600 border-sky-600 text-white shadow-md'
                  : 'bg-white border-gray-300 text-gray-400'
              ]">
              <span v-if="currentStep > step.number">✓</span>
              <span v-else>{{ step.number }}</span>
            </div>

            <div v-if="index < steps.length - 1"
              class="absolute top-5 left-[50%] w-full h-0.5 bg-gray-200 -translate-y-1/2"
              :class="{ 'bg-sky-600': currentStep > step.number }" />

            <span class="text-xs font-bold tracking-widest mt-3 uppercase"
              :class="currentStep >= step.number ? 'text-sky-600' : 'text-gray-400'">
              {{ step.label }}
            </span>
          </div>
        </div>
      </div>
      <!-- ======================================================== -->

      <div :class="[
        'grid grow',
        currentStep === 1 ? 'grid-cols-1 lg:grid-cols-2' : 'grid-cols-1'
      ]">
        <div v-if="currentStep === 1" class="hidden lg:flex items-stretch justify-center relative p-10">
          <img
            src="https://res.cloudinary.com/diro0cqpe/image/upload/q_auto/f_auto/v1776190583/a-veterinarian-with-fair-skin-and-short-brown-hair_14.04.2026_yqmz5z.webp"
            alt="veterinario" class="w-full h-full object-cover rounded-3xl shadow-sm" />
        </div>

        <div class="steps">
          <StepMascota v-if="currentStep === 1" @next="nextStep" />
          <StepPlanes v-if="currentStep === 2" @next="nextStep" @prev="prevStep" />
          <StepResumen v-if="currentStep === 3" @next="nextStep" @prev="prevStep" />
          <StepFinal v-if="currentStep === 4" @prev="prevStep" />
        </div>
      </div>

    </div>
  </div>

  <!-- Planes Medicina Preventiva -->
  <MedicinaPreventiva />
  <!-- FooterInfo -->
  <footerInfo />

</template>
