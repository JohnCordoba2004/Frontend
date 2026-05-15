<template>
  <section class="bg-white rounded-3xl shadow-lg p-8 lg:p-10">
    <!-- Header -->
    <div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-10">

      <div>
        <h2 class="text-3xl font-bold text-gray-900">Gestión de otros</h2>
        <p class="text-gray-600 mt-1">Crea, edita o elimina otros adscritos desde este panel.</p>
      </div>

      <button @click="prepararNuevo"
        class="px-6 py-3 bg-sky-600 hover:bg-sky-700 text-white font-semibold rounded-2xl transition-all flex items-center gap-2">
        <i class="fa-solid fa-plus"></i>
        Nuevo Profesional
      </button>

    </div>

    <!-- Feedback -->
    <div v-if="feedback"
      :class="feedbackTipo === 'success' ? 'bg-emerald-100 text-emerald-700 border-emerald-200' : 'bg-red-100 text-red-700 border-red-200'"
      class="mb-8 rounded-2xl border px-6 py-4 text-sm font-medium">
      {{ feedback }}
    </div>

    <div class="grid lg:grid-cols-12 gap-10">
      <!-- Listado -->
      <div class="lg:col-span-7">
        <div class="flex items-center justify-between mb-6">
          <h3 class="text-xl font-semibold text-gray-800">Listado de otros</h3>
          <span class="text-sm text-gray-500">{{ otros.length }} registrados</span>
        </div>

        <div v-if="loading" class="space-y-4">
          <div v-for="n in 4" :key="n" class="h-28 animate-pulse bg-gray-100 rounded-2xl"></div>
        </div>

        <div v-else-if="!otros.length" class="text-center py-16 border border-dashed border-gray-300 rounded-3xl">
          <p class="text-gray-500">No hay otros registrados aún.</p>
        </div>

        <div v-else class="space-y-4">
          <div v-for="otro in otros" :key="otro._id"
            class="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-md transition-all">
            <div class="flex flex-col md:flex-row md:items-center gap-6">
              <div class="flex-1">
                <h4 class="font-semibold text-xl text-gray-900">{{ otro.name }}</h4>
                <div class="mt-4 space-y-2 text-sm text-gray-600">
                  <p><span class="font-medium">Especialidades:</span>
                    {{ otro.specialty?.length ? otro.specialty.join(", ") : "Sin especialidad" }}
                  </p>
                  <p>
                    <span class="font-medium">Dirección:</span> {{ otro.direction?.join(", ") || "Sin dirección" }}
                  </p>
                  <p><span class="font-medium">Teléfono:</span> {{ otro.phone?.join(" • ") || "Sin teléfono" }}</p>
                  <p><span class="font-medium">Web:</span> {{ otro.webs?.join(", ") || "Sin web" }}</p>
                  <p><span class="font-medium">Ciudad:</span> {{ otro.city.join(', ') || "Sin ciudad" }}</p>
                </div>
              </div>

              <div class="flex gap-3 self-end md:self-center">
                <button @click="editarOtros(otro)"
                  class="px-5 py-2.5 bg-amber-100 hover:bg-amber-200 text-amber-700 rounded-xl text-sm font-medium transition">
                  Editar
                </button>
                <button @click="eliminarOtro(otro)"
                  class="px-5 py-2.5 bg-red-100 hover:bg-red-200 text-red-700 rounded-xl text-sm font-medium transition">
                  Eliminar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Formulario -->
      <div class="lg:col-span-5">
        <div class="sticky top-8">
          <h3 class="text-xl font-semibold text-gray-800 mb-6">
            {{ editandoId ? "Editar Profesional" : "Nuevo Profesional" }}
          </h3>

          <!--Nombre-->
          <form @submit.prevent="guardarOtros" class="space-y-6">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Nombre Completo</label>
              <input v-model="form.name" type="text" required
                class="w-full px-5 py-3 border border-gray-300 rounded-2xl focus:border-sky-500 outline-none transition"
                placeholder="CRE Resonancia">
            </div>

            <!--Especialidad-->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Especialidades</label>
              <input v-model="form.specialty" type="text"
                class="w-full px-5 py-3 border border-gray-300 rounded-2xl focus:border-sky-500 outline-none transition"
                placeholder="Servicio funerario, Resonancia especializada">
            </div>

            <!--Direction-->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Dirección</label>
              <input v-model="form.direction" type="text"
                class="w-full px-5 py-3 border border-gray-300 rounded-2xl focus:border-sky-500 outline-none transition"
                placeholder="Calle 100 #10-10, Ciudad Demo">
            </div>

            <!--Telefono-->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Teléfono</label>
              <input v-model="form.phone" type="text"
                class="w-full px-5 py-3 border border-gray-300 rounded-2xl focus:border-sky-500 outline-none transition"
                placeholder="311 5302289">
            </div>

            <!--Sitio web-->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Sitio Web</label>
              <input v-model="form.webs" type="text"
                class="w-full px-5 py-3 border border-gray-300 rounded-2xl focus:border-sky-500 outline-none transition"
                placeholder="https://sitio.com, https://instagram.com/perfil">
            </div>

            <!-- Ciudad -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Ciudad</label>
              <input v-model="form.city" type="text" required
                class="w-full px-5 py-3 border border-gray-300 rounded-2xl focus:border-sky-500 outline-none transition"
                placeholder="Bogotá">
            </div>

            <button type="submit" :disabled="guardando"
              class="w-full py-4 bg-sky-600 hover:bg-sky-700 disabled:bg-gray-400 text-white font-semibold rounded-2xl transition-all">
              {{ guardando ? "Guardando..." : editandoId ? "Actualizar Profesional" : "Crear Profesional" }}
            </button>

            <button v-if="editandoId" type="button" @click="prepararNuevo"
              class="w-full py-3 text-gray-600 hover:text-gray-800 font-medium">
              Cancelar edición
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive, ref, onMounted } from 'vue';
import { useUserStore } from '../../stores/userStore';

