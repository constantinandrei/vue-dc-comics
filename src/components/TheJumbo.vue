<template>
    <div class="jumbo">
        <div class="container">
            <div class="current-series">
                CURRENT SERIES
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TheJumbo'
}
</script>

<style lang="scss" scoped>
    .jumbo {
        height: 400px;
        background-image: url('/public/img/jumbotron.jpg');
    }

    .current-series {
        font-weight: bold;
        padding: .5rem 1rem;
        transform: translateY(50%);
        background-color: #3182F9;
        color: white;
        position: absolute;
        bottom: 0;
        left: 0;
    }

    .container {
        height: 100%;
        position: relative;
    }

</style>