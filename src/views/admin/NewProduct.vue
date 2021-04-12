<template>
    <div>
        <NavAdmin />
        <TitlePage title="Nouveau produit"/>
        <form @submit.prevent="new_product">
            <div class="form__group">
                <label htmlFor="title">Titre du produit</label><br>
                <input class="input" type="text" name="title" v-model="title"/>
            </div>
            <div class="form__group">
                <label htmlFor="price">Prix du produit</label><br>
                <input class="input" type="number" name="price" v-model="price"/>
            </div>
            <div class="form__group">
                <label htmlFor="description">Déscription du produit</label><br>
                <input class="input" type="text" name="description" v-model="description"/>
            </div>
            <div class="form__group">
                <label htmlFor="img">Image du produit</label><br>
                <input class="input" type="text" name="img" v-model="img"/>
            </div>
            <div class="form__group">
               <input class="button" type="submit" value="Nouveau produit">
            </div>
        </form>
        <p v-if="messageError">
            {{messageError}}
        </p>
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
                title:"",
                price:"",
                description:"",
                img:"",
                messageError:""
            }
        },
        methods: {
            new_product: function (){
                this.newProduct()
                    .then((data) => {
                        if(data.error) {
                            console.log(data.error);
                            this.messageError = "Une erreur c'est produite lors de la création du produit ! Veuillez réessayer";
                        } else {
                            this.$router.push('/admin/products');
                        }
                    })
                    .catch(err => console.log(err));
            }
        }

    }
</script>
    
<style scoped>
.input {
    width: 23%;
    border-color: black;
    border-radius: 6px;
    font-size: 16px;
    padding: 10px;
    margin-block-end: 1%;
    margin-right: 0.5%;
}

.button {
    border-color: black;
    color: white;
    background-color: #F07E31;
    border-radius: 6%;
    font-size: 20px;
    padding: 5px;
    width: 15%;
    cursor: pointer;
}
</style>