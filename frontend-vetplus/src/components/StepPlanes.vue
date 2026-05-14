<script setup>
import { computed, reactive } from 'vue';
import { useMascotaStore } from '../stores/mascotasStore';
import { tablaPrecios } from '../utils/preciosVets';
import { imagenes } from '../utils/images';
import { descPlan } from '../utils/descPlan';
import { colorPaws } from '../utils/colorPaws';


const store = useMascotaStore();
const emit = defineEmits(['next', 'prev']);

//Mapeos
const mapsImage = {
  SENIOR: imagenes.SENIOR.img,
  DIAMANTE: imagenes.DIAMANTE.img,
  ESMERALDA: imagenes.ESMERALDA.img,
  SILVER: imagenes.SILVER.img,
}

const mapsDescPlans = {
  SENIOR: descPlan.SENIOR.desc,
  DIAMANTE: descPlan.DIAMANTE.desc,
  ESMERALDA: descPlan.ESMERALDA.desc,
  SILVER: descPlan.SILVER.desc,
}

const mapsColorPaws = {
  SENIOR: colorPaws.SENIOR.color,
  DIAMANTE: colorPaws.DIAMANTE.color,
  ESMERALDA: colorPaws.ESMERALDA.color,
  SILVER: colorPaws.SILVER.color,
}

