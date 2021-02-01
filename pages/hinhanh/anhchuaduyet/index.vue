<template>

  <div v-if="dataReady">
    <div class="page-header no-gutters">
      <div class="row align-items-md-center">
        <div class="col-md-8">
          <div class="media m-v-10">
            <div class="avatar avatar-cyan avatar-icon avatar-square">
              <i class="anticon anticon-star"></i>
            </div>
            <div class="media-body m-l-15">
              <h6 class="mb-0">Ảnh Đang Chờ Duyệt Thông tin ({{totalRows}})</h6>

              <span class="text-gray font-size-13">Picture Processing

              </span>

            </div>

          </div>
        </div>

      </div>
    </div>
    <div v-if="hopdongs.length==0">
      <p>Không còn ảnh nào chờ duyệt...</p>
    </div>
    <div
      class="row"
      v-for="(item) in hopdongs"
      :key="item._id"
    >
      <div class="col-12">
        <div class="card">
          <div class="row no-gutters">
            <div class="col-md-5">
              <b-img-lazy
                style="width:100%"
                class="card-img-top"
                :src='item.urlPic'
                thumbnail
                fluid
                rounded
                blank-color="#777"
              >

              </b-img-lazy>
            </div>
            <div class="col-md-7">
              <div class="card-body">
                <div class="row">
                  <div class="col-10 ml-auto mr-auto">
                    <div class="m-t-15">
                      <h4>Thông tin cần kiểm tra</h4>
                      <p>Check vào ô thông tin <strong>không chính xác</strong></p>
                      <div class="m-t-25">
                        <div class="row">
                          <div class="col-7">
                            <b-form-group label="Dữ liệu :">
                              <b-form-checkbox-group
                                stacked
                                v-model="selected"
                                @change="setScore"
                              >
                                <b-form-checkbox value="maso">Mã số : {{item.maso}}</b-form-checkbox>
                                <b-form-checkbox value="tenkhach">Tên người : {{item.tenkhach}}</b-form-checkbox>
                                <b-form-checkbox value="loaitaisan">Loại hàng : {{item.loaitaisan}}</b-form-checkbox>
                                <b-form-checkbox value="sotien">Số tiền : {{numberWithCommas(item.sotien)}} vnd</b-form-checkbox>
                                <b-form-checkbox value="thongtinmondo">Món đồ : {{item.thongtinmondo}}</b-form-checkbox>
                                <b-form-checkbox value="ngaythe">Ngày : {{$moment(item.ngaythe).format('DD-MM-YYYY')}}</b-form-checkbox>
                                <b-form-checkbox value="laixuat">Lãi xuất : {{item.laixuat/10}} %</b-form-checkbox>
                                <b-form-checkbox value="tienno">Tiền nợ : {{numberWithCommas(item.tienno)}}</b-form-checkbox>
                                <b-form-checkbox value="sodienthoai">Số điện thoại :{{item.sodienthoai}}</b-form-checkbox>
                                <b-form-checkbox value="kholuu">Kho lưu : {{item.kholuu}}</b-form-checkbox>
                                <b-form-checkbox value="diachi">Địa chỉ :{{item.diachi}}</b-form-checkbox>
                                <b-form-checkbox value="thoihancam">Thời hạn cầm : {{item.thoihancam}} tháng</b-form-checkbox>

                              </b-form-checkbox-group>
                            </b-form-group>
                            <b-button @click="hoantat">Hoàn tất</b-button>
                            <b-button
                              style="float:right"
                              @click="baocao"
                              class="btn btn-danger m-r-5"
                            > Báo cáo, Fix lỗi</b-button>

                          </div>
                          <div class="col-5">
                            <p><strong>Thông tin</strong> người nhập : </p>
                            <div class="border">

                              <p class="text-left">
                                <strong>Acccount :</strong>
                                <a :href="'account/'+item.thongtinnhanvien.account_id">
                                  {{item.thongtinnhanvien.name}}
                                </a>
                                <br />
                                <strong>Tên đầy đủ :</strong> {{item.thongtinnhanvien.RealName}}
                                <br />
                                <strong>Số điện thoại : </strong>{{item.thongtinnhanvien.phone}}
                                <br />
                                <strong>Ngày nhập :</strong> {{$moment(item.createdAt).format('DD-MM-YYYY hh:mm')}}
                                <br />

                                <strong>Hợp đồng :</strong>
                                <a :href="'/hopdong/'+item._id">
                                  {{item.maso}}
                                </a><br />
                                <strong>Điểm :</strong> {{selected.length}}/12
                              </p>
                              <div> <label>Thông tin ghi chú:</label>
                                <b-form-textarea
                                  v-show="forsure"
                                  placeholder="Lỗi sai ở đây"
                                  v-model="ghichu"
                                  rows="8"
                                  ref="ghichu"
                                  :style="ghichuStyle"
                                ></b-form-textarea>

                              </div>
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div></div>

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
      ghichu: '',
      ghichuStyle: {

      },
      selected: ['maso', 'tenkhach', 'loaitaisan', 'sotien', 'thongtinmondo', 'ngaythe', 'laixuat', 'tienno', 'sodienthoai', 'kholuu', 'diachi', 'thoihancam'],
      unselected: [],
      dataReady: false,
      sortType: 'DESC',
      hopdongs: [],
      score: 12,
      forsure: false,
    }
  },
  async fetch () {
    //lay tong so hinh anh

    this.hopdongs = await this.$strapi.$hopdongs.find({ _limit: 1, reviewStatus: false, _sort: "createdAt:DESC" })
    this.totalRows = await this.$strapi.$hopdongs.count({ reviewStatus: false });
    this.dataReady = true;

  },
  watch: {
    selected () {
      let listOriginal = ['maso', 'tenkhach', 'loaitaisan', 'sotien', 'thongtinmondo', 'ngaythe', 'laixuat', 'tienno', 'sodienthoai', 'kholuu', 'diachi', 'thoihancam']
      let listSelected = this.selected;
      this.unselected = listOriginal.filter(x => {
        if (listSelected.includes(x)) {
          return false
        } else {
          return true
        }
      });


    }
  },
  methods: {

    setScore () {
      this.score = this.selected.length
    },
    hoantat () {
      this.dataReady = false;
      let accountReview = this.getAccountInfo();
      let accedit = this.hopdongs[0].thongtinnhanvien.name;
      let accreview = accountReview.username;
      let mess = {
        title: 'Xác nhận thông tin',
        body: `<code>Account(${accedit})</code> xác nhận <code>Account(${accreview})</code> nhập liệu đúng<br/>Bạn đã kiểm tra và xác nhận thông tin nhập vào đúng theo nội dung hình ảnh.<br/><strong>LƯU Ý :</strong> nếu sai <code>TRÁCH NHIỆM</code> là của bạn...`
      }
      this.$dialog.confirm(mess).then(async () => {

        mess.body = "Tạo nhật kí review"
        let review = {
          accountreview: accountReview,
          score: this.score,
          accountedit: this.hopdongs[0].thongtinnhanvien,
          status: true,
          ghichu: this.ghichu,
          hinhanhid: this.hopdongs[0].hinhanhid,
          hopdongid: this.hopdongs[0]._id,

        }
        await this.$strapi.$reviews.create(review);
        mess.body = "Update thông tin hợp đồng"
        await this.$strapi.$hopdongs.update(this.hopdongs[0]._id, { reviewStatus: true })
        mess.body = "Hoàn tất"
        this.dataReady = false;
        window.location.reload();
      })

    },
    baocao () {
      this.dataReady = false;
      let mess = {
        title: "Thông báo",
        body: '<strong>Bạn phải hiểu và chắc chắn việc mình đang làm</strong>. vui lòng kiểm tra kĩ lại và thêm phần ghi chú các trường sai '
      }
      let opts = {
        loader: false
      }

      if (this.forsure) {
        mess.body = `<strong style='color:red'>Bạn đồng ý muốn báo cáo hợp đồng và account sai</strong>`
        this.$dialog.confirm(mess, opts).then(async () => {
          let idHD = this.hopdongs[0]._id;
          mess.body = 'update tình trạng hợp đồng'
          await this.$strapi.$hopdongs.update(idHD, { reviewStatus: false })
          mess.body = 'Tạo nhật kí review'
          let accountReview = this.getAccountInfo();
          let accedit = this.hopdongs[0].thongtinnhanvien.name;
          let accreview = accountReview.username;
          let review = {
            accountreview: accountReview,
            score: this.score,
            accountedit: this.hopdongs[0].thongtinnhanvien,
            status: true,
            ghichu: this.ghichu,
            hinhanhid: this.hopdongs[0].hinhanhid,
            hopdongid: this.hopdongs[0]._id,

            vitrisai: {
              "fields": JSON.stringify(this.unselected)
            }
          }
          await this.$strapi.$hopdongs.update(this.hopdongs[0]._id, { reviewStatus: true })
          await this.$strapi.$reviews.create(review)
          mess.body = 'done.'
          this.dataReady = true;
          window.location.replace('/hopdong/edit/' + this.hopdongs[0]._id + "?msg=" + this.ghichu + "&fields=" + JSON.stringify(this.unselected))

        })
      } else {
        this.$dialog.confirm(mess, opts).then(() => {
          this.forsure = true;
          this.ghichuStyle = {
            'borderColor': 'red'
          }
          this.dataReady = true;
        })
      }
    },
    getAccountInfo () {
      let acc = this.$cookies.get('info')
      let result = {
        accountid: acc.id,
        RealName: acc.RealName,
        username: acc.username,
        phone: acc.Phone
      }
      return result;
    },
    numberWithCommas (x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

  },
}
</script>

<style scoped>
</style>