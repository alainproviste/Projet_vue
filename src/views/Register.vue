<template>
    <div class="register__form">
        <form @submit.prevent="register">
            <div class="form__group">
                <label htmlFor="firstName">Prénom</label>
                <input type="text" name="firstName" v-model="firstName"/>
            </div>
            <div class="form__group">
                <label htmlFor="lastName">Nom</label>
                <input type="text" name="lastName" v-model="lastName"/>
            </div>
            <div class="form__group">
                <label htmlFor="phone">Numéro de téléphone</label>
                <input type="tel" name="phone" v-model="phone"/>
            </div>
            <div class="form__group">
                <label htmlFor="zip">Code postal</label>
                <input type="text" name="zip" v-model="address.zip"/>
            </div>
            <div class="form__group">
                <label htmlFor="street">Adresse</label>
                <input type="text" name="street" v-model="address.street"/>
            </div>
            <div class="form__group">
                <label htmlFor="city">Ville</label>
                <input type="text" name="city" v-model="address.city"/>
            </div>
            <div class="form__group">
                <label htmlFor="country">Pays</label>
                <input type="text" name="country" v-model="address.country"/>
            </div>
            <div class="form__group">
                <label htmlFor="email">Adresse mail</label>
                <input type="email" name="email" v-model="email"/>
            </div>
            <div class="form__group">
                <label htmlFor="password">Mot de passe</label>
                <input type="password" name="password" v-model="password"/>
            </div>
            <div class="form__group">
                <label htmlFor="passwordVerify">Entrez le mot de passe à nouveau</label>
                <input type="password" name="passwordVerify" v-model="passwordVerify"/>
            </div>
            <div class="form__group">
               <input type="submit" value="se connecter">
            </div>
        </form>
        <p v-if="messageError">
            {{messageError}}
        </p>
    </div>
</template>

<script>
    export default {
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
                address:{},
                zip:"",
                city:"",
                street:"",
                country:""
            }
        },
        methods: {
            register: function(e) {
                const body = {
                        firstName : this.firstName,
                        lastName : this.lastName,
                        phone : this.phone,
                        email : this.email,
                        password: this.password,
                        isAdmin : false,
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
                    fetch("https://ynovnodejs.herokuapp.com/api/v1/users",requestOptions)
                    .then (res => res.json())
                    .then((data) => {
                            if(!data.auth) {
                                this.messageError = data.message;
                            }
                            else {
                                let token = data.token;
                                localStorage.setItem('token',token);
                                this.$router.push('/account');
                            }
                        }
                    )
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

<style lang="scss" scoped>
</style> 