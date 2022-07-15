import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _64bdb956 = () => interopDefault(import('../pages/berita.vue' /* webpackChunkName: "pages/berita" */))
const _6f391618 = () => interopDefault(import('../pages/berita/index.vue' /* webpackChunkName: "pages/berita/index" */))
const _27752a94 = () => interopDefault(import('../pages/berita/agenda.vue' /* webpackChunkName: "pages/berita/agenda" */))
const _2eeede8e = () => interopDefault(import('../pages/berita/agenda/index.vue' /* webpackChunkName: "pages/berita/agenda/index" */))
const _325c211e = () => interopDefault(import('../pages/berita/agenda/_slug.vue' /* webpackChunkName: "pages/berita/agenda/_slug" */))
const _09217ae7 = () => interopDefault(import('../pages/berita/all.vue' /* webpackChunkName: "pages/berita/all" */))
const _7429f82a = () => interopDefault(import('../pages/berita/all/index.vue' /* webpackChunkName: "pages/berita/all/index" */))
const _727356e2 = () => interopDefault(import('../pages/berita/all/_slug.vue' /* webpackChunkName: "pages/berita/all/_slug" */))
const _9baedec0 = () => interopDefault(import('../pages/berita/annisa.vue' /* webpackChunkName: "pages/berita/annisa" */))
const _192e1f23 = () => interopDefault(import('../pages/berita/annisa/index.vue' /* webpackChunkName: "pages/berita/annisa/index" */))
const _17777ddb = () => interopDefault(import('../pages/berita/annisa/_slug.vue' /* webpackChunkName: "pages/berita/annisa/_slug" */))
const _409466f2 = () => interopDefault(import('../pages/berita/artikel.vue' /* webpackChunkName: "pages/berita/artikel" */))
const _52a06ff5 = () => interopDefault(import('../pages/berita/artikel/index.vue' /* webpackChunkName: "pages/berita/artikel/index" */))
const _50e9cead = () => interopDefault(import('../pages/berita/artikel/_slug.vue' /* webpackChunkName: "pages/berita/artikel/_slug" */))
const _d3ab3d8c = () => interopDefault(import('../pages/berita/dakwah.vue' /* webpackChunkName: "pages/berita/dakwah" */))
const _1b13943d = () => interopDefault(import('../pages/berita/dakwah/index.vue' /* webpackChunkName: "pages/berita/dakwah/index" */))
const _195cf2f5 = () => interopDefault(import('../pages/berita/dakwah/_slug.vue' /* webpackChunkName: "pages/berita/dakwah/_slug" */))
const _f7d3c296 = () => interopDefault(import('../pages/berita/internasional.vue' /* webpackChunkName: "pages/berita/internasional" */))
const _111c0978 = () => interopDefault(import('../pages/berita/internasional/index.vue' /* webpackChunkName: "pages/berita/internasional/index" */))
const _0f656830 = () => interopDefault(import('../pages/berita/internasional/_slug.vue' /* webpackChunkName: "pages/berita/internasional/_slug" */))
const _05a27a7d = () => interopDefault(import('../pages/berita/news.vue' /* webpackChunkName: "pages/berita/news" */))
const _64966f40 = () => interopDefault(import('../pages/berita/news/index.vue' /* webpackChunkName: "pages/berita/news/index" */))
const _62dfcdf8 = () => interopDefault(import('../pages/berita/news/_slug.vue' /* webpackChunkName: "pages/berita/news/_slug" */))
const _ecd08b84 = () => interopDefault(import('../pages/berita/parenting.vue' /* webpackChunkName: "pages/berita/parenting" */))
const _3219cb7e = () => interopDefault(import('../pages/berita/parenting/index.vue' /* webpackChunkName: "pages/berita/parenting/index" */))
const _35870e0e = () => interopDefault(import('../pages/berita/parenting/_slug.vue' /* webpackChunkName: "pages/berita/parenting/_slug" */))
const _000df314 = () => interopDefault(import('../pages/berita/siaranpers.vue' /* webpackChunkName: "pages/berita/siaranpers" */))
const _7b564ad2 = () => interopDefault(import('../pages/berita/siaranpers/index.vue' /* webpackChunkName: "pages/berita/siaranpers/index" */))
const _7ec38d62 = () => interopDefault(import('../pages/berita/siaranpers/_slug.vue' /* webpackChunkName: "pages/berita/siaranpers/_slug" */))
const _7205677f = () => interopDefault(import('../pages/berita/wilayah.vue' /* webpackChunkName: "pages/berita/wilayah" */))
const _0e2012c2 = () => interopDefault(import('../pages/berita/wilayah/index.vue' /* webpackChunkName: "pages/berita/wilayah/index" */))
const _0c69717a = () => interopDefault(import('../pages/berita/wilayah/_slug.vue' /* webpackChunkName: "pages/berita/wilayah/_slug" */))
const _9539b9fc = () => interopDefault(import('../pages/kontak.vue' /* webpackChunkName: "pages/kontak" */))
const _66388a76 = () => interopDefault(import('../pages/privacy-policy.vue' /* webpackChunkName: "pages/privacy-policy" */))
const _4824734c = () => interopDefault(import('../pages/struktur-organisasi/majelis-murobbiya-pusat.vue' /* webpackChunkName: "pages/struktur-organisasi/majelis-murobbiya-pusat" */))
const _399af609 = () => interopDefault(import('../pages/struktur-organisasi/majelis-penasihat.vue' /* webpackChunkName: "pages/struktur-organisasi/majelis-penasihat" */))
const _7df408fb = () => interopDefault(import('../pages/struktur-organisasi/pengurus-pusat.vue' /* webpackChunkName: "pages/struktur-organisasi/pengurus-pusat" */))
const _7eb15c1a = () => interopDefault(import('../pages/struktur-organisasi/pengurus-wilayah.vue' /* webpackChunkName: "pages/struktur-organisasi/pengurus-wilayah" */))
const _eb055394 = () => interopDefault(import('../pages/struktur-organisasi/pengurus-wilayah/index.vue' /* webpackChunkName: "pages/struktur-organisasi/pengurus-wilayah/index" */))
const _54bc55f2 = () => interopDefault(import('../pages/struktur-organisasi/pengurus-wilayah/_region/_slug.vue' /* webpackChunkName: "pages/struktur-organisasi/pengurus-wilayah/_region/_slug" */))
const _5575a93c = () => interopDefault(import('../pages/tentang-kami/piagam-gunung-tembak.vue' /* webpackChunkName: "pages/tentang-kami/piagam-gunung-tembak" */))
const _526d180b = () => interopDefault(import('../pages/tentang-kami/sejarah.vue' /* webpackChunkName: "pages/tentang-kami/sejarah" */))
const _0827ab64 = () => interopDefault(import('../pages/tentang-kami/sejarah/index.vue' /* webpackChunkName: "pages/tentang-kami/sejarah/index" */))
const _d866de10 = () => interopDefault(import('../pages/tentang-kami/sejarah/2006.vue' /* webpackChunkName: "pages/tentang-kami/sejarah/2006" */))
const _d5a646de = () => interopDefault(import('../pages/tentang-kami/sejarah/2010.vue' /* webpackChunkName: "pages/tentang-kami/sejarah/2010" */))
const _d5195bd4 = () => interopDefault(import('../pages/tentang-kami/sejarah/2015.vue' /* webpackChunkName: "pages/tentang-kami/sejarah/2015" */))
const _d23c95a0 = () => interopDefault(import('../pages/tentang-kami/sejarah/2020.vue' /* webpackChunkName: "pages/tentang-kami/sejarah/2020" */))
const _73d3405e = () => interopDefault(import('../pages/tentang-kami/visi-misi.vue' /* webpackChunkName: "pages/tentang-kami/visi-misi" */))
const _2f70dfb8 = () => interopDefault(import('../pages/search/result/redirect/_searchval.vue' /* webpackChunkName: "pages/search/result/redirect/_searchval" */))
const _5c886ba7 = () => interopDefault(import('../pages/search/result/redirect/_searchval/index.vue' /* webpackChunkName: "pages/search/result/redirect/_searchval/index" */))
const _3311ea36 = () => interopDefault(import('../pages/search/result/redirect/_searchval/_nextpage.vue' /* webpackChunkName: "pages/search/result/redirect/_searchval/_nextpage" */))
const _22b7f914 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _3971b9b4 = () => interopDefault(import('../pages/_year/_month/_blog.vue' /* webpackChunkName: "pages/_year/_month/_blog" */))

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
    component: _64bdb956,
    children: [{
      path: "",
      component: _6f391618,
      name: "berita"
    }, {
      path: "agenda",
      component: _27752a94,
      children: [{
        path: "",
        component: _2eeede8e,
        name: "berita-agenda"
      }, {
        path: ":slug",
        component: _325c211e,
        name: "berita-agenda-slug"
      }]
    }, {
      path: "all",
      component: _09217ae7,
      children: [{
        path: "",
        component: _7429f82a,
        name: "berita-all"
      }, {
        path: ":slug",
        component: _727356e2,
        name: "berita-all-slug"
      }]
    }, {
      path: "annisa",
      component: _9baedec0,
      children: [{
        path: "",
        component: _192e1f23,
        name: "berita-annisa"
      }, {
        path: ":slug",
        component: _17777ddb,
        name: "berita-annisa-slug"
      }]
    }, {
      path: "artikel",
      component: _409466f2,
      children: [{
        path: "",
        component: _52a06ff5,
        name: "berita-artikel"
      }, {
        path: ":slug",
        component: _50e9cead,
        name: "berita-artikel-slug"
      }]
    }, {
      path: "dakwah",
      component: _d3ab3d8c,
      children: [{
        path: "",
        component: _1b13943d,
        name: "berita-dakwah"
      }, {
        path: ":slug",
        component: _195cf2f5,
        name: "berita-dakwah-slug"
      }]
    }, {
      path: "internasional",
      component: _f7d3c296,
      children: [{
        path: "",
        component: _111c0978,
        name: "berita-internasional"
      }, {
        path: ":slug",
        component: _0f656830,
        name: "berita-internasional-slug"
      }]
    }, {
      path: "news",
      component: _05a27a7d,
      children: [{
        path: "",
        component: _64966f40,
        name: "berita-news"
      }, {
        path: ":slug",
        component: _62dfcdf8,
        name: "berita-news-slug"
      }]
    }, {
      path: "parenting",
      component: _ecd08b84,
      children: [{
        path: "",
        component: _3219cb7e,
        name: "berita-parenting"
      }, {
        path: ":slug",
        component: _35870e0e,
        name: "berita-parenting-slug"
      }]
    }, {
      path: "siaranpers",
      component: _000df314,
      children: [{
        path: "",
        component: _7b564ad2,
        name: "berita-siaranpers"
      }, {
        path: ":slug",
        component: _7ec38d62,
        name: "berita-siaranpers-slug"
      }]
    }, {
      path: "wilayah",
      component: _7205677f,
      children: [{
        path: "",
        component: _0e2012c2,
        name: "berita-wilayah"
      }, {
        path: ":slug",
        component: _0c69717a,
        name: "berita-wilayah-slug"
      }]
    }]
  }, {
    path: "/kontak",
    component: _9539b9fc,
    name: "kontak"
  }, {
    path: "/privacy-policy",
    component: _66388a76,
    name: "privacy-policy"
  }, {
    path: "/struktur-organisasi/majelis-murobbiya-pusat",
    component: _4824734c,
    name: "struktur-organisasi-majelis-murobbiya-pusat"
  }, {
    path: "/struktur-organisasi/majelis-penasihat",
    component: _399af609,
    name: "struktur-organisasi-majelis-penasihat"
  }, {
    path: "/struktur-organisasi/pengurus-pusat",
    component: _7df408fb,
    name: "struktur-organisasi-pengurus-pusat"
  }, {
    path: "/struktur-organisasi/pengurus-wilayah",
    component: _7eb15c1a,
    children: [{
      path: "",
      component: _eb055394,
      name: "struktur-organisasi-pengurus-wilayah"
    }, {
      path: ":region/:slug?",
      component: _54bc55f2,
      name: "struktur-organisasi-pengurus-wilayah-region-slug"
    }]
  }, {
    path: "/tentang-kami/piagam-gunung-tembak",
    component: _5575a93c,
    name: "tentang-kami-piagam-gunung-tembak"
  }, {
    path: "/tentang-kami/sejarah",
    component: _526d180b,
    children: [{
      path: "",
      component: _0827ab64,
      name: "tentang-kami-sejarah"
    }, {
      path: "2006",
      component: _d866de10,
      name: "tentang-kami-sejarah-2006"
    }, {
      path: "2010",
      component: _d5a646de,
      name: "tentang-kami-sejarah-2010"
    }, {
      path: "2015",
      component: _d5195bd4,
      name: "tentang-kami-sejarah-2015"
    }, {
      path: "2020",
      component: _d23c95a0,
      name: "tentang-kami-sejarah-2020"
    }]
  }, {
    path: "/tentang-kami/visi-misi",
    component: _73d3405e,
    name: "tentang-kami-visi-misi"
  }, {
    path: "/search/result/redirect/:searchval?",
    component: _2f70dfb8,
    children: [{
      path: "",
      component: _5c886ba7,
      name: "search-result-redirect-searchval"
    }, {
      path: ":nextpage",
      component: _3311ea36,
      name: "search-result-redirect-searchval-nextpage"
    }]
  }, {
    path: "/",
    component: _22b7f914,
    name: "index"
  }, {
    path: "/:year/:month?/:blog?",
    component: _3971b9b4,
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
