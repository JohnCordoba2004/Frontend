<template>
  <section class="bg-white rounded-3xl shadow-lg p-8">
    <!-- Header -->
    <div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-10">
      <div>
        <h2 class="text-3xl font-bold text-gray-900">Gestión de Clínicas</h2>
        <p class="text-gray-600 mt-1">Crea, edita o elimina clínicas veterinarias</p>
      </div>
      <button @click="prepararNuevo"
        class="px-6 py-3 bg-sky-600 hover:bg-sky-700 text-white font-semibold rounded-2xl transition-all flex items-center gap-2">
        <i class="fa-solid fa-plus"></i>
        Nueva Clínica
      </button>
    </div>

    <!-- Mensaje de feedback -->
    <div v-if="feedback"
      :class="feedbackTipo === 'success' ? 'bg-emerald-100 text-emerald-700 border-emerald-200' : 'bg-red-100 text-red-700 border-red-200'"
      class="mb-8 rounded-2xl border px-6 py-4 text-sm font-medium">
      {{ feedback }}
    </div>

    <div class="grid lg:grid-cols-12 gap-10">

      <!-- Listado de Clínicas -->
      <div class="lg:col-span-7">
        <div class="flex items-center justify-between mb-6">
          <h3 class="text-xl font-semibold text-gray-800">Listado de Clínicas</h3>
          <span class="text-sm text-gray-500">{{ clinicas.length }} registradas</span>
        </div>

        <div v-if="loading" class="space-y-4">
          <div v-for="n in 4" :key="n" class="h-28 animate-pulse bg-gray-100 rounded-2xl"></div>
        </div>

        <div v-else-if="!clinicas.length" class="text-center py-16 border border-dashed border-gray-300 rounded-3xl">
          <p class="text-gray-500">No hay clínicas registradas aún.</p>
        </div>

        <div v-else class="space-y-4">
          <div v-for="clinica in clinicas" :key="clinica._id"
            class="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-md transition-all">
            <div class="flex flex-col md:flex-row md:items-center gap-6">
              <div class="flex-1">
                <h4 class="font-semibold text-xl text-gray-900">{{ clinica.name }}</h4>
                <div class="mt-4 space-y-2 text-sm text-gray-600">
                  <p><span class="font-medium">Dirección:</span> {{ clinica.direction?.join(", ") || "Sin dirección" }}
                  </p>
                  <p><span class="font-medium">Teléfono:</span> {{ clinica.phone?.join(" • ") || "Sin teléfono" }}</p>
                  <p><span class="font-medium">Celular:</span> {{ clinica.celular?.join(" • ") || "Sin celular" }}</p>
                  <p><span class="font-medium">Web:</span> {{ clinica.webs?.join(", ") || "Sin web" }}</p>
                  <p><span class="font-medium">Ciudad:</span> {{ clinica.city.join(', ') || "Sin ciudad" }}</p>
                </div>
              </div>

              <div class="flex gap-3 self-end md:self-center">
                <button @click="editarClinica(clinica)"
                  class="px-5 py-2.5 bg-amber-100 hover:bg-amber-200 text-amber-700 rounded-xl text-sm font-medium transition">
                  Editar
                </button>
                <button @click="eliminarClinica(clinica)"
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
            {{ editandoId ? "Editar Clínica" : "Nueva Clínica" }}
          </h3>

          <form @submit.prevent="guardarClinica" class="space-y-6">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Nombre de la Clínica</label>
              <input v-model="form.name" type="text" required
                class="w-full px-5 py-3 border border-gray-300 rounded-2xl focus:border-sky-500 outline-none transition"
                placeholder="Nombre de la clínica">
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Dirección</label>
              <input v-model="form.direction" type="text"
                class="w-full px-5 py-3 border border-gray-300 rounded-2xl focus:border-sky-500 outline-none transition"
                placeholder="Calle 100 #10-10, Ciudad Demo">
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Teléfono</label>
                <input v-model="form.phone" type="text"
                  class="w-full px-5 py-3 border border-gray-300 rounded-2xl focus:border-sky-500 outline-none transition"
                  placeholder="601 1234567">
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Celular</label>
                <input v-model="form.celular" type="text"
                  class="w-full px-5 py-3 border border-gray-300 rounded-2xl focus:border-sky-500 outline-none transition"
                  placeholder="300 1234567">
              </div>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Sitio Web</label>
              <input v-model="form.webs" type="text"
                class="w-full px-5 py-3 border border-gray-300 rounded-2xl focus:border-sky-500 outline-none transition"
                placeholder="https://clinica.com, https://instagram.com/clinica">
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Ciudad</label>
              <input v-model="form.city" type="text" required
                class="w-full px-5 py-3 border border-gray-300 rounded-2xl focus:border-sky-500 outline-none transition"
                placeholder="Bogotá">
            </div>

            <button type="submit" :disabled="guardando"
              class="w-full py-4 bg-sky-600 hover:bg-sky-700 disabled:bg-gray-400 text-white font-semibold rounded-2xl transition-all">
              {{ guardando ? "Guardando..." : editandoId ? "Actualizar Clínica" : "Crear Clínica" }}
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
import { useRouter } from 'vue-router';
import { useUserStore } from '../../stores/userStore';

