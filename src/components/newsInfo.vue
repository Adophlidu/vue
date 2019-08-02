<template>
    <div class="newsInfo-container">
        <h3 class="title">{{ content.title }}</h3>
        <p class="sub-title">
            <span>发表时间: {{ content.add_time }}</span>
            <span>点击{{ content.number }}次</span>
        </p>
        <hr>
        <div class="content-container" v-html="content.content">
        </div>
        <comment-box></comment-box>
    </div>
</template>

<script>
    import comment from './comment.vue'

    export default {
        data () {
            return {
                id: this.$route.params.id,
                content: {}
            }
        },
        created () {
            this.getNewsInfo()
        },
        methods: {
            getNewsInfo () {
                this.$http.get('http://localhost:5000/newsInfo?id=' + this.id).then(function (data) {
                    this.content = data.body
                })
            }
        },
        components: {
            'comment-box': comment
        }
    }
</script>

<style>
    .newsInfo-container{
        padding: 0 5px;
    }
    .newsInfo-container .title{
        margin: 10px 0;
        font-size: 16px;
        color: red;
        text-align: center;
    }
    .newsInfo-container .sub-title{
        display: flex;
        justify-content: space-between;
        color: #2266ff;
    }
    .newsInfo-container img{
        width: 100%;
    }
</style>