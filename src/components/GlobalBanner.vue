<template>
  <div class="global-banner">
    <div class="ad"></div>
    <div class="wing"></div>
    <div class="wing"></div>
    <div
      class="to-top"
      @click="toTop"></div>
  </div>
</template>

<script>
import scrollTo from 'scroll-to'

export default {
  data() {
    return {
      banner: {}
    }
  },
  created() {
    this.init()
  },
  methods: {
    async init() {
      const { data } = await this.$fetch({
        method: 'GET',
        url: `https://trusting-williams-8cacfb.netlify.app/.netlify/functions/main?apiKey=${apiKey}&requestName=banner`
      })
      this.banner = data
      console.log(this.banner)
    },
    toTop() {
      scrollTo(0, 0, {
        duration: 800
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .global-banner {
    position: fixed;
    bottom: 30px;
    right: 30px;
    z-index: 97;
    .ad {
      width: 34px;
      height: 18px;
      margin: 0 auto 6px;
      cursor: pointer;
      background-image: url("https://trusting-williams-8cacfb.netlify.app/images/ad_2x.png");
      background-repeat: no-repeat;
      background-size: 63px;
    }
    .wing {

    }
    .to-top {
      width: 50px;
      height: 50px;
      margin: 0 auto;
      border-radius: 50%;
      cursor: pointer;
      background-color: #333;
      background-image: url("https://trusting-williams-8cacfb.netlify.app/images/to_top_2x.png");
      background-repeat: no-repeat;
      background-position: center;
      background-size: 50%;
      transition: background-color .2s;
      &:hover {
        background-color: #FE2431;
      }
    }
  }
</style>