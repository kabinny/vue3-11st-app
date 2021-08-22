<template>
  <LNB />
  <RNB />
  <GlobalBanner />
  <Header />
  <Billboard />
</template>

<script>
import LNB from '~/components/LNB'
import RNB from '~/components/RNB'
import GlobalBanner from '~/components/GlobalBanner'
import Header from '~/components/Header'
import Billboard from '~/components/Billboard'

export default {
  components: {
    LNB,
    RNB,
    GlobalBanner,
    Header,
    Billboard
  }
}
</script>

<style lang="scss">
  @import "./scss/main";
</style>