<template>
  <nav :class="{ show: isShowRNB }"></nav>
  <div
    v-if="isShowRNB"
    class="nav-bg"
    @click="offNav('RNB')"></div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState('navigation', [
      'isShowRNB'
    ])
  },
  methods: {
    ...mapActions('navigation', [
      'offNav'
    ])
  }
}
</script>

<style scoped lang="scss">
  nav {
    width: 300px;
    height: 100%;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    z-index: 99;
    background-color: #E5707E;
    transition: transform .4s;
    transform: translateX(300px);
    &.show {
      transform: translateX(0);
    }
  }
  .nav-bg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(#000, .2);
    z-index: 98;
  }
</style>