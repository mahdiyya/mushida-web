import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0ff488bb = () => interopDefault(import('..\\pages\\berita.vue' /* webpackChunkName: "pages/berita" */))
const _59309367 = () => interopDefault(import('..\\pages\\berita\\index.vue' /* webpackChunkName: "pages/berita/index" */))
const _5779f21f = () => interopDefault(import('..\\pages\\berita\\_slug.vue' /* webpackChunkName: "pages/berita/_slug" */))
const _1092ef30 = () => interopDefault(import('..\\pages\\kontak.vue' /* webpackChunkName: "pages/kontak" */))
const _1f465a2b = () => interopDefault(import('..\\pages\\privacy-policy.vue' /* webpackChunkName: "pages/privacy-policy" */))
const _c899e862 = () => interopDefault(import('..\\pages\\struktur-organisasi\\majelis-murobbiya-pusat.vue' /* webpackChunkName: "pages/struktur-organisasi/majelis-murobbiya-pusat" */))
const _201aeccc = () => interopDefault(import('..\\pages\\struktur-organisasi\\majelis-penasihat.vue' /* webpackChunkName: "pages/struktur-organisasi/majelis-penasihat" */))
const _01b64118 = () => interopDefault(import('..\\pages\\struktur-organisasi\\pengurus-pusat.vue' /* webpackChunkName: "pages/struktur-organisasi/pengurus-pusat" */))
const _5cbbf6d0 = () => interopDefault(import('..\\pages\\struktur-organisasi\\pengurus-wilayah.vue' /* webpackChunkName: "pages/struktur-organisasi/pengurus-wilayah" */))
const _956bd89c = () => interopDefault(import('..\\pages\\struktur-organisasi\\pengurus-wilayah\\index.vue' /* webpackChunkName: "pages/struktur-organisasi/pengurus-wilayah/index" */))
const _4ce3f132 = () => interopDefault(import('..\\pages\\struktur-organisasi\\pengurus-wilayah\\_region\\_slug.vue' /* webpackChunkName: "pages/struktur-organisasi/pengurus-wilayah/_region/_slug" */))
const _43af607d = () => interopDefault(import('..\\pages\\tentang-kami\\piagam-gunung-tembak.vue' /* webpackChunkName: "pages/tentang-kami/piagam-gunung-tembak" */))
const _3b2bb310 = () => interopDefault(import('..\\pages\\tentang-kami\\sejarah.vue' /* webpackChunkName: "pages/tentang-kami/sejarah" */))
const _3d8be11c = () => interopDefault(import('..\\pages\\tentang-kami\\sejarah\\index.vue' /* webpackChunkName: "pages/tentang-kami/sejarah/index" */))
const _405b7754 = () => interopDefault(import('..\\pages\\tentang-kami\\sejarah\\2006.vue' /* webpackChunkName: "pages/tentang-kami/sejarah/2006" */))
const _41bbc2ed = () => interopDefault(import('..\\pages\\tentang-kami\\sejarah\\2010.vue' /* webpackChunkName: "pages/tentang-kami/sejarah/2010" */))
const _42023872 = () => interopDefault(import('..\\pages\\tentang-kami\\sejarah\\2015.vue' /* webpackChunkName: "pages/tentang-kami/sejarah/2015" */))
const _43709b8c = () => interopDefault(import('..\\pages\\tentang-kami\\sejarah\\2020.vue' /* webpackChunkName: "pages/tentang-kami/sejarah/2020" */))
const _799a4d96 = () => interopDefault(import('..\\pages\\tentang-kami\\visi-misi.vue' /* webpackChunkName: "pages/tentang-kami/visi-misi" */))
const _759d6f6f = () => interopDefault(import('..\\pages\\search\\result\\redirect\\_searchval.vue' /* webpackChunkName: "pages/search/result/redirect/_searchval" */))
const _1f2c7a33 = () => interopDefault(import('..\\pages\\search\\result\\redirect\\_searchval\\index.vue' /* webpackChunkName: "pages/search/result/redirect/_searchval/index" */))
const _5e985a7c = () => interopDefault(import('..\\pages\\search\\result\\redirect\\_searchval\\_nextpage.vue' /* webpackChunkName: "pages/search/result/redirect/_searchval/_nextpage" */))
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
    children: [{
      path: "",
      component: _59309367,
      name: "berita"
    }, {
      path: ":slug",
      component: _5779f21f,
      name: "berita-slug"
    }]
  }, {
    path: "/kontak",
    component: _1092ef30,
    name: "kontak"
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
    }, {
      path: ":region/:slug?",
      component: _4ce3f132,
      name: "struktur-organisasi-pengurus-wilayah-region-slug"
    }]
  }, {
    path: "/tentang-kami/piagam-gunung-tembak",
    component: _43af607d,
    name: "tentang-kami-piagam-gunung-tembak"
  }, {
    path: "/tentang-kami/sejarah",
    component: _3b2bb310,
    children: [{
      path: "",
      component: _3d8be11c,
      name: "tentang-kami-sejarah"
    }, {
      path: "2006",
      component: _405b7754,
      name: "tentang-kami-sejarah-2006"
    }, {
      path: "2010",
      component: _41bbc2ed,
      name: "tentang-kami-sejarah-2010"
    }, {
      path: "2015",
      component: _42023872,
      name: "tentang-kami-sejarah-2015"
    }, {
      path: "2020",
      component: _43709b8c,
      name: "tentang-kami-sejarah-2020"
    }]
  }, {
    path: "/tentang-kami/visi-misi",
    component: _799a4d96,
    name: "tentang-kami-visi-misi"
  }, {
    path: "/search/result/redirect/:searchval?",
    component: _759d6f6f,
    children: [{
      path: "",
      component: _1f2c7a33,
      name: "search-result-redirect-searchval"
    }, {
      path: ":nextpage",
      component: _5e985a7c,
      name: "search-result-redirect-searchval-nextpage"
    }]
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
