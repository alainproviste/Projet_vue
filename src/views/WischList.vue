<template>
    <div>
        <TitlePage title="Liste des produits favoris"/>

        <div>
            <table>
                <thead>
                    <tr>
                        <th>Titre</th>
                        <th>Prix</th>
                        <th>Image</th>
                        <th>Lien</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="produit in wichList" v-bind:key="produit.id">
                        <td>{{ produit.title }}</td>
                        <td>{{ produit.price }}</td>
                        <td><img :src="produit.img" :alt="produit.title"></td>
                        <td>
                            <router-link :to="{name:'Product',params:{id:produit.id}}">Fiche produit</router-link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    import WichList from '../mixins/WishList'
    import TitlePage from "../components/TitlePage";
    export default {
        components: {
            TitlePage
        },
        mixins: [WichList],
        data: function() {
            return {
                wichList: []
            }
        },
        created() {
            this.wichList = this.getWichList();
        },
        methods: {
            deleteList: function() {
                this.deleteWichList();
                document.location.reload();
            },
            remove_WichList: function(product) {
                this.removeWichList(product);
                this.wichList = this.getWL();
            }
        }
    }
</script>

<style>

</style>