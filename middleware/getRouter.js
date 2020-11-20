import { BreadcrumbPlugin } from "bootstrap-vue";

export default function ({ store, redirect, app, query, params, route }) {
    //check login,query
    let a = route.path;
    let b = a.split("/")[1];
    let result = [];
    if (b == '') {
        result = ['Home']
    }

    let c = a.split("/");
    result = c.slice(1)
    result.forEach((element, index) => {
        if (element.toLowerCase() == "hopdong") {
            result[index] = "Hợp Đồng"
        } if (element.toLowerCase() == "nhatkitruycap") {
            result[index] = "Nhật Kí Truy Cập"
        }
        if (element.toLowerCase() == "new") {
            result[index] = "Mới"
        } if (element.toLowerCase() == "edit") {
            result[index] = "Chỉnh Sửa"
        }

    });
    //update to store
    store.commit('router/setCurrentRoute', result)
}