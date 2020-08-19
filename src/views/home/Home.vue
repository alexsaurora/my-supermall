<template>
  <div id="home">
    <NavBar class="home-nav"><div slot="center">购物街</div></NavBar>
    <p class="content">{{result}}</p>
  </div>
</template>

<script>
  import Vue from 'vue'
  import NavBar from 'components/common/navbar/NavBar';
  import {getHomeMultidata} from 'network/home'

  export default {
    name: "Home",
    components: {
      NavBar
    },
    data(){
      return{
        result: this.watchResult,
      }
    },
    created(){
      //1,请求直接从页面发出
      getHomeMultidata().then(res=>{
        console.log(res);
        this.result = res;
        //通过mutations方法从页面更新数据到store的state中
        this.$store.commit('getHomeResult',res);
        //直接修改state中值，不推荐
        // this.$store.state.Home.homeResult = res;
      })

      //2,请求从store的action发起，异步请求后通过mutations设置到state中
      // this.$store.dispatch({
      //   type:'aGetHomeMultidata',
      // })
      // .then((res)=>{
      //   console.log("============================");
      //   console.log(this.$store.state.Home.homeResult);
      //   console.log(res.data);

      //   let multidata = JSON.parse(JSON.stringify(res.data));
      //   console.log(multidata);

      //   this.result = multidata;
      // })

    },
    methods:{

    },
    computed:{
      // getResult(){
      //   return this.$store.state.Home.homeResult;
      // }
    },
    watch:{
      watchResult(){
         this.result = this.$store.state.Home.homeResult;
      }
    }
  }
</script>

<style scoped>
  #home {
    /*padding-top: 44px;*/
    height: 100vh;
    position: relative;
  }

  .home-nav {
    background-color: var(--color-tint);
    color: #fff;

    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }


  .tab-control {
    position: sticky;
    top: 44px;
    z-index: 9;
  }

  .content {
    /* overflow: hidden; */
    overflow-y: scroll;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }

  /*.content {*/
    /*height: calc(100% - 93px);*/
    /*overflow: hidden;*/
    /*margin-top: 44px;*/
  /*}*/
</style>
