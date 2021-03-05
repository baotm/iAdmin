<template>
  <div
    class="container"
    v-if="dataReady"
  >

    <div class="card">
      <div class="card-body">
        <div class="row align-items-center">
          <div class="col-md-7">
            <div class="d-md-flex align-items-center">
              <div class="text-center text-sm-left ">
                <div
                  class="avatar avatar-image"
                  style="width: 150px; height:150px"
                >
                  <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAADI2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDAgNzkuMTYwNDUxLCAyMDE3LzA1LzA2LTAxOjA4OjIxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTZDMDNCNzkyOTE2MTFFOEIwMENCQ0Y4QjU5NTgxNzkiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTZDMDNCN0EyOTE2MTFFOEIwMENCQ0Y4QjU5NTgxNzkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5NkMwM0I3NzI5MTYxMUU4QjAwQ0JDRjhCNTk1ODE3OSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5NkMwM0I3ODI5MTYxMUU4QjAwQ0JDRjhCNTk1ODE3OSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PsVnV4oAAAplSURBVHhe7Z0JV9s6EIXNDqEsgdLH//9zLQ8CIWFf33zCk+opgi4kkcbSPUe14wTJnns1Gm3u0mh889pUFIvl9lhRKKoACkcVQOGoAigcVQCFowqgcFQBFI4qgMJRBVA4qgAKRxVA4agCKBxVAIWjCqBwVAEUjiqAwlEFUDiqAApHFUDhqAIoHFUAhaMKoHBUARSOKoDCUQVQOKoACkcVQOGoAigcVQCFo0gBLC0tTdLy8nKzRGo/l4YitodPyH19be4fHprHx8fm+empeX5+bl7kmgphdWWlWVtbazY2N921V/mO1GV0WgCQ+CRE393eNreS7u7uJtffgxK+urrabH/50mxubDTrkkAXxdBJAUAwtftyOGzu7+/duZL+EfkKJZojv98QAezs7rpj10TQKQFAFgSNLi+b8Xg8ueYf/wiSF8YhT1Jva6vZ7febNfEOXRFCZwQAwQ/Svl+cn7s2ns/vkf4ReR/9DYlYYW9/v9ne3u6ECDohAKL466urZnhx4UgJyVeilERAG78sQR/dIK68vLy4eCH8+1AQfM9vaRL29vbaq3ZhXgAQhLuHfNelixBGWhGyCeZ6vZ5ry8PfAQzxKF7k9ubGBYwIgt+9lyf5HH375s6twrQAIPxKyL8Q8kOilCSuUVM3pf1elS6eXPwlYeRLLafnMJZ44kGalFBc5MFvtnd2mr7EBeRrEWYFABn3UktPTk5c7Y6RTzduX8inifgV6TGQJ39LUDkajSYka1kqgh3KOTj4qzJSw+xI4JPUynMJ+KLky3FfAjVXM+W7vyXGESxdyB2p5Udfv7pyXP5tfnx2XkjiD5oM/z6swKQAMDrk+/17oMQcHR25IO1viQ9BPsQPx8fHbqTQz5fy8RLng4G7H2swJwAMfiNBGl2+GPkH4ooJznDNswT502s4FE+A1wlFQHk0FYjTEswJAEOPpT12Na8VAGSQcNW9OfbPyZfu44GIgDmEUAQIk16EJZgSAEZmaJfkAyIYs8ftz7rmh/DL4twXAedjiQcswZwA6PMvh7VfjjtE++21eUMjf5oCBWWTGEPwRZE7TAmA/jjRv1i6vfIG2vzNzc2FGh7yv0iTE5ZJIHgnHmpRYvwszAgAgz5IVyt08VobF13rKO9LW66W7XuBKoA5gMgfqHEx/Nr6uuuiLVoAgIh/a2ur/fQG7o1A0EqX0IwAIPgp6PcDVvGk6npxT6we4ugLkHNWHFmAHQ+AAAKjYmgGZlK5WyiPlU+z9Dzn3sisYMcDSGJYNoSb4EkFESDeZ8oDyXVEkEqYfwI7HkAQBoB4ALqEKRGSzGcGiRCBBZgSQAw51jFEYIN+YwKI1rb2PBViROOZ8nf+bzAjAAzqj7wp3MBQQhCX+E2Ta5aIC4IJo1xhRgCvUttj3b3HhN0tPBD9/ZBof6g6d5gRAEaNzcXjAVINulB+bLMJ6wOYNbQAUzEAAgC+CNw2r0TNAHdxFxn2XRHyY81VjrDTBAjp4WpePWcKdtGjgZR9c3092VuoeJV4gIkpKzDlARBAWLMw/q24YTzBIgHxrEj2hec8k9zPVq83FRfkClMCwKTsyPGjblf7xNis2vVr4jzhRNcuS/MB6dT+lQV7o8/AlgDEwCz5wgv4NQxC2BnEkqxFiICgky1olKXlcT+csxR9EfcwK5gSAID8nhg59AK44uFwONnNMy+QNyuA9VyBAIj8mR72xZk7zAkA47LZA2OHXoAA7N+TE9c1nJcIzk5P3ZrEqbZfcHB4aIp8YE4ACjZ+YOxQBHiGs7OzyQ7hWcCJS8o5l3zDDSDuHqRMViVpN9USTAoAoxNps+cPwn0RUDNpo09+/GiupZsmbH1KCOTHG0bIj94GeYUCYEXSXr//v/uwAtObQyECl6y1MiTGkbO+7raIsW6A73+HJM2HpoRtX05IAj9/gPio9bpZxCI68X4AgjJ6ANTWUAR6ZAwBr8ERUbjrb1+6c/6ORNPxIG08O4NJ/K1+p+AaifL+OT6e6pVYQicEADXnFxduZC4kCyg5SibE4RHor3POoA612Z9X0N/G8iLh9gn6WJOo+VtEJwQAIIotY5eXl1HiQEiU/9n92vub9/6ehCdhD2IX0CkBUJvxAuwchqgYiZ8BXoItYbEeiFV0QgAQzwsgr6T2c4SoWZMPVFQ0HwxJ87oZPlsWgmkBQDw9APYL6m4cTTH8KVGxfDQPJzIpvy/egCaBe7EoBJMCgBgIYD8+XTStmR8R5n7DCb9rjzFEf//Bb0l0BWkWdJOIJZgTALXuXrpn/htCfIJ8ArQpgBhe7sg2MoaQ3W4ikuTlIL9hbR9/y1wCu3pYasZsH13CsJxYeYwG8sIo3iHI6iUrQrAlADHsaDh0Lt8nRIHRSRAL0WzehHw+629/hxj/tyTG/gkuOaqo3isbb0APAbH9TlmpYUYAGHxwduYGZ0IC1Pjyj5sphPjJYM8MSHBlSWKcACEgQPJ97z4QXF9EQJCIYHKGCQGwz25wehp9BawanWlY3G84SzhrUDb5E39ciRiEYdcs+eB7iGegaFtEkLOBsxcA7en379+n3tqpxGskPs93A8XAfbANfCCxCEe/mQF6f8xD8CKJXD1B1gLAgG5+X8ifBGwCNS7j+t94VWt7LQW4L7xBbASSe4J4JotoDlLd40fIdjoYQw4Gg6kVPmpU5t+/Hh1Nva1r0XD3srs7GRr274X7RiBD8RL0JvznyAVZCgBDsbyLeXjO1XAYl4Rb5dWsuYB7Yi0gL6jkXkMR8OlUAlidaMoJ2QkAgzGqp0uuQ/IJ9HJsU7kfZghx96EIAOMEvNFcvmyv5IHsBEAtuZDajxFD8nG1vAwyNG4u4L5YFk4XUD8DfRbWLLB6Oew1pER2AiCY8t8EouTzuneWgOVKvgJPQJd0X5opzn0RuIBxNGqepNeQC7IRAAZi6DW2qIOhW9r93MlXcJ8MRsWWiCPuMV7Ae76UyMoDEPj55GM8alH/8NDcmjt339IU+ANT+mzEN7m8RSwLAWAUhngZalVgNBK1aNFvAZ0VEO1u+/7iUAQ0Bf7YRipkIQCMQ63giHEUGBDXjwEtguehe6jzEgoVPItXUiMLARD5xzZcEPix194yeI7dNnglKRB17N0Ci0ZyAeAGw+ldNdZe+0p2y+D+acLW137uGtJnZc+BPnMqJBcAQ73hMClGY5mV1c0WIXg2pqkZDPKB5wv/74NFIwsBkBRa4xGA7br/EzwTk0GihMnzIQqSrm9IhaQC4MFZ3qVGUdB14n/lCK9bBk0dMY08VHvl7fnxfqFnWCSSC+AWFyhGgWwCIxKuHxF0DfQGdBcSiWdmkctTQgEkXQ+AAFjmJSdvK3AFGAX3n+v8+WcA2fofXil4RnoJqQSffEGIM4ZnEAcxStfIV0w9b+JnNbEmsGJ+SN4LqEiLKoDCUQVQOKoACkcVQOGoAigcVQCFowqgcFQBFI4qgMJRBVA4qgAKRxVA4agCKBxVAIWjCqBwVAEUjiqAwlEFUDiqAApHFUDhqAIoHFUAhaMKoHBUARSOKoDCUQVQOKoACkcVQNFomv8AXT+Jlf5hzH8AAAAASUVORK5CYII=' />
                </div>
              </div>
              <div class="text-center text-sm-left m-v-15 p-l-30">
                <h2 class="m-b-5 text-capitalize">{{info.RealName}}</h2>
                <p class="text-opacity font-size-13">@baophuong.xyz</p>
                <p class="text-dark m-b-20">Role {{info.Role}}</p>
                <nuxt-link
                  :to="{ path: '/account/edit/'+info._id}"
                  class="btn btn-primary btn-tone"
                >
                  <i class="anticon anticon-edit"></i>
                  <span class="m-l-5">Sửa</span>
                </nuxt-link>
                <b-button
                  class="btn btn-danger btn-tone"
                  @click="deleteUser"
                >
                  <i class="anticon anticon-delete"></i>
                  <span class="m-l-5">Xoá</span>
                </b-button>
              </div>
            </div>
          </div>
          <div class="col-md-5">
            <div class="row">
              <div class="d-md-block d-none border-left col-1"></div>
              <div class="col">
                <ul class="list-unstyled m-t-10">
                  <li class="row">
                    <p class="col-sm-4 col-4 font-weight-semibold text-dark m-b-5">
                      <i class="m-r-10 text-primary anticon anticon-mail"></i>
                      <span>Email: </span>
                    </p>
                    <p class="col font-weight-semibold"> {{info.Email}}</p>
                  </li>
                  <li class="row">
                    <p class="col-sm-4 col-4 font-weight-semibold text-dark m-b-5">
                      <i class="m-r-10 text-primary anticon anticon-phone"></i>
                      <span>Phone: </span>
                    </p>
                    <p class="col font-weight-semibold"> +{{info.Phone}}</p>
                  </li>
                  <li class="row">
                    <p class="col-sm-4 col-5 font-weight-semibold text-dark m-b-5">
                      <i class="m-r-10 text-primary anticon anticon-compass"></i>
                      <span>Location: </span>
                    </p>
                    <p class="col font-weight-semibold text-capitalize"> {{info.Address}}</p>
                  </li>
                </ul>
                <div class="d-flex font-size-22 m-t-15">
                  <a
                    href=""
                    class="text-gray p-r-20"
                  >
                    <i class="anticon anticon-facebook"></i>
                  </a>
                  <a
                    href=""
                    class="text-gray p-r-20"
                  >
                    <i class="anticon anticon-twitter"></i>
                  </a>
                  <a
                    href=""
                    class="text-gray p-r-20"
                  >
                    <i class="anticon anticon-behance"></i>
                  </a>
                  <a
                    href=""
                    class="text-gray p-r-20"
                  >

                    <i class="anticon anticon-dribbble"></i>
                  </a>
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
      info: {},
      dataReady: false
    }
  },
  async fetch () {
    try {
      let id = this.$route.params.id
      this.info = await this.$strapi.$accounts.findOne(id);
      this.dataReady = true
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

  },
  methods: {
    async deleteUser () {
      try {
        this.dataReady = false
        await this.$strapi.$accounts.delete(id);
        //xoa media

        window.location.replace('/account')
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
}
</script>

<style>
</style>