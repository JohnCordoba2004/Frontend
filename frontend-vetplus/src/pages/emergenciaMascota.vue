<template>
  <!-- Hero Section -->
  <section class="bg-gradient-to-br from-slate-50 to-white py-16 lg:py-24">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

        <!-- Contenido izquierdo -->
        <div class="lg:col-span-6">
          <p class="text-red-600 text-xs font-semibold tracking-widest uppercase mb-3">🚨 Emergencias</p>
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
            Tengo una <span class="text-red-600">emergencia</span> con mi mascota
          </h1>
          <p class="text-lg text-slate-600 leading-relaxed mb-8">
            Actúa rápido y correctamente. Te mostramos exactamente qué pasos seguir en caso de urgencia.
          </p>
          <div class="flex items-center gap-3 p-4 bg-red-50 rounded-2xl border border-red-100">
            <span class="text-2xl">📞</span>
            <div>
              <p class="text-sm text-slate-600">Línea de atención 24/7:</p>
              <p class="font-bold text-red-600 text-lg">(+57) 300 000 0000</p>
            </div>
          </div>
        </div>

        <!-- Imagen derecha -->
        <div class="lg:col-span-6">
          <div class="rounded-3xl overflow-hidden shadow-xl border border-slate-100 bg-white p-2">
            <img src="https://res.cloudinary.com/diro0cqpe/image/upload/v1779247628/urgencias_ypzs3r.png"
              alt="Emergencia Mascota"
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
          ¿Qué debo <span class="text-sky-600">hacer?</span>
        </h2>
        <p class="text-lg text-slate-600 mt-4">Sigue estos pasos para actuar correctamente en una emergencia.</p>
      </div>

      <!-- Pasos -->
      <div class="space-y-8">
        <div v-for="(paso, index) in listaEmergencias" :key="index"
          class="flex gap-6 pb-8 border-b border-slate-100 last:border-b-0 last:pb-0">

          <!-- Número -->
          <div
            class="shrink-0 w-14 h-14 bg-gradient-to-br from-sky-600 to-sky-700 text-white rounded-2xl flex items-center justify-center font-bold text-xl shadow-md hover:shadow-lg transition-all">
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

  <!-- Info Box Section -->
  <section class="bg-gradient-to-r from-red-50 to-orange-50 py-16 lg:py-20">
    <div class="max-w-4xl mx-auto px-6 lg:px-8">
      <div class="bg-white rounded-3xl p-8 lg:p-10 border border-red-100 shadow-lg">
        <div class="flex flex-col md:flex-row gap-6 items-start md:items-center">
          <div class="text-4xl shrink-0">📞</div>
          <div class="flex-1">
            <h3 class="text-2xl font-bold text-slate-900 mb-3">¿Tienes dudas?</h3>
            <p class="text-slate-600 leading-relaxed mb-4">
              Si tiene alguna duda o necesita ayuda inmediata, no dude en comunicarse a nuestra línea de atención
              disponible las <span class="font-semibold">24 horas</span> del día, los <span class="font-semibold">7
                días</span> de la semana.
            </p>
            <p class="text-xl font-bold text-red-600">
              (+57) 300 000 0000
            </p>
          </div>
          <a href="/ClinicasVeterinarias"
            class="shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-sky-600 hover:bg-sky-700 text-white font-semibold rounded-2xl transition-all duration-200 shadow-md hover:shadow-lg group whitespace-nowrap">
            Ver clinicas veterinarias
            <span class="transition-transform duration-200 group-hover:translate-x-1">
              <i class="fa-solid fa-arrow-right"></i>
            </span>
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section class="bg-gradient-to-r from-sky-600 to-sky-700 py-16 lg:py-20">
    <div class="max-w-4xl mx-auto px-6 lg:px-8 text-center">
      <h2 class="text-3xl sm:text-4xl font-bold text-white mb-6">¿Ya conoces nuestros planes?</h2>
      <p class="text-sky-100 text-lg mb-8 leading-relaxed">
        Afíliate hoy y garantiza que tu mascota esté protegida ante cualquier emergencia.
      </p>
      <a href="/Afiliate"
        class="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-sky-600 font-semibold rounded-2xl hover:bg-slate-50 transition-all duration-200 shadow-lg group">
        Explorar planes
        <span class="transition-transform duration-200 group-hover:translate-x-1">
          <i class="fa-solid fa-arrow-right"></i>
        </span>
      </a>
    </div>
  </section>

  <footerInfo />
  <!-- <Copyright /> -->
</template>

<script setup>
import { useSEO } from '../composables/useSEO';
import footerInfo from '../components/footerInfo.vue';
import Copyright from '../components/copyright.vue';

const { setPageSEO } = useSEO();

setPageSEO({
  title: 'Emergencias Veterinarias | Qué Hacer en Caso de Urgencia',
  description: 'Guía completa de cómo actuar ante una emergencia con tu mascota. Pasos, teléfono de atención 24/7 y cobertura de urgencias con PetSalud.',
  keywords: 'emergencia mascota, urgencia veterinaria, qué hacer emergencia perro, qué hacer emergencia gato, PetSalud 24/7',
  image: 'https://res.cloudinary.com/diro0cqpe/image/upload/v1779247628/urgencias_ypzs3r.png'
});

const listaEmergencias = [
  "Consulte nuestra red de veterinarios y seleccione el médico de su preferencia. Si tiene dudas o no sabe a dónde llevarlo, llámenos a nuestra línea de atención ((571) 5556999) y con gusto le asesoramos. No olvide llevar el carné de afiliación y cualquier documentación que pueda ser de ayuda para el médico, como resultados de exámenes previos y carné de vacunas.",
  "Su médico se comunicará con PetSalud y solicitará las aprobaciones necesarias, de acuerdo con su plan actual.",
  "El médico veterinario valorará su mascota y de ser necesario le realizará los procedimientos de urgencia; le sugerirá los próximos pasos como exámenes, procedimientos complementarios, medicamentos, entre otros.",
  "Una vez recibidas las autorizaciones por parte de PetSalud, deberá cancelar a su médico el número de bonos indicados, de acuerdo con su plan, si tiene duda acerca de este monto, puede llamarnos en ese mismo instante y confirmaremos la información proporcionada por su médico."
]
</script>
