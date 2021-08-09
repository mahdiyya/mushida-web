<template>
  <main class="artikel">
    <Nav />
    <div class="hero">
      <img
        v-if="article[0].fimg_url !== false"
        :src="article[0].fimg_url"
        :alt="article[0].title.rendered"
        width="512"
        height="456"
        class="img-bg"
      />
      <img
        v-else
        src="/images/majelis.jpg"
        :alt="article[0].title.rendered"
        width="512"
        height="456"
        class="img-bg"
      />
      <div class="header">
        <h1>{{ article[0].title.rendered }}</h1>
        <Date
          :date="article[0].date.substr(8, 2)"
          :month="article[0].date.substr(5, 2)"
          :year="article[0].date.substr(0, 4)"
          class="article-details"
        />
        <p class="date">
          <span>Oleh : </span><span>{{ author.name }}</span>
        </p>
      </div>
      <img
        src="/images/acc-pink.svg"
        alt="mushida"
        width="204"
        height="82"
        class="accessories"
      />
    </div>
    <section>
      <div class="section-container p-t-0 row">
        <article class="blog" v-html="article[0].content.rendered" />
        <div class="recommedation">
          <NuxtLink
            v-for="post in recoms"
            :key="post.id"
            class="card news"
            :to="
              `/${post.date.substr(0, 4)}/${post.date.substr(5, 2)}/${
                post.slug
              }`
            "
          >
            <figure>
              <img
                v-if="post.fimg_url == false"
                src="/images/no-image400.jpg"
                :alt="post.title.rendered"
              />
              <img v-else :src="post.fimg_url" :alt="post.title.rendered" />
            </figure>
            <caption>
              <h3>{{ post.title.rendered }}</h3>
            </caption>
          </NuxtLink>
        </div>
      </div>
    </section>
    <Footer />
  </main>
</template>

<script>
import axios from 'axios'
export default {
  async fetch({ params, store }) {
    try {
      const res = await axios.get(
        `https://admin.mushida.org/wp-json/wp/v2/posts/?slug=${params.blog}`,
      )
      const rec = await axios.get(
        'https://admin.mushida.org/wp-json/wp/v2/posts?page=1&per_page=5',
      )
      const author = await axios.get(`${res.data[0]._links.author[0].href}`)
      store.commit('articleData', res.data)
      store.commit('recomsData', rec.data)
      store.commit('authorData', author.data)
    } catch (error) {}
  },
  computed: {
    article() {
      return this.$store.state.article
    },
    recoms() {
      return this.$store.state.recoms
    },
    author() {
      return this.$store.state.author
    },
  },
}
</script>

<style lang="scss" scoped>
.hero {
  position: relative;
  min-height: 512px;
  width: 100%;
  display: flex;
  align-items: flex-end;
  background: transparent;
  padding: 0 6vw;
  padding-top: 22rem;
  padding-bottom: 2rem;
  margin-bottom: 2rem;
  .img-bg {
    position: absolute;
    left: 0;
    top: 0;
    object-fit: cover;
    height: 444px;
    width: 100%;
  }
  .header {
    color: #fff;
    background-color: #184e2f;
    display: flex;
    flex-direction: column;
    padding: 2.5rem 2rem;
    width: 1200px;
    max-width: 100%;
    z-index: 5;
    p {
      margin-bottom: 12px;
    }
  }
  .accessories {
    position: absolute;
    left: 3vw;
    bottom: 0;
    width: 206px;
    height: auto;
  }
}
.artikel {
  article {
    div {
      a {
        margin-left: 0 !important;
        img {
          width: 100% !important;
          height: auto;
          object-fit: cover;
          object-position: left;
          margin-bottom: 2rem;
        }
      }
    }
  }
  article p {
    text-align: justify;
    line-height: 1.5;
  }
  .section-container {
    margin-top: 0;
  }

  .card.news {
    width: 100%;
    position: relative;
    height: 196px;
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
    figure {
      height: 60%;
    }
    &::after {
      width: 2.2rem;
      height: 2.2rem;
    }
    &::before {
      width: 2rem;
      height: 2rem;
      background-size: 1rem 1rem;
    }
    caption {
      height: 40%;
      padding: 8px;
      h3 {
        font-size: 16px;
      }
    }
    img {
      width: 100%;
    }
    &:nth-child(2n) {
      display: none;
    }
  }
  .row {
    justify-content: space-between;
  }
}
blockquote {
  margin-bottom: 1.5rem;
}

@media all and(min-width: 768px) {
  .grid {
    grid-template-columns: repeat(5, 1fr);
  }
  .date {
    span {
      font-size: 18px !important;
    }
  }
  .artikel {
    article.blog {
      width: 80%;
      flex: 0 0 80%;
    }
  }

  .recommedation {
    width: 15%;
    flex: 0 0 15%;
  }
}
article.blog div,
article.blog p {
  font-size: 16px !important;
  line-height: 1.5 !important;
  margin-bottom: 1.5rem !important;
}
.hero .header p.date {
  margin-bottom: 0;
  margin-top: 1rem;
}

@media all and(max-width: 768px) {
  .artikel nav .nav-container.row {
    justify-content: center;
  }
  .hero {
    padding: 0 1rem;
    .header {
      padding: 1.2rem;
      h1 {
        font-size: 24px;
      }
    }
  }
  .artikel .hero .img-bg {
    object-position: center;
  }
  .artikel .card.news {
    border-radius: 0;
    height: 40%;
    padding: 0;
    width: 70%;
    caption {
      display: flex;
      flex-direction: column;
      padding: 8px;
      width: max-content;
      max-width: 100%;
      color: #000;
      transition: all 0.3s ease-in-out;
      text-decoration: none;
      z-index: 4;
      h3 {
        overflow: hidden;
        -webkit-box-orient: vertical;
        display: block;
        display: -webkit-box;
        overflow: hidden !important;
        text-overflow: ellipsis;
        font-size: 16px;
        text-align: left;
        -webkit-line-clamp: 2;
        text-decoration: none;
        color: #000;
      }
    }

    figure {
      position: relative;
      overflow: hidden;
    }
    &:before {
      content: '';
      position: absolute;
      right: 0;
      bottom: 0;
      border-radius: 2rem 0 0 0;
      background-image: url('/images/arrow-white-right.svg');
      width: 2rem;
      height: 2rem;
      background-size: 1rem 1rem;
      background-position: 50%;
      background-repeat: no-repeat;
      z-index: 3;
    }
    &:after {
      content: '';
      position: absolute;
      right: 0;
      bottom: 0;
      width: 2.2rem;
      height: 2.2rem;
      border-radius: 2rem 0 0 0;
      background: #0c4524;
      z-index: -1;
      transition: all 0.3s ease-in-out;
    }
  }
  div,
  p {
    font-size: 15px !important;
    line-height: 1.5 !important;
  }
  .hero .header p.date {
    margin-bottom: 0;
    margin-top: 0.5rem;
    font-size: 12px;
    span {
      font-size: 12px;
    }
  }
}
</style>
