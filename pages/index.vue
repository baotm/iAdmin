<template>

  <div v-if="dataReady">
    <!-- weather -->

    <!-- end weather -->
    <div class="page-header no-gutters m-t-15">
      <div class="d-md-flex align-items-md-center justify-content-between">
        <div class="media m-v-10 align-items-center">
          <div class="media align-items-center">
            <div class="avatar avatar-icon avatar-lg avatar-blue">
              <i class="anticon anticon-dollar"></i>
            </div>
            <div class="m-l-15">
              <h2 class="m-b-0">{{formatNumber(tienquy.sotien)}} VNĐ</h2>
              <p class="m-b-0 text-muted">Tồn quỹ</p>
            </div>
          </div>
        </div>
        <div class="d-md-flex align-items-center d-none">
          <div class="media align-items-center m-r-40 m-v-5">
            <div class="font-size-27">
              <i class="anticon anticon-calendar"></i>
            </div>
            <div class="d-flex align-items-center m-l-10">
              <h2 class="m-b-0 m-r-5"></h2>
              <span class="text-gray">{{getNgayHienTai}}</span>
            </div>
          </div>

          <div class="media align-items-center m-r-40 m-v-5 m-t-0">
            <!-- TradingView Widget BEGIN -->
            <div class="tradingview-widget-container">
              <div class="tradingview-widget-container__widget"></div>
              <div class="tradingview-widget-copyright"><a
                  href="https://vn.tradingview.com/symbols/OANDA-XAUUSD/"
                  rel="noopener"
                  target="_blank"
                ><span class="blue-text">XAUUSDBáo giá</span></a> bởi TradingView</div>
              <script
                type="text/javascript"
                src="https://s3.tradingview.com/external-embedding/embed-widget-single-quote.js"
                async
              >
              {
                "symbol": "OANDA:XAUUSD",
                "width": "100%",
                "height": "80%",
                "colorTheme": "light",
                "isTransparent": false,
                "locale": "vi_VN"
              }
              </script>
            </div>
            <!-- TradingView Widget END -->
          </div>
        </div>
      </div>
    </div>
    <!-- TradingView Widget BEGIN -->
    <div class="tradingview-widget-container">
      <div class="tradingview-widget-container__widget"></div>
      <div class="tradingview-widget-copyright"><a
          href="https://vn.tradingview.com"
          rel="noopener"
          target="_blank"
        ><span class="blue-text"> Ticker Tape</span></a> bởi TradingView</div>
      <script
        type="text/javascript"
        src="https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js"
        async
      >
      {
        "symbols": [{
            "description": "USD/VND",
            "proName": "FX_IDC:USDVND"
          },
          {
            "description": "CAD/VND",
            "proName": "CADVND"
          },
          {
            "description": "CHFVND",
            "proName": "CHFVND"
          },
          {
            "description": "CNYVND",
            "proName": "CNYVND"
          },
          {
            "description": "EURVND",
            "proName": "EURVND"
          },
          {
            "description": "GBP/VND",
            "proName": "GBPVND"
          },
          {
            "description": "HKD/VND",
            "proName": "HKDVND"
          },
          {
            "description": "JPYVND",
            "proName": "JPYVND"
          },
          {
            "description": "KRWVND",
            "proName": "KRWVND"
          },
          {
            "description": "SGBVND",
            "proName": "SGDVND"
          },
          {
            "description": "THBVND",
            "proName": "THBVND"
          }
        ],
        "showSymbolLogo": true,
        "colorTheme": "light",
        "isTransparent": false,
        "displayMode": "adaptive",
        "locale": "vi_VN"
      }
      </script>
    </div>
    <!-- TradingView Widget END -->

    <div class="row">
      <div class="col-lg-5">
        <div class="row">
          <div
            class="col-md-6"
            v-if="widget.hopdong"
          >
            <div class="card">
              <div class="card-body">
                <div class="d-flex justify-content-between align-items-center">
                  <div>
                    <p class="m-b-0 text-muted">Hợp Đồng</p>
                    <h2 class="m-b-0"> {{widget.hopdong.count}}</h2>
                  </div>
                  <span
                    class="badge badge-pill font-size-12"
                    :class="widget.hopdong.status=='UP'?'badge-cyan':'badge-red'"
                  >
                    <i
                      class="anticon "
                      :class="widget.hopdong.status=='UP'?'anticon-arrow-up':'anticon-arrow-down'"
                    ></i>

                    <span class="font-weight-semibold m-l-5">{{Math.ceil(widget.hopdong.percent)}}% </span>
                  </span>
                </div>
                <div class="m-t-40">
                  <div class="d-flex justify-content-between">
                    <div class="d-flex align-items-center">
                      <span class="badge badge-primary badge-dot m-r-10 blink_me"></span>
                      <span class="text-gray font-weight-semibold font-size-13">Mục tiêu {{widget.hopdong.count}}/{{$store.state.generalStore.muctieu.hopdong}} </span>
                    </div>
                    <span class="text-dark font-weight-semibold font-size-13">{{widget.hopdong.monthly}}% </span>
                  </div>
                  <div class="progress progress-sm w-100 m-b-0 m-t-10">
                    <div
                      class="progress-bar bg-primary"
                      :style="{'width':widget.hopdong.monthly+'%'}"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card">
              <div class="card-body">
                <div class="d-flex justify-content-between align-items-center">
                  <div>
                    <p class="m-b-0 text-muted">Số Tiền</p>
                    <h2 class="m-b-0">${{widget.sotien.count}}</h2>
                  </div>
                  <span
                    class="badge badge-pill font-size-12"
                    :class="widget.sotien.status=='UP'?'badge-cyan':'badge-red'"
                  >
                    <i
                      class="anticon "
                      :class="widget.sotien.status=='UP'?'anticon-arrow-up':'anticon-arrow-down'"
                    ></i>

                    <span class="font-weight-semibold m-l-5">{{Math.ceil(widget.sotien.percent)}}% </span>
                  </span>
                </div>
                <div class="m-t-40">
                  <div class="d-flex justify-content-between">
                    <div class="d-flex align-items-center">
                      <span class="badge badge-success badge-dot m-r-10 blink_me"></span>
                      <span class="text-gray font-weight-semibold font-size-13">{{widget.sotien.count}}/{{$store.state.generalStore.muctieu.sotien/1000000000}} Tỷ </span>
                    </div>
                    <span class="text-dark font-weight-semibold font-size-13">{{widget.sotien.monthly}}% </span>
                  </div>
                  <div class="progress progress-sm w-100 m-b-0 m-t-10">
                    <div
                      class="progress-bar bg-success"
                      :style="{'width':widget.sotien.monthly+'%'}"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="card">
              <div class="card-body">
                <div class="d-flex justify-content-between align-items-center">
                  <div>
                    <p class="m-b-0 text-muted">Đã Chuộc</p>
                    <h2 class="m-b-0">{{widget.dachuoc.count}}</h2>
                  </div>
                  <span
                    class="badge badge-pill font-size-12"
                    :class="widget.dachuoc.status=='UP'?'badge-cyan':'badge-red'"
                  >
                    <i
                      class="anticon"
                      :class="widget.dachuoc.status=='UP'?'anticon-arrow-up':'anticon-arrow-down'"
                    ></i>
                    <span class="font-weight-semibold m-l-5">{{Math.ceil(widget.dachuoc.percent)}}%</span>
                  </span>
                </div>
                <div class="m-t-40">
                  <div class="d-flex justify-content-between">
                    <div class="d-flex align-items-center">
                      <span class="badge badge-warning badge-dot m-r-10 blink_me"></span>
                      <span class="text-gray font-weight-semibold font-size-13">{{widget.dachuoc.count}}/{{$store.state.generalStore.muctieu.dachuoc}}</span>
                    </div>
                    <span class="text-dark font-weight-semibold font-size-13">{{widget.dachuoc.monthly}}% </span>
                  </div>
                  <div class="progress progress-sm w-100 m-b-0 m-t-10">
                    <div
                      class="progress-bar bg-warning"
                      :style="{'width':widget.sotien.monthly+'%'}"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card">
              <div class="card-body">
                <div class="d-flex justify-content-between align-items-center">
                  <div>
                    <p class="m-b-0 text-muted">Chưa Chuộc</p>
                    <h2 class="m-b-0">{{widget.chuachuoc.count}}</h2>
                  </div>
                  <span
                    class="badge badge-gold font-size-12"
                    :class="widget.dachuoc.status=='UP'?'badge-cyan':'badge-red'"
                  >
                    <i
                      class="anticon"
                      :class="widget.dachuoc.status=='UP'?'anticon-arrow-up':'anticon-arrow-down'"
                    ></i>
                    <span class="font-weight-semibold m-l-5">{{Math.ceil(widget.dachuoc.percent)}}%</span>
                  </span>
                </div>
                <div class="m-t-40">
                  <div class="d-flex justify-content-between">
                    <div class="d-flex align-items-center">
                      <span class="badge badge-secondary badge-dot m-r-10 blink_me"></span>
                      <span class="text-gray font-weight-semibold font-size-13">{{widget.chuachuoc.count}}/{{$store.state.generalStore.muctieu.chuachuoc}}</span>
                    </div>
                    <span class="text-dark font-weight-semibold font-size-13">{{widget.chuachuoc.monthly}}%</span>
                  </div>
                  <div class="progress progress-sm w-100 m-b-0 m-t-10">
                    <div
                      class="progress-bar bg-secondary"
                      :style="{'width':widget.sotien.monthly+'%'}"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-7">
        <div class="card">
          <div class="card-body">
            <div class="d-flex align-items-center">
              <h5>Thống Kê</h5>

            </div>
            <thongkesohopdong
              v-if="dataReady"
              :mydata="[hopdongthangnay,hopdongthangtruoc]"
            />

          </div>
        </div>
      </div>
    </div>
    <div class="
              row">
      <div class="col-lg-8">
        <div class="card">
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-center">
              <h5>Dòng Tiền </h5>
              <div>

                <nuxt-link
                  to="/chungtu"
                  class="btn btn-sm btn-success"
                >View All</nuxt-link>
              </div>
            </div>
            <div
              class="m-t-10"
              style="border-bottom:1px solid black;border-top:1px solid black"
            ><span class="font-weight-normal text-primary">Tháng Này</span>
              <div class="d-md-flex">
                <div class="pr-4 m-v-10 border-right border-hide-md">
                  <p class="m-b-0">Tổng thu</p>
                  <h3 class="m-b-0">
                    <span>${{formatNumber(widget.dongtien.tongthu)}}</span>
                    <span
                      class="m-l-10 font-size-14"
                      :class="(widget.dongtien.tongthu>widget._dongtien.tongthu)?'text-success ':'text-danger '"
                    >{{(widget.dongtien.tongthu>widget._dongtien.tongthu?"+":"-")}}{{Math.ceil(widget.dongtien.thupercent)}}%</span>
                  </h3>
                </div>
                <div class="px-md-4 m-v-10 border-right border-hide-md">
                  <p class="m-b-0">Tổng Chi</p>
                  <h3 class="m-b-0">
                    <span>${{formatNumber(widget.dongtien.tongchi)}}</span>
                    <span
                      class="m-l-10 font-size-14"
                      :class="(widget.dongtien.tongchi>widget._dongtien.tongchi)?'text-success ':'text-danger '"
                    >{{(widget.dongtien.tongchi>widget._dongtien.tongchi?"+":"-")}}{{Math.ceil(widget.dongtien.chipercent)}}%</span>
                  </h3>
                </div>
                <div class="px-md-4 m-v-10">
                  <p class="m-b-0">Chênh Lệch</p>
                  <h3 class="m-b-0">
                    <span>${{formatNumber(widget.dongtien.chenhlech)}}</span>
                    <span
                      class="m-l-10 font-size-14"
                      :class="(widget.dongtien.chenhlech>widget._dongtien.chenhlech)?'text-success ':'text-danger '"
                    >{{(widget.dongtien.chenhlech>widget._dongtien.chenhlech?"+":"-")}}{{Math.ceil(widget.dongtien.chenhlechpercent)}}%</span>
                  </h3>
                </div>
              </div>
            </div>

            <div
              class="m-t-10"
              style="border-bottom:1px solid black;border-top:1px solid black"
            ><span class="font-weight-normal text-primary">Tháng Trước</span>
              <div class="d-md-flex">
                <div class="pr-4 m-v-10 border-right border-hide-md">
                  <p class="m-b-0">Tổng thu</p>
                  <h3 class="m-b-0">
                    <span>${{formatNumber(widget._dongtien.tongthu)}}</span>
                    <span class="text-success m-l-30 font-size-14">&nbsp;</span>
                  </h3>
                </div>
                <div class="px-md-4 m-v-10 border-right border-hide-md">
                  <p class="m-b-0">Tổng Chi</p>
                  <h3 class="m-b-0">
                    <span>${{formatNumber(widget._dongtien.tongchi)}}</span>
                    <span class="text-danger m-l-90 font-size-14">&nbsp;</span>
                  </h3>
                </div>
                <div class="px-md-4 m-v-10">
                  <p class="m-b-0">Chênh Lệch</p>
                  <h3 class="m-b-0">
                    <span>${{formatNumber(widget._dongtien.chenhlech)}}</span>
                    <span class="text-success m-l-10 font-size-14"></span>
                  </h3>
                </div>
              </div>
            </div>

            <div
              class="m-t-10"
              style="height:400px"
            >

              <thongkethuchi :mydata="chungtu" />
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="card">
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-center">
              <h5>Theo Khu Vực</h5>
              <div>
                <nuxt-link
                  to="/thongke/khuvuc"
                  class="btn btn-sm btn-success"
                >
                  View All
                </nuxt-link>
              </div>
            </div>
            <div class="m-t-30">
              <ul class="list-group list-group-flush">

                <li
                  v-for="item in khuvuc"
                  :key="item.name"
                  class="list-group-item p-h-0"
                >
                  <div class="d-flex align-items-center justify-content-between">
                    <div class="d-flex">

                      <div class="avatar avatar-text bg-primary">
                        <span class="text-capitalize">{{item.name[0]}}</span>
                      </div>
                      <div>
                        <h6 class="m-t-5 m-l-30 font-weight-bold font-size-16">
                          <a class="text-dark">{{item.name}}</a>
                        </h6>

                      </div>
                    </div>
                    <span
                      class="badge badge-pill badge-geekblue font-size-12"
                      style="width:6rem"
                    >
                      <span class="font-weight-semibold m-l-5">{{item.count}}</span>
                    </span>
                  </div>
                </li>

              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-4">
        <div class="card">
          <div class="card-body">
            <h5>Customers</h5>
            <div
              class="m-v-45 text-center"
              style="height: 250px"
            >
              <thongketheoloaitaisan :mydata="hopdongthangnay" />
            </div>
            <div class="row p-t-25">
              <div class="col-md-8 m-h-auto">
                <div class="d-flex justify-content-between align-items-center m-b-20">
                  <p class="m-b-0 d-flex align-items-center">
                    <span class="badge badge-warning badge-dot m-r-10 blink_me"></span>
                    <span>Vàng</span>
                  </p>
                  <h5 class="m-b-0">{{chart.v}}</h5>
                </div>
                <div class="d-flex justify-content-between align-items-center m-b-20">
                  <p class="m-b-0 d-flex align-items-center">
                    <span class="badge badge-primary badge-dot m-r-10 blink_me"></span>
                    <span>Xe</span>
                  </p>
                  <h5 class="m-b-0">{{chart.x}}</h5>
                </div>
                <div class="d-flex justify-content-between align-items-center m-b-20">
                  <p class="m-b-0 d-flex align-items-center">
                    <span class="badge badge-danger badge-dot m-r-10 blink_me"></span>
                    <span>Điện Thoại</span>
                  </p>
                  <h5 class="m-b-0">{{chart.d}}</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-8">
        <div class="card">
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-center">
              <h5>Hợp Đồng Mới Nhất</h5>
              <div>

                <nuxt-link
                  to="/hopdong"
                  class="btn btn-sm btn-success"
                >
                  View All
                </nuxt-link>
              </div>
            </div>
            <div class="m-t-30">
              <div class="table-responsive">

                <b-table
                  table-variant
                  outlined
                  hover
                  :items="hopdongmoinhat"
                  :fields="hopdongmoinhat_fields"
                >

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

                  <template #cell(tinhtrang)="data">
                    <span
                      class="badge badge-dot m-r-10"
                      :class="data.item.tinhtrang==='CHUACHUOC'?'badge-success':'badge-warning'"
                    ></span>

                  </template>

                </b-table>

              </div>
            </div>
          </div>
        </div>
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

