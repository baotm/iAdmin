<template>
  <div>
    <b-overlay :show="show">
      <template #overlay>
        <h3>Đang gửi thông tin...</h3>
        <h5>{{messageCreate}}</h5>
      </template>
      <div class="card">
        <div class="card-body">
          <h4>Thêm Hợp đồng</h4>
          <p>Nhớ kiểm tra thông tin đầy đủ, tên <code> Nhân Viên </code>lưu hồ sơ sẽ dính vào <code>hợp đồng</code>, mọi trách nhiệm liên quan đến việc lưu <code>Hồ sơ</code> đều thuộc về nhân viên. </p>
          <div class="row">
            <div class="col-8">
              <b-form
                validated
                class="row"
                @submit="submitForm"
              >
                <!-- select loaidothe -->
                <b-form-group
                  label="Loại Tài Sản"
                  class="col-6"
                >
                  <b-form-select
                    v-model="form.loaitaisan"
                    :options="configLoaiTaiSan"
                    @change="setDefaultValue"
                    required
                  ></b-form-select>

                  <b-form-invalid-feedback>
                    Phải chọn 1 mục.
                  </b-form-invalid-feedback>
                  <b-form-valid-feedback>
                    Ổn rồi.
                  </b-form-valid-feedback>
                </b-form-group>
                <!-- sodienthoai -->
                <b-form-group
                  label="Số Điện Thoại"
                  class="col-3"
                >
                  <b-form-input
                    autocomplete="off"
                    v-model="form.SoDienThoai"
                    class="form-control"
                    required
                  ></b-form-input>
                </b-form-group>
                <!-- input maso -->
                <b-form-group
                  label="Mã Số"
                  class="col-3"
                >
                  <b-form-input
                    v-model="form.maso"
                    class="form-control"
                    disabled
                  ></b-form-input>
                </b-form-group>
                <!-- ten nguoi the -->
                <b-form-group
                  label="Tên Người Thế"
                  class="col-4"
                >
                  <b-input
                    v-model="form.TenNguoiCam"
                    autocomplete="off"
                    required
                    class="form-control"
                  ></b-input>
                  <b-form-invalid-feedback>
                    Không Bỏ Trống
                  </b-form-invalid-feedback>
                  <b-form-valid-feedback>
                    Ổn rồi.
                  </b-form-valid-feedback>
                </b-form-group>
                <b-form-group
                  label="Địa Chỉ"
                  class="col-4"
                >
                  <b-input
                    v-model="form.diachi"
                    autocomplete="off"
                    required
                    class="form-control"
                  ></b-input>
                  <b-form-text>
                    Viết Không Dấu
                  </b-form-text>
                  <b-form-invalid-feedback>
                    Không Bỏ Trống
                  </b-form-invalid-feedback>
                  <b-form-valid-feedback>
                    Ổn rồi.
                  </b-form-valid-feedback>
                </b-form-group>
                <!-- so tien -->
                <b-form-group
                  label="Số Tiền"
                  class="col-4"
                >
                  <b-input
                    v-model="form.SoTien"
                    :state="sotienState"
                    autocomplete="off"
                    class="form-control"
                  ></b-input>
                  <b-form-invalid-feedback>
                    Tối thiểu 100k
                  </b-form-invalid-feedback>
                  <b-form-valid-feedback>
                    {{numberWithCommas(this.form.SoTien)}}
                  </b-form-valid-feedback>
                </b-form-group>
                <!-- ngay cam -->
                <b-form-group
                  label="Ngày Cầm"
                  class="col-6"
                >
                  <b-form-datepicker
                    v-model="form.NgayCam"
                    required
                  ></b-form-datepicker>

                </b-form-group>
                <!-- thoi han cam -->
                <b-form-group
                  label="Thời Hạn Cầm"
                  class="col-3"
                >
                  <b-form-select
                    v-model="form.ThoiHanCam"
                    :options="configParam.thoihancam"
                    required
                  ></b-form-select>
                  <b-form-invalid-feedback>
                    Phải chọn 1 mục.
                  </b-form-invalid-feedback>
                  <b-form-valid-feedback>
                    Ổn rồi.
                  </b-form-valid-feedback>
                </b-form-group>
                <!-- lai xuat -->
                <b-form-group
                  label="Lãi Xuất"
                  class="col-3"
                >
                  <b-form-select
                    v-model="form.laixuat"
                    :options="configParam.laixuat"
                    required
                  ></b-form-select>
                  <b-form-invalid-feedback>
                    Phải chọn 1 mục.
                  </b-form-invalid-feedback>
                  <b-form-valid-feedback>
                    Ổn rồi.
                  </b-form-valid-feedback>
                </b-form-group>
                <!-- kho luu -->
                <b-form-group
                  label="Kho Lưu"
                  class="col-6"
                >
                  <b-form-select
                    v-model="form.kho"
                    :options="configParam.kholuu"
                    required
                  ></b-form-select>
                  <b-form-invalid-feedback>
                    Phải chọn 1 mục.
                  </b-form-invalid-feedback>
                  <b-form-valid-feedback>
                    Ổn rồi.
                  </b-form-valid-feedback>
                </b-form-group>
                <!-- tien no -->
                <b-form-group
                  label="Tiền Nợ"
                  class="col-6"
                >
                  <b-input
                    v-model="form.tienno"
                    required
                    class="form-control"
                  ></b-input>
                  <b-form-invalid-feedback>
                    Không Bỏ Trống
                  </b-form-invalid-feedback>
                  <b-form-valid-feedback>
                    {{numberWithCommas(this.form.tienno)}}
                  </b-form-valid-feedback>
                </b-form-group>
                <!-- thong tin mon do -->
                <b-form-group
                  class="col-8"
                  label="Thông Tin Món Đồ"
                >
                  <b-form-textarea
                    autocomplete="off"
                    v-model="form.ThongTinTaiSan"
                    placeholder="Enter something..."
                    rows="6"
                  ></b-form-textarea>

                </b-form-group>
                <b-form-group
                  class="col-4"
                  label="Ghi Chú Hợp Đồng"
                >
                  <b-form-textarea
                    autocomplete="off"
                    v-model="form.GhiChu"
                    placeholder="Enter something..."
                    rows="6"
                  ></b-form-textarea>

                </b-form-group>
                <b-button
                  type="submit"
                  class="col-4 ml-5"
                >Submit</b-button>
                <div class="col-2"></div>
                <b-button
                  type="reset"
                  class="col-4"
                  block
                  variant="danger"
                >Reset</b-button>

              </b-form>

            </div>

            <div class="col-4">

              <img
                style="width:100%"
                src="https://iadminpicture.s3.amazonaws.com/thumbnail_ironman_4e6acf40d1.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </b-overlay>
  </div>
