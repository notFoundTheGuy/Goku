<template>
  <div class="loading-wrap">
    <img
      v-if="showLogo"
      class="single-logo"
      src="../assets/logo.png"
      alt="logo"
    />

    <div class="intro-wrap" v-if="showIntro">
      <div class="intro-text">Hello～</div>
      <div class="intro-text delay">This is...</div>
    </div>

    <img
      v-if="showLogoWithTitle"
      class="logo-with-title"
      src="../assets/logo.png"
      alt="logo"
    />

    <div v-if="showProgress" class="loading-progress">
      <span class="number start">00</span>
      <div class="progress">
        <div class="loaded" :style="`width: ${(progress / 100) * 200}px`"></div>
      </div>
      <span class="number end">{{ currentProgress || '00' }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, toRef, watch } from 'vue'

const showLogo = ref(true)
const showIntro = ref(false)
const showProgress = ref(true)
const showLogoWithTitle = ref(false)

const props = defineProps({
  progress: {
    type: Number,
    default: 0,
  },
})
const emit = defineEmits(['loaded'])
const currentProgress = toRef(props, 'progress')

watch(
  () => currentProgress.value,
  (newProgress) => {
    if (currentProgress.value > 99) {
      showIntro.value = true
      showLogo.value = false
      showProgress.value = false

      setTimeout(() => {
        showIntro.value = false
        showLogoWithTitle.value = true

        setTimeout(() => {
          emit('loaded')
        }, 2000)
      }, 2500)
    }
  }
)
</script>

<style lang="scss" scoped>
@mixin fixed-center {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
.loading-wrap {
  @include fixed-center();
  background: #090b0d;
  z-index: 99;

  .single-logo {
    width: 90px;
    height: 16px;
    @include fixed-center();
  }

  .loading-progress {
    position: absolute;
    bottom: 160px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    .progress {
      width: 200px;
      height: 1px;
      background: rgba(255, 255, 255, 0.32);
      position: relative;
      margin: 0 10px;
      overflow: hidden;

      .loaded {
        position: absolute;
        left: 0;
        height: 1px;
        background: #c4c4c4;
        transition: width 0.3s;
      }
    }

    .number {
      font-size: 14px;
      display: inline-block;
      width: 26px;
      text-align: right;
    }
  }

  @keyframes fadeIn {
    from {
      top: 20px;
      opacity: 0;
    }
    to {
      top: 0;
      opacity: 1;
    }
  }

  @keyframes fadeInOut {
    0% {
      top: 20px;
      opacity: 0;
    }
    50% {
      top: 0;
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  .intro-wrap {
    @include fixed-center();
    font-size: 48px;
    animation: fadeIn 1s;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .intro-text {
      position: relative;

      &.delay {
        animation: fadeIn 1s 1.5s forwards;
        opacity: 0;
      }
    }
  }

  .logo-with-title {
    @include fixed-center();
    animation: fadeInOut 2s;
  }
}
</style>
