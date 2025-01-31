<template>
    <NuxtLink :to="companyLink"  target="_blank">
        <div class="hidden md:flex flex-col items-center gap-[48px] group p-8 pl-11 bg-blue-5 rounded-[20px] max-w-[900px] cursor-pointer">
            <div class="h-[160px] flex items-center">
                <img :src="companyImage" alt="company_picture" class="w-[372px] grayscale group-hover:grayscale-0 transition-all duration-500 ease-in-out"/>
            </div>
            <div class="flex flex-col items-center text-blue-1 gap-[16px]">
                <p class="text-h2 text-center xl:text-h1 header-one">{{ position }}</p>
                <p class="text-b1 xl:text-h3 text-green-2 header-three">{{ companyName }}</p>
                <p class="text-b2 xl:text-b1 body-one">{{ duration }}</p>
                <ul class="text-b2 xl:text-b1 text-center body-one list-disc max-h-[100px] lg:max-h-[500px] overflow-y-auto p-4">
                    <li v-for="description in descriptions" :key="description">{{ description }}</li>
                </ul>
            </div>
        </div>
        <div class="md:hidden max-w-[600px] h-full">
            <RotatingBox>
                <template #front>
                    <div class="flex flex-col items-center text-blue-1 gap-[16px] p-4">
                        <div class="h-[160px] flex items-center">
                            <img :src="companyImage" alt="company_picture" class="w-[372px]"/>
                        </div>
                        <p class="text-h2 text-center xl:text-h1 header-one">{{ position }}</p>
                        <p class="text-b1 xl:text-h3 text-green-2 header-three">{{ companyName }}</p>
                        <p class="text-b2 xl:text-b1 body-one">{{ duration }}</p>
                    </div>
                </template>
                <template #back>
                    <div class="flex flex-col items-center text-blue-1 gap-[16px]">
                        <ul class="text-b2 xl:text-b1 text-center body-one list-disc p-4 max-h-[300px] overflow-y-auto">
                            <li v-for="description in descriptions" :key="description">{{ description }}</li>
                        </ul>
                    </div>
                </template>
            </RotatingBox>
        </div>
    </NuxtLink>
</template>

<script setup>

const props = defineProps([
    'companyImage',
    'position',
    'companyName',
    'duration',
    'descriptions',
    'companyLink'
])
</script>

<style scoped>

</style>