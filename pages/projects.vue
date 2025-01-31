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
import balesuqImgPath from '~/assets/images/Screenshot 2024-07-24 110923.png';
import bestieImgPath from '~/assets/images/Screenshot 2024-12-29 174428.png';
const childRef = ref(null)
const currentPageInParent = ref(0)
watch(() => childRef.value?.currentPage, (newVal) => {
    currentPageInParent.value = newVal
});

const tab = useState('tab', () => 'Personal');
const projects = [
    {
        title: 'Felega - Web app',
        image: felegaImgPath,
        description: ' An innovative tourism platform designed to enhance travel experiences. It allows users to post and discover unique locations (checkpoints) and connect them through engaging stories to create customized vacation itineraries (quests). With a focus on exploration and storytelling, Felega aims to make tourism more interactive, enjoyable, and community-driven.',
        techStack: ["Nuxt.js", "React.js", "Vue.js"]
    },
    {
        title: 'Besti - Web app',
        image: bestieImgPath,
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
        techStack: ["Nuxt.js", "React.js", "Vue.js"]
    },
    {
        title: 'Balesuq - mobile app',
        image: balesuqImgPath,
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
        techStack: ["Nuxt.js", "React.js", "Vue.js"]
    },
    {
        title: 'Youser - Web app',
        image: balesuqImgPath,
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
        techStack: ["Nuxt.js", "React.js", "Vue.js"]
    },
]
</script>

<style lang="scss" scoped>

</style>