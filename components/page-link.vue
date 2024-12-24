<template>
    <div @click="$router.push(buttonPath)" class="flex hover:text-green-2 transition-colors duration-500 ease-in-out cursor-pointer gap-[24px] items-center">
        <Icon :name="buttonIcon" class="size-[24px]"/>
        <p class="text-h3 header-three">{{ buttonTitle }}</p>
    </div>
</template>

<script setup>
const props = defineProps({
    buttonIcon : {
        type: String,
        required: true
    },
    buttonTitle : {
        type: String,
        required: true
    },
    buttonPath : {
        type: String,
        required: true
    }
})
</script>

<style>

</style>