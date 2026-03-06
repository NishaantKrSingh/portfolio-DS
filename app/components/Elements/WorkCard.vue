<script setup>
import { computed } from "vue";

const props = defineProps({
  role: String,
  company: String,
  location: String,
  startDate: String,
  endDate: String,
  description: String,
  skills: {
    type: Array,
    default: () => [],
  },
  isLast: Boolean,
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

const formatDate = (date) => {
  if (!date) return "Present";
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

const duration = computed(
  () => `${formatDate(props.startDate)} — ${formatDate(props.endDate)}`
);


</script>

<template>
  <div class="relative px-12 pb-1">
    <div
      v-if="!isLast"
      class="absolute left-7 top-10 h-full w-px bg-zinc-700"
      style="height: calc(100% - (-1rem));"
    ></div>
    <div class="absolute left-5 top-5 z-10">
      <span
        class="flex items-center justify-center w-5 h-5 rounded-full bg-[#8aadf4] border border-[#7dc4e4]"
      >
        <span class="w-2 h-2 rounded-full bg-black"></span>
      </span>
    </div>

    <div
      class="relative pl-4 pb-4 pt-4 pr-10 border-2 border-[#1e2030] rounded-2xl transition duration-300 hover:bg-[#1e2030]"
    >
      <div class="flex flex-col gap-1">
        <div
          class="flex flex-col sm:flex-row sm:items-center justify-between gap-2"
        >
          <div>
            <h3
              class="text-2xl font-poppins font-bold text-[#cad3f5] tracking-tight leading-none"
            >
              {{ role }}
            </h3>
            <div class="flex items-center gap-2 mt-2">
              <span class="text-[#8aadf4] font-medium font-mono">{{ company }}</span>
              <span class="text-[#a5adcb]">•</span>
              <span class="text-[#a5adcb] text-sm italic">{{ location }}</span>
            </div>
          </div>

          <div
            class="text-sm font-mono text-[#b8c0e0] bg-[#1e2030] px-3 md:min-w-55 py-1 rounded-full self-start"
          >
            {{ duration }}
          </div>
        </div>

        <p class="mt-4 text-[#b8c0e0] font-quicksand leading-relaxed max-w-4xl">
          {{ description }}
        </p>

        <div class="flex flex-wrap gap-2 mt-3">
          <span
            v-for="(skill, index) in skills"
            :key="skill"
            :class="[
              'px-3 py-1 text-[11px] uppercase tracking-wider  font-mono font-semibold border rounded-md transition-all cursor-default',
              getTagColor(index)
            ]"
          >
            {{ skill }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
