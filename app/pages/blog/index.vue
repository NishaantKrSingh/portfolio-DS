<script setup lang="ts">
import { computed, ref, watch, onMounted } from 'vue';
import { useRoute, useRouter } from '#imports';

// This query fetches all documents from the 'content' collection.
const allPosts = await queryCollection("blog").order("date", "DESC").all();

const tagColors = [
  "bg-blue-500/20 text-blue-300 border-blue-500/30",
  "bg-green-500/20 text-green-300 border-green-500/30",
  "bg-purple-500/20 text-purple-300 border-purple-500/30",
  "bg-pink-500/20 text-pink-300 border-pink-500/30",
  "bg-red-500/20 text-red-300 border-red-500/30",
];

const route = useRoute();
const router = useRouter();

const selectedTag = ref("");

// Initialize from URL query
onMounted(() => {
  if (route.query.tag) {
    selectedTag.value = route.query.tag as string;
  }
});

// Watch for changes to update URL
watch(selectedTag, (newTag) => {
  router.push({
    query: {
      ...route.query,
      tag: newTag || undefined
    }
  });
});

const uniqueTags = computed(() => {
  const tags = allPosts.flatMap(post => post.tags || []);
  return [...new Set(tags)];
});

const filteredPosts = computed(() => {
  if (!selectedTag.value) {
    return allPosts;
  }
  return allPosts.filter(post => post.tags && post.tags.includes(selectedTag.value));
});
</script>

<template>
  <div class="bg-[#181926] min-h-screen">
    <div class="max-w-xl mx-auto px-1 py-18">
      
      <ElementsHeading
        heading="blogs"
        description="things i have written..."
        class="mb-10" 
      />

      <!-- Tags Filter -->
      <div v-if="uniqueTags.length > 0" class="mb-8 flex justify-end">
        <ElementsTagDropdown 
          :tags="uniqueTags" 
          v-model="selectedTag" 
        />
      </div>

      <div class="flex flex-col gap-6">
        <NuxtLink
          v-for="blog in filteredPosts"
          :key="blog.path"
          :to="blog.path"
          class="group block"
        >
          <ElementsCards
            :title="blog.title"
            :date="blog.date"
            :description="blog.description"
            :tags="blog.tags"
          />
        </NuxtLink>
      </div>
      
    </div>
  </div>
</template>