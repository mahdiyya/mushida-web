export const state = () => ({
  posts: [],
  article: [],
  features: [],
  provincedata: [],
})

export const mutations = {
  frontPagePosts(state, posts) {
    state.posts = posts
  },
  totalPage(state, totalpages) {
    state.totalpages = totalpages
  },
  articleData(state, article) {
    state.article = article
  },
  featuredPosts(state, features) {
    state.features = features
  },
  provincestructure(state, provincedata) {
    state.provincedata = provincedata
  },
}
