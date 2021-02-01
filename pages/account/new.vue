<template>
  <div v-if="dataReady">
    <div class="page-header no-gutters">
      <div class="row align-items-md-center">
        <div class="col-md-6">
          <div class="media m-v-10">
            <div class="avatar avatar-cyan avatar-icon avatar-square">
              <i class="anticon anticon-star"></i>
            </div>
            <div class="media-body m-l-15">
              <h6 class="mb-0">Tạo User Mới </h6>
              <span class="text-gray font-size-13">baophuong.xyz Team</span>
            </div>
          </div>
        </div>

      </div>
    </div>
    <div class="row">
      <div class="col-lg-11 mx-auto">
        <!-- Card View -->
        <div
          class="row"
          id="card-view"
        >
          <div class="col-md-12">
            <div class="card">
              <div class="card-body">
                <b-form
                  @submit.prevent="formSubmit"
                  validated
                >
                  <div class="row">
                    <div class="col-6">
                      <b-form-group
                        label="Tên Tài Khoản"
                        description="Tên Chủ Nhân Tài Khoản"
                      >
                        <b-input
                          required
                          v-model="form.RealName"
                        ></b-input>
                      </b-form-group>
                      <b-form-group
                        label="Username"
                        description="Tên Đăng Nhập"
                      >
                        <b-input
                          required
                          v-model="form.username"
                        ></b-input>
                      </b-form-group>
                      <b-form-group
                        label="Password"
                        description="Password"
                      >
                        <b-input
                          type="password"
                          required
                          v-model="form.password"
                        ></b-input>
                      </b-form-group>
                      <b-form-group
                        label="Address"
                        description="Địa Chỉ"
                      >
                        <b-input
                          required
                          v-model="form.address"
                        ></b-input>
                      </b-form-group>
                      <b-button
                        type="submit"
                        class="button"
                      >Tạo Mới</b-button>
                    </div>
                    <div class="col-6">
                      <b-form-group
                        label="Email"
                        description="Email"
                      >
                        <b-input
                          required
                          type="email"
                          v-model="form.email"
                        ></b-input>
                      </b-form-group>
                      <b-form-group
                        label="Phone"
                        description="Phone"
                      >
                        <b-input
                          required
                          v-model="form.phone"
                        ></b-input>
                      </b-form-group>
                      <b-form-group
                        label="Role"
                        description="Quyền"
                      >
                        <b-select
                          required
                          :options="roleOptions"
                          v-model="form.role"
                        ></b-select>
                      </b-form-group>
                      <b-form-group
                        label="Avatar"
                        description="Avatar cua account"
                      >
                        <b-form-file
                          required
                          accept=".jpg, .png, .gif"
                          v-model="form.avatar"
                          :state="Boolean(form.avatar)"
                          placeholder="Chọn file cần upload..."
                          drop-placeholder="Drop file here..."
                        ></b-form-file>
                      </b-form-group>
                    </div>
                  </div>
                </b-form>

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
          <p>{{message}}</p>
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
      message: 'Đang Upload Ảnh',
      dataReady: true,
      form: {
        username: '',
        password: '',
        phone: '',
        address: '',
        email: '',
        RealName: '',

      },

      roleOptions: [
        { value: 'Admin', text: 'Quyền Admin' },
        { value: 'Sale', text: 'Quyền Sale' },
        { value: 'Tech', text: 'Quyền Tech' },
        { value: 'Ware', text: 'Quyền Ware' },

      ]
    }
  },
  methods: {
    async formSubmit () {
      this.dataReady = false
      try {

        let account = {
          username: this.form.username,
          password: this.form.password,
          RealName: this.form.RealName,
          Email: this.form.email,
          Phone: this.form.phone,
          Address: this.form.address,
          Role: this.form.role,
        }

        let acc = await this.$strapi.$accounts.create(account);
        //upload file


        const data = new FormData();
        data.append('files', this.form.avatar);
        data.append('refId', acc._id);
        data.append('ref', 'Accounts');
        data.append('field', 'Avatar');
        let avatar = await this.$axios.post('http://localhost:3001/upload', data)
        this.message = "Cập nhật User Avatar"
        //update to account
        await this.$strapi.$accounts.update(acc._id, { Avatar: avatar.data[0] })
        this.message = "Tạo Thành Công"
        window.location.replace('/account')

      } catch (e) {
        console.log(e)
      }
    }
  },

}
</script>

<style>
</style>