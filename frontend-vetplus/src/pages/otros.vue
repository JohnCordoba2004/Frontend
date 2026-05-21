<template>
  <div class="bg-white min-h-screen">

    <!-- Hero interno -->
    <div class="bg-slate-950 pt-20 pb-16 sm:pb-20 relative overflow-hidden">
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(56,189,248,0.12)_0%,transparent_60%)]">
      </div>
      <div class="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <span
          class="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-sky-300 text-xs font-bold tracking-widest uppercase mb-6">
          <i class="fa-solid fa-grid-2"></i>
          Nuestra Red
        </span>
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter leading-[0.95] text-white max-w-2xl">
          Otros
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-emerald-400">Servicios</span>
        </h1>
        <p class="mt-5 text-slate-400 text-base sm:text-lg max-w-xl leading-relaxed">
          Servicios adicionales y aliados estratégicos de PetSalud en todo el país.
        </p>
      </div>
    </div>

    <!-- Grid -->
    <section class="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">

      <!-- Skeleton -->
      <div v-if="loading" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="n in 6" :key="n" class="bg-white rounded-3xl border border-slate-100 animate-pulse flex flex-col">
          <div class="p-7 flex flex-col gap-5 flex-1">
            <div class="h-6 bg-slate-200 rounded-xl w-3/4"></div>
            <div class="flex flex-col gap-4">
              <div v-for="i in 3" :key="i" class="flex items-start gap-3">
                <div class="w-8 h-8 rounded-xl bg-slate-200 shrink-0"></div>
                <div class="flex flex-col gap-1.5 flex-1">
                  <div class="h-3 bg-slate-100 rounded w-1/4"></div>
                  <div class="h-4 bg-slate-200 rounded w-3/4"></div>
                </div>
              </div>
            </div>
            <div class="mt-auto pt-5 border-t border-slate-100">
              <div class="h-9 bg-slate-200 rounded-full w-2/5"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Cards -->
      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="otro in otrosRaw" :key="otro._id"
          class="group bg-white border border-slate-100 hover:border-slate-200 rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col">
          <div class="p-7 flex flex-col gap-5 flex-1">

            <!-- Nombre -->
            <h3 class="font-bold text-lg text-slate-900 leading-snug line-clamp-2">
              {{ otro.name || 'Servicio sin nombre registrado' }}
            </h3>

            <!-- Dirección -->
            <div class="flex items-start gap-3">
              <span
                class="flex items-center justify-center w-8 h-8 rounded-xl bg-sky-50 text-sky-500 text-sm shrink-0 mt-0.5">
                <i class="fa-solid fa-location-dot"></i>
              </span>
              <div class="min-w-0">
                <p class="text-xs text-slate-400 mb-0.5">Dirección</p>
                <a v-if="otro.direction && otro.direction.length"
                  :href="`https://www.google.com/maps/search/?api=1&query=${otro.direction[0]} ${otro.city}`"
                  target="_blank" rel="noopener noreferrer"
                  class="text-sm text-slate-700 hover:text-sky-600 transition-colors duration-200 line-clamp-2">
                  {{ otro.direction[0] }}
                </a>
                <p v-else class="text-sm text-slate-400 italic">No disponible</p>
              </div>
            </div>

            <!-- Teléfono -->
            <div class="flex items-start gap-3">
              <span
                class="flex items-center justify-center w-8 h-8 rounded-xl bg-emerald-50 text-emerald-500 text-sm shrink-0 mt-0.5">
                <i class="fa-solid fa-phone"></i>
              </span>
              <div>
                <p class="text-xs text-slate-400 mb-0.5">Teléfono</p>
                <p class="text-sm text-slate-700">
                  {{ otro.phone && otro.phone.length ? otro.phone.join(' · ') : 'No disponible' }}
                </p>
              </div>
            </div>

            <!-- Sitio web -->
            <div class="flex items-start gap-3">
              <span
                class="flex items-center justify-center w-8 h-8 rounded-xl bg-violet-50 text-violet-500 text-sm shrink-0 mt-0.5">
                <i class="fa-solid fa-globe"></i>
              </span>
              <div class="min-w-0">
                <p class="text-xs text-slate-400 mb-0.5">Sitio web</p>
                <a v-if="otro.webs && otro.webs.length" :href="otro.webs[0]" target="_blank" rel="noopener noreferrer"
                  class="text-sm text-sky-600 hover:text-sky-700 hover:underline font-medium break-all line-clamp-1 transition-colors duration-200">
                  {{ otro.webs[0] }}
                </a>
                <p v-else class="text-sm text-slate-400 italic">No disponible</p>
              </div>
            </div>

            <!-- Ciudad -->
            <div class="mt-auto pt-5 border-t border-slate-100">
              <span
                class="inline-flex items-center gap-1.5 bg-sky-50 text-sky-700 border border-sky-100 px-4 py-2 rounded-full text-xs font-semibold">
                <i class="fa-solid fa-map-pin text-xs"></i>
                {{ otro.city && otro.city.length ? otro.city.join(' · ') : 'Ciudad no especificada' }}
              </span>
            </div>

          </div>
        </div>
      </div>
    </section>

    <!-- CTA inferior -->
    <section class="bg-slate-50 border-t border-slate-100 py-16">
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
              <h2 class="text-xl font-bold text-slate-900 mb-2">Nuestra red completa</h2>
              <p class="text-slate-500 text-sm leading-relaxed">
                Contamos con una amplia red de clínicas y profesionales en todo el país.
              </p>
            </div>
            <RouterLink to="/NuestraRed"
              class="inline-flex items-center justify-center gap-2 w-full py-3.5 bg-slate-900 hover:bg-slate-700 active:scale-95 text-white text-sm font-bold rounded-2xl transition-all duration-200 group">
              Ver toda la red
              <span class="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </RouterLink>
          </div>

        </div>
      </div>
    </section>

    <!-- <Copyright /> -->
    <footerInfo />
  </div>
</template>

<script setup>
// import Copyright from '../components/copyright.vue'
import footerInfo from '../components/footerInfo.vue'
import { ref, onMounted } from 'vue'
import { useHead } from '@unhead/vue'
import { RouterLink } from 'vue-router'

const otrosRaw = ref([])
const loading = ref(true)
const API_URL = import.meta.env.VITE_API_URL || ['https://backend-', 'vet', 'plus.onrender.com'].join('')

useHead({
  title: 'Otros Servicios ➕ | PetSalud Colombia',
  meta: [
    { name: 'description', content: 'Servicios adicionales y aliados estratégicos de PetSalud en todo Colombia. Laboratorios, farmacias y más.' },
    { property: 'og:title', content: 'PetSalud | Otros Servicios Aliados' },
    { property: 'og:description', content: 'Aliados estratégicos y servicios complementarios de PetSalud en todo el país.' },
    { property: 'og:type', content: 'website' },
  ],
})

onMounted(async () => {
  try {
    const res = await fetch(`${API_URL}/api/otros`)
    if (res.ok) otrosRaw.value = await res.json()
  } catch (error) {
    console.error('Error al cargar otros servicios:', error)
  } finally {
    loading.value = false
  }
})
</script>