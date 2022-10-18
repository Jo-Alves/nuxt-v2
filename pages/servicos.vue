<template>
  <div>
    <div>
      <h1>Serviços</h1>

      <NuxtLink to="/servicos/desenvolvimento-de-sites"
        >Desenvolvimento de sites</NuxtLink
      >
      <NuxtLink to="/servicos/markentig-digital">Marketing Digital</NuxtLink>

      <br /><br />

      <NuxtChild />
    </div>
  </div>
</template>
    
  <script>
export default {};
</script>
    
  <style scoped>
h1 {
  color: red;
}
a {
  margin-right: 15px;
}
</style>