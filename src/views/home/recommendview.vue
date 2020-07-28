<template>
    <div class="recommend">
      <div v-for="(item,key) in recommends" :key="key" class="recommenditem">
          <a :href="item.link"></a>
          <img :src="item.image" alt="">
          <div> {{item.title}} </div>
      </div>
    </div>
</template>

<script>
export default {
    props: {
        recommends: {
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>

<style>
.recommend{
    display: flex;
    width: 100%;
    text-align: center;
    font-size: 12px;
    padding: 10px 0px 20px;
    border-bottom:8px solid #eee
}
.recommenditem{
    flex: 1;
}
.recommenditem img{
    width: 70px;
    height: 70px;
     
}
</style>