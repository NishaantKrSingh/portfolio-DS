<script setup lang="ts">
import type { NuxtError } from '#app'
import { Home as LucideHome } from 'lucide-vue-next'
const props = defineProps({
  error: Object as () => NuxtError
})

const handleError = () => clearError({ redirect: '/' })

// For SEO purposes on error pages
useSeoMeta({
  title: `${props.error?.statusCode || 500} - An error occurred`,
  description: props.error?.statusMessage || 'An unexpected error occurred.',
})
</script>

<template>
  <div class="min-h-screen bg-macchiato-base text-macchiato-text flex flex-col items-center justify-center px-6 font-sans selection:bg-macchiato-surface2 selection:text-macchiato-text">
    <div class="w-full max-w-xl text-center flex flex-col items-center">
      
      <div class="mb-10 flex flex-col items-center">
        <!-- Minimal subtle error code -->
        <span class="text-macchiato-surface2 font-mono text-sm tracking-[0.2em] font-medium uppercase mb-6">
          Error {{ error?.statusCode || '500' }}
        </span>
        
        <h1 class="text-4xl md:text-5xl font-bold text-macchiato-text font-poppins tracking-tight mb-6">
          {{ error?.statusMessage || 'Page not found' }}
        </h1>
        
        <div class="w-12 h-1 bg-macchiato-mauve rounded-full mb-8 opacity-80"></div>
        
        <p class="text-macchiato-subtext0 text-lg leading-relaxed font-quicksand max-w-md mx-auto">
          {{ 
            error?.statusCode === 404 
              ? "The page you are looking for might have been removed, had its name changed, or is temporarily unavailable." 
              : "We're experiencing an internal server issue. Please try again later."
          }}
        </p>
      </div>
      
      <button 
        @click="handleError" 
        class="group inline-flex items-center justify-center outline-none"
      >
        <div class="flex items-center gap-3 border border-macchiato-surface1 rounded-full px-6 py-3 transition-all duration-300 bg-macchiato-mantle text-macchiato-text hover:border-macchiato-mauve hover:text-macchiato-mauve shadow-sm group-focus:ring-2 group-focus:ring-macchiato-mauve group-focus:ring-offset-2 group-focus:ring-offset-macchiato-base">
          <LucideHome class="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
          <span class="font-medium text-sm font-poppins text-inherit tracking-wide">Back to Home</span>
        </div>
      </button>

    </div>
  </div>
</template>
