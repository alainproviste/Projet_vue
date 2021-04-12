import apiConfigs from "../configs/api.configs";

export default {
    methods: {
        getProducts(){
            return fetch(`${apiConfigs.apiUrl}/products`)
            .then(res=>res.json())
        },
        getProduct(){
            return fetch(`${apiConfigs.apiUrl}/products/` + this.$route.params.id)
            .then((res) => res.json())
        },
        deleteProduct(id){
            const token = localStorage.getItem("token")
            return fetch(`${apiConfigs.apiUrl}/products/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    Authorization: token
                },
            }).then(res => res.json())
        },
        updateProduct(){
            const token = localStorage.getItem("token");
            return fetch(`${apiConfigs.apiUrl}/products/` + this.$route.params.id, {
                method: "PUT",
                body: JSON.stringify({
                    title: this.title,
                    description: this.description,
                    price: this.price,
                    img: this.img
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    Authorization: token,
                },
            })
                .then((res) => res.json())
        },
        newProduct(){
            const token = localStorage.getItem('token');
            return fetch(`${apiConfigs.apiUrl}/products`, {
                method: "POST",
                headers: {
                    "Content-Type":"Application/json",
                    Authorization: token,
                },
                body: JSON.stringify( {
                    title: this.title,
                    description: this.description,
                    price: this.price,
                    img: this.img
                })
            })
            .then (res => res.json())
        }
        
    }
}