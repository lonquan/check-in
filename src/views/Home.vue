<template>
  <div class="app">
    <div id="particles-js"></div>

    <h1 class="title">嘉宾签到</h1>
    <h2 class="sub-title">The guest check in</h2>

    <div class="center-avatar-wrapper">
      <div class="circle circle-1"></div>
      <div class="circle circle-2"></div>
      <div class="circle circle-3"></div>
      <img src="/default-avatar.jpg" alt="" class="center-avatar">
    </div>

    <div class="avatar-wall" @click="addUser">
      <UserAvatar
        class="avatar-wrapper"
        :user="user"
        v-for="user in users"
        :key="user.id"
      />
    </div>
  </div>
</template>

<script>
import faker from 'faker'
import anime from 'animejs'
import UserAvatar from '../components/Avatar/Avatar.vue'
import 'particles.js'

import particleConfig from '../assets/particle-config'

let users = []

for (let i = 1; i < 20; i++) {
  users.push({
    id: i,
    name: faker.name.firstName(),
    avatar: faker.image.image()
  })
}

export default {
  name: 'HelloWorld',

  components: { UserAvatar },

  props: {
    msg: String
  },

  data () {
    return {
      users
    }
  },

  mounted () {
    // setInterval(() => {
    //   this.addUser()
    // }, 5000)

    anime({
      targets: '.avatar-wrapper .avatar',
      scale: [
        {value: 1.2, easing: 'easeOutSine', duration: 500},
        {value: 1, easing: 'easeInOutQuad', duration: 1200}
      ],
      delay: anime.stagger(200, {grid: [15, 2], from: 'center'}),
      loop: true
    })

    /* eslint-disable no-undef */
    particlesJS('particles-js', particleConfig)
  },

  methods: {
    addUser () {
      this.users.push({
        id: this.users.length + 1,
        name: faker.name.firstName(),
        avatar: faker.image.image()
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$avatar-size: 85px;
$center-wrapper-size: 400px;
$center-avatar-size: 240px;

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

.title,
.sub-title {
  color: #7de7ff;
  position: fixed;
  top: 20px;
  font-size: 3.5rem;
  font-weight: 500;
  text-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
}

.sub-title {
  top: 110px;
  font-size: 1.5rem;
}

.app {
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-image: url(../assets/background.png);
  background-position: center center;
  background-size: cover;

  .center-avatar-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    width: $center-wrapper-size;
    height: $center-wrapper-size;
    left: calc(50% - #{$center-wrapper-size} / 2);
    top: calc(50% - #{$center-wrapper-size} / 2);
    z-index: 999;

    .center-avatar {
      z-index: 9999;
      width: $center-avatar-size;
      height: $center-avatar-size;
      /*position: absolute;*/
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
      animation-name: fucking-1;
      animation-duration: 4s;
      animation-iteration-count: infinite;
    }

    .circle-2 {
      background-image: url(../assets/02.png);
      animation-name: fucking-2;
      animation-duration: 5s;
      animation-iteration-count: infinite;
    }

    .circle-3 {
      background-image: url(../assets/03.png);
    }
  }

  .avatar-wall {
    position: fixed;
    display: grid;
    width: 85%;
    height: 600px;
    background-color: #f8f8f82f;
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    /*grid-template-columns: 100px auto 100px;*/
    grid-template-rows: auto;
    /*grid-template-areas:*/
      /*"avatar center avatar"*/
      /*"avatar center avatar"*/
      /*"avatar center avatar";*/
    grid-gap: 2rem;
    overflow: hidden;

    .avatar-wrapper {
      position: relative;

      .avatar {
        display: flex;
        width: $avatar-size;
        height: $avatar-size;
        background-color: #fff;
        border-radius: 50%;
        padding: 3px;
        border: 1px solid #ccc;

      }
    }
  }
}
</style>
<style lang="scss">
  .avatar {
    background-color: #fff !important;
    grid-area: avatar;
  }
</style>
