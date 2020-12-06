
export default function ({ store, redirect, app, query, params, route }) {
    //check login,query
    if (app.$cookies.get('login')) {
        store.commit('generalStore/setConfigState')
        return redirect();
    } else {
        return redirect('/login')
    }
}