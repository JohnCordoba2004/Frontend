<template>
  <section class="mt-8 rounded-3xl bg-white p-8 shadow-lg">
    <div class="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div>
        <h2 class="text-3xl font-bold text-gray-900">Gestión de Beneficios</h2>
        <p class="text-gray-600 mt-1">Administra los beneficios y descuentos exclusivos para afiliados.</p>
      </div>
      <button
        class="rounded-2xl bg-emerald-600 px-6 py-3 text-white font-semibold transition hover:bg-emerald-700 flex items-center gap-2"
        @click="prepararNuevo">
        <i class="fa-solid fa-plus"></i>
        Nuevo Beneficio
      </button>
    </div>

    <p v-if="feedback" :class="feedbackClase" class="mb-6 rounded-2xl px-6 py-4 text-sm font-medium">
      {{ feedback }}
    </p>

    <div class="grid gap-10 xl:grid-cols-[1.2fr_0.8fr]">

      <!-- Listado -->
      <div class="rounded-2xl border border-gray-200 bg-gray-50 p-6">
        <div class="mb-6 flex items-center justify-between">
          <h3 class="text-xl font-semibold text-gray-800">Listado de Beneficios</h3>
          <span class="text-sm text-gray-500">{{ beneficios.length }} registros</span>
        </div>

        <div v-if="loading" class="space-y-4">
          <div v-for="n in 3" :key="n" class="h-28 animate-pulse rounded-2xl bg-gray-200"></div>
        </div>

        <div v-else-if="!beneficios.length"
          class="rounded-2xl border border-dashed border-gray-300 p-12 text-center text-gray-500">
          No hay beneficios cargados aún.
        </div>

        <div v-else class="space-y-4">
          <div v-for="benefit in beneficios" :key="benefit.id"
            class="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow transition-all">
            <div class="flex flex-col md:flex-row md:items-center gap-6">
              <div class="flex-1">
                <h4 class="text-xl font-semibold text-gray-900">{{ benefit.name }}</h4>
                <div class="mt-4 space-y-2 text-sm text-gray-600">
                  <p><span class="font-medium">Dirección:</span> {{ benefit.direction.join(' - ') }}</p>
                  <p><span class="font-medium">Telefono:</span> {{ benefit.telefono.join(' - ') }}</p>
                  <p><span class="font-medium">Web:</span>
                    <a :href="benefit.web" target="_blank" class="text-sky-600 hover:underline ml-2">
                      {{ benefit.web.join('-') }}
                    </a>
                  </p>
                  <p class="line-clamp-2"><span class="font-medium">Descripción:</span> {{ benefit.desc.join(' - ') }}
                  </p>
                  <p><span class="font-medium">Contacto:</span> {{ benefit.contact.join(' - ') }}</p>
                </div>
              </div>

              <div class="flex gap-3">
                <button
                  class="rounded-xl bg-amber-100 px-5 py-2.5 text-sm font-medium text-amber-700 hover:bg-amber-200 transition"
                  @click="editarBeneficio(benefit)">
                  Editar
                </button>
                <button
                  class="rounded-xl bg-red-100 px-5 py-2.5 text-sm font-medium text-red-700 hover:bg-red-200 transition"
                  @click="eliminarBeneficio(benefit)">
                  Eliminar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Formulario -->
      <div class="rounded-2xl border border-gray-200 bg-gray-50 p-6">
        <div class="mb-6 flex items-center justify-between">
          <h3 class="text-xl font-semibold text-gray-800">
            {{ editandoId ? "Editar Beneficio" : "Nuevo Beneficio" }}
          </h3>
          <button v-if="editandoId" class="text-sm text-gray-500 hover:text-gray-700" @click="prepararNuevo">
            Limpiar
          </button>
        </div>

        <form class="space-y-6" @submit.prevent="guardarBeneficio">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Nombre del Beneficio</label>
            <input id="name" v-model="form.name" type="text" required
              class="w-full rounded-2xl border border-gray-300 px-5 py-3 focus:border-sky-500 outline-none transition">
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Dirección</label>
            <input id="direction" v-model="form.direction" type="text" required
              class="w-full rounded-2xl border border-gray-300 px-5 py-3 focus:border-sky-500 outline-none transition">
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Telefono</label>
            <input id="telefono" v-model="form.telefono" type="text" required
              class="w-full rounded-2xl border border-gray-300 px-5 py-3 focus:border-sky-500 outline-none transition">
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Sitio Web</label>
            <input id="web" v-model="form.web" type="text" required
              class="w-full rounded-2xl border border-gray-300 px-5 py-3 focus:border-sky-500 outline-none transition">
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Descripción</label>
            <textarea id="desc" v-model="form.desc" rows="3" required
              class="w-full rounded-2xl border border-gray-300 px-5 py-3 focus:border-sky-500 outline-none transition resize-y">
            </textarea>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Contacto</label>
            <input id="contact" v-model="form.contact" type="text" required
              class="w-full rounded-2xl border border-gray-300 px-5 py-3 focus:border-sky-500 outline-none transition">
          </div>

          <!-- Campos de imágenes -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Imagen Logo (URL)</label>
            <input id="img" v-model="form.img" type="text"
              class="w-full rounded-2xl border border-gray-300 px-5 py-3 focus:border-sky-500 outline-none transition"
              placeholder="https://.../logo.png">
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Imagen Full (URL)</label>
            <input id="imgFull" v-model="form.imgFull" type="text"
              class="w-full rounded-2xl border border-gray-300 px-5 py-3 focus:border-sky-500 outline-none transition"
              placeholder="https://.../alianza-full.png">
          </div>

          <button type="submit" :disabled="guardando"
            class="w-full rounded-2xl bg-emerald-600 py-4 text-white font-semibold hover:bg-emerald-700 transition disabled:opacity-60">
            {{ guardando ? "Guardando..." : editandoId ? "Actualizar Beneficio" : "Crear Beneficio" }}
          </button>
        </form>
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

