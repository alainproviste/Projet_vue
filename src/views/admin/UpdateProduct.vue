<template>
    <div>
        <NavAdmin />
        <TitlePage title="Modification du produit"/>
            <form>
                <input class="input" type="text" v-model="title"><br>
                <input class="input" type="number" v-model="price"><br>
                <textarea class="input" v-model="description" rows="5"></textarea><br>
                <input class="input" type="text" v-model="img"><br>
                <img :src="img" :alt="title" width="20%"> <br>

                <button class="button" type="submit" @click="update">Modifier le produit</button>

            </form>

            <p v-if="messageError">
                {{ messageError }}
            </p>
    </div>
</template>

<script>
    import NavAdmin from '../../layout/NavAdmin' 
    import ApiProducts from '../../mixins/ApiProducts';
    import TitlePage from '../../components/TitlePage';

    export default {
        components: {
            TitlePage,
            NavAdmin
        },
        mixins: [ApiProducts],
        data: function() {
            return {
                title:"",
                price: "",
                description: "",
                img: "",
                messageError: ""
            }
        },
        created(){
            this.getProduct()
                .then(data=>{
                    this.title = data.title;
                    this.price = data.price;
                    this.description = data.description;
                    this.img = data.img;
                })
                .catch((err) => console.log(err))
        },
        methods: {
            update: function(){
                this.updateProduct()
                .then((data) => {
                    if(data.error) {
                        this.messageError = data.error;
                        console.log(data.error);
                    } 
                    else {
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
    width: 30%;
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