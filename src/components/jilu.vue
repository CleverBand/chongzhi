<template>
    <div class="content">
      
        <header class="m-header">
       <i class="iconfont" @click="handback">&#xe67e;</i>
       <i class="m-header-title">交易记录</i>
       </header>  
      <div class="wide">
          <img class="img1" src="./shou.png" alt="">
          <div class="wideright">
              <div class="mid1">
                 <div class="mid1left">
                     手机充值
                 </div>
                 <div class="mid1right">
                        100元
                 </div>
              </div>
              <div class="mid2">
                  <div class="mid2left">
                       12355666
                  </div>
                  <div class="mid2right">
                         交易成功
                  </div>
              </div>

          </div>

      </div>
    </div>
</template>

<script>
    export default {
        name: "jilu",
        data(){
            return {
                

            }
        },
        methods:{
            handback(){
                this.$router.back(-1)
            }
        }
        

    }
</script>

<style scoped lang="less">
.content {
    width: 100%;
    height: 100%;
    overflow: hidden;
    .m-header {
         position: fixed;
         width: 100%;
         padding-left: .3rem;
         box-sizing: border-box;
         top: 0;
         left: 0;
         line-height: .8rem;
         background-color: #f5f5f5;
         border-bottom: 1px solid #e5e5e5;
         .m-header-title {
           padding-left: .2rem;
           font-size: .34rem;
         }
       
       
       }
    .wide {
        margin-top: .8rem;
        width: 100%;
        height: 1.6rem;
        background-color: #fff;
        display: flex;
        .img1 {
            width: 1rem;
            height: 1rem;
            float: left;
            margin: .3rem;
        }
        .wideright {
            flex: 1;
            /* background-color: red; */
            display: flex;
            flex-direction: column;
            border-bottom: .01rem solid #f0f0f0;
            .mid1 {
                flex: 6;
                overflow: hidden;
                line-height: 1.1rem;
                .mid1left {
                    float: left;
                    font-size: .28rem;
                    color: #333;
                }
                .mid1right {
                   float: right;
                   margin-right: .3rem;
                   font-size: .34rem;
                   color: #333333;
                   font-weight: bolder;
                }
            }
            .mid2 {
               flex: 6;
               overflow: hidden;
               line-height: .5rem;
               .mid2left {
                  float: left;
                  font-size: .24rem;
                  color: #999999;
               }
               .mid2right {
                  float: right;
                  margin-right: .3rem;
                  font-size: .24rem;
                  color: #999999;
               }
            }
        }
    }
}
     
</style>
