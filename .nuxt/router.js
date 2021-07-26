import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0ff488bb = () => interopDefault(import('..\\pages\\berita.vue' /* webpackChunkName: "pages/berita" */))
const _1f465a2b = () => interopDefault(import('..\\pages\\privacy-policy.vue' /* webpackChunkName: "pages/privacy-policy" */))
const _c899e862 = () => interopDefault(import('..\\pages\\struktur-organisasi\\majelis-murobbiya-pusat.vue' /* webpackChunkName: "pages/struktur-organisasi/majelis-murobbiya-pusat" */))
const _201aeccc = () => interopDefault(import('..\\pages\\struktur-organisasi\\majelis-penasihat.vue' /* webpackChunkName: "pages/struktur-organisasi/majelis-penasihat" */))
const _01b64118 = () => interopDefault(import('..\\pages\\struktur-organisasi\\pengurus-pusat.vue' /* webpackChunkName: "pages/struktur-organisasi/pengurus-pusat" */))
const _5cbbf6d0 = () => interopDefault(import('..\\pages\\struktur-organisasi\\pengurus-wilayah.vue' /* webpackChunkName: "pages/struktur-organisasi/pengurus-wilayah" */))
const _956bd89c = () => interopDefault(import('..\\pages\\struktur-organisasi\\pengurus-wilayah\\index.vue' /* webpackChunkName: "pages/struktur-organisasi/pengurus-wilayah/index" */))
const _842b51a6 = () => interopDefault(import('..\\pages\\tentang-kami\\piagam-gunug-tembak.vue' /* webpackChunkName: "pages/tentang-kami/piagam-gunug-tembak" */))
const _3b2bb310 = () => interopDefault(import('..\\pages\\tentang-kami\\sejarah.vue' /* webpackChunkName: "pages/tentang-kami/sejarah" */))
const _799a4d96 = () => interopDefault(import('..\\pages\\tentang-kami\\visi-misi.vue' /* webpackChunkName: "pages/tentang-kami/visi-misi" */))
const _19616224 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _07a6b7d8 = () => interopDefault(import('..\\pages\\_year\\_month\\_blog.vue' /* webpackChunkName: "pages/_year/_month/_blog" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/berita",
    component: _0ff488bb,
    name: "berita"
  }, {
    path: "/privacy-policy",
    component: _1f465a2b,
    name: "privacy-policy"
  }, {
    path: "/struktur-organisasi/majelis-murobbiya-pusat",
    component: _c899e862,
    name: "struktur-organisasi-majelis-murobbiya-pusat"
  }, {
    path: "/struktur-organisasi/majelis-penasihat",
    component: _201aeccc,
    name: "struktur-organisasi-majelis-penasihat"
  }, {
    path: "/struktur-organisasi/pengurus-pusat",
    component: _01b64118,
    name: "struktur-organisasi-pengurus-pusat"
  }, {
    path: "/struktur-organisasi/pengurus-wilayah",
    component: _5cbbf6d0,
    children: [{
      path: "",
      component: _956bd89c,
      name: "struktur-organisasi-pengurus-wilayah"
    }]
  }, {
    path: "/tentang-kami/piagam-gunug-tembak",
    component: _842b51a6,
    name: "tentang-kami-piagam-gunug-tembak"
  }, {
    path: "/tentang-kami/sejarah",
    component: _3b2bb310,
    name: "tentang-kami-sejarah"
  }, {
    path: "/tentang-kami/visi-misi",
    component: _799a4d96,
    name: "tentang-kami-visi-misi"
  }, {
    path: "/",
    component: _19616224,
    name: "index"
  }, {
    path: "/:year/:month?/:blog?",
    component: _07a6b7d8,
    name: "year-month-blog"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
