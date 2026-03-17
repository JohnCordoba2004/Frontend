<script setup>
import footerInfo from '../components/footerInfo.vue';
import copyright from '../components/copyright.vue';
import { useHead } from '@unhead/vue';
useHead({
  title: 'Nuestra Red',
  meta: [
    {
      name: 'description',
      content: 'Conoce los especialistas y centros médicos aliados a VetPlus. Profesionales certificados listos para atender a tu mascota en todo el país.'
    }
  ]
})
</script>

<template>
  <div class="flex flex-col min-h-[calc(100vh-80px)]">

    <section class="flex-grow py-12 px-4 mx-auto max-w-7xl w-full">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

        <div class="lg:col-span-9">
          <h1 class="text-4xl font-bold text-sky-400 mb-10">Red veterinarios</h1>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="card-vet">
              <img src="https://res.cloudinary.com/diro0cqpe/image/upload/v1769182290/clinicas1_vmjxp6.jpg"
                class="w-full h-48 object-cover">
              <a class="btnVet" href="/ClinicasVeterinarias">
                Clinicas Veterinarias
              </a>
            </div>

            <div class="card-vet">
              <img src="https://res.cloudinary.com/diro0cqpe/image/upload/v1769182290/clinicas2_wxtcp0.jpg"
                class="w-full h-48 object-cover">
              <a class="btnVet" href="/ProfesionalesVet">
                Profesionales Adscritos
              </a>
            </div>

            <div class="card-vet">
              <img src="https://res.cloudinary.com/diro0cqpe/image/upload/v1769182868/clinicas3_vmqdrl.jpg"
                class="w-full h-48 object-cover">
              <a class="btnVet" href="/Otros">
                Otros
              </a>
            </div>
          </div>
        </div>

        <div class="lg:col-span-3 space-y-6">
          <div class="bg-gray-100 rounded-2xl p-6 shadow-sm border-l-4 border-sky-500">
            <div class="flex items-center mb-4">
              <div class="w-10 h-10 bg-sky-500 rounded-full flex items-center justify-center mr-3 text-white shadow-md">
                <i class="fa-solid fa-paw text-lg"></i>
              </div>
              <h2 class="text-lg font-bold text-gray-800">Afíliate</h2>
            </div>
            <p class="text-gray-600 text-sm mb-4 leading-relaxed">
              Descubre la forma más fácil de cuidar a tu mascota con planes diseñados para ti.
            </p>
            <a href="/Afiliate"
              class="inline-block bg-sky-400 text-white px-5 py-2 rounded-lg text-xs font-bold uppercase tracking-widest hover:bg-sky-500 transition-all shadow-sm">
              Afíliate aquí +
            </a>
          </div>
        </div>
      </div>
    </section>

    <footerInfo />
    <copyright />
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap');

h1 {
  font-size: 2rem;
  font-weight: bold;
  color: #84D5F5;
}


.btnVet {
  background-color: aliceblue;
  color: black;
  font-size: 1em;
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 5px;
  padding: 10px;
}
</style>
