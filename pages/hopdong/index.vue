<template>
  <div class="card">
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
                <i class="anticon anticon-reload font-size-20"></i>
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
            lg="6"
          >
            <b-form-group label="Tìm Kiếm Theo Tên">
              <b-input-group>
                <b-form-input
                  type="search"
                  id="filterInput"
                  placeholder="Type to Search"
                  v-model="filter"
                  autocomplete="off"
                ></b-form-input>
                <b-input-group-append>
                  <b-button>Clear</b-button>
                </b-input-group-append>
              </b-input-group>
            </b-form-group>
          </b-col>
          <b-col lg="6">
            <b-form-group
              label="Tìm trong"
              description="Bỏ trống sẽ kích hoạt tìm tất cả các thông tin"
              class="mb-0"
            >
              <b-form-checkbox-group
                v-model="filterOn"
                class="mt-1"
              >
                <b-form-checkbox value="Account">Tên</b-form-checkbox>
                <b-form-checkbox value="Type">Kiểu Truy Cập</b-form-checkbox>
                <b-form-checkbox value="I">Địa Chỉ IP</b-form-checkbox>
              </b-form-checkbox-group>
            </b-form-group>
          </b-col>
        </b-row>

        <b-table
          show-empty
          :fields="fields"
          borderless
          outlined
          fixed
          table-variant
          hover
          :items="hopdongs"
          :per-page="perPage"
          :current-page="currentPage"
          :busy="isBusy"
        >
          <template #table-busy>
            <div class="text-center text-danger my-2">
              <b-spinner class="align-middle"></b-spinner>
              <strong>Lấy dữ liệu...</strong>
            </div>
          </template>

          <template #cell(stt)="data">
            {{ data.index + 1 }}
          </template>

          <template #cell(maso)="data">

            <nuxt-link :to="{ path: '/hopdong/'+data.item._id}">
              {{data.item.maso}}
            </nuxt-link>

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
  </div>
</template>

<script>
export default {
  data () {
    return {
      isBusy: true,
      //filter
      filter: null,
      filterOn: [],
      //paging
      currentPage: 1,
      perPage: 10,
      totalItems: 0,
      fields: [
        { key: 'Stt', label: '#' },
        { key: 'tenkhach', label: 'Tên Khách', sortable: true },
        { key: 'sotien', label: 'Số Tiền', sortable: true },
        { key: 'loaitaisan', label: 'T/S', sortable: true },
        { key: 'tinhtrang', label: 'T/T', sortable: true },
        { key: 'ngaythe', label: 'Ngày Thế', sortable: true },
        { key: 'maso', label: 'Mã', sortable: true },

      ],
      hopdongs: []
    }
  },
  async fetch () {
    this.hopdongs = await this.$strapi.$hopdongs.find();
    this.totalItems = this.hopdongs.length
    this.isBusy = false
  },
  methods: {
  }
}
</script>

<style>
</style>