<template>
  <div class="page__shop">
    <TitlePage title="Green fight world"/>
    <div class="search__form">
      <p> Recherche ton produit : <input type="text" v-model="searchValue"></p>
    </div>
    <div>
      <ProductsGrid :productsArray="filteredShop"/>
    </div>
  </div>
</template>

<script>
import TitlePage from "../components/TitlePage";
import ProductsGrid from "../components/ProductsGrid";
import ApiProducts from '../mixins/ApiProducts';
import apiConfigs from "../configs/api.configs";

export default {
    components: {
        TitlePage,
        ProductsGrid
    },
    data: function() {
      return {
       productsArray:[],
       searchValue:""
      }
    },
    computed: {
      filteredShop: function(){
        let filter = new RegExp(this.searchValue, "i");

        return this.productsArray.filter(item=> item.title.match(filter));
      }
    },
    mixins:[ApiProducts],
    created() {
      fetch(`${apiConfigs.apiUrl}/products`)
      .then(res => res.json())
      .then(data => {
        this.productsArray = data;
        }
      )
      .catch(err => console.log(err))
    }
}
</script>

<style lang="scss" scoped></style>