<template>
  <article>
    <div class="picsbox">
        <div class="bodymodal"></div>
        <!--播放到第一张图的提示-->
        <div class="firsttop">
        <div class="firsttop_right">
            <div class="close2"> <a class="closebtn1" title="关闭" href="javascript:void(0)">X</a> </div>
            <div class="replay">
            <h2 id="div-end-h2"> 已到第一张图片了。 </h2>
            <p> <a class="replaybtn1" href="javascript:;">重新播放</a> </p>
            </div>
        </div>
        </div>
        <!--播放到最后一张图的提示-->
        <div class="endtop">
        <div class="firsttop_right">
            <div class="close2"> <a class="closebtn2" title="关闭" href="javascript:void(0)">X</a> </div>
            <div class="replay">
            <h2 id="H1"> 已到最后一张图片了。 </h2>
            <p> <a class="replaybtn2" href="javascript:;">重新播放</a> </p>
            </div>
        </div>
        </div>
        <!--弹出层结束--> 
        <!--图片特效内容开始-->
        <div class="piccontext">
        <h2> 简单手工纸玫瑰 </h2>
        <div class="source">
            <div class="source_left"><span>相册</span><span>2018-07-24</span><span><script src=/tuseday/e/public/ViewClick/?classid=2&id=7&addclick=1></script> 人已阅读</span></div>
            <div class="source_right"> <a href="javascript:;" class="list">列表查看</a> </div>
            <div class="source_right1"> <a href="javascript:;" class="gaoqing">高清查看</a> </div>
        </div>
        <!--大图展示-->
        <div class="picshow">
            <div class="picshowtop"> <a href="#"><img src="../assets/images/1.jpg" alt="" id="pic1" curindex="0" /></a> <a id="preArrow" href="javascript:void(0)" class="contextDiv" title="上一张"><span id="preArrow_A"></span></a> <a id="nextArrow" href="javascript:void(0)" class="contextDiv" title="下一张"><span id="nextArrow_A"></span></a> </div>
            <div class="picshowtxt">
            <div class="picshowtxt_left"><span>1</span>/<i>6</i></div>
            </div>
            <div class="picshowlist">
            <div class="picshowlist_mid">
                <div class="picmidleft"> <a href="javascript:void(0)" id="preArrow_B"><span class="sleft"></span></a> </div>
                <div class="picmidmid">
                <ul>
                    <li> <a href="javascript:void(0);"><img src="../assets/images/1.jpg"  alt="" bigimg="../assets/images/1.jpg"  text=""  /></a></li>
                    <li> <a href="javascript:void(0);"><img src="http://www.yangqq.com/d/file/news/s/2014-01-29/f2147abb4802978a223dcf35c5fc6712.jpg"  alt="" bigimg="http://www.yangqq.com/d/file/news/s/2014-01-29/f2147abb4802978a223dcf35c5fc6712.jpg"  text=""  /></a></li>
                    <li> <a href="javascript:void(0);"><img src="http://www.yangqq.com/d/file/news/s/2014-01-29/c03f716c96b6be12913ad1ae8936bfa2.jpg"  alt="" bigimg="http://www.yangqq.com/d/file/news/s/2014-01-29/c03f716c96b6be12913ad1ae8936bfa2.jpg"  text=""  /></a></li>
                    <li> <a href="javascript:void(0);"><img src="http://www.yangqq.com/d/file/news/s/2014-01-29/3bded8740810178ba94ddda51974c972.jpg"  alt="" bigimg="http://www.yangqq.com/d/file/news/s/2014-01-29/3bded8740810178ba94ddda51974c972.jpg"  text=""  /></a></li>
                    <li> <a href="javascript:void(0);"><img src="http://www.yangqq.com/d/file/news/s/2014-01-29/66a418d0b46eb297038e4991c4537a07.jpg"  alt="" bigimg="http://www.yangqq.com/d/file/news/s/2014-01-29/66a418d0b46eb297038e4991c4537a07.jpg"  text=""  /></a></li>
                    <li> <a href="javascript:void(0);"><img src="http://www.yangqq.com/d/file/news/s/2014-01-29/586c2e0034856550d9168471b1d22a2e.jpg"  alt="" bigimg="http://www.yangqq.com/d/file/news/s/2014-01-29/586c2e0034856550d9168471b1d22a2e.jpg"  text=""  /></a></li>
                </ul>
                </div>
                <div class="picmidright"> <a href="javascript:void(0)" id="nextArrow_B"><span class="sright"></span></a> </div>
            </div>
            </div>
        </div>
        
        <!--列表展示-->
        <div class="piclistshow">
            <ul>
            <li>
                <div class="picimg"><img src="../assets/images/1.jpg" /></div>
            </li>
            <li>
                <div class="picimg"><img src="http://www.yangqq.com/d/file/news/s/2014-01-29/f2147abb4802978a223dcf35c5fc6712.jpg" /></div>
            </li>
            <li>
                <div class="picimg"><img src="http://www.yangqq.com/d/file/news/s/2014-01-29/c03f716c96b6be12913ad1ae8936bfa2.jpg" /></div>
            </li>
            <li>
                <div class="picimg"><img src="http://www.yangqq.com/d/file/news/s/2014-01-29/3bded8740810178ba94ddda51974c972.jpg" /></div>
            </li>
            <li>
                <div class="picimg"><img src="http://www.yangqq.com/d/file/news/s/2014-01-29/66a418d0b46eb297038e4991c4537a07.jpg" /></div>
            </li>
            <li>
                <div class="picimg"><img src="http://www.yangqq.com/d/file/news/s/2014-01-29/586c2e0034856550d9168471b1d22a2e.jpg" /></div>
            </li>
            </ul>
        </div>
        </div>
        <div class="picjianjie"> 游览普陀山一天时间足够了，如果考虑到还要来还愿，那就没必要一次把所有的地方都去到，如果只是单纯的旅游，那就把最重要的地方看看就可以了，普陀山并不是以景色著称的。普陀山上住宿餐饮价格都非常贵，住宿还好说，毕竟供不应求嘛，尤其是节假日，想要提前预定都不一定有房间，餐饮更是离谱，一般都是岛外四五倍的价格。所以建议大家像我们一样住在朱家尖，莲花路是朱家尖镇的中心，比较繁华热闹，住宿餐饮都集中在那里，岛上游玩去庙里体验素斋就可以啦。 </div>
        <p class="diggit"><a href=""> 很赞哦！ </a>(<b id="diggnum">13</b>)</p>
        <div class="news_pl">
        <h2>文章评论</h2>
        <div class="gbko"> </div>
        </div>
    </div>
  </article>

</template>
