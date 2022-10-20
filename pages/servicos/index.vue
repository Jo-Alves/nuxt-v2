<template>
  <div>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam sunt atque,
      distinctio tempore id molestiae? Totam hic sunt facere repellat harum
      labore corporis ex excepturi numquam ducimus eaque, architecto voluptatem?
    </p>
  </div>
</template>
  
<script>
export default {
 
  middleware() {
    console.log("middleware Serviços");
  },
};
</script>
  
<style scoped>
h1 {
  color: red;
}
a {
  margin-right: 15px;
}
</style>