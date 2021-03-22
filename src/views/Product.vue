<template>
  <div class="page__product">
    <div class="product__content" v-if="ProductCard">
      <TitlePage :title="ProductCard.title"/>
      <p>{{ProductCard.price | formatPrice }}</p>
    </div>
  </div>
</template>

<script>
import TitlePage from "../components/TitlePage";

export default {
    components: {
        TitlePage,
    },
    data: function() {
      return {
       ProductCard:{}
      }
    },
    filters: {

    },
    methods: {
        getProduct: function() {
            return fetch("https://nodejs-myapi.herokuapp.com/api/v1/product/" + this.$route.params.id)
            .then(res => res.json())
            .then(data => {
                console.log(data,"data");
                this.ProductCard = data;
                }
            )
            .catch(err => console.log(err))
        }
    },
    created() {
      this.getProduct();
    }
}
</script>

<style lang="scss" scoped>
    .page__product {
        img {
            width: 50%;
        }
    }
</style>