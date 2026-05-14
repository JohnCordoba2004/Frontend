<template>
  <div class="min-h-screen bg-gray-100 flex flex-col lg:flex-row">

    <!-- Sidebar -->
    <aside
      class="w-full lg:w-72 bg-white shadow-xl lg:shadow-none border-r border-gray-100 flex flex-col lg:sticky lg:top-0 lg:h-screen">
      <!-- Logo -->
      <div class="p-6 border-b flex items-center gap-4">
        <div class="w-11 h-11 bg-sky-600 rounded-2xl flex items-center justify-center text-white text-3xl">
          🐾
        </div>
        <div>
          <h1 class="text-2xl font-bold text-gray-900">PetSalud</h1>
          <p class="text-xs text-gray-500 -mt-0.5">Administración</p>
        </div>
      </div>

      <!-- Perfil -->
      <div class="p-6 border-b bg-gray-50">
        <div class="flex items-center gap-4">
          <div class="w-14 h-14 rounded-2xl overflow-hidden border-2 border-white shadow">
            <img src="https://res.cloudinary.com/diro0cqpe/image/upload/q_auto/f_auto/v1775632089/219983_kmskpd.png"
              alt="Admin" class="w-full h-full object-cover">
          </div>
          <div>
            <p class="font-semibold text-gray-900">
              {{ userStore.sesion?.usuario?.nombre || 'Administrador' }}
            </p>
            <p class="text-xs text-gray-500">Ciudad Demo, Colombia</p>
          </div>
        </div>
      </div>

      <!-- Menú -->
      <nav class="flex-1 p-6 overflow-y-auto">
        <ul class="space-y-1">
          <li v-for="item in menuItems" :key="item.key">
            <button @click="cambiarModulo(item.key)" :class="moduloActivo === item.key
              ? 'bg-sky-100 text-sky-700 font-medium shadow-sm'
              : 'text-gray-700 hover:bg-gray-50'"
              class="w-full flex items-center gap-4 px-6 py-4 rounded-2xl text-left transition-all">
              <i :class="item.icon" class="text-xl w-6"></i>
              {{ item.label }}
            </button>
          </li>
        </ul>
      </nav>

      <!-- Cerrar Sesión -->
      <div class="p-6 border-t mt-auto">
        <button @click="cerrarSesion"
          class="w-full py-4 bg-red-50 hover:bg-red-100 text-red-700 font-semibold rounded-2xl transition flex items-center justify-center gap-3">
          <i class="fa-solid fa-right-from-bracket"></i>
          Cerrar sesión
        </button>
      </div>
    </aside>

    <!-- Contenido Principal -->
    <div class="flex-1 p-6 lg:p-10">
      <header class="mb-10">
        <h1 class="text-3xl lg:text-4xl font-bold text-gray-900">{{ tituloPagina }}</h1>
        <p class="text-gray-600 mt-1">
          Bienvenido, <span class="font-medium">{{ userStore.sesion?.usuario?.nombre || 'Administrador' }}</span>
        </p>
      </header>

      <!-- Dashboard -->
      <div v-if="moduloActivo === 'dashboard'" class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        <DashboardCard label="Total Afiliaciones" :value="stats.total" trend="este mes" icon="fa-solid fa-users"
          color="bg-sky-100 text-sky-600" />
        <DashboardCard label="Afiliación Directa" :value="stats.directa" trend="Completaron el formulario"
          icon="fa-solid fa-check-circle" color="bg-emerald-100 text-emerald-600" />
        <DashboardCard label="Solicitudes de Asesor" :value="stats.asesor" trend="Prefirieron hablar con asesor"
          icon="fa-solid fa-headset" color="bg-amber-100 text-amber-600" />
      </div>

      <!-- Otros Módulos -->
      <ProfesionalesManager v-else-if="moduloActivo === 'profesionales'" />
      <ClinicasManager v-else-if="moduloActivo === 'clinicas'" />
      <OtrosManager v-else-if="moduloActivo === 'otros'" />
      <PlanesManager v-else-if="moduloActivo === 'planes'" />
      <UsuariosManager v-else-if="moduloActivo === 'usuarios'" />
      <BeneficiosManager v-else-if="moduloActivo === 'beneficios'" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { useUserStore } from "../stores/userStore";
import { useRouter } from "vue-router";

import DashboardCard from "../components/admin/DashboardCard.vue";
import ProfesionalesManager from "../components/admin/ProfesionalesManager.vue";
import ClinicasManager from "../components/admin/ClinicasManager.vue";
import OtrosManager from "../components/admin/OtrosManager.vue";
import PlanesManager from "../components/admin/PlanesManager.vue";
import UsuariosManager from "../components/admin/UsuariosManager.vue";
import BeneficiosManager from "../components/admin/BeneficiosManager.vue";

const userStore = useUserStore();
const router = useRouter();
const moduloActivo = ref("dashboard");

const stats = ref({
  total: 0,
  directa: 0,
  asesor: 0
});

const API_URL = import.meta.env.VITE_API_URL || ['https://backend-', 'vet', 'plus.onrender.com'].join('')

const menuItems = [
  { key: "dashboard", label: "Dashboard", icon: "fa-solid fa-chart-line" },
  { key: "clinicas", label: "Clínicas Veterinarias", icon: "fa-solid fa-hospital" },
  { key: "profesionales", label: "Profesionales", icon: "fa-solid fa-user-md" },
  { key: "otros", label: "Otros Servicios", icon: "fa-solid fa-ellipsis-h" },
  { key: "planes", label: "Planes", icon: "fa-solid fa-paw" },
  { key: "usuarios", label: "Usuarios", icon: "fa-solid fa-users" },
  { key: "beneficios", label: "Beneficios", icon: "fa-solid fa-gift" }
];

const tituloPagina = computed(() => {
  const item = menuItems.find(m => m.key === moduloActivo.value);
  return item ? item.label : "Dashboard";
});

async function cargarEstadisticas() {
  try {
    const res = await fetch(`${API_URL}/api/afiliaciones/stats`, {
      headers: {
        Authorization: `Bearer ${userStore.sesion.token}`
      }
    });

    if (res.ok) {
      const data = await res.json();
      stats.value = {
        total: data.total || 0,
        directa: data.directa || 0,
        asesor: data.asesor || 0
      };
    }
  } catch (error) {
    console.error("Error al cargar estadísticas:", error);
  }
}

const cambiarModulo = (modulo: string) => {
  moduloActivo.value = modulo;
};

const cerrarSesion = () => {
  userStore.logout();
  router.push({ name: 'Login' });
};

// Cargar estadísticas cuando se abre el dashboard
onMounted(() => {
  if (moduloActivo.value === 'dashboard') {
    cargarEstadisticas();
  }
});
</script>
