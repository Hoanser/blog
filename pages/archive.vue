<template>
    <section>
        <header class="header_line"></header>
        <div class="wrap clear">
            <div class="fleft">
                <header-box></header-box>
                <person-box></person-box>
            </div>
            <div class="main fright">
                <ul :class="['posts', {'animated': animated}]">
                    <li class="count">嗯..! 目前共计 4 篇日志。 继续努力。{{ animated }}</li>
                    <li class="time">2018</li>
                    <li class="article" style="transition-delay: .8s">
                        <span class="pub_time">04-25</span>
                        <router-link to="/">对js单线程和异步的理解</router-link>
                    </li>
                    <li class="article" style="transition-delay: 1s">
                        <span class="pub_time">04-25</span>
                        <router-link to="/">对js单线程和异步的理解</router-link>
                    </li>
                    <li class="time">2017</li>
                    <li class="article" style="transition-delay: 1.2s">
                        <span class="pub_time">04-25</span>
                        <router-link to="/">对js单线程和异步的理解</router-link>
                    </li>
                    <li class="article" style="transition-delay: 1.4s">
                        <span class="pub_time">04-25</span>
                        <router-link to="/">对js单线程和异步的理解</router-link>
                    </li>
                    <li class="article" style="transition-delay: 1.6s">
                        <span class="pub_time">04-25</span>
                        <router-link to="/">对js单线程和异步的理解</router-link>
                    </li>
                    <li class="article" style="transition-delay: 1.8s">
                        <span class="pub_time">04-25</span>
                        <router-link to="/">对js单线程和异步的理解</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script>
    import headerBox from '~/components/headerBox'
    import personBox from '~/components/personBox'

    export default {
        components: {
            headerBox, personBox
        },
        data () {
            return {
                animated: false
            }
        },
        mounted () {
            console.log(111)
            this.animated = true
        }
    }
</script>

<style scoped rel="stylesheet/scss" lang="scss">
    .main{
        padding: 40px;
        width: 700px;
        min-height: 700px;
        background: #fff;
    }
    .circle{
        content: '';
        position: absolute;
        left: 0;
        top: 50%;
        border: 1px solid #fff;
        border-radius: 50%;
        transform: translate(-50%, -50%);
    }
    .posts{
        position: relative;
        margin-left: 55px;
        &:before{
            content: " ";
            position: absolute;
            top: 20px;
            left: 0;
            margin-left: -2px;
            width: 4px;
            height: 100%;
            background: #f5f5f5;
        }
        li{
            position: relative;
            padding-left: 20px;
        }
        .count{
            color: #555;
            font-size: 14px;
            line-height: 2;
            &:before{
                @extend .circle;
                width: 10px;
                height: 10px;
                background: rgba(85, 85, 85, .5);
            }
        }
        .time{
            margin: 60px 0 45px;
            padding-left: 0;
            color: #555;
            font-size: 22px;
            font-weight: 700;
            opacity: 0;
            transition: all .8s ease;
            &:before{
                @extend .circle;
                left: -10px;
                width: 8px;
                height: 8px;
                background: #bbb;
                transition: all .8s ease;
            }
        }
        .article{
            position: relative;
            top: -20px;
            opacity: 0;
            margin: 15px 0;
            height: 62px;
            line-height: 62px;
            transition: all .4s ease-in-out;
            &:before{
                @extend .circle;
                width: 6px;
                height: 6px;
                background: #bbb;
                transition: all .2s ease-in-out;
            }
            &:after{
                content: '';
                position: absolute;
                left: 0;
                bottom: 0;
                width: 100%;
                border-bottom: 1px dashed #ccc;
                transition: all .2s ease-in-out;
            }
            .pub_time{
                color: #555;
                font-size: 12px;
            }
            a{
                color: #555;
                font-size: 16px;
            }
            &:hover{
                &:before{background: #222;}
                &:after{border-bottom-color: #666;}
            }
        }
    }
    .animated{
        .time{
            padding-left: 20px;
            opacity: 1;
            &:before{left: 0;}
        }
        .article{
            top: 0;
            opacity: 1;
        }
    }
</style>
