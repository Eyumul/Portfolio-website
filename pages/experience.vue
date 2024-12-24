<template>
    <div class="flex flex-col h-[calc(100vh-198px)] mt-[120px] ml-[48px]">
        <div class="flex h-fit pl-[203px] justify-between items-center">
            <div class="absolute top-0 h-screen flex items-center">
                <Pagination ref="childRef" :iteratingData="experiences"/>
            </div>
            <div class="w-full flex flex-col gap-[64px] justify-center items-center">
                <ExperienceSection v-for="experience in experiences.slice(currentPageInParent, currentPageInParent+1)" :key="experience.descriptions" :position="experience.position" :companyName="experience.companyName" :duration="experience.duration" :descriptions="experience.descriptions"/>
            </div>
        </div>
    </div>
</template>

<script setup>
const childRef = ref(null)
const currentPageInParent = ref(0)
watch(() => childRef.value?.currentPage, (newVal) => {
    currentPageInParent.value = newVal
});

const tab = useState('tab', () => 'Full Time');
const experiences = [
    {
        companyImage: '~/assets/images/minab_logo_full_big_darkmood.png',
        position: 'Frontend Developer',
        companyName: 'Minab IT Soutions',
        duration: 'July 2024 - present',
        descriptions: [
            'Developed and deployed 10+ responsive web pages using Nuxt, Vue, and TailwindCSS, ensuring cross-browser  compatibility and a seamless user experience.',
            'Created reusable components, such as navigation bars and date pickers, streamlining development workflows and  reducing project timelines by 25%.'
        ]
    },
    {
        companyImage: '~/assets/images/minab_logo_full_big_darkmood.png',
        position: 'UI / UX designer',
        companyName: 'HaHuJobs',
        duration: 'July 2024 - present',
        descriptions: [
            'Developed and deployed 10+ responsive web pages using Nuxt, Vue, and TailwindCSS, ensuring cross-browser  compatibility and a seamless user experience.',
            'Created reusable components, such as navigation bars and date pickers, streamlining development workflows and  reducing project timelines by 25%.'
        ]
    },
]
</script>

<style scoped>

</style>