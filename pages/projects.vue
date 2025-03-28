<template>
    <div class="flex flex-col justify-center lg:justify-start lg:mt-[120px] h-[calc(100vh-120px)] ml-0 md:ml-[48px]">
        <div class="flex h-fit pl-0 md:pl-[48px] 2xl:pl-[80px] justify-center md:justify-between items-center">
            <div class="absolute bottom-0 md:top-0 h-fit md:h-screen flex pb-[36px] md:pb-0 self-center items-end md:items-center">
                <Pagination ref="childRef" :iteratingData="projects"/>
            </div>
            <div class="w-full flex flex-col gap-[64px] mx-[24px] md:mx-[80px] lg:mr-0 justify-center items-center">
                <ProjectSection v-for="project in projects.slice(currentPageInParent, currentPageInParent+1)" :key="project.title" :projectTitle="project.title" :projectImage="project.image" :projectDescription="project.description" :techStacks="project.techStack"/>
            </div>
        </div>
    </div>
</template>

<script setup>
import felegaImgPath from '~/assets/images/Screenshot 2024-07-24 113307.png';
import nuxtTemplateImgPath from '~/assets/images/Screenshot 2025-02-12 191622.png';
import balesuqImgPath from '~/assets/images/Screenshot 2024-07-24 110923.png';
import hahuJobsBotImgPath from '~/assets/images/Screenshot 2025-02-12 182905.png';
const childRef = ref(null)
const currentPageInParent = ref(0)
watch(() => childRef.value?.currentPage, (newVal) => {
    currentPageInParent.value = newVal
});

const tab = useState('tab', () => 'Personal');
const projects = [
    {
        title: 'Felega Design - Web app',
        image: felegaImgPath,
        description: ' An innovative tourism platform designed to enhance travel experiences. It allows users to post and discover unique locations (checkpoints) and connect them through engaging stories to create customized vacation itineraries (quests). With a focus on exploration and storytelling, Felega aims to make tourism more interactive, enjoyable, and community-driven.',
        techStack: ["Figma"]
    },
    {
        title: 'HaHuJobs Bot - Design',
        image: hahuJobsBotImgPath,
        description: 'During my time at HahuJobs as a UI/UX Designer, I crafted an intuitive and user-friendly interface for the HahuJobs Telegram bot, enhancing the job search and application experience. The design prioritized clarity, accessibility, and efficiency, ensuring seamless navigation and including dark theme for job seekers to browse listings, track applications, and interact with employers—all within Telegram. By focusing on minimalist design, structured user flow, and optimized interactions, I helped create a smooth and engaging experience tailored for both job seekers and recruiters.',
        techStack: ["Figma"]
    },
    {
        title: 'Nuxt Template - Documentation',
        image: nuxtTemplateImgPath,
        description: 'As the UI/UX Designer for the Minab Nuxt.js TypeScript Template Documentation, I crafted an intuitive and visually cohesive interface to help developers navigate and understand reusable Nuxt components and TypeScript integration. I designed a clean, structured layout with a left-side navigation menu for quick access and a responsive, scrollable content area for seamless reading. Using consistent typography, clear visual hierarchy, and interactive elements, I enhanced both usability and aesthetics, ensuring an efficient and engaging developer experience.',
        techStack: ["Nuxt.js", "Figma", "TypeScript", "tailwind", "Vue.js"]
    },
    {
        title: 'Balesuq - mobile app',
        image: balesuqImgPath,
        description: 'Balesuq is a dynamic eCommerce platform designed for seamless buying and selling. Users can list products for sale or post purchase requests, making it easier to find what they need. With an intuitive interface, secure transactions, and smart search features, Balesuq simplifies online shopping. Experience a smooth and efficient marketplace tailored for buyers and sellers alike.',
        techStack: ["Flutter", "Hasura", "PostgreSQL", "GoLang"]
    },
]
</script>

<style lang="scss" scoped>

</style>