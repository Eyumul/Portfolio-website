<template>
    <a :href="achievementImage" target="_blank" class="w-full flex justify-center md:w-[80%]"> 
        <div class="hidden md:flex border-[1px] hover:bg-blue-4 hover:drop-shadow-lg cursor-custom-pointer transition-colors duration-500 ease-in-out border-blue-4 gap-[48px] xl:gap-[80px] 2xl:gap-[116px] px-[24px] py-[24px] 2xl:py-[48px] max-w-[1216px] rounded-[8px] group">
            <div class="flex justify-center items-center">
                <img :src="achievementImage" alt="certificate" class="max-w-[240px] w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-500 ease-in-out"/>
            </div>
            <div class="flex flex-col w-full">
                <p class="text-b1 xl:text-h3 text-green-2 mb-[16px] header-three">{{ achievementTitle }}</p>
                <div class="flex w-full justify-between gap-8 text-blue-1 text-b2 xl:text-b1 mb-[24px]">
                    <p class="body-two">{{ organization }}</p>
                    <p class="body-two italic">{{ date }}</p>
                </div>
                <p class="text-b2 xl:text-b1 text-blue-1 group-hover:text-white transition-colors duration-500 ease-in-out body-one">{{ achievementDescription }}</p>
            </div>
        </div>
        <div class="md:hidden max-w-[360px] mx-[24px] h-full">
            <RotatingBox>
                <template #front>
                    <div class="flex flex-col items-center text-blue-1 gap-[16px]">
                        <img :src="achievementImage" alt="certificate" class="w-full h-auto"/>
                    </div>
                </template>
                <template #back>
                    <div class="flex flex-col items-center w-full">
                        <p class="text-center text-b1 xl:text-h3 text-green-2 mb-[16px] header-three">{{ achievementTitle }}</p>
                        <p class="text-center body-two text-blue-1 text-b2 mb-[24px]">{{ organization }}</p>
                        <p class="text-center body-two italic text-blue-1 text-b2 mb-[24px]">{{ date }}</p>
                        <p class="text-center text-b2 xl:text-b1 text-blue-1 group-hover:text-white transition-colors duration-500 ease-in-out body-one">{{ achievementDescription }}</p>
                    </div>
                </template>
            </RotatingBox>
        </div>
    </a>
</template>

<script setup>
const props = defineProps([
    'achievementImage',
    'achievementTitle',
    'date',
    'organization',
    'achievementDescription'
])
</script>

<style scoped>

</style>