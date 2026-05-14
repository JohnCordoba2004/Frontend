<template>
  <div class="bg-white rounded-3xl p-8 shadow-sm hover:shadow transition-all">
    <div class="flex items-center justify-between">
      <div>
        <p class="text-sm text-gray-500 font-medium">{{ label }}</p>
        <p class="text-4xl lg:text-5xl font-bold text-gray-900 mt-3 tracking-tighter">
          {{ value }}
        </p>
      </div>

      <div :class="`w-14 h-14 rounded-2xl flex items-center justify-center text-3xl ${color}`">
        <i :class="icon"></i>
      </div>
    </div>

    <div class="mt-6 flex items-center gap-2 text-sm">
      <span :class="trend.includes('+') ? 'text-emerald-600' : 'text-red-600'">
        {{ trend }}
      </span>
      <span class="text-gray-400">este mes</span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  label: String,
  value: [String, Number],
  trend: String,
  icon: String,
  color: {
    type: String,
    default: 'text-sky-600'
  }
});
</script>