/* ===============================
   🐶🐱 RANGOS POR ESPECIE (MESES)
================================= */

/** Claves iguales que `EDAD_PERRO` / `EDAD_GATO` en mascotasStore (y tablas de precios). */
const rangosPerro = {
  '3 a 11 meses': {
    min: 3,
    max: 11
  },
  '1 a 4 años': {
    min: 12,
    max: 48
  },
  '5 a 6 años': {
    min: 60,
    max: 72
  },
  '7 a 8 años': {
    min: 84,
    max: 96
  },
  '9 o más años': {
    min: 108,
    max: 180
  }
}

const rangosGato = {
  '3 a 11 meses': {
    min: 3,
    max: 11
  },
  '12 meses a 4 años': {
    min: 12,
    max: 48
  },
  '5 a 8 años': {
    min: 60,
    max: 96
  },
  '9 a 12 años': {
    min: 108,
    max: 144
  }
}


/** `YYYY-MM-DD` del calendario local (evita desfase de `toISOString()` y de `Date('YYYY-MM-DD')` en UTC). */
function formatoFechaLocal(d) {
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${y}-${m}-${day}`
}

/** Parsea valor de `<input type="date">` como fecha local. */
function parseFechaNacimiento(fecha) {
  if (fecha == null || fecha === '') return null
  if (fecha instanceof Date) return Number.isNaN(fecha.getTime()) ? null : fecha
  const s = String(fecha).trim()
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(s)
  if (m) {
    const y = Number(m[1])
    const mo = Number(m[2]) - 1
    const day = Number(m[3])
    const d = new Date(y, mo, day)
    return Number.isNaN(d.getTime()) ? null : d
  }
  const d = new Date(s)
  return Number.isNaN(d.getTime()) ? null : d
}

/* ===============================
   📅 CALCULAR EDAD EN MESES
================================= */

export const calcularEdadMeses = (fecha) => {
  const nacimiento = parseFechaNacimiento(fecha)
  if (!nacimiento) return 0

  const hoy = new Date()

  let años = hoy.getFullYear() - nacimiento.getFullYear()
  let meses = hoy.getMonth() - nacimiento.getMonth()

  let totalMeses = años * 12 + meses

  // 🔥 ajuste suave (opcional pero recomendado)
  if (hoy.getDate() < nacimiento.getDate()) {
    totalMeses -= 0.5 // medio mes en vez de restar 1 completo
  }

  return Math.floor(totalMeses)
}


/* ===============================
   ✅ VALIDAR EDAD VS PLAN
================================= */

export const validarEdadMascota = (edadSeleccionada, fecha, especie) => {
  if (!edadSeleccionada || !fecha || !especie) return false

  const meses = calcularEdadMeses(fecha)

  const tabla = especie === 'Perros' ? rangosPerro : rangosGato
  const rango = tabla[edadSeleccionada]

  if (!rango) return false

  return meses >= rango.min && meses <= rango.max
}


/* ===============================
   📆 OBTENER RANGO DE FECHAS
================================= */

export const obtenerRangoFechas = (edadSeleccionada, especie) => {
  if (!edadSeleccionada || !especie) return null

  const tabla = especie === 'Perros' ? rangosPerro : rangosGato
  const rango = tabla[edadSeleccionada]

  if (!rango) return null

  const hoy = new Date()

  const fechaMin = new Date(hoy)

  // 🔥 manejar Infinity correctamente
  if (rango.max === Infinity) {
    fechaMin.setFullYear(hoy.getFullYear() - 100)
  } else {
    fechaMin.setMonth(hoy.getMonth() - rango.max)
  }

  const fechaMax = new Date(hoy)
  fechaMax.setMonth(hoy.getMonth() - rango.min)

  return {
    min: formatoFechaLocal(fechaMin),
    max: formatoFechaLocal(fechaMax)
  }
}


/* ===============================
   🚫 FECHA MÁXIMA (NO FUTURO)
================================= */

export const obtenerFechaMaxHoy = () => formatoFechaLocal(new Date())