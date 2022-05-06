<template>
    <ul style="display: block;width: 300px;margin: 0 auto;">
        <!--这里是每一个LI的值，循环，同时将变化和删除一条记录的办法传参进去-->
        <SimpleItem v-for="p1 in ppp" :key="p1.id" :p1="p1" :change="change" :deletefromAll="deleteOneRecord" ></SimpleItem>
    </ul>
</template>

<script>
    import SimpleItem from "./SimpleItem";
    export default {
        name: "ItemList",
        components:{SimpleItem},                        //这里告诉系统有一个SimpleItem的组件
        props:["ppp","change","deleteOneRecord"]        //接收参数，PPP是前面的数组ItemLists，二个参数是如果发生变化，或是删除了一个的办法
    }
</script>

<style scoped>

</style>