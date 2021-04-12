<template>
    <div>
        <TitlePage title="Mon compte"/>
        <div>
            <div class="user__info" v-if="user">
                <router-link :to="{name:'WischList'}">Mes produits favoris</router-link>
                <p>Nom : {{user.lastName}}</p>
                <p>Prénom : {{user.firstName}}</p>
                <p>Email : {{user.email}}</p>
                <p>Numéro de téléphone : {{user.phone}}</p>
                <p>Pays : {{user.address.country}}</p>
                <p>Ville : {{user.address.city}}</p>
                <p>Code postal : {{user.address.zip}}</p>
                <p>Rue : {{user.address.street}}</p>
                <p><button @click="logout">Se déconnecter</button></p><router-link :to="{name:'UpdateUser'}">Modifier profil</router-link>
            </div>
        </div>
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
            logout: function() {
                localStorage.removeItem('token');
                localStorage.removeItem('wichList');
                document.location.reload();
            },
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