<template>
  <div class="app">
    <div class="avatar-wall">
      <div
        class="avatar-wrapper"
        :class="{ arrived: user.arrived, ['user-' + user.id]: true }"
        :ref="'user-' + user.id"
        v-for="user in users"
        :key="user.id"
      >
        <img class="avatar" :src="user.arrived ? user.avatar : '/default-avatar.jpg'" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import 'animate.css'
import anime from 'animejs'
import faker from 'faker'

function getRandomIntInclusive (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; // The maximum is inclusive and the minimum is inclusive
}

let users = []

for (let i = 1; i < 30; i++) {
  users.push({
    id: i,
    name: faker.name.firstName(),
    // avatar: faker.image.avatar(),
    avatar: '/avatar.jpg',
    arrived: false
  })
}

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },

  data () {
    return {
      users
    }
  },

  mounted () {
    setInterval(() => {
      const unsignedUsers = this.users.filter(user => user.arrived === false)

      const randomIndex = getRandomIntInclusive(0, unsignedUsers.length - 1)
      this.signup(unsignedUsers[randomIndex])
    }, 5000)
  },

  methods: {
    signup (user) {
      console.log(user.id)
      const rect = document.querySelector('.user-' + user.id).getBoundingClientRect()

      const welcomePaneOriginalWidth = 500

      let newEl = document.createElement('div')
      newEl.classList = 'welcome-pane'

      // 插入头像
      let imageEl = document.createElement('img')
      imageEl.src = user.avatar
      imageEl.classList = 'welcome-avatar'

      newEl.appendChild(imageEl)

      // 插入欢迎词
      let textEl = document.createElement('p')
      textEl.classList = 'welcome-msg'
      textEl.textContent = `Welcome, ${user.name}!`

      newEl.appendChild(textEl)

      document.body.appendChild(newEl)

      const animation = anime.timeline({
        delay: 0,
        endDelay: 0,
        easing: 'easeInOutSine'
      }).add({
        targets: newEl,
        // left: rect.x + 'px',
        scale: 1.2,
        duration: 500
      }).add({
        targets: textEl,
        color: '#f00',
        scale: 0,
        duration: 100,
        delay: 3000
      }).add({
        targets: newEl,
        delay: 0,
        left: rect.x + 'px',
        top: rect.y,
        scale: 1,
        width: '85px',
        height: '85px',
        borderRadius: '50%'
      })

      animation.finished.then(() => {
        this.users[user.id - 1].arrived = true
        newEl.remove()
      })

    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$avatar-size: 85px;

.app {
  display: flex;

  .avatar-wall {
    display: flex;
    width: 65%;
    overflow: hidden;
    background-color: #f8f8f8;
    margin: 0 auto;
    padding: 3rem;
    flex-wrap: wrap;
    justify-content: space-around;

    .avatar-wrapper {
      display: flex;
      flex-direction: row;
      margin: 1rem;
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
.welcome-pane {
  display: flex;
  position: fixed;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0;
  left: calc(50% - 250px);
  top: 35%;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.5);
  border-radius: 3px;
  width: 500px;
  overflow: hidden;
  background-color: #fff;
  transform-origin: 85px center;

  .welcome-avatar {
    display: block;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-top: 2rem;
  }

  .welcome-msg {
    display: block;
    text-align: center;
    font-size: 2rem;
    overflow: hidden;
  }
}
</style>
