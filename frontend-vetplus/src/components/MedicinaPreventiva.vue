<template>
  <section class="bg-white py-16 sm:py-20 lg:py-24">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">

      <!-- Título de sección -->
      <div class="text-center mb-12">
        <div
          class="inline-flex items-center gap-3 bg-sky-100 text-sky-700 px-6 py-2 rounded-full text-sm font-medium mb-4">
          <i class="fa-solid fa-kit-medical"></i>
          MEDICINA PREVENTIVA
        </div>
        <h2 class="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
          Planes de Medicina Preventiva
        </h2>
        <p class="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Completa tu plan médico con cobertura preventiva para mantener a tu mascota sana todo el año.
        </p>
      </div>

      <div class="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">

        <!-- Columna izquierda - Descripción -->
        <div class="lg:col-span-5">
          <div class="bg-gray-50 rounded-3xl p-8 lg:p-10 h-full">
            <img src="https://img.icons8.com/3d-fluency/94/veterinarian.png"
              alt="PetSalud Preventivo" class="w-20 h-20 mb-6">
            <h3 class="text-2xl font-semibold text-gray-900 mb-4">
              ¿Qué incluye el Plan Preventivo?
            </h3>
            <p class="text-gray-600 leading-relaxed">
              Agrega a tu plan médico una cobertura preventiva completa con chequeos regulares,
              vacunaciones, asistencia telefónica y más servicios para cuidar la salud de tu mascota.
            </p>
          </div>
        </div>

        <!-- Columna derecha - Comparativa -->
        <div class="lg:col-span-7">
          <!-- Desktop Table -->
          <div class="hidden lg:block bg-white rounded-3xl shadow overflow-hidden">
            <table class="w-full">
              <thead class="bg-gray-50">
                <tr>
                  <th class="p-6 text-left font-semibold text-gray-900">Servicio</th>
                  <th class="p-6 text-center font-semibold text-emerald-600">PREMIUM</th>
                  <th class="p-6 text-center font-semibold text-gray-600">BÁSICO</th>
                </tr>
              </thead>
              <tbody class="divide-y">
                <tr v-for="(item, i) in servicios" :key="i" class="hover:bg-gray-50">
                  <td class="p-6 font-medium text-gray-700">{{ item.nombre }}</td>
                  <td class="p-6 text-center text-2xl text-emerald-500">✔</td>
                  <td class="p-6 text-center">
                    <span v-if="item.basico" class="text-2xl text-emerald-500">✔</span>
                    <span v-else class="text-3xl text-gray-300">–</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- Mobile Cards -->
          <div class="lg:hidden space-y-6">
            <!-- Premium -->
            <div class="bg-white rounded-3xl shadow p-6">
              <h3 class="font-bold text-xl text-emerald-600 mb-6">PLAN PREMIUM</h3>
              <ul class="space-y-4">
                <li v-for="(item, i) in servicios" :key="i" class="flex items-center gap-3">
                  <span class="text-emerald-500 text-xl">✔</span>
                  <span class="text-gray-700">{{ item.nombre }}</span>
                </li>
              </ul>
            </div>

            <!-- Básico -->
            <div class="bg-white rounded-3xl shadow p-6">
              <h3 class="font-bold text-xl text-gray-600 mb-6">PLAN BÁSICO</h3>
              <ul class="space-y-4">
                <li v-for="(item, i) in servicios" :key="i" class="flex items-center gap-3"
                  :class="{ 'opacity-40': !item.basico }">
                  <span class="text-emerald-500 text-xl" v-if="item.basico">✔</span>
                  <span class="text-gray-400 text-2xl" v-else>–</span>
                  <span class="text-gray-700">{{ item.nombre }}</span>
                </li>
              </ul>
            </div>
          </div>

          <p class="text-xs text-gray-500 text-center mt-6 italic">
            * Todos los servicios están sujetos al plan médico seleccionado
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  containerClass: {
    type: String,
    default: ''
  }
})

// Lista centralizada de servicios (más fácil de mantener)
const servicios = [
  { nombre: 'Valoraciones Preventivas', basico: true },
  { nombre: 'Vacunación', basico: true },
  { nombre: 'Desparasitación', basico: true },
  { nombre: 'Asistencia Telefónica 24/7', basico: true },
  { nombre: 'Esterilización', basico: false },
  { nombre: 'Auxilio Funerario', basico: false },
  { nombre: 'Odontología Preventiva', basico: false }
]
</script>
