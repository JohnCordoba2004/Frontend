<script setup>
import { computed } from 'vue'
import { useMascotaStore } from '../stores/mascotasStore'

const store = useMascotaStore()
const emit = defineEmits(['next', 'prev'])

// Datos fijos y cálculos
const inscripcionFija = 70000

const valorMensualPaquete = computed(() =>
  store.datosMascota.valorMensual || 0
)

const totalPagar = computed(() =>
  inscripcionFija + valorMensualPaquete.value
)

// Imagen según especie
const imagenesMascota = computed(() => {
  const imagenes = {
    perro: 'https://img.icons8.com/3d-fluency/94/dog.png',
    gato: 'https://img.icons8.com/3d-fluency/94/cat.png'
  }
  const especie = store.datosMascota.especie?.toLowerCase().trim()
  const map = {
    perro: 'perro',
    perros: 'perro',
    gato: 'gato',
    gatos: 'gato'
  }
  return imagenes[map[especie]] || ''
})

// Funciones de navegación
const handleRegresar = () => emit('prev')
const handleSiguiente = () => emit('next')
</script>

<template>
  <div class="w-full max-w-3xl mx-auto px-1 pb-4 sm:px-4 md:px-6">

    <!-- Encabezado -->
    <div class="grid items-center gap-6 rounded-3xl bg-sky-50/70 px-5 py-6 sm:px-7 md:grid-cols-[180px_1fr] md:py-7">
      <div class="mx-auto flex h-36 w-36 items-center justify-center rounded-full bg-white shadow-sm sm:h-40 sm:w-40">
        <img :src="imagenesMascota" alt="mascota" class="h-28 w-28 object-contain drop-shadow-xl sm:h-32 sm:w-32">
      </div>

      <div class="text-center md:text-left">
        <span class="mb-2 inline-flex rounded-full bg-white px-4 py-2 text-xs font-black uppercase tracking-widest text-sky-700 shadow-sm">
          Resumen
        </span>
        <h2 class="text-2xl font-black leading-tight text-gray-950 sm:text-3xl">
          Todo listo para <span class="text-sky-600">{{ store.datosMascota.nombreMascota || 'tu mascota' }}</span>
        </h2>
        <p class="mt-3 text-lg font-bold text-sky-700">
          Plan {{ store.datosMascota.planSeleccionado || '—' }}
        </p>
        <p class="mt-1 text-sm leading-relaxed text-gray-600 sm:text-base">
          Preventivo <strong class="text-gray-800">{{ store.datosMascota.tipoPreventivo || '—' }}</strong>
          <span class="mx-1 text-gray-300">•</span>
          Cobertura del <strong class="text-gray-800">{{ store.datosMascota.cobertura || '—' }}</strong>
        </p>
      </div>
    </div>

    <!-- Caja de precios -->
    <div class="mt-6 rounded-3xl border border-gray-100 bg-white p-5 shadow-sm sm:p-7">
      <div class="space-y-4">
        <div class="flex items-center justify-between gap-4 rounded-2xl bg-gray-50 px-4 py-4">
          <span class="text-sm font-medium text-gray-600 sm:text-base">Inscripción</span>
          <span class="text-base font-black text-gray-900 sm:text-lg">${{ inscripcionFija.toLocaleString('es-CO') }}</span>
        </div>

        <div class="flex items-center justify-between gap-4 rounded-2xl bg-gray-50 px-4 py-4">
          <span class="text-sm font-medium text-gray-600 sm:text-base">Mensualidad</span>
          <span class="text-base font-black text-gray-900 sm:text-lg">${{ valorMensualPaquete.toLocaleString('es-CO') }}</span>
        </div>
      </div>

      <div class="mt-5 rounded-2xl bg-emerald-50 px-4 py-5 sm:flex sm:items-end sm:justify-between sm:gap-5 sm:px-5">
        <div>
          <p class="text-xs font-black uppercase tracking-widest text-emerald-700">Total a pagar</p>
          <p class="mt-1 text-sm text-emerald-900/70">Primer pago de afiliación</p>
        </div>
        <span class="mt-3 block text-4xl font-black leading-none text-emerald-600 sm:mt-0 sm:text-5xl">
          ${{ totalPagar.toLocaleString('es-CO') }}
        </span>
      </div>
    </div>

    <!-- Botones -->
    <div class="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
      <button @click.prevent="handleRegresar"
        class="flex items-center justify-center gap-2 rounded-2xl border border-gray-300 bg-white px-5 py-4 text-sm font-bold text-gray-700 transition-all hover:border-sky-400 hover:bg-sky-50 hover:text-sky-700 active:scale-95 sm:text-base">
        <i class="fa-solid fa-arrow-left text-xs"></i>
        Regresar
      </button>

      <button @click.prevent="handleSiguiente"
        class="flex items-center justify-center gap-2 rounded-2xl bg-sky-600 px-5 py-4 text-sm font-black uppercase tracking-widest text-white shadow-lg shadow-sky-600/20 transition-all hover:bg-sky-700 active:scale-95 sm:text-base">
        Siguiente
        <i class="fa-solid fa-arrow-right text-xs"></i>
      </button>
    </div>

  </div>
</template>
