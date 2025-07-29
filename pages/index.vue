<template>
    <div>
        <div v-if="tab == 'About me'" class="flex flex-col md:flex-row items-center gap-[48px] mt-[48px] md:mt-[120px] mx-[24px] md:mr-[0px] md:ml-[48px]">
            <div class="flex justify-center items-start">
                <img src="../assets/images/my_profile_pic.jpg" 
                    class="md:[mask-image:radial-gradient(circle,rgba(0,0,0,1)_50%,rgba(0,0,0,0)_100%)] 
                        md:[-webkit-mask-image:radial-gradient(circle,rgba(0,0,0,1)_50%,rgba(0,0,0,0)_100%)] 
                        md:max-w-[620px] md:w-full w-[150px] h-auto rounded-full md:rounded-none"
                    alt="profile_pic"
                />
            </div>
            <div class="flex flex-col p-6 pt-0 bg-blue-5 rounded-[10px] max-w-[859px] w-[100%] gap-4 h-[480px] md:h-[610px] overflow-y-auto">
                <div class="flex flex-col pt-6 gap-4 sticky top-0 bg-blue-5 pb-4">
                    <p class="text-blue-1 uppercase text-h2 xl:text-h1 header-one">eyuel mulugeta</p>
                    <div class="flex flex-wrap gap-6 text-bl xl:text-h3 header-three">
                        <span class="flex gap-2">
                            <p class="text-blue-1">|</p>
                            <p class="text-green-2">Frontend Developer</p>
                        </span>
                        <span class="flex gap-2">
                            <p class="text-blue-1">|</p>
                            <p class="text-green-2">UI / UX Designer</p>
                        </span>
                        <span class="flex gap-2">
                            <p class="text-blue-1">|</p>
                            <p class="text-green-2">Electrical and Computer Engineer</p>
                        </span>
                    </div>
                </div>
                <p class="text-blue-1 text-b2 xl:text-b1 text-justify body-one">Electrical Engineering graduate passionate about innovation and technology. Experienced in modernizing traditional workflows through digital solutions, including building responsive websites for businesses. Skilled in designing functional prototypes—from IoT systems to energy-efficient devices—addressing real-world challenges. With industry experience in UI/UX design and frontend development, I specialize in tools like Figma and frameworks such as Vue, Nuxt, and TailwindCSS to deliver seamless digital experiences. I’m also deeply interested in machine learning and AI, blending engineering insight with design thinking to build efficient, user-centered products. Committed to continuous learning, I aim to contribute to impactful, tech-driven solutions.</p>
                <p  class="text-blue-1 text-b2 xl:text-b1 body-one">The following are technology I have been working with:</p>
                <div class="flex flex-wrap gap-y-[16px] gap-x-[24px]">
                    <badge v-for="techStack in techStacks" :key="techStack" :identifier="techStack"/>
                </div>
            </div>
        </div>
        <div v-else-if="tab == 'Achievement'" Class="flex flex-col h-[calc(100vh-120px)] md:h-fit justify-center lg:justify-start lg:mt-[120px] ml-0 md:ml-[48px]">
            <div v-if="isDesktop" class="flex h-fit md:pl-[48px] 2xl:pl-[80px] justify-center md:justify-between items-center">
                <div class="absolute bottom-0 md:top-0 h-fit md:h-screen flex pb-[36px] md:pb-0 self-center items-end md:items-center">
                    <Pagination ref="childRef" :iteratingData="achievements.slice(0, achievements.length-1)"/>
                </div>
                <div class="w-full flex flex-col gap-[64px] justify-center items-center">
                    <AchievementCard v-for="achievement in achievements.slice(currentPageInParent, currentPageInParent+2)" :key="achievement.title" :achievementImage="achievement.image" :achievementTitle="achievement.title" :date="achievement.date" :organization="achievement.organization" :achievementDescription="achievement.description"/>
                </div>
            </div>
            <div v-if="!isDesktop" class="flex h-fit justify-center items-center">
                <div class="absolute z-40 w-full md:w-fit bg-black md:bg-transparent justify-center pt-8 bottom-0 md:top-0 h-fit md:h-screen flex pb-[36px] md:pb-0 self-center items-end md:items-center">
                    <Pagination ref="childRef" :iteratingData="achievements"/>
                </div>
                <div class="w-full flex flex-col gap-[64px] justify-center items-center">
                    <AchievementCard v-for="achievement in achievements.slice(currentPageInParent, currentPageInParent+1)" :key="achievement.title" :achievementImage="achievement.image" :achievementTitle="achievement.title" :date="achievement.date" :organization="achievement.organization" :achievementDescription="achievement.description"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
// import neccessary images
import hackatomImgPath from '~/assets/images/hackatom_award.jpg';
import strideImgPath from '~/assets/images/StrideAwardCertificate.png';
import hultImgPath from '~/assets/images/hultprize_award.jpg';
import alxImgPath from '~/assets/images/Hospitality_hackathon_2025_Certeficate.jpg';
const childRef = ref(null)
const currentPageInParent = ref(0)
watch(() => childRef.value?.currentPage, (newVal) => {
    currentPageInParent.value = newVal
});

// Reactive variable for screen size
const isDesktop = ref(false);

// Update `isDesktop` based on screen size
const updateScreenSize = () => {
  isDesktop.value = window.matchMedia("(min-width: 768px)").matches;
};

// Add event listener for screen resize
onMounted(() => {
  updateScreenSize();
  window.addEventListener("resize", updateScreenSize);
});

// Remove event listener on component unmount
onBeforeUnmount(() => {
  window.removeEventListener("resize", updateScreenSize);
});

const techStacks = ["Nuxt.js", "React.js", "Vue.js", "Next.js", "Tailwind CSS", "Arduino", "NI Multisim", "Proteus Design Suite", "Assembly language", "C", "C++", "Python", "Javascript", "HTML", "CSS", "Java", "Figma", "Adobe XD", "Adobe Photoshop", "Schadcn"]
const tab = useState('tab', () => 'About me');
const achievements = [
    {
        image: strideImgPath,
        title:"The stride Award 2024",
        date:"May 26 - 2024",
        organization:"Ministry Of Innovation And Technology (Ethiopia)",
        description:"Won 1st Place at the STRIDE Ethiopia Expo 2024 Hackathon for creating an innovative AI-driven solution to  transform Ethiopian tourism marketing."
    },
    {
        image: alxImgPath,
        title:"The Hospitality Hackathon 2025",
        date:"Apr 13 - 2025",
        organization:"ALX Ethiopia",
        description:"Received a Certificate of Achievement for contributing innovative tech solutions at a Hospitality Hackathon."
    },
    {
        image: hackatomImgPath,
        title:"HACKATOM ETHIOPIA 2024",
        date:"May 15 - 2024",
        organization:"Rosatom",
        description:"Received a participation certificate for promoting the benefits of nuclear energy as a sustainable energy source"
    },
    {
        image: hultImgPath,
        title:"HULT prize participation Certificate",
        date:"Jan 26 - 2024",
        organization:"Hult International Business School ",
        description:"Awarded a participation certificate for developing an educational platform as part of Team Juvinary during the Hult Prize 2024 OnCampus Program."
    }
    
]
</script>

<style>
</style>