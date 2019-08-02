/*
* main.js
* 服务器端入口模块
* */
const path = require('path')
const express = require('express')
const fs = require('fs')
const bodyParser = require('body-parser') //第三方插件用于解析post请求参数

const server = express()

//配置body-parser插件
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({extended: false}))

server.all('*',function (req, res, next) { //解决跨域
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    if (req.method == 'OPTIONS') {
        res.send(200);
    }
    else {
        next();
    }
})

server.get('/newsList', function (req, res) {
    fs.readFile('./newsList.json', 'utf8', function (error, data) {
        if (error) {
            return res.end('404')
        }
        res.end(data)
    })
})

server.get('/newsInfo', function (req, res) {
    fs.readFile('./newsInfo.json', 'utf8', function (error, data) {
        if (error) {
            return res.end('404')
        }
        let rel = JSON.parse(data)
        let str = rel.newsInfo.find(function (item) {
            return item.id == req.query.id
        })
        res.send(str)
    })
})

server.get('/comment', function (req, res) {
    fs.readFile('./comment.json', 'utf8', function (error, data) {
        if (error) {
            return res.end('404')
        }
        res.send(JSON.parse(data).comments)
    })
})

server.get('/moreComment', function (req, res) {
    fs.readFile('./moreComment.json', 'utf8', function (error, data) {
        if (error) {
            return res.end('404')
        }
        res.send(JSON.parse(data).moreComments)
    })
})

server.post('/postCmt', function (req, res) {
    fs.readFile('./comment.json', 'utf8', function (error, data) {
        if (error){
            return res.end('404')
        }
        let postCom = req.body.comment
        let comments = JSON.parse(data).comments
        comments.push({"user_name": "匿名用户", "add_time": "2019-08-02", "content": postCom})
        let relStr = JSON.stringify({
            "comments": comments
        })
        fs.writeFile('./comment.json', relStr, function (error) {
            if (error) {
                res.end('文件写入失败')
            }
        })
    })
})

server.use('/public', express.static('./public'))

server.listen(5000, function () {
    console.log('the server is running at 5000')
})