</template>

<script>
export default {
  methods: {
    async wait (ms) {
      return new Promise(resolve => {
        setTimeout(resolve, ms);
      })
    },
    numberWithCommas (x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    async submitForm (event) {
      this.show = true;
      event.preventDefault();
      this.messageCreate = "Tạo Hợp Đồng"
      //submit form
      let ngayhethan = this.$moment(this.form.NgayCam).add(parseInt(this.form.ThoiHanCam), 'month').format('YYYY-MM-DD')
      let hopdong = {
        ghichuhopdong: this.form.GhiChu,
        laixuat: (this.form.laixuat),
        loaitaisan: this.form.loaitaisan.Tentaisan,
        maso: "13",
        thoihancam: this.form.ThoiHanCam,
        ngayhethan: ngayhethan,
        ngaythe: this.form.NgayCam,
        sodienthoai: this.form.SoDienThoai,
        sotien: this.form.SoTien,
        tenkhach: this.form.TenNguoiCam,
        thongtinmondo: this.form.ThongTinTaiSan,
        thongtinnhanvien: this.getInfoAccount(),
        tienno: "0",
        tinhtrang: "CHUACHUOC",
        urlPic: '',
        kholuu: this.form.kho,
        diachi: this.form.diachi
      }
      let Object_hopdong = await this.$strapi.$hopdongs.create(hopdong);
      this.messageCreate = "Tạo Tracking Cho Hợp Đồng"
      let data_tracking = {
        TenHanhDong: 'TAOHOPDONG',
        kho: {
          value: 'TAOHOPDONG',
          display: 'Tạo Hợp Đồng'
        },
        account: this.getInfoAccount(),
        hopdong_id: Object_hopdong._id
      }

      let Object_tracking = await this.$strapi.$trackings.create(data_tracking);
      //nếu là vàng thì tiếp tục tracking Lưu kho
      if (hopdong.loaitaisan === "VANG" || hopdong.loaitaisan === "DIENTHOAI") {

        data_tracking = {
          TenHanhDong: 'LUUKHO',
          kho: {
            value: 'LUUKHO',
            display: 'Lưu Tại' + hopdong.kholuu
          },
          account: hopdong.thongtinnhanvien,
          hopdong_id: Object_hopdong._id
        }
        await this.$strapi.$trackings.create(data_tracking);
      }

      this.messageCreate = "Lưu Nhật Kí"
      //tao chungtu
      let data_chungtu = {
        sotien: this.form.SoTien,
        hopdong_id: Object_hopdong._id,
        diendai: 'CHI',
        ghichu: 'CHI TIỀN CHO HỢP ĐỒNG CẦM ĐỒ',
      }
      let Object_chungtu = await this.$strapi.$chungtus.create(data_chungtu)
      //end taochungtu
      this.messageCreate = "Lưu Thông Tin Truy Cập CHo Hợp Đồng"
      let nhatkihopdong = {
        Ten: "CAMDO",
        SoTien: this.form.SoTien,
        account: this.getInfoAccount(),
      }
      await this.$strapi.$nhatkihopdongs.create(nhatkihopdong)
      this.messageCreate = "Tạo Xong Hợp Đồng"
      let notification = {
        ten: "HOPDONGMOI",
        account: this.getInfoAccount(),
        hopdong_id: Object_hopdong._id
      }
      await this.$strapi.$notifications.create(notification);
      this.show = false;
      this.$router.push('/hopdong')
    },
    setDefaultValue () {
      this.configParam.thoihancam = this.getThoiHanCam();

      this.configParam.laixuat = this.getLaiXuat();
      this.configParam.kholuu = this.getKhoLuu();

      let temp = this.configParam.thoihancam.find(item => item.default);
      this.form.ThoiHanCam = temp.value;

      let temp1 = this.configParam.laixuat.find(item => item.default);
      this.form.laixuat = temp1.value;

      let temp2 = this.configParam.kholuu.find(item => item.default);
      this.form.kho = temp2.value;



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
    getThoiHanCam () {
      if (this.form.loaitaisan != undefined) {
        let temp = this.form.loaitaisan.thoihancam.thoihancam;
        temp.map(item => {
          item.text = item.display;
        })
        return temp;

      } else {
        return []
      }
    },
    getLaiXuat () {
      if (this.form.loaitaisan != undefined) {
        let temp = this.form.loaitaisan.laixuat.laixuat;
        temp.map(item => {
          item.text = item.display;
        })
        return temp;

      } else {
        return []
      }
    },
    getKhoLuu () {
      if (this.form.loaitaisan != undefined) {
        let temp = this.form.loaitaisan.KhoLuu.listkholuu;
        temp.map(item => {
          item.text = item.display;
        })
        return temp;

      } else {
        return []
      }


    }
  },
  async fetch () {
    let temp = await this.$strapi.$loaitaisans.find();
    this.config = temp;

    this.configLoaiTaiSan = temp.map(item => {

      item.value = { ...item };
      item.text = item.display;
      return item;
    })


  },
  computed: {
    sotienState () {
      return this.form.SoTien > 10000 ? true : false
    },

  },
  data () {
    return {
      loaidothe: [],
      show: false,
      messageCreate: '',
      form: {
        diachi: 'phu quy',
        GhiChu: "",
        ThongTinTaiSan: "",
        SoTien: 0,
        maso: '1212',
        SoDienThoai: 'Không',
        tienno: 0,
        NgayCam: this.$moment().format('YYYY-MM-DD'),
        kho: '',
      },
      config: [],
      configLoaiTaiSan: {},
      configParam: {
        thoihancam: [],
        laixuat: [],
        kholuu: []
      }
    }
  }
}
</script>

<style>
</style>