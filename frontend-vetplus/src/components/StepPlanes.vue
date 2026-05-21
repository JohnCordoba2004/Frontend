<script setup>
import { computed, reactive } from 'vue';
import { useMascotaStore } from '../stores/mascotasStore';
import { tablaPrecios } from '../utils/priceVet';
import { images } from '../utils/imagenes';
import { descripcionPlan } from '../utils/descripcionPlan';


const store = useMascotaStore();
const emit = defineEmits(['next', 'prev']);

//Mapeos
const mapsImage = {
  BASICO: images.BASICO.img,
  AVANZADO: images.AVANZADO.img,
  PREMIUM: images.PREMIUM.img,
  ELITE: images.ELITE.img,
}

const mapsDescPlans = {
  BASICO: descripcionPlan.BASICO.desc,
  AVANZADO: descripcionPlan.AVANZADO.desc,
  PREMIUM: descripcionPlan.PREMIUM.desc,
  ELITE: descripcionPlan.ELITE.desc,
}

const mapsColorPaws = {
  BASICO: 'text-emerald-600',
  AVANZADO: 'text-sky-600',
  PREMIUM: 'text-violet-600',
  ELITE: 'text-amber-600',
}

const ordenPlanes = ['Basico', 'Avanzado', 'Premium', 'Elite']

const ordenarPlanes = (planes) =>
  Object.fromEntries(
    ordenPlanes
      .filter(plan => planes?.[plan])
      .map(plan => [plan, planes[plan]])
  )

const ordenarPlanesGato = (planes) =>
  Object.fromEntries(
    ['Basico', 'Avanzado']
      .filter(plan => planes?.[plan])
      .map(plan => [plan, planes[plan]])
  )

/* Cobertura Planes */
const seleccionPlanes = reactive({
  Basico: {
    tipo: 'premium',
    cobertura: '70%'
  },

  Avanzado: {
    tipo: 'premium',
    cobertura: '70%'
  },

  Premium: {
    tipo: 'premium',
    cobertura: '70%'
  },

  Elite: {
    tipo: 'premium',
    cobertura: '70%'
  }
})

const obtenerPlanes = computed(() => {
  const { especie, edad, peso, esDeRaza } = store.datosMascota;

  const normalizarPeso = (p) => ({
    pequeño: 'Pequeño',
    mediano: 'Mediano',
    grande: 'Grande'
  }[p?.toLowerCase()] || p)

  if (especie === 'Perros' && edad === '9 o más años') {
    const pesoKey = esDeRaza ? 'Grande' : normalizarPeso(peso)
    const elite = tablaPrecios.Elite?.Perros?.[pesoKey]
    return elite ? { Elite: elite } : {}
  }

  if (especie === 'Perros') {
    const planes = esDeRaza
      ? (tablaPrecios.Perros?.ConRaza?.[edad] || {})
      : (tablaPrecios.Perros?.SinRaza?.[normalizarPeso(peso)]?.[edad] || {})

    return ordenarPlanes(planes)
  }

  if (especie === 'Gatos') {
    const keyRaza = esDeRaza ? 'ConRaza' : 'SinRaza';
    return ordenarPlanesGato(tablaPrecios.Gatos?.[keyRaza]?.[edad] || {})
  }

  return {}
})

const cantidadPlanes = computed(() => Object.keys(obtenerPlanes.value).length)


const formatPrice = (detalles, plan) => {

  const tipoMap = {
    premium: 'Premium',
    basico: 'Basico'
  }

  const tipo = seleccionPlanes[plan].tipo
  const cobertura = seleccionPlanes[plan].cobertura

  const precio = detalles?.[tipoMap[tipo]]?.[cobertura]

  return precio ? precio.toLocaleString('es-CO') : '0'
}

/* Seleccion de plan */
const seleccionarPlan = (plan) => {

  const tipoMap = {
    premium: 'Premium',
    basico: 'Basico'
  }

  const detalles = obtenerPlanes.value[plan];

  const tipo = seleccionPlanes[plan].tipo
  const cobertura = seleccionPlanes[plan].cobertura;

  const precio = detalles?.[tipoMap[tipo]]?.[cobertura]

  store.actualizarDatos({
    planSeleccionado: plan,
    tipoPreventivo: tipoMap[tipo],
    cobertura,
    valorMensual: typeof precio === 'number' ? precio : 0
  })
}


/* Handlers */
const handleSeleccion = (plan) => {
  if (!plan) return
  seleccionarPlan(plan)
  emit('next')
}

const handleRegresar = () => emit('prev')

