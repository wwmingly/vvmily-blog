<template>
  <nav>
    <ul id="starlist">
      <li v-for="item in list" :key="item.router"><a :class="{'selected':active===item.router}" v-text="item.name"
          @click="routerLink(item)"></a></li>
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
          type: false
        }, {
          router: '/novelty',
          name: '新鲜事儿',
          type: false
        }, {
          router: '/diary',
          name: '我的日记',
          type: false
        }, {
          router: '/album',
          name: '我的相册',
          type: true
        }, {
          router: '/record',
          name: '微记录',
          type: false
        }, {
          router: '/video',
          name: '视频',
          type: true
        }, {
          router: '/about',
          name: '关于我',
          type: false
        }],
        active: '/home', // selected
      }
    },
    created() {
      this.active = this.$route.path;
    },

    methods: {
      routerLink(item) {
        this.$router.push({
          path: item.router,
          query: {}
        });
        this.active = item.router;
        this.$store.commit("changeViews", item.type)
      }
    }
  }

</script>
