<template>
  <div class="side-nav">
    <div
      class="side-nav-inner"
      id="nav_bar"
    >
      <ul class="side-nav-menu scrollable">
        <li
          class="nav-item dropdown"
          id="menu_home"
        >
          <nuxt-link to="/">
            <span class="icon-holder">
              <i class="anticon anticon-dashboard"></i>
            </span>
            <span class="title">Home</span>
          </nuxt-link>
        </li>
        <li
          class="nav-item dropdown"
          id="menu_hopdong"
        >
          <a
            class="dropdown-toggle"
            href="javascript:void(0);"
          >
            <span class="icon-holder">
              <i class="anticon anticon-setting"></i>
            </span>
            <span class="title">Hợp Đồng</span>
            <span class="arrow">
              <i class="arrow-icon"></i>
            </span>
          </a>
          <ul class="dropdown-menu">
            <li>

              <nuxt-link to="/hopdong">Hợp Đồng</nuxt-link>

            </li>
            <li>

              <nuxt-link to="/hopdong/new">Thêm Hợp Đồng</nuxt-link>

            </li>

          </ul>
        </li>
        <li
          class="nav-item dropdown"
          id="menu_hinhanh"
        >
          <a
            class="dropdown-toggle"
            href="javascript:void(0);"
          >
            <span class="icon-holder">
              <i class="anticon anticon-picture"></i>
            </span>
            <span class="title">Hình Ảnh</span>
            <span class="arrow">
              <i class="arrow-icon"></i>
            </span>
          </a>
          <ul class="dropdown-menu">
            <li>

              <nuxt-link to="/hinhanh">Tất cả hình ảnh</nuxt-link>

            </li>
            <li>

              <nuxt-link to="/hinhanh/anhdangcho">Ảnh đang chờ
                <sup class="badge badge-danger">{{count_anhdangcho}}</sup>
              </nuxt-link>

            </li>

            <li>

              <nuxt-link to="/hinhanh/anhchuaduyet">Ảnh Cần Duyệt
                <sup class="badge badge-danger">{{count_anhcanduyet}}</sup>
              </nuxt-link>

            </li>

          </ul>
        </li>
        <li
          class="nav-item dropdown"
          id="menu_cauhinh"
        >
          <a
            class="dropdown-toggle"
            href="javascript:void(0);"
          >
            <span class="icon-holder">
              <i class="anticon anticon-tool"></i>
            </span>
            <span class="title">Cấu Hình</span>
            <span class="arrow">
              <i class="arrow-icon"></i>
            </span>
          </a>
          <ul class="dropdown-menu">
            <li>
              <nuxt-link to="/cauhinh">Cấu Hình</nuxt-link>
            </li>

          </ul>
        </li>
        <li
          class="nav-item dropdown"
          id="menu_review"
        >
          <a
            class="dropdown-toggle"
            href="javascript:void(0);"
          >
            <span class="icon-holder"><i class="anticon anticon-book"></i>
            </span>
            <span class="title">Review</span>
            <span class="arrow">
              <i class="arrow-icon"></i>
            </span>
          </a>
          <ul class="dropdown-menu">
            <li>
              <nuxt-link to="/review/">Danh Sách Review</nuxt-link>
            </li>

          </ul>
        </li>
        <li
          class="nav-item dropdown"
          id="menu_chungtu"
        >
          <a
            class="dropdown-toggle"
            href="javascript:void(0);"
          >
            <span class="icon-holder"><i class="anticon anticon-book"></i>
            </span>
            <span class="title">Chứng Từ</span>
            <span class="arrow">
              <i class="arrow-icon"></i>
            </span>
          </a>
          <ul class="dropdown-menu">
            <li>
              <nuxt-link to="/chungtu/">Danh Sách</nuxt-link>
            </li>

          </ul>
        </li>
        <li
          class="nav-item dropdown"
          id="menu_thongbao"
        >
          <a
            class="dropdown-toggle"
            href="javascript:void(0);"
          >
            <span class="icon-holder"><i class="anticon anticon-file-unknown"></i>
            </span>
            <span class="title">Thông báo</span>
            <span class="arrow">
              <i class="arrow-icon"></i>
            </span>
          </a>
          <ul class="dropdown-menu">
            <li>
              <nuxt-link to="/thongbao/new">Chưa Đọc</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/thongbao/dadoc">Đã đọc</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/thongbao/tatca">Tất cả</nuxt-link>
            </li>
          </ul>
        </li>
        <li
          class="nav-item dropdown"
          id="menu_taikhoan"
        >
          <a
            class="dropdown-toggle"
            href="javascript:void(0);"
          >
            <span class="icon-holder"><i class="anticon anticon-user"></i>
            </span>
            <span class="title">Tài Khoản</span>
            <span class="arrow">
              <i class="arrow-icon"></i>
            </span>
          </a>
          <ul class="dropdown-menu">
            <li>
              <nuxt-link to="/account">User</nuxt-link>
            </li>

            <li>
              <nuxt-link to="/account/new">Tạo User</nuxt-link>
            </li>
          </ul>
        </li>

        <li
          class="nav-item dropdown"
          id="menu_thanhly"
        >
          <a
            class="dropdown-toggle"
            href="javascript:void(0);"
          >
            <span class="icon-holder"><i class="anticon anticon-rest"></i>
            </span>
            <span class="title">Thanh Lý</span>
            <span class="arrow">
              <i class="arrow-icon"></i>
            </span>
          </a>
          <ul class="dropdown-menu">
            <li>

              <nuxt-link to="/nhatkitruycap/">Nhật Kí Truy Cập</nuxt-link>

            </li>
            <li>

              <nuxt-link to="/nhatkitruycap/online">User Online</nuxt-link>

            </li>
          </ul>
        </li>
        <li
          class="nav-item dropdown"
          id="menu_thongke"
        >
          <a
            class="dropdown-toggle"
            href="javascript:void(0);"
          >
            <span class="icon-holder"><i class="anticon anticon-fund"></i>
            </span>
            <span class="title">Thống Kê</span>
            <span class="arrow">
              <i class="arrow-icon"></i>
            </span>
          </a>
          <ul class="dropdown-menu">
            <li>

              <nuxt-link to="/nhatkitruycap/">Nhật Kí Truy Cập</nuxt-link>

            </li>
            <li>

              <nuxt-link to="/nhatkitruycap/online">User Online</nuxt-link>

            </li>
          </ul>

        </li>
        <li
          class="nav-item dropdown"
          id="menu_tem"
        >
          <a
            class="dropdown-toggle"
            href="javascript:void(0);"
          >
            <span class="icon-holder"><i class="anticon anticon-printer"></i>
            </span>
            <span class="title">Tem</span>
            <span class="arrow">
              <i class="arrow-icon"></i>
            </span>
          </a>
          <ul class="dropdown-menu">
            <li>

              <nuxt-link to="/tem/">In Tem</nuxt-link>

            </li>

          </ul>

        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      count_anhdangcho: 0,
      count_anhcanduyet: 0,
      view: {
        admin: [],
        sale: ['menu_home', 'menu_hopdong', 'menu_hinhanh', 'menu_review', 'menu_chungtu', 'menu_tem']
      },

    }
  },
  async mounted () {
    $('.side-nav .side-nav-menu li ul li').on('click', (e) => {
      const $this = $(e.currentTarget);
      $('.side-nav .side-nav-menu li ul li').removeClass('active')
      $this.addClass('active')
    })
    $('.side-nav .side-nav-menu li a').on('click', (e) => {

      const $this = $(e.currentTarget);

      if ($this.parent().hasClass("open")) {

        $this.parent().children('.dropdown-menu').slideUp(200, () => {
          $this.parent().removeClass("open");
        });

      } else {
        $this.parent().parent().children('li.open').children('.dropdown-menu').slideUp(200);
        $this.parent().parent().children('li.open').children('a').removeClass('open');
        $this.parent().parent().children('li.open').removeClass("open");
        $this.parent().children('.dropdown-menu').slideDown(200, () => {
          $this.parent().addClass("open");
        });
      }
    });
    this.count_anhcanduyet = await this.$strapi.$hopdongs.count({ reviewStatus: false });
    this.count_anhdangcho = await this.$strapi.$hinhanhs.count({ tinhtrang: false });
    //set permission
    let rolenow = (this.$cookies.get('info').Role).toLowerCase();

    if (rolenow != 'admin') {
      this.setViewPermission(this.view[rolenow])

    }

  },
  methods: {
    onClickMenu () {
      const isFolded = 'is-folded';
      const appLayout = $('.app');
      appLayout.toggleClass(isFolded)
    },
    setViewPermission (permission) {

      let listDiv = $(".nav-item").get();
      let fullListNav = []
      listDiv.forEach(i => {
        fullListNav.push($(i).attr('id'))
      })

      let listHide = fullListNav.filter(x => {
        if (permission.includes(x)) {
          return false
        } else {
          return true
        }
      }
      );
      listHide.forEach(e => {
        $("#" + e).hide()
      });
    }
  }
}
</script>

<style>
</style>