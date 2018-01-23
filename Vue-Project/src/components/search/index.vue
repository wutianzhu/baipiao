<template>
 <p>{{msg}}</p>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      msg: 'Welcome'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p{
  font-size: 30px;
  color: red;
}
</style>