const API_URL = import.meta.env.VITE_API_URL || ['https://backend-', 'vet', 'plus.onrender.com'].join('')
const userStore = useUserStore();

const otros = ref([]);
const loading = ref(true);
const guardando = ref(false);
const feedback = ref("");
const feedbackTipo = ref("success");
const editandoId = ref(null);

const form = reactive({
  name: "",
  specialty: "",
  direction: "",
  phone: "",
  webs: "",
  city: ""
});

const limpiarFormulario = () => {
  Object.assign(form, {
    name: "",
    specialty: "",
    direction: "",
    phone: "",
    webs: "",
    city: ""
  });
  editandoId.value = null;
};

function prepararNuevo() {
  limpiarFormulario();
  feedback.value = "";
}

const separarValores = (valor) =>
  String(valor || "")
    .split(/,|\n|•|;|\s+-\s+/)
    .map(s => s.trim())
    .filter(Boolean);

const limpiarNumero = (valor) => String(valor || "").replace(/\D/g, "");

const separarTelefonos = (valor) =>
  separarValores(valor)
    .map(limpiarNumero)
    .filter(Boolean);

const separarCelularesValidos = (valor) =>
  separarTelefonos(valor)
    .filter(numero => /^3\d{9}$/.test(numero) || /^6\d{9}$/.test(numero));

function llenarFormulario(otro) {
  form.name = otro.name || "";
  form.specialty = otro.specialty?.join(", ") || "";
  form.direction = otro.direction?.join(", ") || "";
  form.phone = otro.phone?.join(", ") || "";
  form.webs = otro.webs?.join(", ") || "";
  form.city = Array.isArray(otro.city) ? otro.city.join(', ') : otro.city || "";
  editandoId.value = otro._id;
}

async function cargarOtros() {
  loading.value = true;
  try {
    const res = await fetch(`${API_URL}/api/otros`);
    if (res.ok) {
      otros.value = await res.json();
    }
  } catch (err) {
    feedbackTipo.value = "error";
    feedback.value = "Error al cargar otros";
  } finally {
    loading.value = false;
  }
}

function editarOtros(otro) {
  llenarFormulario(otro);
}

async function guardarOtros() {
  guardando.value = true;
  feedback.value = "";

  try {
    const payload = {
      name: form.name.trim(),
      specialty: separarValores(form.specialty),
      direction: separarValores(form.direction),
      phone: separarCelularesValidos(form.phone),
      webs: separarValores(form.webs),
      city: separarValores(form.city)
    };

    if (!payload.name) throw new Error("El nombre es obligatorio");
    if (!payload.direction.length) throw new Error("La direccion es obligatoria");
    if (!payload.city.length) throw new Error("La ciudad es obligatoria");

    const endpoint = editandoId.value
      ? `${API_URL}/api/otros/${editandoId.value}`
      : `${API_URL}/api/otros`;

    const method = editandoId.value ? "PUT" : "POST";

    const res = await fetch(endpoint, {
      method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userStore.sesion.token}`
      },
      body: JSON.stringify(payload)
    });

    if (!res.ok) {
      const data = await res.json();
      throw new Error(data.error || "No se pudo guardar");
    }

    feedbackTipo.value = "success";
    feedback.value = editandoId.value ? " Actualizado correctamente" : "Creado correctamente";

    limpiarFormulario();
    await cargarOtros();
  } catch (error) {
    feedbackTipo.value = "error";
    feedback.value = error.message;
  } finally {
    guardando.value = false;
  }
}

async function eliminarOtro(otro) {
  if (!confirm(`¿Estás seguro de eliminar a ${otro.name}?`)) return;

  try {
    const res = await fetch(`${API_URL}/api/otros/${otro._id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${userStore.sesion.token}` }
    });

    if (!res.ok) throw new Error("No se pudo eliminar");

    feedbackTipo.value = "success";
    feedback.value = "Eliminado correctamente";

    if (editandoId.value === otro._id) limpiarFormulario();
    await cargarOtros();
  } catch (error) {
    feedbackTipo.value = "error";
    feedback.value = error.message;
  }
}

onMounted(cargarOtros);
</script>
