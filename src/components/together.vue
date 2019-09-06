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
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="180px" class="input-wrapper">
      <el-row :gutter="20">
        <el-form-item label="请输入商品名称第一行" prop="productNameLine1">
          <el-col :span="10"><el-input v-model="ruleForm.productNameLine1"></el-input></el-col>
          <el-col :span="10"><div style="font-family: black;">{{this.ruleForm.productNameLine1}}</div></el-col>
        </el-form-item>
      </el-row>
      <el-row :gutter="20">
        <el-form-item label="请输入商品名称第二行" prop="productNameLine2">
          <el-col :span="10"><el-input v-model="ruleForm.productNameLine2"></el-input></el-col>
          <el-col :span="10"><div style="font-family: black;">{{this.ruleForm.productNameLine2}}</div></el-col>
        </el-form-item>
      </el-row>
      <el-row :gutter="20">
        <el-form-item label="请输入商品卖点" prop="point">
          <el-col :span="10"><el-input v-model="ruleForm.point"></el-input></el-col>
          <el-col :span="10"><div style="font-family: black;">{{this.ruleForm.point}}</div></el-col>
        </el-form-item>
      </el-row>
      <el-row :gutter="20">
        <el-form-item label="请输入活动价" prop="activityPrice">
          <el-col :span="10"><el-input v-model="ruleForm.activityPrice"></el-input></el-col>
          <el-col :span="10"><div style="font-family: shuiyun;">{{this.ruleForm.activityPrice}}</div></el-col>
        </el-form-item>
      </el-row>
      <el-row :gutter="20">
        <el-form-item label="请输入市场价" prop="marketPrice">
          <el-col :span="10"><el-input v-model="ruleForm.marketPrice"></el-input></el-col>
          <el-col :span="10"><div style="font-family: shuiyun;">{{this.ruleForm.marketPrice}}</div></el-col>
        </el-form-item>
      </el-row>
      <el-row :gutter="20">
        <el-form-item >
          <el-button type="primary" @click="submitForm('ruleForm')" class="btn">生成图片</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-row>
    </el-form>
    <canvas ref="canvas" width="800" height="1265"></canvas>
    <img src="../assets/img/together.png" id="bgImg" style="display:none">
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
        productNameLine1: '',
        productNameLine2: '',
        point: '',
        marketPrice: '',
        activityPrice: ''
      },
      rules: {
        productNameLine1: [
          { required: true, message: '请输入商品名称第一行', trigger: 'blur' }
        ],
        productNameLine2: [
          { required: true, message: '请输入商品名称第二行', trigger: 'blur' }
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
      this.context.drawImage(this.mainImg, 30, 352, 461, 659)
      this.context.drawImage(bgImg, 0, 0, 800, 1265)
      this.context.drawImage(this.code, 30, 1040, 168, 168)
      
      this.context.beginPath();
      this.context.font = "bold 24px black";
      this.context.textAlign = 'start'
      this.context.fillStyle = '#3a3a3a'
      this.context.fillText(this.ruleForm.productNameLine1, 530, 443);

      this.context.beginPath();
      this.context.font = "bold 24px black";
      this.context.textAlign = 'start'
      this.context.fillStyle = '#3a3a3a'
      this.context.fillText(this.ruleForm.productNameLine2, 530, 476);

      this.context.beginPath();
      this.context.font = "bold 16px black";
      this.context.textAlign = 'start'
      this.context.fillStyle = '#808080'
      this.context.fillText(this.ruleForm.point, 530, 515);

      this.context.beginPath();
      this.context.font = "118px shuiyun";
      this.context.textAlign = 'center'
      this.context.fillStyle = '#ed3b1f'
      this.context.fillText(this.ruleForm.activityPrice, 636, 714);

      this.context.beginPath();
      this.context.font = "32px shuiyun";
      this.context.textAlign = 'center'
      this.context.fillStyle = '#ed3b1f'
      this.context.fillText(this.ruleForm.marketPrice, 680, 774);

      this.context.beginPath();
      this.context.moveTo(560, 764);
      this.context.lineTo(720,764);
      this.context.closePath();
      this.context.lineWidth = 3;
      this.context.strokeStyle = '#ed3b1f'
      this.context.stroke();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@font-face {
  font-family: 'shuiyun';
  src: url('../assets/font/shuiyun.TTF');
}

@font-face {
  font-family: 'black';
  src: url('../assets/font/black.TTF');
}

.upload {
  display: inline-block;
  margin: 30px;
}

.btn {
  margin-left:-180px
}
</style>
