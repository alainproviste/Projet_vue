<template>
    <div>
        <NavAdmin />
        <TitlePage title="Liste des produits"/>
        <div class="tableau">
            <table>
                <thead>
                    <tr>
                        <th>Titre produit</th>
                        <th>Prix</th>
                        <th>Description</th>
                        <th>Image</th>
                        <th>Categorie</th>
                        <th>Modifier</th>
                        <th>Supprimer</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="product in products" :key="product._id">
                        <td>{{ product.title }}</td>
                        <td>{{ product.price }}</td>
                        <td>{{ product.description }}</td>
                        <td><img :src="product.image"></td>
                        <td>Categorie</td>
                        <td><router-link :to="{name:'UpdateProduct',params:{id:product._id}}"> Modifier</router-link></td>
                        <td><button @click="() => delete_product(product._id)">Supprimer le produit</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <router-link :to="{name:'NewProduct'}">
            Nouveau produit
        </router-link>
    </div>
</template>

<script>
    import ApiProducts from "../../mixins/ApiProducts";
    import NavAdmin from "../../layout/NavAdmin";
    import TitlePage from '../../components/TitlePage';

    export default {
        components: {
            NavAdmin,
            TitlePage
        },
        mixins:[ApiProducts],
        data: function() {
            return {
                products: []
            }
        },
        created() {
            this.getProducts()
            .then(data=>{
                this.products = data;
            })
            .catch(err => console.log(err))
        },
        methods: {
            delete_product(id) {
                this.deleteProduct(id)
                    .catch((err) => console.log(err));
                document.location.reload();
            },
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
    th, td {
        padding: 8px;
        word-break: normal;
        width: 12.5%;
    }

    th {
        background-color: #F07E31;
        color: white;
    }

    tr {
        background-color: white;
        width: 100%;
    }

    .tableau {
        margin-left: 8%;
        margin-right: 8%;
        position: relative;
    }
</style>