<template>
    <div id="headerbox" :class="{animated: animated}">
        <div class="namebox">
            <router-link to="/" class="name">Rainbow's blog</router-link>
        </div>
        <ul class="navs">
            <li class="one active">
                <a href="/" class="navA">
                    <img src="~assets/img/home.png">
                    首页
                </a>
            </li>
            <li class="two">
                <a href="/archive" class="navA">
                    <img src="~assets/img/archive.png">
                    归档
                </a>
            </li>
            <li class="three">
                <router-link to="/" class="navA">
                    <img src="~assets/img/tags.png">
                    标签
                </router-link>
            </li>
            <li class="four" @click="isSearch = true">
                <div :class="['navA', {checked: isSearch}]">
                    <img src="~assets/img/search.png">
                    <input type="text" placeholder="搜索">
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                animated: false,
                isSearch: false
            }
        },
        mounted () {
            this.animated = true
        }
    }
</script>

<style scoped rel="stylesheet/scss" lang="scss">
    #headerbox{
        width: 240px;
        &.animated{
            .name{
                top: 0;
                opacity: 1;
                transition: all .2s ease-in-out;
            }
            .navs li{
                top: 0;
                opacity: 1;
                transition: all .2s ease-in-out;
                &.one{transition-delay: 0.26s;}
                &.two{transition-delay: 0.32s;}
                &.three{transition-delay: 0.38s;}
                &.four{transition-delay: 0.44s;}
            }
        }
    }
    .namebox{
        height: 76px;
        line-height: 76px;
        text-align: center;
        background: #222;
        .name{
            position: relative;
            top: -10px;
            color: #fff;
            font-size: 24px;
            opacity: 0;
        }
    }
    .navs{
        padding: 20px 0 14px;
        background: #fff;
        li{
            position: relative;
            top: -10px;
            width: 100%;
            height: 37px;
            line-height: 37px;
            opacity: 0;
            &:after{
                content: '';
                display: none;
                position: absolute;
                top: 50%;
                right: 15px;
                margin-top: -3px;
                width: 6px;
                height: 6px;
                border-radius: 3px;
                background: #bbb;
            }
            &.active{
                &:after{display: block;}
                a{background: #F9F9F9;}
            }
            a:hover{background: #F9F9F9;}
        }
        img{
            margin-right: 5px;
            width: 14px;
        }
        .navA{
            display: block;
            position: relative;
            padding: 0 20px;
            color: #555;
            font-size: 13px;
            transition: all .2s ease-in-out;
            cursor: pointer;
            &.checked:after{width: 160px;}
            &:after{
                content: '';
                position: absolute;
                left: 42px;
                bottom: 6px;
                width: 0;
                height: 1px;
                background: #333;
                transition: all .5s ease;
            }
            input{
                width: 160px;
                height: 24px;
                color: #333;
                font-size: 13px;
                line-height: 24px;
            }
        }
    }
</style>
