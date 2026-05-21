<template>
  <section class="bg-slate-50 py-20 sm:py-28">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">

      <!-- Encabezado -->
      <div class="text-center mb-16">
        <span
          class="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 border border-emerald-200 px-5 py-2 rounded-full text-xs font-bold tracking-widest uppercase mb-5">
          <i class="fa-solid fa-kit-medical"></i>
          Medicina Preventiva
        </span>
        <h2 class="text-4xl sm:text-5xl font-bold text-slate-900 leading-tight">
          Planes de <span class="text-emerald-600">Medicina Preventiva</span>
        </h2>
        <p class="mt-4 text-base sm:text-lg text-slate-500 max-w-xl mx-auto leading-relaxed">
          Completa tu plan médico con cobertura preventiva para mantener a tu mascota sana todo el año.
        </p>
      </div>

      <!-- Grid principal -->
      <div class="grid lg:grid-cols-12 gap-8 items-start">

        <!-- Columna izquierda: descripción -->
        <div class="lg:col-span-4">
          <div class="bg-white rounded-3xl border border-slate-100 shadow-sm p-8 lg:p-10 flex flex-col gap-6 h-full">
            <img src="https://img.icons8.com/3d-fluency/94/veterinarian.png" alt="Medicina Preventiva Veterinaria"
              class="w-16 h-16" />
            <div>
              <h3 class="text-xl font-bold text-slate-900 mb-3">
                ¿Qué incluye el Plan Preventivo?
              </h3>
              <p class="text-slate-500 text-sm leading-relaxed">
                Agrega a tu plan médico cobertura preventiva completa: chequeos regulares,
                vacunaciones, asistencia telefónica y más servicios para el bienestar de tu mascota.
              </p>
            </div>

            <!-- Indicadores rápidos -->
            <div class="flex flex-col gap-3 mt-2">
              <div class="flex items-center gap-3">
                <span
                  class="flex items-center justify-center w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 text-sm shrink-0">
                  <i class="fa-solid fa-shield-heart"></i>
                </span>
                <span class="text-sm text-slate-600 font-medium">Cobertura todo el año</span>
              </div>
              <div class="flex items-center gap-3">
                <span
                  class="flex items-center justify-center w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 text-sm shrink-0">
                  <i class="fa-solid fa-phone"></i>
                </span>
                <span class="text-sm text-slate-600 font-medium">Asistencia telefónica 24/7</span>
              </div>
              <div class="flex items-center gap-3">
                <span
                  class="flex items-center justify-center w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 text-sm shrink-0">
                  <i class="fa-solid fa-syringe"></i>
                </span>
                <span class="text-sm text-slate-600 font-medium">Vacunación y desparasitación</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Columna derecha: tabla comparativa -->
        <div class="lg:col-span-8 flex flex-col gap-4">

          <!-- Cabecera de planes (desktop) -->
          <div class="hidden lg:grid grid-cols-12 gap-0 px-6">
            <div class="col-span-6"></div>
            <!-- Premium header -->
            <div class="col-span-3 flex flex-col items-center gap-1">
              <span class="text-xs font-bold tracking-widest text-emerald-600 uppercase">Premium</span>
              <span class="text-xs text-slate-400">Todo incluido</span>
            </div>
            <!-- Básico header -->
            <div class="col-span-3 flex flex-col items-center gap-1">
              <span class="text-xs font-bold tracking-widest text-slate-500 uppercase">Básico</span>
              <span class="text-xs text-slate-400">Esencial</span>
            </div>
          </div>

          <!-- Filas de servicios -->
          <div class="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
            <div v-for="(item, i) in servicios" :key="i" :class="[
              'grid grid-cols-12 items-center px-6 py-4 transition-colors duration-150 hover:bg-slate-50',
              i !== servicios.length - 1 ? 'border-b border-slate-100' : ''
            ]">
              <!-- Nombre del servicio -->
              <div class="col-span-6 flex items-center gap-3">
                <span class="text-base shrink-0">{{ item.icono }}</span>
                <span class="text-sm font-medium text-slate-700">{{ item.nombre }}</span>
              </div>

              <!-- Premium: siempre sí -->
              <div class="col-span-3 flex justify-center">
                <span
                  class="flex items-center justify-center w-7 h-7 rounded-full bg-emerald-100 text-emerald-600 text-xs font-bold">
                  ✓
                </span>
              </div>

              <!-- Básico: condicional -->
              <div class="col-span-3 flex justify-center">
                <span v-if="item.basico"
                  class="flex items-center justify-center w-7 h-7 rounded-full bg-emerald-100 text-emerald-600 text-xs font-bold">✓</span>
                <span v-else
                  class="flex items-center justify-center w-7 h-7 rounded-full bg-slate-100 text-slate-300 text-base leading-none font-light">–</span>
              </div>
            </div>
          </div>

          <!-- Leyenda cabecera mobile -->
          <div class="lg:hidden flex justify-end gap-6 px-2 -mt-1">
            <div class="flex items-center gap-1.5">
              <span class="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
              <span class="text-xs text-slate-500 font-medium">Premium</span>
            </div>
            <div class="flex items-center gap-1.5">
              <span class="w-2.5 h-2.5 rounded-full bg-slate-300"></span>
              <span class="text-xs text-slate-500 font-medium">Básico</span>
            </div>
          </div>

          <!-- Nota al pie -->
          <p class="text-xs text-slate-400 text-center italic px-2">
            * Todos los servicios están sujetos al plan médico seleccionado
          </p>

        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const servicios = [
  { nombre: 'Valoraciones Preventivas', icono: '🩺', basico: true },
  { nombre: 'Vacunación', icono: '💉', basico: true },
  { nombre: 'Desparasitación', icono: '🐛', basico: true },
  { nombre: 'Asistencia Telefónica 24/7', icono: '📞', basico: true },
  { nombre: 'Esterilización', icono: '✂️', basico: false },
  { nombre: 'Auxilio Funerario', icono: '🕊️', basico: false },
  { nombre: 'Odontología Preventiva', icono: '🦷', basico: false },
]
</script>