<template>
  <div class="bg-white min-h-screen">

    <!-- Hero interno -->
    <div class="bg-slate-950 pt-20 pb-16 sm:pb-20 relative overflow-hidden">
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(52,211,153,0.12)_0%,transparent_60%)]">
      </div>
      <div class="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <span
          class="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-emerald-300 text-xs font-bold tracking-widest uppercase mb-6">
          <i class="fa-solid fa-gift"></i>
          Beneficios Exclusivos
        </span>
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter leading-[0.95] text-white max-w-2xl">
          Beneficios para
          <span class="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-sky-400">Afiliados</span>
        </h1>
        <p class="mt-5 text-slate-400 text-base sm:text-lg max-w-xl leading-relaxed">
          Descuentos y ventajas especiales para ti y tu mascota por ser parte de PetSalud.
        </p>
      </div>
    </div>

    <!-- Grid de beneficios -->
    <section class="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">

      <!-- Skeleton -->
      <div v-if="loading" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="n in 3" :key="n"
          class="bg-white rounded-2xl border border-slate-100 animate-pulse flex flex-col overflow-hidden">
          <div class="h-80 bg-slate-200 w-full shrink-0"></div>
          <div class="p-8 flex flex-col gap-4 flex-1">
            <div class="h-6 bg-slate-200 rounded-xl w-3/4"></div>
            <div class="flex flex-col gap-4">
              <div v-for="i in 3" :key="i" class="flex items-center gap-3">
                <div class="w-8 h-8 rounded-xl bg-slate-200 shrink-0"></div>
                <div class="h-4 bg-slate-100 rounded w-3/4"></div>
              </div>
            </div>
            <div class="h-4 bg-slate-100 rounded w-full mt-1"></div>
            <div class="h-4 bg-slate-100 rounded w-5/6"></div>
            <div class="h-12 bg-slate-200 rounded-2xl w-full mt-auto"></div>
          </div>
        </div>
      </div>

      <!-- Cards -->
      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="benefit in beneficios" :key="benefit._id"
          class="group bg-white border border-slate-100 hover:border-slate-200 rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col">
          <!-- Imagen -->
          <div
            class="h-80  flex items-center justify-center p-6 sm:p-8 shrink-0 overflow-hidden border-b border-slate-200">
            <img :src="benefit.img" :alt="benefit.name"
              class="max-h-72 w-full object-contain group-hover:scale-110 transition-transform duration-500 drop-shadow-lg"
              @error="manejarErrorImg(benefit)" />
          </div>

          <div class="p-7 flex flex-col gap-4 flex-1">

            <!-- Nombre -->
            <h3 class="font-bold text-lg text-slate-900 leading-snug">
              {{ benefit.name }}
            </h3>

            <!-- Dirección -->
            <div class="flex items-start gap-3">
              <span
                class="flex items-center justify-center w-8 h-8 rounded-xl bg-sky-50 text-sky-500 text-sm shrink-0 mt-0.5">
                <i class="fa-solid fa-location-dot"></i>
              </span>
              <div class="min-w-0">
                <p class="text-xs text-slate-400 mb-0.5">Dirección</p>
                <a v-if="benefit.direction && benefit.direction.length"
                  :href="`https://www.google.com/maps/search/?api=1&query=${benefit.direction[0]}`" target="_blank"
                  rel="noopener noreferrer"
                  class="text-sm text-slate-700 hover:text-sky-600 transition-colors duration-200 line-clamp-2">
                  {{ benefit.direction[0] }}
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
                <p class="text-sm text-slate-700">{{ benefit.telefono.join(', ') }}</p>
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
                <a :href="benefit.web" target="_blank" rel="noopener noreferrer"
                  class="text-sm text-sky-600 hover:text-sky-700 hover:underline font-medium break-all line-clamp-1 transition-colors duration-200">
                  {{ benefit.web.join(', ') }}
                </a>
              </div>
            </div>

            <!-- Descripción -->
            <p class="text-slate-500 text-sm leading-relaxed line-clamp-3 flex-1">
              {{ benefit.desc.join(', ') }}
            </p>

            <!-- Contacto -->
            <div class="flex items-center gap-2 py-3 px-4 bg-slate-50 rounded-2xl border border-slate-100">
              <i class="fa-solid fa-address-book text-xs text-slate-400 shrink-0"></i>
              <p class="text-xs text-slate-500">
                Contacto: <span class="font-semibold text-slate-700">{{ benefit.contact.join(' · ') }}</span>
              </p>
            </div>

            <!-- CTA -->
            <RouterLink :to="`/beneficios/${benefit._id}`"
              class="inline-flex items-center justify-center gap-2 w-full py-3 bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white text-sm font-bold rounded-2xl transition-all duration-200 shadow-sm shadow-emerald-500/20 group/btn">
              Ver más detalles
              <span class="transition-transform duration-200 group-hover/btn:translate-x-1">→</span>
            </RouterLink>

          </div>
        </div>
      </div>
    </section>

    <footerInfo />
  </div>
</template>

<script setup>
import footerInfo from '../components/footerInfo.vue'
import { RouterLink } from 'vue-router'
import { ref, onMounted } from 'vue'
import { useHead } from '@unhead/vue'

const beneficios = ref([])
const loading = ref(true)
const API_URL = import.meta.env.VITE_API_URL || 'https://backend-vetplus.onrender.com'

useHead({
  title: 'Beneficios para Afiliados 🎁 | PetSalud Colombia',
  meta: [
    { name: 'description', content: 'Descubre los descuentos y ventajas exclusivas de PetSalud para afiliados. Beneficios especiales para ti y tu mascota.' },
    { property: 'og:title', content: 'PetSalud | Beneficios Exclusivos para Afiliados' },
    { property: 'og:description', content: 'Descuentos y ventajas especiales en servicios veterinarios para afiliados a PetSalud Colombia.' },
    { property: 'og:type', content: 'website' },
  ],
})

const manejarErrorImg = (item) => {
  item.img = 'https://res.cloudinary.com/diro0cqpe/image/upload/v1778818725/5E5A7522-scaled_efabdh.jpg'
}

onMounted(async () => {
  try {
    const res = await fetch(`${API_URL}/api/beneficios`)
    if (res.ok) beneficios.value = await res.json()
  } catch (error) {
    console.error('Error al cargar beneficios:', error)
  } finally {
    loading.value = false
  }
})
</script>