import Vue from 'vue'
import Router from 'vue-router'
import chong from '@/components/chongzhi'
import jilu from '@/components/jilu'




Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'chong', component: chong},
    {path: '/jilu', name: 'jilu', component: jilu}
    
  ]
})
