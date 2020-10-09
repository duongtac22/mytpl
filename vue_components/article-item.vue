<template>
    <article class="article-container">
        <div class="article-img">
            <div class="time">
                <span class="day" > {{ create.split('-')[0] }} </span>
                <span class="month">Tháng {{ create.split('-')[1] }}</span>
            </div>
            <a href="">
                <img v-bind:src="img" alt="">
            </a>
        </div>
        <div class="article-info">
            <a href="" class="article-name"> {{ name }} </a>
            <p class="article-des">
                {{ desc }}
            </p>
        </div>
    </article>
</template>


<script>
module.exports = {
    props: ["name", "img", "desc","create"],
};
</script>