<template>
  <div class="page__shop">
    <TitlePage title="Mon Eshop"/>
    <ProductsGrid :productsArray="productsArray"/>
  </div>
</template>

<script>
import TitlePage from "../components/TitlePage";
import ProductsGrid from "../components/ProductsGrid";
import ApiProducts from '../mixins/ApiProducts';

export default {
    components: {
        TitlePage,
        ProductsGrid
    },
    data: function() {
      return {
       productsArray:[]
      }
    },
    methods: {
    },
    mixins:[ApiProducts],
    created() {
      fetch("https://ynovnodejs.herokuapp.com/api/v1/products")
      .then(res => res.json())
      .then(data => {
        console.log(data,"data");
        this.productsArray = data;
        }
      )
      .catch(err => console.log(err))
    }
}
</script>

<style lang="scss" scoped></style>