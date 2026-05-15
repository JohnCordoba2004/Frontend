<template>
  <article class="group bg-white rounded-3xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-sky-200 overflow-hidden relative">
    <!-- Fondo decorativo -->
    <div class="absolute -right-8 -top-8 w-32 h-32 rounded-full opacity-0 group-hover:opacity-5 transition-opacity duration-300" :class="color.split('text-')[1] ? `bg-${color.split('text-')[1]}` : 'bg-sky-500'"></div>
    
    <div class="flex items-center justify-between relative z-10">
      <div>
        <p class="text-xs font-bold text-gray-400 uppercase tracking-widest">{{ label }}</p>
        <p class="text-5xl lg:text-6xl font-black text-gray-900 mt-3 tracking-tight leading-none">
          {{ value }}
        </p>
      </div>

      <div :class="`w-20 h-20 rounded-2xl flex items-center justify-center text-4xl shadow-lg group-hover:scale-110 transition-transform duration-300 ${color}`">
        <i :class="icon"></i>
      </div>
    </div>

    <div class="mt-6 flex items-center gap-3 text-sm">
      <span class="font-semibold" :class="trend.includes('+') ? 'text-emerald-600' : trend.includes('-') ? 'text-red-600' : 'text-gray-600'">
        <i :class="trend.includes('+') ? 'fas fa-arrow-up' : trend.includes('-') ? 'fas fa-arrow-down' : 'fas fa-minus'" class="mr-1"></i>
        {{ trend }}
      </span>
    </div>
  </article>
</template>

<script setup>
defineProps({
  label: {
    type: String,
    required: true
  },
  value: {
    type: [String, Number],
    required: true
  },
  trend: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  },
  color: {
    type: String,
    default: 'bg-gradient-to-br from-sky-100 to-blue-100 text-sky-600'
  }
});
</script>

<style scoped>
article {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

article:hover {
  transform: translateY(-4px);
}
</style>