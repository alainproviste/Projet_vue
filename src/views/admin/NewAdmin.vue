<template>
    <div class="register__form">
        <NavAdmin />
        <TitlePage title="Création d'un compte admin"/>
        <form @submit.prevent="register">
            <input type="text" class="input" name="firstName" placeholder="Prénom" v-model="firstName"/>
            <input type="text" class="input" name="lastName" placeholder="Nom" v-model="lastName"/><br>
            <input type="tel" class="input-large" name="phone" placeholder="Numéro de téléphone" v-model="phone"/><br>
            <input type="text" class="input" name="zip" placeholder="Code postal" v-model="address.zip"/>
            <input type="text" class="input" name="street" placeholder="Adresse" v-model="address.street"/><br>
            <input type="text" class="input" name="city" placeholder="Ville" v-model="address.city"/>
            <input type="text" class="input" name="country" placeholder="Pays" v-model="address.country"/><br>
            <input type="email" class="input-large" name="email" placeholder="Adresse mail" v-model="email"/><br>
            <input type="password" class="input" name="password" placeholder="Mot de passe" v-model="password"/>
            <input type="password" class="input" name="passwordVerify" placeholder="Entrez le mot de passe à nouveau" v-model="passwordVerify"/><br>
            <input type="submit" class="button" value="register">
        </form>
        <p v-if="messageError">
            {{messageError}}
        </p>
    </div>
</template>

<script>
    import apiConfigs from "../../configs/api.configs";
    import TitlePage from "../../components/TitlePage";
    import NavAdmin from "../../layout/NavAdmin"

    export default {
        components: {
            TitlePage,
            NavAdmin
        },
        data: function() {
            return {
                firstName:"",
                lastName:"",
                phone:"",
                email:"",
                password:"",
                passwordVerify:"",
                isAdmin:"",
                messageError:"",
                address:{}
            }
        },
        methods: {
            register: function() {
                const body = {
                        firstName : this.firstName,
                        lastName : this.lastName,
                        phone : this.phone,
                        email : this.email,
                        password: this.password,
                        isAdmin : true,
                        address : {
                            zip : this.address.zip,
                            street : this.address.street,
                            city : this.address.city,
                            country : this.address.country
                        }
                }
                
                if(this.password == this.passwordVerify){
                    const requestOptions = {
                    method: "POST",
                    headers: {
                        "Content-Type":"application/json"
                    },
                    body : JSON.stringify(body)
                    }
                    fetch(`${apiConfigs.apiUrl}/users`,requestOptions)
                    .then (res => res.json())
                    .then((data) => {
                        if(data.error) {
                            console.log(data.error);
                            this.messageError = "Un problème est survenu lors de la création de votre compte ! Veuillez réesayer.";
                        } else {
                            this.$router.push('/admin/users');
                        }
                    })
                    .catch(
                        err => console.log(err)
                    )
                }else{
                     this.messageError = "Les 2 mots de passes entrés ne sont pas identique !";
                }
            }
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