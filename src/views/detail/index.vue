<template>
  <div ref="container" class="detail">
    <template v-for="(item, idx) in details" :key="idx">
      <div v-if="item.type === 'text'">
        <ArticleBox
          :logo="item.value.logo"
          :title="item.value.title"
          :subTitle="item.value.subTitle"
          :time="item.value.time"
          :members="item.value.members"
          :intro="item.value.intro"
          :sections="item.value.sections"
        />
      </div>
      <article v-if="item.type === 'img'">
        <ImgBox :value="item.value" />
      </article>
      <article v-if="item.type === 'video'">
        <VideoBox :value="item.value" />
      </article>
    </template>
  </div>
</template>

<!-- direction="vertical" -->
<script setup lang="ts">
import { reactive } from 'vue'
import ImgBox from './ImgBox.vue'
import VideoBox from './VideoBox.vue'
import ArticleBox from './ArticleBox.vue'
import { ref, onMounted } from 'vue'

import logo from '@/assets/logo.png'
import img4 from '@/assets/nav-img/4.png'
import img5 from '@/assets/nav-img/5.png'
import lzVideo from '@/assets/nav-bg.mp4'

const container = ref(null as unknown as HTMLElement)
const windowSize = reactive({
  width: window.innerWidth,
  height: window.innerHeight,
})

const calcArticleSize = () => {
  container.value.querySelectorAll('article').forEach((ele: HTMLElement) => {
    ele.style.width = window.innerWidth + 'px'
    ele.style.height = window.innerHeight + 'px'
  })
}
onMounted(() => {
  calcArticleSize()
  window.onresize = calcArticleSize
})

const details = reactive([
  {
    type: 'text',
    value: {
      logo: logo,
      title: 'TOS人机交互系统设计',
      subTitle: 'TOS Human-Computer Interaction System Design',
      time: '2022年11月',
      members: [
        {
          name: 'Troyed',
          role: '设计',
        },
        {
          name: 'lister & ke',
          role: '开发',
        },
        {
          name: 'Troyed',
          role: '后期 & 动画',
        },
      ],
      intro:
        '这个项目大概啥啥这个项目大概啥啥这个项目大概啥啥这个项目大概啥啥这个项目大概啥啥这个项目大概啥啥这个项目大概啥啥这个项目大概啥啥这个项目大概啥啥这个项目大概啥啥这个项目大概啥啥这个项目大概啥啥这个项目大概啥啥这个项目大概啥啥这个项目大概啥啥这个项目大概啥啥这个项目大概啥啥这个项目大概啥啥这个项目大概啥啥这个项目大概啥啥这个项目大概啥啥.',
      sections: [
        {
          title: '产品工作流介绍如何如何',
          subTitle: '工作流',
          contents: [
            '这个项目大概啥啥这个项目大概啥啥这个项目大概啥啥这个项目大概啥啥这个项目大概啥啥这个项目大概啥啥这个项目大概啥啥这个项目大概啥啥这个项目大概啥啥这个项目大概啥啥这个项目大概啥啥这个项目大概啥啥这个项目大概啥啥这个',
            '这个项目大概啥啥这个项目大概啥啥这个项目大概啥啥这个项目大概啥啥这个项目大概啥啥这个项目大概啥啥这个项目大概啥啥这个项目大概啥啥这个项目大概啥啥这个项目大概啥啥这个项目大概啥啥这个项目大概啥啥这个项目大概啥啥这个',
            '这个项目大概啥啥这个项目大概啥啥这个项目大概啥啥这个项目大概啥啥这个项目大概啥啥这个项目大概啥啥这个项目大概啥啥这个项目大概啥啥这个项目',
          ],
        },
      ],
    },
  },
  {
    type: 'video',
    value: lzVideo,
  },
  {
    type: 'img',
    value: img4,
  },
  {
    type: 'img',
    value: img5,
  },
])
</script>
