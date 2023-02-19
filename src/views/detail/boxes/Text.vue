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
  padding: 54px 0;
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
    li {
      margin-bottom: 39px;
    }
  }
}
</style>
