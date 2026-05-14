<script setup>
import { computed, watch } from 'vue';
import { bancoDeRazas } from '../stores/listaRazas';
import { useMascotaStore, EDAD_PERRO, EDAD_GATO } from '../stores/mascotasStore';

const store = useMascotaStore();
const emit = defineEmits(['next']);

/** Opciones de edad según especie */
const opcionesEdad = computed(() =>
  store.datosMascota.especie === 'Gatos' ? EDAD_GATO : EDAD_PERRO
);

watch(
  () => store.datosMascota.especie,
  (nueva, anterior) => {
    if (!nueva || nueva === anterior) return;
    const opts = nueva === 'Gatos' ? EDAD_GATO : EDAD_PERRO;
    const patch = {};
    if (store.datosMascota.edad && !opts.includes(store.datosMascota.edad)) patch.edad = '';
    if (nueva === 'Gatos') {
      patch.peso = '';
      if (['Silver', 'Senior'].includes(store.datosMascota.planSeleccionado)) patch.planSeleccionado = 'Diamante';
    }
    if (Object.keys(patch).length) store.actualizarDatos(patch);
  }
);

const razasFiltradas = computed(() => {
  const especie = store.datosMascota.especie;
  return especie ? bancoDeRazas[especie] : [];
});

const mostrarInputEspecial = computed(() => {
  const opcionActual = store.datosMascota.comoSupo;
  const opcionesConDetalle = [
    'Clínica o Médico Veterinario (Que clínica o que médico)',
    'Un asesor (Nombre del asesor)',
    'Otro (Cual?)'
  ];
  return opcionesConDetalle.includes(opcionActual);
});

const formularioValido = computed(() => {
  const { nombreMascota, especie, esDeRaza, edad, comoSupo, peso } = store.datosMascota;
  if (!nombreMascota || !especie || esDeRaza === null || !edad || !comoSupo) return false;
  if (especie === 'Perros' && esDeRaza === false && !peso) return false;
  return true;
});
</script>

