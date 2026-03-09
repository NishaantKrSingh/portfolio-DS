<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const props = defineProps<{
  tags: string[];
  modelValue: string;
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
}>();

const isOpen = ref(false);
const dropdownContainer = ref<HTMLElement | null>(null);

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const selectTag = (tag: string) => {
  emit('update:modelValue', tag);
  isOpen.value = false;
};

const handleClickOutside = (event: MouseEvent) => {
  if (dropdownContainer.value && !dropdownContainer.value.contains(event.target as Node)) {
    isOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
});
</script>

<template>
  <div class="relative inline-block text-left" ref="dropdownContainer">
    <div>
      <button
        type="button"
        @click="toggleDropdown"
        class="inline-flex justify-between items-center w-full px-4 py-2 text-sm font-medium text-[#cad3f5] bg-[#181926] border border-[#cad3f5]/20 rounded-md hover:bg-[#cad3f5]/10 focus:outline-none transition-colors duration-200"
        id="options-menu"
        aria-haspopup="true"
        :aria-expanded="isOpen"
      >
        <span>{{ modelValue || 'All Tags' }}</span>
        <svg
          class="-mr-1 ml-2 h-5 w-5 transition-transform duration-200"
          :class="{ 'rotate-180': isOpen }"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </div>

    <transition
      enter-active-class="transition ease-out duration-100"
      enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <div
        v-if="isOpen"
        class="origin-top-left absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-[#24273a] ring-1 ring-black ring-opacity-5 focus:outline-none z-10"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="options-menu"
      >
        <div class="py-1 max-h-60 overflow-y-auto" role="none">
          <button
            @click="selectTag('')"
            class="block w-full text-left px-4 py-2 text-sm transition-colors duration-150"
            :class="[
              modelValue === '' 
                ? 'bg-[#cad3f5]/20 text-[#cad3f5] font-semibold' 
                : 'text-[#cad3f5]/70 hover:bg-[#cad3f5]/10 hover:text-[#cad3f5]'
            ]"
            role="menuitem"
          >
            All Tags
          </button>
          <button
            v-for="tag in tags"
            :key="tag"
            @click="selectTag(tag)"
            class="block w-full text-left px-4 py-2 text-sm transition-colors duration-150"
            :class="[
              modelValue === tag
                ? 'bg-[#cad3f5]/20 text-[#cad3f5] font-semibold'
                : 'text-[#cad3f5]/70 hover:bg-[#cad3f5]/10 hover:text-[#cad3f5]'
            ]"
            role="menuitem"
          >
            {{ tag }}
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>
