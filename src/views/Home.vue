<template>
  <div class="app">
    <!--<div id="particles-js"></div>-->

    <!--<h1 class="title shadow-text">嘉宾签到</h1>-->
    <!--<h2 class="sub-title shadow-text">The guest check in</h2>-->

    <!--<div class="current-user-info">-->
      <!--<h1 class="user-name shadow-text">赵龙权</h1>-->
      <!--<h2 class="user-title shadow-text">蚂蚁创想CEO 原新浪微博 API 架构师</h2>-->
    <!--</div>-->

    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">Slide 1</div>
        <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div>
        <div class="swiper-slide">Slide 4</div>
        <div class="swiper-slide">Slide 5</div>
        <div class="swiper-slide">Slide 6</div>
        <div class="swiper-slide">Slide 7</div>
        <div class="swiper-slide">Slide 8</div>
        <div class="swiper-slide">Slide 9</div>
        <div class="swiper-slide">Slide 10</div>
      </div>
    </div>
  </div>
</template>

<script>
// import Vue from 'vue'
import faker from 'faker'
// import anime from 'animejs'
// import 'particles.js'

// import particleConfig from '../assets/particle-config'

import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'

export default {
  name: 'HelloWorld',

  // components: { UserAvatar },

  data () {
    return {
    }
  },

  mounted () {
    const mySwiper = new Swiper('.swiper-container', {
      autoplay: true,
      direction: 'vertical',
      loop: true,
    })

    // const el = document.querySelector('.center-avatar-wrapper')
    // const elPlaceholder = document.querySelector('.placeholder')

    // const animation = anime.timeline({
    //   delay: 0,
    //   endDelay: 0,
    //   easing: 'easeInOutSine',
    //   targets: '.center-avatar-wrapper',
    //   loop: false
    // }).add({
    //   targets: elPlaceholder,
    //   width: '500px'
    // }, 1000).add({
    //   width: '500px',
    //   height: '500px',
    //   clipPath: 'circle(300%)',
    //   rotateY: '1turn'
    // }, 1000).add({
    //   targets: elPlaceholder,
    //   width: '0px',
    // }, 5000).add({
    //   width: '0',
    //   height: '0',
    //   // left: '100px',
    //   // top: '0px',
    //   clipPath: 'circle(0)'
    // }, 5000)
    //
    // animation.finished.then(() => {
    //   console.log('hello')
    // })

    /* eslint-disable no-undef */
    // particlesJS('particles-js', particleConfig)
  },

  methods: {
    addUser () {
      this.pauseSlide = !this.pauseSlide
      // TODO
      // this.users.push({
      //   id: this.users.length + 1,
      //   name: faker.name.firstName(),
      //   avatar: faker.image.image()
      // })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  $avatar-size: 85px;
  $center-wrapper-size: 0;
  $center-avatar-size: 60%;

  .app {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
  }

  .swiper-container {
    width: 80%;
    height: 60%;
    background-color: #f00;
    display: flex;
  }

  /*.swiper-slide {*/
    /*width: 100%;*/
    /*height: 100%;*/
    /*overflow: hidden;*/
    /*display: block;*/
    /*color: #fff;*/
    /*font-size: 2rem;*/
  /*}*/
</style>

<style lang="scss">
  html, body {
    position: relative;
    height: 100%;
  }
  body {
    background: #eee;
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    font-size: 14px;
    color:#000;
    margin: 0;
    padding: 0;
  }
  .swiper-container {
    width: 100%;
    height: 100%;
    background-color: #f00;
  }
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #f00;
    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }
</style>
