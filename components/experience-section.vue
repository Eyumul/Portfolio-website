<template>
    <div class="flex flex-col items-center gap-[64px] max-w-[709px] group cursor-pointer">
        <img src="../assets/images/minab_logo_full_big_darkmood.png" alt="company_picture" class="w-[372px] grayscale group-hover:grayscale-0 transition-all duration-500 ease-in-out"/>
        <div class="flex flex-col items-center text-blue-1 gap-[16px]">
            <p class="text-h1 header-one">{{ position }}</p>
            <p class="text-h3 text-green-2 header-three">{{ companyName }}</p>
            <p class="text-b1 body-one">{{ duration }}</p>
            <ul class="text-b1 text-center body-one list-disc">
                <li v-for="description in descriptions" :key="description">{{ description }}</li>
            </ul>
        </div>
    </div>
</template>

<script setup>
const props = defineProps([
    'companyImage',
    'position',
    'companyName',
    'duration',
    'descriptions'
])
</script>

<style scoped>

</style>