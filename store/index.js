export const state = () => ({
  posts: [],
  article: []
})

export const mutations = {
  frontPagePosts (state, posts) {
    state.posts = posts
  },
  totalPage (state, totalpages) {
    state.totalpages = totalpages
  },
  articleData (state, article) {
    state.article = article
  }
}
