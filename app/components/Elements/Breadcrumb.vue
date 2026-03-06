<script setup lang="ts">
interface BreadcrumbItem {
  label: string
  to?: string
}

defineProps<{
  items: BreadcrumbItem[]
}>()
</script>

<template>
  <nav class="flex mb-6 overflow-x-auto no-scrollbar whitespace-nowrap" aria-label="Breadcrumb">
    <ol class="flex items-center space-x-2 text-sm font-medium">
      <li v-for="(item, index) in items" :key="index" class="flex items-center">
        <!-- Separator -->
        <span v-if="index > 0" class="mx-2 text-gray-600 flex-shrink-0">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </span>

        <!-- Link or Label -->
        <NuxtLink
          v-if="item.to && index < items.length - 1"
          :to="item.to"
          class="text-gray-500 hover:text-macchiato-mauve transition-colors duration-200"
        >
          {{ item.label }}
        </NuxtLink>
        <span
          v-else
          :class="[
            index === items.length - 1 ? 'text-white font-semibold truncate max-w-[200px] sm:max-w-md' : 'text-gray-500'
          ]"
        >
          {{ item.label }}
        </span>
      </li>
    </ol>
  </nav>
</template>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
