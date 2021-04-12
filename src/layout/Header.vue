<template>
    <header class="header__main">
        <nav>
            <ul>
                <li><router-link to="/">Shop</router-link></li>
                <li><router-link to="/account">Mon compte</router-link></li>
                <li v-if="token"><router-link to="/cart">Mon panier</router-link></li>
                <li v-if="isAdmin == true"><router-link to="/admin/users">Espace admin</router-link></li>
            </ul>
        </nav>
    </header>
</template>

<script>
    import ApiUsers from "../mixins/ApiUsers";
    import VueJwtDecode from "vue-jwt-decode";
    export default {
        data: function() {
            return {
                isAdmin: "",
                token: ""
            }
        },
        mixins:[ApiUsers],
        beforeMount(){
            const token = localStorage.getItem("token");
            if(token != null){
                const decode = VueJwtDecode.decode(token);
                this.isAdmin = decode.isAdmin;
                this.token = decode;
            }
        }
    }
</script>

<style>

    body, ul{
        margin: 0;
        padding: 0;
    }

    nav {
        background-color: #5A6770;
        height: auto;
        width: 100%;
        z-index: 1;
    }

    nav ul {
        height: auto;
        display: flex;
        justify-content: space-evenly;
    }

    nav ul li {
        height: auto;
        align-items: center;
        position: relative;
        color: white;
        font-size: 120%;
        margin-left: 2%;
        margin-top: 1%;
        margin-block-end: 1%;
        cursor: pointer;
        list-style: none;
        text-decoration: none;
    }

    nav ul li a {
        text-decoration: none;
        color: white;
    }

    nav ul li:hover , nav ul li a:hover{
        color: #FFCD1C;
        transition: all 0.3s linear;
    }
</style>