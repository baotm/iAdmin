<template>
  <div class="app">
    <b-overlay
      :show="show"
      no-wrap
    >
    </b-overlay>
    <div
      class="container-fluid p-h-0 p-v-20 bg full-height d-flex"
      style="background-image: url('assets/images/others/login-3.png')"
    >
      <div class="d-flex flex-column justify-content-between w-100">
        <div class="container d-flex h-100">
          <div class="row align-items-center w-100">
            <div class="col-md-7 col-lg-5 m-h-auto">
              <div class="card shadow-lg">
                <div class="card-body">
                  <div class="d-flex align-items-center justify-content-between m-b-30">
                    <img
                      class="img-fluid"
                      alt=""
                      src="assets/images/logo/logo.png"
                    >
                    <h2 class="m-b-0">Sign In</h2>
                  </div>
                  <form>
                    <div class="form-group">
                      <label
                        class="font-weight-semibold"
                        for="userName"
                      >Username:</label>
                      <div class="input-affix">
                        <i class="prefix-icon anticon anticon-user"></i>
                        <input
                          type="text"
                          class="form-control"
                          id="userName"
                          placeholder="Username"
                          v-model="username"
                        >
                      </div>
                    </div>
                    <div class="form-group">
                      <label
                        class="font-weight-semibold"
                        for="password"
                      >Password:</label>

                      <div class="input-affix m-b-10">
                        <i class="prefix-icon anticon anticon-lock"></i>
                        <input
                          type="password"
                          class="form-control"
                          id="password"
                          placeholder="Password"
                          v-model="password"
                        >
                      </div>
                    </div>
                    <div class="form-group">
                      <div class="d-flex align-items-center justify-content-between">
                        <span class="font-size-13 text-muted">
                          Don't have an account?
                          <a
                            class="small"
                            href=""
                          > Signup</a>
                        </span>
                        <input
                          type="button"
                          class="btn btn-primary"
                          value="Đăng Nhập"
                          @click="checkLogin"
                        />

                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="d-none d-md-flex p-h-40 justify-content-between">
          <span class="">© 2020❤️Nacy</span>
          <ul class="list-inline">
            <li class="list-inline-item">
              <a
                class="text-dark text-link"
                href=""
              >Legal</a>
            </li>
            <li class="list-inline-item">
              <a
                class="text-dark text-link"
                href=""
              >Privacy</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import cookies from 'cookies'

export default {
  layout: 'login',

  data () {
    return {
      username: 'bao',
      password: '123',
      show: false
    }
  },
  beforeMount () {

  },
  created () {
    if (this.$cookies.get('login')) {
      this.$router.push('/')
    }


  },
  methods: {

    async checkLogin () {

      this.show = true;
      if (this.username.length == 0 || this.username.length == 0) {
        this.$bvToast.toast(`Vui lòng không để trống tên đăng nhập và tài khoản`, {
          title: `Có Lỗi Xảy Ra`,
          toaster: 'b-toaster-top-center',
          solid: true,
          variant: 'danger',
          autoHideDelay: 1500,
        })
        this.show = false;
        return;
      }

      //check listlogin

      let info = await this.$strapi.$accounts.find({
        username: this.username,
        password: this.password
      })
      if (info.length > 0) {
        //login to strapi
        //login true
        //let my ip
        //check is login



        //  await this.$strapi.$nhatkitruycaps.create(d)
        //set cookies here
        let optionCookies = {
          path: '/',
          expires: 0
        }
        this.$cookies.set('login', true, optionCookies)
        this.$cookies.set('info', info[0], optionCookies)

        //set user online

        let acc = {
          "name": info[0].RealName,
          "role": info[0].Role,
          "avatar": info[0].Avatar.url,
          "email": info[0].Email,
          "phone": info[0].Phone,
          "account_id": info[0]._id
        }

        //  let loginSession = await this.$strapi.$listuseronlines.create(acc)
        let [nktc, LoginSession] = await Promise.all([
          this.$strapi.$nhatkitruycaps.create(d),
          this.$strapi.$listuseronlines.create(acc)
        ])
        this.$cookies.set('loginSession', LoginSession._id, optionCookies)
        location.replace('/')
      } else {
        //login false
        this.show = false;
        this.username = '';
        this.$bvToast.toast(`Vui lòng kiểm tra tên đăng nhập và tài khoản`, {
          title: `Có Lỗi Xảy Ra`,
          toaster: 'b-toaster-top-center',
          solid: true,
          variant: 'danger',
          autoHideDelay: 1500,
        })
      }
    }
  }
}
</script>

<style>
</style>