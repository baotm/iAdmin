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
          <a href="#">
            <i class="anticon"></i>
          </a>
        </li>
        <li
          class="mobile-toggle"
          @click="onClickMenuMobi"
        >
          <a href="#">
            <i class="anticon"></i>
          </a>
        </li>
        <li>
          <a
            href="#"
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
            <i class="anticon anticon-bell notification-badge">

            </i>
          </a>
          <div class="dropdown-menu pop-notification">
            <div class="p-v-15 p-h-25 border-bottom d-flex justify-content-between align-items-center">
              <p class="text-dark font-weight-semibold m-b-0">
                <i class="anticon anticon-bell"></i>

                <span class="m-l-10">Thông Báo</span>
              </p>
              <a
                class="btn-sm btn-default btn"
                href="javascript:void(0);"
              >
                <small>View All</small>
              </a>
            </div>
            <div class="relative">
              <div
                class="overflow-y-auto relative scrollable "
                style="max-height: 400px"
              >
                <nuxt-link
                  v-show="getCountHopDongDangCho>0"
                  to="/thongbao/moi"
                  class="dropdown-item d-block p-15 border-bottom"
                >
                  <div class="d-flex align-items-center">
                    <div class="avatar avatar-cyan avatar-icon avatar-badge avatar-square ">
                      <i class="anticon anticon-mail"></i>
                      <span class="badge badge-indicator badge-danger">{{getCountHopDongDangCho}}</span>
                    </div>

                    <div class="m-l-15">
                      <p class="m-b-0 text-dark">Hợp Đồng Đang Chờ</p>

                    </div>
                  </div>
                </nuxt-link>
                <nuxt-link
                  v-if="getCountHopDongMoi>0"
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
                  v-if="getCountDongLai>0"
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
                  v-if="getCountChuoc>0"
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
                  v-if="getCountSuaHopDong>0"
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
                  v-if="getCountXoaHopDong>0"
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
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAADI2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDAgNzkuMTYwNDUxLCAyMDE3LzA1LzA2LTAxOjA4OjIxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTZDMDNCNzkyOTE2MTFFOEIwMENCQ0Y4QjU5NTgxNzkiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTZDMDNCN0EyOTE2MTFFOEIwMENCQ0Y4QjU5NTgxNzkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5NkMwM0I3NzI5MTYxMUU4QjAwQ0JDRjhCNTk1ODE3OSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5NkMwM0I3ODI5MTYxMUU4QjAwQ0JDRjhCNTk1ODE3OSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8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"
                alt=""
              >
            </div>
          </div>
          <div class="p-b-15 p-t-20 dropdown-menu pop-profile">
            <div class="p-h-20 p-b-15 m-b-10 border-bottom">
              <div class="d-flex m-r-50">
                <div class="avatar avatar-lg avatar-magenta ">
                  {{info.username[0].toUpperCase()}}
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
      hopdongdangcho: 0,
      info: {},
      show: false,
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
    },
    getCountHopDongDangCho () {
      return this.hopdongdangcho
    }
  },
  async fetch () {
    this.noti = await this.$strapi.$notifications.find({ see: false });
    this.hopdongdangcho = await this.$strapi.$hinhanhs.count({ tinhtrang: false })

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
      this.$dialog.alert({
        title: 'Thông Báo',
        body: 'Bạn muốn đăng xuất khỏi phiên làm việc ?'
      }, {
        loader: true
      }).then(async (dialog) => {
        this.$cookies.remove('info');
        this.$cookies.remove('login');
        let d = {
          type: 'DANGXUAT',
          accounts: this.info._id
        }
        let loginSession = this.$cookies.get('loginSession')
        await this.$strapi.$nhatkitruycaps.create(d)
        window.location.replace('/')
      });

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