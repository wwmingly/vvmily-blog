import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Main from '@/views/main'
import Home from '@/views/home' // 首页 vvmily
import Novelty from '@/views/novelty' // 新鲜事儿 
import Diary from '@/views/diary'
import Album from '@/views/album'
import Record from '@/views/record'
import Video from '@/views/video'
import About from '@/views/about'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
      children: [
        {
          path: '/',
          redirect: '/home'
        },
        {
          path: '/home',
          name: 'Home',
          component: Home,
          meta: {
            title: '首页'
          }
        },
        {
          path: '/novelty',
          name: 'Novelty',
          component: Novelty,
          meta: {
            title: '新鲜事儿'
          }
        },
        {
          path: '/diary',
          name: 'Diary',
          component: Diary,
          meta: {
            title: '我的日记'
          }
        },
        {
          path: '/album',
          name: 'Album',
          component: Album,
          meta: {
            title: '我的相册'
          }
        },
        {
          path: '/record',
          name: 'Record',
          component: Record,
          meta: {
            title: '我的记录'
          }
        },
        {
          path: '/video',
          name: 'Video',
          component: Video,
          meta: {
            title: '视频'
          }
        },
        {
          path: '/about',
          name: 'About',
          component: About,
          meta: {
            title: '关于我'
          }
        }
      ]
    }
  ]
})
