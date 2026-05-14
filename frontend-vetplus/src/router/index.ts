import { createRouter, createWebHistory } from "vue-router";
import { useUserStore } from "../stores/userStore";
import Home from "../pages/Home.vue";
import Planes from "../pages/Planes.vue";
import PetSalud from "../pages/PetSalud.vue";
import Afiliate from "../pages/Afiliate.vue";
import porQuePetSalud from "../pages/porQuePetSalud.vue";
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
import Admin from "../pages/Admin.vue";
import Login from "../pages/Login.vue";

const routes = [
  /* Example routes */
  { path: "/", component: Home, name: "Home" },

  /* ADMIN */
  {
    path: "/admin",
    component: Admin,
    name: "Admin",
    meta: { requiresAdmin: true },
  },

  /* Planes */
  { path: "/Planes", component: Planes, name: "Planes" },
  // 🟢 Nueva ruta dinámica
  /* Detalles */
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
  { path: "/PetSalud", component: PetSalud, name: "PetSalud" },
  { path: "/Afiliate", component: Afiliate, name: "Afiliate" },
 
  /* Ver mas */
  {
    path: "/beneficios",
    component: beneficios,
    meta: {
      title: "Beneficios Exclusivos",
      description:
        "Conoce los descuentos y ventajas de estar afiliado a PetSalud.",
    },
  },
  {
    path: "/porQuePetSalud",
    component: porQuePetSalud,
    name: "porquePetSalud",
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
  {
    path: "/login",
    component: Login,
    name: "Login",
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, _from, next) => {
  const userStore = useUserStore();

  if (to.meta.requiresAdmin && !userStore.esAdmin) {
    next({ name: "Login" });
  } else {
    next();
  }
});
