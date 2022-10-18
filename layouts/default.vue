<template>
    <div>
      <div style="background-color: #ccc; padding: 10px;">
        <NuxtLink to="/a-empresa">A empresa</NuxtLink>
        <NuxtLink to="/servicos">Serviços</NuxtLink>
        <NuxtLink to="/produtos">Produtos</NuxtLink>
      </div>
      <div>
          <Nuxt />
      </div>
    </div>
  </template>
  
  <script>
  export default {};
  </script>
  
  <style>
  a{
   margin-right: 15px;
  }
  </style>