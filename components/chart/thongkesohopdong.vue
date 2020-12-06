<template>
  <div class="container">
    <barchart
      v-if="dataReady"
      :data="barChartData"
      :options="barChartOptions"
      :height="220"
    />
  </div>
</template>

<script>
import barchart from './js/barchart'


export default {
  props: ['mydata'],
  mounted () {
    //tao 1  label có đúng bằng số ngày của tháng trước

    let endOfMonth = this.$moment().endOf('month').format('DD');
    let _endOfMonth = this.$moment().subtract(1, 'month').endOf('month').format('DD');
    let dateOfLabel = 0;
    if (parseInt(endOfMonth) > parseInt(_endOfMonth)) {
      dateOfLabel = parseInt(endOfMonth)
    } else {
      dateOfLabel = parseInt(_endOfMonth)
    }
    let labelArray = [];
    for (let i = 0; i < dateOfLabel; i++) {
      labelArray.push("N" + (i + 1))
    }

    let dataThangHienTai = this.mydata[0];
    let _dataThangHienTai = [];
    for (let i = 0; i < dateOfLabel; i++) {
      _dataThangHienTai[i] = 0;
    }
    for (let j = 0; j < dataThangHienTai.length; j++) {
      //neu du lieu ngay hien tai
      let count = 0;
      for (let i = 0; i < dateOfLabel; i++) {
        let a = this.$moment(dataThangHienTai[j].ngaythe).format('DD');
        if (parseInt(a) == i) {
          _dataThangHienTai[i - 1] += 1;
        }
      }
    }



    let dataThangHienTai1 = this.mydata[1];
    let _dataThangHienTai1 = [];
    for (let i = 0; i < dateOfLabel; i++) {
      _dataThangHienTai1[i] = 0;
    }
    for (let j = 0; j < dataThangHienTai1.length; j++) {
      //neu du lieu ngay hien tai
      let count = 0;
      for (let i = 0; i < dateOfLabel; i++) {
        let a = this.$moment(dataThangHienTai1[j].ngaythe).format('DD');
        if (parseInt(a) == i) {
          _dataThangHienTai1[i - 1] += 1;
        }
      }
    }


    this.barChartData.labels = labelArray;
    this.barChartData.datasets[0].data = _dataThangHienTai;
    this.barChartData.datasets[1].data = _dataThangHienTai1;
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
            backgroundColor: '#36A2EB',
            data: [],
            barPercentage: 0.5,
            barThickness: 6,
            maxBarThickness: 8,
            minBarLength: 2,
            label: 'Hiện Tại',
          }, {
            label: 'Tháng Trước',
            backgroundColor: '#FF6384',
            data: [],
            barPercentage: 0.5,
            barThickness: 6,
            maxBarThickness: 8,
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