/* Cobertura Planes */
const seleccionPlanes = reactive({
  Diamante: {
    tipo: 'premium',
    cobertura: '70%'
  },

  Esmeralda: {
    tipo: 'premium',
    cobertura: '70%'
  },

  Senior: {
    tipo: 'premium',
    cobertura: '70%'
  },

  Silver: {
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
    const senior = tablaPrecios.Senior?.Perros?.[pesoKey]
    return senior ? { Senior: senior } : {}
  }

  if (especie === 'Perros') return esDeRaza
    ? (tablaPrecios.Perros?.ConRaza?.[edad] || {})
    : (tablaPrecios.Perros?.SinRaza?.[normalizarPeso(peso)]?.[edad] || {})

  if (especie === 'Gatos') {
    const keyRaza = esDeRaza ? 'ConRaza' : 'SinRaza';
    return tablaPrecios.Gatos?.[keyRaza]?.[edad] || {}
  }

  return {}
})


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
    'SENIOR': ['Servicios médicos ilimitados por accidentes', 'Consultas ilimitadas', 'Atención a nivel nacional'],
    'DIAMANTE': [
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
    'ESMERALDA': [
      'Servicios médicos ilimitados por enfermedad',
      'Servicios médicos ilimitados por accidente',
      'Atención a nivel nacional',
      'Atención en cualquier veterinaria o médico en todo el país'
    ],
    'SILVER': [
      'Servicios médicos por enfermedad, 2 eventos al año hasta $400.000/evento',
      'Servicios médicos por accidentes 2 eventos al año hasta $2.000.000/evento',
      'Consulta General 4/año',
      'Atención a nivel nacional',
      'Atención en cualquier veterinaria o médico en todo el país',
      'Medicina preventiva'
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

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

      <div v-for="(detalles, plan) in obtenerPlanes" :key="plan"
        class="bg-white border border-gray-200 rounded-4xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">


        <div class="p-4 sm:p-6 border-b flex items-center gap-2 sm:gap-4">

          <div :class="mapsColorPaws[plan.toUpperCase()]"
            class="w-8 h-8 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center text-2xl font-black shrink-0">
            1
          </div>

          <h3 :class="mapsColorPaws[plan.toUpperCase()]" class="font-black text-xl sm:text-2xl leading-tight uppercase">
            Plan Médico
            <br>
            <span class="text-2xl sm:text-4xl">{{ plan }}</span>
          </h3>
        </div>

        <!-- Imagen -->
        <div class="flex items-center justify-center h-[180px] py-6 bg-white mb-2 shadow-md">
          <img :src="mapsImage[plan.toUpperCase()]" :alt="plan" class="object-cover">
        </div>

        <!-- Descripción -->
        <div class="px-4 sm:px-6 text-center text-gray-800 mb-6 min-h-[70px] ">
          {{ mapsDescPlans[plan.toUpperCase()] }}
        </div>

        <!-- Beneficios -->
        <ul class="px-4 sm:px-6 space-y-4 text-sm mt-6 min-h-[420px] lg:min-h-[420px]">
          <li v-for="(beneficio, i) in obtenerBeneficiosPorPlan(plan)" :key="i"
            class="flex items-start gap-2 text-gray-600">
            <span :class="mapsColorPaws[plan.toUpperCase()]" class="mt-auto text-balance">
              <i class="fa-solid fa-paw fa-sm"></i>
            </span>
            <span class="leading-snug">{{ beneficio }}</span>
          </li>
        </ul>

        <!-- Cobertura Preventiva -->
        <div class="mt-8 bg-gray-100 p-4 sm:p-6 border-t">
          <p class="uppercase text-sm font-bold mb-4" :class="mapsColorPaws[plan.toUpperCase()]">
            Cobertura Medicina Preventiva
          </p>

          <table class="w-full text-xs border-spacing-x-1 sm:border-spacing-x-0">
            <thead>
              <tr class="border-b">
                <th class="text-left py-2 font-bold text-lg" :class="mapsColorPaws[plan.toUpperCase()]">Servicio</th>

                <th class="text-center py-2 px-1 sm:px-0 text-[10px] sm:text-lg"
                  :class="mapsColorPaws[plan.toUpperCase()]" v-if="plan.toUpperCase() !== 'SILVER'">
                  Premium
                </th>

                <th class="text-center py-2 px-1 sm:px-0 text-[10px] sm:text-lg"
                  :class="mapsColorPaws[plan.toUpperCase()]" v-if="plan.toUpperCase() !== 'SILVER'">
                  Basico
                </th>

              </tr>
            </thead>

            <tbody class="divide-y text-gray-800">
              <tr v-for="item in itemsPreventiva" :key="item"
                :class="{ 'opacity-0 select-none pointer-events-none': item === 'Odontología preventiva' && plan.toUpperCase() === 'SILVER' }">

                <td class="py-4 pr-6">{{ item }}</td>
                <!--Si no es silver-->
                <!--Full premium, todos check-->
                <td class="text-center">
                  <span v-if="plan.toUpperCase() !== 'SILVER'" class="text-lg"
                    :class="mapsColorPaws[plan.toUpperCase()]">
                    <i class="fa-solid fa-check"></i>
                  </span>
                  <span v-else></span>
                </td>

                <!--Basico-->
                <td class="text-center text-lg opacity-60" :class="mapsColorPaws[plan.toUpperCase()]">
                  <!--Plan basico silver-->
                  <span
                    v-if="plan.toUpperCase() === 'SILVER' && ['Valoraciones preventivas', 'Vacunación', 'Desparasitación', 'Asistencia telefónica 24/7', 'Esterilización', 'Servicio funerario'].includes(item)">
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
        <div class="mt-auto p-4 sm:p-8 bg-sky-50">

          <!-- TIPO -->
          <div class="flex justify-center gap-6 mb-6 text-sm font-bold text-sky-800" :class="[
            plan.toUpperCase() === 'SILVER' || plan.toUpperCase() === 'SENIOR'
              ? 'invisible'
              : 'visible'
          ]">

            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" value="premium" v-model="seleccionPlanes[plan].tipo" class="accent-sky-500">
              Premium
            </label>

            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" value="basico" v-model="seleccionPlanes[plan].tipo" class="accent-sky-500">
              Basico
            </label>

          </div>

          <!-- COBERTURA -->
          <div class="flex justify-center gap-4 mb-6 text-sm font-bold text-sky-800">

            <label v-for="p in ['70%', '80%', '90%']" :key="p" class="flex items-center gap-2 cursor-pointer">
              <input type="radio" :value="p" v-model="seleccionPlanes[plan].cobertura" class="accent-sky-500">
              {{ p }}
            </label>

          </div>

          <!-- PRECIO DINAMICO -->
          <div class="text-center mb-6">

            <span class="text-2xl sm:text-4xl font-black text-sky-600 tracking-tighter">
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
            class="w-full py-4 rounded-2xl font-bold text-base transition-all active:scale-95 hover:scale-[1.02] hover:bg-sky-500 hover:text-white ">
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
