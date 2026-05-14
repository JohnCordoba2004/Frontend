<template>
  <section class="bg-white py-12 lg:py-20">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">

        <!-- Columna izquierda - Contenido principal -->
        <div class="lg:col-span-8">
          <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-10">
            Plan Referidos
          </h1>

          <div class="space-y-10 mb-12">
            <!-- Imagen flotante a la derecha (como la tenías) -->
            <div class="float-right ml-8 mb-8 w-full max-w-xs lg:max-w-sm">
              <div class="bg-white p-3 shadow-2xl rounded-3xl border border-gray-100">
                <img 
                  src="https://res.cloudinary.com/diro0cqpe/image/upload/v1759885003/tab-referidos_gnjgkk.jpg"
                  alt="Plan Referidos"
                  class="rounded-2xl w-full object-cover shadow-inner"
                >
              </div>
            </div>

            <p class="text-gray-700 leading-relaxed text-base lg:text-lg">
              Para nosotros es muy importante que compartas tu experiencia con PetSalud con tus amigos y familia. 
              Por ello, hemos diseñado el Plan Referidos para recompensar tu contribución para ampliar nuestra familia de afiliados.
            </p>

            <p class="text-gray-700 leading-relaxed text-base lg:text-lg">
              Para obtener tu beneficio, debes realizar lo siguiente:
            </p>

            <!-- Lista numerada -->
            <div class="space-y-8">
              <div v-for="(refer, i) in puntosReferidos" :key="i" class="flex items-start gap-5">
                <div class="shrink-0 w-9 h-9 bg-sky-600 text-white rounded-2xl flex items-center justify-center font-bold text-lg shadow-md mt-1">
                  {{ i + 1 }}
                </div>
                <p class="text-gray-700 leading-relaxed text-[15.5px] lg:text-base">
                  {{ refer }}
                </p>
              </div>
            </div>

            <!-- Beneficios por cantidad de referidos -->
            <div class="space-y-6 mt-12">
              <div v-for="(punto, i) in referidos" :key="i" class="flex items-start gap-5">
                <span class="text-sky-500 font-bold text-2xl leading-none mt-1">•</span>
                <div>
                  <strong class="text-gray-900 text-lg">{{ punto.titulo }}</strong>
                  <p class="text-gray-600">{{ punto.desc }}</p>
                </div>
              </div>
            </div>

            <p class="text-gray-800 text-lg font-bold mt-10">
              Con tu aporte, cada vez más mascotas disfrutarán de servicios médicos de calidad.<br>
              ¡Anímate!
            </p>
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

const puntosReferidos = [
  "Envíanos los datos de contacto (nombre, teléfono y/o correo electrónico) de tu referido a referidos@petsalud.demo",
  "Si tu referido se convierte en un afiliado a PetSalud te entregaremos lo siguiente :"
]

const referidos = [
  {
    titulo: "Un referido",
    desc: "10% de descuento en próxima mensualidad."
  },
  {
    titulo: "Cinco referidos",
    desc: "1 mes de afiliación de cortesía."
  }
]
</script>
