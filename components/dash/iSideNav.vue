<template>
  <div class="side-nav">
    <div class="side-nav-inner">
      <ul class="side-nav-menu scrollable">
        <li class="nav-item dropdown">
          <nuxt-link to="/">
            <span class="icon-holder">
              <i class="anticon anticon-dashboard"></i>
            </span>
            <span class="title">Home</span>
          </nuxt-link>
        </li>
        <li class="nav-item dropdown">
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
        <li class="nav-item dropdown">
          <a
            class="dropdown-toggle"
            href="javascript:void(0);"
          >
            <span class="icon-holder">
              <i class="anticon anticon-book"></i>
            </span>
            <span class="title">Cấu Hình</span>
            <span class="arrow">
              <i class="arrow-icon"></i>
            </span>
          </a>
          <ul class="dropdown-menu">
            <li>
              <nuxt-link to="#">Cấu Hình Tiệm</nuxt-link>
            </li>
            <li>
              <nuxt-link to="#">Cấu Hình Kho</nuxt-link>
            </li>
            <li>
              <nuxt-link to="#">Cấu Hình Tài Sản</nuxt-link>
            </li>
            <li>
              <nuxt-link to="#">Cấu Hình Truy Cập</nuxt-link>
            </li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a
            class="dropdown-toggle"
            href="javascript:void(0);"
          >
            <span class="icon-holder"><i class="anticon anticon-user"></i>
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
        <li class="nav-item dropdown">
          <a
            class="dropdown-toggle"
            href="javascript:void(0);"
          >
            <span class="icon-holder"><i class="anticon anticon-user"></i>
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
              <nuxt-link to="/thongbao/">Tất cả</nuxt-link>
            </li>
          </ul>
        </li>
        <li class="nav-item dropdown">
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
              <nuxt-link to="/nhatkitruycap/">Tài Khoản</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/nhatkitruycap/online">Tạo User</nuxt-link>
            </li>
          </ul>
        </li>

        <li class="nav-item dropdown">
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
        <li class="nav-item dropdown">
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

      </ul>
    </div>
  </div>
</template>

<script>
export default {
  created () {


  },
  mounted () {
    //   $('.scrollable').perfectScrollbar();
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
  },
  methods: {
    onClickMenu () {
      const isFolded = 'is-folded';
      const appLayout = $('.app');
      appLayout.toggleClass(isFolded)
    }
  }
}
</script>

<style>
</style>