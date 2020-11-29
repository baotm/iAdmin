<template>
  <div class="card">
    <div class="card-body">
      <h4>Nhật Kí Truy Cập Hệ Thống</h4>
      <p>Bảng ghi lại các quá trình truy cập hệ thống, dùng để so sánh, đánh giá đối chiếu các user,phân tích hành động của các user, nhằm bảo toàn tính bảo mật hệ thống</p>
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
          :items="logs"
          :per-page="perPage"
          :current-page="currentPage"
          :filter="filter"
          :filter-included-fields="filterOn"
          @filtered="onFiltered"
          :busy="isBusy"
        >
          <template #table-busy>
            <div class="text-center text-danger my-2">
              <b-spinner class="align-middle"></b-spinner>
              <strong>Lấy dữ liệu...</strong>
            </div>
          </template>

          <template #cell(account)="data">

            <nuxt-link :to="{ path: '/account/'+data.item.accounts._id}">
              {{data.item.accounts.RealName}}
            </nuxt-link>

          </template>

          <template #cell(stt)="data">
            {{ data.index + 1 }}
          </template>
          <template #cell(type)="data">
            <span v-if="data.item.type==='DANGNHAP'">
              <b-badge variant="danger">Đăng Nhập</b-badge>
            </span>
            <span v-else>
              <b-badge variant="primary">Đăng Xuất</b-badge>
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
  </div>
</template>

<script>

export default {

  data () {
    return {
      //busy
      isBusy: true,
      //filter
      filter: null,
      filterOn: [],
      //paging
      currentPage: 1,
      perPage: 10,
      totalItems: 0,
      fields: [
        { key: 'Stt', label: 'Stt' },
        { key: 'account', label: 'Account', sortable: true },
        { key: 'type', label: 'Phân Loại', sortable: true },
        {
          key: 'thoigian', label: 'Truy Cập', sortable: true,
          formatter: (value, key, item) => {
            return this.$moment(item.createdAt).format('DD-MM-YYYY hh:mm:ss')
          }
        },
        { key: 'ip', label: 'IP', sortable: true },

      ],
      logs: []
    }
  },
  async fetch () {

    this.logs = await this.$strapi.$nhatkitruycaps.find();
    this.totalItems = this.logs.length
    this.isBusy = false
  },
  methods: {
    onFiltered (filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length
      this.currentPage = 1
    },
    async getAccounts (id) {
      this.$strapi.$accounts.findOne(
        id.item.account_id
      ).then(data => {
        return data;
      })
    }
  }
}

</script>

<style>
</style>