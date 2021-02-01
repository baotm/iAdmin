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
              <h6 class="mb-0">Tất cả hình ảnh ({{totalRows}})</h6>

              <span class="text-gray font-size-13">Media Gallery Manager (<strong style="color:#00c9a7">{{count_daxuly}}</strong>-<strong style="color:#ffc107">{{count_chuaxuly}}</strong>-<strong style="color:#0EE1FD">{{this.listHinhAnh.length}}</strong>)

              </span>

            </div>

          </div>
        </div>
        <div class="col-md-2">
          <div class="text-md-right m-v-10">

            <div class="btn-group m-r-10">
              <button
                type="button"
                class="btn btn-default btn-icon"
                title="Đã Xử Lý"
                @click="showItem('daxuly')"
              >
                <i class="anticon anticon-ordered-list"></i>
              </button>

              <button
                id="card-view-btn"
                type="button"
                class="btn btn-default btn-icon"
                title="Chưa Xử Lý"
                @click="showItem('chuaxuly')"
              >
                <i class="anticon anticon-appstore"></i>
              </button>
              <button
                id="card-view-btn"
                type="button"
                class="btn btn-default btn-icon"
                title="Tất Cả"
                @click="showItem('all')"
              >
                <i class="anticon anticon-eye"></i>
              </button>
            </div>

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
                    <p>Xử Lý: <span>
                        <i
                          class="anticon font-size-15"
                          :class="[hinhanh.tinhtrang?'anticon-check':'anticon-close',hinhanh.tinhtrang?'class_xuly':'class_chuaxuly']"
                        ></i>
                      </span></p>

                    <div class="d-flex align-items-center justify-content-between">
                      <p class="m-b-0 text-dark font-weight-semibold font-size-10">{{$moment(hinhanh.createdAt).format('DD-MM-YYYY hh:mm:ss')}}</p>

                      <nuxt-link
                        class="btn btn-sm btn-hover"
                        v-if="hinhanh.tinhtrang"
                        :to="{ path: '/hopdong/'+hinhanh.hopdongid}"
                      >
                        <i
                          class="anticon anticon-arrow-right"
                          style="color:#00c9a7;"
                        ></i>
                      </nuxt-link>
                      <nuxt-link
                        class="text-primary btn btn-sm btn-hover"
                        :to="{ path: '/hinhanh/'+hinhanh._id}"
                      >
                        <i
                          class="anticon anticon-edit"
                          style="color: #ffc107"
                        ></i>
                      </nuxt-link>
                      <a
                        href="#"
                        class="text-primary btn btn-sm btn-hover"
                        @click="deleteHinhAnh(hinhanh._id)"
                      >
                        <i
                          class="anticon anticon-delete"
                          style="color: red"
                        ></i>

                      </a>
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
            v-if="paginatedItems.length>0"
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
      pictureReady: false,
      dataReady: false,
      listHinhAnh: [],
      items: [],
      paginatedItems: [],
      currentPage: 1,
      perPage: 4,
      totalRows: 0,
      count_chuaxuly: 0,
      count_daxuly: 0,
      sortType: 'DESC',
      tinhtrang: 'all'
    }
  },
  async fetch () {
    //lay tong so hinh anh
    this.totalRows = await this.$strapi.$hinhanhs.count();
    this.getListImage(this.currentPage)
    this.count_daxuly = await this.$strapi.$hinhanhs.count({ tinhtrang: true })
    this.count_chuaxuly = this.totalRows - this.count_daxuly;
    this.dataReady = true;

  },
  methods: {

    async getListImage (currentPage) {
      this.pictureReady = true;
      switch (this.tinhtrang) {
        case "all": {
          this.paginatedItems = await this.$strapi.$hinhanhs.find({ _start: (currentPage), _limit: this.perPage, _sort: "createdAt:" + this.sortType })
          this.totalRows = await this.$strapi.$hinhanhs.count()
        } break;
        case "true": {
          this.paginatedItems = await this.$strapi.$hinhanhs.find({ _start: (currentPage), _limit: this.perPage, _sort: "createdAt:" + this.sortType, tinhtrang: true })
          this.totalRows = await this.$strapi.$hinhanhs.count({ tinhtrang: true })
        } break;
        case "false": {
          this.paginatedItems = await this.$strapi.$hinhanhs.find({ _start: (currentPage), _limit: this.perPage, _sort: "createdAt:" + this.sortType, tinhtrang: false })
          this.totalRows = await this.$strapi.$hinhanhs.count({ tinhtrang: false })
        } break;

      }

      this.pictureReady = false;

    },
    deleteHinhAnh (id) {
      this.$dialog.confirm()
        .then(async (dialog) => {
          await this.$strapi.$hinhanhs.delete(id);
          window.location.reload();
        })
    },
    onPageChanged (page) {
      this.getListImage((page - 1) * this.perPage)
    },
    changeLoc () {
      this.getListImage(this.currentPage)
    },
    async showItem (action) {

      switch (action) {
        case 'daxuly': {
          this.tinhtrang = "true"
        } break;
        case 'chuaxuly': {
          this.tinhtrang = "false"
        } break;
        case 'all': {
          this.tinhtrang = "all"
        }
      }
      this.onPageChanged(this.currentPage)
    }
  },
}
</script>

<style scoped>
.makeOnline {
  animation: blinker 1s linear infinite;
}
.class_xuly {
  color: #00c9a7;
}
.class_chuaxuly {
  color: #ffc107;
}
@keyframes blinker {
  50% {
    opacity: 0;
  }
}
</style>