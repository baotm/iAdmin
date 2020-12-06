<template>
  <div class="container">
    <piechart
      v-if="dataReady"
      :data="barChartData"
      :options="barChartOptions"
    />
  </div>
</template>

<script>
import piechart from './js/piechart'


export default {
  props: ['mydata'],
  mounted () {
    let countHD = this.mydata.length;
    let VANG = this.mydata.filter(item => item.loaitaisan === "VANG")
    let XE = this.mydata.filter(item => item.loaitaisan === "XE")
    let DIENTHOAI = this.mydata.filter(item => item.loaitaisan === "DIENTHOAI")

    let v = VANG.length * 10 / countHD
    let x = XE.length * 10 / countHD
    let d = DIENTHOAI.length * 10 / countHD
    //tính phần trăm

    this.barChartData.datasets[0].data = [v, x, d];
    this.dataReady = true;
  },
  data () {
    return {
      dataReady: false,
      labelArray: [],
      barChartData: {
        labels: ['VÀNG', 'XE', 'ĐIỆN THOẠI'],
        datasets: [
          {
            data: [],
            backgroundColor: ['#FFC107', '#3F87F5', '#DE4436']
          }
        ],

      },
      barChartOptions: {
        responsive: true,
        title: {
          display: true,
          text: 'Phần Trăm Loại Đồ',
        }
      }
    }
  }
}
</script>