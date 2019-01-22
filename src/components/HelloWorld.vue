<template>
  <div class="app">
    <div class="avatar-wall">
      <div
        class="avatar-wrapper"
        :class="{ arrived: user.arrived }"
        v-for="user in users"
        :key="user.id"
        @click="onClick(user.id)"
      >
        <img class="avatar" :src="user.avatar" alt="">

        <transition>
          <div class="welcome-msg">
            <img class="welcome-avatar" :src="user.avatar" alt="">

            welcome haha
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import faker from 'faker'

let users = []

for (let i = 1; i < 30; i++) {
  users.push({
    id: i,
    name: faker.name,
    avatar: faker.image.avatar(),
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

  methods: {
    onClick (id) {
      this.users[id - 1].arrived = true
    }
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

      .welcome-msg {
        visibility: hidden;
        position: absolute;
        width: $avatar-size;
        height: $avatar-size;
        left: 0;
        top: 0;

        .welcome-avatar {
          width: $avatar-size;
          height: $avatar-size;
          border-radius: 50%;
        }
      }

      &.arrived {


        .welcome-msg {
          border-radius: 5px;
          box-shadow: 0 10px 15px rgba(0, 0, 0, 0.5);
          visibility: visible;
          display: block;
          overflow: hidden;
          z-index: 999;
          padding: 3rem;
          background-color: #fff;
          left: 300px;
          position: fixed;
          transform: scale(2);
          transition: all 1s ease-in-out;

          .welcome-avatar {
            transition: all 1s ease-in-out;
          }
        }
      }
    }
  }
}
</style>
