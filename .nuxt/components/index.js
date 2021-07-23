import { wrapFunctional } from './utils'

export { default as CardSimple } from '../..\\components\\CardSimple.vue'
export { default as CardStructure } from '../..\\components\\CardStructure.vue'
export { default as Footer } from '../..\\components\\Footer.vue'
export { default as Hero } from '../..\\components\\Hero.vue'
export { default as HeroSub } from '../..\\components\\HeroSub.vue'
export { default as Logo } from '../..\\components\\Logo.vue'
export { default as Nav } from '../..\\components\\Nav.vue'
export { default as NewsCard } from '../..\\components\\NewsCard.vue'
export { default as RecommendedCard } from '../..\\components\\RecommendedCard.vue'
export { default as SubNav } from '../..\\components\\SubNav.vue'

export const LazyCardSimple = import('../..\\components\\CardSimple.vue' /* webpackChunkName: "components/card-simple" */).then(c => wrapFunctional(c.default || c))
export const LazyCardStructure = import('../..\\components\\CardStructure.vue' /* webpackChunkName: "components/card-structure" */).then(c => wrapFunctional(c.default || c))
export const LazyFooter = import('../..\\components\\Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c))
export const LazyHero = import('../..\\components\\Hero.vue' /* webpackChunkName: "components/hero" */).then(c => wrapFunctional(c.default || c))
export const LazyHeroSub = import('../..\\components\\HeroSub.vue' /* webpackChunkName: "components/hero-sub" */).then(c => wrapFunctional(c.default || c))
export const LazyLogo = import('../..\\components\\Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c))
export const LazyNav = import('../..\\components\\Nav.vue' /* webpackChunkName: "components/nav" */).then(c => wrapFunctional(c.default || c))
export const LazyNewsCard = import('../..\\components\\NewsCard.vue' /* webpackChunkName: "components/news-card" */).then(c => wrapFunctional(c.default || c))
export const LazyRecommendedCard = import('../..\\components\\RecommendedCard.vue' /* webpackChunkName: "components/recommended-card" */).then(c => wrapFunctional(c.default || c))
export const LazySubNav = import('../..\\components\\SubNav.vue' /* webpackChunkName: "components/sub-nav" */).then(c => wrapFunctional(c.default || c))
