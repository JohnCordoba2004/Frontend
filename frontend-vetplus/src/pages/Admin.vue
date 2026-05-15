<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50 flex flex-col lg:flex-row">

    <!-- Sidebar -->
    <aside
      class="w-full lg:w-80 bg-white shadow-2xl lg:shadow-lg lg:shadow-blue-100/30 border-r border-gray-200 flex flex-col lg:sticky lg:top-0 lg:h-screen">
      <!-- Logo -->
      <div class="p-8 border-b border-gray-200 bg-gradient-to-r from-sky-50 to-blue-50">
        <div class="flex items-center gap-4">
          <div
            class="w-12 h-12 bg-gradient-to-br from-sky-500 to-blue-600 rounded-2xl flex items-center justify-center text-white text-3xl shadow-lg">
            🐾
          </div>
          <div>
            <h1 class="text-2xl font-black text-gray-900 tracking-tight">PetSalud</h1>
            <p class="text-xs font-semibold text-sky-600 -mt-0.5">Panel Admin</p>
          </div>
        </div>
      </div>

      <!-- Perfil -->
      <div class="p-6 border-b border-gray-200 bg-gradient-to-b from-gray-50 to-white">
        <div class="flex items-center gap-4">
          <div class="w-14 h-14 rounded-2xl overflow-hidden border-3 border-sky-200 shadow-md">
            <img src="https://res.cloudinary.com/diro0cqpe/image/upload/q_auto/f_auto/v1775632089/219983_kmskpd.png"
              alt="Foto de perfil del administrador" class="w-full h-full object-cover">
          </div>
          <div>
            <p class="font-bold text-gray-900">
              {{ userStore.sesion?.usuario?.nombre || 'Administrador' }}
            </p>
            <p class="text-xs text-gray-500">Bogotá, Colombia</p>
          </div>
        </div>
      </div>

      <!-- Menú -->
      <nav class="flex-1 p-6 overflow-y-auto" aria-label="Navegación principal">
        <p class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Módulos</p>
        <ul class="space-y-2">
          <li v-for="item in menuItems" :key="item.key">
            <button @click="cambiarModulo(item.key)" :class="moduloActivo === item.key
              ? 'bg-gradient-to-r from-sky-100 to-blue-50 text-sky-700 shadow-sm border-l-4 border-sky-600'
              : 'text-gray-600 hover:bg-gray-50 border-l-4 border-transparent hover:border-gray-300'"
              class="w-full flex items-center gap-4 px-6 py-3 rounded-xl text-left transition-all duration-200 font-medium text-sm"
              :aria-current="moduloActivo === item.key ? 'page' : undefined">
              <i :class="item.icon" class="text-lg w-5 flex-shrink-0"></i>
              <span>{{ item.label }}</span>
            </button>
          </li>
        </ul>
      </nav>

      <!-- Cerrar Sesión -->
      <div class="p-6 border-t border-gray-200 mt-auto bg-gradient-to-b from-white to-gray-50">
        <button @click="cerrarSesion"
          class="w-full py-3 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold rounded-xl transition-all duration-200 flex items-center justify-center gap-3 shadow-md hover:shadow-lg transform hover:scale-105">
          <i class="fa-solid fa-right-from-bracket"></i>
          Cerrar sesión
        </button>
      </div>
    </aside>

    <!-- Contenido Principal -->
    <main class="flex-1 p-6 lg:p-12 overflow-y-auto">
      <header class="mb-12">
        <div class="flex items-center justify-between mb-4">
          <div>
            <h1 class="text-4xl lg:text-5xl font-black text-gray-900 tracking-tight">{{ tituloPagina }}</h1>
            <p class="text-gray-600 mt-2 text-lg">
              Bienvenido, <span class="font-bold text-sky-600">{{ userStore.sesion?.usuario?.nombre || 'Administrador'
              }}</span>
            </p>
          </div>
        </div>
      </header>

      <!-- Dashboard -->
      <section v-if="moduloActivo === 'dashboard'" class="animate-fadeIn">
        <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 mb-12">
          <DashboardCard label="Total Afiliaciones" :value="stats.total" trend="este mes" icon="fa-solid fa-users"
            color="bg-gradient-to-br from-sky-100 to-blue-100 text-sky-600" />
          <DashboardCard label="Afiliación Directa" :value="stats.directa" trend="Completaron el formulario"
            icon="fa-solid fa-check-circle" color="bg-gradient-to-br from-emerald-100 to-green-100 text-emerald-600" />
          <DashboardCard label="Solicitudes de Asesor" :value="stats.asesor" trend="Prefirieron hablar con asesor"
            icon="fa-solid fa-headset" color="bg-gradient-to-br from-amber-100 to-orange-100 text-amber-600" />
        </div>
      </section>

      <!-- Otros Módulos -->
      <section v-else class="animate-fadeIn">
        <ProfesionalesManager v-if="moduloActivo === 'profesionales'" />
        <ClinicasManager v-else-if="moduloActivo === 'clinicas'" />
        <OtrosManager v-else-if="moduloActivo === 'otros'" />
        <PlanesManager v-else-if="moduloActivo === 'planes'" />
        <UsuariosManager v-else-if="moduloActivo === 'usuarios'" />
        <BeneficiosManager v-else-if="moduloActivo === 'beneficios'" />
      </section>
    </main>
  </div>
</template>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeIn {
  animation: fadeIn 0.3s ease-in-out;
}

/* Scroll personalizado */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #94a3b8;
}
</style>

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