const beneficios = ref([]);
const loading = ref(true);
const guardando = ref(false);
const feedback = ref("");
const feedbackTipo = ref("success");
const editandoId = ref(null);

const form = reactive({
  name: '',
  direction: '',
  telefono: '',
  web: '',
  desc: '',
  contact: '',
  img: '',
  imgFull: ''
});

const feedbackClase = computed(() =>
  feedbackTipo.value === 'error' ? 'bg-red-100 text-red-700' : 'bg-emerald-100 text-emerald-700'
);

const limpiarFormulario = () => {
  Object.assign(form, {
    name: '',
    direction: '',
    telefono: '',
    web: '',
    desc: '',
    contact: '',
    img: '',
    imgFull: ''
  });
  editandoId.value = null;
};

function prepararNuevo() {
  limpiarFormulario();
  feedback.value = "";
}

function llenarFormulario(benefit) {
  form.name = benefit.name ?? '';
  form.direction = benefit.direction ?? '';
  form.telefono = benefit.telefono ?? '';
  form.web = benefit.web ?? '';
  form.desc = benefit.desc ?? '';
  form.contact = benefit.contact ?? '';
  form.img = benefit.img ?? '';
  form.imgFull = benefit.imgFull ?? '';
  editandoId.value = benefit._id;
}

async function cargarBeneficios() {
  loading.value = true;
  try {
    const res = await fetch(`${API_URL}/api/beneficios`);
    if (res.ok) {
      beneficios.value = await res.json();
    }
  } catch (error) {
    feedbackTipo.value = 'error';
    feedback.value = 'Error al cargar beneficios';
  } finally {
    loading.value = false;
  }
}

function editarBeneficio(benefit) {
  llenarFormulario(benefit);
  feedback.value = "";
}

async function guardarBeneficio() {
  guardando.value = true;
  feedback.value = "";

  try {
    const payload = {
      name: form.name.trim(),
      direction: form.direction,
      telefono: form.telefono,
      web: form.web,
      desc: form.desc,
      contact: form.contact,
      img: form.img,
      imgFull: form.imgFull
    };

    if (!payload.name) throw new Error("El nombre es obligatorio");

    const endpoint = editandoId.value
      ? `${API_URL}/api/beneficios/${editandoId.value}`
      : `${API_URL}/api/beneficios`;

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
    feedback.value = editandoId.value ? "Beneficio actualizado correctamente" : "Beneficio creado correctamente";

    prepararNuevo();
    await cargarBeneficios();
  } catch (error) {
    feedbackTipo.value = "error";
    feedback.value = error.message;
  } finally {
    guardando.value = false;
  }
}

async function eliminarBeneficio(benefit) {
  if (!confirm(`¿Estás seguro de eliminar "${benefit.name}"?`)) return;

  try {
    const res = await fetch(`${API_URL}/api/beneficios/${benefit._id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${userStore.sesion.token}` }
    });

    if (!res.ok) throw new Error("No se pudo eliminar");

    feedbackTipo.value = "success";
    feedback.value = "Beneficio eliminado correctamente";

    if (editandoId.value === benefit._id) prepararNuevo();
    await cargarBeneficios();
  } catch (error) {
    feedbackTipo.value = "error";
    feedback.value = error.message;
  }
}

onMounted(cargarBeneficios);
</script>