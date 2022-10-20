<template>
  <div>
    <h1>Produto B</h1>

    <NuxtLink to="/produtos/produto-a">Produto A</NuxtLink>
    <NuxtLink to="/produtos/produto-b">Produto B</NuxtLink>

    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique quas
      quidem, in, tenetur quam soluta vel necessitatibus perspiciatis nobis
      reiciendis maiores explicabo? Perferendis itaque impedit numquam sunt sit
      provident natus.
    </p>
  </div>
</template>

<script>
export default {
  middleware(){
    console.log("middleware produto B")
  }
};
</script>

<style scoped>
h1 {
  color: green;
}
</style>