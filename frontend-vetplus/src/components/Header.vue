<template>
  <header
    class="relative z-50 bg-white border-b-2 border-gray-300 shadow-lg min-h-[60px] sm:min-h-[70px] tracking-widest">
    <div class="w-full px-3 sm:px-4 lg:px-6 py-3 sm:py-4 lg:py-6">
      <div class="mx-auto flex flex-nowrap items-center justify-between gap-4 sm:gap-6 w-full max-w-screen-xl">
        <!-- Logo -->
        <a href="/" class="flex items-center">
          <img src="https://res.cloudinary.com/diro0cqpe/image/upload/v1759439965/LogoVetPlus_mfsa9b.webp" alt="VetPlus"
            class="w-32 sm:w-40 md:w-48 lg:w-56 xl:w-[224px] h-auto" />
        </a>

        <!-- Menú lateral / Navbar -->
        <div id="collapseMenu" :class="[
          isOpen ? 'block' : 'hidden',
          // overlay oscuro solo en móvil/tablet
          'lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50'
        ]">
          <!-- Botón cerrar (solo móvil) -->
          <button id="toggleClose" @click="toggleButton"
            class="lg:hidden fixed top-12 right-8 z-[100] rounded-full bg-white w-9 h-9 flex items-center justify-center border border-gray-200"
            aria-label="Cerrar menú">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 fill-black" viewBox="0 0 320.591 320.591"
              aria-hidden="true">
              <path
                d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z" />
              <path
                d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z" />
            </svg>
          </button>

          <!-- Lista de enlaces -->
          <ul
            class="z-50 lg:flex lg:gap-x-8 xl:gap-x-10
                   max-lg:fixed max-lg:left-0 max-lg:top-0 max-lg:h-full max-lg:w-3/4 max-lg:min-w-[280px] max-lg:max-w-[350px]
                   max-lg:bg-white max-lg:p-4 sm:max-lg:p-6 max-lg:shadow-md max-lg:overflow-auto max-lg:space-y-2 sm:max-lg:space-y-3">
            <!-- Logo dentro del menú móvil -->
            <li class="mb-4 sm:mb-6 hidden max-lg:block">
              <a href="/">
                <img src="https://res.cloudinary.com/diro0cqpe/image/upload/v1759439965/LogoVetPlus_mfsa9b.webp"
                  alt="VetPlus" class="w-28 sm:w-32 lg:w-36 h-auto" />
              </a>
            </li>

            <!-- Links principales -->
            <li class="max-lg:border-b max-lg:border-gray-300 max-lg:py-2 sm:max-lg:py-3">
              <a href="/"
                class="block text-sm sm:text-[15px] font-semibold text-blue-600 hover:text-blue-700">Inicio</a>
            </li>
            <li class="max-lg:border-b max-lg:border-gray-300 max-lg:py-2 sm:max-lg:py-3">
              <a href="/VetPlus"
                class="block text-sm sm:text-[15px] font-semibold text-gray-600 hover:text-blue-700">Vetplus</a>
            </li>

            <!-- Dropdown: Planes -->
            <li class="relative group max-lg:border-b max-lg:border-gray-300 max-lg:py-3">
              <a href="#" @click.prevent="isPlanesOpen = !isPlanesOpen"
                class="block text-[15px] font-semibold text-gray-600 hover:text-blue-700">
                <span class="inline-flex items-center">
                  Planes
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                    :class="['ml-1 inline-block fill-current transition-transform duration-300', isPlanesOpen && 'max-lg:rotate-180']"
                    viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z" />
                  </svg>
                </span>
              </a>
              <ul :class="[
                'absolute -left-6 min-w-[250px] bg-white shadow-lg px-6 space-y-3 transition-all duration-500',
                'lg:top-5 max-lg:top-full max-lg:relative max-lg:left-0 max-lg:min-w-full max-lg:shadow-none max-lg:px-0 max-lg:mt-2',
                // Desktop: group-hover
                'lg:max-h-0 lg:overflow-hidden lg:opacity-0 lg:group-hover:max-h-[700px] lg:group-hover:opacity-100 lg:group-hover:pb-4 lg:group-hover:pt-6',
                // Mobile: estado controlado
                'max-lg:max-h-0 max-lg:overflow-hidden max-lg:opacity-0',
                isPlanesOpen && 'max-lg:max-h-[300px] max-lg:opacity-100 max-lg:pb-2 max-lg:pt-2'
              ]">
                <li class="border-b border-gray-300 py-2">
                  <a href="/PlanesPerro" @click="isOpen = false"
                    class="block text-[15px] font-medium text-gray-600 hover:text-blue-700">Perros</a>
                </li>
                <li class=" border-gray-300 py-2">
                  <a href="/PlanesGato" @click="isOpen = false"
                    class="block text-[15px] font-medium text-gray-600 hover:text-blue-700">Gatos</a>
                </li>
              </ul>
            </li>

            <!-- Dropdown: Nuestra Red -->
            <li class="relative group max-lg:border-b max-lg:border-gray-300 max-lg:py-3">
              <a href="/NuestraRed" @click="isNuestraRedOpen = !isNuestraRedOpen"
                class="block text-[15px] font-semibold text-gray-600 hover:text-blue-700">
                <span class="inline-flex items-center">
                  Nuestra Red
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                    :class="['ml-1 inline-block fill-current transition-transform duration-300', isNuestraRedOpen && 'max-lg:rotate-180']"
                    viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z" />
                  </svg>
                </span>
              </a>
              <ul :class="[
                'absolute -left-6 min-w-[250px] bg-white shadow-lg px-6 space-y-3 transition-all duration-500',
                'lg:top-5 max-lg:top-full max-lg:relative max-lg:left-0 max-lg:min-w-full max-lg:shadow-none max-lg:px-0 max-lg:mt-2',
                // Desktop: group-hover
                'lg:max-h-0 lg:overflow-hidden lg:opacity-0 lg:group-hover:max-h-[700px] lg:group-hover:opacity-100 lg:group-hover:pb-4 lg:group-hover:pt-6',
                // Mobile: estado controlado
                'max-lg:max-h-0 max-lg:overflow-hidden max-lg:opacity-0',
                isNuestraRedOpen && 'max-lg:max-h-[300px] max-lg:opacity-100 max-lg:pb-2 max-lg:pt-2'
              ]">
                <li class="border-b border-gray-300 py-2">
                  <a href="/ClinicasVeterinarias" @click="isNuestraRedOpen = false"
                    class="block text-[15px] font-medium text-gray-600 hover:text-blue-700">Clínicas Veterinarias</a>
                </li>
                <li class="border-b border-gray-300 py-2">
                  <a href="/ProfesionalesVet" @click="isNuestraRedOpen = false"
                    class="block text-[15px] font-medium text-gray-600 hover:text-blue-700">Profesionales adscritos</a>
                </li>
                <li class="border-gray-300 py-2">
                  <a href="/Otros" @click="isNuestraRedOpen = false"
                    class="block text-[15px] font-medium text-gray-600 hover:text-blue-700">Otros</a>
                </li>
              </ul>
            </li>

            <!-- Otros enlaces -->
            <li class="max-lg:border-b max-lg:border-gray-300 max-lg:py-3">
              <a href="/Beneficios"
                class="block text-[15px] font-semibold text-gray-600 hover:text-blue-700">Beneficios</a>
            </li>
            <li class="max-lg:border-b max-lg:border-gray-300 max-lg:py-3">
              <a href="/Afiliate" class="block text-[15px] font-semibold text-gray-600 hover:text-blue-700">Afíliate</a>
            </li>

            <!-- Teléfono dentro del menú móvil -->
            <li class="flex items-center gap-2.5 md:mt-6 xl:hidden lg:hidden">
              <svg class="size-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
              </svg>
              <span class="text-sm">(+57) 310 7850994</span>
            </li>
          </ul>
        </div>

        <!-- Teléfono visible en desktop -->
        <div class="hidden lg:flex items-center gap-2.5">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="size-6" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
          </svg>
          <span class="text-sm">(+57) 310 7850994</span>
        </div>

        <!-- Botón abrir menú (hamburguesa) -->
        <button id="toggleOpen" @click="toggleButton" class="lg:hidden" :aria-expanded="isOpen.toString()"
          aria-controls="collapseMenu" aria-label="Abrir menú">
          <svg class="h-7 w-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue';

const isOpen = ref(false)
const isPlanesOpen = ref(false)
const isNuestraRedOpen = ref(false)

function toggleButton() {
  isOpen.value = !isOpen.value
}
</script>