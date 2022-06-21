<template>
    <div class="section py-5 position-relative overflow-hidden">
        <div class="container">
            <div class="row">
                <div class="col-4 d-flex">
                    <div class="col">
                        <ul class="list-group mb-3">
                            <h4>DC COMICS</h4>
                            <li class="list-group-item" v-for="(text, i) in linkList.dcComics" :key="i">
                                <a class="" href="#">{{ text }}</a>
                            </li>
                        </ul>
                        <ul class="list-group">
                            <h4>SHOP</h4>
                            <li class="list-group-item" v-for="(text, i) in linkList.shop" :key="i">
                                <a class="" href="#">{{ text }}</a>
                            </li>
                        </ul>
                    </div>

                    <div class="col">
                        <ul class="list-group">
                            <h4>DC</h4>
                            <li class="list-group-item" v-for="(text, i) in linkList.dc" :key="i">
                                <a class="" href="#">{{ text }}</a>
                            </li>
                        </ul>
                    </div>

                    <div class="col">
                        <ul class="list-group">
                            <h4>SITES</h4>
                            <li class="list-group-item" v-for="(text, i) in linkList.sites" :key="i">
                                <a class="" href="#">{{ text }}</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="position-absolute">
            <img src="/img/dc-logo-bg.png" alt="">
        </div>
    </div>
</template>

<script>
export default {
    name: 'TheFooter',
    data(){
        return {
            linkList: {
                dcComics: ['Characters', 'Comics', 'Movies', 'TV', 'Games', 'Videos', 'News'],
                shop: ['Shop DC', 'Shop DC Collectibles'],
                dc: ['Terms of Use', 'Privacy policy(New)', 'Ad Choises', 'Advertising', 'Jobs', 'Subscriptions', 'Talent Workshops', 'CPSC certificates', 'Ratings', 'Shop Help', 'Contact Us'],
                sites: ['DC', 'Mad Magazine', 'DC Kids', 'DC Universe', 'DC Power Visa']
            }
        }
    }
}
</script>

<style lang="scss" scoped>
h4 {
    font-size: 1rem;
}

.section {
    background-image: url('/public/img/footer-bg.jpg');
    color: white;
}

.list-group {

    .list-group-item {
        background-color: transparent;
        border: none;
        font-size: .8rem;
        padding: 0.3rem 0;
    }
    
}

a {
    text-decoration: none;
    color: rgba(255, 255, 255, 0.476);
}

.position-absolute {
    top: -10%;
    bottom: 0;
    right: 0;
    width: 50%;
    height: 120%;
    overflow: hidden;

    img {
        height: 100%;
        overflow: hidden;
    }
}
</style>