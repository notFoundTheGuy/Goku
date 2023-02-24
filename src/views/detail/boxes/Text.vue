<template>
  <div class="text-box motion">
    <div>
      <p>{{ subTitle }}</p>
      <h3>{{ title }}</h3>
    </div>
    <ul>
      <li v-for="(item, idx) in desc" :key="idx">{{ item }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string
  subTitle: string
  desc: string[]
}

const { title, subTitle, desc } = defineProps<Props>()
</script>

<style lang="scss" scoped>
.text-box {
  margin-top: 140px;
  position: relative;
  padding: 54px 0 140px;
  display: flex;
  margin: 0 180px;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 12px;
    height: 12px;
    background: #fff;
    border-radius: 12px;
  }

  > div,
  > ul {
    width: 50%;
  }

  > div {
    padding-right: 100px;
    > p {
      padding: 10px 0 20px;
    }
  }

  > ul {
    li:not(:last-of-type) {
      margin-bottom: 39px;
    }
  }
}
</style>

<!-- 临时处理：调整text-box中的标题，副标题大小 -->
<style lang="scss" scoped>
.text-box {
  font-size: 17px;

  h1 {
    font-size: 64px;
    line-height: 80px;
  }

  h3 {
    font-size: 36px;
    line-height: 60px;
  }

  h4 {
    font-size: 21.3px;
    line-height: 28px;
  }
}
</style>