const API_URL = import.meta.env.VITE_API_URL || ['https://backend-', 'vet', 'plus.onrender.com'].join('')
const userStore = useUserStore();
const router = useRouter();

const clinicas = ref([]);
const loading = ref(true);
const guardando = ref(false);
const feedback = ref("");
const feedbackTipo = ref("success");
const editandoId = ref(null);

const form = reactive({
  name: "",
  direction: "",
  phone: "",
  celular: "",
  webs: "",
  city: ""
});

const limpiarFormulario = () => {
  Object.assign(form, {
    name: "",
    direction: "",
    phone: "",
    celular: "",
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

function llenarFormulario(clinica) {
  form.name = clinica.name || "";
  form.direction = clinica.direction?.join(", ") || "";
  form.phone = clinica.phone?.join(", ") || "";
  form.celular = clinica.celular?.join(", ") || "";
  form.webs = clinica.webs?.join(", ") || "";
  form.city = Array.isArray(clinica.city) ? clinica.city.join(", ") : clinica.city || "";
  editandoId.value = clinica._id;
}

async function cargarClinicas() {
  loading.value = true;
  try {
    const res = await fetch(`${API_URL}/api/clinicas`);
    if (res.ok) {
      clinicas.value = await res.json();
    }
  } catch (err) {
    feedbackTipo.value = "error";
    feedback.value = "Error al cargar las clínicas";
  } finally {
    loading.value = false;
  }
}

async function guardarClinica() {
  guardando.value = true;
  feedback.value = "";

  try {
    const payload = {
      name: form.name.trim(),
      direction: separarValores(form.direction),
      phone: separarTelefonos(form.phone),
      celular: separarCelularesValidos(form.celular),
      webs: separarValores(form.webs),
      city: separarValores(form.city)
    };

    if (!payload.name) throw new Error("El nombre es obligatorio");
    if (!payload.direction.length) throw new Error("La dirección es obligatoria");
    if (!payload.city.length) throw new Error("La ciudad es obligatoria");

    const endpoint = editandoId.value
      ? `${API_URL}/api/clinicas/${editandoId.value}`
      : `${API_URL}/api/clinicas`;

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
      throw new Error(data.error || "No se pudo guardar la clínica");
    }

    feedbackTipo.value = "success";
    feedback.value = editandoId.value ? "Clínica actualizada correctamente" : "Clínica creada correctamente";

    limpiarFormulario();
    await cargarClinicas();
  } catch (error) {
    feedbackTipo.value = "error";
    feedback.value = error.message;
  } finally {
    guardando.value = false;
  }
}

function editarClinica(clinica) {
  llenarFormulario(clinica);
}

async function eliminarClinica(clinica) {
  if (!confirm(`¿Estás seguro de eliminar la clínica "${clinica.name}"?`)) return;

  try {
    const res = await fetch(`${API_URL}/api/clinicas/${clinica._id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${userStore.sesion.token}` }
    });

    if (!res.ok) throw new Error("No se pudo eliminar la clínica");

    feedbackTipo.value = "success";
    feedback.value = "Clínica eliminada correctamente";

    if (editandoId.value === clinica._id) limpiarFormulario();
    await cargarClinicas();
  } catch (error) {
    feedbackTipo.value = "error";
    feedback.value = error.message;
  }
}

onMounted(cargarClinicas);
</script>
