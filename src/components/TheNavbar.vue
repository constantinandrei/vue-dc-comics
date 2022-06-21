<template>
    <nav>
        <div class="py-3 bg-black"></div>
        <div class="container">
            <div class="row">
                <div class="col flex-grow-0 flex-shrink-1 d-flex align-items-center justify-content-between">
                    <div class="p-3">
                        <img src="/img/dc-logo.png" alt=""/>
                    </div>
                </div>
                <div class="col d-flex align-items-center justify-content-end">
                    <ul class="nav">
                        <li class="nav-item" v-for="(text, i) in navLinks" :key="i">
                            <a class="nav-link" href="#">{{ text }}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: 'TheNavbar',
        data(){
            return {
                navLinks: ['CHARACTERS', 'COMICS', 'MOVIES', 'TV', 'GAMES', 'COLECTIBLES', 'VIDEOS', 'FANS', 'NEWS', 'SHOP']
            }
        }
    }
</script>

<style lang="scss" scoped>
a {
    font-size: .9rem;
    color: black;
    font-weight: bold;
}

img {
    width: 80px;
}
</style>