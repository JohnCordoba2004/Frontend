<template>
  <div class="bg-slate-50 min-h-screen">
    <main class="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-20">

      <!-- Skeleton loading -->
      <div v-if="loading" class="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden animate-pulse">
        <div class="h-52 bg-slate-200 w-full"></div>
        <div class="p-10 lg:p-16 flex flex-col gap-8">
          <div class="h-10 bg-slate-200 rounded-xl w-2/3 mx-auto"></div>
          <div class="flex flex-col gap-3 max-w-2xl mx-auto w-full">
            <div class="h-4 bg-slate-100 rounded w-full"></div>
            <div class="h-4 bg-slate-100 rounded w-5/6"></div>
            <div class="h-4 bg-slate-100 rounded w-4/6"></div>
          </div>
          <div class="grid md:grid-cols-2 gap-4 mt-4">
            <div v-for="i in 4" :key="i" class="h-16 bg-slate-100 rounded-2xl"></div>
          </div>
          <div class="h-36 bg-slate-100 rounded-3xl mt-4"></div>
        </div>
      </div>

      <!-- Error -->
      <div v-else-if="error" class="flex flex-col items-center justify-center py-32 gap-6 text-center">
        <div class="w-20 h-20 bg-red-50 rounded-3xl flex items-center justify-center text-4xl">😿</div>
        <div>
          <h2 class="text-xl font-bold text-slate-900 mb-2">Algo salió mal</h2>
          <p class="text-slate-500 text-sm">{{ error }}</p>
        </div>
        <button @click="() => window.location.reload()"
          class="inline-flex items-center gap-2 px-7 py-3.5 bg-sky-600 hover:bg-sky-700 active:scale-95 text-white text-sm font-bold rounded-2xl transition-all duration-200">
          <i class="fa-solid fa-rotate-right"></i>
          Intentar nuevamente
        </button>
      </div>

      <!-- Contenido del plan -->
      <div v-else class="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">

        <!-- Header -->
        <div class="bg-slate-950 relative overflow-hidden py-16 px-8 lg:px-14 text-center">
          <div
            class="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(56,189,248,0.15)_0%,transparent_60%)]">
          </div>
          <div class="relative z-10">
            <span
              class="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full text-sky-300 text-xs font-bold tracking-widest uppercase mb-5">
              <i class="fa-solid fa-paw"></i>
              Plan PetSalud
            </span>
            <h1 class="text-4xl lg:text-5xl font-black tracking-tighter text-white leading-tight">
              {{ plan.name }}
            </h1>
          </div>
        </div>

        <div class="p-8 lg:p-14 flex flex-col gap-12">

          <!-- Imagen -->
          <div v-if="plan.img" class="flex justify-center">
            <img :src="plan.img" :alt="plan.name"
              class="max-w-xl w-full rounded-3xl shadow-lg border border-slate-100 object-cover" />
          </div>

          <!-- Descripción -->
          <div class="max-w-3xl mx-auto text-center flex flex-col gap-4">
            <p class="text-slate-600 text-base sm:text-lg leading-relaxed">{{ plan.desc }}</p>
            <p v-if="plan.descName" class="text-slate-500 text-sm leading-relaxed italic">{{ plan.descName }}</p>
          </div>

          <!-- Beneficios -->
          <div v-if="plan.benefits && plan.benefits.length" class="flex flex-col gap-6">
            <div class="text-center">
              <h3 class="text-2xl font-bold text-slate-900">¿Qué incluye este plan?</h3>
              <p class="text-slate-400 text-sm mt-1">Todo lo que necesita tu mascota en un solo plan</p>
            </div>
            <ul class="grid md:grid-cols-2 gap-4">
              <li v-for="(beneficio, index) in plan.benefits" :key="index"
                class="flex items-start gap-3 bg-slate-50 border border-slate-100 hover:border-emerald-200 hover:bg-emerald-50/40 rounded-2xl px-5 py-4 transition-colors duration-200">
                <span
                  class="flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 text-xs font-bold shrink-0 mt-0.5">✓</span>
                <span class="text-slate-700 text-sm leading-relaxed">{{ beneficio }}</span>
              </li>
            </ul>
          </div>

          <!-- Precio -->
          <div v-if="plan.price"
            class="bg-slate-50 border border-slate-200 rounded-3xl p-10 lg:p-12 text-center flex flex-col gap-3">
            <p class="text-xs font-bold tracking-widest uppercase text-slate-400">Valor mensual</p>
            <p class="text-5xl sm:text-6xl font-black text-slate-900 tracking-tighter">
              ${{ plan.price.toLocaleString('es-CO') }}
              <span class="text-2xl font-normal text-slate-400">/ mes</span>
            </p>
            <p v-if="plan.descPrice" class="text-sky-600 text-sm font-medium mt-1">{{ plan.descPrice }}</p>
            <RouterLink to="/Afiliate"
              class="inline-flex items-center justify-center gap-2 self-center mt-4 px-8 py-4 bg-sky-600 hover:bg-sky-700 active:scale-95 text-white font-bold rounded-2xl transition-all duration-200 shadow-md shadow-sky-500/20 group">
              Afiliarme a este plan
              <span class="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </RouterLink>
          </div>

          <!-- Medicina Preventiva -->
          <MedicinaPreventiva />

        </div>
      </div>
    </main>

    <!-- CTA inferior -->
    <section class="bg-slate-100 border-t border-slate-200 py-16">
      <div class="max-w-5xl mx-auto px-6 lg:px-8">
        <div class="grid md:grid-cols-2 gap-6">

          <div class="bg-slate-950 rounded-3xl p-8 flex flex-col gap-5 relative overflow-hidden border border-white/5">
            <div
              class="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(56,189,248,0.1)_0%,transparent_70%)]">
            </div>
            <div class="relative z-10 flex flex-col gap-5">
              <div class="w-12 h-12 bg-emerald-500/20 rounded-2xl flex items-center justify-center text-2xl">🐾</div>
              <div>
                <h2 class="text-xl font-bold text-white mb-2">¿Quieres afiliarte?</h2>
                <p class="text-slate-400 text-sm leading-relaxed">
                  Descubre lo fácil que es proteger la salud de tu mascota con PetSalud.
                </p>
              </div>
              <RouterLink to="/Afiliate"
                class="inline-flex items-center justify-center gap-2 w-full py-3.5 bg-sky-500 hover:bg-sky-400 active:scale-95 text-white text-sm font-bold rounded-2xl transition-all duration-200 shadow-lg shadow-sky-500/20 group">
                Afíliate ahora
                <span class="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </RouterLink>
            </div>
          </div>

          <div class="bg-white border border-slate-100 rounded-3xl p-8 flex flex-col gap-5">
            <div class="w-12 h-12 bg-sky-50 rounded-2xl flex items-center justify-center text-2xl">📍</div>
            <div>
              <h2 class="text-xl font-bold text-slate-900 mb-2">Nuestra red</h2>
              <p class="text-slate-500 text-sm leading-relaxed">
                Contamos con una amplia red de clínicas y veterinarios certificados en todo el país.
              </p>
            </div>
            <RouterLink to="/NuestraRed"
              class="inline-flex items-center justify-center gap-2 w-full py-3.5 bg-slate-900 hover:bg-slate-700 active:scale-95 text-white text-sm font-bold rounded-2xl transition-all duration-200 group">
              Ver clínicas disponibles
              <span class="transition-transform duration-200 group-hover:translate-x-1">
                <i class="fa-solid fa-arrow-right"></i>
              </span>
            </RouterLink>
          </div>

        </div>
      </div>
    </section>

    <!-- <Copyright /> -->
    <FooterInfo />
  </div>
</template>

<script setup>
import MedicinaPreventiva from '../components/MedicinaPreventiva.vue'
// import Copyright from '../components/copyright.vue'
import FooterInfo from '../components/footerInfo.vue';
import { ref, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useHead } from '@unhead/vue'
import { RouterLink } from 'vue-router';

const route = useRoute()
const plan = ref(null)
const loading = ref(true)
const error = ref(null)
const API_URL = import.meta.env.VITE_API_URL || ['https://backend-', 'vet', 'plus.onrender.com'].join('')

useHead({
  title: computed(() => plan.value ? `${plan.value.name} | PetSalud Colombia` : 'Plan | PetSalud Colombia'),
  meta: [
    { name: 'description', content: computed(() => plan.value?.desc || 'Planes de medicina prepagada veterinaria para tu mascota.') },
    { property: 'og:type', content: 'website' },
  ],
})

onMounted(async () => {
  try {
    const res = await fetch(`${API_URL}/api/planes/${route.params.id}`)
    if (!res.ok) throw new Error('Plan no encontrado')
    plan.value = await res.json()
  } catch (err) {
    error.value = 'No se pudo cargar el plan. Por favor intenta más tarde.'
    console.error(err)
  } finally {
    loading.value = false
  }
})
</script>