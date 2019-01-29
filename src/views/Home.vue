<template>
    <div class="app">
        <div id="particles-js"></div>

        <div class="title-wrapper">
            <h1 class="title text-shadow text-light">嘉宾签到墙</h1>
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
  import axios from 'axios'
  import 'particles.js'

  import AvatarAlert from './Alert';

  import particleConfig from '../assets/particle-config'

  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.css'

  export default {
    name: 'HelloWorld',

    components: { AvatarAlert },

    data () {
      return {
        // lastId: localStorage.getItem('last_id') || 0,
        lastId: 0,
        users: [],
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
          delay: 3000,
          disableOnInteraction: false
        },
        direction: 'horizontal',
        // effect: 'coverflow',
        // loop: true,
        slidesPerView: 4,
        slidesPerColumn: 2,
        spaceBetween: 30,
        slidesPerGroup: 2,
        slidesPerColumnFill: 'column',
        centeredSlides: false,
        observer: true,
        observeSlideChildren: true
      })

      /* eslint-disable no-undef */
      particlesJS('particles-js', particleConfig)

      this.getDonePeople()
    },

    methods: {
      getDonePeople () {
        setInterval(()=>{
          axios.get(`http://127.0.0.1/api.php?last_id=${this.lastId}`).then(res => {
            // console.log(res)
            if(res.data){
              this.lastId = res.data.id;
              // localStorage.setItem('last_id', res.data.id);
              this.addUser(res.data);
            }

          }).catch(res => {
          })
        }, 1000);
      },
      addUser (user) {
        const newUser = {
          id: user.id,
          name: user.name,
          avatar: user.face_image,
          title: user.company
        }

        this.users.push(newUser)
        this.currentCheckinUser = newUser
        this.showCheckinPopup(newUser)
      },

      showCheckinPopup (newUser) {

      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    $avatar-size: 200px;
    $animated-avatar-wrapper-size: 0;
    $center-avatar-size: 60%;

    #particles-js {
        display: block;
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
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

    .title-wrapper {
        top: -30px;
        position: fixed;
        top: 50px;

        .title {

        }

        .sub-title {

        }
    }



    .swiper-container {
        width: 80%;
        /*position: fixed;*/
        /*bottom: 50px;*/

        .swiper-slide {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            /*height: 200px;*/
        }

        .avatar-wrapper {
            display: flex;
            flex-direction: column;
            overflow: hidden;
            margin: 0;
            justify-content: center;
            align-items: center;
            padding: 20px;

            .user-avatar {
                display: block;
                width: $avatar-size;
                height: $avatar-size;
                border-radius: 50%;
                box-shadow: 0 0 55px rgba(0, 0, 0, 0.5);
            }

            .user-name {
                font-size: 2rem;
                font-weight: 500;
                margin-top: 0.4em;
            }
        }

    }
</style>
