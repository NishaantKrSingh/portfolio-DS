<script setup>
import { ref, computed } from "vue";
const props = defineProps({
  title: String,
  date: String,
  description: String,
  tags: {
    type: Array,
    default: () => [],
  },
});

const tagColors = [
  "bg-[#8aadf4]/20 text-blue-300 border-[#8aadf4]/30",
  "bg-[#a6da95]/20 text-green-300 border-[#a6da95]/30",
  "bg-[#c6a0f6]/20 text-purple-300 border-[#c6a0f6]/30",
  "bg-[#f5bde6]/20 text-pink-300 border-[#f5bde6]/30",
  "bg-[#eed49f]/20 text-yellow-300 border-[#eed49f]/30",
  "bg-[#ed8796]/20 text-red-300 border-[#ed8796]/30",
];

const getTagColor = (index) => {
  return tagColors[index % tagColors.length];
};

const visibleTags = computed(() => {
  return props.tags.slice(0, 2);
});

const show_desc = computed(() => {
  const limit = 20
  const words = props.description.split(' ')
  if (words.length > limit){
    const truncated = words.slice(0, limit).join(' ');
    return truncated + "..."
  } 
  return props.description
})

const extraCount = computed(() => {
  return Math.max(props.tags.length - 2, 0);
});

// Date
const formattedDate = computed(() => {
  if (!props.date) return "";
  return new Date(props.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
});
</script>

<template>
  <div class="flex justify-center sm:px-4 md:px-5">
    <div
      class="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-full transition duration-300 hover:bg-[#1e2030] backdrop-blur-md rounded-2xl p-5 cursor-pointer shadow-lg group border-[#1e2030] border-2"
    >
      <h2 class="font-bold font-poppins text-lg sm:text-xl text-[#cad3f5]">
        {{ title }}
      </h2>

      <h3 class="text-sm font-mono mt-1 text-[#a5adcb]">
        {{ formattedDate }}
      </h3>

      <p class="text-[#939ab7] mt-3 font-quicksand">
        {{ show_desc }}
      </p>

      <div class="flex flex-wrap gap-2 mt-4">
        <span
          v-for="(tag, index) in visibleTags"
          :key="index"
          :class="['text-xs font-mono px-3 py-1 rounded-full border', getTagColor(index)]"
        >
          {{ tag }}
        </span>

        <span
          v-if="extraCount > 0"
          class="text-xs px-3 py-1 rounded-full bg-[#24273a] text-[#939ab7] border border-[#1e2030] cursor-pointer"
        >
          +{{ extraCount }}
        </span>
      </div>
    </div>
  </div>
</template>
