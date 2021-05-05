/* eslint-disable */

export default {
  state: {
    items: []
  },

  mutations: {
    updateItems(state, items) {
      state.items = items
    }
  },

  getters: {
    AllItems(state) {
      return state.items
    }
  },
  actions: {
    async fetchItems(ctx) {
      const res = await fetch("http://localhost:1337/items")
      const items = await res.json()
      ctx.commit('updateItems', items)
    }
  },
}
