<template>
  <article>
    <div class="picbox">
      <ul class="pic-lists">
        <li><a href=""><i><img src="http://www.yangqq.com/skin/850/images/text02.jpg"></i>
            <p class="picinfo">古典个人博客模板《青砖屋檐》</p>
          </a> </li>
        <li><a href=""><i><img
                src="http://www.yangqq.com/d/file/news/s/2013-07-09/d353fb4c75965aef35182a7875186b79.jpg"></i>
            <p class="picinfo">古典个人博客模板《青砖屋檐》</p>
          </a> </li>
        <li><a href=""><i><img src="http://www.yangqq.com/skin/850/images/text02.jpg"></i>
            <p class="picinfo">古典个人博客模板《青砖屋檐》</p>
          </a> </li>
        <li><a href=""><i><img
                src="http://www.yangqq.com/d/file/news/s/2013-07-09/d353fb4c75965aef35182a7875186b79.jpg"></i>
            <p class="picinfo">古典个人博客模板《青砖屋檐》</p>
          </a> </li>
        <li><a href=""><i><img src="http://www.yangqq.com/skin/850/images/text02.jpg"></i>
            <p class="picinfo">古典个人博客模板《青砖屋檐》</p>
          </a> </li>
        <li><a href=""><i><img
                src="http://www.yangqq.com/d/file/news/s/2013-07-09/d353fb4c75965aef35182a7875186b79.jpg"></i>
            <p class="picinfo">古典个人博客模板《青砖屋檐》</p>
          </a> </li>
        <li><a href=""><i><img src="http://www.yangqq.com/skin/850/images/text02.jpg"></i>
            <p class="picinfo">古典个人博客模板《青砖屋檐》</p>
          </a> </li>
        <li><a href=""><i><img
                src="http://www.yangqq.com/d/file/news/s/2013-07-09/d353fb4c75965aef35182a7875186b79.jpg"></i>
            <p class="picinfo">古典个人博客模板《青砖屋檐》</p>
          </a> </li>
      </ul>
    </div>
  </article>

</template>
<script>
  import {
    animationPic
  } from '../utils/animation'
  export default {
    name: 'Album',
    components: {

    },
    data() {
      return {
        scrollReveal: this.$scrollReveal()
      }
    },
    created() {
      console.log()
    },
    mounted() {
      this.scrollReveal.reveal('.pic-lists li', animationPic);
    },
    methods: {}
  }

</script>
