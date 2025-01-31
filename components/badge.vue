<template>
    <div class="flex px-[16px] py-[4px] bg-blue-4 rounded-[6px] text-silver-70 text-[14px] xl:text-[16px] body-one">
        {{ identifier }}
    </div>
</template>

<script setup>
const props = defineProps({
    identifier : {
        type : String,
        required: true
    }
})
</script>

<style scoped>

</style>