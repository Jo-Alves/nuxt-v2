<template>
  <div>
    <h1>Empresa</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam sunt atque,
      distinctio tempore id molestiae? Totam hic sunt facere repellat harum
      labore corporis ex excepturi numquam ducimus eaque, architecto voluptatem?
    </p>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "A empresa",
      meta: [
        { hid: "description", name: "description", content: "Minha descrição da empresa" }
      ]
    }
  },
  middleware: "auth",
  // middleware(){
  //   console.log("middleware empresa")
  // }
};
</script>

<style>
a {
  margin-right: 15px;
}
</style>