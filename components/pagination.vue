<template>
    <div>
        <div class="flex flex-row md:flex-col gap-[48px] items-center">
            <Icon name="tabler:triangle-filled" @click="goUp()" class="-rotate-90 md:rotate-0 size-[26px] text-silver-70 hover:text-green-2 cursor-pointer"/>
            <div class="flex flex-row md:flex-col gap-[32px] items-center">
                <div v-for="(value, index) in iteratingData" :key="index" class="rounded-full" :class="[index == currentPage ? 'scale-[2] size-[6px] bg-green-2 transition-all duration-500 ease-in-out': 'size-[6px] bg-silver-70 transition-all duration-500 ease-in-out']"></div>
            </div>
            <Icon name="tabler:triangle-inverted-filled" @click="goDown()" class="-rotate-90 md:rotate-0 size-[26px] text-silver-70 hover:text-green-2 cursor-pointer"/>
        </div>
    </div>
</template>

<script setup>
const props = defineProps([
    'iteratingData'
])
const currentPage = ref(0)
function goUp(){
    if(currentPage.value == 0){
        currentPage.value = props.iteratingData.length - 1
    } else {
        currentPage.value -= 1
    }
}
function goDown(){
    if(currentPage.value == props.iteratingData.length - 1){
        currentPage.value = 0
    } else{
        currentPage.value += 1
    }
}
defineExpose({
    currentPage,
})
</script>

<style scoped>

</style>
