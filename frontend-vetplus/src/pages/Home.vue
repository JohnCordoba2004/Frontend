<script setup lang="ts">
import DeInteres from '../components/deInteres.vue';
import HeroSection from '../components/HeroSection.vue';
import MedicinaPreventiva from '../components/MedicinaPreventiva.vue';
import PlanesPrincipales from '../components/PlanesPrincipales.vue';
import VetPlus from '../components/VetPlus.vue';
import footerInfo from '../components/footerInfo.vue';
import copyright from '../components/copyright.vue';
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
    <!-- copy -->
    <copyright />
  </div>
</template>