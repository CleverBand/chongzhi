<template>
    <div class="content">
        <header class="m-header">
       <i class="iconfont" >&#xe67e;</i>
       <i class="m-header-title">手机充值</i>
       </header>
       <div class="wide">
           <router-link class="chong" to="/jilu">充值记录</router-link>
           <div class="mid">玉米粒可折扣花费</div>
           <input class="ipt" type="number" maxlength="11" placeholder="请输入手机号"/>
           <div class="hide">中国移动</div>
           <div class="fid">
               当前米粒：<span class="jifen">200</span>
           </div>
           <div class="should">
               <div class="hidem" >12</div>
               <div class="hidem" >12</div>
               <div class="hidem" >12</div>
               <div class="hidem" >12</div>
               <div class="hidem" >12</div>

           </div>
           <div class="fid"></div>
       </div>
       <div class="btn" @click="handclick">立即支付</div>
       <div class="mask" v-if="showModal"></div>
       <div class="modalDlg" v-if="showModal">
            <div class="mili">
                当前米粒：<span class="jifen">200</span>
            </div>
            <div class="bang">
                <div class="mi2">折扣米粒数</div>
                <input class="put2" type="number" placeholder="输入米粒数">

            </div>
            <div class="mskmei">
                充值话费  <span class="txt1"><span class="weight">10</span>元</span>
            </div>
            <div class="missid">立即充值</div>
            <img class="wei" @click="backclick" src="./fan.png" alt="">
       </div>
    </div>
</template>

<script>
    export default {
        name: "chong",
        data(){
            return {
                idx:0,
                showModal:false


            }
        },
        methods: {
            handclick() {
                this.showModal = true
            },
            backclick(){
                this.showModal = false
            }
        },



    }
</script>

<style scoped lang="less">
.content {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    overflow: hidden;
    .m-header {
         position: fixed;
         width: 100%;
         padding-left: .3rem;
         z-index: 999;
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
        width: 6.9rem;
        margin: .3rem auto;
        margin-top: 1rem;
        border-radius: .1rem;
        background-color: #fff;
        overflow: hidden;
        position: relative;
        box-sizing: border-box;
        .chong {
            position: absolute;
            top: .2rem;
            right: .2rem;
            font-size: .28rem;
            color: #FF7A04;
        }
        .mid {
            width: 80%;
            font-size: .3rem;
            margin-top: .3rem;
            color: #000;
            padding-left: .2rem;
        }
        .ipt {
            height: .75rem;
            line-height: .75rem;
            padding-left: .2rem;
            margin-top: .2rem;
            color: #333333;
        }
        .hide {
            width: 100%;
            font-size: .3rem;
            padding-left: .2rem;
            line-height: .54rem;
            border-bottom:.01rem solid #F0F0F0;
        }
        .fid {
            width: 100%;
            line-height: .5rem;
            padding-left: .2rem;
            margin-top: .3rem;
            margin-bottom: .5rem;
            .jifen {
                color: #FF7A04;
            }
        }
        .should {
            width: 100%;
            margin-top: .3rem;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            .hidem {
               width: 30%;
               height: 1.32rem;
               border: .01rem solid #FF7A04;
               margin: .08rem;
               margin-top: .2rem;
               border-radius: .15rem;
               text-align: center;
               line-height: 1.32rem;
               color: #fff;
               background-color: #FF7A04;
            }
            .qian {
                width: 30%;
                height: 1.32rem;
                border: .01rem solid #FF7A04;
                margin: .08rem;
                margin-top: .2rem;
                border-radius: .15rem;
                text-align: center;
                line-height: 1.32rem;
            }
        }
    }
    .btn {
        display: block;
        width: 6.3rem;
        height: .76remrpx;
        border-radius: .38rem;
        text-align: center;
        line-height: .76rem;
        color: #fff;
        font-size: .36rem;
        margin: 0 auto;
        background-color: #FF7A04;
    }
    .mask {
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        background: #000;
        z-index: 9000;
        opacity: 0.7;
    }
    .modalDlg {
        width: 5.8rem;
        height: 5rem;
        position: fixed;
        top: 50%;
        left: 0;
        z-index: 9999;
        margin: -2.94rem .85rem;
        background-color: #fff;
        border-radius: .36rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        .mili {
            width: 100%;
            margin-top: .94rem;
            line-height: .5rem;
            font-size: .28rem;
            text-align: center;
            .jifen {
                color: #FDAF4A;
            }
        }
        .bang {
            width: 100%;
            height: .66rem;
            margin: .3rem auto;
            .mi2 {
                float: left;
                margin-left: 1.36rem;
                height: .66rem;
                font-size: .28rem;
                line-height: .66rem;
                width: 100%;
            }
            .put2 {
                float: right;
                margin-right: 1.36rem;
                margin-top: -.66rem;
                height: .66rem;
                width: 1.5rem;
                font-size: .28rem;
                line-height: .66rem;
                text-align: center;
                border-radius: .1rem;
                border: .01rem solid #FF7A04;
            }
        }
        .mskmei{
            font-size: .28rem;
            .txt1 {
                color: #FF7A04;
                .weight {
                    font-weight: bolder;
                }
            }
        }
        .missid {
            margin-top: .5rem;
            width: 3.6rem;
            height: .75rem;
            text-align: center;
            line-height: .75rem;
            font-size: .34rem;
            border-radius: .375rem;
            color: #fff;
            background-color: #FF7A04;
        }
        .wei {
            position: absolute;
            width: .26rem;
            height: .26rem;
            top: .32rem;
            right: .32rem;
        }
    }
}

</style>
