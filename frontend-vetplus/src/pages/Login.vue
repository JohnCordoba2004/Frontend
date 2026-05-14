<template>
  <div class="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
    <div class="max-w-md w-full">
      <!-- Card principal -->
      <div class="bg-white rounded-3xl shadow-2xl overflow-hidden">

        <!-- Header con logo -->
        <div class="bg-linear-to-r from-sky-600 to-sky-700 text-white py-14 px-10 text-center">
          <div class="mx-auto w-20 h-20 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6">
            <span class="text-5xl">🐾</span>
          </div>
          <h1 class="text-3xl font-bold tracking-tight">Bienvenido de nuevo</h1>
          <p class="text-sky-100 mt-2 text-lg">Inicia sesión para continuar</p>
        </div>

        <!-- Formulario -->
        <form @submit.prevent="login" class="p-10 space-y-8">

          <!-- Correo electrónico -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Correo electrónico</label>
            <input v-model="email" type="email" placeholder="tucorreo@email.com" required
              class="w-full px-5 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:border-sky-500 transition-all text-base">
          </div>

          <!-- Contraseña -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Contraseña</label>
            <input v-model="password" type="password" placeholder="••••••••••" required
              class="w-full px-5 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:border-sky-500 transition-all text-base">
          </div>

          <!-- Mensaje de error -->
          <p v-if="errorMsg" class="text-red-600 bg-red-50 border border-red-200 rounded-2xl px-5 py-3 text-sm">
            {{ errorMsg }}
          </p>

          <!-- Botón Iniciar Sesión -->
          <button type="submit" :disabled="loading"
            class="w-full bg-sky-600 hover:bg-sky-700 disabled:bg-sky-400 text-white font-semibold py-4 rounded-2xl transition-all text-lg shadow-lg shadow-sky-200 active:scale-[0.98]">
            {{ loading ? "Ingresando..." : "Iniciar sesión" }}
          </button>

        </form>
      </div>

      <!-- Nota de seguridad (opcional pero recomendado) -->
      <p class="text-center text-gray-500 text-xs mt-8">
        Solo el administrador puede crear nuevas cuentas
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useUserStore } from '../stores/userStore';
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");
const errorMsg = ref("");
const loading = ref(false);

const userStore = useUserStore();
const router = useRouter();
const API_URL = import.meta.env.VITE_API_URL || ['https://backend-', 'vet', 'plus.onrender.com'].join('')

async function login() {
  let timeoutId;

  try {
    errorMsg.value = "";
    loading.value = true;

    const emailLimpio = email.value.trim().toLowerCase();

    if (!emailLimpio || !password.value) {
      throw new Error("Por favor completa el correo y la contraseña");
    }

    const controller = new AbortController();
    timeoutId = window.setTimeout(() => controller.abort(), 60000);

    const respuesta = await fetch(`${API_URL}/api/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: emailLimpio,
        password: password.value
      }),
      signal: controller.signal,
    });

    const data = await respuesta.json();

    if (!respuesta.ok) {
      throw new Error(data.msg || "Credenciales incorrectas");
    }

    const rolFinal = String(data.usuario?.role ?? "").toLowerCase();

    userStore.guardarSesion({
      token: data.token,
      usuario: data.usuario?.nombre || data.usuario?.email,
      rol: rolFinal,
    });

    // Redirección según rol
    if (rolFinal.includes("admin")) {
      router.push({ name: 'Admin' });
    } else {
      router.push({ name: "Home" });
    }

  } catch (error) {
    if (error.name === "AbortError") {
      errorMsg.value = "El servidor tardó demasiado en responder. Intenta de nuevo.";
    } else {
      errorMsg.value = error.message || "No se pudo iniciar sesión";
    }
    console.error("Error en login:", error);
  } finally {
    if (timeoutId) clearTimeout(timeoutId);
    loading.value = false;
  }
}
</script>