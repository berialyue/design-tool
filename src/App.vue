<template>
  <div id="app">
    <el-container>
      <el-header>
        <el-menu
          :default-active="$route.path"
          class="menu"
          mode="horizontal"
          unique-opened
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          router
        >
          <el-menu-item index="/grab">必抢爆款</el-menu-item>
          <el-menu-item index="/kill">每日秒杀</el-menu-item>
          <!-- <el-menu-item index="/new">每日上新</el-menu-item> -->
          <el-menu-item index="/manager">店长二维码</el-menu-item>
          <el-menu-item index="/together">一起拼团</el-menu-item>
          <el-menu-item index="/black">黑金主图</el-menu-item>
        </el-menu>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}

.el-header{
  background-color: #545c64;
}

</style>
