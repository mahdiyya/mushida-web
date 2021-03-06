import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  AdsPopup: () => import('../..\\components\\AdsPopup.vue' /* webpackChunkName: "components/ads-popup" */).then(c => wrapFunctional(c.default || c)),
  CardStructure: () => import('../..\\components\\CardStructure.vue' /* webpackChunkName: "components/card-structure" */).then(c => wrapFunctional(c.default || c)),
  Date: () => import('../..\\components\\Date.vue' /* webpackChunkName: "components/date" */).then(c => wrapFunctional(c.default || c)),
  Footer: () => import('../..\\components\\Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c)),
  Hero: () => import('../..\\components\\Hero.vue' /* webpackChunkName: "components/hero" */).then(c => wrapFunctional(c.default || c)),
  HeroSub: () => import('../..\\components\\HeroSub.vue' /* webpackChunkName: "components/hero-sub" */).then(c => wrapFunctional(c.default || c)),
  Nav: () => import('../..\\components\\Nav.vue' /* webpackChunkName: "components/nav" */).then(c => wrapFunctional(c.default || c)),
  NewsCard: () => import('../..\\components\\NewsCard.vue' /* webpackChunkName: "components/news-card" */).then(c => wrapFunctional(c.default || c)),
  RecommendedCard: () => import('../..\\components\\RecommendedCard.vue' /* webpackChunkName: "components/recommended-card" */).then(c => wrapFunctional(c.default || c)),
  SejarahContent: () => import('../..\\components\\SejarahContent.vue' /* webpackChunkName: "components/sejarah-content" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
