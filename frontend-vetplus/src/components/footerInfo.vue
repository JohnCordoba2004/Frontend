<template>
  <footer class="bg-gray-900 text-gray-300 py-16">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">

        <!-- Columna 1: Sobre PetSalud -->
        <div class="lg:col-span-5">
          <h2 class="text-white text-2xl font-bold mb-4">PetSalud Colombia</h2>
          <p class="text-gray-400 leading-relaxed text-[15px]">
            Despreocúpese de altos gastos médicos para su mascota. Con <strong class="text-white">PetSalud</strong>
            usted tendrá cobertura total en medicina preventiva, atención y tratamiento de urgencias,
            enfermedades y accidentes, además de asistencia telefónica 24 horas.
          </p>

          <!-- Redes sociales -->
          <div class="flex gap-5 mt-8">
            <a href="#" aria-label="Facebook"
              class="text-2xl hover:text-white transition-colors">
              <i class="fa-brands fa-facebook"></i>
            </a>
            <a href="#" aria-label="X" class="text-2xl hover:text-white transition-colors">
              <i class="fa-brands fa-x-twitter"></i>
            </a>
          </div>
        </div>

        <!-- Columna 2: Contacto -->
        <div class="lg:col-span-3">
          <h3 class="text-white font-semibold text-lg mb-5">Contacto</h3>
          <ul class="space-y-4 text-sm">
            <li class="flex items-start gap-3">
              <i class="fa-solid fa-phone mt-1 text-sky-400"></i>
              <div>
                <div class="font-medium text-white">(+57) 300 000 0000</div>
                <div class="text-gray-500 text-xs">Línea principal</div>
              </div>
            </li>
            <li class="flex items-start gap-3">
              <i class="fa-solid fa-location-dot mt-1 text-sky-400"></i>
              <div>
                <div class="font-medium text-white">Calle 100 #10-10</div>
                <div class="text-gray-500 text-xs">Ciudad Demo, Colombia</div>
              </div>
            </li>
            <li class="flex items-start gap-3">
              <i class="fa-solid fa-envelope mt-1 text-sky-400"></i>
              <a href="mailto:contacto@petsalud.demo" class="hover:text-white transition-colors">
                contacto@petsalud.demo
              </a>
            </li>
          </ul>
        </div>

        <!-- Columna 3: Empresa -->
        <div class="lg:col-span-4">
          <h3 class="text-white font-semibold text-lg mb-5">Empresa</h3>
          <ul class="grid grid-cols-2 gap-y-3 text-sm text-gray-400">
            <li><a href="/Compromiso" class="hover:text-white transition-colors">Sobre Nosotros</a></li>
            <li><a href="/ProfesionalesVet" class="hover:text-white transition-colors">Médicos Veterinarios</a></li>
            <li><a href="/Planes" class="hover:text-white transition-colors">Planes</a></li>
            <li><a href="/Afiliate" class="hover:text-white transition-colors">Afíliate</a></li>
            <li><a href="/porQuePetSalud" class="hover:text-white transition-colors">¿Por qué PetSalud?</a></li>
            <li><a href="/emergenciaMascota" class="hover:text-white transition-colors">Urgencias</a></li>
          </ul>
        </div>

      </div>

      <!-- Línea final -->
      <div class="border-t border-gray-800 mt-16 pt-8 text-center text-xs text-gray-500">
        © {{ new Date().getFullYear() }} PetSalud Colombia. Todos los derechos reservados.
      </div>
    </div>
  </footer>
</template>
