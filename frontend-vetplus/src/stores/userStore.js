import {
  defineStore
} from 'pinia'

const SESION_STORAGE_KEY = 'petsalud_sesion'

function getSesionInicial() {
  if (typeof window === 'undefined') {
    return {
      token: '',
      usuario: '',
      rol: ''
    }
  }

  const sesionGuardada = localStorage.getItem(SESION_STORAGE_KEY)

  if (!sesionGuardada) {
    return {
      token: '',
      usuario: '',
      rol: ''
    }
  }

  try {
    return JSON.parse(sesionGuardada)
  } catch {
    localStorage.removeItem(SESION_STORAGE_KEY)
    return {
      token: '',
      usuario: '',
      rol: ''
    }
  }
}

export const useUserStore = defineStore('user', {
  state: () => ({
    datosUsuario: {
      nombres: '',
      apellidos: '',
      documento: '',
      ciudad: '',
      telefono: '',
      celular: '',
      direccion: '',
      barrio: '',
      email: ''
    },
    sesion: getSesionInicial()
  }),
  actions: {
    actualizarDatos(nuevosDatos) {
      this.datosUsuario = {
        ...this.datosUsuario,
        ...nuevosDatos
      }
    },

    guardarSesion(datosAd) {
      this.sesion = {
        ...this.sesion,
        ...datosAd
      }

      if (typeof window !== 'undefined') {
        localStorage.setItem(SESION_STORAGE_KEY, JSON.stringify(this.sesion))
      }
    },

    logout() {
      this.sesion = {
        token: '',
        usuario: '',
        rol: ''
      }

      if (typeof window !== 'undefined') {
        localStorage.removeItem(SESION_STORAGE_KEY)
      }
    },
  },
  getters: {
    esAdmin() {
      return this.sesion.rol === 'admin';
    }
  }
})