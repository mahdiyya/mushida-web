export const state = () => ({
  posts: [],
  article: [],
  features: [],
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
}
