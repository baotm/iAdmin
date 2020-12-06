<template>
  <div class="card">
    <div class="card-body">
      <h4>Danh Sách Chứng Từ</h4>
      <p>Toàn Bộ <code>Thông Tin</code> của chứng từ như <code>THU</code><code>CHI</code> đều nằm ở đây</p>
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
          borderless
          outlined
          fixed
          table-variant
          hover
          :fields="fields"
          :items="chungtu"
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

          <template #cell(type)="data">
            <span
              v-if="data.item.diendai==='THU'"
              class="badge badge badge-success"
              style="width:6rem"
            > {{ data.item.diendai }}</span>
            <span
              v-else
              class="badge badge badge-info"
              style="width:6rem"
            > {{ data.item.diendai }}</span>

          </template>

          <template #cell(sotien)="data">
            <code>{{formatNumber(Math.abs(data.item.sotien))}}</code>

          </template>

          <template #cell(ghichu)="data">

            <code class="">
              {{ data.item.ghichu }}
            </code>
          </template>

          <template #cell(hopdong)="data">
            <h3>
              <nuxt-link
                class="badge badge-primary text-wrap"
                :to="{ path: '/hopdong/'+data.item.hopdong_id}"
              >
                <i class="anticon anticon-eye"></i>
              </nuxt-link>
            </h3>
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
        { key: 'type', label: 'Phân Loại', sortable: true },
        {
          key: 'thoigian', label: 'Truy Cập', sortable: true,
          formatter: (value, key, item) => {
            return this.$moment(item.createdAt).format('DD-MM-YYYY')
          }
        },

        { key: 'ghichu', label: 'Ghi Chú', sortable: true },

        { key: 'sotien', label: 'Số Tiền', sortable: true },

        { key: 'hopdong', label: 'Hợp Đồng', sortable: true },

      ],
      chungtu: []
    }
  },
  async fetch () {

    this.chungtu = await this.$strapi.$chungtus.find();
    this.totalItems = this.chungtu.length
    this.isBusy = false
  },
  methods: {
    formatNumber (x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
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