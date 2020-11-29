<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">
            <h4 class="card-title">Mã Hợp Đồng : <code>{{hopdong.maso}}</code> <span
                class="badge badge-pill badge-blue"
                style="float:right"
              >{{hopdong.tinhtrang}}</span></h4>
          </div>
          <div class="card-body">
            <div class="row">

              <div class="col-md-6">
                <div class="row">
                  <div class="col">
                    <ul class="list-unstyled">
                      <li class="row">
                        <p class="col-sm-5 col-5 font-weight-semibold text-dark m-b-5">

                          <i class="m-r-10 text-primary anticon anticon-user"></i>
                          <span>Tên Khách: </span>
                        </p>
                        <p class="col font-weight-semibold">{{hopdong.tenkhach}}</p>
                      </li>
                      <li class="row">
                        <p class="col-sm-5 col-5 font-weight-semibold text-dark m-b-5">

                          <i class="m-r-10 text-primary anticon anticon-dollar"></i>
                          <span>Số Tiền: </span>
                        </p>
                        <p class="col font-weight-semibold"><code>{{sotien}}</code></p>
                      </li>
                      <li class="row">
                        <p class="col-sm-5 col-5 font-weight-semibold text-dark m-b-5">
                          <i class="m-r-10 text-primary anticon anticon-database"></i>
                          <span>Loại tài sản: </span>
                        </p>
                        <p class="col font-weight-semibold">{{hopdong.loaitaisan}}</p>
                      </li>
                      <li class="row">
                        <p class="col-sm-5 col-5 font-weight-semibold text-dark m-b-5">
                          <i class="m-r-10 text-primary anticon anticon-shop"></i>
                          <span>Kho: </span>
                        </p>
                        <p class="col font-weight-semibold">{{hopdong.kholuu}}</p>
                      </li>
                      <li class="row">
                        <p class="col-sm-5 col-5 font-weight-semibold text-dark m-b-5">
                          <i class="m-r-10 text-primary anticon anticon-phone"></i>
                          <span>Phone: </span>
                        </p>
                        <p class="col font-weight-semibold">{{hopdong.sodienthoai}}</p>
                      </li>
                      <li class="row">
                        <p class="col-sm-5 col-5 font-weight-semibold text-dark m-b-5">
                          <i class="m-r-10 text-primary anticon anticon-profile"></i>
                          <span>Món: </span>
                        </p>
                        <p class="col font-weight-semibold">{{hopdong.thongtinmondo?hopdong.thongtinmondo:"Không"}}</p>
                      </li>
                      <li class="row">
                        <p class="col-sm-5 col-5 font-weight-semibold text-dark m-b-5">
                          <i class="m-r-10 text-primary anticon anticon-paper-clip"></i>
                          <span>GhiChú: </span>
                        </p>
                        <p class="col font-weight-semibold">{{hopdong.ghichuhopdong?hopdong.ghichumondo:"Không"}}</p>
                      </li>

                    </ul>

                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="row">
                  <div class="col">
                    <ul class="list-unstyled">
                      <li class="row">
                        <p class="col-sm-5 col-5 font-weight-semibold text-dark m-b-5">
                          <i class="m-r-10 text-primary anticon anticon-plus-circle"></i>
                          <span>Ngày Tạo: </span>
                        </p>
                        <p class="col font-weight-semibold"> {{ngaythe}}</p>
                      </li>
                      <li class="row">
                        <p class="col-sm-5 col-5 font-weight-semibold text-dark m-b-5">
                          <i class="m-r-10 text-primary anticon anticon-minus-circle"></i>
                          <span>End: </span>
                        </p>
                        <p class="col font-weight-semibold">{{ngaylay}}</p>
                      </li>
                      <li class="row">
                        <p class="col-sm-5 col-5 font-weight-semibold text-dark m-b-5">
                          <i class="m-r-10 text-primary anticon anticon-clock-circle"></i>
                          <span>Thời gian: </span>
                        </p>
                        <p class="col font-weight-semibold"> <code>{{thoigiancam}}</code> ngày</p>
                      </li>
                      <li class="row">
                        <p class="col-sm-5 col-5 font-weight-semibold text-dark m-b-5">
                          <i class="m-r-10 text-primary anticon anticon-mail"></i>
                          <span>Lãi xuất: </span>
                        </p>
                        <p class="col font-weight-semibold"> <code>{{hopdong.laixuat/10}}</code> % </p>
                      </li>
                      <li class="row">
                        <p class="col-sm-5 col-5 font-weight-semibold text-dark m-b-5">
                          <i class="m-r-10 text-primary anticon anticon-compass"></i>
                          <span>Tiền Lãi : </span>
                        </p>
                        <p class="col font-weight-semibold"><code>{{laidenhomnay}}</code> <span class="badge badge-pill badge-info">vnd</span> </p>
                      </li>
                      <li class="row">
                        <p class="col-sm-5 col-5 font-weight-semibold text-dark m-b-5">
                          <i class="m-r-10 text-primary anticon anticon-compass"></i>
                          <span>Nợ : </span>
                        </p>
                        <p class="col font-weight-semibold"><code>{{hopdong.tienno}}</code> Tháng</p>
                      </li>
                      <li class="row">
                        <p class="col-sm-5 col-5 font-weight-semibold text-dark m-b-5">
                          <i class="m-r-10 text-primary anticon anticon-compass"></i>
                          <span>Hạn : </span>
                        </p>
                        <p class="col font-weight-semibold"><code>{{hopdong.thoihancam}}</code> Tháng</p>
                      </li>
                    </ul>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card">
          <div class="card-header">
            <h4 class="card-title">Tracking</h4>
          </div>
          <div class="card-body">
            <ul class="timeline timeline-sm">

              <li
                class="timeline-item"
                v-for="item in tracking"
                :key="item._id"
              >
                <div class="timeline-item-head">
                  <div class="avatar avatar-icon avatar-sm avatar-cyan">
                    <i class="anticon anticon-check"></i>
                  </div>
                </div>
                <div class="timeline-item-content">
                  <div class="m-l-10">
                    <div class="media align-items-center">
                      <div class="m-l-10">
                        <h6 class="m-b-0">{{item.TenHanhDong}}</h6>
                        <span class="text-muted font-size-13">
                          <i class="anticon anticon-clock-circle"></i>
                          <span class="m-l-5">{{formatDay(item.createdAt)}}</span>
                        </span>
                      </div>
                    </div>
                    <div class="m-t-20">
                      <p class="m-l-20">
                        <span class="text-dark font-weight-semibold">Account : </span>
                        <span class="m-l-5">
                          <nuxt-link :to="{ path: '/account/'+item.account.account_id}">
                            {{item.account.RealName}}
                          </nuxt-link>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </li>

            </ul>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="card">
          <div class="card-header">
            <h4 class="card-title">Thông Tin Thêm</h4>
          </div>
          <div class="card-body">
            <div class="row">

              <div class="col-md-12">
                <div class="row">
                  <div class="col">
                    <ul class="list-unstyled">
                      <li class="row">
                        <p class="col-sm-5 col-5 font-weight-semibold text-dark m-b-5">
                          <i class="m-r-10 text-primary anticon anticon-mail"></i>
                          <span>Thời Hạn Nhắc : </span>
                        </p>
                        <p class="col font-weight-semibold">
                          Còn <code> {{thoihannhacnho}}</code> ngày
                        </p>
                        <button class="btn btn-primary btn-tone m-r-5">Nhắc</button>

                      </li>
                      <li class="row">
                        <p class="col-sm-5 col-5 font-weight-semibold text-dark m-b-5">
                          <i class="m-r-10 text-primary anticon anticon-mail"></i>
                          <span>Ngày Hết Hạn : </span>
                        </p>
                        <p class="col font-weight-semibold">
                          Còn <code> {{thoihanthanhly}}
                          </code> ngày
                        </p>

                      </li>
                      <li class="row">
                        <p class="col-sm-5 col-5 font-weight-semibold text-dark m-b-5">
                          <i class="m-r-10 text-primary anticon anticon-mail"></i>
                          <span>Account : </span>
                        </p>
                        <p class="col font-weight-semibold">
                          <nuxt-link :to="{ path: '/account/'+account.account_id}">
                            {{account.RealName}}
                          </nuxt-link>

                        </p>
                      </li>
                      <li class="row">
                        <p class="col-sm-5 col-5 font-weight-semibold text-dark m-b-5">
                          <i class="m-r-10 text-primary anticon anticon-compass"></i>
                          <span>Phone: </span>
                        </p>
                        <p class="col font-weight-semibold">{{account.phone}}</p>
                      </li>
                      <li class="row">
                        <nuxt-link
                          class="btn btn-primary btn-tone m-r-5"
                          :to="{ path: '/hopdong/edit/'+$route.params.id}"
                        >
                          Sửa Hợp Đồng
                        </nuxt-link>

                        <button class="btn btn-primary btn-tone m-r-5">Chuộc</button>

                        <button class="btn btn-primary btn-tone m-r-5">Thanh Lý</button>
                      </li>

                    </ul>

                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="card">
          <div class="card-header">
            <h4 class="card-title">Thông tin</h4>
          </div>
          <div class="card-body">
            <div class="col-md-12">
              <div style="width: 400px; height:400px">
                <img
                  src="https://iadminpicture.s3.amazonaws.com/thumbnail_ironman_4e6acf40d1.jpg"
                  style="width: 400px; height:400px"
                  alt=""
                >
              </div>

            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="card">
          <div class="card-header">
            <h4 class="card-title">Nhật Kí Lãi</h4>
          </div>
          <div
            class="card-body"
            v-if="nhatkilai"
          >

          </div>
          <div
            class="card-body"
            v-else
          >
            Chưa có thông tin
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="card">
          <div class="card-header">
            <h4 class="card-title">Thanh Lý</h4>
          </div>
          <div
            class="card-body"
            v-if="thanhly"
          >

          </div>
          <div
            class="card-body"
            v-else
          >
            Chưa Có Thông Tin
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="card">
          <div class="card-header">
            <h4 class="card-title">Nhật Kí Liên Lạc</h4>
          </div>
          <div
            class="card-body"
            v-if="nhatkilienlac"
          >

          </div>
          <div
            class="card-body"
            v-else
          >
            Chưa Có Thông Tin
          </div>
        </div>
      </div>
      <div class="col-md-12">
        <div class="card">
          <div class="card-header">
            <h4 class="card-title">Chứng từ</h4>
          </div>
          <div
            class="card-body"
            v-if="chungtu"
          >
            <div class="table-responsive">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Mã</th>
                    <th scope="col">Ngày</th>
                    <th scope="col">Số Tiền</th>
                    <th scope="col">Diễn Dãi</th>
                    <th scope="col">Ghi Chú</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(item,index) in chungtu"
                    :key="item._id"
                  >
                    <td>
                      <nuxt-link :to="{ path: '/chungtu/'+item._id}">
                        {{index+1}}
                      </nuxt-link>
                    </td>
                    <td>{{formatDay(item.createdAt)}}</td>
                    <td>{{numberWithCommas(sotien)}}</td>
                    <td>

                      <span v-if="item.diendai=='CHI'">

                        <span class="badge badge-secondary">
                          {{item.diendai}}
                        </span>

                      </span>
                      <span
                        v-else
                        class
                      >
                        <span class="badge badge-warning"> {{item.diendai}}</span>

                      </span>

                    </td>
                    <td>
                      <p>{{item.ghichu}}</p>
                    </td>
                  </tr>

                </tbody>
              </table>
            </div>

          </div>
          <div
            class="card-body"
            v-else
          >
            Chưa Có Thông Tin
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
      tracking: {},
      hopdong: {},
      account: {},
      thanhly: null,
      nhatkilai: null,
      nhatkilienlac: null,
      chungtu: {}
    }
  },
  computed: {
    sotien () {
      let t = parseInt(this.hopdong.sotien)
      return this.numberWithCommas(t)
    },
    ngaythe () {
      let t = this.$moment(this.hopdong.ngaythe).format("DD-MM-YYYY")
      return t;
    },
    ngaylay () {
      let t = this.$moment(this.hopdong.ngayhethan).format("DD-MM-YYYY")
      return t;
    },
    thoigiancam () {
      let t = this.$moment(this.hopdong.ngaythe)
      let a = this.$moment(Date.now()).diff(t, 'days')
      return a + 1;
    },
    laidenhomnay () {
      let a = this.thoigiancam;
      let money = (a * this.hopdong.sotien * this.hopdong.laixuat / 1000 / 30)
      if (money < 5000) {
        return "5,000"
      } else {
        return this.numberWithCommas(money)
      }
    },
    thoihannhacnho () {
      let temp = this.$store.state.generalStore.thoigiannhacnho
      let ngaycam = this.thoigiancam;
      let t = this.hopdong.thoihancam * 30;
      return t - ngaycam - temp;
    },
    thoihanthanhly () {
      let temp = this.$store.state.generalStore.thoigianthanhly
      let ngaycam = this.thoigiancam;
      let t = this.hopdong.thoihancam * 30;
      return t - ngaycam + temp;
    },


  },
  methods: {
    formatDay (x) {
      let t = this.$moment(x).format("DD-MM-YYYY")
      return t;
    },
    numberWithCommas (x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

  },
  async fetch () {
    let id = this.$route.params.id
    this.tracking = await this.$strapi.$trackings.find({ hopdong_id: id });
    this.hopdong = await this.$strapi.$hopdongs.findOne(id)
    this.account = this.hopdong.thongtinnhanvien;
    this.chungtu = await this.$strapi.$chungtus.find({ hopdong_id: id })

  }
}
</script>

<style>
</style>