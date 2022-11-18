import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _ff46084c = () => interopDefault(import('..\\pages\\berita.vue' /* webpackChunkName: "pages/berita" */))
const _4195a130 = () => interopDefault(import('..\\pages\\berita\\index.vue' /* webpackChunkName: "pages/berita/index" */))
const _7bcc7b66 = () => interopDefault(import('..\\pages\\berita\\agenda.vue' /* webpackChunkName: "pages/berita/agenda" */))
const _7d4d5a5c = () => interopDefault(import('..\\pages\\berita\\agenda\\index.vue' /* webpackChunkName: "pages/berita/agenda/index" */))
const _7b96b914 = () => interopDefault(import('..\\pages\\berita\\agenda\\_slug.vue' /* webpackChunkName: "pages/berita/agenda/_slug" */))
const _24f3a837 = () => interopDefault(import('..\\pages\\berita\\all.vue' /* webpackChunkName: "pages/berita/all" */))
const _0cd2506b = () => interopDefault(import('..\\pages\\berita\\all\\index.vue' /* webpackChunkName: "pages/berita/all/index" */))
const _0b1baf23 = () => interopDefault(import('..\\pages\\berita\\all\\_slug.vue' /* webpackChunkName: "pages/berita/all/_slug" */))
const _41afa150 = () => interopDefault(import('..\\pages\\berita\\annisa.vue' /* webpackChunkName: "pages/berita/annisa" */))
const _61599932 = () => interopDefault(import('..\\pages\\berita\\annisa\\index.vue' /* webpackChunkName: "pages/berita/annisa/index" */))
const _5fa2f7ea = () => interopDefault(import('..\\pages\\berita\\annisa\\_slug.vue' /* webpackChunkName: "pages/berita/annisa/_slug" */))
const _bc21277c = () => interopDefault(import('..\\pages\\berita\\artikel.vue' /* webpackChunkName: "pages/berita/artikel" */))
const _27020c00 = () => interopDefault(import('..\\pages\\berita\\artikel\\index.vue' /* webpackChunkName: "pages/berita/artikel/index" */))
const _2a6f4e90 = () => interopDefault(import('..\\pages\\berita\\artikel\\_slug.vue' /* webpackChunkName: "pages/berita/artikel/_slug" */))
const _25b171ea = () => interopDefault(import('..\\pages\\berita\\dakwah.vue' /* webpackChunkName: "pages/berita/dakwah" */))
const _c7ba7150 = () => interopDefault(import('..\\pages\\berita\\dakwah\\index.vue' /* webpackChunkName: "pages/berita/dakwah/index" */))
const _cb27b3e0 = () => interopDefault(import('..\\pages\\berita\\dakwah\\_slug.vue' /* webpackChunkName: "pages/berita/dakwah/_slug" */))
const _3c4be805 = () => interopDefault(import('..\\pages\\berita\\internasional.vue' /* webpackChunkName: "pages/berita/internasional" */))
const _f8916646 = () => interopDefault(import('..\\pages\\berita\\internasional\\index.vue' /* webpackChunkName: "pages/berita/internasional/index" */))
const _fbfea8d6 = () => interopDefault(import('..\\pages\\berita\\internasional\\_slug.vue' /* webpackChunkName: "pages/berita/internasional/_slug" */))
const _6415f72d = () => interopDefault(import('..\\pages\\berita\\news.vue' /* webpackChunkName: "pages/berita/news" */))
const _517d60b5 = () => interopDefault(import('..\\pages\\berita\\news\\index.vue' /* webpackChunkName: "pages/berita/news/index" */))
const _4fc6bf6d = () => interopDefault(import('..\\pages\\berita\\news\\_slug.vue' /* webpackChunkName: "pages/berita/news/_slug" */))
const _0046ab8e = () => interopDefault(import('..\\pages\\berita\\parenting.vue' /* webpackChunkName: "pages/berita/parenting" */))
const _4f2c2d34 = () => interopDefault(import('..\\pages\\berita\\parenting\\index.vue' /* webpackChunkName: "pages/berita/parenting/index" */))
const _4d758bec = () => interopDefault(import('..\\pages\\berita\\parenting\\_slug.vue' /* webpackChunkName: "pages/berita/parenting/_slug" */))
const _5f3d2bc4 = () => interopDefault(import('..\\pages\\berita\\siaranpers.vue' /* webpackChunkName: "pages/berita/siaranpers" */))
const _6135b784 = () => interopDefault(import('..\\pages\\berita\\siaranpers\\index.vue' /* webpackChunkName: "pages/berita/siaranpers/index" */))
const _64a2fa14 = () => interopDefault(import('..\\pages\\berita\\siaranpers\\_slug.vue' /* webpackChunkName: "pages/berita/siaranpers/_slug" */))
const _593f2662 = () => interopDefault(import('..\\pages\\berita\\wilayah.vue' /* webpackChunkName: "pages/berita/wilayah" */))
const _be189e5a = () => interopDefault(import('..\\pages\\berita\\wilayah\\index.vue' /* webpackChunkName: "pages/berita/wilayah/index" */))
const _c185e0ea = () => interopDefault(import('..\\pages\\berita\\wilayah\\_slug.vue' /* webpackChunkName: "pages/berita/wilayah/_slug" */))
const _681efb87 = () => interopDefault(import('..\\pages\\kontak.vue' /* webpackChunkName: "pages/kontak" */))
const _59d53e4a = () => interopDefault(import('..\\pages\\privacy-policy.vue' /* webpackChunkName: "pages/privacy-policy" */))
const _444b2fae = () => interopDefault(import('..\\pages\\struktur-organisasi\\majelis-murobbiya-pusat.vue' /* webpackChunkName: "pages/struktur-organisasi/majelis-murobbiya-pusat" */))
const _171723eb = () => interopDefault(import('..\\pages\\struktur-organisasi\\majelis-penasihat.vue' /* webpackChunkName: "pages/struktur-organisasi/majelis-penasihat" */))
const _1f61134e = () => interopDefault(import('..\\pages\\struktur-organisasi\\pengurus-pusat.vue' /* webpackChunkName: "pages/struktur-organisasi/pengurus-pusat" */))
const _09dcdfd1 = () => interopDefault(import('..\\pages\\struktur-organisasi\\pengurus-wilayah.vue' /* webpackChunkName: "pages/struktur-organisasi/pengurus-wilayah" */))
const _5de23791 = () => interopDefault(import('..\\pages\\struktur-organisasi\\pengurus-wilayah\\index.vue' /* webpackChunkName: "pages/struktur-organisasi/pengurus-wilayah/index" */))
const _3266ce68 = () => interopDefault(import('..\\pages\\struktur-organisasi\\pengurus-wilayah\\_region\\_slug.vue' /* webpackChunkName: "pages/struktur-organisasi/pengurus-wilayah/_region/_slug" */))
const _6c69ff1c = () => interopDefault(import('..\\pages\\tentang-kami\\piagam-gunung-tembak.vue' /* webpackChunkName: "pages/tentang-kami/piagam-gunung-tembak" */))
const _75ce83de = () => interopDefault(import('..\\pages\\tentang-kami\\sejarah.vue' /* webpackChunkName: "pages/tentang-kami/sejarah" */))
const _51085d5e = () => interopDefault(import('..\\pages\\tentang-kami\\sejarah\\index.vue' /* webpackChunkName: "pages/tentang-kami/sejarah/index" */))
const _040b04d6 = () => interopDefault(import('..\\pages\\tentang-kami\\sejarah\\2006.vue' /* webpackChunkName: "pages/tentang-kami/sejarah/2006" */))
const _014a6da4 = () => interopDefault(import('..\\pages\\tentang-kami\\sejarah\\2010.vue' /* webpackChunkName: "pages/tentang-kami/sejarah/2010" */))
const _00bd829a = () => interopDefault(import('..\\pages\\tentang-kami\\sejarah\\2015.vue' /* webpackChunkName: "pages/tentang-kami/sejarah/2015" */))
const _010fa1cd = () => interopDefault(import('..\\pages\\tentang-kami\\sejarah\\2020.vue' /* webpackChunkName: "pages/tentang-kami/sejarah/2020" */))
const _3c709c57 = () => interopDefault(import('..\\pages\\tentang-kami\\visi-misi.vue' /* webpackChunkName: "pages/tentang-kami/visi-misi" */))
const _5a2ae24e = () => interopDefault(import('..\\pages\\search\\result\\redirect\\_searchval.vue' /* webpackChunkName: "pages/search/result/redirect/_searchval" */))
const _3520de74 = () => interopDefault(import('..\\pages\\search\\result\\redirect\\_searchval\\index.vue' /* webpackChunkName: "pages/search/result/redirect/_searchval/index" */))
const _516a2e83 = () => interopDefault(import('..\\pages\\search\\result\\redirect\\_searchval\\_nextpage.vue' /* webpackChunkName: "pages/search/result/redirect/_searchval/_nextpage" */))
const _6a8c7bef = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _145bc8b7 = () => interopDefault(import('..\\pages\\_year\\_month\\_blog.vue' /* webpackChunkName: "pages/_year/_month/_blog" */))

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
    component: _ff46084c,
    children: [{
      path: "",
      component: _4195a130,
      name: "berita"
    }, {
      path: "agenda",
      component: _7bcc7b66,
      children: [{
        path: "",
        component: _7d4d5a5c,
        name: "berita-agenda"
      }, {
        path: ":slug",
        component: _7b96b914,
        name: "berita-agenda-slug"
      }]
    }, {
      path: "all",
      component: _24f3a837,
      children: [{
        path: "",
        component: _0cd2506b,
        name: "berita-all"
      }, {
        path: ":slug",
        component: _0b1baf23,
        name: "berita-all-slug"
      }]
    }, {
      path: "annisa",
      component: _41afa150,
      children: [{
        path: "",
        component: _61599932,
        name: "berita-annisa"
      }, {
        path: ":slug",
        component: _5fa2f7ea,
        name: "berita-annisa-slug"
      }]
    }, {
      path: "artikel",
      component: _bc21277c,
      children: [{
        path: "",
        component: _27020c00,
        name: "berita-artikel"
      }, {
        path: ":slug",
        component: _2a6f4e90,
        name: "berita-artikel-slug"
      }]
    }, {
      path: "dakwah",
      component: _25b171ea,
      children: [{
        path: "",
        component: _c7ba7150,
        name: "berita-dakwah"
      }, {
        path: ":slug",
        component: _cb27b3e0,
        name: "berita-dakwah-slug"
      }]
    }, {
      path: "internasional",
      component: _3c4be805,
      children: [{
        path: "",
        component: _f8916646,
        name: "berita-internasional"
      }, {
        path: ":slug",
        component: _fbfea8d6,
        name: "berita-internasional-slug"
      }]
    }, {
      path: "news",
      component: _6415f72d,
      children: [{
        path: "",
        component: _517d60b5,
        name: "berita-news"
      }, {
        path: ":slug",
        component: _4fc6bf6d,
        name: "berita-news-slug"
      }]
    }, {
      path: "parenting",
      component: _0046ab8e,
      children: [{
        path: "",
        component: _4f2c2d34,
        name: "berita-parenting"
      }, {
        path: ":slug",
        component: _4d758bec,
        name: "berita-parenting-slug"
      }]
    }, {
      path: "siaranpers",
      component: _5f3d2bc4,
      children: [{
        path: "",
        component: _6135b784,
        name: "berita-siaranpers"
      }, {
        path: ":slug",
        component: _64a2fa14,
        name: "berita-siaranpers-slug"
      }]
    }, {
      path: "wilayah",
      component: _593f2662,
      children: [{
        path: "",
        component: _be189e5a,
        name: "berita-wilayah"
      }, {
        path: ":slug",
        component: _c185e0ea,
        name: "berita-wilayah-slug"
      }]
    }]
  }, {
    path: "/kontak",
    component: _681efb87,
    name: "kontak"
  }, {
    path: "/privacy-policy",
    component: _59d53e4a,
    name: "privacy-policy"
  }, {
    path: "/struktur-organisasi/majelis-murobbiya-pusat",
    component: _444b2fae,
    name: "struktur-organisasi-majelis-murobbiya-pusat"
  }, {
    path: "/struktur-organisasi/majelis-penasihat",
    component: _171723eb,
    name: "struktur-organisasi-majelis-penasihat"
  }, {
    path: "/struktur-organisasi/pengurus-pusat",
    component: _1f61134e,
    name: "struktur-organisasi-pengurus-pusat"
  }, {
    path: "/struktur-organisasi/pengurus-wilayah",
    component: _09dcdfd1,
    children: [{
      path: "",
      component: _5de23791,
      name: "struktur-organisasi-pengurus-wilayah"
    }, {
      path: ":region/:slug?",
      component: _3266ce68,
      name: "struktur-organisasi-pengurus-wilayah-region-slug"
    }]
  }, {
    path: "/tentang-kami/piagam-gunung-tembak",
    component: _6c69ff1c,
    name: "tentang-kami-piagam-gunung-tembak"
  }, {
    path: "/tentang-kami/sejarah",
    component: _75ce83de,
    children: [{
      path: "",
      component: _51085d5e,
      name: "tentang-kami-sejarah"
    }, {
      path: "2006",
      component: _040b04d6,
      name: "tentang-kami-sejarah-2006"
    }, {
      path: "2010",
      component: _014a6da4,
      name: "tentang-kami-sejarah-2010"
    }, {
      path: "2015",
      component: _00bd829a,
      name: "tentang-kami-sejarah-2015"
    }, {
      path: "2020",
      component: _010fa1cd,
      name: "tentang-kami-sejarah-2020"
    }]
  }, {
    path: "/tentang-kami/visi-misi",
    component: _3c709c57,
    name: "tentang-kami-visi-misi"
  }, {
    path: "/search/result/redirect/:searchval?",
    component: _5a2ae24e,
    children: [{
      path: "",
      component: _3520de74,
      name: "search-result-redirect-searchval"
    }, {
      path: ":nextpage",
      component: _516a2e83,
      name: "search-result-redirect-searchval-nextpage"
    }]
  }, {
    path: "/",
    component: _6a8c7bef,
    name: "index"
  }, {
    path: "/:year/:month?/:blog?",
    component: _145bc8b7,
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
