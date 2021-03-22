import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Contact from '../views/Contact.vue'
import Shop from '../views/Shop.vue'
import User from '../views/User.vue'
import Product from '../views/Product.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import authGuard from '../middleware/auth'
import Cart from "../views/Cart.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/shop',
    name: 'Shop',
    component: Shop
  },
  {
    path: '/account',
    name: 'User',
    component: User,
    beforeEnter(to, from, next) {
      console.log('test')
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
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router