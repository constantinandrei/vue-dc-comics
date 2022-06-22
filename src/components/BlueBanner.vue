<template>
    <div class="section py-5">
        <div class="container">
            <div class="row row-cols-5 gx-1">
                <div class="col gap-3 d-flex align-items-center justify-content-start" v-for="(image, i) in imgList" :key="i">
                    <div class="my-col-1">
                        <img :src="image.link" alt="">
                        
                    </div>
                    <div class="my-col">
                        <div class="div">
                            {{ image.text }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'BlueBanner',
        data(){
            return {
                imgList: [{
                    link: require('/public/img/buy-comics-digital-comics.png'),
                    text: 'DIGITAL COMICS'
                    },
                    {
                    link: require('/public/img/buy-comics-merchandise.png'),
                    text: 'DC MERCHANDISE'
                    },
                    {
                    link: require('/public/img/buy-comics-subscriptions.png'),
                    text: 'SUBSCRIPTIONS'
                    },
                    {
                    link: require('/public/img/buy-comics-shop-locator.png'),
                    text: 'COMIC SHOP LOCATOR'
                    },
                    {
                    link: require('/public/img/buy-dc-power-visa.svg'),
                    text: 'DC POWER VISA'
                    }
                ]
            }
        }
    }

</script>

<style lang="scss" scoped>
    .section {
        background-color: #3182F9;
        color: white;
        font-size: .9rem;
    }

    img {
        width: 100%;
    }

    .my-col-1 {
        flex-basis: 45px;
    }

</style>