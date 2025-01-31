<template>
    <div class="flex flex-col px-4 lg:px-8 py-12 bg-blue-5 rounded-[20px] gap-[48px] group">
        <p class="text-h2 xl:text-h1 text-center lg:text-start text-blue-1 header-one">{{ projectTitle }}</p>
        <div class="flex max-h-[360px] flex-col lg:flex-row gap-[48px]">
            <div class="flex self-center justify-center items-start">
                <img :src="projectImage" alt="Project Screenshot" class="max-w-[240px] lg:max-w-[640px] max-h-[160px] lg:max-h-[360px] w-full h-auto grayscale group-hover:grayscale-0"/>
            </div>
            <div class="flex flex-col gap-[16px] overflow-y-auto pr-4">
                <p class="text-blue-1 text-b2 xl:text-b1 max-w-[528px] text-justify body-one">{{ projectDescription }} {{ projectDescription }}</p>
                <div class="flex flex-wrap gap-[12px] lg:gap-[24px]">
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