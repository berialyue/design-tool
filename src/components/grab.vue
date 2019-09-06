<template>
  <div id="grab">
    <label class="upload">
        请上传商品主图
        <input type='file' @change="getSrc('mainImg')" ref="mainImg">
    </label>
    <label class="upload">
        请上传商品二维码
        <input type='file' @change="getSrc('code')" ref="code">
    </label>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="160px" class="input-wrapper">
      <el-row :gutter="20">
        <el-form-item label="请输入商品名称" prop="productName">
          <el-col :span="10"><el-input v-model="ruleForm.productName"></el-input></el-col>
          <el-col :span="10"><div style="font-family: guangbiao;">{{this.ruleForm.productName}}</div></el-col>
        </el-form-item>
      </el-row>
      <el-row :gutter="20">
        <el-form-item label="请输入商品卖点" prop="point">
          <el-col :span="10"><el-input v-model="ruleForm.point"></el-input></el-col>
          <el-col :span="10"><div style="font-family: guangbiao;">{{this.ruleForm.point}}</div></el-col>
        </el-form-item>
      </el-row>
      <el-row :gutter="20">
        <el-form-item label="请输入活动价" prop="activityPrice">
          <el-col :span="10"><el-input v-model="ruleForm.activityPrice"></el-input></el-col>
          <el-col :span="10"><div style="font-family: IMPACT;">{{this.ruleForm.activityPrice}}</div></el-col>
        </el-form-item>
      </el-row>
      <el-row :gutter="20">
        <el-form-item label="请输入市场价" prop="marketPrice">
          <el-col :span="10"><el-input v-model="ruleForm.marketPrice"></el-input></el-col>
          <el-col :span="10"><div style="font-family: IMPACT;">{{this.ruleForm.marketPrice}}</div></el-col>
        </el-form-item>
      </el-row>
      <el-row :gutter="20">
        <el-form-item >
          <el-button type="primary" @click="submitForm('ruleForm')" class="btn">生成图片</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-row>
    </el-form>
    <canvas ref="canvas" width="750" height="750"></canvas>
    <img src="../assets/img/qiang.png" id="bgImg" style="display:none">
</div>
</template>

<script>
export default {
  name: 'grab',
  data: function() {
    return {
      elInput: null,
      mainImg: new Image(),
      code: new Image(),
      ruleForm: {
        productName: '',
        point: '',
        marketPrice: '',
        activityPrice: ''
      },
      rules: {
        productName: [
          { required: true, message: '请输入商品名称', trigger: 'blur' }
        ],
        point: [
          { required: true, message: '请输入商品卖点', trigger: 'blur' }
        ],
        marketPrice: [
          { required: true, message: '请输入市场价', trigger: 'blur' }
        ],
        activityPrice: [
          { required: true, message: '请输入活动价', trigger: 'blur' }
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
        'mainImg': () => {
          return this.$refs.mainImg
        },
        'code': () => {
          return this.$refs.code
        },
      };
      return uploadRef[ele]();
    },
    getImgEle(ele) {
      const upload = {
        'mainImg': () => {
          return this.mainImg
        },
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

      const canvas = this.$refs.canvas
      this.context = canvas.getContext('2d')
      this.context.drawImage(this.mainImg, 8, 6, 590, 610)
      this.context.drawImage(bgImg, 0, 0, 750, 750)
      this.context.drawImage(this.code, 607, 534, 120, 120)
      
      this.context.beginPath();
      this.context.font = "34px guangbiao";
      this.context.textAlign = 'center'
      this.context.fillStyle = '#ffffff'
      this.context.fillText(this.ruleForm.productName, 290, 720);

      this.context.beginPath();
      this.context.font = "28px Microsoft YaHei";
      this.context.textAlign = 'center'
      this.context.fillStyle = '#f22157'
      this.context.fillText(this.ruleForm.point, 290, 646);

      this.context.beginPath();

      const gradient = this.context.createLinearGradient(0,0,180,0);
      gradient.addColorStop(0,'#f90036');
      gradient.addColorStop(0.35,'#fb517e');
      gradient.addColorStop(0.61,'#f855aa');
      gradient.addColorStop(1,'#f22d87');

      this.context.font = "76px IMPACT";
      this.context.textAlign = 'center'
      this.context.fillStyle = gradient
      this.context.fillText(this.ruleForm.activityPrice, 650, 386);

      this.context.beginPath();
      this.context.font = "24px guangbiao";
      this.context.textAlign = 'center'
      this.context.fillStyle = '#898889'
      this.context.fillText(`市场价：${this.ruleForm.marketPrice}`, 660, 430);

      this.context.beginPath();
      this.context.moveTo(586, 420);
      this.context.lineTo(734,420);
      this.context.closePath();
      this.context.lineWidth = 3;
      this.context.strokeStyle = '#898889'
      this.context.stroke();
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
