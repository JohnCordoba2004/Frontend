<template>
  <footer class="bg-gray-200 p-4 sm:p-6 lg:p-auto">
    <div class="max-w-7xl mx-auto px-auto grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 py-6 lg:py-4">

      <div class="text-balance text-center lg:text-left p-4 lg:p-6 rounded-lg">
        <h2 class="font-bold text-lg sm:text-xl lg:text-2xl text-gray-800 mb-3 lg:mb-4">VetPlus Colombia</h2>
        <p class="text-gray-700 font-medium text-xs sm:text-sm lg:text-base leading-relaxed">
          Despreocúpese de altos gastos médicos para su mascota; con el programa <strong>VetPlus®</strong> usted tendrá
          una cobertura total en medicina preventiva, atención y tratamiento de urgencias, enfermedades y accidentes,
          además una línea de asistencia <strong>24 horas</strong>.
        </p>
        <div class="flex space-x-4 mt-4 lg:mt-6 items-center justify-center lg:justify-start">
          <span class="text-sm lg:text-base font-medium">Síguenos</span>
          <a href="https://www.facebook.com/vetpluscolombia" target="_blank"
            class="text-xl lg:text-2xl text-sky-600 hover:text-sky-800 transition-colors">
            <i class="fa-brands fa-facebook"></i>
          </a>
          <a href="https://x.com/VetplusCol" target="_blank"
            class="text-xl lg:text-2xl text-gray-600 hover:text-gray-800 transition-colors">
            <i class="fa-brands fa-x-twitter"></i>
          </a>
        </div>
      </div>

      <div class="p-4 lg:p-6 rounded-lg">
        <h2 class="font-bold text-base sm:text-lg lg:text-xl text-gray-800 mb-4 text-center lg:text-left">Contacto</h2>
        <ul class="space-y-3 flex flex-col items-center lg:items-start">
          <li class="flex items-start gap-3">
            <i class="fa-solid fa-phone text-sky-600 mt-1 text-sm lg:text-base"></i>
            <div>
              <div class="font-semibold text-sm sm:text-base lg:text-lg text-gray-800">(+57) 3107850994</div>
              <div class="text-xs sm:text-sm text-gray-600">Línea principal</div>
            </div>
          </li>
          <li class="flex items-start gap-3">
            <i class="fa-solid fa-house text-sky-600 mt-1 text-sm lg:text-base"></i>
            <div>
              <div class="font-semibold text-sm sm:text-base lg:text-lg text-gray-800">Calle 95 #48-40</div>
              <div class="text-xs sm:text-sm text-gray-600">La Castellana, Bogotá</div>
            </div>
          </li>
          <li class="flex items-start gap-3">
            <i class="fa-solid fa-envelope text-sky-600 mt-1 text-sm lg:text-base"></i>
            <a :href="mailLink"
              class="font-semibold text-sm sm:text-base lg:text-lg text-gray-800 hover:text-sky-600 transition-colors break-all">
              {{ emailAddress }}
            </a>
          </li>
        </ul>
      </div>

      <div class="hidden lg:block p-4 lg:p-6 rounded-lg">
        <h2 class="font-bold text-base sm:text-lg lg:text-xl text-gray-800 mb-4">Empresa</h2>
        <ul class="space-y-2">
          <li><a href="/Compromiso"
              class="text-sm sm:text-base text-gray-700 hover:text-sky-600 transition-colors block py-1">Sobre
              Nosotros</a></li>
        <li><a href="/ProfesionalesVet"
              class="text-sm sm:text-base text-gray-700 hover:text-sky-600 transition-colors block py-1">Médicos
              Veterinarios</a></li>
          <li><a href="/PlanesPerro"
              class="text-sm sm:text-base text-gray-700 hover:text-sky-600 transition-colors block py-1">Planes</a></li>
          <li><a href="/Afiliate"
              class="text-sm sm:text-base text-gray-700 hover:text-sky-600 transition-colors block py-1">Afíliate</a>
          </li>
        </ul>
      </div>

    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      emailAddress: 'info@vetpluscolombia.com',
      subject: 'Mas info',
      body: 'Hola,  tengo una pregunta acerca de...'
    };
  },
  computed: {
    mailLink() {
      const encodedSubject = encodeURIComponent(this.subject);
      const encodedBody = encodeURIComponent(this.body);
      return `mailto:${this.emailAddress}?subject=${encodedSubject}&body=${encodedBody}`;
    }
  }
};
</script>