<template>
  <div class="log-box" :class="type">
    <img :src="source" />
  </div>
</template>

<script setup lang="ts">
interface Props {
  source: string
  type: string
}

const { source, type } = defineProps<Props>()
</script>

<style lang="scss" scoped>
.log-box {
  img {
    width: 100%;
  }
}
</style>
