export default {
    methods: {
        getWichList(){
            return JSON.parse(localStorage.getItem('wichList'));
        },
        deleteWichList(){
            localStorage.removeItem('wichList');
        },
        addWichList(product){
            const newProduct = {
                id: product._id,
                title: product.title,
                img: product.img,
                description: product.description
            };
            var wichList = JSON.parse(localStorage.getItem('wichList')) || [];
            var exist = wichList.findIndex(
                (el) => el.id === newProduct.id
            )
            if(exist !== -1) {
                localStorage.setItem('wichList', JSON.stringify(wichList));
            } else {
                wichList.push(newProduct);
                localStorage.setItem('wichList', JSON.stringify(wichList));
            }
            document.location.reload();
        },
        removeWichList(product){
            var wichList = JSON.parse(localStorage.getItem('wichList'));
            const filteredWishList = wichList.filter((item) => {
                return item.id !== product._id;
            });
            localStorage.setItem('wichList', JSON.stringify(filteredWishList));
            if(filteredWishList.length == 0) {
                this.deleteWichList()
            }
            document.location.reload();
        }
    }
}