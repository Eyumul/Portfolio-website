<template>
    <NuxtLink :to="SocialLink" target="_blank" class="flex items-center justify-center bg-black w-[24px] h-[48px]">
        <Icon :name="IconName" class="size-[20px] transition-colors duration-500 ease-in-out text-silver-70 hover:text-green-2 cursor-pointer"/>
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