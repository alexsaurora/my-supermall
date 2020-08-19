<template>
  <div id="home">
    <NavBar class="home-nav"><div slot="center">购物街</div></NavBar>
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
        result: null,
      }
    },
    created(){
      getHomeMultidata().then(res=>{
        console.log(res);
        this.result = res;
        // Vue.set(this.$store.state,"homeResult",res);
        // this.$store.state.Home.homeResult.setData(res);
      })
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
    overflow: hidden;

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
