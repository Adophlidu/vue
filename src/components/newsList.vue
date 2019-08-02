<template>
    <div>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item.id">
                <router-link :to="'/home/newsInfo/' + item.id">
                    <img class="mui-media-object mui-pull-left" src="http://localhost:5000/public/images/avatar.jpg">
                    <div class="mui-media-body">
                        <h1>{{ item.title }}</h1>
                        <p class='mui-ellipsis'>
                            <span>时间: {{ item.add_time }}</span>
                            <span>点赞次数: {{ item.number }}</span>
                        </p>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                newsList: []
            }
        },
        created (){
            this.getNewsList()
        },
        methods: {
            getNewsList () {
                this.$http.get('http://localhost:5000/newsList').then(function (data) {
                    this.newsList = data.body.newsList
                })
            }
        }
    }

</script>
<style>
    .mui-table-view h1{
        font-size: 14px;
    }
    .mui-table-view .mui-ellipsis{
        display: flex;
        justify-content: space-between;
        font-size: 12px;
        color: #2266ff;
    }
</style>