<script setup>
import { ref, watch, computed } from 'vue';
import { useMascotaStore } from '../stores/mascotasStore';
import { useUserStore } from '../stores/userStore';

import {
  validarEdadMascota,
  obtenerRangoFechas,
  obtenerFechaMaxHoy
} from '../utils/edadMascota';

// ======================
// Validación de Email
// ======================
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const esEmailValido = (email) => {
  return email && emailRegex.test(String(email).trim());
};

// ======================
// Stores y Variables
// ======================
const store = useMascotaStore();
const userStore = useUserStore();
const API_URL = import.meta.env.VITE_API_URL || ['https://backend-', 'vet', 'plus.onrender.com'].join('');

const emit = defineEmits(['next', 'prev']);

const razaAString = computed(() =>
  store.datosMascota.esDeRaza ? 'es de raza' : 'no es de raza'
);

const planBackendMap = {
  Basico: 'Silver',
  Avanzado: 'Esmeralda',
  Premium: 'Diamante',
  Elite: 'Senior',
};

const modoActivo = ref('');
const modoPendiente = ref('');        // ← Necesario
const cargandoModo = ref(false);      // ← Necesario
const enviando = ref(false);
const exitoso = ref(false);
const errorFecha = ref('');

const minFecha = ref('');
const maxFecha = ref(obtenerFechaMaxHoy());

const formAsesor = ref({
  nombres: '',
  apellidos: '',
  celular: '',
  email: ''
});

let ultimoCambioModo = 0;

// ======================
// Validaciones Computadas
// ======================
const emailUsuarioValido = computed(() => esEmailValido(userStore.datosUsuario?.email));
const emailAsesorValido = computed(() => esEmailValido(formAsesor.value.email));

const puedeAfiliarseDirectamente = computed(() => {
  const u = userStore.datosUsuario || {};
  return !!(
    u.nombres?.trim() &&
    u.apellidos?.trim() &&
    u.documento?.trim() &&
    u.ciudad?.trim() &&
    u.celular?.trim() &&
    u.direccion?.trim() &&
    u.barrio?.trim() &&
    emailUsuarioValido.value
  );
});

const puedeContactarAsesor = computed(() => {
  return !!(
    formAsesor.value.nombres?.trim() &&
    formAsesor.value.apellidos?.trim() &&
    formAsesor.value.celular?.trim() &&
    emailAsesorValido.value
  );
});

// ======================
// Watch para fecha
// ======================
watch(
  () => [store.datosMascota.edad, store.datosMascota.especie, store.datosMascota.fechaNacimiento],
  () => {
    const edad = store.datosMascota.edad;
    const especie = store.datosMascota.especie;
    const fecha = store.datosMascota.fechaNacimiento;

    const rango = obtenerRangoFechas(edad, especie);
    if (rango) {
      minFecha.value = rango.min;
      maxFecha.value = rango.max;
    }

    if (edad && especie && fecha) {
      errorFecha.value = validarEdadMascota(edad, fecha, especie)
        ? ''
        : 'La fecha no coincide con la edad seleccionada';
    } else {
      errorFecha.value = '';
    }
  },
  { immediate: true }
);

// ======================
// Funciones
// ======================
const handleRegresar = () => emit('prev');

function esperar(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function seleccionarModo(modo) {
  if (enviando.value) return;
  if (modoActivo.value === modo && !cargandoModo.value) return;

  const cambioActual = ++ultimoCambioModo;
  modoPendiente.value = modo;
  cargandoModo.value = true;

  await esperar(250);

  if (cambioActual !== ultimoCambioModo) return;

  modoActivo.value = modo;
  cargandoModo.value = false;
}

async function enviarMascota() {
  const payload = {
    ...store.datosMascota,
    planSeleccionado: planBackendMap[store.datosMascota.planSeleccionado] || store.datosMascota.planSeleccionado,
    esDeRaza: !!store.datosMascota.esDeRaza,
    fechaNacimiento: new Date(store.datosMascota.fechaNacimiento),
    valorMensual: Number(store.datosMascota.valorMensual),
  };

  const res = await fetch(`${API_URL}/api/mascotas`, {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });

  if (!res.ok) throw new Error('Error al crear mascota');
}

async function afiliarse() {
  if (exitoso.value || enviando.value || errorFecha.value || !puedeAfiliarseDirectamente.value) return;

  enviando.value = true;

  try {
    await enviarMascota();

    const body = {
      ...userStore.datosUsuario,
      nombreMascota: store.datosMascota.nombreMascota,
      especie: store.datosMascota.especie,
      raza: store.datosMascota.raza,
      edad: store.datosMascota.edad,
      fechaNacimiento: store.datosMascota.fechaNacimiento,
      colorMascota: store.datosMascota.colorMascota,
      microchip: store.datosMascota.microchip,
      planSeleccionado: store.datosMascota.planSeleccionado,
      tipoPreventivo: store.datosMascota.tipoPreventivo,
      cobertura: store.datosMascota.cobertura,
      valorMensual: Number(store.datosMascota.valorMensual),
    };

    const res = await fetch(`${API_URL}/api/afiliaciones`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    });

    if (res.ok) {
      exitoso.value = true;
    } else {
      alert('Hubo un error, intenta de nuevo.');
    }
  } catch (error) {
    console.error(error);
    alert('Error de conexión.');
  } finally {
    enviando.value = false;
  }
}

