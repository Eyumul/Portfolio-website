<template>
    <div class="flex flex-col mt-[120px] h-[calc(100vh-198px)] ml-[48px]">
        <div class="flex h-fit pl-[203px] justify-between items-center">
            <div class="absolute top-0 h-screen flex items-center">
                <Pagination ref="childRef" :iteratingData="projects"/>
            </div>
            <div class="w-full flex flex-col gap-[64px] justify-center items-center">
                <ProjectSection v-for="project in projects.slice(currentPageInParent, currentPageInParent+1)" :key="project.title" :projectTitle="project.title" :projectImage="project.image" :projectDescription="project.description" :techStacks="project.techStack"/>
            </div>
        </div>
    </div>
</template>

<script setup>
import felegaImgPath from '~/assets/images/Screenshot 2024-07-24 113307.png';
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
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
        techStack: ["Nuxt.js", "React.js", "Vue.js"]
    },
    {
        title: 'Besti - Web app',
        image: '~/assets/images/Screenshot 2024-07-24 113307.png',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
        techStack: ["Nuxt.js", "React.js", "Vue.js"]
    },
    {
        title: 'Balesuq - mobile app',
        image: '~/assets/images/Screenshot 2024-07-24 113307.png',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
        techStack: ["Nuxt.js", "React.js", "Vue.js"]
    },
    {
        title: 'Youser - Web app',
        image: '~/assets/images/Screenshot 2024-07-24 113307.png',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
        techStack: ["Nuxt.js", "React.js", "Vue.js"]
    },
]
</script>

<style lang="scss" scoped>

</style>