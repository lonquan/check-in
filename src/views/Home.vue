<template>
  <div class="app">
    <div id="particles-js"></div>

    <h1 class="title shadow-text">嘉宾签到</h1>
    <h2 class="sub-title shadow-text">The guest check in</h2>

    <!-- <div class="current-user-info">
      <h1 class="user-name shadow-text">赵龙权</h1>
      <h2 class="user-title shadow-text">蚂蚁创想CEO 原新浪微博 API 架构师</h2>
    </div> -->

    <div class="swiper-container main-swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="user in users" :key="user.id">
          <div class="avatar-wrapper">
            <img :src="user.avatar" alt="" class="user-avatar">
            <h3 class="user-name">{{ user.name }}</h3>
          </div>
        </div>

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
import 'swiper/dist/css/swiper.css'

let users = []

for (let i = 1; i <= 10; i++) {
  users.push({
    id: i,
    // name: faker.name.firstName(),
    name: 'user-' + i,
    avatar: '/avatar.jpg'
  })
}


console.table(users)
export default {
  name: 'HelloWorld',

  // components: { UserAvatar },

  data () {
    return {
      users
    }
  },

  mounted () {
    const mySwiper = new Swiper('.swiper-container', {
      autoplay: {
        delay: 2000,

      },
      loop: false,
      slidesPerView: 2,
      slidesPerColumn: 3,
      slidesPerGroup: 6,
      slidesPerColumnFill: 'column',
      // loopFillGroupWithBlank: true,
      centeredSlides: false,
      observer: true
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
    particlesJS('particles-js', particleConfig)

    // setInterval(() => {
    //   this.addUser()
    // }, 2000);
  },

  methods: {
    addUser () {
      // this.pauseSlide = !this.pauseSlide
      // TODO
      this.users.push({
        id: this.users.length + 1,
        name: faker.name.firstName(),
        // avatar: faker.image.image()
        avatar: '/default-avatar.jpg'
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  $avatar-size: 85px;
  $center-wrapper-size: 0;
  $center-avatar-size: 60%;

  @keyframes fucking-1 {
    0% {
      transform: rotate(0);
    }

    100% {
      transform: rotate(-1turn);
    }
  }

  @keyframes fucking-2 {
    0% {
      transform: rotate(0);
    }

    25% {
      transform: rotate(0.35turn);
    }

    50% {
      transform: rotate(0.5turn);
    }

    100% {
      transform: rotate(0.95turn);
    }
  }

  #particles-js {
    display: block;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
  }

  h1,
  h2 {
    color: #7de7ff;
  }

  .app {
    display: flex;
    width: 100vw;
    height: 100vh;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url(../assets/background.png);
    background-position: center center;
    background-size: cover;
  }

  .swiper-container {
    width: 80%;
    height: 70%;

    .swiper-slide {
      height: 18vh;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .avatar-wrapper {
      display: flex;
      flex-direction: column;
      overflow: hidden;
      padding: 0;
      margin: 0;
      justify-content: center;
      align-items: center;

      .user-avatar {
        display: block;
        width: 10vh;
        height: 10vh;
        overflow: hidden;
        border-radius: 50%;
      }

      .user-name {
        color: #fff;
      }
    }

  }
</style>
