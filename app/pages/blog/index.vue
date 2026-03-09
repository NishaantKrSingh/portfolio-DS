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
const searchQuery = ref("");

// Initialize from URL query
onMounted(() => {
  if (route.query.tag) {
    selectedTag.value = route.query.tag as string;
  }
  if (route.query.search) {
    searchQuery.value = route.query.search as string;
  }
});

// Watch for changes to update URL
watch([selectedTag, searchQuery], ([newTag, newSearch]) => {
  router.push({
    query: {
      ...route.query,
      tag: newTag || undefined,
      search: newSearch || undefined
    }
  });
});

const uniqueTags = computed(() => {
  const tags = allPosts.flatMap(post => post.tags || []);
  return [...new Set(tags)];
});

const filteredPosts = computed(() => {
  let posts = allPosts;
  
  if (selectedTag.value) {
    posts = posts.filter(post => post.tags && post.tags.includes(selectedTag.value));
  }
  
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase();
    posts = posts.filter(post => {
      const titleMatch = post.title?.toLowerCase().includes(query);
      const descMatch = post.description?.toLowerCase().includes(query);
      return titleMatch || descMatch;
    });
  }
  
  return posts;
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

      <!-- Filters -->
      <div class="mb-8 flex flex-col sm:flex-row gap-4 justify-between items-center z-10 w-full relative">
        <ElementsSearchBar v-model="searchQuery" />
        <ElementsTagDropdown 
          class="sm:flex-shrink-0"
          v-if="uniqueTags.length > 0"
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