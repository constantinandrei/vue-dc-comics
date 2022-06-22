<template>
    <div class="my-card">
        <div class="img-container">
            <img :src="product.thumb" alt="">
        </div>
        <div class="text-white text-uppercase py-2">
            {{ product.series }}
        </div>
    </div>
</template>

<script>
export default {
    name: 'MyCard',
    props: {
        product: Object
    }
}
</script>

<style lang="scss" scoped>
    .img-container {
        aspect-ratio: 1 / 1;
        overflow: hidden;
    }
</style>