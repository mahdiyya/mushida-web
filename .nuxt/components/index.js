import { wrapFunctional } from './utils'

export { default as AdsPopup } from '../../components/AdsPopup.vue'
export { default as CardStructure } from '../../components/CardStructure.vue'
export { default as Date } from '../../components/Date.vue'
export { default as Footer } from '../../components/Footer.vue'
export { default as Hero } from '../../components/Hero.vue'
export { default as HeroSub } from '../../components/HeroSub.vue'
export { default as Nav } from '../../components/Nav.vue'
export { default as NewsCard } from '../../components/NewsCard.vue'
export { default as RecommendedCard } from '../../components/RecommendedCard.vue'
export { default as SejarahContent } from '../../components/SejarahContent.vue'

export const LazyAdsPopup = import('../../components/AdsPopup.vue' /* webpackChunkName: "components/ads-popup" */).then(c => wrapFunctional(c.default || c))
export const LazyCardStructure = import('../../components/CardStructure.vue' /* webpackChunkName: "components/card-structure" */).then(c => wrapFunctional(c.default || c))
export const LazyDate = import('../../components/Date.vue' /* webpackChunkName: "components/date" */).then(c => wrapFunctional(c.default || c))
export const LazyFooter = import('../../components/Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c))
export const LazyHero = import('../../components/Hero.vue' /* webpackChunkName: "components/hero" */).then(c => wrapFunctional(c.default || c))
export const LazyHeroSub = import('../../components/HeroSub.vue' /* webpackChunkName: "components/hero-sub" */).then(c => wrapFunctional(c.default || c))
export const LazyNav = import('../../components/Nav.vue' /* webpackChunkName: "components/nav" */).then(c => wrapFunctional(c.default || c))
export const LazyNewsCard = import('../../components/NewsCard.vue' /* webpackChunkName: "components/news-card" */).then(c => wrapFunctional(c.default || c))
export const LazyRecommendedCard = import('../../components/RecommendedCard.vue' /* webpackChunkName: "components/recommended-card" */).then(c => wrapFunctional(c.default || c))
export const LazySejarahContent = import('../../components/SejarahContent.vue' /* webpackChunkName: "components/sejarah-content" */).then(c => wrapFunctional(c.default || c))
