<template>
    <div id="pagination">
        <span class="page_all">共{{ pages || 0 }}页</span>
        <ul class="page_ul">
            <li v-show="index > 1" class="prev" @click="pageChange(index - 1)">&lt;</li>
            <li v-for="(num, idx) in lists" :class="{checked: num === index}" :key="idx" @click="pageChange(num)">{{ num }}</li>
            <li v-show="index < Number(pages)" class="next" @click="pageChange(index + 1)">&gt;</li>
        </ul>
    </div>
</template>

<script>
    export default {
        props: ['pages'],
        data() {
            return {
                index: 1,
                lists: []
            }
        },
        watch: {
            pages () {
                let data = [],
                    len = Number(this.pages) > 9 ? 9 : Number(this.pages)
                for (let i = 1; i <= len; i++) {
                    data.push(i)
                }
                this.lists = data
                this.index = 1
            }
        },
        methods: {
            pageChange(num, from) {
                if (!this.pages || num < 1 || num > this.pages){
                    return
                }
                let right = this.pages - num >= 4 && this.pages >= 9 ? num > 4 ? 4 : 9 - num : this.pages - num,
                    data = {
                        left: this.pages > 9 ? 8 - right : this.pages - 1 - right,
                        right: right
                    },
                    array = [];

                for (let i in data) {
                    for (let x = 0; data[i] > x; x++) {
                        if (i === 'left') {
                            array.push(num - data[i] + x);
                        } else {
                            array.push(num + x + 1);
                        }
                    }
                    if (i === 'left') {
                        array.push(num)
                    }
                }

                this.index = num;
                this.lists = array;
                if (from != 'parent') {
                    this.$emit('pageChange', num)
                }
            }
        }
    }
</script>

<style scoped rel="stylesheet/scss" lang="scss">
    #pagination {
        width: 100%;
        height: 32px;
        text-align: center;
        border-top: 1px solid #eee;
        .page_all {
            margin-right: 15px;
            height: 32px;
            line-height: 32px;
            color: #555;
            font-size: 14px;
        }
        .page_ul {
            position: relative;
            top: -2px;
            display: inline-block;
            vertical-align: middle;
            height: 32px;
            li {
                float: left;
                width: 30px;
                height: 30px;
                line-height: 30px;
                color: #555;
                font-size: 14px;
                border-top: 1px solid transparent;
                cursor: pointer;
                transition: all .2s ease-in-out;
                &.checked {
                    color: #fff;
                    background: #ccc;
                    &:hover{
                        color: #fff;
                        border-color: transparent;
                    }
                }
                &:hover{
                    color: #222;
                    border-color: #222;
                }
            }
            .prev,
            .next {
            }
        }
    }
</style>
