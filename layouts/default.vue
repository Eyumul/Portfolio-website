<template>
    <div>
        <div v-if="!isLargeScreen" class="flex bg-black flex-col min-h-screen pb-8 w-full">
            <div class="fixed flex flex-col max-w-[390px] z-50 transition-all duration-500 ease-in-out shadow-2xl bg-black shadow-gray-600 h-full px-[5px] sm:px-[15px] md:px-[25px]" :class="collapsed ? '-translate-x-full' :'translate-x-0'">
                <div class="flex pt-[15px] items-center justify-between">
                    <button @click="collapsed = !collapsed">
                        <Icon name="material-symbols:close-rounded" class="text-4xl text-silver-70 hover:text-green-2"/>
                    </button>
                </div>
                <div class="flex flex-col text-silver-70 items-start m-[64px] gap-8">
                    <div v-for="button in buttons" :key="button.Title">
                        <div @click="buttonclicked == button.Title ? buttonclicked = null : buttonclicked = button.Title" class="flex gap-4 items-center" :class="currentpath == button.path ? 'text-green-2':''">
                            <icon name="solar:alt-arrow-right-bold" :class="buttonclicked == button.Title ? 'rotate-90' : ''"/>
                            <p class="text-h3 header-three">{{ button.Title }}</p>
                        </div>
                        <div v-if="buttonclicked == button.Title" class="flex flex-col body-two gap-4 mt-4 ml-12">
                            <p @click="$router.push(button.path); tab = menu; updateTab();" v-for="menu in button.menu" :key="menu" :class="[menu == tab ? 'text-green-2' : 'text-silver-70']">{{menu}}</p>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col ml-[64px] mt-[64px] gap-2">
                    <social v-for="social in socials" :key="social.iconName" :IconName="social.iconName" :SocialLink="social.link" />
                </div>
                <div class="flex flex-wrap pr-[5px] items-center mt-auto mb-[64px] ml-[64px] text-blue-1 gap-4">
                    <p class="text-b4 italic">A little bit of design, a little bit of code, all me.</p>
                    <p class="text-b1">:)</p>
                </div>
            </div>
            <div class="flex items-center pt-[15px] px-[5px] sm:px-[15px] md:px-[25px] justify-between">
                <button @click="collapsed = !collapsed" :class="collapsed ? '' : 'invisible'">
                    <Icon name="material-symbols:menu-rounded" class="text-4xl text-silver-70 hover:text-green-2"/>
                </button>
                <a href="/documents/My_Resume_V3.pdf" target="_blank" class="flex items-center border-2 border-silver-70 text-silver-70 transition-colors duration-500 ease-in-out hover:border-green-2 hover:text-green-2 cursor-pointer rounded-[5px] px-[12px] py-[2px] gap-[8px]">
                    <icon name="solar:document-text-linear" class="text-lg xl:text-xl"/>
                    <p class="text-[14px] xl:text-[16px] body-one">Resume</p>
                </a>
            </div>
            <div>
                <slot/>
            </div>
        </div>
        <div v-if="isLargeScreen" class="bg-black text-white h-screen flex justify-between gap-[24px] xl:gap-[48px]">
            <div class="flex flex-col w-full">
                <div class="flex absolute left-[48px] top-[48px] items-center text-blue-1 gap-4">
                    <p class="text-b4 italic">A little bit of design, a little bit of code, all me.</p>
                    <p class="text-b1">:)</p>
                </div>
                <slot/>
                <div class="flex justify-center items-center gap-[100px] absolute w-full bottom-[48px]">
                    <pageLink :class="[currentpath == button.path ? 'text-green-2' : 'text-silver-70']" v-for="button in buttons" :key="button.Title" :buttonIcon="button.iconName" :buttonTitle="button.Title" :buttonPath="button.path" />
                </div>
            </div>
            <div class="h-full max-w-[224px] flex relative self-end pt-[120px] pb-[48px]">
                <div class="h-full mr-[24px] flex flex-col items-center">
                    <div class="w-[7px] h-[1px] bg-blue-4"></div>
                    <div class="w-[1px] h-full bg-blue-4"></div>
                    <div class="w-[7px] h-[1px] bg-blue-4"></div>
                </div>
                <a href="/documents/My_Resume_V3.pdf" target="_blank" class="absolute -left-[58px] top-[48px] flex items-center border-2 border-silver-70 text-silver-70 transition-colors duration-500 ease-in-out hover:border-green-2 hover:text-green-2 cursor-pointer rounded-[5px] px-[12px] py-[2px] gap-[8px]">
                    <icon name="solar:document-text-linear" class="text-lg xl:text-xl"/>
                    <p class="text-[14px] xl:text-[16px] body-one">Resume</p>
                </a>
                <pointer class="absolute -left-[9px]" :class="[tabNum == 0 ? 'top-[120px] transition-all duration-700 ease-in-out' : '', tabNum == 1 ? 'top-[224px] transition-all duration-700 ease-in-out' : '', tabNum == 2 ? 'top-[328px] transition-all duration-700 ease-in-out' : '']"/>
                <div class="absolute -left-[9px] bottom-[128px]">
                    <social v-for="social in socials" :key="social.iconName" :IconName="social.iconName" :SocialLink="social.link" />
                </div>
                <div v-for="button in buttons" :key="button.Title">
                    <div v-if="button.path == currentpath" class="flex flex-col gap-[80px] mr-[24px] xl:mr-[72px]">
                        <button @click="tab = menu; updateTab()" v-for="menu in button.menu" :key="menu" class="text-start hover:text-green-2 cursor-pointer text-b3 xl:text-b2 transition-colors duration-500 ease-in-out body-two" :class="[menu == tab ? 'text-green-2' : 'text-silver-70']">{{ menu }}</button>
                    </div>
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
const isLargeScreen = ref(true);
const collapsed = ref(true);
const buttonclicked = ref(null)
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
        link: "mailto:eyuelmulugeta60@gmail.com"
    },
    {
        iconName: "simple-icons:telegram",
        link: "https://t.me/Joel0483"
    },
    {
        iconName: "cib:linkedin-in",
        link: "https://linkedin.com/in/eyumul"
    },
    {
        iconName: "simple-icons:github",
        link: "https://github.com/Eyumul"
    },
    {
        iconName: "simple-icons:instagram",
        link: "https://www.instagram.com/eyu_mul/profilecard/?igsh=MXZjZXI3cmw5ZWNzbA=="
    }
]

const checkScreenSize = () => {
  isLargeScreen.value = window.innerWidth >= 1080; // Tailwind lg breakpoint is 1024px
};

onMounted(() => {
  checkScreenSize(); // Check initial screen size
  window.addEventListener('resize', checkScreenSize); // Update on resize
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', checkScreenSize); // Cleanup on unmount
});

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

::-webkit-scrollbar {
    @apply w-[3px] h-[3px]
} 
::-webkit-scrollbar-track {
    @apply bg-blue-4 rounded-full
}

::-webkit-scrollbar-thumb {
    @apply bg-green-2 rounded-full
}

</style>