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
              <h6 class="mb-0">Ảnh Đang Chờ Thêm Thông tin ({{totalRows}})</h6>

              <span class="text-gray font-size-13">Picture Processing

              </span>

            </div>

          </div>
        </div>

        <div class="col-md-2">
          <div class="text-md-right">

            <select
              class="custom-select"
              @change="changeLoc"
              v-model="perPage"
            >
              <option
                selected
                value="4"
              >4 ảnh</option>
              <option value="8">8 ảnh</option>
              <option value="12">12 ảnh</option>
              <option value="16">16 ảnh</option>
              <option value="20">20 ảnh</option>
              <option value="24">24 ảnh</option>
              <option value="50">50 ảnh</option>
              <option value="9999999999">Tất cả</option>
            </select>
          </div>

        </div>
        <div class="col-md-2">
          <div class="text-md-right">
            <select
              class="custom-select"
              @change="changeLoc"
              v-model="sortType"
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
    <div class="row">
      <b-overlay :show="pictureReady">
        <div class="col-lg-11 mx-auto">
          <!-- Card View -->

          <div
            class="row"
            id="card-view"
            v-if="paginatedItems.length>0"
          >
            <div
              class="col-md-3"
              :key="index"
              v-for="(hinhanh, index) in paginatedItems"
            >
              <div>

                <div class="card">
                  <b-img-lazy
                    class="card-img-top"
                    :src='hinhanh.hinhanh.url'
                    fluid
                    thumbnail
                    rounded
                    center
                    blank-color="#777"
                  >

                  </b-img-lazy>

                  <div class="card-body">

                    <div class="d-flex align-items-center justify-content-between">
                      <p class="m-b-0 text-dark font-weight-semibold font-size-10">{{$moment(hinhanh.createdAt).format('DD-MM-YYYY hh:mm:ss')}}</p>

                      <nuxt-link
                        class="text-primary btn btn-sm btn-hover"
                        :to="{ path: '/hopdong/new/'+hinhanh._id}"
                      >
                        <i
                          class="anticon anticon-edit"
                          style="color: #ffc107"
                        ></i>
                      </nuxt-link>

                    </div>
                  </div>

                </div>

              </div>
            </div>

          </div>
          <div
            class="row"
            v-else
          >
            <p>Không có dữ liệu...</p>
          </div>
        </div>
        <div class="col-12 mx-auto">
          <b-pagination
            align="right"
            v-if="paginatedItems.length>0 "
            @change="onPageChanged"
            :total-rows="totalRows"
            :per-page="perPage"
            v-model="currentPage"
            first-text="Đầu"
            prev-text="Lùi"
            next-text="Tiếp"
            last-text="Cuối"
          />
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
      countView: 4,
      pictureReady: false,
      dataReady: false,
      listHinhAnh: [],
      items: [],
      paginatedItems: [],
      currentPage: 1,
      perPage: 4,
      totalRows: 0,
      sortType: 'DESC'
    }
  },
  async fetch () {
    //lay tong so hinh anh
    this.totalRows = await this.$strapi.$hinhanhs.count({ tinhtrang: false });
    this.getListImage(this.currentPage)
    this.dataReady = true;

  },
  methods: {

    async getListImage (currentPage) {
      if (currentPage == 1) {
        currentPage = 0;
      }
      this.pictureReady = true;
      this.paginatedItems = await this.$strapi.$hinhanhs.find({ _start: (currentPage), _limit: this.perPage, _sort: "createdAt:" + this.sortType, tinhtrang: false })
      this.pictureReady = false;

    },
    onPageChanged (page) {
      this.getListImage((page - 1) * this.perPage)
    },
    changeLoc () {
      this.getListImage(this.currentPage)
    }
  },
}
</script>

<style scoped>
</style>