<template>
  <section class="bg-white rounded-3xl shadow-lg p-8 lg:p-10">
    <!-- Header -->
    <div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-10">
      <div>
        <h2 class="text-3xl font-bold text-gray-900">Gestión de Profesionales</h2>
        <p class="text-gray-600 mt-1">Crea, edita o elimina profesionales adscritos desde este panel.</p>
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
          <h3 class="text-xl font-semibold text-gray-800">Listado de Profesionales</h3>
          <span class="text-sm text-gray-500">{{ profesionales.length }} registrados</span>
        </div>

        <div v-if="loading" class="space-y-4">
          <div v-for="n in 4" :key="n" class="h-28 animate-pulse bg-gray-100 rounded-2xl"></div>
        </div>

        <div v-else-if="!profesionales.length"
          class="text-center py-16 border border-dashed border-gray-300 rounded-3xl">
          <p class="text-gray-500">No hay profesionales registrados aún.</p>
        </div>

        <div v-else class="space-y-4">
          <div v-for="profesional in profesionales" :key="profesional._id"
            class="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-md transition-all">
            <div class="flex flex-col md:flex-row md:items-center gap-6">
              <div class="flex-1">
                <h4 class="font-semibold text-xl text-gray-900">{{ profesional.name }}</h4>
                <div class="mt-4 space-y-2 text-sm text-gray-600">
                  <p><span class="font-medium">Especialidades:</span>
                    {{ profesional.specialty?.length ? profesional.specialty.join(", ") : "Sin especialidad" }}
                  </p>
                  <p><span class="font-medium">Dirección:</span>
                    {{ profesional.direction?.length ? profesional.direction.join(", ") : "Sin dirección" }}
                  </p>
                  <p><span class="font-medium">Web:</span>
                    {{ profesional.webs?.length ? profesional.webs.join(", ") : "Sin web" }}
                  </p>
                </div>
              </div>

              <div class="flex gap-3 self-end md:self-center">
                <button @click="editarProfesional(profesional)"
                  class="px-5 py-2.5 bg-amber-100 hover:bg-amber-200 text-amber-700 rounded-xl text-sm font-medium transition">
                  Editar
                </button>
                <button @click="eliminarProfesional(profesional)"
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

          <form @submit.prevent="guardarProfesional" class="space-y-6">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Nombre Completo</label>
              <input v-model="form.name" type="text" required
                class="w-full px-5 py-3 border border-gray-300 rounded-2xl focus:border-sky-500 outline-none transition"
                placeholder="Dr. Juan Pérez">
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Especialidades</label>
              <input v-model="form.specialty" type="text"
                class="w-full px-5 py-3 border border-gray-300 rounded-2xl focus:border-sky-500 outline-none transition"
                placeholder="Cirugía, Dermatología, Medicina Interna">
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Dirección</label>
              <input v-model="form.direction" type="text"
                class="w-full px-5 py-3 border border-gray-300 rounded-2xl focus:border-sky-500 outline-none transition"
                placeholder="Calle 100 #10-10, Ciudad Demo">
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Sitio Web</label>
              <input v-model="form.webs" type="text"
                class="w-full px-5 py-3 border border-gray-300 rounded-2xl focus:border-sky-500 outline-none transition"
                placeholder="https://sitio.com, https://instagram.com/perfil">
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Descripción</label>
              <textarea v-model="form.desc" rows="4"
                class="w-full px-5 py-3 border border-gray-300 rounded-2xl focus:border-sky-500 outline-none transition resize-y"
                placeholder="Descripción del profesional... (un párrafo por línea)">
              </textarea>
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

const profesionales = ref([]);
const loading = ref(true);
const guardando = ref(false);
const feedback = ref("");
const feedbackTipo = ref("success");
const editandoId = ref(null);

const form = reactive({
  name: "",
  specialty: "",
  direction: "",
  webs: "",
  desc: ""
});

const limpiarFormulario = () => {
  Object.assign(form, {
    name: "",
    specialty: "",
    direction: "",
    webs: "",
    desc: ""
  });
  editandoId.value = null;
};

function prepararNuevo() {
  limpiarFormulario();
  feedback.value = "";
}

function llenarFormulario(profesional) {
  form.name = profesional.name || "";
  form.specialty = profesional.specialty?.join(", ") || "";
  form.direction = profesional.direction?.join(", ") || "";
  form.webs = profesional.webs?.join(", ") || "";
  form.desc = profesional.desc?.join("\n") || "";
  editandoId.value = profesional._id;
}

async function cargarProfesionales() {
  loading.value = true;
  try {
    const res = await fetch(`${API_URL}/api/profesionales`);
    if (res.ok) {
      profesionales.value = await res.json();
    }
  } catch (err) {
    feedbackTipo.value = "error";
    feedback.value = "Error al cargar profesionales";
  } finally {
    loading.value = false;
  }
}

function editarProfesional(profesional) {
  llenarFormulario(profesional);
  feedback.value = "";
}

async function guardarProfesional() {
  guardando.value = true;
  feedback.value = "";

  try {
    const payload = {
      name: form.name.trim(),
      specialty: form.specialty.split(",").map(s => s.trim()).filter(Boolean),
      direction: form.direction.split(",").map(s => s.trim()).filter(Boolean),
      webs: form.webs.split(",").map(s => s.trim()).filter(Boolean),
      desc: form.desc.split("\n").map(s => s.trim()).filter(Boolean)
    };

    if (!payload.name) throw new Error("El nombre es obligatorio");

    const endpoint = editandoId.value
      ? `${API_URL}/api/profesionales/${editandoId.value}`
      : `${API_URL}/api/profesionales`;

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
      throw new Error(data.error || "No se pudo guardar el profesional");
    }

    feedbackTipo.value = "success";
    feedback.value = editandoId.value ? "Profesional actualizado correctamente" : "Profesional creado correctamente";

    limpiarFormulario();
    await cargarProfesionales();
  } catch (error) {
    feedbackTipo.value = "error";
    feedback.value = error.message;
  } finally {
    guardando.value = false;
  }
}

async function eliminarProfesional(profesional) {
  if (!confirm(`¿Estás seguro de eliminar a ${profesional.name}?`)) return;

  try {
    const res = await fetch(`${API_URL}/api/profesionales/${profesional._id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${userStore.sesion.token}` }
    });

    if (!res.ok) throw new Error("No se pudo eliminar el profesional");

    feedbackTipo.value = "success";
    feedback.value = "Profesional eliminado correctamente";

    if (editandoId.value === profesional._id) limpiarFormulario();
    await cargarProfesionales();
  } catch (error) {
    feedbackTipo.value = "error";
    feedback.value = error.message;
  }
}

onMounted(cargarProfesionales);
</script>
