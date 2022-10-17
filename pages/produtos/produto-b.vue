<template>
  <div>
    <div style="background-color: #ccc">
      <NuxtLink to="/a-empresa">A empresa</NuxtLink>
      <NuxtLink to="/servicos">Serviços</NuxtLink>
      <NuxtLink to="/produtos">Produtos</NuxtLink>
    </div>
    
    <h1>Produto B</h1>

    <NuxtLink to="/produtos/produto-a">Produto A</NuxtLink>
    <NuxtLink to="/produtos/produto-b">Produto B</NuxtLink>

    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique quas quidem, in, tenetur quam soluta vel necessitatibus perspiciatis nobis reiciendis maiores explicabo? Perferendis itaque impedit numquam sunt sit provident natus.</p>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
h1{
  color: green;
}
</style>