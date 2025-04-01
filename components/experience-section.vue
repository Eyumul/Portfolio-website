<template>
    <NuxtLink :to="companyLink"  target="_blank">
        <div class="hidden md:flex flex-col items-center gap-[48px] group p-8 pl-11 bg-blue-5 rounded-[20px] max-w-[900px] cursor-custom-pointer">
            <div class="h-[160px] flex items-center">
                <img :src="companyImage" alt="company_picture" class="w-[372px] grayscale group-hover:grayscale-0 transition-all duration-500 ease-in-out"/>
            </div>
            <div class="flex flex-col items-center text-blue-1 gap-[16px]">
                <!-- <p class="text-h2 text-center xl:text-h1 header-one ">{{ position }}</p> -->
                <h1 class="text-h2 text-center xl:text-h1 header-one font-bold">
                    <span class="relative inline-block">
                        <!-- <span class="absolute inset-0 bg-gradient-to-r from-blue-2 to-green-2 rounded-lg blur-lg opacity-0 group-hover:opacity-75 transition duration-500"></span> -->
                        <span class="relative z-10 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-2 group-hover:to-green-2 duration-500">
                            {{ position }}
                        </span>
                    </span>
                </h1>
                <p class="text-b1 xl:text-h3 text-green-4 group-hover:text-green-2 duration-500 header-three">{{ companyName }}</p>
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