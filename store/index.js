export const state = () => ({
  posts: [],
  article: [],
  features: [],
  provincedata: [],
  recoms: [],
  searchres: [],
  totalpagesearchs: [],
  values: [],
  author: [],
})

export const mutations = {
  frontPagePosts(state, posts) {
    state.posts = posts
  },
  totalPage(state, totalpages) {
    state.totalpages = totalpages
  },
  totalPageSearch(state, totalpagesearchs) {
    state.totalpagesearchs = totalpagesearchs
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
  recomsData(state, recoms) {
    state.recoms = recoms
  },
  searchPosts(state, searchres) {
    state.searchres = searchres
  },
  searchValue(state, searchVal) {
    state.searchVal = searchVal
  },
  addItem(state, value) {
    state.values.push(value)
  },
  authorData(state, author) {
    state.author = author
  },
}