async function contactarAsesor() {
  if (exitoso.value || enviando.value || errorFecha.value || !puedeContactarAsesor.value) return;

  enviando.value = true;

  try {
    await enviarMascota();

    const body = {
      ...formAsesor.value,
      nombreMascota: store.datosMascota.nombreMascota,
      especie: store.datosMascota.especie,
      raza: store.datosMascota.raza,
      edad: store.datosMascota.edad,
      fechaNacimiento: store.datosMascota.fechaNacimiento,
      colorMascota: store.datosMascota.colorMascota,
      microchip: store.datosMascota.microchip,
      planSeleccionado: store.datosMascota.planSeleccionado,
      tipoPreventivo: store.datosMascota.tipoPreventivo,
      cobertura: store.datosMascota.cobertura,
      valorMensual: Number(store.datosMascota.valorMensual),
    };

    const res = await fetch(`${API_URL}/api/asesor`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    });

    if (res.ok) {
      exitoso.value = true;
    } else {
      alert("Hubo un error, intenta de nuevo");
    }
  } catch (error) {
    console.error(error);
    alert('Error de conexión...');
  } finally {
    enviando.value = false;
  }
}
</script>

<template>
  <div class="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">

    <!-- Header -->
    <div class="bg-linear-to-r from-sky-600 to-blue-700 text-white px-8 py-12 text-center">
      <div class="inline-flex items-center gap-3 bg-white/20 backdrop-blur-md px-6 py-2.5 rounded-3xl mb-4">
        <span class="text-3xl">🐾</span>
        <span class="font-semibold tracking-wide">ÚLTIMO PASO</span>
      </div>
      <h2 class="text-3xl md:text-4xl font-bold">¡Ya casi terminamos!</h2>
      <p class="mt-3 text-sky-100 text-lg">Elige cómo deseas finalizar tu afiliación con PetSalud</p>
    </div>

    <div class="p-8 md:p-12">
      <div v-if="!exitoso" class="mb-8">
        <button @click.prevent="handleRegresar"
          class="inline-flex items-center justify-center gap-2 rounded-2xl border border-gray-300 bg-white px-5 py-3 text-sm font-bold text-gray-700 transition-all hover:border-sky-400 hover:bg-sky-50 hover:text-sky-700 active:scale-95">
          <i class="fa-solid fa-arrow-left text-xs"></i>
          Regresar al resumen
        </button>
      </div>

      <!-- Resumen de la Mascota -->
      <div class="bg-gray-50 rounded-2xl p-6 mb-10">
        <h3 class="font-bold text-xl mb-6 flex items-center gap-3">
          🐾 Datos de tu mascota
        </h3>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-y-5 text-sm">
          <div><span class="text-gray-500">Nombre:</span> <span class="font-medium">{{ store.datosMascota.nombreMascota
              }}</span></div>
          <div><span class="text-gray-500">Especie:</span> <span class="font-medium">{{ store.datosMascota.especie
              }}</span></div>
          <div><span class="text-gray-500">Raza:</span> <span class="font-medium">{{ razaAString }}</span></div>
          <div><span class="text-gray-500">Edad:</span> <span class="font-medium">{{ store.datosMascota.edad }}</span>
          </div>
          <div><span class="text-gray-500">Plan:</span> <span class="font-medium">{{ store.datosMascota.planSeleccionado
              }}</span></div>
          <div><span class="text-gray-500">Cobertura:</span> <span class="font-medium">{{ store.datosMascota.cobertura
              }}</span></div>
        </div>
      </div>

      <h3 v-if="!exitoso" class="text-2xl font-bold text-gray-900 mb-8 text-center">¿Cómo deseas continuar?</h3>

      <div v-if="!exitoso" class="grid grid-cols-1 lg:grid-cols-2 gap-8">

        <!-- Afiliarme Directamente -->
        <div @click="seleccionarModo('afiliacion')"
          :class="modoActivo === 'afiliacion' ? 'ring-2 ring-sky-500 bg-sky-50' : 'hover:border-sky-300'"
          class="border-2 border-transparent rounded-3xl p-8 cursor-pointer transition-all">

          <div class="flex items-center gap-4 mb-6">
            <div class="w-14 h-14 bg-sky-100 rounded-2xl flex items-center justify-center text-4xl">⚡</div>
            <div>
              <h4 class="font-semibold text-2xl">Afiliarme directamente</h4>
              <p class="text-gray-600">Completa tus datos y finaliza ahora</p>
            </div>
          </div>

          <div v-if="modoActivo === 'afiliacion'" class="space-y-5 mt-8">
            <!-- Tus campos originales -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input v-model="userStore.datosUsuario.nombres" placeholder="Nombres completos"
                class="w-full p-4 border border-gray-300 rounded-2xl focus:border-sky-500 outline-none" />
              <input v-model="userStore.datosUsuario.apellidos" placeholder="Apellidos completos"
                class="w-full p-4 border border-gray-300 rounded-2xl focus:border-sky-500 outline-none" />
            </div>
            <input v-model="userStore.datosUsuario.documento" placeholder="Documento de identidad"
              class="w-full p-4 border border-gray-300 rounded-2xl focus:border-sky-500 outline-none" />
            <input v-model="userStore.datosUsuario.ciudad" placeholder="Ciudad"
              class="w-full p-4 border border-gray-300 rounded-2xl focus:border-sky-500 outline-none" />
            <input v-model="userStore.datosUsuario.celular" placeholder="Celular"
              class="w-full p-4 border border-gray-300 rounded-2xl focus:border-sky-500 outline-none" />
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input v-model="userStore.datosUsuario.direccion" placeholder="Dirección"
                class="w-full p-4 border border-gray-300 rounded-2xl focus:border-sky-500 outline-none" />
              <input v-model="userStore.datosUsuario.barrio" placeholder="Barrio"
                class="w-full p-4 border border-gray-300 rounded-2xl focus:border-sky-500 outline-none" />
            </div>
            <input v-model="userStore.datosUsuario.email" type="email" placeholder="Correo electrónico"
              class="w-full p-4 border border-gray-300 rounded-2xl focus:border-sky-500 outline-none" />

            <!-- Error de email -->
            <p v-if="userStore.datosUsuario?.email && !emailUsuarioValido" class="text-red-500 text-sm">
              Por favor ingresa un correo electrónico válido
            </p>

            <!-- Campos extras que tenías -->
            <div class="pt-4 border-t">
              <label class="text-gray-500 block mb-1">Fecha de nacimiento Mascota</label>
              <input v-model="store.datosMascota.fechaNacimiento" type="date" :min="minFecha" :max="maxFecha"
                class="w-full p-3 border border-gray-300 rounded-xl focus:border-sky-500 outline-none" />
              <p v-if="errorFecha" class="text-red-500 text-sm mt-1">{{ errorFecha }}</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label class="text-gray-500 block mb-1">Color de la mascota</label>
                <input v-model="store.datosMascota.colorMascota" placeholder="Ej: Negro con blanco"
                  class="w-full p-3 border border-gray-300 rounded-xl focus:border-sky-500 outline-none" />
              </div>
              <div>
                <label class="text-gray-500 block mb-1">Microchip (si tiene)</label>
                <input v-model="store.datosMascota.microchip" placeholder="Número de microchip"
                  class="w-full p-3 border border-gray-300 rounded-xl focus:border-sky-500 outline-none" />
              </div>
            </div>

            <button @click.prevent="afiliarse"
              :disabled="exitoso || enviando || !!errorFecha || !puedeAfiliarseDirectamente"
              class="w-full py-5 rounded-2xl font-bold text-lg mt-6 transition-all"
              :class="puedeAfiliarseDirectamente && !enviando && !exitoso ? 'bg-sky-600 hover:bg-sky-700 text-white' : 'bg-gray-400 cursor-not-allowed'">
              {{ enviando ? 'Procesando...' : exitoso ? 'Solicitud enviada' : 'Finalizar Afiliación' }}
            </button>
          </div>
        </div>

        <!-- Contactar con Asesor -->
        <div @click="seleccionarModo('asesor')"
          :class="modoActivo === 'asesor' ? 'ring-2 ring-sky-500 bg-sky-50' : 'hover:border-sky-300'"
          class="border-2 border-transparent rounded-3xl p-8 cursor-pointer transition-all">

          <div class="flex items-center gap-4 mb-6">
            <div class="w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center text-4xl">👨‍💼</div>
            <div>
              <h4 class="font-semibold text-2xl">Contactar con un asesor</h4>
              <p class="text-gray-600">Un asesor se comunicará contigo pronto</p>
            </div>
          </div>

          <div v-if="modoActivo === 'asesor'" class="space-y-5 mt-8">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input v-model="formAsesor.nombres" placeholder="Nombres completos"
                class="w-full p-4 border border-gray-300 rounded-2xl focus:border-sky-500 outline-none" />
              <input v-model="formAsesor.apellidos" placeholder="Apellidos completos"
                class="w-full p-4 border border-gray-300 rounded-2xl focus:border-sky-500 outline-none" />
            </div>
            <input v-model="formAsesor.celular" placeholder="Celular"
              class="w-full p-4 border border-gray-300 rounded-2xl focus:border-sky-500 outline-none" />
            <input v-model="formAsesor.email" type="email" placeholder="Correo electrónico"
              class="w-full p-4 border border-gray-300 rounded-2xl focus:border-sky-500 outline-none" />

            <!-- Error de email -->
            <p v-if="formAsesor.email && !emailAsesorValido" class="text-red-500 text-sm">
              Por favor ingresa un correo electrónico válido
            </p>
            <!-- Campos extras que tenías -->
            <div class="pt-4 border-t">
              <label class="text-gray-500 block mb-1">Fecha de nacimiento Mascota</label>
              <input v-model="store.datosMascota.fechaNacimiento" type="date" :min="minFecha" :max="maxFecha"
                class="w-full p-3 border border-gray-300 rounded-xl focus:border-sky-500 outline-none" />
              <p v-if="errorFecha" class="text-red-500 text-sm mt-1">{{ errorFecha }}</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label class="text-gray-500 block mb-1">Color de la mascota</label>
                <input v-model="store.datosMascota.colorMascota" placeholder="Ej: Negro con blanco"
                  class="w-full p-3 border border-gray-300 rounded-xl focus:border-sky-500 outline-none" />
              </div>
              <div>
                <label class="text-gray-500 block mb-1">Microchip (si tiene)</label>
                <input v-model="store.datosMascota.microchip" placeholder="Número de microchip"
                  class="w-full p-3 border border-gray-300 rounded-xl focus:border-sky-500 outline-none" />
              </div>
            </div>

            <button @click.prevent="contactarAsesor" :disabled="exitoso || enviando || !!errorFecha || !puedeContactarAsesor"
              class="w-full py-5 rounded-2xl font-bold text-lg mt-6 transition-all"
              :class="puedeContactarAsesor && !enviando && !exitoso ? 'bg-amber-600 hover:bg-amber-700 text-white' : 'bg-gray-400 cursor-not-allowed'">
              {{ enviando ? 'Enviando...' : exitoso ? 'Solicitud enviada' : 'Contactar con Asesor' }}
            </button>
          </div>
        </div>
      </div>

      <!-- Mensaje inicial -->
      <div v-if="!modoActivo && !exitoso"
        class="text-center py-16 text-gray-500 border border-dashed border-gray-200 rounded-2xl mt-8">
        Selecciona una de las opciones anteriores para continuar
      </div>

      <!-- Éxito -->
      <div v-if="exitoso" class="text-center py-20">
        <div class="text-7xl mb-6">🎉</div>
        <h3 class="text-3xl font-bold text-green-600">¡Solicitud enviada con éxito!</h3>
        <p class="text-gray-600 mt-4">Pronto nos comunicaremos contigo para confirmar los detalles.</p>
      </div>

    </div>
  </div>
</template>
