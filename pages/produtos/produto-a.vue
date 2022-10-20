<template>
  <div>
    <h1>Produto A</h1>

    <NuxtLink to="/produtos/produto-a">Produto A</NuxtLink>
    <NuxtLink to="/produtos/produto-b">Produto B</NuxtLink>

    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus
      corrupti excepturi sequi non recusandae itaque ea porro, molestias ex,
      enim, suscipit veniam aut! Voluptatem quasi nam laboriosam, enim
      necessitatibus quibusdam?
    </p>
  </div>
</template>

<script>
export default {
  middleware(){
    console.log("middleware produto A")
  }
};
</script>

<style scoped>
h1 {
  color: brown;
}
</style>