/* eslint-disable */
export const state = () => ({
  items: [
  ]
})

export const mutations = {
  get(state) {
    fetch('http://localhost:1337/items')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        state.items = data;
      });
  }
}
