<template>
  <div v-if="dataReady">
    <div class="page-header no-gutters">
      <div class="row align-items-md-center">
        <div class="col-md-6">
          <div class="media m-v-10">
            <div class="avatar avatar-cyan avatar-icon avatar-square">
              <i class="anticon anticon-star"></i>
            </div>
            <div class="media-body m-l-15">
              <h6 class="mb-0">All Members ({{listAccount.length}})</h6>
              <span class="text-gray font-size-13">baophuong.xyz Team</span>
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
            v-for="item in listAccount"
            :key="item._id"
          >
            <div class="card">
              <div class="card-body">
                <div class="m-t-20 text-center">
                  <div
                    class="avatar avatar-image"
                    style="height: 100px; width: 100px;"
                  >
                    <img :src="item.Avatar.formats.thumbnail.url">
                  </div>
                  <h4 class="m-t-30">{{item.RealName}}<br /><span class="badge badge-info">{{item.Role}}</span></h4>
                  <p>{{item.Phone}}</p>
                </div>
                <div class="text-center m-t-15">
                  <button class="m-r-5 btn btn-icon btn-hover btn-rounded">
                    <i class="anticon anticon-mail"></i>
                  </button>

                </div>
                <div class="text-center m-t-30">

                  <nuxt-link
                    :to="{ path: '/account/'+item._id}"
                    class="btn btn-primary btn-tone"
                  >
                    <i class="anticon anticon-edit"></i>
                    <span class="m-l-5">Chi Tiết</span>
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  </div>
  <div v-else>
    <b-overlay :show="true">
      <template #overlay>
        <div class="text-center">
          <p>Đang Tải</p>
          <b-spinner
            variant="primary"
            label="Text Centered"
          ></b-spinner>
        </div>
      </template>

    </b-overlay>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dataReady: false,
      listAccount: [],
    }
  },
  async fetch () {
    try {
      this.listAccount = await this.$strapi.$accounts.find();
      console.log(this.listAccount)
      this.dataReady = true;
    } catch (e) {
      this.dataReady = false;
      this.$bvToast.toast(`Máy chủ gặp vấn đề, vui lòng thông báo admin hoặc chờ 1p rồi đăng nhập lại`, {
        title: `Có Lỗi Xảy Ra`,
        toaster: 'b-toaster-top-center',
        solid: true,
        variant: 'danger',
        autoHideDelay: 1500,
      })
    }
  }
}
</script>

<style>
</style>