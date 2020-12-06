<template>
  <div class="header">
    <div class="logo logo-dark">
      <nuxt-link to="/">
        <img
          src="~assets/images/logo/logo.png"
          alt="Logo"
        >
        <img
          class="logo-fold"
          src="~assets/images/logo/logo-fold.png"
          alt="Logo"
        >
      </nuxt-link>

    </div>
    <div class="logo logo-white">
      <a href="/">
        <img
          src="~assets/images/logo/logo-white.png"
          alt="Logo"
        >
        <img
          class="logo-fold"
          src="~assets/images/logo/logo-fold-white.png"
          alt="Logo"
        >
      </a>
    </div>
    <div class="nav-wrap">
      <ul class="nav-left">
        <li
          class="desktop-toggle"
          @click="onClickMenuDesk"
        >
          <a href="javascript:void(0);">
            <i class="anticon"></i>
          </a>
        </li>
        <li
          class="mobile-toggle"
          @click="onClickMenuMobi"
        >
          <a href="javascript:void(0);">
            <i class="anticon"></i>
          </a>
        </li>
        <li>
          <a
            href="javascript:void(0);"
            @click="goBack"
            title="Lùi trang trước"
          ><i class="anticon anticon-left"></i>
          </a>
        </li>
      </ul>
      <ul class="nav-right">
        <li class="dropdown dropdown-animated scale-left">
          <a
            href="javascript:void(0);"
            data-toggle="dropdown"
          >
            <div class="avatar avatar-cyan avatar-badge avatar-square">
              <i class="anticon anticon-bell notification-badge"></i>
              <span class="badge badge-indicator badge-danger">{{noti.length}}</span>
            </div>

          </a>
          <div class="dropdown-menu pop-notification">
            <div class="p-v-15 p-h-25 border-bottom d-flex justify-content-between align-items-center">
              <p class="text-dark font-weight-semibold m-b-0">
                <i class="anticon anticon-bell"></i>
                <span class="m-l-10">Thông Báo</span>
              </p>
              <nuxt-link
                to="/thongbao/"
                class="btn-sm btn-default btn"
              >

                <small>View All</small>

              </nuxt-link>

            </div>
            <div class="relative">
              <div
                class="overflow-y-auto relative scrollable "
                style="max-height: 400px"
              >
                <nuxt-link
                  to="/thongbao/moi"
                  class="dropdown-item d-block p-15 border-bottom"
                >
                  <div class="d-flex align-items-center">
                    <div class="avatar avatar-cyan avatar-icon avatar-badge avatar-square ">
                      <i class="anticon anticon-mail"></i>
                      <span class="badge badge-indicator badge-danger">{{getCountHopDongMoi}}</span>
                    </div>

                    <div class="m-l-15">
                      <p class="m-b-0 text-dark">Hợp Đồng Mới</p>

                    </div>
                  </div>
                </nuxt-link>
                <nuxt-link
                  to="/thongbao/donglai"
                  class="dropdown-item d-block p-15 border-bottom"
                >
                  <div class="d-flex align-items-center">
                    <div class="avatar avatar-cyan avatar-icon avatar-badge avatar-square ">

                      <i class="anticon anticon-money-collect"></i>
                      <span class="badge badge-indicator badge-danger">{{getCountDongLai}}</span>
                    </div>

                    <div class="m-l-15">
                      <p class="m-b-0 text-dark">Đóng Lãi</p>

                    </div>
                  </div>
                </nuxt-link>
                <nuxt-link
                  to="/thongbao/chuoc"
                  class="dropdown-item d-block p-15 border-bottom"
                >
                  <div class="d-flex align-items-center">
                    <div class="avatar avatar-cyan avatar-icon avatar-badge avatar-square ">
                      <i class="anticon anticon-api"></i>
                      <span class="badge badge-indicator badge-danger">{{getCountChuoc}}</span>
                    </div>

                    <div class="m-l-15">
                      <p class="m-b-0 text-dark">Chuộc</p>

                    </div>
                  </div>
                </nuxt-link>
                <nuxt-link
                  to="/thongbao/sua"
                  class="dropdown-item d-block p-15 border-bottom"
                >
                  <div class="d-flex align-items-center">
                    <div class="avatar avatar-cyan avatar-icon avatar-badge avatar-square ">

                      <i class="anticon anticon-form"></i>
                      <span class="badge badge-indicator badge-danger">{{getCountSuaHopDong}}</span>
                    </div>

                    <div class="m-l-15">
                      <p class="m-b-0 text-dark">Sửa Hợp Đồng</p>

                    </div>
                  </div>
                </nuxt-link>
                <nuxt-link
                  to="/thongbao/xoa"
                  class="dropdown-item d-block p-15 border-bottom"
                >
                  <div class="d-flex align-items-center">
                    <div class="avatar avatar-cyan avatar-icon avatar-badge avatar-square ">

                      <i class="anticon anticon-delete"></i>
                      <span class="badge badge-indicator badge-danger">{{getCountXoaHopDong}}</span>
                    </div>

                    <div class="m-l-15">
                      <p class="m-b-0 text-dark">Xoá Hợp Đồng</p>

                    </div>
                  </div>
                </nuxt-link>
              </div>
            </div>
          </div>
        </li>
        <li class="dropdown dropdown-animated scale-left">
          <div
            class="pointer"
            data-toggle="dropdown"
          >
            <div class="avatar avatar-image  m-h-10 m-r-15">
              <img
                :src="info.Avatar.formats.thumbnail.url"
                alt=""
              >
            </div>
          </div>
          <div class="p-b-15 p-t-20 dropdown-menu pop-profile">
            <div class="p-h-20 p-b-15 m-b-10 border-bottom">
              <div class="d-flex m-r-50">
                <div class="avatar avatar-lg avatar-image">
                  <img
                    :src="info.Avatar.formats.thumbnail.url"
                    alt=""
                  >
                </div>
                <div class="m-l-10">
                  <p class="m-b-0 text-dark font-weight-semibold">{{info.RealName}}</p>
                  <p class="m-b-0 opacity-07">{{info.Role}}</p>
                </div>
              </div>
            </div>
            <nuxt-link
              class="dropdown-item d-block p-h-15 p-v-10"
              :to="/account/ + info._id"
            >
              <div class="d-flex align-items-center justify-content-between">
                <div>
                  <i class="anticon opacity-04 font-size-16 anticon-user"></i>
                  <span class="m-l-10">Edit Profile</span>
                </div>
                <i class="anticon font-size-10 anticon-right"></i>
              </div>
            </nuxt-link>

            <a
              href="#"
              @click="logout"
              class="dropdown-item d-block p-h-15 p-v-10"
            >
              <div class="d-flex align-items-center justify-content-between">
                <div>
                  <i class="anticon opacity-04 font-size-16 anticon-logout"></i>
                  <span class="m-l-10">Logout</span>
                </div>
                <i class="anticon font-size-10 anticon-right"></i>
              </div>
            </a>
          </div>
        </li>

        <li>
          <a href="/">
            <i class="anticon anticon-undo"></i>
          </a>
        </li>
      </ul>
    </div>
    <b-overlay
      :show="show"
      no-wrap
    >
    </b-overlay>
  </div>
