import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Planes from "../pages/Planes.vue";
import VetPlus from "../pages/VetPlus.vue";
import Afiliate from "../pages/Afiliate.vue";
import porQueVetplus from "../pages/porQueVetplus.vue";
import emergenciaMascota from "../pages/emergenciaMascota.vue";
import metodosDePago from "../pages/metodosDePago.vue";
import planReferidos from "../pages/planReferidos.vue";
import compromiso from "../pages/compromiso.vue";
import nuestraRed from "../pages/nuestraRed.vue";
import planesPerro from "../pages/planesPerro.vue";
import planesGato from "../pages/planesGato.vue";
import clinicasVeterinarias from "../pages/clinicasVeterinarias.vue";
import profesionalesVeterinarios from "../pages/profesionalesVeterinarios.vue";
import otros from "../pages/otros.vue";
import beneficios from "../pages/beneficios.vue";
const routes = [
  /* Example routes */
  { path: "/", component: Home, name: "Home" },

  /* Planes */
  { path: "/Planes", component: Planes, name: "Planes" },
  // 🟢 Nueva ruta dinámica
  {
    path: "/planes/:id",
    component: () => import("../pages/PlanDetail.vue"),
    name: "PlanDetail",
    props: true,
  },
  {
    path: "/profesionales/:id",
    component: () => import("../pages/profesionalesDetail.vue"),
    name: "profesionalesDetail",
    props: true,
  },
  {
    path: "/beneficios/:id",
    component: () => import("../pages/beneficiosDetail.vue"),
    name: "beneficiosDetail",
    props: true,
  },

  /* Afiliate */
  { path: "/VetPlus", component: VetPlus, name: "VetPlus" },
  { path: "/Afiliate", component: Afiliate, name: "Afiliate" },
  /* Ver mas */
  {
    path: "/beneficios",
    component: beneficios,
    meta: {
      title: "Beneficios Exclusivos",
      description:
        "Conoce los descuentos y ventajas de estar afiliado a VetPlus.",
    },
  },
  {
    path: "/porQueVetplus",
    component: porQueVetplus,
    name: "porqueVetplus",
  },
  {
    path: "/emergenciaMascota",
    component: emergenciaMascota,
    name: "emergenciaMascota",
  },
  {
    path: "/metodosDePago",
    component: metodosDePago,
    name: "metodosDePago",
  },
  {
    path: "/planReferidos",
    component: planReferidos,
    name: "planReferido",
  },
  {
    path: "/Compromiso",
    component: compromiso,
    name: "compromiso",
  },
  {
    path: "/NuestraRed",
    component: nuestraRed,
    name: "NuestraRed",
  },
  {
    path: "/PlanesPerro",
    component: planesPerro,
    name: "PlanesPerro",
  },
  {
    path: "/PlanesGato",
    component: planesGato,
    name: "PlanesGato",
  },
  {
    path: "/ClinicasVeterinarias",
    component: clinicasVeterinarias,
    name: "ClinicasVeterinarias",
  },
  {
    path: "/ProfesionalesVet",
    component: profesionalesVeterinarios,
    name: "ProfesionalesVeterinarios",
  },
  {
    path: "/Otros",
    component: otros,
    name: "Otros",
  },
  {
    path: "/Beneficios",
    component: beneficios,
    name: "Beneficios",
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
