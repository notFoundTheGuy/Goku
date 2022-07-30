<template>
  <section class="nav-container" :class="{ active: isMenuActive }">
    <div class="video-bg">
      <video autoplay muted loop playsinline>
        <source src="../../assets/nav-bg.mp4" />
        <source src="../../assets/nav-bg.webm" />
      </video>
    </div>
    <div class="progress">
      <span>{{ indexStr }}</span>
    </div>
    <ul class="nav" ref="navEl">
      <li
        v-for="(item, idx) in navList"
        :key="idx"
        @mouseenter="
          () => {
            isMenuActive = true
            curIndex = idx
          }
        "
        @mouseleave="isMenuActive = false"
        @click="goto(curItem.link)"
      >
        <i class="corner">
          {{ idx + 1 >= 10 ? idx + 1 + '' : '0' + (idx + 1) }}
        </i>
        <p>{{ item.name }}</p>
        <span>{{ item.desc }}</span>
      </li>
    </ul>
    <div
      class="img-box"
      :style="{ 'background-image': `url(${curItem.img})` }"
    ></div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, computed, reactive } from 'vue'
import img1 from '@/assets/nav-img/1.png'
import img2 from '@/assets/nav-img/2.png'
import img3 from '@/assets/nav-img/3.png'
import img4 from '@/assets/nav-img/4.png'
import img5 from '@/assets/nav-img/5.png'
import router from '@/routers'

const goto = (link: string) => {
  router.push(link)
}
const navList = reactive([
  {
    name: '产品与交互',
    desc: 'Products and Interactions',
    img: img1,
    link: '/detail',
  },
  {
    name: '品牌与视觉',
    desc: 'Brand and Vision',
    img: img2,
    link: '/detail',
  },
  {
    name: '插画与艺术',
    desc: 'Illustration and Art',
    img: img3,
    link: '/detail',
  },
  {
    name: '影视与动效',
    desc: 'Film and Animation',
    img: img4,
    link: '/detail',
  },
  {
    name: '技术与开发',
    desc: 'Our team',
    img: img5,
    link: '/detail',
  },
  {
    name: '我们的团队',
    desc: 'Contact us',
    img: img1,
    link: '/team',
  },
  {
    name: '联系我们',
    desc: 'Products and Interactions',
    img: img2,
    link: '/us',
  },
])

const navEl = ref()
const isMenuActive = ref(false)
const curIndex = ref(0)
const curItem = computed(() => {
  return navList[curIndex.value]
})

const indexStr = computed(() => {
  const indexVal = curIndex.value + 1
  return indexVal >= 10 ? indexVal + '' : '0' + indexVal
})

const calcEleRatio = (ele: HTMLElement) => {
  const container = navEl.value
  const height = container.offsetHeight
  const midY = container.getBoundingClientRect().top + height / 2
  // 只有中间的1/3内容出现变换
  const transLimit = height / (2 * 3)
  // const eleY = ele?.offsetTop || 0;
  const eleY = ele.getBoundingClientRect().top

  const distance = Math.abs(midY - eleY)
  if (distance <= transLimit) {
    return (1 - distance / transLimit) * 0.7 + 1
  }
  return 1
}

const layoutEles = () => {
  navEl.value.querySelectorAll('li').forEach((item) => {
    const ratio = calcEleRatio(item)
    const nameEle = item.querySelector('p')
    nameEle.style.transform = `scale(${ratio})`
  })
}

const scrollHandle = (e) => {
  layoutEles()
}

onMounted(() => {
  // 滚动特效
  // layoutEles();
  // navEl.value.addEventListener('scroll', scrollHandle);
})
</script>

<style scoped lang="scss">
$distanceTop: 20vh;
$paddingLeft: 18.75vw;
.nav-container {
  position: fixed;
  left: 0;
  top: 0;
  overflow: hidden;
  width: 100%;
  height: 100%;
  .nav {
    padding-top: $distanceTop;
    padding-bottom: 5vw;
    position: absolute;
    left: $paddingLeft;
    top: 0;
    height: 100%;
    width: 40%;
    font-size: 2.7vw;
    font-weight: 800;
    text-align: left;
    overflow-x: visible;
    overflow-y: auto;
    li {
      position: relative;
      height: 7.6vw;
      line-height: 7.6vw;
      padding-left: 1vw;
      cursor: pointer;
      > p {
        transform-origin: left;
      }
      i.corner {
        position: absolute;
        top: 1.6vw;
        left: 0;
        font-size: 1.11vw;
        line-height: 1;
        color: rgba($color: #fff, $alpha: 0.6);
        -webkit-text-stroke: 1px transparent;
      }
      span {
        font-size: 0.8vw;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        text-align: right;
        right: 0;
      }
    }
  }
  &.active {
    .video-bg {
      opacity: 0;
    }

    .nav {
      li {
        color: transparent;
        opacity: 0.6;
        -webkit-text-stroke: 1px #fff;
        &:hover {
          color: #fff;
          opacity: 1;
          -webkit-text-stroke: 0px transparent;
          // span {
          // 	opacity: 1;
          // }
        }
      }
    }
  }
  .img-box {
    margin-top: $distanceTop;
    margin: $distanceTop auto 0;
    width: 70%;
    // 固定宽高比：16:9，70% * 56.25%
    padding-top: 39.375%;
    background-size: cover;
    transition: all 0.5s;
  }

  .video-bg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transition: all 0.5s;
    > video {
      width: 100%;
      height: 100%;
      object-fit: cover;
      background-image: url(../../assets/nav-bg-back.jpeg);
      background-size: cover;
    }
  }

  .progress {
    position: absolute;
    top: 50%;
    left: 9vw;
    transform: translateY(-50%);
    height: 450px;
    width: 1px;
    background: rgba($color: #fff, $alpha: 0.4);
    span {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
}
</style>
