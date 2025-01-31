<template>
    <div class="flex flex-col justify-center lg:justify-start lg:mt-[120px] h-[calc(100vh-198px)] ml-0 md:ml-[48px]">
        <div class="flex h-fit pl-0 md:pl-[48px] 2xl:pl-[80px] justify-center md:justify-between items-center">
            <div class="absolute bottom-0 md:top-0 h-fit md:h-screen flex pb-[36px] md:pb-0 self-center items-end md:items-center">
                <Pagination ref="childRef" :iteratingData="experiences"/>
            </div>
            <div class="w-full flex flex-col gap-[64px] mx-[24px] sm:mx-[120px] lg:mr-0 justify-center items-center">
                <ExperienceSection v-for="experience in experiences.slice(currentPageInParent, currentPageInParent+1)" :key="experience.descriptions" :companyImage="experience.companyImage" :position="experience.position" :companyName="experience.companyName" :duration="experience.duration" :descriptions="experience.descriptions" :companyLink="experience.companyLink"/>
            </div>
        </div>
    </div>
</template>

<script setup>
import minab from '~/assets/images/minab_logo_full_big_darkmood.png';
import hahujobs from '~/assets/images/hahujobs.svg';
import studypool from '~/assets/images/studypool.png';
import nalf from '~/assets/images/nalf.png';
const childRef = ref(null)
const currentPageInParent = ref(0)
watch(() => childRef.value?.currentPage, (newVal) => {
    currentPageInParent.value = newVal
});

const tab = useState('tab', () => 'Full Time');
const experiences = [
    {
        companyImage: minab,
        position: 'Frontend Developer',
        companyName: 'Minab IT Soutions',
        duration: 'July 2024 - present',
        descriptions: [
            'Developed and deployed 10+ responsive web pages using Nuxt, Vue, and TailwindCSS, ensuring cross-browser  compatibility and a seamless user experience.',
            'Created reusable components, such as navigation bars and date pickers, streamlining development workflows and  reducing project timelines by 25%.'
        ],
        companyLink: 'http://www.minabtech.com/'
    },
    {
        companyImage: hahujobs,
        position: 'UI / UX Designer',
        companyName: 'HaHuJobs',
        duration: 'July 2024 - November 2024',
        descriptions: [
            'Implemented user-centered design principles that increased client satisfaction rates by 20% through responsive and accessible designs aligned with project goals.',
            'Designed and optimized over 5+ user interfaces for web and mobile applications, improving user engagement by ensuring intuitive navigation and modern aesthetics.'
        ],
        companyLink: 'https://hahu.jobs/'
    },
    {
        companyImage: studypool,
        position: 'Tutor',
        companyName: 'Studypool',
        duration: 'May 2022 - Feburary 2024',
        descriptions: [
            'Provided expert assistance on 50+ projects across subjects such as programming, mathematics, and engineering, maintaining a high client satisfaction rate.',
            'Achieved Top Tutor status, a recognition badge acquired to the top 1% of tutors for exceptional performance and consistent delivery of quality solutions.',
            'Helped students improve their understanding of complex topics, leading to a 95% average approval rate on submitted work.'
        ],
        companyLink: 'https://www.studypool.com/'
    },
]
</script>

<style scoped>

</style>