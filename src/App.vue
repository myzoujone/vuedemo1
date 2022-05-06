<template>
  <div id="app">
    <!--我们先放一个头部的组件，同时放一个接收的函数recieve,又将当前数组的总数recordN发给头问-->
    <DemoHeader :recieve="recieve" :recordN="ItemLists.length"></DemoHeader>
    <!--中间这里放了一个UL的列表，将数组ppp送出去了，加一个变化的接收函数chage和删除全部的函数：deletefromAll-->
    <ItemList :ppp="ItemLists" :change="change" :deletefromAll="deleteOneRecord"></ItemList>
    <!--再声明了一下底部，放了二个函数，一个是选择全部：selectappAll，和删除全部：deleteAppAll-->
    <demoFooter :selectappAll="selectappAll" :deleteAppAll="deleteAppAll" :allredords="ItemLists"></demoFooter>
  </div>
</template>

<script>


import demoFooter from "@/components/demoFooter";
import DemoHeader from "@/components/DemoHeader";
import ItemList from "@/components/ItemList";
export default {
  name: 'App',

  components:{demoFooter,DemoHeader,ItemList},          //这里是声明了三个组件
  methods:{                                             //这里是声明了三个组件
    recieve(x){                                         //接收函数
      this.ItemLists.unshift(x)                         //如果接收到了OBJ的对象，加入数组
    },
    change(id){                                         //当某一个前面的checkbox被选择了
      this.ItemLists.forEach((obj)=>{                   //循环全部数组
        if (obj.id==id){                                //如果某一个的ID等于传值的ID
          obj.done=!obj.done                            //勾选的标识取反
        }
      })
    },
    deleteOneRecord(id){                                  //删除一个记录
      //数组删除，删除的数据开始位是ID出现的那个的索引的位置，取一位删除。
      this.ItemLists.splice(this.ItemLists.findIndex(item => item.id === id), 1)
    },
    selectappAll(flag){                                 //接收全选的标识
      this.ItemLists.forEach((obj)=>{obj.done=flag})    //循环将全部标识更换
    },
    deleteAppAll(){                                     //删除全部的
      //将数组等于数组过滤之后的，过滤内容是done等于假
      this.ItemLists=this.ItemLists.filter(item => item.done === false)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
