<template>
    <div class="cmt">
        <h3>发表评论</h3>
        <hr>
        <textarea ref="cmt" placeholder="请发表你的评论(120字以内)" maxlength="120">

        </textarea>
        <mt-button type="primary" size="large" @click="postComment">点击发表</mt-button>
        <div class="cmt-item" v-for="item , i in cmts">
            <div class="cmt-head">
                <span>第{{ i + 1 }}楼&nbsp;&nbsp;&nbsp;&nbsp;用户:{{ item.user_name }}&nbsp;&nbsp;&nbsp;&nbsp;发表时间:{{ item.add_time }}</span>
            </div>
            <div class="cmt-content">
                {{ item.content }}
            </div>
        </div>
        <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
    </div>
</template>

<script>
    import { Toast } from 'mint-ui'
    export default {
        data () {
            return {
                cmts: [],
                flag: 1
            }
        },
        created () {
            this.getComments()
        },
        methods: {
            getComments () {
                this.$http.get('http://localhost:5000/comment').then(function (data) {
                    this.cmts = data.body
                })
            },
            getMore () {
                if (this.flag >= 2) {
                    Toast('没有更多留言了额~')
                    return
                }
                this.$http.get('http://localhost:5000/moreComment').then(function (data) {
                    let temp = data.body
                    for (let i = 0; i < temp.length; i ++) {
                        this.cmts.push(temp[i])
                    }
                    this.flag ++
                })
            },
            postComment () {
                let cmt = this.$refs.cmt.value
                this.$http.post('http://localhost:5000/postCmt', {"comment": cmt}, {emulateJSON: true})
                    .then(function (data) {
                        this.$refs.cmt.value = ''
                        this.getComments()
                        Toast('发表成功')
                    })
            }
        }
    }
</script>

<style>
    .cmt{
        margin-top: 10px;
    }
    .cmt > button{
        margin-bottom: 10px;
    }
    .cmt textarea{
        height: 80px;
        margin: 0;
    }
    .cmt-item{
        margin-bottom: 10px;
        border: 1px solid #cccccc;
    }
    .cmt-item .cmt-head{
        background-color: #cccccc;
        line-height: 30px;
        font-size: 12px;
    }
    .cmt-item .cmt-content{
        text-indent: 2em;
        line-height: 35px;
    }
</style>