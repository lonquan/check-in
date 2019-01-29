<template>
    <div class="popup-wrapper">
        <div class="animated-avatar-wrapper">
            <div class="circle circle-1"></div>
            <div class="circle circle-2"></div>
            <div class="circle circle-3"></div>
            <img :src="currentCheckinUser.avatar" alt="" class="center-avatar">
        </div>
        <div class="user-info">
            <h1 class="user-name text-shadow text-light">{{ currentCheckinUser.name }}</h1>
            <h2 class="user-title text-shadow text-light">{{ currentCheckinUser.title }}</h2>
        </div>
    </div>
</template>

<script>
  const bodyWidth = document.body.getBoundingClientRect().width
  const bodyHeight = document.body.getBoundingClientRect().height

  export default {
    name: 'Alert',
    props: {
      users: Array,
    },
    data () {
      return {
        currentCheckinUser: {
          id: null,
          name: null,
          avatar: null,
          title: null
        }
      }
    },

    methods: {
      show () {
        const elPopupWrapper = document.querySelector('.popup-wrapper')
        const elCurrentUserWrapper = document.querySelector('.animated-avatar-wrapper')
        const elCurrentUserInfo = document.querySelector('.user-info')
        // TODO: 停留时间(ms)
        const holdTime = 5000

        const bodyHeight = document.body.getBoundingClientRect().height
        this.animation = anime.timeline({
          delay: 0,
          endDelay: 0,
          easing: 'easeInOutSine',
          // loop: true
        }).add({
          targets: elPopupWrapper,
          padding: '60px',
          duration: 500
        }, 0).add({
          targets: elCurrentUserWrapper,
          width: bodyHeight / 3 + 'px',
          height: bodyHeight / 3 + 'px',
          // clipPath: 'circle(300%)',
          // rotateY: '1turn',
          duration: 500,
          begin: () => {
            // TODO
            // this.mySwiper.autoplay.pause()
            // this.mySwiper.params.slidesPerView = 2
            // this.mySwiper.params.spaceBetween = bodyWidth * 0.8 - 200
            // this.mySwiper.update()
          }
        }, 0).add({
          targets: elCurrentUserInfo,
          opacity: 1,
          duration: 500,
          begin: () => {
            elCurrentUserInfo.style.display = 'flex'
          }
        }, 0).add({
          targets: elCurrentUserInfo,
          opacity: 0,
          duration: 500,
          complete: () => {
            elCurrentUserInfo.style.display = 'none'
          }
        }, holdTime).add({
          targets: elCurrentUserWrapper,
          width: '0',
          height: '0',
          complete: () => {
            // this.mySwiper.params.slidesPerView = 4
            // this.mySwiper.params.spaceBetween = 10
            // this.mySwiper.update()
            // this.mySwiper.autoplay.run()
          }
        }, holdTime).add({
          targets: elPopupWrapper,
          padding: 0,
          duration: 500
        }, holdTime)

        this.animation.finished.then(() => {
          console.log('hello')
        })
      }
    }
  }
</script>

<style lang="scss">
    $avatar-size: 200px;
    $animated-avatar-wrapper-size: 0;
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

    .popup-wrapper {
        display: flex;
        flex-direction: column;
        background-color: rgba(0, 0, 0, 0.8);
        border-radius: 20px;
        overflow: hidden;
        position: fixed;
        z-index: 9999;
        justify-content: center;
        align-items: center;

        .animated-avatar-wrapper {
            display: flex;
            justify-content: center;
            align-items: center;
            width: $animated-avatar-wrapper-size;
            height: $animated-avatar-wrapper-size;
            z-index: 99999;
            position: relative;
            margin-bottom: 20px;

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

        .user-info {
            display: none;
            flex-direction: column;
            opacity: 0;

            .user-name {
                font-size: 2rem;
                font-weight: bold;
            }

            .user-title {
                font-size: 1.35rem;
                font-weight: 400;
                margin-top: 0.5em;
            }
        }
    }
</style>
