<template>
    <div id="personBox" :class="{animated: animated}">
        <div class="overview">
            <img src="~assets/img/avator.jpg" class="avator">
            <p class="name">Rainbow</p>
        </div>
        <ul class="desc">
            <li>
                <b>4</b><br>
                <span>日志</span>
            </li>
            <li class="line">
                <b>1</b><br>
                <span>分类</span>
            </li>
            <li>
                <b>9</b><br>
                <span>标签</span>
            </li>
        </ul>
        <div class="links">
            <a href="https://github.com/Hoanser" target="_blank">
                <img src="~assets/img/github.png">
                GitHub
            </a>
            <a href="https://juejin.im/">
                <img src="~assets/img/github.png">
                掘金
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                animated: false
            }
        },
        mounted () {
            this.animated = true
        }
    }
</script>

<style scoped rel="stylesheet/scss" lang="scss">
    #personBox{
        margin-top: 40px;
        padding: 20px 10px;
        width: 240px;
        background: #fff;
        opacity: 0;
        &.animated{
            margin-top: 20px;
            opacity: 1;
            transition: all .6s ease-out .75s;
        }
    }
    .overview{
        margin-bottom: 20px;
        text-align: center;
        .avator{
            width: 120px;
            padding: 2px;
            border: 1px solid #eee;
        }
        .name{
            height: 28px;
            line-height: 28px;
            color: #222;
            font-weight: 600;
        }
    }
    .desc{
        display: flex;
        justify-content: center;
        li{
            width: 50px;
            height: 40px;
            text-align: center;
            b{
                color: #555;
                font-size: 16px;
            }
            span{
                color: #999;
                font-size: 13px;
            }
        }
        .line{
            border-left: 1px solid #eee;
            border-right: 1px solid #eee;
        }
    }
    .links{
        display: flex;
        justify-content: space-between;
        margin-top: 20px;
        padding-top: 20px;
        border-top: 1px dashed #eee;
        a{
            padding-left: 10px;
            width: 108px;
            color: #555;
            font-size: 14px;
        }
        img{
            width: 14px;
        }
    }
</style>
