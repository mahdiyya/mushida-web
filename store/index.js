export const state = () => ({
  posts: [],
  article: [],
  features: [],
  provincedata: [],
  recoms: [],
  searchres: [],
})

export const mutations = {
  frontPagePosts(state, posts) {
    state.posts = posts
  },
  totalPage(state, totalpages) {
    state.totalpages = totalpages
  },
  totalPageSearch(state, totalpagesSearch) {
    state.totalpagesSearch = totalpagesSearch
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
}
