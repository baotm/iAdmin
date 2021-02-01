<template>
  <div v-if="dataReady">
    <div class="card">
      <div class="card-body">
        <div class="row">
          <div class="col-6">
            <h4>Danh Sách Review</h4>
            <p>Danh sách các review trên <code>Hợp đồng</code> bao gồm tình trạng điểm số và lỗi.</p>
          </div>
          <div class="col-3">
            <div
              class="btn-group"
              style="float:right"
            >
              <button
                @click="deleteReview"
                class="btn btn-icon btn-danger"
              >
                <i class="anticon anticon-delete"></i>
              </button>
              <button class="btn btn-icon btn-warning">
                <i class="anticon anticon-edit"></i>
              </button>

            </div>
          </div>
          <div class="col-3">
            <div class="row">
              <div class="col-6">
                <div class="text-md-right">

                  <select
                    class="custom-select"
                    v-model="perPage"
                    @change="getListData(0)"
                  >
                    <option
                      selected
                      value="10"
                    >10 kết quả</option>

                    <option value="50">50 kết quả</option>
                    <option value="9999999999">Tất cả</option>
                  </select>
                </div>

              </div>
              <div class="col-6">
                <div class="text-md-right">
                  <select
                    v-model="sortType"
                    class="custom-select"
                    @change="changeLoc"
                  >
                    <option
                      selected
                      value="ASC"
                    >Cũ Nhất</option>
                    <option value="DESC">Mới Nhất</option>
                  </select>
                </div>

              </div>
            </div>

          </div>
        </div>
        <div class="m-t-25">
          <div class="table-responsive">

            <b-table
              show-empty
              :current-page="currentPage"
              :per-page="perPage"
              :items="paginatedItems"
              :fields="fields"
              select-mode="single"
              selectable
              @row-selected="onRowSelected"
            >
              <template #cell(stt)="data">
                <nuxt-link :to="{ path: '/review/'+data.item._id}">
                  {{ data.index + 1 }}
                </nuxt-link>
              </template>
              <template #cell(action)>
                <i class="anticon anticon-arrow-right text-danger"></i>
              </template>

              <template #cell(accountreview)="data">
                <nuxt-link :to="{ path: '/account/'+data.item.accountreview.accountid}">
                  {{data.item.accountreview.RealName}}
                </nuxt-link>
              </template>
              <template #cell(hopdongid)="data">
                <nuxt-link :to="{ path: '/hopdong/'+data.item.hopdongid}">
                  Hợp Đồng
                </nuxt-link>
              </template>
              <template #cell(accountedit)="data">
                <nuxt-link :to="{ path: '/account/'+data.item.accountedit.account_id}">
                  {{data.item.accountedit.RealName}}
                </nuxt-link>
              </template>
              <template #cell(score)="data">

                {{data.item.score}}/12
                <span
                  class="badge badge-dot m-r-10 blink_me"
                  :class="[(data.item.score<12)?'badge-danger':'badge-primary']"
                ></span>
              </template>
            </b-table>
          </div>
        </div>
        <br />
        <b-pagination
          class="mt-10"
          :total-rows="totalItems"
          :per-page="perPage"
          first-text="Đầu"
          prev-text="Lùi"
          next-text="Tới"
          last-text="Cuối"
          @change="onPageChanged"
        ></b-pagination>

      </div>
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
      listReview: [],
      fields: [
        { key: 'Stt', label: '#' },
        { key: 'accountedit', label: 'Account Edit' },
        { key: 'action', label: '' },
        { key: 'hopdongid', label: 'Hợp đồng' },
        { key: 'accountreview', label: 'Account Duyệt' },
        {
          key: 'createdAt',
          label: 'Ngày Review',
          formatter: (value, key, item) => {
            return this.$moment(item.createdAt).format('DD-MM-YYYY hh-mm-ss')
          }
        },
        { key: 'score', label: 'Điểm', sortable: true },
        { key: 'ghichu', label: 'Ghi Chú' },
      ],
      dataReady: false,
      totalItems: 0,
      items: [],
      paginatedItems: [],
      currentPage: 1,
      perPage: 10,
      sortType: 'DESC',
      selected: [],
    }
  },
  methods: {
    deleteReview () {
      if (this.selected.length > 0) {
        this.$dialog.confirm('Bạn muốn xóa review này').then(async () => {
          let id = this.selected[0]._id
          await this.$strapi.$reviews.delete(id);
          window.location.reload();
        })
      } else {
        this.$dialog.alert('Vui lòng chọn 1 dòng', {
          loader: false
        });
      }
    },
    editReview () {
      if (this.selected.length > 0) {

        this.$dialog.confirm('Bạn muốn chỉnh lại review này').then(async () => {
          let id = this.selected[0]._id
          await this.$strapi.$reviews.delete(id);
          window.location.reload();
        })
      } else {
        this.$dialog.alert('Vui lòng chọn 1 dòng', {
          loader: false
        });
      }
    },
    onRowSelected (items) {
      this.selected = items
    },
    changeLoc () {
      this.getListData(0)
    },
    onPageChanged (page) {
      this.getListData((page - 1) * this.perPage)
    },
    async getListData (start) {
      let result = await this.$strapi.$reviews.find({ _limit: this.perPage, _start: start, _sort: 'createdAt:' + this.sortType })
      this.paginatedItems = result;
    }
  },
  async mounted () {

    this.getListData(0);
    this.totalItems = await this.$strapi.$reviews.count();
    console.log(this.listReview)
    this.dataReady = true;
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