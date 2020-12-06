<template>
  <div class="container">
    <linechart
      v-if="dataReady"
      :data="barChartData"
      :options="barChartOptions"
      :height="200"
    />
  </div>
</template>

<script>
import linechart from './js/linechart'


export default {
  props: ['mydata'],
  mounted () {
    //tao 1  label có đúng bằng số ngày của tháng trước

    let endOfMonth = this.$moment().endOf('month').format('DD');
    let dateOfLabel = parseInt(endOfMonth)

    let labelArray = [];
    for (let i = 0; i < dateOfLabel; i++) {
      labelArray.push("N" + (i + 1))
    }

    let dataThu = []
    let dataChi = []

    for (let i = 0; i < dateOfLabel; i++) {
      dataThu[i] = 0;
      dataChi[i] = 0;
    }
    let data = this.mydata;
    for (let j = 0; j < data.length; j++) {
      //neu du lieu ngay hien tai
      let count = 0;
      for (let i = 0; i < dateOfLabel; i++) {
        let a = this.$moment(data[j].createdAt).format('DD');
        if (parseInt(a) == i) {
          if (data[j].diendai == 'THU') {
            dataThu[i - 1] += parseInt(Math.abs(data[j].sotien))
          } else {
            dataChi[i - 1] += parseInt(Math.abs(data[j].sotien))
          }
        }
      }
    }

    let t = dataThu.map(x => x / 1000)
    let c = dataChi.map(x => x / 1000)

    this.barChartData.labels = labelArray;
    this.barChartData.datasets[0].data = t;
    this.barChartData.datasets[1].data = c;
    this.dataReady = true;
  },
  data () {

    return {
      dataReady: false,
      labelArray: [],
      barChartData: {
        labels: null,
        datasets: [
          {
            backgroundColor: '#FFFFFF',
            borderColor: '#05C9A7',
            data: [],
            label: 'Thu',
            fill: false
          }, {
            label: 'Chi',
            backgroundColor: '#FFFFFF',
            borderColor: '#FF6384',
            data: [],
            fill: false,
            minBarLength: 2,
          },
        ],

      },
      barChartOptions: {
        responsive: true,
        title: {
          display: true,
          text: 'Hợp Đồng Phát Sinh Theo Từng Ngày Trong Tháng',
        }
      }
    }
  }
}
</script>