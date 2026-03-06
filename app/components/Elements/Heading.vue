<script setup>
    defineProps({
  heading: String,
  description: String
})
</script>

<template>
    <div>
            <h1 class="text-[#cad3f5] text-4xl ml-4 p-2 font-bold">
                <div class="p-1 gap-2 font-poppins"> {{heading}}
                </div>
            </h1>
            <div class='text-[#b8c0e0] ml-8 font-semibold font-quicksand text-[19px]'>
                <p>{{description}}</p>
            </div>
        </div>
</template>