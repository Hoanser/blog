<template>
    <transition name="loading">
        <div v-show="status"
             id="loading">
            <div class="circle1"></div>
            <div class="circle2"></div>
            <div class="circle3"></div>
            <div class="loader">
                <div class="line one"></div>
                <div class="line two"></div>
                <div class="line three"></div>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        data () {
            return {
                status: true
            }
        },
        mounted () {
            let timer = setTimeout(() => {
                this.status = false
            }, 2000)
        }
    }
</script>

<style scoped rel="stylesheet/scss" lang="scss">
  .loading-leave-active{
    transition: all .5s ease;
  }
  .loading-leave-to{
    opacity: 0;
  }
  #loading, .loading-leave{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1000;
    background: linear-gradient(45deg, #8C82E3, #21DED6);
    overflow: hidden;
  }
  .circle1{
    position: absolute;
    top: 20%;
    right: 10%;
    width: 40px;
    height: 40px;
    border-radius: 20px;
    background: rgba(255, 255, 255, .5);
  }
  .circle2{
    position: absolute;
    top: 30%;
    right: -70px;
    width: 120px;
    height: 120px;
    border-radius: 60px;
    background: rgba(255, 255, 255, .5);
  }
  .circle3{
    position: absolute;
    bottom: -210px;
    left: -50px;
    width: 240px;
    height: 300px;
    border-radius: 150px/180px;
    background: rgba(255, 255, 255, .4);
  }
  .loader {
    position: absolute;
    top: calc(50% - 60px);
    left: calc(50% - 60px);
    width: 120px;
    height: 120px;
    border-radius: 50%;
    perspective: 800px;
    .line {
      position: absolute;
      box-sizing: border-box;
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
    .one{
      left: 0;
      top: 0;
      animation: rotate-one 1.5s linear infinite;
      border-bottom: 5px solid rgba(255, 255, 255, .7);
    }
    .two{
      right: 0;
      top: 0;
      animation: rotate-two 1.5s linear infinite;
      border-right: 5px solid rgba(255, 255, 255, .7);
    }
    .three {
      right: 0;
      bottom: 0;
      animation: rotate-three 1.5s linear infinite;
      border-top: 5px solid rgba(255, 255, 255, .7);
    }
  }

  @keyframes rotate-one {
    0% {
      transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg);
    }
    100% {
      transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);
    }
  }

  @keyframes rotate-two {
    0% {
      transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg);
    }
    100% {
      transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);
    }
  }

  @keyframes rotate-three {
    0% {
      transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg);
    }
    100% {
      transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);
    }
  }
</style>
