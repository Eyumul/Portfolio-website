<template>
    <div class="border-[1px] hover:bg-blue-4 hover:drop-shadow-lg cursor-pointer transition-colors duration-500 ease-in-out border-blue-4 flex gap-[116px] px-[24px] py-[48px] max-w-[1216px] rounded-[8px] group">
        <img src="~/assets/images/StrideAwardCertificate.png" alt="certificate" class="w-[240px] grayscale group-hover:grayscale-0 transition-all duration-500 ease-in-out"/>
        <div class="flex flex-col w-full">
            <p class="text-h3 text-green-2 mb-[16px] header-three">{{ achievementTitle }}</p>
            <div class="flex w-full justify-between text-blue-1 text-b1 mb-[24px]">
                <p class="body-two">{{ organization }}</p>
                <p class="body-two italic">{{ date }}</p>
            </div>
            <p class="text-b1 text-blue-1 group-hover:text-white transition-colors duration-500 ease-in-out body-one">{{ achievementDescription }}</p>
        </div>
    </div>
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