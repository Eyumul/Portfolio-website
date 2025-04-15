<template>
    <div class="flex flex-col justify-center lg:justify-start lg:mt-[120px] h-[calc(100vh-120px)] md:h-fit ml-0 md:ml-[48px]">
        <div class="flex h-fit pl-0 md:pl-[48px] 2xl:pl-[80px] justify-center md:justify-between items-center">
            <div class="absolute z-30 w-full md:w-fit bg-black md:bg-transparent justify-center pt-8 bottom-0 md:top-0 h-fit md:h-screen flex pb-[36px] md:pb-0 self-center items-end md:items-center">
                <Pagination ref="childRef" :iteratingData="filteredProjects"/>
            </div>
            <div class="w-full flex flex-col gap-[64px] mx-[24px] md:mx-[80px] lg:mr-0 justify-center items-center">
                <ProjectSection v-for="project in filteredProjects.slice(currentPageInParent, currentPageInParent+1)" :key="project.title" :projectTitle="project.title" :projectLink="project.link" :projectImage="project.image" :projectDescription="project.description" :techStacks="project.techStack"/>
            </div>
        </div>
    </div>
</template>

<script setup>
import felegaImgPath from '~/assets/images/Screenshot 2024-07-24 113307.png';
import nuxtTemplateImgPath from '~/assets/images/Screenshot 2025-04-15 151218.png';
import balesuqImgPath from '~/assets/images/Screenshot 2024-07-24 110923.png';
import hahuJobsBotImgPath from '~/assets/images/Screenshot 2025-02-12 182905.png';
import hahuJobsAdminConsoleImgPath from '~/assets/images/Screenshot2025-02-19071819.png';
import DCMMEERPImgPath from '~/assets/images/image_2025-04-15_16-10-24.png';
import MULDERDASHBOARDImgPath from '~/assets/images/IMG_20250415_161911_554.jpg';
const childRef = ref(null)
const currentPageInParent = ref(0)
const tab = useState('tab', () => 'Personal');

watch(() => childRef.value?.currentPage, (newVal) => {
    currentPageInParent.value = newVal
});

watch(() => tab.value, () => {
    childRef.value.currentPage = 0;
    currentPageInParent.value = 0;
})

const projects = [
    {
        title: 'HaHu Jobs - Web app',
        image: hahuJobsAdminConsoleImgPath,
        link: 'https://staging.admin.hahujobs.io/app',
        type: 'Industrial',
        description: 'I collaborated with a team of developers in building the admin web application for HahuJobs. This platform is designed to give HahuJobs owners and administrators full control over the content and functionality of the main hahu.jobs site. My primary responsibility was front-end development, where I focused on building reusable and maintainable components that were used consistently throughout the project to ensure a cohesive user experience and efficient development workflow.',
        techStack: ["Nuxt.js", "Nuxt UI", "Tailwind CSS", "Hasura", "PostgreSQL", "GoLang"]
    },
    {
        title: 'Balesuq - mobile app',
        image: balesuqImgPath,
        link: 'https://www.figma.com/proto/7pxNcgVY1ZVWSusbP2PtGQ/Balesuq?node-id=264-694&p=f&t=4szR2u7KPUtOUJKi-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=42%3A961',
        type: 'Personal',
        description: 'Balesuq is a dynamic eCommerce platform designed for seamless buying and selling. Users can list products for sale or post purchase requests, making it easier to find what they need. With an intuitive interface, secure transactions, and smart search features, Balesuq simplifies online shopping. Experience a smooth and efficient marketplace tailored for buyers and sellers alike.',
        techStack: ["Flutter", "Hasura", "PostgreSQL", "GoLang"]
    },
    {
        title: 'DCMME ERP - Web app',
        image: DCMMEERPImgPath,
        type: 'Client',
        description: "I worked collaboratively with a team of developers to build a comprehensive web application for DCMME Company. The purpose of this platform was to automate and digitize key operational processes such as auditing, document management, and risk analysis. My involvement included contributing to the development of features that streamline workflows, enhance data accessibility, and improve overall efficiency within the company's day-to-day operations.",
        techStack: ["Next.js", "Schadcn", "Tailwind CSS", "Java", "Springboot", "PostgreSQL", "Figma"]
    },
    {
        title: 'Mulder Dashboard - Web app',
        image: MULDERDASHBOARDImgPath,
        link: 'https://mulder-admin-panel.vercel.app/',
        type: 'Client',
        description: "I independently designed and developed a mobile-responsive dashboard web application for a company called Mulder. The application was built to help them efficiently manage and track their stock, enabling users to add, edit, delete, and view inventory items with ease. The platform streamlined their inventory operations by providing a user-friendly interface and reliable functionality tailored to their business needs.",
        techStack: ["Nuxt.js", "Hasura", "Tailwind CSS", "PostgreSQL", "Figma"]
    },
    {
        title: 'HaHuJobs Bot - Design',
        image: hahuJobsBotImgPath,
        link: 'https://www.figma.com/proto/7YgTYjHoFPkHkSCqW7Yh8J/HaHuJobs-Bot?node-id=92-457&p=f&t=eRWbGbAS4qsA7LIV-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=82%3A1561&show-proto-sidebar=1',
        type: 'Industrial',
        description: 'During my time at HahuJobs as a UI/UX Designer, I crafted an intuitive and user-friendly interface for the HahuJobs Telegram bot, enhancing the job search and application experience. The design prioritized clarity, accessibility, and efficiency, ensuring seamless navigation and including dark theme for job seekers to browse listings, track applications, and interact with employers—all within Telegram. By focusing on minimalist design, structured user flow, and optimized interactions, I helped create a smooth and engaging experience tailored for both job seekers and recruiters.',
        techStack: ["Figma"]
    },
    {
        title: 'Felega Design - Web app',
        image: felegaImgPath,
        link: 'https://www.figma.com/proto/oOxiDJHku9bZEiKT2fkL8F/felega?node-id=196-1623&p=f&t=yY5ILnPHF6ezjdGM-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=196%3A1623',
        type: 'Personal',
        description: ' An innovative tourism platform designed to enhance travel experiences. It allows users to post and discover unique locations (checkpoints) and connect them through engaging stories to create customized vacation itineraries (quests). With a focus on exploration and storytelling, Felega aims to make tourism more interactive, enjoyable, and community-driven.',
        techStack: ["Figma", "Adobe XD", "Adobe Photoshop"]
    },
    {
        title: 'Nuxt Template - Documentation',
        image: nuxtTemplateImgPath,
        link: 'https://nuxt-component-documentation.vercel.app/',
        type: 'Industrial',
        description: 'As the lead designer and front-end developer for the Minab Nuxt.js TypeScript Template Documentation, I was responsible for both designing and building a clean, intuitive interface that enables developers to easily explore reusable Nuxt components and understand TypeScript integration. I created a structured layout featuring a left-side navigation menu and a responsive, scrollable content area to ensure seamless reading. This documentation was part of a broader initiative—our self-driven project to convert existing JavaScript components to TypeScript, build a CLI tool, and deliver a complete starter toolkit, aimed at improving development efficiency and onboarding.',
        techStack: ["Nuxt.js", "Figma", "TypeScript", "tailwind", "HeadlessUI", "Vue.js"]
    },
];

// Computed property to filter projects by selected tab 
const filteredProjects = computed(() => projects.filter(project => project.type === tab.value));
</script>

<style lang="scss" scoped>

</style>