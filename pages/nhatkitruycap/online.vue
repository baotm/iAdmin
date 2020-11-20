<template>
  <div>
    <div class="page-header no-gutters">
      <div class="row align-items-md-center">
        <div class="col-md-6">
          <div class="media m-v-10">
            <div class="avatar avatar-cyan avatar-icon avatar-square">
              <i class="anticon anticon-star"></i>
            </div>
            <div class="media-body m-l-15">
              <h6 class="mb-0">All Members Online ({{listUser.length}})</h6>
              <span class="text-gray font-size-13">Baophuong.xyz Team</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-11 mx-auto">
        <!-- Card View -->
        <div
          class="row"
          id="card-view"
        >
          <div
            class="col-md-3"
            v-for="user in listUser"
            :key="user.account_id"
          >
            <div class="card">
              <div class="card-body">
                <div class="m-t-20 text-center">
                  <div
                    class="avatar avatar-image"
                    style="height: 100px; width: 100px;"
                  >
                    <img
                      :src="user.avatar"
                      alt=""
                    >
                  </div>
                  <h4 class="m-t-30 text-capitalize">{{user.name}}</h4>
                  <p class="font-weight-bold badge badge-primary text-wrap">{{user.role}}</p>
                  <p>{{user.email}}</p>
                  <p>{{user.phone}}</p>
                </div>
                <div class="text-center m-t-15">
                  <button class="m-r-5 btn btn-icon btn-hover btn-rounded">
                    <i class="anticon anticon-facebook"></i>
                  </button>
                  <button class="m-r-5 btn btn-icon btn-hover btn-rounded">
                    <i class="anticon anticon-twitter"></i>
                  </button>
                  <button class="m-r-5 btn btn-icon btn-hover btn-rounded">
                    <i class="anticon anticon-instagram"></i>
                  </button>
                </div>
                <div class="text-center m-t-30">

                  <nuxt-link
                    :to="{ path: '/account/'+user.account_id}"
                    class="btn btn-primary btn-tone"
                  >
                    <i class="anticon anticon-mail"></i>
                    <span class="m-l-5">Contact</span>
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      listUser: []
    }
  },
  async fetch () {
    this.listUser = await this.$strapi.$listuseronlines.findOne('5fb78ee760333a35c00fd368')
    this.listUser = this.listUser.list;
  }
}
</script>

<style>
</style>