const obtenerBeneficiosPorPlan = (plan) => {
  const beneficios = {
    'BASICO': [
      'Servicios médicos por enfermedad en eventos seleccionados',
      'Servicios médicos por accidentes',
      'Consulta general',
      'Atención a nivel nacional',
      'Medicina preventiva'
    ],
    'AVANZADO': [
      'Servicios médicos ilimitados por enfermedad',
      'Servicios médicos ilimitados por accidente',
      'Atención a nivel nacional',
      'Atención en veterinarias aliadas del país'
    ],
    'PREMIUM': [
      'Servicios médicos ilimitados por enfermedad',
      'Servicios médicos ilimitados por accidente',
      'Atención a nivel nacional',
      'Atención en cualquier veterinaria o médico en todo el país',
      'Cobertura para enfermedades crónicas y degenerativas',
      'Atención de condiciones congénitas y hereditarias',
      'Cobertura para tratamiento contra Cáncer',
      'Cirugía displasia de cadera',
      'Cirugía ligamentos, tendondes y rótula'
    ],
    'ELITE': [
      'Servicios médicos por accidentes',
      'Consultas ilimitadas',
      'Atención a nivel nacional',
      'Coberturas especiales para mascotas mayores'
    ]
  }
  return beneficios[plan.toUpperCase()] || []
}

const itemsPreventiva = [
  'Valoraciones preventivas',
  'Vacunación',
  'Desparasitación',
  'Asistencia telefónica 24/7',
  'Esterilización',
  'Servicio funerario',
  'Odontología preventiva'
]

</script>