<template>
  <div class="max-w-2xl mx-auto bg-white rounded-3xl shadow-xl p-8 md:p-12">

    <!-- Título -->
    <div class="text-center mb-10">
      <div class="inline-flex items-center justify-center w-16 h-16 bg-sky-100 rounded-2xl mb-4">
        🐾
      </div>
      <h2 class="text-3xl font-bold text-gray-900">¡Cuéntanos de tu mascota!</h2>
      <p class="text-gray-600 mt-2">Los datos que ingreses ayudarán a generar tu cotización exacta.</p>
    </div>

    <!-- Nombre de la mascota -->
    <div class="mb-8">
      <label class="block text-sm font-semibold text-gray-700 mb-2">Nombre de tu mascota</label>
      <input v-model="store.datosMascota.nombreMascota" type="text" placeholder="Ej: Luna, Max, Bella..."
        class="w-full px-6 py-4 text-lg border-2 border-gray-200 rounded-2xl focus:border-sky-500 focus:ring-1 focus:ring-sky-500 outline-none transition-all" />
    </div>

    <!-- Especie -->
    <div class="mb-10">
      <label class="block text-sm font-semibold text-gray-700 mb-3">¿Qué especie es tu mascota?</label>
      <div class="grid grid-cols-2 gap-4">
        <button type="button" @click.prevent="store.actualizarDatos({ especie: 'Perros' })" :class="[
          'flex flex-col items-center justify-center p-8 border-2 rounded-3xl transition-all active:scale-95',
          store.datosMascota.especie === 'Perros'
            ? 'border-sky-600 bg-sky-50 shadow-md'
            : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
        ]">
          <img width="90" height="90" src="https://img.icons8.com/3d-fluency/94/dog.png" alt="perro" class="mb-4" />
          <span class="font-bold text-2xl text-gray-800">Perro</span>
        </button>

        <button type="button" @click.prevent="store.actualizarDatos({ especie: 'Gatos' })" :class="[
          'flex flex-col items-center justify-center p-8 border-2 rounded-3xl transition-all active:scale-95',
          store.datosMascota.especie === 'Gatos'
            ? 'border-sky-600 bg-sky-50 shadow-md'
            : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
        ]">
          <img width="90" height="90" src="https://img.icons8.com/3d-fluency/94/cat.png" alt="gato" class="mb-4" />
          <span class="font-bold text-2xl text-gray-800">Gato</span>
        </button>
      </div>
    </div>

    <!-- ¿Es de raza? -->
    <div v-if="store.datosMascota.especie" class="mb-8 bg-white border border-gray-100 p-6 rounded-3xl">
      <p class="font-semibold text-gray-700 mb-4">¿Tu mascota es de raza?</p>
      <div class="flex gap-8">
        <label class="flex items-center gap-3 cursor-pointer">
          <input type="radio" :value="true" v-model="store.datosMascota.esDeRaza" class="accent-sky-600 w-5 h-5" />
          <span class="text-lg">Sí, es de raza</span>
        </label>
        <label class="flex items-center gap-3 cursor-pointer">
          <input type="radio" :value="false" v-model="store.datosMascota.esDeRaza" class="accent-sky-600 w-5 h-5" />
          <span class="text-lg">No, es criollo</span>
        </label>
      </div>
    </div>

    <!-- Campos dinámicos -->
    <div class="space-y-6">
      <!-- Raza -->
      <select v-if="store.datosMascota.esDeRaza === true" v-model="store.datosMascota.raza"
        class="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl bg-white text-base outline-none focus:border-sky-500 transition-all">
        <option value="" disabled>Selecciona la raza</option>
        <option v-for="raza in razasFiltradas" :key="raza" :value="raza">{{ raza }}</option>
      </select>

      <!-- Edad -->
      <select v-model="store.datosMascota.edad"
        class="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl bg-white text-base outline-none focus:border-sky-500 transition-all">
        <option value="" disabled>Selecciona la edad aproximada</option>
        <option v-for="e in opcionesEdad" :key="e" :value="e">{{ e }}</option>
      </select>

      <!-- Peso (solo perros criollos) -->
      <select v-if="store.datosMascota.especie === 'Perros' && store.datosMascota.esDeRaza === false"
        v-model="store.datosMascota.peso"
        class="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl bg-white text-base outline-none focus:border-sky-500 transition-all">
        <option value="" disabled>Selecciona el tamaño aproximado</option>
        <option value="Pequeño">Pequeño (hasta 11 kg)</option>
        <option value="Mediano">Mediano (12 - 25 kg)</option>
        <option value="Grande">Grande (+25 kg)</option>
      </select>

      <!-- Cómo supo de nosotros -->
      <select v-model="store.datosMascota.comoSupo"
        class="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl bg-white text-base outline-none focus:border-sky-500 transition-all">
        <option value="" disabled>-- ¿Cómo supo de nosotros? --</option>
        <option
          v-for="op in ['Navegando en internet', 'Revista', 'Radio', 'TV', 'Redes Sociales', 'Un amigo', 'Clínica o Médico Veterinario (Que clínica o que médico)', 'Un asesor (Nombre del asesor)', 'Otro (Cual?)']"
          :key="op" :value="op">{{ op }}</option>
      </select>

      <!-- Input especial -->
      <div v-if="mostrarInputEspecial" class="mt-2">
        <input v-model="store.datosMascota.detalleComoSupo" type="text" placeholder="¿Cuál clínica, asesor o detalle?"
          class="w-full px-6 py-4 border-2 border-sky-300 rounded-2xl outline-none text-base" />
      </div>
    </div>

    <!-- Botón Siguiente -->
    <button type="button" @click.prevent="emit('next')" :disabled="!formularioValido"
      class="mt-12 w-full py-6 bg-sky-600 hover:bg-sky-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white text-xl font-black rounded-2xl shadow-lg shadow-sky-500/30 transition-all active:scale-[0.98]">
      CONTINUAR →
    </button>
  </div>
</template>