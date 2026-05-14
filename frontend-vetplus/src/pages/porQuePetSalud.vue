<template>
  <section class="bg-white py-12 lg:py-20">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

        <!-- Columna izquierda - Texto -->
        <div class="lg:col-span-7">
          <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
            ¿Por qué PetSalud <span class="font-light text-sky-500">®</span>?
          </h1>

          <div class="space-y-8 mb-12">
            <!-- Imagen flotante a la derecha (como la tenías) -->
            <div class="float-right ml-8 mb-6 w-full max-w-xs lg:max-w-sm">
              <div class="bg-white p-2 shadow-xl rounded-2xl border border-gray-100">
                <img src="https://res.cloudinary.com/diro0cqpe/image/upload/v1759885003/porq-V_u8cq1u.jpg"
                  alt="Mascota PetSalud" class="rounded-xl w-full object-cover shadow-inner">
              </div>
            </div>

            <!-- Párrafos -->
            <p v-for="(parrafo, i) in introText" :key="i" class="text-gray-700 leading-relaxed text-base lg:text-lg">
              {{ parrafo }}
            </p>
          </div>

          <!-- Puntos clave -->
          <div class="space-y-8">
            <div v-for="(punto, index) in puntosPorQue" :key="index" class="flex items-start gap-4">
              <span
                class="shrink-0 w-7 h-7 bg-sky-100 text-sky-600 rounded-2xl flex items-center justify-center font-bold text-lg mt-1">
                {{ index + 1 }}
              </span>
              <div>
                <strong class="text-gray-900">{{ punto.titulo }}:</strong>
                <p class="text-gray-700 mt-1 leading-relaxed">{{ punto.desc }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Columna derecha - Tarjetas -->
        <div class="lg:col-span-5 space-y-6 lg:sticky lg:top-8">
          <!-- Tarjeta Cobertura -->
          <div class="bg-white rounded-3xl p-7 shadow-sm border border-gray-100 hover:shadow-md transition-all">
            <div class="flex items-center gap-4 mb-5">
              <div class="w-11 h-11 bg-sky-100 rounded-2xl flex items-center justify-center text-2xl">📍</div>
              <h3 class="text-xl font-semibold text-gray-900">Cobertura Nacional</h3>
            </div>
            <p class="text-gray-600 text-[15px] leading-relaxed mb-6">
              La red de veterinarias a su servicio. Contamos con los mejores profesionales en todo el país.
            </p>
            <a href="/NuestraRed"
              class="text-sky-600 font-medium hover:text-sky-700 transition-colors flex items-center gap-2">
              Ver listado completo
              <span class="text-lg">→</span>
            </a>
          </div>

          <!-- Tarjeta Afíliate -->
          <div class="bg-white rounded-3xl p-7 shadow-sm border border-gray-100 hover:shadow-md transition-all">
            <div class="flex items-center gap-4 mb-5">
              <div class="w-11 h-11 bg-emerald-100 rounded-2xl flex items-center justify-center text-2xl">🐾</div>
              <h3 class="text-xl font-semibold text-gray-900">Afíliate Ahora</h3>
            </div>
            <p class="text-gray-600 text-[15px] leading-relaxed mb-6">
              Descubre la forma más fácil de cuidar a tu mascota con planes diseñados para ti.
            </p>
            <a href="/Afiliate"
              class="text-sky-600 font-medium hover:text-sky-700 transition-colors flex items-center gap-2">
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

const introText = [
  'El cuidado médico de nuestras mascotas no debe ser motivo de preocupación.',
  'Entendemos lo difícil que puede ser enfrentarse a situaciones como: ¿Cuánto me costará este tratamiento de urgencia? o ¿Será necesario practicarle ese costoso procedimiento médico a mi mascota?',
  'Desafortunadamente, igual que con nosotros, una eventualidad médica puede llegar en cualquier momento para su mascota.',
  'PetSalud está diseñado para acompañarlo en esos momentos, cubriéndolo de grandes facturas inesperadas y garantizándole un completo servicio médico cuándo su mejor amigo más lo necesita.',
  'PetSalud es sin lugar a dudas la mejor opción en medicina prepagada veterinaria. Usted se preguntará entonces: ¿Por qué PetSalud?'
];

const puntosPorQue = [
  {
    titulo: "Por su cubrimiento",
    desc: "PetSalud cuenta con planes de amplia cobertura en servicios médicos veterinarios, dándole la tranquilidad de que su mascota recibirá la más completa atención en los momentos difíciles."
  },
  {
    titulo: "Por su flexibilidad",
    desc: "La amplia gama de planes que ofrecemos se adaptan a sus necesidades y presupuesto. Desde planes básicos de cobertura en medicina preventiva hasta planes con coberturas en cualquier evento de urgencia, con PetSalud usted cuenta con la flexibilidad de escoger su nivel de cobertura preferido."
  },
  {
    titulo: "Por su precio",
    desc: "Afiliándose a PetSalud su mascota tendrá acceso a servicios médicos especializados al alcance de su bolsillo. Con una pequeña cuota mensual, usted tendrá la tranquilidad de estar cubierto ante esas emergencias médicas que podrían costarle una fortuna."
  },
  {
    titulo: "Por la calidad",
    desc: "La amplia red de médicos veterinarios ha sido configurada para ofrecerle los mejores servicios médicos disponibles en nuestro país."
  },
  {
    titulo: "Por sus beneficios",
    desc: "No tiene que esperar a una emergencia médica para recibir atención y acompañamiento, PetSalud ofrece a todos sus afiliados un gran portafolio de beneficios adicionales."
  },
  {
    titulo: "Por el respaldo",
    desc: "PetSalud es el resultado del trabajo de profesionales con amplia experiencia en el sector de medicina veterinaria y jóvenes emprendedores con ideas innovadoras."
  }
];
</script>