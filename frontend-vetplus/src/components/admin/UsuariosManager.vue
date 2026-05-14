<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useUserStore } from "../../stores/userStore";

const userStore = useUserStore();

// 🧠 FORM
const name = ref("");
const email = ref("");
const password = ref("");
const role = ref("user");

// 📋 LISTA DE USUARIOS
const usuarios = ref < any[] > ([]);

const API_URL = import.meta.env.VITE_API_URL || ['https://backend-', 'vet', 'plus.onrender.com'].join('')

// 🔄 CARGAR USUARIOS
const cargarUsuarios = async () => {
  try {
    const res = await fetch(`${API_URL}/api/users`, {
      headers: {
        Authorization: `Bearer ${userStore.sesion.token}`,
      },
    });

    const data = await res.json();

    if (!res.ok) throw new Error(data.error);

    usuarios.value = data;
  } catch (error) {
    console.error(error);
  }
};

// ➕ CREAR USUARIO
const crearUsuario = async () => {
  console.log("TOKEN:", userStore.sesion.token);
  try {
    const res = await fetch(`${API_URL}/api/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userStore.sesion.token}`,
      },
      body: JSON.stringify({
        name: name.value,
        email: email.value,
        password: password.value,
        role: role.value,
      }),
    });

    const data = await res.json();

    if (!res.ok) throw new Error(data.error);

    alert("Usuario creado 🔥");

    // limpiar form
    name.value = "";
    email.value = "";
    password.value = "";
    role.value = "user";

    // recargar lista
    cargarUsuarios();
  } catch (error) {
    console.error(error);
    alert("Error creando usuario");
  }
};

// ❌ ELIMINAR USUARIO
const eliminarUsuario = async (id: string) => {
  try {
    const res = await fetch(`${API_URL}/api/users/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${userStore.sesion.token}`,
      },
    });

    const data = await res.json();

    if (!res.ok) throw new Error(data.error);

    cargarUsuarios();
  } catch (error) {
    console.error(error);
    alert("Error eliminando usuario");
  }
};

// 🚀 AL CARGAR
onMounted(() => {
  console.log('TOKEN AL MONTAR:', userStore.sesion.token)
  cargarUsuarios();
});
</script>

<template>
  <div class="p-6 lg:p-10">
    <div class="max-w-6xl mx-auto">
      <!-- Header -->
      <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-10">
        <div>
          <h2 class="text-3xl font-bold text-gray-900">Gestión de Usuarios</h2>
          <p class="text-gray-600 mt-1">Crea y administra las cuentas de usuario del sistema</p>
        </div>
      </div>

      <!-- Formulario Crear Usuario -->
      <div class="bg-white rounded-3xl shadow p-8 mb-12">
        <h3 class="text-xl font-semibold text-gray-800 mb-6">Crear Nuevo Usuario</h3>

        <div class="grid md:grid-cols-2 gap-6">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Nombre Completo</label>
            <input v-model="name" type="text" placeholder="Juan Pérez"
              class="w-full px-5 py-4 border border-gray-300 rounded-2xl focus:border-sky-500 outline-none transition">
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Correo Electrónico</label>
            <input v-model="email" type="email" placeholder="usuario@email.com"
              class="w-full px-5 py-4 border border-gray-300 rounded-2xl focus:border-sky-500 outline-none transition">
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Contraseña</label>
            <input v-model="password" type="password" placeholder="••••••••"
              class="w-full px-5 py-4 border border-gray-300 rounded-2xl focus:border-sky-500 outline-none transition">
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Rol</label>
            <select v-model="role"
              class="w-full px-5 py-4 border border-gray-300 rounded-2xl focus:border-sky-500 outline-none transition bg-white">
              <option value="user">Usuario Normal</option>
              <option value="admin">Administrador</option>
            </select>
          </div>
        </div>

        <button @click="crearUsuario"
          class="mt-8 w-full md:w-auto px-10 py-4 bg-sky-600 hover:bg-sky-700 text-white font-semibold rounded-2xl transition-all">
          Crear Usuario
        </button>
      </div>

      <!-- Listado de Usuarios -->
      <div class="bg-white rounded-3xl shadow overflow-hidden">
        <div class="p-8 border-b flex items-center justify-between">
          <h3 class="text-xl font-semibold text-gray-800">Usuarios Registrados</h3>
          <span class="text-sm text-gray-500">{{ usuarios.length }} usuarios</span>
        </div>

        <div class="overflow-x-auto">
          <table class="w-full min-w-full">
            <thead>
              <tr class="border-b bg-gray-50">
                <th class="px-8 py-5 text-left font-medium text-gray-600">Nombre</th>
                <th class="px-8 py-5 text-left font-medium text-gray-600">Correo</th>
                <th class="px-8 py-5 text-left font-medium text-gray-600">Rol</th>
                <th class="px-8 py-5 text-center font-medium text-gray-600">Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="user in usuarios" :key="user.uid" class="border-b hover:bg-gray-50 transition">
                <td class="px-8 py-6 font-medium text-gray-900">{{ user.name }}</td>
                <td class="px-8 py-6 text-gray-600">{{ user.email }}</td>
                <td class="px-8 py-6">
                  <span class="inline-block px-4 py-1 text-xs font-semibold rounded-full"
                    :class="user.role === 'admin' ? 'bg-red-100 text-red-700' : 'bg-emerald-100 text-emerald-700'">
                    {{ user.role === 'admin' ? 'Administrador' : 'Usuario' }}
                  </span>
                </td>
                <td class="px-8 py-6 text-center">
                  <button @click="eliminarUsuario(user.uid)"
                    class="px-5 py-2 text-red-600 hover:bg-red-50 rounded-xl transition">
                    Eliminar
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div v-if="!usuarios.length" class="text-center py-20 text-gray-500">
          No hay usuarios registrados aún.
        </div>
      </div>
    </div>
  </div>
</template>