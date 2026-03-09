<script setup lang="ts">
defineProps<{
  modelValue: string;
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
}>();

const onInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit('update:modelValue', target.value);
};

const clearSearch = () => {
  emit('update:modelValue', '');
};
</script>

<template>
  <div class="relative w-full max-w-sm">
    <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
      <svg class="h-5 w-5 text-[#cad3f5]/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    </div>
    <input
      type="text"
      :value="modelValue"
      @input="onInput"
      placeholder="Search blogs..."
      class="block w-full pl-10 pr-10 py-2 text-sm text-[#cad3f5] bg-[#181926] border border-[#cad3f5]/20 rounded-md focus:outline-none hover:bg-[#cad3f5]/10 focus:ring-1 focus:ring-[#cad3f5] placeholder-[#cad3f5]/50 transition-colors duration-200"
    />
    <button
      v-if="modelValue"
      @click="clearSearch"
      class="absolute inset-y-0 right-0 pr-3 flex items-center text-[#cad3f5]/50 hover:text-[#cad3f5] transition-colors"
      aria-label="Clear search"
    >
      <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  </div>
</template>
