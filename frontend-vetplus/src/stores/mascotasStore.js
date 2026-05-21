import { defineStore } from "pinia";

/** Claves de edad en tablaPrecios: Perros vs Gatos (no intercambiables). */
export const EDAD_PERRO = [
  "3 a 11 meses",
  "1 a 4 años",
  "5 a 6 años",
  "7 a 8 años",
  "9 o más años",
];
export const EDAD_GATO = [
  "3 a 11 meses",
  "12 meses a 4 años",
  "5 a 8 años",
  "9 a 12 años",
];

export const useMascotaStore = defineStore("mascota", {
  state: () => ({
    datosMascota: {
      nombreMascota: "",
      especie: "", // 'Perros' | 'Gatos'
      esDeRaza: null,
      raza: "",
      edad: "",
      peso: "", // solo aplica a Perros sin raza (tabla SinRaza por peso)
      comoSupo: "",
      detalleComoSupo: "",
      planSeleccionado: "", // 'Basico' | 'Avanzado' | 'Premium' | 'Elite'
      tipoPreventivo: "Premium", // 'Premium' | 'Basico'
      cobertura: "70%", // '70%' | '80%' | '90%'
      valorMensual: 0,
      fechaNacimiento: "",
      colorMascota: "",
      microchip: null, //Por lo genreal son 15 numeros que traen los microchip
    },
  }),
  actions: {
    //Función para actualizar los datos desde cualquier paso
    actualizarDatos(nuevosDatos) {
      this.datosMascota = {
        ...this.datosMascota,
        ...nuevosDatos,
      };
    },
  },
});
