<template>
  <div class="">
    <b-overlay :show="show">
      <template #overlay>

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
      </template>
      <div class="page-header has-tab">
        <ul class="nav nav-tabs">
          <li class="nav-item">
            <a
              class="nav-link active"
              data-toggle="tab"
              href="#product-edit-basic"
            >Thông Tin Cơ Bản</a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              data-toggle="tab"
              href="#product-edit-option"
            >Chứng từ</a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              data-toggle="tab"
              href="#product-edit-description"
            >Tracking</a>
          </li>
        </ul>
      </div>
      <div class="tab-content m-t-15">
        <div
          class="tab-pane fade show active"
          id="product-edit-basic"
        >
          <div class="card">
            <div class="card-body">
              <h4>Sửa Hợp đồng</h4>
              <p>Ngày, giờ, thông tin của <code>bạn</code> sẽ được lưu lại đầy đủ để phục vụ cho việc kiểm tra</p>
              <div class="row">
                <div class="col-8">
                  <b-form
                    validated
                    class="row"
                    v-on:submit.prevent="submitForm"
                  >
                    <!-- select loaidothe -->

                    <b-form-group
                      label="Loại Tài Sản"
                      class="col-6"
                    >
                      <b-form-input
                        disabled
                        v-model="form.loaitaisan"
                      >

                      </b-form-input>

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
                      <b-form-text>Không viết dấu</b-form-text>
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
                      <b-form-input
                        required
                        type="number"
                        v-model="form.ThoiHanCam"
                      >

                      </b-form-input>

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
                      disabled
                    >

                      <b-form-input
                        v-model="form.laixuat"
                        required
                      >

                      </b-form-input>
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
                      class="col-4"
                    >
                      <b-form-input
                        v-model="form.kho"
                        required
                        disabled
                      >

                      </b-form-input>
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
                      class="col-4"
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
                    <b-form-group
                      label="Tình Trạng"
                      class="col-4"
                    >
                      <b-form-checkbox
                        v-model="tinhtrang"
                        name="check-button"
                        switch
                        size="lg"
                      >

                      </b-form-checkbox>

                      <b-form-text>
                        Tình Trạng <b>( {{ tinhtrang?"Đã Chuộc":"Chưa Chuộc" }})</b>
                      </b-form-text>
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

                    <button class="btn btn-primary">
                      <i class="anticon anticon-save"></i>
                      <span>Save</span>
                    </button>
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
        </div>
        <div
          class="tab-pane fade"
          id="product-edit-option"
        >
          <div class="card">
            <div class="card-body">
              <div class="form-group">
                <label
                  class="font-weight-semibold"
                  for="productSize"
                >Size</label>
                <select
                  class="select2"
                  id="productSize"
                  multiple="multiple"
                >
                  <option
                    value="40"
                    selected
                  >40</option>
                  <option
                    value="42"
                    selected
                  >42</option>
                  <option value="44">44</option>
                  <option value="46">46</option>
                  <option value="48">48</option>
                  <option value="50">50</option>
                </select>
              </div>
              <div class="form-group">
                <label
                  class="font-weight-semibold"
                  for="productColors"
                >Colors</label>
                <select
                  class="select2"
                  id="productColors"
                  multiple="multiple"
                >
                  <option
                    value="db"
                    selected
                  >Dark Blue</option>
                  <option
                    value="g"
                    selected
                  >Gray</option>
                  <option
                    value="gb"
                    selected
                  >Gray Blue</option>
                </select>
              </div>
              <div class="form-group">
                <label
                  class="font-weight-semibold"
                  for="productFit"
                >Fit</label>
                <select
                  class="custom-select"
                  id="productFit"
                >
                  <option
                    value="skinny"
                    selected
                  >Skinny</option>
                  <option value="slim">Slim</option>
                  <option value="regular">Regular</option>
                </select>
              </div>
              <div class="form-group">
                <label
                  class="font-weight-semibold"
                  for="productMaterial"
                >Material</label>
                <select
                  class="select2"
                  id="productMaterial"
                  multiple="multiple"
                >
                  <option
                    value="polyester"
                    selected
                  >Polyester</option>
                </select>
              </div>
              <div class="form-group">
                <label
                  class="font-weight-semibold"
                  for="productShip"
                >Ship From</label>
                <select
                  class="custom-select"
                  id="productShip"
                >
                  <option
                    value="columbia"
                    selected
                  >Columbia</option>
                  <option value="brazil">Brazil</option>
                  <option value="chile">Chile</option>
                  <option value="argentina">Argentina</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="product-edit-description"
        >
          <div class="card">
            <div class="card-body">
              <div id="productDescription">
                <p>Special cloth alert. The key to more success is to have a lot of pillows. Surround yourself with angels, positive energy, beautiful people, beautiful souls, clean heart, angel. They will try to close the door on you, just open it. A major key, never panic. Don’t panic, when it gets crazy and rough, don’t panic, stay calm. They key is to have every key, the key to open every door.The other day the grass was brown, now it’s green because I ain’t give up. Never surrender. Lion! I’m up to something. Always remember in the jungle there’s a lot of they in there, after you overcome they, you will make it to paradise.</p>
              </div>
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
    changekhongdongy () {
      this.show = false;
    },
    changeDongY () {
      this.messageCreate = "Chờ xíu..."
      this.dongy = true;
      this.submitForm();
    },
    async wait (ms) {
      return new Promise(resolve => {
        setTimeout(resolve, ms);
      })
    },
    numberWithCommas (x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    async submitForm () {
      let acc = this.getInfoAccount();
      this.messageCreate = acc.RealName + " Phải Chịu Trách Nhiệm Cho Việc Này "
      this.show = true;
      if (!this.dongy) {
        return;
      }
      this.messageCreate = "Sửa Hợp Đồng Thành Công"

      //submit form
      let ngayhethan = this.$moment(this.form.NgayCam).add(parseInt(this.form.ThoiHanCam), 'month').format('YYYY-MM-DD')

      let hopdong1 = {
        ghichuhopdong: this.form.GhiChu,
        ngaythe: this.form.NgayCam,
        sodienthoai: this.form.SoDienThoai,
        sotien: this.form.SoTien,
        tenkhach: this.form.TenNguoiCam,
        thongtinmondo: this.form.ThongTinTaiSan,
        thongtinnhanvien: this.getInfoAccount(),
        tienno: this.form.tienno,
        tinhtrang: (this.tinhtrang ? "DACHUOC" : "CHUACHUOC"),
        thoihancam: (this.form.ThoiHanCam),
        ngayhethan: ngayhethan,
        diachi: this.form.diachi
      }
      await this.$strapi.$hopdongs.update(this.id, hopdong1)
      //them thanh dong

      this.messageCreate = "Cập nhật chứng từ"
      //cap nhat chungtu
      //neu thay doi so tien se cap nhat vao chung tu
      if (this.hopdongGoc.sotien != this.form.SoTien) {
        let j = parseInt(this.hopdongGoc.sotien) - parseInt(this.form.SoTien);
        let chungtu = {
          hopdong_id: this.id,
          diendai: (j > 0) ? "THU" : "CHI",
          ghichu: (j > 0) ? "TRẢ VÀO TIỀN VỐN" : "LẤY THÊM TIỀN VỐN",
          sotien: j
        }
        await this.$strapi.$chungtus.create(chungtu)


        let nhatkihopdong = {
          hopdong_id: this.id,
          account: this.getInfoAccount(),
          SoTien: j,
          Ten: 'SUAHOPDONG'
        }
        await this.$strapi.$nhatkihopdongs.create(nhatkihopdong)
      }
      //SOTIENNO
      if (this.hopdongGoc.tienno != this.form.tienno) {
        let j = parseInt(this.hopdongGoc.tienno) - parseInt(this.form.tienno);
        let chungtu = {
          hopdong_id: this.id,
          diendai: (j > 0) ? "THU" : "CHI",
          ghichu: (j > 0) ? "TRẢ VÀO TIỀN NỢ" : "LẤY THÊM TIỀN NỢ",
          sotien: j
        }
        await this.$strapi.$chungtus.create(chungtu)

        let nhatkihopdong = {
          hopdong_id: this.id,
          account: this.getInfoAccount(),
          SoTien: j,
          Ten: 'SUAHOPDONG'
        }
        await this.$strapi.$nhatkihopdongs.create(nhatkihopdong)
      }
      //them vao notification
      this.messageCreate = "Cập nhật thông báo"
      let notification = {
        ten: 'HOPDONGTHAYDOI',
        account: this.getInfoAccount(),
        hopdong_id: this.id
      }
      await this.$strapi.$notifications.create(notification)
      //  
      this.show = false;
      window.location.replace('/hopdong/')

    },
    getInfoAccount () {
      let info = this.$cookies.get('info');

      return {
        account_id: info._id,
        name: info.username,
        RealName: info.RealName,
        phone: info.Phone,
      }
    }
  },
  async fetch () {
    let hopdong = await this.$strapi.$hopdongs.findOne(this.$route.params.id)
    this.hopdongGoc = hopdong;
    if (hopdong.tinhtrang === "CHUACHUOC") {
      this.tinhtrang = false
    } else {
      this.tinhtrang = true
    }
    this.form = {
      GhiChu: hopdong.ghichuhopdong,
      ThongTinTaiSan: hopdong.thongtinmondo,
      SoTien: hopdong.sotien,
      maso: hopdong.maso,
      SoDienThoai: hopdong.sodienthoai,
      tienno: hopdong.tienno,
      NgayCam: this.$moment(hopdong.ngaythe).format("YYYY-MM-DD"),
      kho: hopdong.kholuu,
      loaitaisan: hopdong.loaitaisan,
      ThoiHanCam: hopdong.thoihancam,
      TenNguoiCam: hopdong.tenkhach,
      laixuat: hopdong.laixuat,
      diachi: hopdong.diachi
    }
    //set select loaitaisan

  },
  computed: {
    sotienState () {
      return this.form.SoTien > 10000 ? true : false
    }
  },
  data () {
    return {
      messageCreate: '',
      tinhtrang: false,
      dongy: false,
      hopdong: null,
      id: this.$route.params.id,
      show: false,
      hopdongGoc: {},
      form: {
        GhiChu: "",
        ThongTinTaiSan: "",
        SoTien: 0,
        maso: '',
        SoDienThoai: 'Không',
        tienno: 0,
        NgayCam: '',
        kho: '',
      },
    }
  }
}
</script>
<style>
</style>