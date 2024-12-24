<template>
    <div>
        <div v-if="tab == 'About me'" class="flex gap-[48px] mt-[120px] ml-[48px]">
            <img src="../assets/images/Taylan-JohnsonJPG (1).png" alt="profile_pic"/>
            <div class="flex flex-col gap-4">
                <p class="text-blue-1 uppercase text-h1 header-one">eyuel mulugeta</p>
                <div class="flex gap-4 text-h3 header-three">
                    <p class="text-green-2">Frontend Developer</p>
                    <p class="text-blue-1">|</p>
                    <p class="text-green-2">UI / UX Designer</p>
                    <p class="text-blue-1">|</p>
                    <p class="text-green-2">Electrical and Computer Engineer</p>
                </div>
                <p class="text-blue-1 text-b1 pr-[110px] text-justify body-one">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
                <p  class="text-blue-1 text-b1 body-one">The following are tech stacks I have been working with:</p>
                <div class="flex pr-[110px] gap-[24px]">
                    <badge v-for="techStack in techStacks" :key="techStack" :identifier="techStack"/>
                </div>
            </div>
        </div>
        <div v-else-if="tab == 'Achievement'" Class="flex flex-col h-[calc(100vh-120px)] jusitify-center gap-[64px] mt-[120px] ml-[48px]">
            <div class="flex h-fit pl-[203px] justify-between items-center">
                <div class="absolute top-0 h-screen flex items-center">
                    <Pagination ref="childRef" :iteratingData="achievements.slice(0, achievements.length-1)"/>
                </div>
                <div class="w-full flex flex-col gap-[64px] justify-center items-center">
                    <AchievementCard v-for="achievement in achievements.slice(currentPageInParent, currentPageInParent+2)" :key="achievement.title" :achievementImage="achievement.image" :achievementTitle="achievement.title" :date="achievement.date" :organization="achievement.organization" :achievementDescription="achievement.description"/>
                </div>
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


const techStacks = ["Nuxt.js", "React.js", "Vue.js"]
const tab = useState('tab', () => 'About me');
const achievements = [
    {
        image:"~/assets/images/StrideAwardCertificate.png",
        title:"The stride Award 2024",
        date:"May 26 - 2024",
        organization:"Ministry Of Innovation And Technology (Ethiopia)",
        description:"Won 1st Place at the STRIDE Ethiopia Expo 2024 Hackathon for creating an innovative AI-driven solution to  transform Ethiopian tourism marketing."
    },
    {
        image:"~/assets/images/StrideAwardCertificate.png",
        title:"Hackatom",
        date:"May 26 - 2024",
        organization:"Russia nuclear organization",
        description:"Promte the use of nuclear for producing energy. Promte the use of nuclear for producing energy. Promte the use of nuclear for producing energy."
    },
    {
        image:"~/assets/images/StrideAwardCertificate.png",
        title:"Lorem ipsum",
        date:"May 26 - 2024",
        organization:"Ipsum Lorem Ipusm ",
        description:"Lorem Ipusm Lorem Ipusm Lorem Ipusm Lorem Ipusm Lorem Ipusm Lorem Ipusm Lorem Ipusm Lorem Ipusm Lorem Ipusm Lorem Ipusm Lorem Ipusm Lorem Ipusm"
    },
    {
        image:"~/assets/images/StrideAwardCertificate.png",
        title:"Test achieve",
        date:"May 26 - 2024",
        organization:"Ipsum Test achieve ",
        description:"Test achieve Test achieve Test achieve Test achieve Test achieve Test achieve Test achieve Test achieve Test achieve Test achieve Test achieve Test achieve"
    },
    
]
</script>

<style>
.header-one {
    @apply font-headerFont;
    font-weight: 900;
}
.header-three {
    @apply font-headerFont;
    font-weight: bold;
}
.body-one {
    font-family: "Source Sans 3", serif;
}
.body-two {
    font-family: "Source Sans 3", serif;
    font-weight: bold;
}
</style>