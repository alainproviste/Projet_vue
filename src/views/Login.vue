<template>
    <div class="container_connexion">
        <TitlePage title="Connexion"/>
        <form @submit.prevent="login">
            <input class="input" type="email" name="email" placeholder="EMAIL" v-model="email"/>
            <input class="input" type="password" name="password" placeholder="MOT DE PASSE" v-model="password"/>
            <input class="button" type="submit" value="se connecter">
            <p><router-link :to="{name:'Register'}">Créer un compte</router-link></p>
        </form>
        <p v-if="messageError">
            {{messageError}}
        </p>
    </div>
</template>

<script>
    import apiConfigs from "../configs/api.configs";
    import TitlePage from "../components/TitlePage";
    export default {
        components: {
            TitlePage
        },
        data: function() {
            return {
                email:"",
                password:"",
                messageError:""
            }
        },
        methods: {
            login: function(e) {
                const body = {
                        email : this.email,
                        password: this.password
                }
                
                const requestOptions = {
                   method: "POST",
                   headers: {
                       "Content-Type":"application/json"
                   },
                   body : JSON.stringify(body)
                }
                fetch(`${apiConfigs.apiUrl}/login`,requestOptions)
                .then (res => res.json())
                .then((data) => {
                        if(!data.auth) {
                            this.messageError = data.message;
                        }
                        else {
                            let token = data.token;
                            localStorage.setItem('token',token);
                            this.$router.push('/account');
                            this.$router.go();
                        }
                    }
                )
                .catch(
                    err => console.log(err)
                )
            }
        }
    }
</script>

<style scoped>

.container_connexion{
    width: 40%;
    margin: auto;
    margin-top:10%;
}

.input {
    padding: 1.8vh 2.2vh;
    margin: 0.5vh;
    width: 85%;
    border:2px solid;
    font-size: 100%;
    margin-bottom: 2vh;
}


.button {
    background-color: #F07E31;
    color: white;
    padding: 1vw 1.5vw;
    margin: 8px 0;
    border: 1px solid #F07E31;
    width: 50%;
    align-items: center;
    font-size: 20px;
    cursor: pointer;
}
.button:hover {
    background-color: white;
    color: #F07E31;
    transition: all 0.3s linear;
}

</style> 