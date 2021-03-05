
export const state = () => ({
    thoigiannhacnho: 0,
    thoigianthanhly: 0,
    muctieu: {
        hopdong: 0,
        sotien: 0,
        dachuoc: 0,
        chuachuoc: 0,
    },
    diachi: '',
    slogan: '',
    nguoichiutrachnhiem: '',
})

export const mutations = {
    setConfigState (state) {

        //kiem tra trong cookies, neu khong co thi doc tu server
        (async () => {
            if (this.$cookies.get('config') === undefined) {
                let a = await this.$strapi.$cauhinh.find()
                state.thoigiannhacnho = a.thoigiannhacnho
                state.thoigianthanhly = a.thoigianthanhly
                state.muctieu.hopdong = a.muctieu.hopdong;
                state.muctieu.sotien = a.muctieu.sotien
                state.muctieu.dachuoc = a.muctieu.dachuoc
                state.muctieu.chuachuoc = a.muctieu.chuachuoc
                state.diachi = a.diachi
                state.slogan = a.slogan
                state.nguoichiutrachnhiem = a.nguoichiutrachnhiem

                this.$cookies.set('config', a)
                //luu vao cookie

            } else {
                //co trong cookies
                let a = this.$cookies.get('config')
                state.thoigiannhacnho = a.thoigiannhacnho
                state.thoigianthanhly = a.thoigianthanhly
                state.muctieu.hopdong = a.muctieu.hopdong;
                state.muctieu.sotien = a.muctieu.sotien
                state.muctieu.dachuoc = a.muctieu.dachuoc
                state.muctieu.chuachuoc = a.muctieu.chuachuoc
                state.diachi = a.diachi
                state.slogan = a.slogan
                state.nguoichiutrachnhiem = a.nguoichiutrachnhiem
            }
        })();

    },

}