<template>
  <div class="max-w-7xl mx-auto px-0 sm:px-6 py-8 md:py-12">

    <h2 class="text-2xl sm:text-4xl font-black text-center mb-8 md:mb-12 text-gray-900">
      Selecciona tu Plan Médico
    </h2>

    <div class="mx-auto grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8" :class="cantidadPlanes <= 2
      ? 'max-w-5xl'
      : 'max-w-7xl xl:grid-cols-3'">

      <div v-for="(detalles, plan, index) in obtenerPlanes" :key="plan"
        class="group flex min-h-full flex-col overflow-hidden rounded-lg border border-slate-200 bg-white shadow-[0_18px_45px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-[0_24px_55px_rgba(15,23,42,0.12)]">


        <div class="flex items-start justify-between gap-4 px-5 pb-3 pt-5 sm:px-6 sm:pt-6">

          <div :class="mapsColorPaws[plan.toUpperCase()]"
            class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-50 text-base font-black ring-1 ring-slate-100 sm:h-12 sm:w-12 sm:text-lg">
            {{ index + 1 }}
          </div>

          <div class="min-w-0 flex-1 text-right">
            <p class="text-xs font-black uppercase tracking-[0.18em] text-slate-400">Plan medico</p>
            <h3 :class="mapsColorPaws[plan.toUpperCase()]"
              class="mt-1 break-words text-3xl font-black uppercase leading-none sm:text-4xl">
              {{ plan }}
            </h3>
          </div>
        </div>

        <!-- Imagen -->
        <div class="mx-5 flex h-56 items-end justify-center overflow-hidden rounded-lg bg-slate-50 ring-1 ring-slate-100 sm:mx-6 sm:h-64">
          <img :src="mapsImage[plan.toUpperCase()]" :alt="plan"
            class="h-full w-full object-contain object-bottom px-3 pt-4 transition-transform duration-300 group-hover:scale-[1.03]">
        </div>

        <!-- Descripción -->
        <div class="px-5 pt-5 text-center text-sm leading-relaxed text-slate-600 sm:px-6 sm:text-base">
          {{ mapsDescPlans[plan.toUpperCase()] }}
        </div>

        <!-- Beneficios -->
        <ul class="plan-benefits px-5 space-y-3 text-sm mt-6 sm:px-6"
          :style="{ '--benefits-min-height': cantidadPlanes <= 2 ? '180px' : '340px' }">
          <li v-for="(beneficio, i) in obtenerBeneficiosPorPlan(plan)" :key="i"
            class="flex items-start gap-3 text-slate-600">
            <span :class="mapsColorPaws[plan.toUpperCase()]" class="mt-0.5 shrink-0">
              <i class="fa-solid fa-paw fa-sm"></i>
            </span>
            <span class="leading-snug">{{ beneficio }}</span>
          </li>
        </ul>

        <!-- Cobertura Preventiva -->
        <div class="mt-8 border-t border-slate-100 bg-slate-50 p-4 sm:p-6">
          <p class="uppercase text-sm font-bold mb-4" :class="mapsColorPaws[plan.toUpperCase()]">
            Cobertura Medicina Preventiva
          </p>

          <table class="w-full table-fixed text-xs border-spacing-x-1 sm:border-spacing-x-0">
            <colgroup>
              <col class="w-[58%]">
              <col class="w-[21%]">
              <col class="w-[21%]">
            </colgroup>
            <thead>
              <tr class="border-b">
                <th class="text-left py-2 pr-3 font-bold text-base sm:text-lg" :class="mapsColorPaws[plan.toUpperCase()]">Servicio</th>

                <th class="text-center py-2 px-1 text-xs sm:px-0 sm:text-base"
                  :class="mapsColorPaws[plan.toUpperCase()]">
                  Premium
                </th>

                <th class="text-center py-2 px-1 text-xs sm:px-0 sm:text-base"
                  :class="mapsColorPaws[plan.toUpperCase()]">
                  Basico
                </th>

              </tr>
            </thead>

            <tbody class="divide-y text-gray-800">
              <tr v-for="item in itemsPreventiva" :key="item">

                <td class="py-3.5 pr-3 leading-snug">{{ item }}</td>
                <!--Si no es silver-->
                <!--Full premium, todos check-->
                <td class="text-center">
                  <span class="text-lg" :class="mapsColorPaws[plan.toUpperCase()]">
                    <i class="fa-solid fa-check"></i>
                  </span>
                </td>

                <!--Basico-->
                <td class="text-center text-lg opacity-60" :class="mapsColorPaws[plan.toUpperCase()]">
                  <!--Plan basico silver-->
                  <span
                    v-if="plan.toUpperCase() === 'BASICO' && ['Valoraciones preventivas', 'Vacunación', 'Desparasitación', 'Asistencia telefónica 24/7', 'Esterilización', 'Servicio funerario'].includes(item)">
                    <i class="fa-solid fa-check"></i>
                  </span>
                  <!--Plan basico con condicion normal para los otros planes-->
                  <span v-else-if="['Valoraciones preventivas', 'Vacunación', 'Desparasitación'].includes(item)">
                    <i class="fa-solid fa-check"></i>
                  </span>

                  <span v-else class="opacity-40">
                    <i class="fa-solid fa-grip-lines"></i>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!--Precio y seleccionar-->
        <div class="border-t border-slate-100 bg-white p-4 sm:p-6">

          <!-- TIPO -->
          <div class="mb-4 grid grid-cols-2 gap-2 rounded-lg bg-slate-100 p-1 text-sm font-bold text-slate-700">

            <label
              class="flex cursor-pointer items-center justify-center gap-2 rounded-md px-3 py-2 transition"
              :class="seleccionPlanes[plan].tipo === 'premium' ? 'bg-white text-sky-700 shadow-sm' : 'hover:bg-white/70'">
              <input type="radio" value="premium" v-model="seleccionPlanes[plan].tipo" class="sr-only">
              Premium
            </label>

            <label
              class="flex cursor-pointer items-center justify-center gap-2 rounded-md px-3 py-2 transition"
              :class="seleccionPlanes[plan].tipo === 'basico' ? 'bg-white text-sky-700 shadow-sm' : 'hover:bg-white/70'">
              <input type="radio" value="basico" v-model="seleccionPlanes[plan].tipo" class="sr-only">
              Basico
            </label>

          </div>

          <!-- COBERTURA -->
          <div class="mb-5 grid grid-cols-3 gap-2 text-sm font-bold text-slate-700">

            <label v-for="p in ['70%', '80%', '90%']" :key="p"
              class="flex cursor-pointer items-center justify-center rounded-lg border px-3 py-2 transition"
              :class="seleccionPlanes[plan].cobertura === p ? 'border-sky-300 bg-sky-50 text-sky-700' : 'border-slate-200 bg-white hover:border-sky-200'">
              <input type="radio" :value="p" v-model="seleccionPlanes[plan].cobertura" class="sr-only">
              {{ p }}
            </label>

          </div>

          <!-- PRECIO DINAMICO -->
          <div class="text-center mb-6">

            <span class="text-3xl sm:text-4xl font-black text-sky-600 tracking-tighter">
              ${{ formatPrice(detalles, plan) }}
            </span>

            <span class="text-lg text-gray-400 m-0.5">
              /mes
            </span>
          </div>

          <!-- BOTON -->
          <button @click.prevent="handleSeleccion(plan)" :class="store.datosMascota.planSeleccionado === plan
            ? 'bg-sky-600 text-white shadow'
            : 'bg-white border-2 border-sky-400 text-sky-400 hover:bg-sky-50'"
            class="w-full rounded-lg py-4 font-bold text-base transition-all active:scale-95 hover:scale-[1.01] hover:bg-sky-500 hover:text-white ">
            {{ store.datosMascota.planSeleccionado === plan
              ? 'Seleccionado'
              : 'Seleccionar' }}
          </button>
        </div>
      </div>
    </div>

    <!--Boton regresar-->
    <div class="mt-10 flex justify-start sm:justify-center">
      <button @click.prevent="handleRegresar"
        class="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-700 transition-all hover:border-sky-400 hover:bg-sky-50 hover:text-sky-700 active:scale-95 sm:text-base">
        <i class="fa-solid fa-arrow-left text-xs"></i>
        Regresar
      </button>
    </div>
  </div>
</template>

<style scoped>
@media (min-width: 768px) {
  .plan-benefits {
    min-height: var(--benefits-min-height);
  }
}
</style>
