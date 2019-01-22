<template>
  <div class="user-avatar">

  </div>
</template>

<script>
import 'animate.css'
import anime from 'animejs'
import faker from 'faker'

export default {
  name: 'user-avatar',
  props: {
    msg: String
  },

  data () {
    return {
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$avatar-size: 85px;

.user-avatar {
  display: block;
  position: fixed;
  width: 400px;
  height: 400px;
  background-color: #fff;
}
</style>
