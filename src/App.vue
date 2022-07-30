<template>
  <div class="main-layout">
    <Loading
      :progress="progress"
      v-if="isLoading"
      @loaded="isLoading = false"
    ></Loading>
    <div v-show="!isLoading">
      <Back v-show="!hideBackBtn" />
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Back from 'comps/Back.vue'
import Loading from 'comps/Loading.vue'
import { useRoute } from 'vue-router'
import { watch, ref, onMounted } from 'vue'

// ts-ignore
import { imgsPreloader } from '@/utils/imgPreloader.js'
// ts-ignore
import imgPreloaderList from '@/utils/imgPreloaderList.js'

const isLoading = ref(true)
let progressInterval: any = null
const progress = ref(0)

onMounted(() => {
  // mock load
  const fakeLoad = () => {
    if (progressInterval) clearInterval(progressInterval)

    progressInterval = setInterval(() => {
      progress.value += 2
      if (progress.value >= 100) {
        clearInterval(progressInterval)
      }
    }, 100)
  }

  const load = () => {
    imgsPreloader(imgPreloaderList)
      .then(() => {
        isLoading.value = false
        console.log('======')
      })
      .catch((e: any) => {
        console.log('======', e)
        isLoading.value = false
      })
  }

  // load()

  fakeLoad()
})

const HideBackRoutes = ['/']
const route = useRoute()
const hideBackBtn = ref(false)
watch(
  () => route.path,
  (newPath) => {
    console.log('=====', newPath)
    hideBackBtn.value = HideBackRoutes.some((item) => item === newPath)
  },
  {
    immediate: true,
  }
)
</script>

<style lang="scss">
#app {
  height: 100%;
  width: 100%;
}
.loading {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.main-layout {
  width: 100%;
  height: 100%;
  > section {
    width: 100%;
    height: 100%;
  }
}
</style>
