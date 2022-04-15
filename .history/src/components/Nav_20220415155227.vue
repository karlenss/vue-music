<template>
  <div>
      导航
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
            border-bottom: 2px solid #ff0000;
        }
    }
}

</style>