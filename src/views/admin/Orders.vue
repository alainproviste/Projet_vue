<template>
    <div>
        <NavAdmin />
        <TitlePage title="Liste des commandes"/>
        <div class="tableau">
            <table>
                <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Adresse</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="order in orders.data" v-bind:key="order._id">
                        <td>{{ order.user.lastName}} {{ order.user.firstName }}</td>
                        <td>{{ order.user.address.street }}, {{ order.user.address.zip }} {{ order.user.address.city }}, {{ order.user.address.country }}</td>
                        <td>{{ order.date }}</td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
        {{orders}}
    </div>
</template>

<script>
    import ApiOrders from "../../mixins/ApiOrders";
    import NavAdmin from "../../layout/NavAdmin";
    import TitlePage from '../../components/TitlePage';
    export default {
        components: {
            NavAdmin,
            TitlePage
        },
        mixins:[ApiOrders],
        data: function() {
            return {
                orders: [],
                status: [{ value: 'En cours' }, { value: 'Livré' }, { value: 'Terminé' }]
            }
        },
        created() {
            this.getAllOrders()
            .then(data=>{
                this.orders = data;
            })
            .catch(err => console.log(err))
            console.log(this.orders)
        }
    }
</script>

<style>

</style>