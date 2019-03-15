<template>
    <div id="footer">
        <div class="inner">
            <p>
                <span>&copy; 2018</span>
                <img src="~assets/img/user.png" class="user">
                <span>Rainbow</span>
            </p>
            <p>网站备案号：未完待续</p>
        </div>
    </div>
</template>

<script>
    export default {}
</script>

<style scoped rel="stylesheet/scss" lang="scss">
    #footer{
        padding: 60px 0 20px;
        clear: both;
        .inner{
            padding-left: 260px;
        }
        p{
            color: #999;
            line-height: 28px;
            text-align: center;
            .user{
                position: relative;
                top: -1px;
                margin-left: 10px;
                width: 12px;
            }
        }
    }
</style>
