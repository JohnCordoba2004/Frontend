<template>
  <section class="relative bg-sky-200 pt-16 sm:pt-20 lg:pt-24 pb-12 sm:pb-16 lg:pb-20 overflow-hidden"
    ref="heroSection">
    <div
      class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-8 lg:gap-10 relative z-10 transition-all duration-500 ease-out">

      <!-- Columna texto -->
      <div class="flex-1 lg:flex-[0.9] max-w-xl lg:max-w-2xl relative z-20 transition-all duration-500 delay-100">
        <div class="backdrop-blur-md bg-white/50 rounded-xl p-4 sm:p-6 lg:p-8 shadow-xl">
          <h1 ref="title"
            class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight mb-6 sm:mb-8 lg:mb-10 text-gray-900 leading-tight">
            ¡Cada mascota es única y tiene su propia personalizada!
          </h1>
          <p ref="paragraph"
            class="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-600 leading-relaxed text-balance mb-6 sm:mb-8 lg:mb-10">
            Entendemos que tienen necesidades particulares, por eso con Medicina Prepagada Veterinaria, queremos
            brindarle a tu peludito la atención oportuna y de calidad que él necesita.
          </p>
          <div ref="buttons" class="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a href="/Planes"
              class="px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-sky-600/30 to-sky-300 text-blue-900 rounded-md shadow-md hover:shadow-lg transition-all duration-300 text-sm sm:text-base font-medium text-center">
              Ver Planes
            </a>
            <a href="/Afiliate"
              class="px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-sky-300 to-sky-600/30 text-gray-700 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:bg-sky-300/40 text-sm sm:text-base font-medium flex items-center justify-center gap-2">
              Contáctanos
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                stroke="#31B8FC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="inline-block">
                <path d="M5 12h13M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <!-- Columna imagen sin degradado-->
      <div ref="imageWrapper"
        class="flex-1 lg:flex-[1.1] relative flex justify-center transition-all duration-500 delay-200">
        <img src="https://res.cloudinary.com/diro0cqpe/image/upload/v1759439965/thumbnail_perro_1_c45ff4.webp"
          alt="Mascota Feliz"
          class="w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl h-48 sm:h-64 md:h-80 lg:h-96 xl:h-[500px] object-cover rounded-xl shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-500">
      </div>
    </div>
  </section>
</template>
<script setup>
import { onMounted, ref } from 'vue';
import { gsap } from 'gsap';

const heroSection = ref(null);
const title = ref(null);
const paragraph = ref(null)
const buttons = ref(null) //Contenedor de botones
const imageWrapper = ref(null)

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        animateHero()
        observer.disconnect()
      }
    },
    { threshold: 0.2 }
  )
  if (heroSection.value) observer.observe(heroSection.value)
})

function animateHero() {
  const tl = gsap.timeline({ defaults: { duration: 0.8, ease: 'power4.out' } })

  // 1. Titulo con fade-in
  tl.from(title.value, { opacity: 0, y: 40 })

  // 2. Párrafo con fade-in
  tl.from(paragraph.value, { opacity: 0, y: 30 }, '-=0.4')

  // 3.Botones con animación suave y escalonada
  const btns = buttons.value.querySelectorAll('a')
  tl.fromTo(btns,
    { y: 30, opacity: 0, scale: 0.55, duration: 1 },
    {
      y: 0,
      opacity: 1,
      scale: 1,
      stagger: 0.1,
      duration: 0.6,
      ease: 'power2.out'
    },
    '-=0.2'
  )

  // 4. Imagen con animación suave y fluida
  tl.fromTo(imageWrapper.value,
    {
      scale: 0.88,
      duration: 0.6,
      ease: 'power1.in'
    },
    {
      scale: 1,
      duration: 0.8,
      ease: 'power1.out'
    },
    '-=0.3'
  )
}

</script>