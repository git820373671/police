<template>
  <div class="by-box">
    <div class="by-header"><h2><img src="../../assets/images/xiaodaibao/icon1.png"/>消维宝</h2>
      <div class="header-right"><img src="../../assets/images/xiaodaibao/icon2.png"/></div>
    </div>
    <div class="by-banner">
      <img src="../../assets/images/xiaodaibao/banner.png"/>
      <div class="logo"><img src="../../assets/images/xiaodaibao/logo.png"/></div>
    </div>
    <div class="by-con">
      <ul class="list">
        <li>
          <router-link to="/task/list"><img src="../../assets/images/xiaodaibao/bg1.png"/>
            <h2 class="title">任务汇总<span>task</span></h2>
            <div class="detail"><p>总数：5141</p>
              <p>
                已完成：5140</p>
              <p>
                未完成：1</P></div>
          </router-link>
        </li>
        <li>
          <router-link to="/task/list"><img src="../../assets/images/xiaodaibao/bg2.png"/>
            <h2 class="title">设备汇总<span>device</span></h2>
            <div class="detail"><p>总数：5141</p>
              <p>
                已完成：5140</p>
              <p>
                未完成：1</P></div>
          </router-link>
        </li>
        <li>
          <router-link to="/task/list"><img src="../../assets/images/xiaodaibao/bg3.png"/>
            <h2 class="title">巡检记录<span>Patrol</span></h2>
            <div class="detail"><p>总数：5141</p>
              <p>
                已完成：5140</p>
              <p>
                未完成：1</P></div>
          </router-link>
        </li>
        <li>
          <router-link to="/task/list"><img src="../../assets/images/xiaodaibao/bg4.png"/>
            <h2 class="title">故障报修<span>task</span></h2>
            <div class="detail"><p>总数：5141</p>
              <p>
                已完成：5140</p>
              <p>
                未完成：1</P></div>
          </router-link>
        </li>
        <li>
          <router-link to="/task/list"><img src="../../assets/images/xiaodaibao/bg5.png"/>
            <h2 class="title">项目成员<span>member</span></h2>
            <div class="detail"><p>总数：5141</p>
              <p>
                已完成：5140</p>
              <p>
                未完成：1</P></div>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="by-footer" id="footer"><img src="../../assets/images/xiaodaibao/footBg.png"/>

      <p class="left-btn" v-bind:class=" selectTab=='my'? 'active': ''" v-on:click="change('my')" id="my"></p>

      <p class="middle-btn" v-bind:class=" selectTab=='middle'? 'active': ''" v-on:click="change('middle')"
         id="middle"></p>

      <p class="right-btn" v-bind:class=" selectTab=='home'? 'active': ''" v-on:click="change('home')" id="home"></p>
    </div>
  </div>

</template>
<script>
  export default{
    name: 'index',
    data: function () {
      return {
        selectTab: 'my'
      }
    },
    methods: {
      change: function (id) {
        this.selectTab = id
      }
    }
  }
</script>
<style>
  .by-box {
    height: 100%;
    background: #f6f6f6;
    padding-top: 45px;
  }

  .by-header {
    position: fixed;
    width: 100%;
    height: 45px;

    top: 0;
    left: 0;
    z-index: 10;
    background: #fff;
    line-height: 45px;
  }

  .by-header h2 {
    width: 100%;
    height: 45px;

    text-align: center;
    font-size: 16px;
    color: #2a2a2a;
    font-weight: lighter;
  }

  .by-header h2 img {
    height: 50%;
    margin-right: 5px;
  }

  .by-header .header-right {
    position: absolute;
    top: 0;
    right: 10px;
    height: 100%;
  }

  .by-header .header-right img {
    height: 50%;
  }

  .by-banner {
    position: relative;
    width: 100%;
  }

  .by-banner > img {
    display: block;
    width: 100%;
  }

  .by-banner .logo {
    position: absolute;
    width: 100%;
    top: 50%;
    margin-top: -20px;
    left: 0;
    height: 40px;
    line-height: 40px;
    text-align: center;
  }

  .by-banner .logo img {
    width: 30%;
  }

  .by-con {
    padding: 0 10px;
  }

  .by-con .list {
    width: 100%;
  }

  .by-con .list:after {
    display: block;
    clear: both;
    content: '';
  }

  .by-con .list li {
    position: relative;
    width: 30.3333%;
    height: auto;
    margin: 15px 1.5% 0 1.5%;
    float: left;
  }

  .by-con .list li img {
    display: block;
    width: 100%;
  }

  .by-con .list li h2 {
    position: absolute;
    top: 10%;
    right: 0;
    width: 65%;
    font-weight: lighter;
    font-size: 13px;
    line-height: 15px;
    color: #fff;
  }

  .by-con .list li .detail {
    position: absolute;
    top: 48%;
    left: 6%;
    width: 88%;
  }

  .by-con .list li .detail p {
    line-height: 20px;
    font-size: 12px;
    color: #2a2a2a;
  }

  .by-footer {
    position: fixed;
    width: 100%;
    bottom: 0;
    left: 0;
  }

  .by-footer > img {
    display: block;
    width: 100%;
  }

  .by-footer .left-btn {
    position: absolute;
    width: 25%;
    height: 60%;
    left: 5%;
    bottom: 0;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: auto 75%;
    background-image: url("../../assets/images/xiaodaibao/icon3-1.png");
  }

  .by-footer .left-btn.active {
    background-image: url("../../assets/images/xiaodaibao/icon3-2.png");
  }

  .by-footer .right-btn {
    position: absolute;
    width: 25%;
    height: 60%;
    right: 5%;
    bottom: 0;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: auto 75%;
    background-image: url("../../assets/images/xiaodaibao/icon4-1.png");
  }

  .by-footer .right-btn.active {
    background-image: url("../../assets/images/xiaodaibao/icon4-2.png");
  }

  .by-footer .middle-btn {
    position: absolute;
    width: 25%;
    height: 60%;
    left: 37.5%;
    bottom: 5%;
    background-position: center top;
    background-repeat: no-repeat;
    background-size: auto 60%;
    background-image: url("../../assets/images/xiaodaibao/icon5.png");
  }

</style>
