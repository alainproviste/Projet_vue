<template>
    <div class="register__form">
        <TitlePage title="Modification du profil"/>
            <input type="text" class="input" name="firstName" v-model="user.firstName"/>
            <input type="text" class="input" name="lastName" v-model="user.lastName"/><br>
            <input type="tel" class="input-large" name="phone"  v-model="user.phone"/><br>
            <input type="text" class="input" name="zip" placeholder="Code postal" v-model="user.address.zip"/>
            <input type="text" class="input" name="street" placeholder="Adresse" v-model="user.address.street"/><br>
            <input type="text" class="input" name="city" placeholder="Ville" v-model="user.address.city"/>
            <input type="text" class="input" name="country" placeholder="Pays" v-model="user.address.country"/><br>
            <input type="email" class="input-large" name="email" placeholder="Adresse mail" v-model="user.email"/><br>
            <input type="submit" class="button" @click="updateProfil" value="Modification">
        <p v-if="messageError">
            {{messageError}}
        </p>
    </div>
</template>

<script>
    import TitlePage from "../components/TitlePage";
    import ApiUsers from '../mixins/ApiUsers';

    export default {
        components: {
            TitlePage
        },
        data: function() {
            return {
                user:{}
            }
        },
        mixins:[ApiUsers],
        methods: {
            updateProfil() {
                this.updateUser()
                .then((data) => {
                    this.user = data.user;
                    document.location.reload();
                })
                .catch((error) => {
                    console.log(error);
                });
            }
        },
        created() {
            this.getUser()
            .then(data=>{
                this.user = data;
            })
            .catch(err => console.log(err))
        }
        
    }
</script>

<style scoped>

.input {
    width: 13%;
    border-color: black;
    border-radius: 6px;
    font-size: 16px;
    padding: 10px;
    margin-block-end: 1%;
    margin-right: 0.5%;
}

.input-large {
    width: 28%;
    border-color: black;
    border-radius: 6px;
    font-size: 16px;
    padding: 10px;
    margin-block-end: 1%;
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

.input-large:hover, .input:hover {
    border-color: #F07E31;
    border-style: solid;
}

.input-large:focus, .input:focus {
    border-color: #F07E31;
    border-style: solid;
}
</style> 