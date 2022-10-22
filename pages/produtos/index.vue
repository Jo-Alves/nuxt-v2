<template>
  <div>
    <h1>Produtos</h1>
    <NuxtLink to="/produtos/produto-a">Produto A</NuxtLink>
    <NuxtLink to="/produtos/produto-b">Produto B</NuxtLink>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam sunt atque,
      distinctio tempore id molestiae? Totam hic sunt facere repellat harum
      labore corporis ex excepturi numquam ducimus eaque, architecto voluptatem?
    </p>
    <div v-for="product in products" :key="product.id" style="border-bottom: 1px solid">
      <p>{{product.title}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  head(){
    return {
      title: "Produtos",
      meta: [
        {hid: "description", name: "description", content: "Minha descrição do produto"}
      ]
    }
  },
  async asyncData({ $axios }) {
    const products = await $axios.$get(
      "https://jsonplaceholder.typicode.com/posts?_limit=3"
    );

    // let method = $axios.$get
    // const products = await method("http://localhost:3001/products")

    return {
      products,
    };
  },
  middleware() {
    console.log("middleware produtos");
  },
};
</script>

<style>
a {
  margin-right: 15px;
}
</style>