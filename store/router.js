export const state = () => ({
    currentRouter: '/'
})

export const mutations = {
    setCurrentRoute (state, router) {
        state.currentRouter = router;
    }
}

