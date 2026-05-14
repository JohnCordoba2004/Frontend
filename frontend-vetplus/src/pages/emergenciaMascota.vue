<template>
  <section class="bg-white py-12 lg:py-20">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">

        <!-- Columna izquierda - Contenido principal -->
        <div class="lg:col-span-8">
          <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-10">
            Tengo una emergencia<br>con mi mascota
          </h1>

          <div class="space-y-10">
            <!-- Imagen flotante a la derecha -->
            <div class="float-right ml-8 mb-8 w-full max-w-xs lg:max-w-sm">
              <div class="bg-white p-3 shadow-2xl rounded-3xl border border-gray-100">
                <img 
                  src="https://res.cloudinary.com/diro0cqpe/image/upload/v1769182868/clinicas3_vmqdrl.jpg"
                  alt="Emergencia Mascota"
                  class="rounded-2xl w-full object-cover shadow-inner"
                >
              </div>
            </div>

            <!-- Introducción -->
            <div class="mb-10">
              <h2 class="text-2xl font-semibold text-gray-800 mb-4">¿Qué debo hacer?</h2>
            </div>

            <!-- Lista numerada -->
            <div class="space-y-10">
              <div v-for="(paso, index) in listaEmergencias" :key="index" class="flex gap-6">
                <div class="shrink-0 w-9 h-9 bg-sky-600 text-white rounded-2xl flex items-center justify-center font-bold text-lg shadow-md mt-1">
                  {{ index + 1 }}
                </div>
                <p class="text-gray-700 leading-relaxed text-[15.5px] lg:text-base">
                  {{ paso }}
                </p>
              </div>
            </div>

            <!-- Llamada a acción final -->
            <div class="mt-16 bg-sky-50 border border-sky-100 rounded-3xl p-8">
              <p class="text-gray-700 font-medium text-lg leading-relaxed">
                Si tiene alguna duda o necesita ayuda inmediata,<br>
                no dude en comunicarse a nuestra línea de atención 
                <span class="font-semibold text-sky-600">(+57) 300 000 0000</span>,<br>
                las <strong>24 horas</strong> del día, los <strong>7 días</strong> de la semana.
              </p>
            </div>
          </div>
        </div>

        <!-- Columna derecha - Tarjetas -->
        <div class="lg:col-span-4 space-y-6 lg:sticky lg:top-8">
          <!-- Tarjeta Cobertura -->
          <div class="bg-white rounded-3xl p-7 shadow-sm border border-gray-100 hover:shadow-xl transition-all">
            <div class="flex items-center gap-4 mb-5">
              <div class="w-11 h-11 bg-sky-100 rounded-2xl flex items-center justify-center text-3xl">📍</div>
              <h3 class="text-xl font-semibold text-gray-900">Cobertura Nacional</h3>
            </div>
            <p class="text-gray-600 text-[15px] leading-relaxed mb-6">
              La red de veterinarias a su servicio. Contamos con los mejores profesionales en todo el país.
            </p>
            <a href="/NuestraRed"
              class="inline-flex items-center gap-2 text-sky-600 font-medium hover:text-sky-700 transition-colors">
              Ver listado completo 
              <span class="text-lg">→</span>
            </a>
          </div>

          <!-- Tarjeta Afíliate -->
          <div class="bg-white rounded-3xl p-7 shadow-sm border border-gray-100 hover:shadow-xl transition-all">
            <div class="flex items-center gap-4 mb-5">
              <div class="w-11 h-11 bg-emerald-100 rounded-2xl flex items-center justify-center text-3xl">🐾</div>
              <h3 class="text-xl font-semibold text-gray-900">Afíliate Ahora</h3>
            </div>
            <p class="text-gray-600 text-[15px] leading-relaxed mb-6">
              Descubre la forma más fácil de cuidar a tu mascota con planes diseñados para ti.
            </p>
            <a href="/Afiliate"
              class="inline-flex items-center gap-2 text-sky-600 font-medium hover:text-sky-700 transition-colors">
              Afíliate aquí 
              <span class="text-lg">→</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  </section>  

  <footerInfo />
  <Copyright />
</template>

<script setup>
import footerInfo from '../components/footerInfo.vue';
import Copyright from '../components/copyright.vue';

const listaEmergencias = [
  "Consulte nuestra red de veterinarios y seleccione el médico de su preferencia. Si tiene dudas o no sabe a dónde llevarlo, llámenos a nuestra línea de atención ((571) 5556999) y con gusto le asesoramos. No olvide llevar el carné de afiliación y cualquier documentación que pueda ser de ayuda para el médico, como resultados de exámenes previos y carné de vacunas.",
  "Su médico se comunicará con PetSalud y solicitará las aprobaciones necesarias, de acuerdo con su plan actual.",
  "El médico veterinario valorará su mascota y de ser necesario le realizará los procedimientos de urgencia; le sugerirá los próximos pasos como exámenes, procedimientos complementarios, medicamentos, entre otros.",
  "Una vez recibidas las autorizaciones por parte de PetSalud, deberá cancelar a su médico el número de bonos indicados, de acuerdo con su plan, si tiene duda acerca de este monto, puede llamarnos en ese mismo instante y confirmaremos la información proporcionada por su médico."
]
</script>
