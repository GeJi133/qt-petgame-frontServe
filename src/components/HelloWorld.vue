<template>
  <div class="htmleaf-container">
    <header class="htmleaf-header">
      <h1>animateSprite-可控制雪碧图（sprites）动画的jQuery插件 <span>Animating sprites using jQuery made easy</span></h1>
      <div class="htmleaf-links">
        <a class="htmleaf-icon icon-htmleaf-home-outline" href="http://www.htmleaf.com/" title="jQuery之家" target="_blank"><span> jQuery之家</span></a>
        <a class="htmleaf-icon icon-htmleaf-arrow-forward-outline" href="http://www.htmleaf.com/jQuery/Image-Effects/201604033294.html" title="返回下载页" target="_blank"><span> 返回下载页</span></a>
      </div>
    </header>
    <div class="animation animation-2"></div>
    <section class="btns">
      <button id="left" @click="testJquery"
      >Go Left</button>
      <button id="right">Go Right</button>
      <button id="play">Play</button>
      <button id="stop">Stop</button>
      <button id="resume">Resume</button>
      <button id="restart">Restart</button>
      <button id="changeFPS">Change FPS</button>
      <button id="remove">Remove DOM</button>
    </section>
    <div class="related">
      <h3>如果你喜欢这个插件，那么你可能也喜欢:</h3>
      <a href="http://www.htmleaf.com/css3/css3donghua/201512092884.html">
        <img src="related/1.jpg" width="300" alt="使用steps属性制作僵尸行走CSS3 Sprite动画特效"/>
        <h3>使用steps属性制作僵尸行走CSS3 Sprite动画特效</h3>
      </a>
      <a href="http://www.htmleaf.com/jQuery/Image-Effects/201603043178.html">
        <img src="related/2.jpg" width="300" alt="类似Facebook的GIF图片播放jQuery插件"/>
        <h3>类似Facebook的GIF图片播放jQuery插件</h3>
      </a>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery'
  // import animateSprite from 'animiateSprite'
export default {
  name: 'HelloWorld',
  mounted() {
    var currentFps = 12;
    var animationSettings = {
      fps: currentFps,
      loop: true,
      autoplay: false,
      animations: {
        walkRight: [0, 1, 2, 3, 4, 5, 6, 7],
        walkLeft: [15, 14, 13, 12, 11, 10, 9, 8]
      },
      complete: function(){
        // this will be called when
        // there is no loop and the
        // animation finishes
        console.log('animation End');
      }
    };

    var animationSettingsOld = {
      fps: currentFps,
      loop: true,
      autoplay: false,

      complete: function(){
        // this will be called when
        // there is no loop and the
        // animation finishes
        console.log('animation End');
      }
    };

    $('.animation').animateSprite(animationSettings);
    // $('.animation').animateSprite('play');

    var goLeft = function(){
      $('.animation').animateSprite('play', 'walkLeft');
    }

    var goRight = function(){
      $('.animation').animateSprite('play', 'walkRight');
    }

    var play = function(){
      $('.animation').animateSprite('play');
    }
    $('#play').on('click', play);
    $('#left').on('click', goLeft);
    $('#right').on('click', goRight);
    $('#stop').on('click', function(){
      alert("jdakfhdkj");
      $('.animation').animateSprite('stop');
    });
    $('#resume').on('click', function(){
      $('.animation').animateSprite('resume');
    });

    $('#restart').on('click', function(){
      $('.animation').animateSprite('restart');
    });

    $('#changeFPS').on('click', function(){
      currentFps = (currentFps === 12) ? 3 : 12;
      $('.animation').animateSprite('fps', currentFps);
    });

    $('#remove').on('click', function(){
      $('.animation').remove();
    });

    $('body').on('keydown', function(ev){
      if (ev.keyCode === 39){
        goRight();
      } else if (ev.keyCode === 37) {
        goLeft();
      }
      console.log('ev', ev.keyCode);
    });

  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    testJquery(){

    }
  }
}



</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
