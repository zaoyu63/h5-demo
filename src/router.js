import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home',
      component: () => import('./views/Home'),
      children: [
        {
          path: '/home',
          name: 'home',
          component: () => import('./components/index')
        },
        {
          path: '/fire',
          name: 'home',
          component: () => import('./components/fire')
        },
        {
          path: '/setting',
          name: 'home',
          component: () => import('./components/setting')
        }
      ]
    }
  ]
});
