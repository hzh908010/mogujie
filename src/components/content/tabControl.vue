<template>
    <div class="tabcontrol">
        <div v-for="(item,index) in titles" :key="index" 
        class="tabcontrol_item" :class="{active: index ===currentIndex}"
        @click="itemClick(index)">
            <span> {{item}} </span>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        titles:{
            type:Array,
            default(){
                return []
            }
        }
    },
    data(){
        return{
            currentIndex: 0
        }
    },
    methods:{
        itemClick(index){
           this.currentIndex = index
        }
    }
}
</script>

<style>
.tabcontrol {
    display: flex;
    text-align: center;
    font-size: 15px;
    height: 40px;
    line-height: 40px;
}
.tabcontrol_item{
    flex: 1;
}
.active{
    color: #ff5777;
}
.active span{
    border-bottom:2px solid #ff5777
}
.tabcontrol_item span{
    padding: 5px;
}
</style>