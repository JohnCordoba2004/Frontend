<template>
  <div class="flex flex-col min-h-screen">

    <div class="main max-w-full-xl py-1 mx-auto flex-grow">
      <div class="benefit max-w-7xl p-4 mx-auto">
        <div v-if="beneficio" class="benefits__card bg-white shadow-xl border-gray-200 px-10 py-10">
          <div class="border-b border-gray-100 mb-10">
            <h1 class="items-start text-lg lg:text-4xl text-gray-700 mt-4">{{ beneficio.name }}</h1>
          </div>

          <img :src="beneficio.img" :alt="beneficio.name" class="w-1/3 mb-6">

          <div class="flex flex-col gap-4 items-start mb-10 text-gray-600">
            <span class="text-sm md:text-lg lg:text-sm font-bold mt-6">
              Dir:
              <a :href="`https://www.google.com/maps/search/?api=1&query=${beneficio.direction[0]}`" target="_blank">
                {{ beneficio.direction }}
              </a>
            </span>
            <span class="text-sm md:text-lg lg:text-sm font-bold">Tel: {{ beneficio.tel }}</span>
            <span class="text-sm md:text-lg lg:text-sm font-bold">
              Web:
              <a :href="beneficio.web" target="_blank" class="hover:underline font-bold">
                {{ beneficio.web }}
              </a>
            </span>
            <span class="text-sm md:text-lg lg:text-sm font-bold"> {{ beneficio.desc }}</span>
            <span class="text-sm md:text-lg lg:text-sm font-bold">Contacto : {{ beneficio.contact }}</span>
          </div>
          <img :src="beneficio.imgFull" :alt="beneficio.name">
        </div>
        <div v-else-if="!loading" class="text-center py-20">
          <p>No se encontró el beneficio solicitado.</p>
          <router-link to="/beneficios" class="text-blue-500 underline">Volver al listado</router-link>
        </div>
      </div>
    </div>

    <footerInfo />
    <copyright />
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import footerInfo from '../components/footerInfo.vue';
import copyright from '../components/copyright.vue';
import { useHead } from '@unhead/vue';

const route = useRoute();
const router = useRouter()
const loading = ref(true)
const beneficio = ref(null)
const Beneficios = [
  {
    id: 1,
    name: 'RUNNING PAWS',
    direction: 'Trv 59 B No. 128 A - 83',
    tel: 3186146763,
    web: 'https://www.runningpaws.biz',
    desc: '15% de descuento en planes de educación y adiestramiento canino',
    contact: 'Harold Penna',
    img: 'https://res.cloudinary.com/diro0cqpe/image/upload/v1773625013/RUNNING_PAWS_LOGO2_rem3yf.png',
    imgFull: 'https://res.cloudinary.com/diro0cqpe/image/upload/v1773604373/AlianzaVetplusRunningPaws2018_xffa1h.png'
  }
]


useHead({
  title: computed(() => beneficio.value ? beneficio.value.name : "Cargando profesional..."),
  meta: [
    {
      name: 'description',
      // Corregido: profesional.desc suele ser un array según tu v-for, tomamos el primer párrafo para la meta tag
      content: computed(() => beneficio.value ? beneficio.value.desc : 'Conoce a nuestros profesionales en VetPlus.')
    },
    {
      property: "og:title",
      content: computed(() => beneficio.value ? `${beneficio.value.name} | VetPlus` : 'VetPlus')
    },
    {
      property: "og:image",
      content: computed(() => beneficio.value?.img || "https://res.cloudinary.com/diro0cqpe/image/upload/v1773625013/RUNNING_PAWS_LOGO2_rem3yf.png")
    }
  ]
})

onMounted(async () => {
  try {
    const idBusquedad = Number(route.params.id)
    beneficio.value = Beneficios.find((item) => item.id === idBusquedad)
    if (!beneficio.value) {
      console.warn("⚠️ Beneficio no encontrado, redirigiendo...")
      router.push('/beneficios')//Lo mandamos de vuelta a la lista
      return;
    }
  } catch (error) {
    console.error("❌ Error al cargar el profesional:", error);
  } finally {
    loading.value = false;
  }
})

</script>