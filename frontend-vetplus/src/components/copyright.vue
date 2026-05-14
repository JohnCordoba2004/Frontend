<template>
  <footer class="bg-zinc-950 text-gray-400 py-8 border-t border-zinc-800">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="flex flex-col md:flex-row items-center justify-between gap-6">

        <!-- Derechos reservados -->
        <div class="text-center md:text-left">
          <p class="text-sm">
            &copy; {{ new Date().getFullYear() }} PetSalud Colombia.
            <span class="text-gray-500">Todos los derechos reservados.</span>
          </p>
          <p class="text-xs text-gray-500 mt-1">
            Medicina Prepagada Veterinaria
          </p>
        </div>

        <!-- Botón Ir Arriba -->
        <a href="#top"
          class="group flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-2xl transition-all duration-300 text-sm font-medium">
          Volver arriba
          <span class="text-lg transition-transform group-hover:-translate-y-1"><i
              class="fa-solid fa-arrow-up"></i></span>
        </a>

      </div>
    </div>
  </footer>
</template>

<script setup>
// No necesitamos nada por ahora
</script>