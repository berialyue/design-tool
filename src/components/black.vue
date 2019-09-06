<template>
  <div id="black">
    <label class="upload">
        请上传商品主图
        <input type='file' @change="getSrc('mainImg')" ref="mainImg">
    </label>
    <label>
      <el-button type="primary" @click="initDraw()">生成图片</el-button>
    </label>
    <br>
    <canvas ref="canvas" width="800" height="800"></canvas>
    <img src="../assets/img/black.png" id="bgImg" style="display:none">
</div>
</template>

<script>
export default {
  name: 'black',
  data: function() {
    return {
      elInput: null,
      mainImg: new Image()
    };
  },
  methods: {
    getSrc(){
      const elUpload = this.$refs.mainImg
      const img = this.mainImg
      const reader = new FileReader();
      reader.onload = (e) => {
        const src = e.target.result;
        img.src = src;
      };
      if (elUpload.files && elUpload.files[0]) {
        reader.readAsDataURL(elUpload.files[0]);
      }
    },
    initDraw() {
      // 初始化画布
      const bgImg = document.getElementById('bgImg')

      const canvas = this.$refs.canvas
      this.context = canvas.getContext('2d')
      this.context.drawImage(this.mainImg, 0, 0, 800, 800)
      this.context.drawImage(bgImg, 0, 0, 800, 800)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.upload {
  display: inline-block;
  margin: 30px;
}

.btn {
  margin-left:-160px
}
</style>
