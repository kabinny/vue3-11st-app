<template>
  <h1>Hello {{ msg }}</h1>
</template>

<script>
export default {
  data() {
    return {
      msg: 'Vue!'
    }
  }
}
</script>

<style lang="scss" scoped>
h1 {
  color: salmon;
}
</style>