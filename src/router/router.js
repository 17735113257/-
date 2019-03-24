import Vue from 'vue'
import VueRouter from 'vue-router'
import DynamicSegment from '@/views/DynamicSegment'
import Error from '@/views/Error'
import NestedRoutes from '@/views/NestedRoutes'
import NestedRoutes1 from '@/views/NestedRoutes/index1'
import NestedRoutes2 from '@/views/NestedRoutes/index2'
import codeNav from '@/views/codeNav'
import codeNav1 from '@/views/codeNav/index1'
import NameRouter from '@/views/NameRouter'
import NameView from '@/views/NameView'
import NameView1 from '@/views/NameView/index1'
import NameView2 from '@/views/NameView/index2'
import NameView3 from '@/views/NameView/index3'
import NameView4 from '@/views/NameView/index4'
import NameView5 from '@/views/NameView/index5'
import NameView6 from '@/views/NameView/index6'
Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    // 动态路径参数 以冒号开头
    { path: '/dynamicSegment/:id', component: DynamicSegment },
    { path: '*', component: Error },
    { path: '/NestedRoutes',
      component: NestedRoutes,
      children:
      [
        { path: 'NestedRoutes1', component: NestedRoutes1 },
        { path: 'NestedRoutes2', component: NestedRoutes2 }
      ]
    },
    { path: '/codeNav', component: codeNav },
    { path: '/codeNav1', component: codeNav1, name: 'codeNav1' },
    { path: '/nameRouter', component: NameRouter, name: 'nameRouter' },
    { path: '/nameView',
      name: 'nameView',
      components: {
        default: NameView,
        a: NameView1,
        b: NameView2
      }
    },
    { path: '/nameView3',
      name: 'nameView3',
      component: NameView3,
      children: [
        { path: '', component: NameView4 },
        { path: 'nameView5',
          components: {
            default: NameView,
            c: NameView1,
          }
        }
      ]
    }

  ]
})
