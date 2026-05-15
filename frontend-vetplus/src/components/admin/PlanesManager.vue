<template>
  <section class="bg-white rounded-3xl shadow-lg p-8 lg:p-10">
    <!-- Header -->
    <div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-10">
      <div>
        <h2 class="text-3xl font-bold text-gray-900">Gestión de Planes</h2>
        <p class="text-gray-600 mt-1">Administra los planes para perros y gatos desde un solo módulo.</p>
      </div>

      <div class="flex flex-wrap gap-3">
        <button @click="cambiarFiltro('dog')"
          :class="filtroTipo === 'dog' ? 'bg-sky-600 text-white' : 'bg-sky-100 text-sky-700 hover:bg-sky-200'"
          class="rounded-2xl px-6 py-3 text-sm font-semibold transition-all">
          Planes para Perros
        </button>
        <button @click="cambiarFiltro('cat')"
          :class="filtroTipo === 'cat' ? 'bg-sky-600 text-white' : 'bg-sky-100 text-sky-700 hover:bg-sky-200'"
          class="rounded-2xl px-6 py-3 text-sm font-semibold transition-all">
          Planes para Gatos
        </button>
        <button @click="prepararNuevo"
          class="rounded-2xl bg-emerald-600 hover:bg-emerald-700 px-6 py-3 text-sm font-semibold text-white transition-all flex items-center gap-2">
          <i class="fa-solid fa-plus"></i>
          Nuevo Plan
        </button>
      </div>
    </div>

    <!-- Feedback -->
    <div v-if="feedback"
      :class="feedbackTipo === 'success' ? 'bg-emerald-100 text-emerald-700 border-emerald-200' : 'bg-red-100 text-red-700 border-red-200'"
      class="mb-8 rounded-2xl border px-6 py-4 text-sm font-medium">
      {{ feedback }}
    </div>

    <div class="grid lg:grid-cols-12 gap-10">

      <!-- Listado de Planes -->
      <div class="lg:col-span-7">
        <div class="flex items-center justify-between mb-6">
          <h3 class="text-xl font-semibold text-gray-800">Listado de Planes</h3>
          <span class="text-sm text-gray-500">{{ planesFiltrados.length }} registros</span>
        </div>

        <div v-if="loading" class="space-y-4">
          <div v-for="n in 4" :key="n" class="h-28 animate-pulse bg-gray-100 rounded-2xl"></div>
        </div>

        <div v-else-if="!planesFiltrados.length"
          class="text-center py-16 border border-dashed border-gray-300 rounded-3xl">
          <p class="text-gray-500">No hay planes registrados para este tipo aún.</p>
        </div>

        <div v-else class="space-y-4">
          <div v-for="plan in planesFiltrados" :key="plan._id"
            class="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-md transition-all">
            <div class="flex flex-col md:flex-row md:items-center gap-6">
              <div class="flex-1">
                <div class="flex items-center gap-3">
                  <h4 class="font-semibold text-xl text-gray-900">{{ plan.name }}</h4>
                  <span class="rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider"
                    :class="plan.type === 'dog' ? 'bg-blue-100 text-blue-700' : 'bg-amber-100 text-amber-700'">
                    {{ plan.type === 'dog' ? 'Perro' : 'Gato' }}
                  </span>
                </div>

                <div class="mt-4 space-y-1 text-sm text-gray-600">
                  <p><span class="font-medium">Precio:</span> ${{ Number(plan.price || 0).toLocaleString('es-CO') }}</p>
                  <p><span class="font-medium">Beneficios:</span> {{ plan.benefits?.length || 0 }}</p>
                  <p class="line-clamp-2">{{ plan.desc }}</p>
                </div>
              </div>

              <div class="flex gap-3 self-end md:self-center">
                <button @click="editarPlan(plan)"
                  class="px-5 py-2.5 bg-amber-100 hover:bg-amber-200 text-amber-700 rounded-xl text-sm font-medium transition">
                  Editar
                </button>
                <button @click="eliminarPlan(plan)"
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
            {{ editandoId ? "Editar Plan" : "Nuevo Plan" }}
          </h3>

          <form @submit.prevent="guardarPlan" class="space-y-6">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Tipo de Plan</label>
              <select v-model="form.type" required
                class="w-full px-5 py-3 border border-gray-300 rounded-2xl focus:border-sky-500 outline-none transition">
                <option value="dog">Perro</option>
                <option value="cat">Gato</option>
              </select>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Nombre del Plan</label>
              <input v-model="form.name" type="text" required
                class="w-full px-5 py-3 border border-gray-300 rounded-2xl focus:border-sky-500 outline-none transition"
                placeholder="Diamante, Esmeralda, Silver...">
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Precio Mensual</label>
              <input v-model="form.price" type="number" min="1000" required
                class="w-full px-5 py-3 border border-gray-300 rounded-2xl focus:border-sky-500 outline-none transition"
                placeholder="120000">
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">URL de Imagen</label>
              <input v-model="form.img" type="text"
                class="w-full px-5 py-3 border border-gray-300 rounded-2xl focus:border-sky-500 outline-none transition"
                placeholder="https://...">
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Beneficios (separados por coma)</label>
              <input v-model="form.benefits" type="text"
                class="w-full px-5 py-3 border border-gray-300 rounded-2xl focus:border-sky-500 outline-none transition"
                placeholder="Consulta general, Vacunas, Desparasitación">
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Descripción General</label>
              <textarea v-model="form.desc" rows="3"
                class="w-full px-5 py-3 border border-gray-300 rounded-2xl focus:border-sky-500 outline-none transition resize-y"
                placeholder="Descripción del plan..."></textarea>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Texto adicional del nombre</label>
              <textarea v-model="form.descName" rows="2"
                class="w-full px-5 py-3 border border-gray-300 rounded-2xl focus:border-sky-500 outline-none transition resize-y"
                placeholder="Texto de apoyo para el nombre"></textarea>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Texto adicional del precio</label>
              <textarea v-model="form.descPrice" rows="2"
                class="w-full px-5 py-3 border border-gray-300 rounded-2xl focus:border-sky-500 outline-none transition resize-y"
                placeholder="Texto de apoyo para el precio"></textarea>
            </div>

            <button type="submit" :disabled="guardando"
              class="w-full py-4 bg-sky-600 hover:bg-sky-700 disabled:bg-gray-400 text-white font-semibold rounded-2xl transition-all">
              {{ guardando ? "Guardando..." : editandoId ? "Actualizar Plan" : "Crear Plan" }}
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
import { reactive, ref, onMounted, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '../../stores/userStore';

const API_URL = import.meta.env.VITE_API_URL || ['https://backend-', 'vet', 'plus.onrender.com'].join('')
const userStore = useUserStore();
const router = useRouter();

const planes = ref([]);
const loading = ref(true);
const guardando = ref(false);
const feedback = ref("");
const feedbackTipo = ref("success");
const editandoId = ref(null);
const filtroTipo = ref("dog");

const form = reactive({
  type: "dog",
  name: "",
  desc: "",
  descName: "",
  descPrice: "",
  benefits: "",
  price: "",
  img: ""
});

const planesFiltrados = computed(() =>
  planes.value.filter(plan => plan.type === filtroTipo.value)
);

const limpiarFormulario = () => {
  Object.assign(form, {
    type: filtroTipo.value,
    name: "",
    desc: "",
    descName: "",
    descPrice: "",
    benefits: "",
    price: "",
    img: ""
  });
  editandoId.value = null;
};

function prepararNuevo() {
  limpiarFormulario();
  feedback.value = "";
}

function cambiarFiltro(tipo) {
  filtroTipo.value = tipo;
  if (!editandoId.value) {
    form.type = tipo;
  }
}

function llenarFormulario(plan) {
  form.type = plan.type || "dog";
  form.name = plan.name || "";
  form.desc = plan.desc || "";
  form.descName = plan.descName || "";
  form.descPrice = plan.descPrice || "";
  form.benefits = plan.benefits?.join(", ") || "";
  form.price = plan.price != null ? String(plan.price) : "";
  form.img = plan.img || "";
  editandoId.value = plan._id;
}

async function cargarPlanes() {
  loading.value = true;
  try {
    const res = await fetch(`${API_URL}/api/planes`);
    if (res.ok) {
      planes.value = await res.json();
    }
  } catch (err) {
    feedbackTipo.value = "error";
    feedback.value = "Error al cargar los planes";
  } finally {
    loading.value = false;
  }
}

function editarPlan(plan) {
  llenarFormulario(plan);
  feedback.value = "";
}

async function guardarPlan() {
  guardando.value = true;
  feedback.value = "";

  try {
    const payload = {
      type: form.type,
      name: form.name.trim(),
      desc: form.desc.trim(),
      descName: form.descName.trim(),
      descPrice: form.descPrice.trim(),
      benefits: form.benefits.split(",").map(s => s.trim()).filter(Boolean),
      price: Number(form.price),
      img: form.img.trim()
    };

    if (!payload.name) throw new Error("El nombre es obligatorio");
    if (!payload.benefits.length) throw new Error("Debes incluir al menos un beneficio");
    if (!Number.isFinite(payload.price) || payload.price < 1000) throw new Error("El precio debe ser mayor a 1000");

    const endpoint = editandoId.value
      ? `${API_URL}/api/planes/${editandoId.value}`
      : `${API_URL}/api/planes`;

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
      throw new Error(data.error || "No se pudo guardar el plan");
    }

    feedbackTipo.value = "success";
    feedback.value = editandoId.value ? "Plan actualizado correctamente" : "Plan creado correctamente";

    limpiarFormulario();
    await cargarPlanes();
  } catch (error) {
    feedbackTipo.value = "error";
    feedback.value = error.message;
  } finally {
    guardando.value = false;
  }
}

async function eliminarPlan(plan) {
  if (!confirm(`¿Estás seguro de eliminar el plan "${plan.name}"?`)) return;

  try {
    const res = await fetch(`${API_URL}/api/planes/${plan._id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${userStore.sesion.token}` }
    });

    if (!res.ok) throw new Error("No se pudo eliminar el plan");

    feedbackTipo.value = "success";
    feedback.value = "Plan eliminado correctamente";

    if (editandoId.value === plan._id) prepararNuevo();
    await cargarPlanes();
  } catch (error) {
    feedbackTipo.value = "error";
    feedback.value = error.message;
  }
}

onMounted(cargarPlanes);
</script>