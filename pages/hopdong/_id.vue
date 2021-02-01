<template>
  <div v-if="dataReady">
    <div class="container-fluid">
      <!-- modal donglai -->
      <div
        class="modal fade"
        id="modalDongLai"
      >
        <b-overlay :show="showDonglai">

          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5
                  class="modal-title"
                  id="exampleModalLabel"
                >Đóng Lãi Hợp Đồng</h5>

                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                >
                  <i class="anticon anticon-close"></i>
                </button>
              </div>
              <div class="modal-body">

                <b-form-group label="Tiền Nợ Khách Trả">
                  <b-form-input
                    v-model="donglai.tienno"
                    placeholder="Số Tiền"
                  ></b-form-input>
                  <b-form-text><code>{{numberWithCommas(donglai.tienno)}}</code></b-form-text>
                  <b-form-text>Yêu Cầu Khách Trả Tiền Nợ Cũ <code>{{numberWithCommas(hopdong.tienno)}}</code></b-form-text>
                </b-form-group>
                <b-form-group
                  label="Ngày Đóng Lãi"
                  description="Ngày Đóng Lãi"
                >
                  <b-form-datepicker
                    today-button
                    close-button
                    @change="getTienLai"
                    v-model="donglai.ngaycam"
                  ></b-form-datepicker>
                </b-form-group>
                <p>Ngày Thế <code>{{  getNgayThe () }}</code> ngày</p>
                <p>Số Tiền Lãi Phải Thu : <code>{{numberWithCommas(getTienLai())}}</code></p>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-default"
                  data-dismiss="modal"
                >Close</button>
                <button
                  type="button"
                  class="btn btn-secondary"
                  @click="donglaihopdong"
                >Đóng Lãi</button>
              </div>
            </div>
          </div>

        </b-overlay>
      </div>
      <div
        v-show="show"
        class="m-t-100"
      >
        <center>
          <h5>{{messageCreate}}</h5>
          <div v-if="!dongy">
            <button
              class="btn btn-warning m-r-5"
              @click="changeDongY"
            >Tôi Đồng Ý</button>
            <button
              class="btn btn-secondary m-r-5"
              @click="changekhongdongy"
            >Không Đồng Ý</button>
          </div>
        </center>
      </div>

      <!--end modal donglai -->
      <b-overlay :show="show">

        <div class="row">
          <div class="col-md-8">
            <div class="card">
              <div class="card-header">
                <h4 class="card-title">Mã Hợp Đồng : <code>{{hopdong.maso}}</code> <span
                    class="badge badge-pill badge-blue blink_me"
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
                            <p class="col font-weight-semibold">

                              <span v-if="hopdong.loaitaisan==='VANG'">
                                <div
                                  class="badge badge-pill badge-warning text-wrap text-center"
                                  style="width: 6rem;"
                                >
                                  {{hopdong.loaitaisan}}
                                </div>
                              </span>
                              <span v-else-if="hopdong.loaitaisan==='XE'">

                                <div
                                  class="badge badge-pill badge-info text-wrap text-center"
                                  style="width: 6rem;"
                                >
                                  {{hopdong.loaitaisan}}
                                </div>

                              </span>

                              <span v-else-if="hopdong.loaitaisan==='DIENTHOAI'">

                                <div
                                  class="badge badge-pill badge-success text-wrap text-center"
                                  style="width: 6rem;"
                                >
                                  {{hopdong.loaitaisan}}
                                </div>

                              </span>

                              <span v-else>

                                <div
                                  class="badge badge-pill badge-primary text-wrap text-center"
                                  style="width: 6rem;"
                                >
                                  {{hopdong.loaitaisan}}
                                </div>
                              </span>

                            </p>
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
                            <p class="col font-weight-semibold"><code>{{hopdong.sodienthoai}}</code></p>
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
                            <p class="col font-weight-semibold"><code>{{numberWithCommas(hopdong.tienno)}}</code></p>
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
                            <button
                              v-if="hopdong.tinhtrang==='CHUACHUOC'"
                              class="btn btn-primary btn-tone m-r-5"
                            >Nhắc</button>

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

                            <div class="col-12 mt-2">
                              <label>Đánh Giá Hợp Đồng <code>{{getRating}}/5</code></label>
                              <b-form-rating
                                variant="info"
                                class="mb-2"
                                stars="5"
                                :value="getRating"
                                disabled
                                style="color:#3F87F5;background-color:#EBF3FE"
                              ></b-form-rating>
                            </div>

                          </li>
                          <li v-if="hopdong.tinhtrang==='CHUACHUOC'">
                            <center>
                              <nuxt-link
                                class="btn btn-primary btn-tone m-r-5"
                                :to="{ path: '/hopdong/edit/'+$route.params.id}"
                              >
                                Sửa Hợp Đồng
                              </nuxt-link>
                              <button
                                class="btn btn-warning btn-tone m-r-5"
                                data-toggle="modal"
                                data-target="#modalDongLai"
                              >Đóng Lãi</button>

                              <button
                                class="btn btn-success btn-tone m-r-5"
                                @click="chuocHopDong"
                              >Chuộc</button>
                              <button
                                class="btn btn-danger btn-tone m-r-5"
                                @click="xoaHopDong"
                              >Xóa Hợp Đồng</button>
                            </center>
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
                <b-table
                  :items="nhatkilai"
                  :fields="nhatkilai_fields"
                >
                  <template #cell(account)="data">

                    <nuxt-link :to="{ path: '/account/'+data.item.account.account_id}">
                      {{data.item.account.RealName}}
                    </nuxt-link>

                  </template>

                  <template #cell(stt)="data">
                    {{ data.index + 1 }}
                  </template>

                  <template #cell(sotien)="data">
                    {{numberWithCommas(data.item.SoTien)}}

                  </template>
                  <template #cell(type)="data">

                    <span v-if="data.item.Ten=='DONGLAI'">

                      <span class="badge badge-secondary">
                        {{data.item.Ten}}
                      </span>

                    </span>
                    <span v-else>
                      <span class="badge badge-warning"> {{data.item.Ten}}</span>

                    </span>
                  </template>
                </b-table>

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
                        <td>

                          <span v-if="item.diendai=='CHI'">
                            <i class="anticon anticon-minus text-danger"></i> {{numberWithCommas(Math.abs(item.sotien))}}
                          </span>
                          <span v-else>
                            <i class="anticon anticon-plus text-success"></i> {{numberWithCommas(Math.abs(item.sotien))}}
                          </span>

                        </td>
                        <td>

                          <span v-if="item.diendai=='CHI'">

                            <span class="badge badge-secondary">
                              {{item.diendai}}
                            </span>

                          </span>
                          <span v-else>
                            <span class="badge badge-warning"> {{item.diendai}}</span>
                          </span>

                        </td>
                        <td>
                          <p>{{item.ghichu}}</p>
                        </td>
                      </tr>

                    </tbody>
                    <tfoot v-if="chungtu">
                      <tr>
                        <td colspan="5">

                          <p class="font-weight-semibold"><span class="badge badge-warning">Tổng Thu</span>: <code>{{numberWithCommas(getSumThu)}}</code> <span class="badge badge-pill badge-info">vnd</span> </p>

                          <p class="font-weight-semibold"> <span class="badge badge-secondary">
                              Tổng Chi
                            </span>: <code>{{numberWithCommas(getSumChi)}}</code> <span class="badge badge-pill badge-info">vnd</span> </p>

                          <p class="font-weight-semibold"><span class="badge badge-success">Tổng Tiền</span>: <code>{{numberWithCommas(getSumChungTu)}}</code> <span class="badge badge-pill badge-info">vnd</span> </p>

                        </td>

                      </tr>
                    </tfoot>
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
      </b-overlay>
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
      id: '',
      showDonglai: false,
      dongy: false,
      messageCreate: '',
      show: false,
      tracking: {},
      hopdong: {},
      account: {},
      thanhly: null,
      nhatkilai: null,
      nhatkilienlac: null,
      chungtu: null,
      donglai: {
        tienlai: 0,
        tienno: 0,
        ngaycam: this.$moment(Date.now()).format('YYYY-MM-DD')
      },
      nhatkilai_fields: [
        { key: 'stt', label: 'Stt' },
        { key: 'account', label: 'Account', sortable: true },
        { key: 'type', label: 'Phân Loại', sortable: true },
        { key: 'sotien', label: 'Số Tiền', sortable: true },

        {
          key: 'thoigian', label: 'Thời Gian', sortable: true,
          formatter: (value, key, item) => {
            return this.$moment(item.createdAt).format('DD-MM-YYYY')
          }
        }

      ]
    }
  },
  computed: {
    getSumChungTu () {
      let total = 0;
      total = this.getSumThu - this.getSumChi;
      return total;
    },
    getSumChi () {
      let total = 0;

      this.chungtu.map(item => {
        if (item.diendai === 'CHI') {
          total += parseInt(Math.abs(item.sotien))
        }
      })


      return total;
    },
    getSumThu () {
      let total = 0;

      this.chungtu.map(item => {
        if (item.diendai === 'THU') {
          total += parseInt(Math.abs(item.sotien))
        }
      })


      return total;
    },
    getRating () {
      let thoihancam = this.thoigiancam * 30;
      let phantram = (this.thoihannhacnho / (thoihancam + this.thoihannhacnho) * 10) / 2
      return Math.ceil(phantram)


    },
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
  async fetch () {
    let id = this.$route.params.id
    this.id = id;
    this.tracking = await this.$strapi.$trackings.find({ hopdong_id: id });
    this.hopdong = await this.$strapi.$hopdongs.findOne(id)
    this.account = this.hopdong.thongtinnhanvien;
    this.chungtu = await this.$strapi.$chungtus.find({ hopdong_id: id })
    this.nhatkilai = await this.$strapi.$nhatkihopdongs.find({ hopdong_id: id })
    this.dataReady = true;
  },
  async beforeMount () {
    //thay the async fecth

  },
  methods: {


    getNgayThe () {
      let t = this.$moment(this.hopdong.ngaythe)
      let a = this.$moment(this.donglai.ngaycam).diff(t, 'days')
      a = a + 1;
      return a
    },
    getTienLai () {
      let t = this.$moment(this.hopdong.ngaythe)
      let a = this.$moment(this.donglai.ngaycam).diff(t, 'days')
      a = a + 1;

      let sotien = 0;
      let money = (a * this.hopdong.sotien * this.hopdong.laixuat / 1000 / 30)
      if (money < 5000) {
        sotien = 5000
      } else {
        sotien = money
      }
      return sotien;
    },
    async donglaihopdong () {
      this.showDonglai = true;
      let thoihanthe = this.hopdong.thoihancam;

      let ngayhethan = this.$moment(this.donglai.ngaycam).add(thoihanthe, 'month').format('YYYY-MM-DD');
      let hopdong = {
        ngaythe: this.donglai.ngaycam,
        ngayhethan: ngayhethan,
        tienno: this.hopdong.tienno - parseInt(this.donglai.tienno)
      }
      await this.$strapi.$hopdongs.update(this.id, hopdong)

      //them vao nhatkihopdong

      let nhatkihopdong = {
        hopdong_id: this.id,
        account: this.getInfoAccount(),
        SoTien: this.getTienLai(),
        Ten: 'DONGLAI'
      }
      await this.$strapi.$nhatkihopdongs.create(nhatkihopdong)
      //cap nhat chungtu

      let chungtu = {
        hopdong_id: this.id,
        diendai: 'THU',
        ghichu: 'THU LÃI CHO HỢP ĐỒNG CẦM ĐỒ',
        sotien: this.getTienLai() + parseInt(this.donglai.tienno)
      }
      await this.$strapi.$chungtus.create(chungtu)
      //them vao notification

      let notification = {
        ten: 'HOPDONGDONGLAI',
        account: this.getInfoAccount(),
        hopdong_id: this.id
      }
      await this.$strapi.$notifications.create(notification)
      //update tien quy
      let tienquy = await this.$strapi.$tienquy.find();
      await this.$strapi.$tienquy.update({ sotien: (parseInt(tienquy.sotien) + chungtu.sotien) })
      this.showDonglai = false;
      window.location.replace('/hopdong')
    },
    changekhongdongy () {
      this.show = false;
    },
    async changeDongY () {
      //tienlai this.show = false;
      this.show = true;
      let a = this.thoigiancam;
      let money = (a * this.hopdong.sotien * this.hopdong.laixuat / 1000 / 30)


      let tiengoc = parseInt(this.hopdong.sotien)
      let tienlai = parseInt(money)
      let tienno = parseInt(this.hopdong.tienno)
      let tientong = tiengoc + tienlai + tienno;
      this.messageCreate = `Vui Lòng Nhận Tổng Cộng[Gốc : ${this.numberWithCommas(tiengoc)}  Lãi ${this.numberWithCommas(tienlai)} Nợ Cũ ${this.numberWithCommas(tienno)}] = ${this.numberWithCommas(tientong)}`

      this.dongy = true;
      let hopdong1 = {
        tinhtrang: 'DACHUOC',
        tienno: 0
      }

      await this.$strapi.$hopdongs.update(this.id, hopdong1)

      this.messageCreate = "Cập Nhật Chứng Từ Về Việc Nhận Tiền Vốn Và Lãi Của Hợp Đồng"
      //tao chungtu
      let data_chungtu = {
        sotien: tientong,
        hopdong_id: this.hopdong._id,
        diendai: 'THU',
        ghichu: 'THU TIỀN GỐC + LÃI + NỢ CỦA HỢP ĐỒNG',
      }
      let Object_chungtu = await this.$strapi.$chungtus.create(data_chungtu)

      this.messageCreate = "Cập Nhật Cập Nhật Xuất Kho Của Hợp Đồng"

      let data_tracking = {
        TenHanhDong: 'XUATKHO',
        kho: {
          value: 'XUATKHO',
          display: 'Khách Hàng Trả Tiền Và Lấy Đồ Tại Tiệm'
        },
        account: this.hopdong.thongtinnhanvien,
        hopdong_id: this.hopdong._id
      }
      await this.$strapi.$trackings.create(data_tracking);


      data_tracking = {
        TenHanhDong: 'CHUOCHOPDONG',
        kho: {
          value: 'CHUOCDO',
          display: 'Khách Hàng Trả Tiền Và Lấy Đồ Tại Tiệm'
        },
        account: this.hopdong.thongtinnhanvien,
        hopdong_id: this.hopdong._id
      }
      await this.$strapi.$trackings.create(data_tracking);

      this.messageCreate = "Lưu Thông Tin Truy Cập CHo Hợp Đồng"
      let nhatkihopdong = {
        Ten: "CHUOCDO",
        SoTien: tientong,
        account: this.getInfoAccount()
      }
      await this.$strapi.$nhatkihopdongs.create(nhatkihopdong)

      this.messageCreate = "Gửi Thông Báo Cho Admin"

      let notification = {
        ten: "HOPDONGKETHUC",
        account: this.getInfoAccount(),
        hopdong_id: this.hopdong._id
      }
      await this.$strapi.$notifications.create(notification);

      let tienquy = await this.$strapi.$tienquy.find();
      this.$strapi.$tienquy.update({ sotien: (parseInt(tienquy.sotien) + Math.abs(tientong)) })
      this.show = false;
      this.$router.push('/hopdong')
    },
    chuocHopDong () {
      this.show = true;
      this.messageCreate = "Bạn Phải Chịu Trách Nhiệm CHo Hành Động Này"
    },
    xoaHopDong () {
      this.show = true;
      this.messageCreate = "Bạn Phải Chịu Trách Nhiệm CHo Hành Động Này"
    },
    formatDay (x) {
      let t = this.$moment(x).format("DD-MM-YYYY")
      return t;
    },
    numberWithCommas (x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    getInfoAccount () {
      let info = this.$cookies.get('info');

      return {
        account_id: info._id,
        name: info.username,
        RealName: info.RealName,
        phone: info.Phone,
      }
    },

  },

}
</script>

<style scoped>
.card-header {
  background-color: #e5f9f6;
}
.blink_me {
  animation: blinker 1s linear infinite;
}

@keyframes blinker {
  50% {
    opacity: 0;
  }
}
</style>