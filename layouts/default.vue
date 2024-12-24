<template>
    <div class="bg-black text-white h-screen flex justify-between">
        <div class="flex flex-col w-full justify-between gap-[114px]">
            <slot/>
            <div class="flex justify-center gap-[100px] absolute w-full bottom-[48px]">
                <pageLink :class="[currentpath == button.path ? 'text-green-2' : 'text-silver-70']" v-for="button in buttons" :key="button.Title" :buttonIcon="button.iconName" :buttonTitle="button.Title" :buttonPath="button.path" />
            </div>
        </div>
        <div class="h-full w-[224px] flex relative self-end pt-[120px] pb-[48px]">
            <div class="h-full mr-[24px] flex flex-col items-center">
                <div class="w-[7px] h-[1px] bg-blue-4"></div>
                <div class="w-[1px] h-full bg-blue-4"></div>
                <div class="w-[7px] h-[1px] bg-blue-4"></div>
            </div>
            <div @click="downloadPDF()" class="absolute -left-[58px] top-[48px] flex items-center border-2 border-silver-70 text-silver-70 transition-colors duration-500 ease-in-out hover:border-green-2 hover:text-green-2 cursor-pointer rounded-[5px] px-[12px] py-[2px] gap-[8px]">
                <icon name="solar:download-minimalistic-bold" class="text-2xl"/>
                <p class="text-[16px] body-one">Resume</p>
            </div>
            <pointer class="absolute -left-[9px]" :class="[tabNum == 0 ? 'top-[120px] transition-all duration-700 ease-in-out' : '', tabNum == 1 ? 'top-[224px] transition-all duration-700 ease-in-out' : '', tabNum == 2 ? 'top-[328px] transition-all duration-700 ease-in-out' : '']"/>
            <div class="absolute -left-[9px] bottom-[128px]">
                <social v-for="social in socials" :key="social.iconName" :IconName="social.iconName" :SocialLink="social.link" />
            </div>
            <div v-for="button in buttons" :key="button.Title">
                <div v-if="button.path == currentpath" class="flex flex-col gap-[80px] mr-[72px]">
                    <button @click="tab = menu; updateTab()" v-for="menu in button.menu" :key="menu" class="text-start hover:text-green-2 cursor-pointer text-b2 transition-colors duration-500 ease-in-out body-two" :class="[menu == tab ? 'text-green-2' : 'text-silver-70']">{{ menu }}</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const route = useRoute()
const currentpath = ref(route.fullPath)
const tab = useState('tab');
const tabNum = ref(0)
const buttons = [
    {
        iconName: "ph:user",
        Title: "Profile",
        path: "/",
        menu: ["About me", "Achievement"]
    },
    {
        iconName: "ph:folders",
        Title: "Projects",
        path: "/projects",
        menu: ["Personal", "Client", "Industrial"]
    },
    {
        iconName: "ph:briefcase",
        Title: "Experience",
        path: "/experience",
        menu: ["Full Time", "Part Time", "Internship"]
    }
]
const socials = [
    {
        iconName: "cib:gmail",
        link: "https://t.me/Joel0483"
    },
    {
        iconName: "simple-icons:telegram",
        link: "https://t.me/Joel0483"
    },
    {
        iconName: "cib:linkedin-in",
        link: "https://t.me/Joel0483"
    },
    {
        iconName: "simple-icons:github",
        link: "https://t.me/Joel0483"
    },
    {
        iconName: "simple-icons:instagram",
        link: "https://t.me/Joel0483"
    }
]

const updateTab = () => {
  for (let button of buttons) {
    if (button.path === currentpath.value) {
      if (button.menu.includes(tab.value)) {
        tabNum.value = button.menu.indexOf(tab.value);
      } else {
        tab.value = button.menu[0];
        tabNum.value = 0;
      }
    }
  }
};
const downloadPDF = () => {
  const pdfUrl = '/documents/My_Resume_V3.pdf'; // Path relative to the public folder
  const link = document.createElement('a');
  link.href = pdfUrl;
  link.download = 'Eyuel_Mulugeta.pdf'; // Name for the downloaded file
  link.click();
};

// Watch for route changes and update the current path
watch(
  () => route.fullPath,
  (newPath) => {
    currentpath.value = newPath;
    updateTab(); // Update tab based on the new path
  },
  { immediate: true } // Trigger immediately to handle initial state
);
</script>

<style>

</style>