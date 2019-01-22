<template>
  <div class="app">
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
import UserAvatar from '../components/Avatar/Avatar.vue'

let users = []

for (let i = 1; i < 10; i++) {
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
    setInterval(() => {
      this.addUser()
    }, 5000)
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

.app {
  .avatar-wall {
    display: grid;
    width: 65%;
    background-color: #f8f8f8;
    margin: 50px auto;
    padding: 2rem;
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    grid-gap: 1rem;

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
