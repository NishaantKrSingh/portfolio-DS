<script setup lang="ts">
useSeoMeta({
  titleTemplate: '%s | Nishant',
  ogImage: '/og-image.png', // Ensure this file exists in public/ or update path
  twitterCard: 'summary_large_image',
})

useSchemaOrg([
  definePerson({
    name: 'Nishant Singh',
    image: '/profile/profile-pic.png', // Ensure this matches your avatar path
    sameAs: [
      'https://github.com/NishaantKrSingh', // Update with actual links if known, or ask user
      'https://linkedin.com/in/NishaantKrSingh'
    ]
  })
])
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
