<template>
  <div class="hello">
      <anchored-heading :level="1">Hello world!</anchored-heading>
      <ul class="tabs clearfix">
        <li v-for="(tab,index) in tabsName">
          <a href="#" class="tab-link" @click="tabsSwitch(index)" v-bind:class="{active:tab.isActive}">{{tab.name}}</a>
        </li>
      </ul>
 
      <div class="cards">
        <div class="tab-card" style="display: block; display:flex;background:pink;">
           <ul class="list" style="position: absolute; z-index: 999; height: 100%; display: flex;">
  <li v-for="(tab,index) in currentTabComponent" :key="index" @click="tabs(index)" :class="{actives:tab.isActive}">
                    {{ tab.name }}
             </li>
           </ul>
           <div class="box" style="display:block">1</div>
           <div class="box" >2</div>
           <div class="box">3</div>
        </div>
        <div class="tab-card" style="background:purple;">欢迎来到CSS模块</div>
        <div class="tab-card" style="background:yellow;">嗨，这里是Vue</div>
      </div>
  </div>
</template>
<!-- /api?key=d8cf14cfe2162b4659bd04acb26d73b2&type=2&fgcolor=00b7ee&w=90&m=5&text=hello%20world! -->

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      currentTabComponent:[{
          name:'Tab1',
          isActive:true
      },{
        name:'Tab2',
        isActive:false
      },{
        name:'Tab3',
        isActive:false
      }],
      actives:false,
      tabsName: [{
          name: "HTML",
          isActive: true
        }, {
          name: "CSS",
          isActive: false
        }, {
          name: "Vue",
          isActive: false
        }],
        active: false

    }
  },
  methods:{
    tabsSwitch: function(tabIndex) {
 
          var tabCardCollection = document.querySelectorAll(".tab-card"),
            len = tabCardCollection.length;
 
          for(var i = 0; i < len; i++) {
            tabCardCollection[i].style.display = "none";
            this.tabsName[i].isActive = false;
          }
          this.tabsName[tabIndex].isActive = true;
          tabCardCollection[tabIndex].style.display = "block";
        },
    tabs(tabind){
        var box = document.querySelectorAll(".box");
        var len = box.length;
        console.log(box);
        for(var i = 0; i < len; i++){
            box[i].style.display = "none"
            this.currentTabComponent[i].isActive = false;
        }
          this.currentTabComponent[tabind].isActive = true;
          box[tabind].style.display = "block";

    }
  },
  created(){   
 
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    * {
      padding: 0;
      margin: 0;
    }
    .tab-card{
      position: relative;
    }
    .box {
      width: 730px;
     height:100%;
      margin: 0 auto;
      position:absolute;
      left: 35px;
      top:0;
      display: none;
    }
    .box:nth-of-type(1){
      background:orange;
    }
     .box:nth-of-type(2){
      background:blue;
    }
     .box:nth-of-type(3){
      background:green;
    }
    .tabs li {
      float: left;
      margin-right: 8px;
      list-style: none;
    }
    
    .tabs .tab-link {
      display: block;
      width: 250px;
      height: 49px;
      text-align: center;
      line-height: 49px;
      background-color: #5597B4;
      color: #fff;
      text-decoration: none;
    }
    
    .tabs .tab-link.active {
      height: 47px;
      border-bottom: 2px solid #E35885;
      transition: .3s;
    }
    
    .cards {
      float: left;
    }
    
    .cards .tab-card {
      height:200px;
      width:770px;
      display: none;
    }
    
    .clearfix:after {
      content: "";
      display: block;
      height: 0;
      clear: both;
    }
    
    .clearfix {
      zoom: 1;
    }
    .list{
        flex-direction:column ;
        justify-content: space-between; 

    }
    .list li{
        height:33%;
        line-height: 80px;
    }
    .list li:nth-of-type(1){
      background:red;
    }
    .list li:nth-of-type(2){
      background:cyan;
    }
    .list li:nth-of-type(3){
      background:gray;
    }
</style>
