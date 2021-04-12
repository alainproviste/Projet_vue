<template>
    <div class="shopping__cart">
        <TitlePage title="Mon panier"/>
        <div v-if="cartArray" class="tableau">
            <table>
                <thead>
                    <tr>
                        <th>Titre</th>
                        <th>Quantité</th>
                        <th>Prix</th>
                        <th>Action</th>
                        <th>Total</th>
                        <th>Suppression</th>
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
                Quantité totale : {{ calcQty }}
            </div>
            <div>
                Prix total : {{ calcTotal }}
            </div>
            <button @click="checkout">test</button>
            <button @click="deleteCart()">Supprimer le panier</button>
        </div>
        <div v-else>
            <h2>Votre panier est vide pour le moment</h2>
        </div>
    </div>
</template>

<script>
import Cart from "../mixins/Cart";
import ApiOrders from '../mixins/ApiOrders'
import { loadStripe } from '@stripe/stripe-js';
import apiConfigs from "../configs/api.configs";
import TitlePage from '../components/TitlePage';
const stripePromise = loadStripe('pk_test_51IYBRTFexOrILhH4Q1ZY0Kgi7IYETt0HdXs2soZzNt90EzPuTmkTqJH2ZkhAxvIxWiVeClSNavQpeWc1jJxJHUba009M79g7GC');
    export default {
        components: {
            TitlePage
        },
        mixins:[Cart, ApiOrders],
        data: function() {
            return {
                cartArray:[],
                products: []
            }
        },
        created() {
            this.cartArray = this.getCart();
        },
        computed: {
            calcQty: function(){
                if(this.cartArray != null){
                    return this.getCartCount(this.cartArray);
                }
            },
            calcTotal: function(){
                if(this.cartArray != null){
                    return this.getCartTotal(this.cartArray);
                }
            }
        },
        methods: {
            deleteCart: function() {
                this.clearCart();
                document.location.reload();
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
            },
            checkout: async function() {
                this.command();
                const stripe = await stripePromise;
                const response = await fetch(`${apiConfigs.apiUrl}/create-checkout-session`,{
                    method:"POST",
                    headers : {
                        "Content-type":"application/json"
                    },
                    body:JSON.stringify({
                        amount: this.calcTotal * 100
                    })
                });
                    const session = await response.json();
                    const result = await stripe.redirectToCheckout({
                        sessionId:session.id
                    });
                    console.log(result);
                    if(result.error) {
                        console.log(result.error);
                    } 
            },
            command: function() {
                this.createOrder()
                .then((data) => {
                    if(data.error) {
                        console.log(data.error);
                        this.messageError = data.error;
                    }
                })
                .catch(err => console.log(err));
            }
        }
    }
</script>
    
<style scoped>
    table{
        border-collapse: collapse;
        width: 100%;
        text-align: center;
        color: black;
        display: flex;
        flex-flow: column;
        border: 1px solid black;
        box-shadow: 0px 3px 9px 0px rgba(0, 0, 0, 0.47), -1px 2px 20px rgba(255, 255, 255, 0.6) inset;
    }

    tbody {
        height: 60vh;
        flex: 1 1 auto;
        display: block;
        overflow-y: scroll;
    }

    tr {
        background-color: white;
        width: 100%;
        border-bottom: black;
        border-width: 200px;
    }

    th, td {
        padding: 8px;
        word-break: normal;
        width: 16.5%;
    }

    th {
        background-color: #F07E31;
        color: white;
    }

    .tableau {
        margin-left: 8%;
        margin-right: 8%;
        position: relative;
    }
</style>