</template>

<script>
export default {
  data () {
    return {
      info: {},
      show: false,
      fullSreen: false,
      clogout: false,
      noti: [],
    }
  },
  computed: {
    getCountChuoc () {
      let count = 0;

      this.noti.map(item => {
        if (item.ten === "HOPDONGKETHUC") {
          count += 1;
        }
      })
      return count;
    },
    getCountDongLai () {
      let count = 0;

      this.noti.map(item => {
        if (item.ten === "HOPDONGDONGLAI") {
          count += 1;
        }
      })
      return count;
    },
    getCountHopDongMoi () {
      let count = 0;

      this.noti.map(item => {
        if (item.ten === "HOPDONGMOI") {
          count += 1;
        }
      })
      return count;
    },
    getCountXoaHopDong () {
      let count = 0;

      this.noti.map(item => {
        if (item.ten === "HOPDONGXOA") {
          count += 1;
        }
      })
      return count;
    },
    getCountSuaHopDong () {
      let count = 0;

      this.noti.map(item => {
        if (item.ten === "HOPDONGTHAYDOI") {
          count += 1;
        }
      })
      return count;
    }
  },
  async fetch () {
    this.noti = await this.$strapi.$notifications.find({ see: false });
  },
  beforeMount () {

  },
  created () {
    this.info = this.$cookies.get('info');

  },
  methods: {
    goBack () {
      this.$router.go(-1)
    },
    async logout () {

      this.show = true;
      this.$cookies.remove('info');
      this.$cookies.remove('login');
      //logout strapi 
      let uri = 'https://api.ipify.org'
      let myip = await fetch(uri);
      let ip = await myip.text()

      let d = {
        type: 'DANGXUAT',
        ip: ip,
        accounts: this.info._id
      }
      //  await this.$strapi.$nhatkitruycaps.create(d)
      let loginSession = this.$cookies.get('loginSession')
      //    await this.$strapi.$listuseronlines.delete(loginSession);
      this.show = false;
      await Promise.all([
        await this.$strapi.$nhatkitruycaps.create(d),
        await this.$strapi.$listuseronlines.delete(loginSession)
      ])
      this.logout = true;
      location.replace('/')
    },
    onClickMenuDesk () {
      const isFolded = 'is-folded';
      const appLayout = $('.app');
      const isExpand = 'is-expand';
      appLayout.toggleClass(isFolded)
    },
    onClickMenuMobi () {
      const isFolded = 'is-folded';
      const appLayout = $('.app');
      const isExpand = 'is-expand';
      appLayout.toggleClass(isExpand)
    }
  }
}
</script>

<style>
</style>