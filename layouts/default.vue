<template>
  <div class="app">
    <div class="layout">
      <myHeader />
      <mySideNav />
      <div class="page-container">
        <div class="main-content">
          <pageHeader />
          <Nuxt />

        </div>
        <myFooter />
      </div>
    </div>
  </div>

</template>

<script>
import myHeader from '../components/dash/iHeader'
import myFooter from '../components/dash/iFooter'
import mySideNav from '../components/dash/iSideNav'
import pageHeader from '../components/dash/pageHeader'
import PageHeader from '~/components/dash/pageHeader.vue'
export default {
  data () {
    return {

    }
  },
  watch: {

  },
  components: {
    myHeader, myFooter, mySideNav, pageHeader
  },
  middleware: [
    'auth', 'getRouter'
  ],
  methods: {

  }
}
</script>