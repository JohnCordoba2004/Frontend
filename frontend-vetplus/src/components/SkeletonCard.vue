<template>
  <div
    class="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm animate-pulse w-full flex flex-col">
    <!-- Imagen skeleton -->
    <div class="h-52 bg-slate-200 w-full shrink-0"></div>

    <!-- Contenido -->
    <div class="p-6 lg:p-7 flex flex-col gap-4 flex-1">
      <!-- Pill tipo -->
      <div class="h-5 bg-slate-200 rounded-full w-1/4"></div>
      <!-- Título -->
      <div class="h-6 bg-slate-200 rounded-xl w-3/4"></div>
      <!-- Descripción -->
      <div class="flex flex-col gap-2">
        <div class="h-3.5 bg-slate-100 rounded-xl w-full"></div>
        <div class="h-3.5 bg-slate-100 rounded-xl w-5/6"></div>
        <div class="h-3.5 bg-slate-100 rounded-xl w-4/6"></div>
      </div>
      <!-- Beneficios -->
      <div class="flex flex-col gap-2.5 flex-1 mt-2">
        <div v-for="i in 4" :key="i" class="flex items-center gap-2.5">
          <div class="w-5 h-5 rounded-full bg-slate-200 shrink-0"></div>
          <div class="h-3.5 bg-slate-100 rounded-xl" :class="i % 2 === 0 ? 'w-4/5' : 'w-full'"></div>
        </div>
      </div>
      <!-- Botón -->
      <div class="h-12 bg-slate-200 rounded-2xl w-full mt-2"></div>
    </div>
  </div>
</template>