<template>
  <nav>
    <ul id="starlist">
      <li v-for="item in list" :key="item.router"><a :class="{'selected':active===item.router}" v-text="item.name" @click="routerLink(item)"></a></li>
    </ul>
  </nav>
</template>
<script>
  export default {
    name: 'Meun',
    data() {
      return {
        list: [{
          router: '/home',
          name: 'vvmily',
        }, {
          router: '/novelty',
          name: '新鲜事儿',
        }, {
          router: '/diary',
          name: '我的日记',
        }, {
          router: '/album',
          name: '我的相册',
        }, {
          router: '/record',
          name: '微记录',
        }, {
          router: '/video',
          name: '视频',
        }, {
          router: '/about',
          name: '关于我',
        }],
        active:'/home', // selected
      }
    },
    created() {},
    methods: {
      routerLink(item) {
        this.$router.push({
          path: item.router,
          query: {}
        });
        this.active = item.router;
      }
    }
  }

</script>
