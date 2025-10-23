<template>
  <section class="bg-gray-200 py-8 sm:py-12 lg:py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <!-- 🔹 TÍTULO -->
      <div class="bg-[#CBDCEB] p-6 sm:p-8 lg:p-10 shadow-lg rounded-lg mb-8 sm:mb-12 lg:mb-16">
        <div class="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mb-6">
          <span><i class="fa-solid fa-kit-medical text-2xl sm:text-3xl lg:text-4xl text-blue-600"></i></span>
          <h2 class="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 text-center sm:text-left">
            PLANES DE MEDICINA PREVENTIVA
          </h2>
        </div>

        <!-- 🔹 Descripción -->
        <div class="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 lg:gap-10 bg-[#F5EFE6] p-4 sm:p-6 rounded-lg">
          <img src="https://res.cloudinary.com/diro0cqpe/image/upload/v1759807797/PP-vetplus_gcunvt.png"
            alt="vetplus icon" class="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 object-contain flex-shrink-0" />
          <p class="text-sm sm:text-base lg:text-lg text-gray-700 text-center sm:text-left leading-relaxed">
            Completa tu plan de medicina prepagada con un plan preventivo que incluye chequeos, vacunaciones,
            asistencia telefónica y mucho más para mantener a tu mascota en excelente estado de salud.
          </p>
        </div>
      </div>

      <!-- 🔹 TABLA PARA PANTALLAS GRANDES -->
      <div class="bg-[#CBDCEB] p-4 sm:p-6 shadow-lg rounded-lg hidden lg:block">
        <div class="overflow-x-auto">
          <table class="table-auto w-full text-center min-w-[800px] border-collapse">
            <thead class="bg-white">
              <tr>
                <th class="p-3 text-sm lg:text-base font-semibold"></th>
                <th class="p-3 text-sm lg:text-base font-semibold">Valoraciones Preventivas</th>
                <th class="p-3 text-sm lg:text-base font-semibold">Vacunación</th>
                <th class="p-3 text-sm lg:text-base font-semibold">Desparasitación</th>
                <th class="p-3 text-sm lg:text-base font-semibold">Asistencia Telefónica 24/7</th>
                <th class="p-3 text-sm lg:text-base font-semibold">Esterilización</th>
                <th class="p-3 text-sm lg:text-base font-semibold">Auxilio Funerario</th>
                <th class="p-3 text-sm lg:text-base font-semibold">Odontología Preventiva</th>
              </tr>
            </thead>

            <tbody>
              <!-- PLAN PREMIUM -->
              <tr class="bg-red-100">
                <td class="font-bold p-3 text-sm lg:text-base">PREMIUM</td>
                <td class="p-3 text-green-600 text-xl lg:text-2xl">✔️</td>
                <td class="p-3 text-green-600 text-xl lg:text-2xl">✔️</td>
                <td class="p-3 text-green-600 text-xl lg:text-2xl">✔️</td>
                <td class="p-3 text-green-600 text-xl lg:text-2xl">✔️</td>
                <td class="p-3 text-green-600 text-xl lg:text-2xl">✔️</td>
                <td class="p-3 text-green-600 text-xl lg:text-2xl">✔️</td>
                <td class="p-3 text-green-600 text-xl lg:text-2xl">✔️</td>
              </tr>

              <!-- PLAN BÁSICO -->
              <tr>
                <td class="font-bold p-3 text-sm lg:text-base">BÁSICO</td>
                <td class="p-3 text-green-600 text-xl lg:text-2xl">✔️</td>
                <td class="p-3 text-green-600 text-xl lg:text-2xl">✔️</td>
                <td class="p-3 text-green-600 text-xl lg:text-2xl">✔️</td>
                <td class="p-3 text-green-600 text-xl lg:text-2xl">✔️</td>
                <td class="p-3 text-gray-400 text-lg lg:text-xl">--</td>
                <td class="p-3 text-gray-400 text-lg lg:text-xl">--</td>
                <td class="p-3 text-gray-400 text-lg lg:text-xl">--</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Leyenda -->
        <p class="text-xs sm:text-sm text-gray-700 italic mt-4 text-right">
          * Sujeto a plan médico
        </p>
      </div>

      <!-- 🔹 VISTA RESPONSIVE (CARDS PARA MÓVILES Y TABLETAS) -->
      <div class="lg:hidden space-y-4 sm:space-y-6">
        <!-- PLAN PREMIUM -->
        <div class="bg-white p-4 sm:p-6 rounded-lg shadow-md border-l-4 border-red-500">
          <h3 class="font-bold text-lg sm:text-xl lg:text-2xl text-red-600 mb-4 sm:mb-6">PREMIUM</h3>
          <ul class="space-y-2 sm:space-y-3 text-gray-800">
            <li class="flex items-center gap-3 text-sm sm:text-base">
              <span class="text-green-600 text-lg">✔️</span>
              <span>Valoraciones Preventivas</span>
            </li>
            <li class="flex items-center gap-3 text-sm sm:text-base">
              <span class="text-green-600 text-lg">✔️</span>
              <span>Vacunación</span>
            </li>
            <li class="flex items-center gap-3 text-sm sm:text-base">
              <span class="text-green-600 text-lg">✔️</span>
              <span>Desparasitación</span>
            </li>
            <li class="flex items-center gap-3 text-sm sm:text-base">
              <span class="text-green-600 text-lg">✔️</span>
              <span>Asistencia Telefónica 24/7</span>
            </li>
            <li class="flex items-center gap-3 text-sm sm:text-base">
              <span class="text-green-600 text-lg">✔️</span>
              <span>Esterilización</span>
            </li>
            <li class="flex items-center gap-3 text-sm sm:text-base">
              <span class="text-green-600 text-lg">✔️</span>
              <span>Auxilio Funerario</span>
            </li>
            <li class="flex items-center gap-3 text-sm sm:text-base">
              <span class="text-green-600 text-lg">✔️</span>
              <span>Odontología Preventiva</span>
            </li>
          </ul>
          <p class="text-xs sm:text-sm text-gray-500 italic mt-4 sm:mt-6">
            * Sujeto a plan médico
          </p>
        </div>

        <!-- PLAN BÁSICO -->
        <div class="bg-white p-4 sm:p-6 rounded-lg shadow-md border-l-4 border-blue-500">
          <h3 class="font-bold text-lg sm:text-xl lg:text-2xl text-gray-800 mb-4 sm:mb-6">BÁSICO</h3>
          <ul class="space-y-2 sm:space-y-3 text-gray-800">
            <li class="flex items-center gap-3 text-sm sm:text-base">
              <span class="text-green-600 text-lg">✔️</span>
              <span>Valoraciones Preventivas</span>
            </li>
            <li class="flex items-center gap-3 text-sm sm:text-base">
              <span class="text-green-600 text-lg">✔️</span>
              <span>Vacunación</span>
            </li>
            <li class="flex items-center gap-3 text-sm sm:text-base">
              <span class="text-green-600 text-lg">✔️</span>
              <span>Desparasitación</span>
            </li>
            <li class="flex items-center gap-3 text-sm sm:text-base">
              <span class="text-green-600 text-lg">✔️</span>
              <span>Asistencia Telefónica 24/7</span>
            </li>
          </ul>
          <p class="text-xs sm:text-sm text-gray-500 italic mt-4 sm:mt-6">
            * Sujeto a plan médico
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
