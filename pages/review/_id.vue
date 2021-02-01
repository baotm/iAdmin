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
              <h6 class="mb-0">Review số <code>{{this.$route.params.id}}</code></h6>

              <span class="text-gray font-size-13">Review Processing

              </span>

            </div>

          </div>
        </div>

      </div>
    </div>

    <div
      class="row text-center"
      style="height:60px"
    >
      <div
        class="col-3"
        style="background-color:#D3EEF5"
      >
        <p><strong>Người Nhập Thông Tin</strong></p>
        <p class="text-capitalize"><code><i>{{reviews.accountedit.RealName}}</i></code></p>
      </div>
      <div class="col-1 m-t-30">
        <i class="anticon anticon-link font-size-30"></i>
      </div>
      <div
        class="col-3"
        style="background-color:#D3EEF5"
      >
        <p><strong>Người Kiểm Tra Thông Tin</strong></p>
        <p class="text-capitalize"><code><i>{{reviews.accountreview.RealName}}</i></code></p>

      </div>
      <div class="col-1 m-t-30">
        <i class="anticon anticon-star font-size-30"></i>
      </div>
      <div
        class="col-3"
        style="background-color:#D3EEF5"
      >
        <p class="badge badge-danger"><strong>{{reviews.score}}/12</strong></p>
        <p><i>{{reviews.ghichu}}</i></p>

      </div>
    </div>

    <div class="row m-t-20">
      <div class="col-12">
        <div class="card">
          <div class="row no-gutters">
            <div class="col-md-5">
              <b-img-lazy
                style="width:100%"
                class="card-img-top"
                :src='hopdongs.urlPic'
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

                      <div class="m-t-25">
                        <div class="row">
                          <div class="col-12">
                            <div class="table-responsive">
                              <table class="table">
                                <tbody>
                                  <tr>
                                    <th>Mã số</th>
                                    <td> {{hopdongs.maso}}</td>
                                  </tr>
                                  <tr>
                                    <th>Tên Khách</th>
                                    <td>{{hopdongs.tenkhach}}</td>
                                  </tr>
                                  <tr>
                                    <th>Loại Hàng</th>
                                    <td>{{hopdongs.loaitaisan}}</td>
                                  </tr>
                                  <tr>
                                    <th>Số Tiền</th>
                                    <td>{{numberWithCommas(hopdongs.sotien)}} vnd</td>
                                  </tr>
                                  <tr>
                                    <th>Món đồ</th>
                                    <td>{{hopdongs.thongtinmondo}}</td>
                                  </tr>
                                  <tr>
                                    <th>Ngày thế</th>
                                    <td>{{$moment(hopdongs.ngaythe).format('DD-MM-YYYY')}}</td>
                                  </tr>
                                  <tr>
                                    <th>Lãi xuất</th>
                                    <td>{{hopdongs.laixuat/10}} %</td>
                                  </tr>
                                  <tr>
                                    <th>Tiền nợ</th>
                                    <td> {{numberWithCommas(hopdongs.tienno)}}</td>
                                  </tr>
                                  <tr>
                                    <th>Sdthoại</th>
                                    <td>{{hopdongs.sodienthoai}}</td>
                                  </tr>
                                  <tr>
                                    <th>Kho lưu</th>
                                    <td>{{hopdongs.kholuu}}</td>
                                  </tr>
                                  <tr>
                                    <th>Địa chỉ</th>
                                    <td>{{hopdongs.sodienthoai}}</td>
                                  </tr>
                                  <tr>
                                    <th>Thời hạn</th>
                                    <td>{{hopdongs.thoihancam}}</td>
                                  </tr>
                                </tbody>
                              </table>
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
      reviews: {},
      dataReady: false,
      hopdongs: []
    }
  },
  async fetch () {
    //lay tong so hinh anh
    this.reviews = await this.$strapi.$reviews.findOne(this.$route.params.id)
    this.hopdongs = await this.$strapi.$hopdongs.findOne(this.reviews.hopdongid)
    this.dataReady = true;

  },
  methods: {
    numberWithCommas (x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

  },
}
</script>

<style scoped>
</style>