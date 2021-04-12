<template>
    <div class="product__card">
        <router-link :to="{name:'Product',params:{id:productObject._id}}">
            <img :src="productObject.img" alt="produit">
            <h2>
                {{productObject.title}}
            </h2>
        </router-link>
        <p>            
            Prix : {{productObject.price}}€
        </p>
        <p>
            Description : {{productObject.description}}
        </p>
            
        <div v-for="product in this.whishList" :key="product.id">
            <div v-if="product.id == productObject._id">
                <button class="button" v-bind="test = 1" @click="remove_WhishList(productObject)">Enlever de la liste de souhaits</button>
            </div>
            <button class="button" @click="() => addItemToCart(productObject)">Ajouter au panier</button>
        </div>
        <div v-if="test != 1">
            <button class="button" @click="add_WhishList(productObject)">Ajouter aux souhaits</button>
            <button class="button" @click="() => addItemToCart(productObject)">Ajouter au panier</button>
        </div>
    </div>
</template>

<script>
    import Cart from "../mixins/Cart";
    import WishList from "../mixins/WishList"
    export default {
        name:"ProductCard",
        mixins:[Cart,WishList],
        data: function() {
            return {
                whishList: []
            }
        },
        props:{
            productObject: Object
        },
        methods:{
            addItemToCart: function(product) {
                this.addTocart(product)
            },
            remove_WhishList: function(product){
                this.removeWichList(product)
            },
            add_WhishList: function(product){
                this.addWichList(product)
            }
        },
        created(){
            this.whishList = this.getWichList();
        }
    }
</script>

<style scoped>
    .button {
        border-color: black;
        color: white;
        background-color: #F07E31;
        border-radius: 6%;
        font-size: 20px;
        padding: 5px;
        width: 15%;
        cursor: pointer;
        margin: 1%;
    }
</style>>

</style>