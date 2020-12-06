<template>
  <div
    class="card"
    v-if="dataReady"
  >
    <div class="card-body">
      <h4>Cấu Hình Tiệm</h4>
      <p>Tính năng này dùng để cài đặt các <code>Thông số</code>.Tính năng hoạt động của tiệm. Mọi tùy chỉnh nên được suy tính cẩn thận<code>.</code></code></p>
      <div class="m-t-25">
        <ul
          class="nav nav-tabs nav-justified"
          id="myTabJustified"
          role="tablist"
        >
          <li class="nav-item">
            <a
              class="nav-link active"
              id="home-tab-justified"
              data-toggle="tab"
              href="#home-justified"
              role="tab"
              aria-controls="home-justified"
              aria-selected="true"
            >Cấu Hình Tiệm</a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              id="profile-tab-justified"
              data-toggle="tab"
              href="#profile-justified"
              role="tab"
              aria-controls="profile-justified"
              aria-selected="false"
            >Cấu Hình Truy Cập</a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              id="contact-tab-justified"
              data-toggle="tab"
              href="#contact-justified"
              role="tab"
              aria-controls="contact-justified"
              aria-selected="false"
            >Cấu Hình Tài Sản</a>
          </li>
        </ul>
        <div
          class="tab-content m-t-15"
          id="myTabContentJustified"
        >
          <!-- cau hinh tiem -->
          <div
            class="tab-pane fade show active"
            id="home-justified"
            role="tabpanel"
            aria-labelledby="home-tab-justified"
          >
            <div>
              <div class="row">
                <div class="col-1"></div>
                <b-form
                  class="col-6 m-t-20 border-left border-hide-md"
                  @submit.prevent="submitCauHinhTiem"
                >
                  <b-form-group
                    label="Thời Gian Nhắc Nhở"
                    description="Thời Hạn Nhắc Hợp Đồng Khi Sắp Đến Hạn Thế"
                  >
                    <b-form-input
                      v-model="form.thoigiannhacnho"
                      type="number"
                      required
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group
                    label="Thời Gian Thanh Lý:"
                    description="Thời Hạn Thanh Lý Đồ Khi Hợp Đồng Hết Hạn"
                  >
                    <b-form-input
                      v-model="form.thoigianthanhly"
                      required
                      type="number"
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group
                    label="Mục Tiêu Hợp Đồng"
                    description="Mục Tiêu Số Hợp Đồng Đạt Được Trong Tháng"
                  >
                    <b-form-input
                      v-model="form.muctieu.hopdong"
                      type="number"
                      required
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group
                    label="Mục Tiêu Số Tiền"
                    description="Mục Tiêu Số Tiền Đạt Được Trong Tháng"
                  >
                    <b-form-input
                      v-model="form.muctieu.sotien"
                      type="number"
                      required
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group
                    label="Số Hợp Đồng Chuộc"
                    description="Mục Tiêu Số Hợp Đồng Chuộc Đạt Được Trong Tháng"
                  >
                    <b-form-input
                      v-model="form.muctieu.dachuoc"
                      type="number"
                      required
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group
                    label="Số Hợp Đồng Chưa Chuộc"
                    description="Mục Tiêu Số Hợp Đồng Chưa Chuộc Đạt Được Trong Tháng"
                  >
                    <b-form-input
                      v-model="form.muctieu.chuachuoc"
                      type="number"
                      required
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group
                    label="Số Tiền Quỹ:"
                    description="Số Tiền Quỹ Của Tiệm"
                  >
                    <b-form-input
                      v-model="form.tienquy"
                      type="number"
                      aria-describedby="sotienformtext"
                    ></b-form-input>
                    <b-form-text id="sotienformtext">{{formatNumber(form.tienquy)}}</b-form-text>
                  </b-form-group>

                  <b-form-group
                    label="Địa chỉ tiệm:"
                    description="Địa Chỉ Của Tiệm"
                  >
                    <b-form-input
                      v-model="form.diachi"
                      required
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group
                    label="Số Điện Thoại:"
                    label-for="Thời Hạn Thanh Lý Đồ Khi Hợp Đồng Hết Hạn"
                  >
                    <b-form-input
                      v-model="form.sodienthoai"
                      required
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group
                    label="Slogan Tiệm"
                    label-for="Thời Hạn Thanh Lý Đồ Khi Hợp Đồng Hết Hạn"
                  >
                    <b-form-input
                      v-model="form.slogan"
                      required
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group
                    label="Người Chịu Trách Nhiệm Của Tiệm:"
                    label-for="Thời Hạn Thanh Lý Đồ Khi Hợp Đồng Hết Hạn"
                  >
                    <b-form-input
                      v-model="form.nguoichiutrachnhiem"
                      required
                    ></b-form-input>
                  </b-form-group>

                  <b-button
                    type="submit"
                    variant="primary"
                  >Submit</b-button>
                  <b-button
                    type="reset"
                    variant="danger"
                  >Reset</b-button>
                </b-form>

              </div>

            </div>
          </div>
          <!-- end cau hinh tiem -->
          <!-- cau hinh truy cap -->
          <div
            class="tab-pane fade"
            id="profile-justified"
            role="tabpanel"
            aria-labelledby="profile-tab-justified"
          >
            <div class="row">
              <div class="col-1"></div>
              <b-form
                class="col-6 m-t-20"
                @submit.prevent="submitCauHinhTiem"
              >
                <b-form-group
                  label="Thời Gian Nhắc Nhở"
                  description="Thời Hạn Nhắc Hợp Đồng Khi Sắp Đến Hạn Thế"
                >
                  <b-form-input
                    v-model="form.thoigiannhacnho"
                    type="number"
                    required
                  ></b-form-input>
                </b-form-group>

                <b-form-group
                  label="Thời Gian Thanh Lý:"
                  description="Thời Hạn Thanh Lý Đồ Khi Hợp Đồng Hết Hạn"
                >
                  <b-form-input
                    v-model="form.thoigianthanhly"
                    required
                    type="number"
                  ></b-form-input>
                </b-form-group>

                <b-form-group
                  label="Mục Tiêu Hợp Đồng"
                  description="Mục Tiêu Số Hợp Đồng Đạt Được Trong Tháng"
                >
                  <b-form-input
                    v-model="form.muctieu.hopdong"
                    type="number"
                    required
                  ></b-form-input>
                </b-form-group>

                <b-form-group
                  label="Mục Tiêu Số Tiền"
                  description="Mục Tiêu Số Tiền Đạt Được Trong Tháng"
                >
                  <b-form-input
                    v-model="form.muctieu.sotien"
                    type="number"
                    required
                  ></b-form-input>
                </b-form-group>

                <b-form-group
                  label="Số Hợp Đồng Chuộc"
                  description="Mục Tiêu Số Hợp Đồng Chuộc Đạt Được Trong Tháng"
                >
                  <b-form-input
                    v-model="form.muctieu.dachuoc"
                    type="number"
                    required
                  ></b-form-input>
                </b-form-group>

                <b-form-group
                  label="Số Hợp Đồng Chưa Chuộc"
                  description="Mục Tiêu Số Hợp Đồng Chưa Chuộc Đạt Được Trong Tháng"
                >
                  <b-form-input
                    v-model="form.muctieu.chuachuoc"
                    type="number"
                    required
                  ></b-form-input>
                </b-form-group>

                <b-form-group
                  label="Số Tiền Quỹ:"
                  description="Số Tiền Quỹ Của Tiệm"
                >
                  <b-form-input
                    v-model="form.tienquy"
                    type="number"
                    aria-describedby="sotienformtext"
                  ></b-form-input>
                  <b-form-text id="sotienformtext">{{formatNumber(form.tienquy)}}</b-form-text>
                </b-form-group>

                <b-form-group
                  label="Địa chỉ tiệm:"
                  description="Địa Chỉ Của Tiệm"
                >
                  <b-form-input
                    v-model="form.diachi"
                    required
                  ></b-form-input>
                </b-form-group>

                <b-form-group
                  label="Số Điện Thoại:"
                  label-for="Thời Hạn Thanh Lý Đồ Khi Hợp Đồng Hết Hạn"
                >
                  <b-form-input
                    v-model="form.sodienthoai"
                    required
                  ></b-form-input>
                </b-form-group>

                <b-form-group
                  label="Slogan Tiệm"
                  label-for="Thời Hạn Thanh Lý Đồ Khi Hợp Đồng Hết Hạn"
                >
                  <b-form-input
                    v-model="form.slogan"
                    required
                  ></b-form-input>
                </b-form-group>

                <b-form-group
                  label="Người Chịu Trách Nhiệm Của Tiệm:"
                  label-for="Thời Hạn Thanh Lý Đồ Khi Hợp Đồng Hết Hạn"
                >
                  <b-form-input
                    v-model="form.nguoichiutrachnhiem"
                    required
                  ></b-form-input>
                </b-form-group>

                <b-button
                  type="submit"
                  variant="primary"
                >Submit</b-button>
                <b-button
                  type="reset"
                  variant="danger"
                >Reset</b-button>
              </b-form>

            </div>

          </div>
          <!-- end cau hinh truy cap -->
          <!-- cau hinh tai san -->
          <div
            class="tab-pane fade"
            id="contact-justified"
            role="tabpanel"
            aria-labelledby="contact-tab-justified"
          >
            <div class="row">
              <div
                class="accordion col-12"
                id="accordion-default"
              >
                <div class="row">
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
                      >Vàng</a>
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
                      >Xe</a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link"
                        id="contact-tab-vertical"
                        data-toggle="tab"
                        href="#contact-vertical"
                        role="tab"
                        aria-controls="contact-vertical"
                        aria-selected="false"
                      >Điện Thoại</a>
                    </li>
                  </ul>

                  <div
                    class="tab-content m-l-15 col-10"
                    id="myTabContentVertical"
                  >
                    <div
                      class="tab-pane fade show active"
                      id="home-vertical"
                      role="tabpanel"
                      aria-labelledby="home-tab-vertical"
                    >
                      <!-- vang config -->
                      <div class="card">
                        <div class="card-body">
                          <h4>Cấu Hình Cho Vàng</h4>
                          <div class="card">
                            <div class="card-body">
                              <div class="row">
                                <div class="col-6">
                                  <b-form-group label="Tên Hiển Thị Sản">
                                    <b-input
                                      required
                                      v-model="cauhinh.kho.vang.display"
                                    ></b-input>
                                  </b-form-group>
                                  <b-form-group label="Tên Tài Sản">
                                    <b-input
                                      required
                                      v-model="cauhinh.kho.vang.Tentaisan"
                                    ></b-input>
                                  </b-form-group>
                                  <b-form-group label="Đơn Vị Tính">
                                    <b-input
                                      required
                                      v-model="cauhinh.kho.vang.DonViTinh"
                                    ></b-input>
                                  </b-form-group>
                                  <b-form-group label="Tiền Tố">
                                    <b-input
                                      required
                                      v-model="cauhinh.kho.vang.TienTo"
                                    ></b-input>
                                  </b-form-group>
                                </div>
                                <div class="col-6">
                                  <div
                                    class="accordion"
                                    id="accordion-default"
                                  >
                                    <div class="card">
                                      <div class="card-header">
                                        <h5 class="card-title">
                                          <a
                                            data-toggle="collapse"
                                            href="#collapseOneDefault"
                                          >
                                            <span>Kho Lưu</span>
                                          </a>
                                        </h5>
                                      </div>
                                      <div
                                        id="collapseOneDefault"
                                        class="collapse"
                                        data-parent="#accordion-default"
                                      >
                                        <div class="card-body">

                                          <ul
                                            class="list-group"
                                            v-for="item in cauhinh.kho.vang.KhoLuu.listkholuu"
                                            :key="item.value"
                                          >
                                            <li class="list-group-item">
                                              <b-row class="align-items-center">
                                                <b-col cols="5">
                                                  Kho : <code>{{item.value}}</code>
                                                  <span
                                                    class="badge"
                                                    :class="(item.default)?'badge-success':''"
                                                  >Mặc Định</span>
                                                </b-col>
                                                <b-col cols="7">
                                                  <b-form-group label="Hiển Thị :">
                                                    <b-input :value="item.display"></b-input>
                                                  </b-form-group>
                                                </b-col>
                                              </b-row>

                                            </li>
                                          </ul>

                                        </div>
                                      </div>
                                    </div>
                                    <div class="card">
                                      <div class="card-header">
                                        <h5 class="card-title">
                                          <a
                                            class="collapsed"
                                            data-toggle="collapse"
                                            href="#collapseTwoDefault"
                                          >
                                            <span>Lãi Xuất</span>
                                          </a>
                                        </h5>
                                      </div>
                                      <div
                                        id="collapseTwoDefault"
                                        class="collapse"
                                        data-parent="#accordion-default"
                                      >
                                        <div class="card-body">

                                          <ul
                                            class="list-group"
                                            v-for="item in cauhinh.kho.vang.laixuat.laixuat"
                                            :key="item.display"
                                          >
                                            <li class="list-group-item">
                                              <b-row class="align-items-center">
                                                <b-col cols="5">
                                                  Lãi : <code>{{item.value/10}} %</code> <span
                                                    class="badge"
                                                    :class="(item.default)?'badge-success':''"
                                                  >Mặc Định</span>
                                                </b-col>
                                                <b-col cols="7">
                                                  <b-form-group label="Hiển Thị :">
                                                    <b-input :value="item.display"></b-input>
                                                  </b-form-group>
                                                </b-col>
                                              </b-row>

                                            </li>
                                          </ul>

                                        </div>

                                      </div>
                                    </div>
                                    <div class="card">
                                      <div class="card-header">
                                        <h5 class="card-title">
                                          <a
                                            class="collapsed"
                                            data-toggle="collapse"
                                            href="#collapseThreeDefault"
                                          >
                                            <span>Thời Hạn Thế</span>
                                          </a>
                                        </h5>
                                      </div>
                                      <div
                                        id="collapseThreeDefault"
                                        class="collapse"
                                        data-parent="#accordion-default"
                                      >
                                        <div class="card-body">
                                          <ul
                                            class="list-group"
                                            v-for="item in cauhinh.kho.vang.thoihancam.thoihancam"
                                            :key="item.display"
                                          >
                                            <li class="list-group-item">
                                              <b-row class="align-items-center">
                                                <b-col cols="5">
                                                  Thời Hạn : <code>{{item.value}}tháng</code> <span
                                                    class="badge"
                                                    :class="(item.default)?'badge-success':''"
                                                  >Mặc Định</span>
                                                </b-col>
                                                <b-col cols="7">
                                                  <b-form-group label="Hiển Thị :">
                                                    <b-input :value="item.display"></b-input>
                                                  </b-form-group>
                                                </b-col>
                                              </b-row>

                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                </div>
                              </div>

                            </div>
                          </div>
                        </div>
                        <div class="card-footer">
                          <div class="text-right">
                            <button class="btn btn-default m-r-5">Cancel</button>
                            <button class="btn btn-primary">Đồng Ý</button>
                          </div>
                        </div>
                      </div>

                    </div>
                    <div
                      class="tab-pane fade"
                      id="profile-vertical"
                      role="tabpanel"
                      aria-labelledby="profile-tab-vertical"
                    >
                      <!-- xe config -->
                      <div class="card">
                        <div class="card-body">
                          <h4>Cấu Hình Cho Xe</h4>
                          <div class="card">
                            <div class="card-body">
                              <div class="row">
                                <div class="col-6">
                                  <b-form-group label="Tên Hiển Thị">
                                    <b-input
                                      required
                                      v-model="cauhinh.kho.xe.display"
                                    ></b-input>
                                  </b-form-group>
                                  <b-form-group label="Tên Tài Sản">
                                    <b-input
                                      required
                                      v-model="cauhinh.kho.xe.Tentaisan"
                                    ></b-input>
                                  </b-form-group>
                                  <b-form-group label="Đơn Vị Tính">
                                    <b-input
                                      required
                                      v-model="cauhinh.kho.xe.DonViTinh"
                                    ></b-input>
                                  </b-form-group>
                                  <b-form-group label="Tiền Tố">
                                    <b-input
                                      required
                                      v-model="cauhinh.kho.xe.TienTo"
                                    ></b-input>
                                  </b-form-group>
                                </div>
                                <div class="col-6">
                                  <div
                                    class="accordion"
                                    id="accordion-default"
                                  >
                                    <div class="card">
                                      <div class="card-header">
                                        <h5 class="card-title">
                                          <a
                                            data-toggle="collapse"
                                            href="#collapseOneDefault"
                                          >
                                            <span>Kho Lưu</span>
                                          </a>
                                        </h5>
                                      </div>
                                      <div
                                        id="collapseOneDefault"
                                        class="collapse show"
                                        data-parent="#accordion-default"
                                      >
                                        <div class="card-body">

                                          <ul
                                            class="list-group"
                                            v-for="item in cauhinh.kho.xe.KhoLuu.listkholuu"
                                            :key="item.value"
                                          >
                                            <li class="list-group-item">
                                              <b-row class="align-items-center">
                                                <b-col cols="5">
                                                  Kho : <code>{{item.value}}</code> <span
                                                    class="badge"
                                                    :class="(item.default)?'badge-success':''"
                                                  >Mặc Định</span>
                                                </b-col>
                                                <b-col cols="7">
                                                  <b-form-group label="Hiển Thị :">
                                                    <b-input :value="item.display"></b-input>
                                                  </b-form-group>
                                                </b-col>
                                              </b-row>

                                            </li>
                                          </ul>

                                        </div>
                                      </div>
                                    </div>
                                    <div class="card">
                                      <div class="card-header">
                                        <h5 class="card-title">
                                          <a
                                            class="collapsed"
                                            data-toggle="collapse"
                                            href="#collapseTwoDefault"
                                          >
                                            <span>Lãi Xuất</span>
                                          </a>
                                        </h5>
                                      </div>
                                      <div
                                        id="collapseTwoDefault"
                                        class="collapse"
                                        data-parent="#accordion-default"
                                      >
                                        <div class="card-body">

                                          <ul
                                            class="list-group"
                                            v-for="item in cauhinh.kho.xe.laixuat.laixuat"
                                            :key="item.display"
                                          >
                                            <li class="list-group-item">
                                              <b-row class="align-items-center">
                                                <b-col cols="5">
                                                  Lãi : <code>{{item.value/10}} %</code> <span
                                                    class="badge"
                                                    :class="(item.default)?'badge-success':''"
                                                  >Mặc Định</span>
                                                </b-col>
                                                <b-col cols="7">
                                                  <b-form-group label="Hiển Thị :">
                                                    <b-input :value="item.display"></b-input>
                                                  </b-form-group>
                                                </b-col>
                                              </b-row>

                                            </li>
                                          </ul>

                                        </div>

                                      </div>
                                    </div>
                                    <div class="card">
                                      <div class="card-header">
                                        <h5 class="card-title">
                                          <a
                                            class="collapsed"
                                            data-toggle="collapse"
                                            href="#collapseThreeDefault"
                                          >
                                            <span>Thời Hạn Thế</span>
                                          </a>
                                        </h5>
                                      </div>
                                      <div
                                        id="collapseThreeDefault"
                                        class="collapse"
                                        data-parent="#accordion-default"
                                      >
                                        <div class="card-body">
                                          <ul
                                            class="list-group"
                                            v-for="item in cauhinh.kho.xe.thoihancam.thoihancam"
                                            :key="item.display"
                                          >
                                            <li class="list-group-item">
                                              <b-row class="align-items-center">
                                                <b-col cols="5">
                                                  Thời Hạn : <code>{{item.value}}tháng</code> <span
                                                    class="badge"
                                                    :class="(item.default)?'badge-success':''"
                                                  >Mặc Định</span>
                                                </b-col>
                                                <b-col cols="7">
                                                  <b-form-group label="Hiển Thị :">
                                                    <b-input :value="item.display"></b-input>
                                                  </b-form-group>
                                                </b-col>
                                              </b-row>

                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                </div>
                              </div>

                            </div>
                          </div>
                        </div>
                        <div class="card-footer">
                          <div class="text-right">
                            <button class="btn btn-default m-r-5">Cancel</button>
                            <button class="btn btn-primary">Đồng Ý</button>
                          </div>
                        </div>
                      </div>

                    </div>
                    <div
                      class="tab-pane fade"
                      id="contact-vertical"
                      role="tabpanel"
                      aria-labelledby="contact-tab-vertical"
                    >
                      <div class="card">
                        <div class="card-body">
                          <h4>Cấu Hình Điện Thoại</h4>
                          <div class="card">
                            <div class="card-body">
                              <div class="row">
                                <div class="col-6">
                                  <b-form-group label="Tên Hiển Thị">
                                    <b-input
                                      required
                                      v-model="cauhinh.kho.dienthoai.display"
                                    ></b-input>
                                  </b-form-group>
                                  <b-form-group label="Tên Tài Sản">
                                    <b-input
                                      required
                                      v-model="cauhinh.kho.dienthoai.Tentaisan"
                                    ></b-input>
                                  </b-form-group>
                                  <b-form-group label="Đơn Vị Tính">
                                    <b-input
                                      required
                                      v-model="cauhinh.kho.dienthoai.DonViTinh"
                                    ></b-input>
                                  </b-form-group>
                                  <b-form-group label="Tiền Tố">
                                    <b-input
                                      required
                                      v-model="cauhinh.kho.dienthoai.TienTo"
                                    ></b-input>
                                  </b-form-group>
                                </div>
                                <div class="col-6">
                                  <div
                                    class="accordion"
                                    id="accordion-default"
                                  >
                                    <div class="card">
                                      <div class="card-header">
                                        <h5 class="card-title">
                                          <a
                                            data-toggle="collapse"
                                            href="#collapseOneDefault"
                                          >
                                            <span>Kho Lưu</span>
                                          </a>
                                        </h5>
                                      </div>
                                      <div
                                        id="collapseOneDefault"
                                        class="collapse"
                                        data-parent="#accordion-default"
                                      >
                                        <div class="card-body">

                                          <ul
                                            class="list-group"
                                            v-for="item in cauhinh.kho.dienthoai.KhoLuu.listkholuu"
                                            :key="item.value"
                                          >
                                            <li class="list-group-item">
                                              <b-row class="align-items-center">
                                                <b-col cols="5">
                                                  Kho : <code>{{item.value}}</code> <span
                                                    class="badge"
                                                    :class="(item.default)?'badge-success':''"
                                                  >Mặc Định</span>
                                                </b-col>
                                                <b-col cols="7">
                                                  <b-form-group label="Hiển Thị :">
                                                    <b-input :value="item.display"></b-input>
                                                  </b-form-group>
                                                </b-col>
                                              </b-row>

                                            </li>
                                          </ul>

                                        </div>
                                      </div>
                                    </div>
                                    <div class="card">
                                      <div class="card-header">
                                        <h5 class="card-title">
                                          <a
                                            class="collapsed"
                                            data-toggle="collapse"
                                            href="#collapseTwoDefault"
                                          >
                                            <span>Lãi Xuất</span>
                                          </a>
                                        </h5>
                                      </div>
                                      <div
                                        id="collapseTwoDefault"
                                        class="collapse"
                                        data-parent="#accordion-default"
                                      >
                                        <div class="card-body">

                                          <ul
                                            class="list-group"
                                            v-for="item in cauhinh.kho.dienthoai.laixuat.laixuat"
                                            :key="item.display"
                                          >
                                            <li class="list-group-item">
                                              <b-row class="align-items-center">
                                                <b-col cols="5">
                                                  Lãi : <code>{{item.value/10}} %</code> <span
                                                    class="badge"
                                                    :class="(item.default)?'badge-success':''"
                                                  >Mặc Định</span>
                                                </b-col>
                                                <b-col cols="7">
                                                  <b-form-group label="Hiển Thị :">
                                                    <b-input :value="item.display"></b-input>
                                                  </b-form-group>
                                                </b-col>
                                              </b-row>

                                            </li>
                                          </ul>

                                        </div>

                                      </div>
                                    </div>
                                    <div class="card">
                                      <div class="card-header">
                                        <h5 class="card-title">
                                          <a
                                            class="collapsed"
                                            data-toggle="collapse"
                                            href="#collapseThreeDefault"
                                          >
                                            <span>Thời Hạn Thế</span>
                                          </a>
                                        </h5>
                                      </div>
                                      <div
                                        id="collapseThreeDefault"
                                        class="collapse"
                                        data-parent="#accordion-default"
                                      >
                                        <div class="card-body">
                                          <ul
                                            class="list-group"
                                            v-for="item in cauhinh.kho.dienthoai.thoihancam.thoihancam"
                                            :key="item.display"
                                          >
                                            <li class="list-group-item">
                                              <b-row class="align-items-center">
                                                <b-col cols="5">
                                                  Thời Hạn : <code>{{item.value}}tháng</code> <span
                                                    class="badge"
                                                    :class="(item.default)?'badge-success':''"
                                                  >Mặc Định</span>
                                                </b-col>
                                                <b-col cols="7">
                                                  <b-form-group label="Hiển Thị :">
                                                    <b-input :value="item.display"></b-input>
                                                  </b-form-group>
                                                </b-col>
                                              </b-row>

                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                </div>
                              </div>

                            </div>
                          </div>
                        </div>
                        <div class="card-footer">
                          <div class="text-right">
                            <button class="btn btn-default m-r-5">Cancel</button>
                            <button class="btn btn-primary">Đồng Ý</button>
                          </div>
                        </div>
                      </div>

                      <!-- dienthoai  -->
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
          <!-- end cau hinh tai san -->
        </div>
      </div>

    </div>
  </div>
  <div v-else>
    <b-overlay :show="true">
      <template #overlay>
        <div class="text-center">
          <p>Chờ xíu</p>
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
  async fetch () {
    let a = await this.$strapi.$cauhinh.find();

    this.form.thoigiannhacnho = a.thoigiannhacnho
    this.form.thoigianthanhly = a.thoigianthanhly
    this.form.muctieu.hopdong = a.muctieu.hopdong
    this.form.muctieu.sotien = a.muctieu.sotien
    this.form.muctieu.dachuoc = a.muctieu.dachuoc
    this.form.muctieu.chuachuoc = a.muctieu.chuachuoc

    this.form.tienquy = a.tienquy
    this.form.diachi = a.diachi
    this.form.sodienthoai = a.sodienthoai
    this.form.slogan = a.slogan
    this.form.nguoichiutrachnhiem = a.nguoichiutrachnhiem

    this.loaitaisan = await this.$strapi.$loaitaisans.find();
    console.log(this.loaitaisan[0])
    this.cauhinh.kho.vang = this.loaitaisan[0]
    this.cauhinh.kho.xe = this.loaitaisan[1]
    this.cauhinh.kho.dienthoai = this.loaitaisan[2]
    this.dataReady = true
  },
  methods: {
    formatNumber (x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    async submitCauHinhTiem () {
      this.dataReady = false;
      await this.$strapi.$cauhinh.update({
        thoigiannhacnho: this.form.thoigiannhacnho,
        thoigianthanhly: this.form.thoigianthanhly,
        muctieu: {
          hopdong: parseInt(this.form.muctieu.hopdong),
          sotien: parseInt(this.form.muctieu.sotien),
          dachuoc: parseInt(this.form.muctieu.dachuoc),
          chuachuoc: parseInt(this.form.muctieu.chuachuoc)
        },
        tienquy: parseInt(this.form.tienquy),
        diachi: this.form.diachi,
        sodienthoai: this.form.sodienthoai,
        slogan: this.form.slogan,
        nguoichiutrachnhiem: this.form.nguoichiutrachnhiem
      })
      window.location.reload();

    },

  },
  data () {
    return {
      loaitaisan: [],
      dataReady: false,
      form: {
        thoigiannhacnho: 0,
        thoigianthanhly: 0,
        muctieu: {
          hopdong: 0,
          sotien: 0,
          dachuoc: 0,
          chuachuoc: 0
        },
        tienquy: 0,
        diachi: '',
        sodienthoai: '',
        slogan: '',
        nguoichiutrachnhiem: ''
      },
      cauhinh: {
        kho: {
          vang: {},
          xe: {},
          dienthoai: {}
        }
      }
    }
  }

}
</script>

<style>
</style>