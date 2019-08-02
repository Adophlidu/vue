<template>
    <div>
        <mt-swipe :auto="4000">
            <mt-swipe-item>
                <img src="http://localhost:5000/public/images/m1.jpg">
            </mt-swipe-item>
            <mt-swipe-item>
                <img src="http://localhost:5000/public/images/m2.jpg">
            </mt-swipe-item>
            <mt-swipe-item>
                <img src="http://localhost:5000/public/images/m3.jpg">
            </mt-swipe-item>
        </mt-swipe>
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newsList">
                <img src="../images/msg.png"/>
                <div class="mui-media-body">新闻资讯</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../images/img.png"/>
                <div class="mui-media-body">图片分享</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../images/order.png"/>
                <div class="mui-media-body">商品购买</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../images/msg.png"/>
                <div class="mui-media-body">留言反馈</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../images/tv.png"/>
                <div class="mui-media-body">视频专区</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../images/phone.png"/>
                <div class="mui-media-body">联系我们</div></a></li>
        </ul>
    </div>
</template>
<script>
</script>

<style scoped>
    .mint-swipe{
        height: 200px;
    }
    .mint-swipe-item:nth-child(1){
        background-color: red;
    }
    .mint-swipe-item:nth-child(2){
        background-color: cyan;
    }
    .mint-swipe-item:nth-child(3){
        background-color: yellow;
    }
    .mint-swipe-item img{
        width: 100%;
        height: 100%;
    }
</style>