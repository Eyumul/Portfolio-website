<template>
    <div class="flex flex-col w-fit gap-[64px] group">
        <p class="text-h1 text-blue-1 header-one">{{ projectTitle }}</p>
        <div class="flex gap-[48px]">
            <img :src="projectImage" alt="Project Screenshot" class="w-[640px] grayscale drop-shadow-xl group-hover:grayscale-0"/>
            <div class="flex flex-col gap-[16px]">
                <p class="text-blue-1 text-b1 max-w-[528px] text-justify body-one">{{ projectDescription }}</p>
                <div class="flex gap-[24px]">
                    <badge v-for="techStack in techStacks" :key="techStack" :identifier="techStack"/>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>
const props = defineProps([
    'projectTitle',
    'projectImage',
    'projectDescription',
    'techStacks'
])
</script>

<style scoped>

</style>