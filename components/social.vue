<template>
    <NuxtLink :to="SocialLink" target="_blank" class="flex items-center justify-center bg-black lg:w-[24px] lg:h-[48px] cursor-custom-pointer">
        <Icon :name="IconName" class="size-[36px] transition-colors duration-500 ease-in-out text-silver-70 hover:text-green-2"/>
    </NuxtLink>
</template>

<script setup>
const props = defineProps({
    IconName : {
        type: String
    },
    SocialLink: {
        type: String
    }
})
</script>

<style scoped>

</style>