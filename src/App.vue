<template>
    <div class="app-container">
        <!-- 顶部Header -->
        <mt-header fixed title="vue移动项目"></mt-header>
        <!-- 中间内容 路由部分 -->
        <transition>
            <router-view></router-view>
        </transition>
        <!-- 底部 -->
        <nav class="mui-bar mui-bar-tab">
            <router-link class="mui-tab-item" to="/home">
                <span class="mui-icon mui-icon-home"></span>
                <span class="mui-tab-label">首页</span>
            </router-link>
            <router-link class="mui-tab-item" to="/member">
                <span class="mui-icon mui-icon-contact"></span>
                <span class="mui-tab-label">会员</span>
            </router-link>
            <router-link class="mui-tab-item" to="/shopcar">
                <span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">0</span></span>
                <span class="mui-tab-label">购物车</span>
            </router-link>
            <router-link class="mui-tab-item" to="search">
                <span class="mui-icon mui-icon-search"></span>
                <span class="mui-tab-label">搜索</span>
            </router-link>
        </nav>
    </div>
</template>

<script>

</script>

<style scoped>
    .app-container{
        padding-right: 5px;
        padding-left: 5px;
        padding-top: 40px;
        padding-bottom: 55px;
    }
    .v-enter{
        opacity: 0;
        transform: translateX(100%);
    }
    .v-leave-to{
        position: absolute;
        opacity: 0;
        transform: translateX(-100%);
    }
    .v-enter-active,.v-leave-active{
        transition: all .5s ease;
    }
</style>