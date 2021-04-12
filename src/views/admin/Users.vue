<template>
    <div>
        <NavAdmin />
        <TitlePage title="Liste des utilisateurs"/>
        <div class="tableau">
            <table>
                <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Prénom</th>
                        <th>Email</th>
                        <th>Numéro de téléphone</th>
                        <th>Adresse</th>
                        <th>Ville</th>
                        <th>Pays</th>
                        <th>IsAdmin</th>
                        <th>Supprimer</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in users" :key="item._id">
                        <td>{{ item.lastName }}</td>
                        <td>{{ item.firstName }}</td>
                        <td>{{ item.email }}</td>
                        <td>{{ item.phone }}</td>
                        <td>{{ item.address.street }}</td>
                        <td>{{ item.address.city }}</td>
                        <td>{{ item.address.country }}</td>
                        <td>{{ item.isAdmin }}</td>
                        <td>
                            <button  @click="() => delete_user(item._id)">Supprimer l'utilisateur</button>
                        </td>
                    </tr>
                </tbody>
            </table>    
        </div>
    </div>
</template>

<script>
    import ApiUsers from "../../mixins/ApiUsers";
    import NavAdmin from "../../layout/NavAdmin";
    import TitlePage from '../../components/TitlePage';

    export default {
        components: {
            NavAdmin,
            TitlePage
        },
        mixins:[ApiUsers],
        data: function() {
            return {
                users: [],
                user: {}
            }
        },
        created() {
            this.getUsers()
            .then(data=>{
                this.users = data.users;
            })
            .catch(err => console.log(err));

            this.getUser()
            .then(data=>{
                this.user = data;
            })
            .catch(err => console.log(err));
        },
        methods: {
            delete_user(id) {
                this.deleteUser(id)
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
        border-bottom: black;
        border-width: 200px;
    }

    .tableau {
        margin-left: 8%;
        margin-right: 8%;
        position: relative;
    }
</style>