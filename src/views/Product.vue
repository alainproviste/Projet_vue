<template>
  <div class="page__product">
    <TitlePage title="Fiche produit"/>
    <div class="product__content" v-if="ProductCard">
      <ProductCard :productObject="ProductCard"/>
    </div>
  </div>
</template>

<script>
import apiConfigs from "../configs/api.configs";
import TitlePage from "../components/TitlePage";
import ProductCard from "../components/ProductCard";
import ApiProducts from "../mixins/ApiProducts";

export default {
    components: {
        ProductCard,
        TitlePage
    },
    mixins: [ApiProducts],
    data: function() {
      return {
       ProductCard:{}
      }
    },
    methods: {
        get_product: function() {
            this.getProduct()
            .then(data => {
                this.ProductCard = data;
              }
            )
            .catch(err => console.log(err))
        }
    },
    created() {
      this.get_product();
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