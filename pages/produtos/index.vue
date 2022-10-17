<template>
  <div>
    <div style="background-color: #ccc">
      <NuxtLink to="/a-empresa">A empresa</NuxtLink>
      <NuxtLink to="/servicos">Serviços</NuxtLink>
      <NuxtLink to="/produtos">Produtos</NuxtLink>
    </div>
    <h1>Produtos</h1>
    <NuxtLink to="/produtos/produto-a">Produto A</NuxtLink>
    <NuxtLink to="/produtos/produto-b">Produto B</NuxtLink>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam sunt atque,
      distinctio tempore id molestiae? Totam hic sunt facere repellat harum
      labore corporis ex excepturi numquam ducimus eaque, architecto voluptatem?
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style>
a {
  margin-right: 15px;
}
</style>