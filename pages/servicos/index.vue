<template>
  <div>
   	<div style="background-color: #ccc">
			<NuxtLink to="/a-empresa">A empresa</NuxtLink>
			<NuxtLink to="/servicos">Serviços</NuxtLink>
			<NuxtLink to="/produtos">Produtos</NuxtLink>
		</div>
    	<div>
      	<h1>Serviços</h1>

		<NuxtLink to="desenvolvimento-de-sites">Desenvolvimento de sites</NuxtLink>
		<NuxtLink to="markentig-digital">Marketing Digital</NuxtLink>

      	<p>
        		Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam sunt atque,
        		distinctio tempore id molestiae? Totam hic sunt facere repellat harum
        		labore corporis ex excepturi numquam ducimus eaque, architecto
        		voluptatem?
      	</p>
    	</div>
  	</div>
</template>
  
<script>
export default {};
</script>
  
<style scoped>
h1{
	color: red;
}
a{
	margin-right: 15px;
}
</style>