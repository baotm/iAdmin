<template>
  <div class="card">
    <div class="card-header">
      <h4 class="card-title">Trung Tâm Thông Báo</h4>
    </div>
    <div class="card-body">
      <div class="d-flex">
        <ul
          class="nav nav-tabs flex-column"
          id="myTabVertical"
          role="tablist"
        >
          <li class="nav-item">
            <a
              class="nav-link active"
              id="home-tab-vertical"
              data-toggle="tab"
              href="#home-vertical"
              role="tab"
              aria-controls="home-vertical"
              aria-selected="true"
            >Hợp Đồng</a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              id="profile-tab-vertical"
              data-toggle="tab"
              href="#profile-vertical"
              role="tab"
              aria-controls="profile-vertical"
              aria-selected="false"
            >Truy Cập</a>
          </li>

        </ul>
        <b-overlay
          :show="show"
          class="col-10"
        >
          <div
            class="tab-content m-l-50"
            id="myTabContentVertical"
          >
            <!-- thongbao hopdong -->

            <div
              class="tab-pane fade show active"
              id="home-vertical"
              role="tabpanel"
              aria-labelledby="home-tab-vertical"
            >
              <b-table
                :busy="isBusy"
                :per-page="perPage"
                :current-page="currentPage"
                table-variant
                outlined
                show-empty
                :items="thongbao_hopdong"
                :fields="thongbao_hopdong_fields"
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
                <template #cell(hopdong)="data">

                  <nuxt-link :to="{ path: '/hopdong/'+data.item.hopdong_id}">
                    {{data.item.hopdong_id}}
                  </nuxt-link>

                </template>
                <template #cell(account)="data">
                  <nuxt-link :to="{ path: '/account/'+data.item.account.account_id}">
                    {{ data.item.account.RealName}}
                  </nuxt-link>
                </template>
                <template #cell(ten)="data">
                  <span
                    v-if="data.item.ten==='HOPDONGMOI'"
                    class="badge badge-secondary"
                  >{{data.item.ten}}</span>
                  <span
                    v-if="data.item.ten==='HOPDONGDONGLAI'"
                    class="badge badge-success"
                  >{{data.item.ten}}</span>
                  <span
                    v-if="data.item.ten==='HOPDONGKETHUC'"
                    class="badge badge-warning"
                  >{{data.item.ten}}</span> <span
                    v-if="data.item.ten==='HOPDONGTHAYDOI'"
                    class="badge badge-warning"
                  >{{data.item.ten}}</span> <span
                    v-if="data.item.ten==='HOPDONGXOA'"
                    class="badge badge-danger"
                  >{{data.item.ten}}</span>
                </template>
                <template #cell(createdAt)="data">
                  <code>{{ formatNgayDiff(data.item.createdAt ) }}</code>
                </template>
                <template #cell(cachday)="data">
                  <code> {{ formatNgay(data.item.createdAt ) }}</code>
                </template>
                <template #cell(see)="data">
                  <b-form-checkbox
                    v-model="data.item.see"
                    switch
                    size="lg"
                    @change="changeTinhTrang(data.item._id,data.item.see)"
                  ></b-form-checkbox>
                </template>
              </b-table>
              <b-pagination
                :total-rows="totalItems"
                v-model="currentPage"
                :per-page="perPage"
                align="right"
              ></b-pagination>
            </div>
            <!-- thongbao truycap -->
            <div
              class="tab-pane fade"
              id="profile-vertical"
              role="tabpanel"
              aria-labelledby="profile-tab-vertical"
            >
              ...
            </div>

          </div>
        </b-overlay>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async fetch () {
    let temp;
    let control = this.$route.params.id;
    if (control == "tatca") {
      temp = await this.$strapi.$notifications.find();
    } else if (control == 'dadoc') {
      temp = await this.$strapi.$notifications.find({ see: true });
    } else {
      temp = await this.$strapi.$notifications.find({ see: false });
    }

    if (control == "moi") {
      this.thongbao_hopdong = temp.filter(item => item.ten === 'HOPDONGMOI')
    } else if (control == "donglai") {
      this.thongbao_hopdong = temp.filter(item => item.ten === 'HOPDONGDONGLAI')
    } else if (control == "chuoc") {
      this.thongbao_hopdong = temp.filter(item => item.ten === 'HOPDONGKETHUC')
    } else if (control == "xoa") {
      this.thongbao_hopdong = temp.filter(item => item.ten === 'HOPDONGXOA')
    } else if (control == "sua") {
      this.thongbao_hopdong = temp.filter(item => item.ten === 'HOPDONGTHAYDOI')
    } else {
      this.thongbao_hopdong = temp;
    }

    this.totalItems = this.thongbao_hopdong.length
    this.isBusy = false
  },
  methods: {
    formatNgay (x) {
      return this.$moment(x).format('DD-MM-YYYY')
    },
    formatNgayDiff (x) {
      let a = this.$moment(x)
      let b = this.$moment(Date.now())

      let duration = this.$moment.duration(b.diff(a));
      let hours = parseInt(duration.asHours());
      let minutes = parseInt(duration.asMinutes()) - hours * 60;

      return hours + 'h:' + minutes + 'p';
    },
    async changeTinhTrang (id, state) {
      this.isBusy = true;
      //   this.show = true;
      let d = {
        see: (state) ? true : false
      }
      let a = await this.$strapi.$notifications.update(id, d);
      // this.show = false
      window.location.reload();
    }
  },
  data () {
    return {
      show: false,
      isBusy: true,
      //filter
      filter: null,
      filterOn: [],
      //paging
      currentPage: 1,
      perPage: 10,
      totalItems: 0,
      thongbao_hopdong: [],
      thongbao_hopdong_fields: [

        { key: 'stt', label: '#' },
        { key: 'account', label: 'Account' },
        { key: 'hopdong', label: 'Hợp Đồng' },
        { key: 'ten', label: 'Kiểu Thông Báo' },
        { key: 'cachday', label: 'Thời Gian' },
        { key: 'createdAt', label: 'Cách' },
        { key: 'see', label: 'Tình Trạng' }
      ]
    }
  }
}
</script>

<style>
</style>