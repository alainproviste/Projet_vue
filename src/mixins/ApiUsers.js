import apiConfigs from "../configs/api.configs";
import VueJwtDecode from "vue-jwt-decode";

export default {
    methods: {
        getUsers(){
            const token = localStorage.getItem("token")
            return fetch(`${apiConfigs.apiUrl}/users`, {
                headers: {
                    Accept: "application/json",
                    Authorization: token,
                },
            }).then((res) => res.json())
        },
        getUser(){
            const token = localStorage.getItem("token")
            const decodedToken = VueJwtDecode.decode(token)
            return fetch(`${apiConfigs.apiUrl}/users/${decodedToken.id}`,{
                headers: {
                    Accept: "application/json",
                    Authorization: token,
                },
            }).then((res) => res.json())
        },
        updateUser(){
            const token = localStorage.getItem("token");
            const decode = VueJwtDecode.decode(token)
            return fetch(`${apiConfigs.apiUrl}/users/${decode.id}`, {
                method: "PUT",
                body: JSON.stringify({
                    firstName: this.user.firstName,
                    lastName: this.user.lastName,
                    phone: this.user.phone,
                    address: this.user.address
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    Authorization: token,
                },
            })
                .then((res) => res.json())
        },
        deleteUser(id){
            const token = localStorage.getItem("token")
            return fetch(`${apiConfigs.apiUrl}/users/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    Authorization: token
                },
            }).then(res => res.json())
        },
        newProduct(){
            const token = localStorage.getItem('token');
            return fetch(`${apiConfigs.apiUrl}/products`,{
                method: "POST",
                headers: {
                    Authorization: token,
                    "Content-Type":"Application/json"
                },
                body: JSON.stringify({
                    title: this.title,
                    price: this.price,
                    description: this.description,
                    img: this.img
                })
            })
            .then (res => res.json())
        }
    }
}