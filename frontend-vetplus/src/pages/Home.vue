<script setup lang="ts">
import DeInteres from '../components/deInteres.vue';
import HeroSection from '../components/HeroSection.vue';
import MedicinaPreventiva from '../components/MedicinaPreventiva.vue';
import PlanesPrincipales from '../components/PlanesPrincipales.vue';
import PetSalud from '../components/PetSalud.vue';
// import Copyright from '../components/copyright.vue';
import footerInfo from '../components/footerInfo.vue'

import { useHead } from '@unhead/vue';
useHead({
  title: 'Medicina Prepagada Veterinaria',
  meta: [
    {
      name: 'description',
      content: 'ofrece la mejor red de servicios médicos veterinarios prepagados. Protegemos a tu mejor amigo con atención profesional y calidez.'
    }
  ]
})
</script>

<template>
  <div>
    <!-- Hero section -->
    <HeroSection />
    <!-- PetSalud -->
    <PetSalud />
    <!-- PlanesPrincipales -->
    <PlanesPrincipales />
    <!-- Planes Medicina Preventiva -->
    <MedicinaPreventiva />
    <!-- Interes -->
    <DeInteres />
    <!-- Copy -->
    <!-- <Copyright /> -->
    <footerInfo />
  </div>
</template>
