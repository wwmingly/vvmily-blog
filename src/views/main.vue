<template>
  <div>
    <header class="k-header">
      <com-header></com-header>
      <com-meun></com-meun>
    </header>
    <router-view />
    <!-- <article>
      <main class="r_box">
        <router-view />
      </main>
      <com-aside></com-aside>
    </article> -->
    <div class="blank"></div>
    <com-footer></com-footer>
    <a href="#" class="cd-top">Top</a>
  </div>
</template>
<script>
  import comHeader from "../components/Header"
  import comMeun from "../components/Meun"
  import comAside from "../components/Aside"
  import comFooter from "../components/Footer"
  export default {
    name: "Main",
    data() {
      return {}
    },
    computed: {
      
    },
    created(){
      
    },
    components: {
      comHeader,
      comMeun,
      comAside,
      comFooter
    }
  }

</script>
