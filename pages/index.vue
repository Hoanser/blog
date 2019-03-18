<template>
    <section class="container">
        <header class="header_line"></header>
        <div class="wrap clear">
            <div class="fleft">
                <header-box></header-box>
                <person-box></person-box>
            </div>
            <div class="main fright">
                <div id="markDown" :class="{animated: animated}">
                    <div v-for="article in articles" :key="article.id" class="article">
                        <h2 class="article_title">
                            <a href="/">{{ article.title }}</a>
                        </h2>
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
                        <div v-html="article.summary"></div>
                        <a href="/" class="readmore">阅读全文 »</a>
                    </div>
                </div>
                <pagination :pages="pages" class="pagination" @pageChange="page = $event"></pagination>
            </div>
            <com-footer/>
        </div>
    </section>
</template>

<script>
    import headerBox from '~/components/headerBox'
    import personBox from '~/components/personBox'
    import comFooter from '~/components/footer'
    import pagination from '~/components/pagination'
    let converter = null

    export default {
        components: {
            headerBox, personBox, comFooter, pagination
        },
        head: {
            script: [{src: '/js/showdown.js'}]
        },
        data () {
            return {
                animated: false,
                pages: 0,
                page: 1,
                articles: [
                    {
                        id: 1,
                        title: '使用 Travis CI 自动更新 GitHub Pages',
                        pub_time: '2016-03-22',
                        category: '技术',
                        read_time: '6',
                        summary: "每次更改完 [NexT 文档](http://theme-next.iissnan.com/) 都要手动部署到 GitHub Pages，重复的次数多了就显得很麻烦，出错的几率也会变大。\n\n##年轻的想法\n于是，我就想这说将这个过程自动化。首先考虑了使用 <a href=\"https://developer.github.com/webhooks/\" target=\"_blank\">GitHub Webhooks</a>，这是 Github 提供的一种机制，使应用能与 Github 通讯。",
                        content: "每次更改完 [NexT 文档](http://theme-next.iissnan.com/) 都要手动部署到 GitHub Pages，重复的次数多了就显得很麻烦，出错的几率也会变大。\n\n##年轻的想法\n于是，我就想这说将这个过程自动化。首先考虑了使用 <a href=\"https://developer.github.com/webhooks/\" target=\"_blank\">GitHub Webhooks</a>，这是 Github 提供的一种机制，使应用能与 Github 通讯。\n\n##Travis CI 登场\n由于比较穷，租不起服务器（果然有点年轻），于是就想说有没有免费的方案可以用。于是就惦记起各种 CI 服务\n\n![示例](http://flashfish.oss-cn-hangzhou.aliyuncs.com/image%2FiOS_20190123054528299-193_imageSize_828x465.jpg =375x120 \"示例\")\n* 更新代码到 Github\n* Github 跑去告诉 Travis CI 说有个东西变了\n+ Travis CI 勃然大怒、立马安排 Build\n+ Travis CI build 成功后，将输出丢到 Github gh-pages 分支\n- Github build Pages\n- 领盒饭收工\n`gem install travis`\n```\n    function fun(){\n         echo \"这是一句非常牛逼的代码\";\n    }\n    fun();\n```"
                    },
                    {
                        id: 2,
                        title: '使用 Travis CI 自动更新 GitHub Pages',
                        pub_time: '2016-03-22',
                        category: '技术',
                        read_time: '6',
                        summary: "每次更改完 [NexT 文档](http://theme-next.iissnan.com/) 都要手动部署到 GitHub Pages，重复的次数多了就显得很麻烦，出错的几率也会变大。\n\n##年轻的想法\n于是，我就想这说将这个过程自动化。首先考虑了使用 <a href=\"https://developer.github.com/webhooks/\" target=\"_blank\">GitHub Webhooks</a>，这是 Github 提供的一种机制，使应用能与 Github 通讯。",
                        content: "每次更改完 [NexT 文档](http://theme-next.iissnan.com/) 都要手动部署到 GitHub Pages，重复的次数多了就显得很麻烦，出错的几率也会变大。\n\n##年轻的想法\n于是，我就想这说将这个过程自动化。首先考虑了使用 <a href=\"https://developer.github.com/webhooks/\" target=\"_blank\">GitHub Webhooks</a>，这是 Github 提供的一种机制，使应用能与 Github 通讯。\n\n##Travis CI 登场\n由于比较穷，租不起服务器（果然有点年轻），于是就想说有没有免费的方案可以用。于是就惦记起各种 CI 服务\n\n![示例](http://flashfish.oss-cn-hangzhou.aliyuncs.com/image%2FiOS_20190123054528299-193_imageSize_828x465.jpg =375x120 \"示例\")\n* 更新代码到 Github\n* Github 跑去告诉 Travis CI 说有个东西变了\n+ Travis CI 勃然大怒、立马安排 Build\n+ Travis CI build 成功后，将输出丢到 Github gh-pages 分支\n- Github build Pages\n- 领盒饭收工\n`gem install travis`\n```\n    function fun(){\n         echo \"这是一句非常牛逼的代码\";\n    }\n    fun();\n```"
                    }
                ]
            }
        },
        mounted () {
            this.animated = true
            this.initData()
        },
        methods: {
            initData () {
                this.pages = 10
                converter = new showdown.Converter()
                for (let item of this.articles) {
                    item.summary = converter.makeHtml(item.summary)
                }

                this.$axios.get('/api/user').then(res => {
                    console.log(res)
                })
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
        .pagination{margin-top: 80px;}
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
        .article{
            &:first-child:before{
                display: none;
            }
            &:before{
                content: '';
                display: block;
                margin: 80px auto 60px;
                width: 8%;
                height: 1px;
                background: #ccc;
            }
        }
        .article_title{
            margin-bottom: 0;
            text-align: center;
            a{
                position: relative;
                color: #555;
                font-size: 26px;
                font-weight: 400;
                transition: all .2s ease-in-out;
                &:after{
                    content: '';
                    position: absolute;
                    left: 0;
                    bottom: 0;
                    width: 100%;
                    height: 2px;
                    background: #222;
                    transform: scaleX(0);
                    transition: all .2s ease-in-out;
                }
                &:hover:after{
                    transform: scaleX(1);
                }
            }
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
        .readmore{
            display: block;
            margin: 50px auto 0;
            width: 110px;
            height: 32px;
            line-height: 28px;
            text-align: center;
            color: #555;
            border: 2px solid #555;
            transition: all .2s ease-in-out;
            &:hover{
                color: #fff;
                border-color: #222;
                background: #222;
            }
        }
    }
</style>
