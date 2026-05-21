<template>
  <div class="bg-white min-h-screen">

    <!-- Hero interno -->
    <div class="bg-slate-950 pt-20 pb-16 sm:pb-20 relative overflow-hidden">
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(56,189,248,0.12)_0%,transparent_60%)]">
      </div>
      <div class="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <span
          class="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-sky-300 text-xs font-bold tracking-widest uppercase mb-6">
          <i class="fa-solid fa-user-doctor"></i>
          Nuestra Red
        </span>
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter leading-[0.95] text-white max-w-2xl">
          Profesionales
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-emerald-400">Adscritos</span>
        </h1>
        <p class="mt-5 text-slate-400 text-base sm:text-lg max-w-xl leading-relaxed">
          Especialistas veterinarios certificados listos para cuidar a tu mascota en todo el país.
        </p>
      </div>
    </div>

    <!-- Grid de profesionales -->
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
              <div class="h-11 bg-slate-200 rounded-2xl w-full"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Cards -->
      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="profesional in planesProfesionales" :key="profesional._id"
          class="group bg-white border border-slate-100 hover:border-slate-200 rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col">
          <div class="p-7 flex flex-col gap-5 flex-1">

            <!-- Nombre -->
            <h3 class="font-bold text-lg text-slate-900 leading-snug line-clamp-2">
              {{ profesional.name || 'Profesional sin nombre registrado' }}
            </h3>

            <!-- Especialidad -->
            <div class="flex items-start gap-3">
              <span
                class="flex items-center justify-center w-8 h-8 rounded-xl bg-sky-50 text-sky-500 text-sm shrink-0 mt-0.5">
                <i class="fa-solid fa-flask"></i>
              </span>
              <div>
                <p class="text-xs text-slate-400 mb-0.5">Especialidad</p>
                <p class="text-sm text-slate-700 font-medium">
                  {{ profesional.specialty && profesional.specialty.length
                    ? profesional.specialty.join(' · ')
                    : 'No especificada' }}
                </p>
              </div>
            </div>

            <!-- Dirección -->
            <div class="flex items-start gap-3">
              <span
                class="flex items-center justify-center w-8 h-8 rounded-xl bg-emerald-50 text-emerald-500 text-sm shrink-0 mt-0.5">
                <i class="fa-solid fa-location-dot"></i>
              </span>
              <div class="min-w-0">
                <p class="text-xs text-slate-400 mb-0.5">Dirección</p>
                <a v-if="profesional.direction && profesional.direction.length"
                  :href="`https://www.google.com/maps/search/?api=1&query=${profesional.direction.join(', ')}`"
                  target="_blank" rel="noopener noreferrer"
                  class="text-sm text-slate-700 hover:text-sky-600 transition-colors duration-200 line-clamp-2">
                  {{ profesional.direction.join(', ') }}
                </a>
                <p v-else class="text-sm text-slate-400 italic">No disponible</p>
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
                <a v-if="profesional.webs && profesional.webs.length" :href="profesional.webs[0]" target="_blank"
                  rel="noopener noreferrer"
                  class="text-sm text-sky-600 hover:text-sky-700 hover:underline font-medium break-all line-clamp-1 transition-colors duration-200">
                  {{ profesional.webs[0] }}
                </a>
                <p v-else class="text-sm text-slate-400 italic">No disponible</p>
              </div>
            </div>

            <!-- CTA -->
            <div class="mt-auto pt-5 border-t border-slate-100">
              <RouterLink :to="`/profesionales/${profesional._id}`"
                class="inline-flex items-center justify-center gap-2 w-full py-3 bg-sky-600 hover:bg-sky-700 active:scale-95 text-white text-sm font-bold rounded-2xl transition-all duration-200 group/btn">
                Ver más información
                <span class="transition-transform duration-200 group-hover/btn:translate-x-1">→</span>
              </RouterLink>
            </div>

          </div>
        </div>
      </div>
    </section>

    <!-- Sección inferior CTA -->
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
                Contamos con una amplia red de clínicas y veterinarios certificados en todo el país.
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
import { RouterLink } from 'vue-router'
import { ref, onMounted } from 'vue'
import { useHead } from '@unhead/vue'

const planesProfesionales = ref([])
const loading = ref(true)
const API_URL = import.meta.env.VITE_API_URL || 'https://backend-vetplus.onrender.com'

useHead({
  title: 'Profesionales Adscritos 👨‍⚕️ | PetSalud Colombia',
  meta: [
    { name: 'description', content: 'Conoce a nuestros veterinarios y especialistas adscritos a PetSalud. Profesionales certificados para cuidar a tu mascota.' },
    { name: 'robots', content: 'index, follow' },
    { property: 'og:title', content: 'PetSalud | Profesionales Veterinarios Adscritos' },
    { property: 'og:description', content: 'Especialistas veterinarios certificados aliados a PetSalud en todo Colombia.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:image', content: 'https://res.cloudinary.com/diro0cqpe/image/upload/v1776190583/a-veterinarian-with-fair-skin-and-short-brown-hair_14.04.2026_yqmz5z.webp' },
  ],
})

onMounted(async () => {
  try {
    const res = await fetch(`${API_URL}/api/profesionales`)
    if (res.ok) planesProfesionales.value = await res.json()
  } catch (error) {
    console.error('Error al cargar profesionales:', error)
  } finally {
    loading.value = false
  }
})
</script>