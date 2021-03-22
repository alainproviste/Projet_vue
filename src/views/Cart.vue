<template>
    <div class="shopping__cart">
        // loop sur this.cartArray
        <table>
            <thead>
                <tr>
                    <th>Titre</th>
                    <th>Quantité</th>
                    <th>Prix</th>
                    <th></th>
                    <th>Total</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in cartArray" v-bind:key="item._id">
                    <td>{{item.title}}</td>
                    <td>{{item.qty}}</td>
                    <td>{{item.price}} €</td>
                    <td>
                        <button @click="removeItemCart1Qty(item)">-</button>
                        <button @click="addItemCart(item)">+</button>
                    </td>
                    <td>
                        {{ item.qty * item.price }} €
                    </td>
                    <td>
                        <button @click="removeProductCart(item)">Supprimer du panier</button>
                    </td>
                </tr>
            </tbody>
        </table> <br><br>
        <div>
            Quatité totale : {{ calcQty }}
        </div>
        <div>
            Prix total : {{ calcTotal }}
        </div>
        <button @click="deleteCart()">Supprimer le panier</button>
    </div>
</template>

<script>
import Cart from "../mixins/Cart";
    export default {
        mixins:[Cart],
        data: function() {
            return {
                cartArray:[]
            }
        },
        created() {
            this.cartArray = this.getCart();
            console.log(this.cartArray);
        },
        computed: {
            calcQty: function(){
                return this.getCartCount(this.cartArray);
            },
            calcTotal: function(){
                return this.getCartTotal(this.cartArray);
            }
        },
        methods: {
            deleteCart: function() {
                this.clearCart();
            },
            removeProductCart: function(product) {
                this.removeItemCart(product);
                this.cartArray = this.getCart();
            },
            addItemCart: function(product) {
                this.addOneQty(product);
                this.cartArray = this.getCart();
            },
            removeItemCart1Qty: function(product) {
                this.removeOneQty(product);
                this.cartArray = this.getCart();
            }
        }
    }
</script>

<style lang="scss" scoped>
.shop__table {
    width:50%;
    margin:50px auto;
}