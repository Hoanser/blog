<template>
    <section>
        <header class="header_line"></header>
        <div class="wrap clear">
            <div class="fleft">
                <header-box></header-box>
                <person-box></person-box>
                <div ref="navBox" :class="['article_nav', {animated: animated, affix: affix}]">
                    <h5 class="nav_title">文章目录</h5>
                    <ol class="nav_list">
                        <li v-for="(hash, index) in hashs" :key="index">
                            <a :href="'#' + hash.name"
                               :class="{active: index == hash_active}"
                               @click="scroll_status = true; hash_active = index;">{{ (index + 1) + '. ' + hash.name }}</a>
                        </li>
                    </ol>
                </div>
            </div>
            <div class="main fright">
                <div id="markDown" :class="{animated: animated}">
                    <h2 class="article_title">{{ article.title }}</h2>
                    <h6 class="article_desc">
                    <span>
                        <img src="~assets/img/canlendar.png">
                        发表于 {{ article.pub_time }}
                    </span>
                        <span class="line"></span>
                        <span>
                        <img src="~assets/img/folder.png">
                        分类于 {{ article.category }}
                    </span>
                        <span class="line"></span>
                        <span>
                        <img src="~assets/img/eye.png">
                        阅读次数 {{ article.read_time }}
                    </span>
                    </h6>
                    <div ref="markDown" v-html="article.content"></div>
                </div>
            </div>
            <com-footer/>
        </div>
    </section>
</template>

<script>
    import headerBox from '~/components/headerBox'
    import personBox from '~/components/personBox'
    import comFooter from '~/components/footer'
    let converter = null,
        nav_top = 0

    export default {
        components: {
            headerBox, personBox, comFooter
        },
        head: {
            script: [{src: '/js/showdown.js'}]
        },
        data () {
            return {
                animated: false,
                affix: false,
                article: {
                    id: 1,
                    title: '使用 Travis CI 自动更新 GitHub Pages',
                    pub_time: '2016-03-22',
                    category: '技术',
                    read_time: '6',
                    summary: "每次更改完 [NexT 文档](http://theme-next.iissnan.com/) 都要手动部署到 GitHub Pages，重复的次数多了就显得很麻烦，出错的几率也会变大。\n\n##年轻的想法\n于是，我就想这说将这个过程自动化。首先考虑了使用 <a href=\"https://developer.github.com/webhooks/\" target=\"_blank\">GitHub Webhooks</a>，这是 Github 提供的一种机制，使应用能与 Github 通讯。",
                    content: "每次更改完 [NexT 文档](http://theme-next.iissnan.com/) 都要手动部署到 GitHub Pages，重复的次数多了就显得很麻烦，出错的几率也会变大。\n\n##年轻的想法\n于是，我就想这说将这个过程自动化。首先考虑了使用 <a href=\"https://developer.github.com/webhooks/\" target=\"_blank\">GitHub Webhooks</a>，这是 Github 提供的一种机制，使应用能与 Github 通讯。\n\n##Travis CI 登场\n由于比较穷，租不起服务器（果然有点年轻），于是就想说有没有免费的方案可以用。于是就惦记起各种 CI 服务\n\n![示例](http://flashfish.oss-cn-hangzhou.aliyuncs.com/image%2FiOS_20190123054528299-193_imageSize_828x465.jpg =375x120 \"示例\")\n* 更新代码到 Github\n* Github 跑去告诉 Travis CI 说有个东西变了\n+ Travis CI 勃然大怒、立马安排 Build\n+ Travis CI build 成功后，将输出丢到 Github gh-pages 分支\n- Github build Pages\n- 领盒饭收工\n`gem install travis`\n```\n    function fun(){\n         echo \"这是一句非常牛逼的代码\";\n    }\n    fun();\n```每次更改完 [NexT 文档](http://theme-next.iissnan.com/) 都要手动部署到 GitHub Pages，重复的次数多了就显得很麻烦，出错的几率也会变大。\n\n##年轻的想法2\n于是，我就想这说将这个过程自动化。首先考虑了使用 <a href=\"https://developer.github.com/webhooks/\" target=\"_blank\">GitHub Webhooks</a>，这是 Github 提供的一种机制，使应用能与 Github 通讯。\n\n##Travis CI 登场2\n由于比较穷，租不起服务器（果然有点年轻），于是就想说有没有免费的方案可以用。于是就惦记起各种 CI 服务\n\n![示例](http://flashfish.oss-cn-hangzhou.aliyuncs.com/image%2FiOS_20190123054528299-193_imageSize_828x465.jpg =375x120 \"示例\")\n* 更新代码到 Github\n* Github 跑去告诉 Travis CI 说有个东西变了\n+ Travis CI 勃然大怒、立马安排 Build\n+ Travis CI build 成功后，将输出丢到 Github gh-pages 分支\n- Github build Pages\n- 领盒饭收工\n`gem install travis`\n```\n    function fun(){\n         echo \"这是一句非常牛逼的代码\";\n    }\n    fun();\n```"
                },
                hashs: [],
                hash_active: -1,
                scroll_status: false
            }
        },
        mounted () {
            this.animated = true
            this.initData()
        },
        methods: {
            initData () {
                nav_top = this.$refs.navBox.offsetTop
                converter = new showdown.Converter()
                this.article.content = converter.makeHtml(this.article.content)

                this.$nextTick(() => {
                    let doms = this.$refs.markDown.getElementsByTagName('h2')
                    for(let dom of doms) {
                        this.hashs.push({name: dom.innerHTML, top: dom.offsetTop})
                    }
                    document.addEventListener('scroll', this.handleScroll)
                })
            },
            handleScroll (e) {
                e.preventDefault()
                e.stopPropagation()

                let scrollTop = document.body.scrollTop || document.documentElement.scrollTop,
                    hashs = this.hashs

                this.affix = scrollTop >= nav_top
                if (this.scroll_status) return

                for (let len = hashs.length, idx = len - 1; idx >= 0; idx--) {
                    console.log(scrollTop+' '+hashs[idx].top)
                    if (scrollTop >= hashs[idx].top) {
                        this.hash_active = idx;
                        break;
                    }
                }
                this.scroll_status = true
            }
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss">
    @import "../assets/css/markDown";
    .main{
        padding: 40px;
        width: 700px;
        min-height: 700px;
        background: #fff;
    }
    .article_nav{
        margin-top: 40px;
        padding: 20px;
        width: 240px;
        background: #fff;
        opacity: 0;
        &.animated{
            margin-top: 20px;
            opacity: 1;
            transition: all .6s ease-out .75s;
        }
        &.affix{
            position: fixed;
            top: -20px;
        }
        .nav_title{
            color: #555;
            text-align: center;
        }
        .nav_list{
            margin-top: 20px;
            li{
                line-height: 24px;
                a{
                    color: #555;
                    transition: all .2s ease-in-out;
                    &:hover{color: #222;}
                    &.active{color: #fc6423;}
                }
            }
        }
    }
    #markDown{
        position: relative;
        top: -20px;
        opacity: 0;
        &.animated{
            top: 0;
            opacity: 1;
            transition: all .6s ease-out .75s;
        }
        .article_title{
            margin-bottom: 0;
            text-align: center;
            color: #555;
            font-size: 26px;
            font-weight: 400;
        }
        .article_desc{
            margin: 0 0 60px 0;
            text-align: center;
            color: #999;
            font-weight: 400;
            span{
                display: inline-block;
                font-size: 12px;
            }
            .line{
                position: relative;
                top: 1px;
                margin: 0 6px;
                width: 1px;
                height: 10px;
                background: #999;
            }
        }
    }
</style>
