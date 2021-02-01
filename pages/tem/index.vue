<template>

  <div class="container">

    <div class="text-center m-t-30 m-b-40">
      <h2>Lấy Danh Sách Mã Code</h2>
      <p class="w-45 m-h-auto m-b-30">Tạo ra 1 danh sách mã code in tem, lưu danh sách đó về đặt vào folder C:, full path <code>C:/code.cvs</code> và tiến hành in </p>
      <b-overlay :show="show">
        <template #overlay>

          <p id="cancel-label">Please wait...</p>

        </template>
        <div class="card">

          <div class="card-body row">

            <div class="col-md-2">

            </div>
            <div class="form-row col-md-8">
              <label for="basic-url">Số Tem cần in</label>
              <div class="input-group mb-3">

                <input
                  type="text"
                  class="form-control"
                  id="basic-url"
                  v-model="soluongtem"
                  aria-describedby="basic-addon3"
                >
                <div class="input-group-append">
                  <button
                    @click="getTem"
                    class="btn btn-secondary m-r-5"
                  >In</button>
                </div>
              </div>

            </div>

          </div>
        </div>
      </b-overlay>
    </div>

  </div>

</template>

<script>
export default {
  data () {
    return {
      show: false,
      tem: "",
      soluongtem: 500
    }
  },
  methods: {
    async getTem () {
      this.show = true;
      let t = await this.$strapi.$decalcamdos.find({ _limit: parseInt(this.soluongtem) })
      let str = "code\n";
      for (let i = 0; i < t.length; i++) {
        str += t[i].code + "\n";
      }
      var filename = "code.csv";
      this.download(filename, str);
      let bulkDelete = new Array();
      t.forEach(item => {
        bulkDelete.push(item._id)
      })
      let a = await this.$strapi.$http.$post('decalcamdos/deletemany', {
        listId: bulkDelete
      })
      console.log(a)
      this.show = false;
    },
    download (filename, text) {
      var element = document.createElement("a");
      element.setAttribute(
        "href",
        "data:text/plain;charset=utf-8," + encodeURIComponent(text)
      );
      element.setAttribute("download", filename);

      element.style.display = "none";
      document.body.appendChild(element);

      element.click();

      document.body.removeChild(element);
    }
  }
}
</script>

<style>
</style>