import thongkesohopdong from '../components/chart/thongkesohopdong'
import thongketheoloaitaisan from '../components/chart/thongketheoloaitaisan'
import thongkethuchi from '../components/chart/thongkethuchi'
import _ from 'lodash'
export default {
  components: {
    thongkesohopdong, thongketheoloaitaisan, thongkethuchi
    // Thongkehopdonghangthang
  },
  async beforeMount () {

    //tìm tất cả hợp đồng phát sinh trong tháng này
    let sfm = this.$moment().startOf('month').format('YYYY-MM-DD')
    let efm = this.$moment().endOf('month').format('YYYY-MM-DD')
    //tat ca hopdong phat sinh thang truoc
    let _sfm = this.$moment().subtract(1, 'months').startOf('month').format('YYYY-MM-DD');
    let _efm = this.$moment().subtract(1, 'months').endOf('month').format('YYYY-MM-DD');

    this.hopdongthangnay = await this.$strapi.$hopdongs.find([['ngaythe_gte', sfm], ['ngaythe_lte', efm]])
    this.hopdongthangtruoc = await this.$strapi.$hopdongs.find([['ngaythe_gte', _sfm], ['ngaythe_lte', _efm]])
    this.hopdongmoinhat = await this.$strapi.$hopdongs.find({ _limit: 10, _sort: { ngaythe: 'DESC' } })

    this.widget.hopdong = this.wigdet_hopdong();
    this.widget.sotien = this.widget_sotien();

    this.widget.dachuoc = this.widget_dachuoc();
    this.widget.chuachuoc = this.widget_chuachuoc();

    let VANG = this.hopdongthangnay.filter(item => item.loaitaisan === "VANG")
    let XE = this.hopdongthangnay.filter(item => item.loaitaisan === "XE")
    let DIENTHOAI = this.hopdongthangnay.filter(item => item.loaitaisan === "DIENTHOAI")

    this.chart.v = VANG.length;
    this.chart.x = XE.length;
    this.chart.d = DIENTHOAI.length;

    let arrayDiachi = this.hopdongthangnay.map(item => item.diachi.trim().toLowerCase().replace(/\s+/g, ''))
    let a = _.countBy(arrayDiachi)
    let b = _.map(a, (key, value) => {
      return {
        "name": value,
        "count": key
      }
    })
    this.khuvuc = b;
    this.chungtu = await this.$strapi.$chungtus.find([['createdAt_gte', sfm], ['createdAt_lte', efm]])
    this._chungtu = await this.$strapi.$chungtus.find([['createdAt_gte', _sfm], ['createdAt_lt', sfm]])

    this.widget.dongtien.tongthu = 0
    this.chungtu.forEach(item => {
      if (item.diendai === 'THU') {
        this.widget.dongtien.tongthu += parseInt(item.sotien)
      } else {
        this.widget.dongtien.tongchi += parseInt(item.sotien)
      }

    })

    this.widget.dongtien.chenhlech = Math.abs(this.widget.dongtien.tongthu - this.widget.dongtien.tongchi)



    this._chungtu.forEach(item => {
      if (item.diendai === 'THU') {
        this.widget._dongtien.tongthu += parseInt(item.sotien)
      } else {
        this.widget._dongtien.tongchi += parseInt(item.sotien)
      }

    })


    this.widget._dongtien.chenhlech = Math.abs(this.widget._dongtien.tongthu - this.widget._dongtien.tongchi)
    this.widget.dongtien.thupercent = this.widget.dongtien.tongthu * 100 / this.widget._dongtien.tongthu;
    this.widget.dongtien.chipercent = this.widget.dongtien.tongchi * 100 / this.widget._dongtien.tongchi;
    this.widget.dongtien.chenhlechpercent = this.widget.dongtien.chenhlech * 100 / this.widget._dongtien.chenhlech;

    this.tienquy = await this.$strapi.$tienquy.find();

    this.dataReady = true;
  },

  methods: {
    wigdet_hopdong () {

      let count = this.hopdongthangnay.length;
      let _count = this.hopdongthangtruoc.length;
      let status = ''
      if (count > _count) {
        status = "UP"
      } else {
        status = "DOWN"
      }

      let precent = count * 100 / _count;
      let muctieu = this.$store.state.generalStore.muctieu.hopdong;
      let monthly = Math.ceil(count * 100 / muctieu)

      return {
        count: count,
        percent: precent,
        status: status,
        monthly: monthly
      }
    },
    widget_sotien () {

      let count = 0
      this.hopdongthangnay.map(item => {
        count += parseInt(item.sotien)
      })
      let _count = 0
      this.hopdongthangtruoc.map(item => {
        _count += parseInt(item.sotien)
      })

      let precent = count * 100 / _count;


      let status = ''
      if (count > _count) {
        status = "UP"
      } else {
        status = "DOWN"
      }
      let muctieu = this.$store.state.generalStore.muctieu.sotien
      let monthly = Math.ceil(count * 100 / muctieu)
      count = count / 1000000
      if (count <= 1000) {
        count = count + " Tr"
      } else {
        count = count / 1000 + "Tỷ"
      }



      return {
        count: count,
        percent: Math.ceil(precent),
        status: status,
        monthly: monthly
      }
    },
    widget_dachuoc () {
      let hd = this.hopdongthangnay.filter(item => item.tinhtrang === 'DACHUOC')
      let _hd = this.hopdongthangtruoc.filter(item => item.tinhtrang === 'DACHUOC')

      let count = hd.length;
      let _count = _hd.length;
      (_count === 0 ? _count = 1 : _count = _count)
      let status = ''
      if (count > _count) {
        status = "UP"
      } else {
        status = "DOWN"
      }

      let precent = count * 100 / _count;
      let muctieu = this.$store.state.generalStore.muctieu.dachuoc;
      let monthly = Math.ceil(count * 100 / muctieu)

      return {
        count: count,
        percent: precent,
        status: status,
        monthly: monthly
      }
    },
    widget_chuachuoc () {
      let hd = this.hopdongthangnay.filter(item => item.tinhtrang === 'CHUACHUOC')
      let _hd = this.hopdongthangtruoc.filter(item => item.tinhtrang === 'CHUACHUOC')

      let count = hd.length;
      let _count = _hd.length;
      (_count === 0 ? _count = 1 : _count = _count)
      let status = ''
      if (count > _count) {
        status = "UP"
      } else {
        status = "DOWN"
      }

      let precent = count * 100 / _count;
      let muctieu = this.$store.state.generalStore.muctieu.dachuoc;
      let monthly = Math.ceil(count * 100 / muctieu)

      return {
        count: count,
        percent: precent,
        status: status,
        monthly: monthly
      }
    },
    formatDay (x) {
      return this.$moment(x).format('DD-MM-YYYY')
    },
    formatNumber (x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },

  },
  data () {
    return {
      tienquy: {},
      chungtu: [],
      _chungtu: [],
      hopdongmoinhat: [],
      hopdongmoinhat_fields: [
        { key: 'Stt', label: '#' },
        { key: 'tenkhach', label: 'Tên' },
        { key: 'sotien', label: 'Tiền' },
        { key: 'loaitaisan', label: 'T/S' },
        { key: 'tinhtrang', label: 'T/T' },
        { key: 'ngaythe', label: 'Ngày Thế' },

      ],
      dataReady: false,
      hopdongthangnay: [],
      hopdongthangtruoc: [],
      widget: {
        hopdong: {},
        sotien: {},
        dongtien: {
          tongthu: 0,
          thupercent: 0,
          tongchi: 0,
          chipercent: 0,
          chenhlech: 0,
          chenhlechpercent: 0
        },
        _dongtien: {
          tongthu: 0,
          thupercent: 0,
          tongchi: 0,
          chipercent: 0,
          chenhlech: 0,
          chenhlechpercent: 0
        },
        dachuoc: {},
        chuachuoc: {}
      },
      chart: {
        v: 0,
        x: 0,
        d: 0
      },
      khuvuc: [],
    }
  },
  computed: {
    getNgayHienTai () {
      return this.$moment().format('dddd, DD/MM/YY')
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