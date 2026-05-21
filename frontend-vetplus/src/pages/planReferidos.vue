<template>
  <!-- Hero Section -->
  <section class="bg-gradient-to-br from-slate-50 to-white py-16 lg:py-24">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

        <!-- Contenido izquierdo -->
        <div class="lg:col-span-6">
          <p class="text-violet-600 text-xs font-semibold tracking-widest uppercase mb-3">🎁 Plan referidos</p>
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
            Plan <span class="text-violet-600">Referidos</span>
          </h1>
          <p class="text-lg text-slate-600 leading-relaxed mb-8">
            Comparte tu experiencia con PetSalud y gana beneficios. Hemos diseñado este plan para recompensar tu
            contribución al crecer nuestra familia de afiliados.
          </p>
          <a href="mailto:referidos@petsalud.demo"
            class="inline-flex items-center gap-2 px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-2xl transition-all duration-200 shadow-md hover:shadow-lg group">
            Enviar referido
            <span class="transition-transform duration-200 group-hover:translate-x-1">
              <i class="fa-solid fa-arrow-right"></i>
            </span>
          </a>
        </div>

        <!-- Imagen derecha -->
        <div class="lg:col-span-6">
          <div class="rounded-3xl overflow-hidden shadow-xl border border-slate-100 bg-white p-2">
            <img src="https://res.cloudinary.com/diro0cqpe/image/upload/v1779256942/planReferidos2_priqfw.png"
              alt="Plan Referidos"
              class="w-full h-auto object-cover rounded-2xl transition-transform duration-700 hover:scale-105">
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Pasos Section -->
  <section class="bg-white py-20 lg:py-28">
    <div class="max-w-4xl mx-auto px-6 lg:px-8">
      <!-- Encabezado -->
      <div class="mb-16">
        <h2 class="text-4xl sm:text-5xl font-bold text-slate-900 leading-tight">
          ¿Cómo <span class="text-violet-600">funciona?</span>
        </h2>
        <p class="text-lg text-slate-600 mt-4">Sigue estos simples pasos para ganar beneficios.</p>
      </div>

      <!-- Pasos -->
      <div class="space-y-8">
        <div v-for="(paso, index) in puntosReferidos" :key="index"
          class="flex gap-6 pb-8 border-b border-slate-100 last:border-b-0 last:pb-0">

          <!-- Número -->
          <div
            class="shrink-0 w-14 h-14 bg-gradient-to-br from-violet-600 to-violet-700 text-white rounded-2xl flex items-center justify-center font-bold text-xl shadow-md hover:shadow-lg transition-all">
            {{ String(index + 1).padStart(2, '0') }}
          </div>

          <!-- Contenido -->
          <div class="flex-1 pt-1">
            <p class="text-slate-700 leading-relaxed text-base">{{ paso }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Beneficios Section -->
  <section class="bg-gradient-to-br from-violet-50 to-purple-50 py-20 lg:py-28">
    <div class="max-w-4xl mx-auto px-6 lg:px-8">
      <!-- Encabezado -->
      <div class="mb-16">
        <h2 class="text-4xl sm:text-5xl font-bold text-slate-900 leading-tight">
          Tus <span class="text-violet-600">beneficios</span>
        </h2>
        <p class="text-lg text-slate-600 mt-4">Gana premios según la cantidad de referidos.</p>
      </div>

      <!-- Grid de beneficios -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div v-for="(punto, index) in referidos" :key="index"
          class="bg-white rounded-3xl p-8 border border-violet-100 hover:border-violet-300 hover:shadow-lg transition-all duration-300 group">

          <!-- Icono -->
          <div
            class="w-14 h-14 bg-violet-100 text-violet-600 rounded-2xl flex items-center justify-center text-2xl font-bold mb-5 group-hover:bg-violet-600 group-hover:text-white transition-all">
            {{ index + 1 }}
          </div>

          <!-- Contenido -->
          <h3 class="text-2xl font-bold text-slate-900 mb-3">{{ punto.titulo }}</h3>
          <p class="text-slate-600 leading-relaxed">{{ punto.desc }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Info Box Section -->
  <section class="bg-white py-16 lg:py-20">
    <div class="max-w-4xl mx-auto px-6 lg:px-8">
      <div class="bg-gradient-to-r from-violet-600 to-purple-600 rounded-3xl p-8 lg:p-10 text-white shadow-lg">
        <div class="flex items-start gap-6">
          <div class="text-5xl shrink-0">💝</div>
          <div>
            <h3 class="text-2xl font-bold mb-3">Con tu aporte, cada vez más mascotas disfrutarán de servicios médicos de
              calidad.</h3>
            <p class="text-violet-100 leading-relaxed mb-4">
              Cada referido exitoso significa que una familia más puede cuidar a su mascota de manera responsable.
              ¡Anímate a ser parte de nuestra comunidad!
            </p>
            <a href="mailto:referidos@petsalud.demo"
              class="inline-flex items-center gap-2 px-6 py-3 bg-white text-violet-600 font-semibold rounded-2xl hover:bg-violet-50 transition-all duration-200 group">
              Enviar mis referidos
              <span class="transition-transform duration-200 group-hover:translate-x-1">
                <i class="fa-solid fa-arrow-right"></i>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section class="bg-gradient-to-r from-sky-600 to-sky-700 py-16 lg:py-20">
    <div class="max-w-4xl mx-auto px-6 lg:px-8 text-center">
      <h2 class="text-3xl sm:text-4xl font-bold text-white mb-6">¿Aún no eres afiliado?</h2>
      <p class="text-sky-100 text-lg mb-8 leading-relaxed">
        Conviértete en afiliado hoy y comienza a disfrutar de nuestros beneficios. Luego puedes participar en el Plan
        Referidos.
      </p>
      <RouterLink to="/Afiliate"
        class="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-sky-600 font-semibold rounded-2xl hover:bg-slate-50 transition-all duration-200 shadow-lg group">
        Afíliate ahora
        <span class="transition-transform duration-200 group-hover:translate-x-1">
          <i class="fa-solid fa-arrow-right"></i>
        </span>
      </RouterLink>
    </div>
  </section>

  <footerInfo />
</template>

<script setup>
import { useSEO } from '../composables/useSEO';
import footerInfo from '../components/footerInfo.vue';
import { RouterLink } from 'vue-router';

const { setPageSEO } = useSEO();

setPageSEO({
  title: 'Plan Referidos | Gana Beneficios Recomendando PetSalud',
  description: 'Comparte tu experiencia con PetSalud y gana beneficios. Descuentos, meses gratis y más al referir amigos y familia.',
  keywords: 'plan referidos, referidos PetSalud, gana beneficios, recomendaciones, descuentos veterinarios',
  image: 'https://res.cloudinary.com/diro0cqpe/image/upload/v1779256942/planReferidos2_priqfw.png'
});

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
