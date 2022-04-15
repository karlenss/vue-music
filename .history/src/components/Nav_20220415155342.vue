<template>
  <div>
      <ul class="top-nav">
        <li><router-link to="/">首页</router-link></li>
        <li><router-link to="/">首页</router-link></li>
        <li><router-link to="/">首页</router-link></li>
        <li><router-link to="/">首页</router-link></li>

        </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="less">
.top-nav {
    display: flex;
    background: #fff;
    li {
        flex: 1;
        text-align: center;
        padding-top: 10px;
        a {
            display: block;
            padding-bottom: 8px;

        }
        .active {
            border-bottom: 2px solid #f00;
        }
    }
}

</style>