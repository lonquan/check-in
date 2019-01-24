<template>
  <div class="app">
    <div id="particles-js"></div>

    <h1 class="title shadow-text">嘉宾签到</h1>
    <h2 class="sub-title shadow-text">The guest check in</h2>

    <div class="current-user-info">
      <h1 class="user-name shadow-text">赵龙权</h1>
      <h2 class="user-title shadow-text">蚂蚁创想CEO 原新浪微博 API 架构师</h2>
    </div>

    <div class="swiper-container">
      <div class="swiper-wraper">
        <div class="swiper-slide">slide 01</div>
        <div class="swiper-slide">slide 01</div>
        <div class="swiper-slide">slide 01</div>
        <div class="swiper-slide">slide 01</div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import faker from 'faker'
import anime from 'animejs'
import 'particles.js'

import particleConfig from '../assets/particle-config'

import Swiper from 'swiper'


export default {
  name: 'HelloWorld',

  // components: { UserAvatar },

  data () {
    return {
    }
  },

  mounted () {


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
    particlesJS('particles-js', particleConfig)
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
  }

  .swiper-container {
    display: flex;
    width: 80%;
    height: 600px;
    overflow: hidden;
    background-color: #f00;
  }

  .swiper-slide {
    width: 500px;
    height: 200px;
    overflow: hidden;
    display: block;
    color: #fff;
    font-size: 2rem;
    float: left;
  }
</style>
