import apiConfigs from "../configs/api.configs";
import VueJwtDecode from "vue-jwt-decode";

export default {
    methods: {
        createOrder() {
            const decodedToken = VueJwtDecode.decode(localStorage.getItem('token'));

            var date = new Date();
            date  = date.toLocaleDateString(['fr-FR'], {month: 'long', day: '2-digit', year: 'numeric'}); 
            console.log(this.cartArray);
            this.cartArray.forEach(item => {
                this.products.push(item.id)
            });
            localStorage.removeItem('cart');
            return fetch(`${apiConfigs.apiUrl}/orders`, {
                method: "POST",
                headers: {"Content-Type":"Application/json"},
                body: JSON.stringify( {
                    total: this.calcTotal,
                    date: date,
                    status: "En cours",
                    user: decodedToken.id,
                    products: this.products
                })
            })
            .then (res => res.json())
        },

        getOneOrder(id) {
            return fetch(`${apiConfigs.apiUrl}/orders/${id}`)
            .then(res => res.json())
        },

        getAllOrders() {
            const token = localStorage.getItem('token');
            return fetch(`${apiConfigs.apiUrl}/orders`,{
                method: "GET",
                headers: {
                    Authorization: token
                }
            })
            .then(res=>res.json())
        },

        updateOrder(id) {
            const token = localStorage.getItem('token');
            return fetch(`${apiConfigs.apiUrl}/orders/${id}`, {
                method: "PUT",
                headers: {
                    Authorization: token,
                    "Content-Type":"Application/json"
                },
                body: JSON.stringify( {
                    status: this.status
                })
            })
            .then (res => res.json())
        }
    }
} 