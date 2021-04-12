import VueJwtDecode from "vue-jwt-decode";

import Vue from 'vue'
import VueRouter from 'vue-router'
import Shop from '../views/Shop.vue'
import User from '../views/User.vue'
import Product from '../views/Product.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import authGuard from '../middleware/auth'
import Cart from "../views/Cart.vue";
import Users from "../views/admin/Users.vue"
import Orders from "../views/admin/Orders.vue"
import Products from "../views/admin/Products.vue"
import UpdateProduct from "../views/admin/UpdateProduct.vue"
import NewProduct from "../views/admin/NewProduct.vue"
import WischList from "../views/WischList.vue"
import NewAdmin from "../views/admin/NewAdmin.vue"
import UpdateUser from "../views/UpdateUser.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/cart',
    name: 'Cart',
    component: Cart,
    beforeEnter(to, from, next){
      if (!localStorage.getItem('token')) {
         next({
          name:"Login"
        })
      }
      else {
        next();
      }
    }
  },
  {
    path: '/',
    name: 'Shop',
    component: Shop
  },
  {
    path: '/account',
    name: 'User',
    component: User,
    beforeEnter(to, from, next){
      if (!localStorage.getItem('token')) {
         next({
          name:"Login"
        })
      }
      else {
        next();
      }
    }
  },
  {
    path: '/updateUser',
    name: 'UpdateUser',
    component: UpdateUser,
    beforeEnter(to, from, next){
      if (!localStorage.getItem('token')) {
         next({
          name:"Login"
        })
      }
      else {
        next();
      }
    }
  },
  {
    path: '/product/:id',
    name: 'Product',
    component: Product
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/admin/users',
    name: 'Users',
    component: Users,
    beforeEnter(to, from, next){
      if(!localStorage.getItem('token')) {
         next({
          name:"Login"
        })
      }
      else {
        const decodedToken = VueJwtDecode.decode(localStorage.getItem('token'));
        if(decodedToken.isAdmin == true){
          next();
        }
        else{
          next({
            name:"User"
          })
        }
      }
    }
  },
  {
    path: '/admin/orders',
    name: 'Orders',
    component: Orders,
    beforeEnter(to, from, next){
      if(!localStorage.getItem('token')) {
         next({
          name:"Login"
        })
      }
      else {
        const decodedToken = VueJwtDecode.decode(localStorage.getItem('token'));
        if(decodedToken.isAdmin == true){
          next();
        }
        else{
          next({
            name:"User"
          })
        }
      }
    }
  },
  {
    path: '/admin/Products',
    name: 'Products',
    component: Products,
    beforeEnter(to, from, next){
      if(!localStorage.getItem('token')) {
         next({
          name:"Login"
        })
      }
      else {
        const decodedToken = VueJwtDecode.decode(localStorage.getItem('token'));
        if(decodedToken.isAdmin == true){
          next();
        }
        else{
          next({
            name:"User"
          })
        }
      }
    }
  },
  {
    path: '/admin/updateProduct/:id',
    name: 'UpdateProduct',
    component: UpdateProduct,
    beforeEnter(to, from, next){
      if(!localStorage.getItem('token')) {
         next({
          name:"Login"
        })
      }
      else {
        const decodedToken = VueJwtDecode.decode(localStorage.getItem('token'));
        if(decodedToken.isAdmin == true){
          next();
        }
        else{
          next({
            name:"User"
          })
        }
      }
    }
  },
  {
    path: '/admin/newProduct',
    name: 'NewProduct',
    component: NewProduct,
    beforeEnter(to, from, next){
      if(!localStorage.getItem('token')) {
         next({
          name:"Login"
        })
      }
      else {
        const decodedToken = VueJwtDecode.decode(localStorage.getItem('token'));
        if(decodedToken.isAdmin == true){
          next();
        }
        else{
          next({
            name:"User"
          })
        }
      }
    }
  },
  {
    path: '/wischList',
    name: 'WischList',
    component: WischList,
    beforeEnter(to, from, next){
      if (!localStorage.getItem('token')) {
         next({
          name:"Login"
        })
      }
      else {
        next();
      }
    }
  },
  {
    path: '/admin/newAdmin',
    name: 'NewAdmin',
    component: NewAdmin,
    beforeEnter(to, from, next){
      if(!localStorage.getItem('token')) {
         next({
          name:"Login"
        })
      }
      else {
        const decodedToken = VueJwtDecode.decode(localStorage.getItem('token'));
        if(decodedToken.isAdmin == true){
          next();
        }
        else{
          next({
            name:"User"
          })
        }
      }
    }
  }
]

const router = new VueRouter({
  routes
})

export default router