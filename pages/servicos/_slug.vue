<template>
  <div>
    {{$route.params}}
  </div>
</template>

<script>
export default {
  head(){
    return {
      title: `${this.$route.params.slug}`,
      meta: [
        {hid: "description", name: "description", content: `Minha descrição do ${this.$route.params.slug}`}
      ]
    }
  },
}
</script>

<style>

</style>