<script setup lang="ts">
import DeInteres from '../components/deInteres.vue';
import HeroSection from '../components/HeroSection.vue';
import MedicinaPreventiva from '../components/MedicinaPreventiva.vue';
import PlanesPrincipales from '../components/PlanesPrincipales.vue';
import VetPlus from '../components/VetPlus.vue';
import footerInfo from '../components/footerInfo.vue';
import Copyright from '../components/copyright.vue';
import { useHead } from '@unhead/vue';
useHead({
  title: 'Medicina Prepagada Veterinaria',
  meta: [
    {
      name: 'description',
      content: 'VetPlus ofrece la mejor red de servicios médicos veterinarios prepagados. Protegemos a tu mejor amigo con atención profesional y calidez.'
    }
  ]
})
</script>

<template>
  <div>
    <!-- Hero section -->
    <HeroSection />
    <!-- Vetplus -->
    <VetPlus />
    <!-- PlanesPrincipales -->
    <PlanesPrincipales />
    <!-- Planes Medicina Preventiva -->
    <MedicinaPreventiva />
    <!-- Interes -->
    <DeInteres />
    <!-- footer info -->
    <footerInfo />
    <!-- Copy -->
    <Copyright />


  </div>
</template>