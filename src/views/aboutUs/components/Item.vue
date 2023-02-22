<template>
    <div class="about-us-item">
        <p class="main-title">{{ props.mainTitle }}</p>
        <p v-for="item in props.itemList" :key="item.txt" class="contact-item">
            <img v-if="props.showIcon" class="icon" :src="item.icon" />
            <div class="txt">{{ item.txt }}</div>
        </p>
    </div>
</template>

<script setup lang="ts">
interface ItemList {
	txt: string;
    icon: string;
}

const props = defineProps({
    mainTitle: {
        type: String,
        default: "",
    },
    showIcon: {
        type: Boolean,
        default: false
    },
    itemList: {
        type: Array<ItemList>,
        default: []
    }
})

</script>

<style lang="scss" scoped>
.about-us-item {
    width: 200px;
    font-weight: bolder;

    .main-title {
        font-size: 24px;
        color: rgba(255, 255, 255, 0.60);
        margin-bottom: 32px;
    }

    .contact-item {
        display: flex;
        font-size: 16px;
        line-height: 19px;
        color: white;
        margin-bottom: 16px;

        .icon {
            margin-right: 6px;
            width: 24px;
            height: 24px;
        }
    }
}
</style>
