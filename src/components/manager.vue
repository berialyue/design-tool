<template>
  <div id="grab">
    <label class="upload">
        请上传店长二维码
        <input type='file' @change="getSrc('code')" ref="code">
    </label>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="160px" class="input-wrapper">
      <el-row :gutter="20">
        <el-form-item label="请输入门店名称" prop="storeName">
          <el-col :span="10"><el-input v-model="ruleForm.storeName"></el-input></el-col>
          <el-col :span="10"><div style="font-family: Microsoft YaHei;">{{this.ruleForm.storeName}}</div></el-col>
        </el-form-item>
      </el-row>
      <el-row :gutter="20">
        <el-form-item >
          <el-button type="primary" @click="submitForm('ruleForm')" class="btn">生成图片</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-row>
    </el-form>
    <canvas ref="canvas" width="750" height="1294"></canvas>
    <img src="../assets/img/dianzhang.jpg" id="bgImg" style="display:none">
</div>
</template>

<script>
export default {
  name: 'manager',
  data: function() {
    return {
      elInput: null,
      code: new Image(),
      ruleForm: {
        storeName: ''
      },
      rules: {
        storeName: [
          { required: true, message: '请输入门店名称', trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.initDraw()
        } else {
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    getUploadEle(ele) {
      const uploadRef = {
        'code': () => {
          return this.$refs.code
        },
      };
      return uploadRef[ele]();
    },
    getImgEle(ele) {
      const upload = {
        'code': () => {
          return this.code
        },
      };
      return upload[ele]();
    },
    getSrc(ele){
      const elUpload = this.getUploadEle(ele)
      const img = this.getImgEle(ele)
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
      this.$nextTick(() => {
        const canvas = this.$refs.canvas
        this.context = canvas.getContext('2d')
        this.context.drawImage(bgImg, 0, 0, 750, 1294)
        this.context.drawImage(this.code, 94, 390, 559, 559)

        this.context.beginPath();
        this.context.font = "38px Microsoft YaHei";
        this.context.textAlign = 'center'
        this.context.fillStyle = '#e6750d'
        this.context.fillText(this.ruleForm.storeName, 375, 330);
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@font-face {
  font-family: 'guangbiao';
  src: url('../assets/font/guangbiao.TTF');
}

@font-face {
  font-family: 'IMPACT';
  src: url('../assets/font/IMPACT.TTF');
}

canvas { 
  letter-spacing: 2px; 
}

.upload {
  display: inline-block;
  margin: 30px;
}

.btn {
  margin-left:-160px
}
</style>
