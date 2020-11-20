<template>
  <div class="page-header">
    <h2 class="header-title text-capitalize">{{$store.state.router.currentRouter[0]}}</h2>
    <p
      class="header-sub-title"
      style="float:right"
    >
      <span>
        <i class="anticon anticon-home"></i>
        <nuxt-link to="/">
          Home
        </nuxt-link>
      </span>
      <span>></span>

      <span
        v-for="(item,index) in $store.state.router.currentRouter"
        :key="index"
      >
        {{item}}
        <span v-if="index!=$store.state.router.currentRouter.length-1">></span>
      </span>
    </p>
  </div>
</template>

<script>
export default {

}
</script>

<style>
</style>