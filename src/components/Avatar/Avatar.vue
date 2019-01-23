<template>
  <transition
    @before-enter="beforeEnter"
    @enter="enter"
    @after-enter="afterEnter"
    @before-leave="beforeLeave"
    @leave="leave"
    @after-leave="afterLeave"
  >
    <div class="user-avatar-wrapper">
      <img class="avatar" :src="user.avatar" alt="">

      <div class="welcome-pane" v-if="isAnimating" ref="welcomePane">
        <img class="welcome-avatar" :src="user.avatar" alt="">
        <h3 class="welcome-msg" ref="welcomeMsg">欢迎 {{ user.name }} 大佬！！</h3>
      </div>
    </div>
  </transition>
</template>

<script>
import 'animate.css'
import anime from 'animejs'

export default {
  name: 'user-avatar',
  props: {
    user: Object
  },

  data () {
    return {
      isAnimating: false
    }
  },

  methods: {
    beforeEnter (el) {
      this.isAnimating = true
    },

    enter (el, done) {
      const bodyRent = document.body.getBoundingClientRect()

      const bodyCenterX = (bodyRent.left + bodyRent.right) / 2
      const bodyCenterY = (bodyRent.top + bodyRent.bottom) / 2

      const elRect = el.getBoundingClientRect()

      const elCenterX = (elRect.left + elRect.right) / 2
      const elCenterY = (elRect.top + elRect.bottom) / 2

      const deltaX = bodyCenterX - elCenterX
      const deltaY = bodyCenterY - elCenterY

      this.$nextTick(() => {
        const animation = anime.timeline({
          delay: 0,
          endDelay: 0,
          easing: 'easeInOutSine'
        }).add({
          targets: el,
          scale: 2,
          translateX: deltaX / 2 + 'px', // 除以缩放倍数
          translateY: deltaY / 2 + 'px',
          clipPath: 'circle(300%)'
        }).add({
          targets: this.$refs.welcomePane,
          backgroundColor: 'rgba(100, 100, 100, 0)'
          // boxShadow: '0 0 0 #f00', // todo
        }, 3000).add({
          targets: this.$refs.welcomeMsg,
          color: 'rgba(255, 255, 255, 0)',
          duration: 200
        }, 3000).add({
          targets: el,
          scale: 1,
          translateX: '0',
          translateY: '0'
        }, 3000)

        animation.finished.then(() => {
          done()
        })
      })
    },

    afterEnter (el) {
      this.isAnimating = false
    },

    beforeLeave (el) {

    },

    leave (el, done) {
      done()
    },

    afterLeave (el) {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$avatar-size: 100px;

.user-avatar-wrapper {
  display: block;
  position: relative;
  transform-origin: top center;

  .avatar {
    display: block;
    width: $avatar-size;
    height: $avatar-size;
    background-color: #f00;
    border-radius: 50%;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  }

  .welcome-pane {
    display: block;
    position: absolute;
    padding: 2rem 0;
    width: 300px;
    background-color: #fff;
    left: -100px;
    top: -2rem;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
    border-radius: 4px;

    .welcome-avatar {
      display: block;
      margin: 0 auto;
      width: $avatar-size;
      height: $avatar-size;
      background-color: #f00;
      border-radius: 50%;
    }

    .welcome-msg {
      display: block;
      color: #666;
      font-size: 1.5rem;
    }
  }
}
</style>
