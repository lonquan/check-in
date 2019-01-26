<template>
  <div class="app">
    <div id="particles-js"></div>

    <h1 class="title text-shadow text-light">嘉宾签到</h1>
    <h2 class="sub-title text-shadow text-light">The guest check in</h2>

    <div class="current-user-wrapper">
      <div class="circle circle-1"></div>
      <div class="circle circle-2"></div>
      <div class="circle circle-3"></div>
      <img :src="currentCheckinUser.avatar" alt="" class="center-avatar">
    </div>
    <div class="current-user-info">
      <h1 class="user-name text-shadow text-light">{{ currentCheckinUser.name }}</h1>
      <h2 class="user-title text-shadow text-light">{{ currentCheckinUser.title }}</h2>
    </div>

    <div class="swiper-container main-swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="user in users" :key="user.id">
          <div class="avatar-wrapper">
            <img :src="user.avatar" alt="" class="user-avatar">
            <h3 class="user-name text-shadow text-light">{{ user.name }}</h3>
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

for (let i = 1; i <= 20; i++) {
  users.push({
    id: i,
    // name: faker.name.firstName(),
    name: 'user-' + i,
    avatar: '/avatar.jpg'
  })
}

const bodyWidth = document.body.getBoundingClientRect().width
const bodyHeight = document.body.getBoundingClientRect().height

export default {
  name: 'HelloWorld',

  // components: { UserAvatar },

  data () {
    return {
      users,
      mySwiper: null,
      currentCheckinUser: {
        id: null,
        name: null,
        avatar: null,
        title: null
      }
    }
  },

  mounted () {
    this.mySwiper = new Swiper('.swiper-container', {
      autoplay: {
        delay: 2000,
        disableOnInteraction: false
      },
      // autoplay: false,
      direction: 'horizontal',
      // loop: true,
      slidesPerView: 4,
      slidesPerColumn: 3,
      // spaceBetween: bodyWidth / 3,
      spaceBetween: 30,
      slidesPerGroup: 2,
      slidesPerColumnFill: 'column',
      // loopFillGroupWithBlank: true,
      centeredSlides: false,
      observer: true,
      observeSlideChildren: true
    })

    /* eslint-disable no-undef */
    particlesJS('particles-js', particleConfig)

    let interval = setInterval(() => {
      if (this.users.length < 50) {
        this.addUser()
      } else {
        clearInterval(interval)
      }
    }, 8000)
  },

  methods: {
    addUser () {
      const newUser = {
        id: this.users.length + 1,
        name: faker.name.firstName(),
        // avatar: faker.image.image()
        avatar: '/default-avatar.jpg',
        title: '蚂蚁创想CEO 原新浪微博 API 架构师'
      }

      this.users.push(newUser)
      this.currentCheckinUser = newUser

      this.showCheckinPopup()
    },

    showCheckinPopup () {
      const elCurrentUserWrapper = document.querySelector('.current-user-wrapper')
      const elCurrentUserInfo = document.querySelector('.current-user-info')

      // 停留时间(ms)
      const holdTime = 4000

      const bodyHeight = document.body.getBoundingClientRect().height
      const animation = anime.timeline({
        delay: 0,
        endDelay: 0,
        easing: 'easeInOutSine',
        // loop: true
      }).add({
        targets: elCurrentUserWrapper,
        width: bodyHeight / 3 + 'px',
        height: bodyHeight / 3 + 'px',
        // clipPath: 'circle(300%)',
        rotateY: '1turn',
        duration: 500,
        begin: () => {
          this.mySwiper.autoplay.pause()
          this.mySwiper.params.slidesPerView = 2
          this.mySwiper.params.spaceBetween = bodyWidth * 0.8 - 200
          this.mySwiper.update()
        }
      }).add({
        targets: elCurrentUserInfo,
        opacity: 1,
        duration: 500
      }, 0).add({
        targets: elCurrentUserInfo,
        opacity: 0,
        duration: 500
      }, holdTime).add({
        targets: elCurrentUserWrapper,
        width: '0',
        height: '0',
        // clipPath: 'circle(0)',
        complete: () => {
          this.mySwiper.params.slidesPerView = 4
          this.mySwiper.params.spaceBetween = 10
          this.mySwiper.update()
          this.mySwiper.autoplay.run()
        }
      }, holdTime)

      animation.finished.then(() => {
        console.log('hello')
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  $avatar-size: 90px;
  $current-user-wrapper-size: 0;
  $center-avatar-size: 60%;

  @keyframes rotate-circle-1 {
    0% {
      transform: rotate(0);
    }

    100% {
      transform: rotate(-1turn);
    }
  }

  @keyframes rotate-circle-2 {
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

  .swiper-slide {
    margin-top: 20px !important; // spacebetween 问题
  }

   .current-user-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      width: $current-user-wrapper-size;
      height: $current-user-wrapper-size;
      z-index: 99999;
      position: fixed;

      .center-avatar {
        z-index: 9999;
        width: $center-avatar-size;
        height: $center-avatar-size;
        border-radius: 50%;
        background: #0466bf;
        padding: 4px;
        box-shadow: 0 3px 5px rgba(6, 101, 191, 0.5);
      }
      .circle {
        display: block;
        position: absolute;
        width: 100%;
        height: 100%;
        background-position: center center;
        background-size: cover;
      }
      .circle-1 {
        background-image: url(../assets/01.png);
        transform: rotate(75deg);
        animation-name: rotate-circle-1;
        animation-duration: 4s;
        animation-iteration-count: infinite;
      }
      .circle-2 {
        background-image: url(../assets/02.png);
        animation-name: rotate-circle-2;
        animation-duration: 5s;
        animation-iteration-count: infinite;
      }
      .circle-3 {
        background-image: url(../assets/03.png);
      }
    }

  .current-user-info {
    display: block;
    position: fixed;
    bottom: 10%;
    opacity: 0;

    .user-name {
      font-size: 1.8rem;
      font-weight: 4;
    }

    .user-title {
      font-size: 1.35rem;
      font-weight: 400;
      margin-top: 0.5em;
    }
  }

  .swiper-container {
    width: 80%;

    .swiper-slide {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 150px;
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
        width: $avatar-size;
        height: $avatar-size;
        border-radius: 50%;
        box-shadow: 0 10px 15px rgba(0, 0, 0, 0.3);
      }

      .user-name {
        font-size: 1.5rem;
        font-weight: 500;
        margin-top: 0.2em;
      }
    }

  }
</style>
