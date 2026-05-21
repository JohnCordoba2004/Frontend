<template>
  <footer role="contentinfo" aria-label="Pie de página PetSalud Colombia"
    class="bg-zinc-950 text-zinc-400 relative overflow-hidden">

    <!-- Línea decorativa superior -->
    <div aria-hidden="true" class="h-px w-full"
      style="background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.06) 20%, #22c55e 50%, rgba(255,255,255,0.06) 80%, transparent 100%)">
    </div>

    <!-- Grid principal -->
    <div class="max-w-6xl mx-auto px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

      <!-- Columna 1: Marca -->
      <div class="lg:col-span-1">
        <strong class="flex items-center gap-2 text-xl font-bold text-zinc-100 tracking-tight not-italic">
          <span aria-hidden="true" class="text-2xl leading-none">🐾</span>
          PetSalud <em class="text-green-400 not-italic">Colombia</em>
        </strong>
        <p class="mt-3 text-sm text-zinc-500 leading-relaxed max-w-xs">
          Medicina Prepagada Veterinaria — cuidamos a quienes más quieres.
        </p>
      </div>

      <!-- Columna 2: Contacto -->
      <nav aria-label="Contacto y redes sociales">
        <ul class="flex flex-col gap-3">
          <li>
            <a href="mailto:contacto@petsaludcolombia.com" rel="noopener" aria-label="Enviar correo a PetSalud Colombia"
              class="flex items-center gap-2 text-sm text-zinc-400 hover:text-green-400 transition-colors duration-200">
              <span aria-hidden="true" class="text-base opacity-70">✉</span>
              contacto@petsaludcolombia.com
            </a>
          </li>
          <li>
            <a href="tel:+576012345678" rel="noopener" aria-label="Llamar a PetSalud Colombia"
              class="flex items-center gap-2 text-sm text-zinc-400 hover:text-green-400 transition-colors duration-200">
              <span aria-hidden="true" class="text-base opacity-70">📞</span>
              (601) 234-5678
            </a>
          </li>
          <li>
            <a href="https://instagram.com/petsaludcolombia" target="_blank" rel="noopener noreferrer"
              aria-label="Síguenos en Instagram"
              class="flex items-center gap-2 text-sm text-zinc-400 hover:text-green-400 transition-colors duration-200">
              <span aria-hidden="true" class="text-base opacity-70">📷</span>
              @petsaludcolombia
            </a>
          </li>
        </ul>
      </nav>

      <!-- Columna 3: Legal + botón arriba -->
      <div class="flex flex-col gap-4 items-center">
        <nav aria-label="Compromiso" class="flex flex-col gap-2">
          <a href="/Compromiso"
            class="text-xs text-zinc-400 hover:text-zinc-200 transition-colors duration-200 pl-4 relative group">
            <span
              class="absolute left-0 top-1/2 -translate-y-1/2 text-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-xs">
              <i class="fa-solid fa-arrow-right"></i>
            </span>
            Sobre Nosotros
          </a>
          <a href="/ProfesionalesVet"
            class="text-xs text-zinc-400 hover:text-zinc-200 transition-colors duration-200 pl-4 relative group">
            <span
              class="absolute left-0 top-1/2 -translate-y-1/2 text-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-xs">
              <i class="fa-solid fa-arrow-right"></i>
            </span>
            Medicos veterinarios
          </a>
          <a href="/Planes"
            class="text-xs text-zinc-400 hover:text-zinc-200 transition-colors duration-200 pl-4 relative group">
            <span
              class="absolute left-0 top-1/2 -translate-y-1/2 text-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-xs">
              <i class="fa-solid fa-arrow-right"></i>
            </span>
            Planes
          </a>
          <a href="/Afiliate"
            class="text-xs text-zinc-400 hover:text-zinc-200 transition-colors duration-200 pl-4 relative group">
            <span
              class="absolute left-0 top-1/2 -translate-y-1/2 text-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-xs">
              <i class="fa-solid fa-arrow-right"></i>
            </span>
            Afiliate
          </a>
        </nav>

        <a href="#top" aria-label="Volver al inicio de la página"
          class="group inline-flex items-center gap-2 px-4 py-2 rounded-full text-green-400 text-xs font-medium border border-green-400/25 bg-green-400/10 hover:bg-green-400/20 hover:border-green-400/50 hover:-translate-y-0.5 transition-all duration-200">
          <span aria-hidden="true"
            class="text-base leading-none group-hover:-translate-y-0.5 transition-transform duration-200">
            <i class="fa-solid fa-arrow-up"></i>
          </span>
          Volver arriba
        </a>
      </div>

    </div>

    <!-- Copyright -->
    <div class="border-t border-zinc-800/60 px-6 py-4">
      <p class="text-center text-xs text-zinc-600 flex flex-wrap justify-center items-center gap-1">
        <span>© {{ currentYear }} PetSalud Colombia.</span>
        <span aria-hidden="true" class="opacity-40">·</span>
        <span>Todos los derechos reservados.</span>
        <span aria-hidden="true" class="opacity-40">·</span>
        <span>Bogotá, Colombia</span>
      </p>
    </div>

  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear()
</script>