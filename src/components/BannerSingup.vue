<template>
    <div class="section py-4">
        <div class="container">
            <div class="row justify-content-between align-items-center">
                <div class="col">
                    <div class="my-btn">SING-UP NOW!</div>
                </div>
                <div class="col row justify-content-end gx-3 align-items-center">
                    <div class="col d-flex align-items-center justify-content-end flex-grow-1 text-end">
                        <h3 class="m-0">FOLLOW US</h3>
                    </div>
                    <div class="my-col flex-grow-0" v-for="(image, i) in images" :key="i">
                        <img :src="`img/footer-${image}.png`" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BannerSingup',
    data(){
        return {
            images: ['facebook', 'twitter', 'youtube', 'pinterest', 'periscope']
        }
    }
}
</script>

<style lang="scss" scoped>

h3 {
    color: rgb(60, 60, 218);
    font-size: 1.2rem;
}
.section {
    background-color: #303030;
}

.my-btn {
    color: white;
    border: 2px solid rgb(60, 60, 218);
    cursor: pointer;
    display: inline-block;
    padding: .5rem 1rem;
}

.my-col {
    flex-basis: 20px;
    display: flex;
    align-items: center;
}
</style>