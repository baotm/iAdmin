<template>
  <div v-if="dataReady">

    <div class="card">
      <b-overlay :show="showPage">
        <div class="card-body">
          <div class="d-flex align-items-center justify-content-between m-b-15">
            <h4 class="m-b-0">Toàn bộ hợp đồng</h4>
            <div class="card-toolbar">

              <ul>
                <li>
                  <a
                    class="text-gray"
                    href="javascript:void(0)"
                  >
                    <i
                      class="anticon anticon-reload font-size-20"
                      v-on:click="refeshPage"
                    ></i>
                  </a>
                </li>

                <li>

                  <div class="dropdown dropdown-animated scale-left">

                    <a
                      class="text-gray"
                      href="javascript:void(0)"
                      data-toggle="dropdown"
                    >
                      <i class="anticon anticon-ellipsis font-size-20"></i>
                    </a>

                    <div class="dropdown-menu">
                      <button
                        class="dropdown-item"
                        type="button"
                      >Kiểu tóm tắt</button>
                      <button
                        class="dropdown-item"
                        type="button"
                      >Kiểu Đầy đủ </button>
                    </div>
                  </div>

                </li>
              </ul>
            </div>
          </div>
          <div class="m-t-25">
            <b-row>
              <b-col
                class="my-1"
                lg="3"
              >
                <b-form-group label="Tìm Kiếm Theo Tên">
                  <b-input-group>
                    <b-form-input
                      type="search"
                      id="filterInput"
                      placeholder="tìm ..."
                      v-model="filter"
                      autocomplete="off"
                    ></b-form-input>

                  </b-input-group>
                </b-form-group>
              </b-col>
              <b-col lg="4">
                <b-form-group
                  label="Tìm trong"
                  description="Bỏ trống sẽ kích hoạt tìm tất cả các thông tin"
                  class="mb-0"
                >
                  <b-form-checkbox-group
                    v-model="filterOn"
                    class="mt-1"
                  >
                    <b-form-checkbox value="tenkhach">Tên</b-form-checkbox>
                    <b-form-checkbox value="maso">Mã số</b-form-checkbox>
                    <b-form-checkbox value="sotien">Số tiền</b-form-checkbox>
                    <b-form-checkbox value="tienno">Tiền nợ</b-form-checkbox>

                  </b-form-checkbox-group>
                </b-form-group>
              </b-col>
              <b-col
                class="my-1"
                lg="2"
              >
                <b-form-group label="Loại Hàng Hiển thị">

                  <b-form-checkbox-group
                    v-model="show_loaitaisan"
                    class="mt-1"
                  >
                    <b-form-checkbox value="vang">Vàng</b-form-checkbox>
                    <b-form-checkbox value="xe">Xe</b-form-checkbox>

                  </b-form-checkbox-group>
                </b-form-group>

              </b-col>
              <b-col
                class="my-1"
                lg="3"
              >
                <b-form-group label="Tình Trạng">

                  <b-form-checkbox-group
                    v-model="show_tinhtrang"
                    class="mt-1"
                  >
                    <b-form-checkbox value="dachuoc">Đã chuộc</b-form-checkbox>
                    <b-form-checkbox value="chuachuoc">Chưa Chuộc</b-form-checkbox>

                  </b-form-checkbox-group>
                </b-form-group>

              </b-col>
            </b-row>
            <b-row>
              <b-col
                class="my-1"
                lg="12"
              >

              </b-col>

            </b-row>
            <b-table
              show-empty
              :fields="fields"
              borderless
              outlined
              empty-text="Không có hợp đồng nào..."
              empty-filtered-text="Không có kết quả..."
              fixed
              table-variant
              hover
              filterOn:
              :filter-included-fields="filterOn"
              :filter="filter"
              :items="listhopdong"
              :per-page="perPage"
              :current-page="currentPage"
              :busy="isBusy"
              style="cursor: pointer"
            >
              <template #table-busy>
                <div class="text-center text-danger my-2">
                  <b-spinner class="align-middle"></b-spinner>
                  <strong>Lấy dữ liệu...</strong>
                </div>
              </template>

              <template #cell(stt)="data">

                <nuxt-link :to="{ path: '/hopdong/'+data.item._id}">
                  {{ data.index + 1 }}
                </nuxt-link>

              </template>

              <template #cell(sotien)="data">
                {{ formatNumber(data.item.sotien) }}
              </template>
              <template #cell(loaitaisan)="data">

                <span v-if="data.item.loaitaisan==='VANG'">
                  <div
                    class="badge badge-pill badge-warning text-wrap text-center"
                    style="width: 6rem;"
                  >
                    {{data.item.loaitaisan}}
                  </div>
                </span>
                <span v-else-if="data.item.loaitaisan==='XE'">

                  <div
                    class="badge badge-pill badge-info text-wrap text-center"
                    style="width: 6rem;"
                  >
                    {{data.item.loaitaisan}}
                  </div>

                </span>

                <span v-else-if="data.item.loaitaisan==='DIENTHOAI'">

                  <div
                    class="badge badge-pill badge-success text-wrap text-center"
                    style="width: 6rem;"
                  >
                    {{data.item.loaitaisan}}
                  </div>

                </span>

                <span v-else>

                  <div
                    class="badge badge-pill badge-primary text-wrap text-center"
                    style="width: 6rem;"
                  >
                    {{data.item.loaitaisan}}
                  </div>
                </span>

              </template>

              <template #cell(ngaythe)="data">
                {{ formatDay(data.item.ngaythe)}}
              </template>
              <template #cell(maso)="data">

                <nuxt-link :to="{ path: '/hopdong/'+data.item._id}">
                  {{data.item.maso}}
                </nuxt-link>

              </template>
              <template #cell(tienno)="data">

                {{formatNumber(data.item.tienno)}}

              </template>
              <template #cell(tinhtrang)="data">
                <span v-if="data.item.tinhtrang==='CHUACHUOC'">
                  <div
                    class="badge badge-pill badge-info text-wrap text-center blink_me"
                    style="width: 6rem;"
                  >
                    {{data.item.tinhtrang}}
                  </div>
                </span>
                <span v-else>
                  <div
                    class="badge badge-pill badge-success text-wrap text-center blink_me"
                    style="width: 6rem;"
                  >
                    {{data.item.tinhtrang}}
                  </div>
                </span>

              </template>
            </b-table>
            <b-pagination
              :total-rows="totalItems"
              v-model="currentPage"
              :per-page="perPage"
              align="right"
            ></b-pagination>
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
      showPage: false,
      isBusy: true,

      //filter
      filter: null,
      filterOn: null,
      //paging
      currentPage: 1,
      perPage: 20,
      totalItems: 0,
      fields: [
        { key: 'Stt', label: '#' },
        { key: 'tenkhach', label: 'Tên Khách', sortable: true },
        { key: 'sotien', label: 'Số Tiền', sortable: true },
        { key: 'loaitaisan', label: 'T/S', sortable: true },
        { key: 'tinhtrang', label: 'T/T', sortable: true },
        { key: 'ngaythe', label: 'Ngày Thế', sortable: true },
        { key: 'maso', label: 'Mã', sortable: true },
        { key: 'tienno', label: 'Tiền Nợ', sortable: true },


      ],
      filterOn: [],
      hopdongs: [],
      show_loaitaisan: ['vang', 'xe'],
      show_tinhtrang: ['chuachuoc', 'dachuoc']
    }
  },
  async fetch () {
    this.hopdongs = await this.$strapi.$hopdongs.find();
    this.totalItems = this.hopdongs.length
    this.isBusy = false
    this.dataReady = true
  },
  methods: {
    formatDay (x) {
      return this.$moment(x).format('DD-MM-YYYY')
    },
    formatNumber (x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    refeshPage () {
      this.showPage = true
      window.location.reload();
    }
  },
  computed: {
    listhopdong () {
      var filter = {
        loaitaisan: this.show_loaitaisan,
        tinhtrang: this.show_tinhtrang,
      };
      let items;
      items = this.hopdongs.filter((item) => {
        for (let i = 0; i < filter.loaitaisan.length; i++) {
          if (item.loaitaisan.toUpperCase() == filter.loaitaisan[i].toUpperCase()) {
            return true;
          }

        }
      })

      items = items.filter((item) => {

        for (let i = 0; i < filter.tinhtrang.length; i++) {
          if (item.tinhtrang.toUpperCase() == filter.tinhtrang[i].toUpperCase()) {
            return true;
          }

        }
      })

      console.log(items)

      return items;
    }
  },
  watch: {
    show_loaitaisan () {
      //change item
    }
  }
}
</script>

<style scoped>
.blink_me {
  animation: blinker 1s linear infinite;
}

@keyframes blinker {
  50% {
    opacity: 0;
  }
}
</style>