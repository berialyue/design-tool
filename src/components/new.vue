<template>
  <div id="new">
    <label class="upload">
        请上传商品主图
        <input type='file' @change="getSrc('mainImg')" ref="mainImg">
    </label>
    <label class="upload">
        请上传上1图片
        <input type='file' @change="getSrc('upOne')" ref="upOne">
    </label>
    <label class="upload">
        请上传上2图片
        <input type='file' @change="getSrc('upTwo')" ref="upTwo">
    </label>
    <label class="upload">
        请上传上3图片
        <input type='file' @change="getSrc('upThree')" ref="upThree">
    </label>
    <label class="upload">
        请上传下1图片
        <input type='file' @change="getSrc('downOne')" ref="downOne">
    </label>
    <label class="upload">
        请上传下1图片
        <input type='file' @change="getSrc('downTwo')" ref="downTwo">
    </label>
    <label class="upload">
        请上传下1图片
        <input type='file' @change="getSrc('downThree')" ref="downThree">
    </label>
    <label class="upload">
        请上传商城二维码
        <input type='file' @change="getSrc('code')" ref="code">
    </label>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="180px" class="input-wrapper">
      <el-row :gutter="20">
        <el-form-item label="请输入主图商品名称" prop="mainImgName">
          <el-col :span="10"><el-input v-model="ruleForm.mainImgName"></el-input></el-col>
          <el-col :span="10"><div style="font-family: Microsoft YaHei;">{{this.ruleForm.mainImgName}}</div></el-col>
        </el-form-item>
      </el-row>
      <el-row :gutter="20">
        <el-form-item label="请输入主图商品卖点" prop="mainImgPoint">
          <el-col :span="10"><el-input v-model="ruleForm.mainImgPoint"></el-input></el-col>
          <el-col :span="10"><div style="font-family: Microsoft YaHei;">{{this.ruleForm.mainImgPoint}}</div></el-col>
        </el-form-item>
      </el-row>
      <el-row :gutter="20">
        <el-form-item label="请输入主图商品品类" prop="mainImgCate">
          <el-col :span="10"><el-input v-model="ruleForm.mainImgCate"></el-input></el-col>
          <el-col :span="10"><div style="font-family: SourceHanBold;">{{this.ruleForm.mainImgCate}}</div></el-col>
        </el-form-item>
      </el-row>
      <el-row :gutter="20">
        <el-form-item label="请输入主图商品活动价" prop="mainImgActivityPrice">
          <el-col :span="10"><el-input v-model="ruleForm.mainImgActivityPrice"></el-input></el-col>
          <el-col :span="10"><div style="font-family: IMPACT;">{{this.ruleForm.mainImgActivityPrice}}</div></el-col>
        </el-form-item>
      </el-row>
      <el-row :gutter="20">
        <el-form-item label="请输入主图商品市场价" prop="mainImgMarketPrice">
          <el-col :span="10"><el-input v-model="ruleForm.mainImgMarketPrice"></el-input></el-col>
          <el-col :span="10"><div style="font-family: IMPACT;">{{this.ruleForm.mainImgMarketPrice}}</div></el-col>
        </el-form-item>
      </el-row>
      <el-row :gutter="20">
        <el-form-item label="请输入上1商品名称" prop="upOneName">
          <el-col :span="10"><el-input v-model="ruleForm.upOneName"></el-input></el-col>
          <el-col :span="10"><div style="font-family: SourceHanBold;">{{this.ruleForm.upOneName}}</div></el-col>
        </el-form-item>
      </el-row>
      <el-row :gutter="20">
        <el-form-item label="请输入上1商品价格" prop="upOnePrice">
          <el-col :span="10"><el-input v-model="ruleForm.upOnePrice"></el-input></el-col>
          <el-col :span="10"><div style="font-family: IMPACT;">{{this.ruleForm.upOnePrice}}</div></el-col>
        </el-form-item>
      </el-row>
      <el-row :gutter="20">
        <el-form-item label="请输入上2商品名称" prop="upTwoName">
          <el-col :span="10"><el-input v-model="ruleForm.upTwoName"></el-input></el-col>
          <el-col :span="10"><div style="font-family: SourceHanBold;">{{this.ruleForm.upTwoName}}</div></el-col>
        </el-form-item>
      </el-row>
      <el-row :gutter="20">
        <el-form-item label="请输入上2商品价格" prop="upTwoPrice">
          <el-col :span="10"><el-input v-model="ruleForm.upTwoPrice"></el-input></el-col>
          <el-col :span="10"><div style="font-family: IMPACT;">{{this.ruleForm.upTwoPrice}}</div></el-col>
        </el-form-item>
      </el-row>
      <el-row :gutter="20">
        <el-form-item label="请输入上3商品名称" prop="upThreeName">
          <el-col :span="10"><el-input v-model="ruleForm.upThreeName"></el-input></el-col>
          <el-col :span="10"><div style="font-family: SourceHanBold;">{{this.ruleForm.upThreeName}}</div></el-col>
        </el-form-item>
      </el-row>
      <el-row :gutter="20">
        <el-form-item label="请输入上3商品价格" prop="upThreePrice">
          <el-col :span="10"><el-input v-model="ruleForm.upThreePrice"></el-input></el-col>
          <el-col :span="10"><div style="font-family: IMPACT;">{{this.ruleForm.upThreePrice}}</div></el-col>
        </el-form-item>
      </el-row>
      <el-row :gutter="20">
        <el-form-item label="请输入下1商品名称" prop="downOneName">
          <el-col :span="10"><el-input v-model="ruleForm.downOneName"></el-input></el-col>
          <el-col :span="10"><div style="font-family: SourceHanBold;">{{this.ruleForm.downOneName}}</div></el-col>
        </el-form-item>
      </el-row>
      <el-row :gutter="20">
        <el-form-item label="请输入下1商品价格" prop="downOnePrice">
          <el-col :span="10"><el-input v-model="ruleForm.downOnePrice"></el-input></el-col>
          <el-col :span="10"><div style="font-family: IMPACT;">{{this.ruleForm.downOnePrice}}</div></el-col>
        </el-form-item>
      </el-row>
      <el-row :gutter="20">
        <el-form-item label="请输入下2商品名称" prop="downTwoName">
          <el-col :span="10"><el-input v-model="ruleForm.downTwoName"></el-input></el-col>
          <el-col :span="10"><div style="font-family: SourceHanBold;">{{this.ruleForm.downTwoName}}</div></el-col>
        </el-form-item>
      </el-row>
      <el-row :gutter="20">
        <el-form-item label="请输入下2商品价格" prop="downTwoPrice">
          <el-col :span="10"><el-input v-model="ruleForm.downTwoPrice"></el-input></el-col>
          <el-col :span="10"><div style="font-family: IMPACT;">{{this.ruleForm.downTwoPrice}}</div></el-col>
        </el-form-item>
      </el-row>
      <el-row :gutter="20">
        <el-form-item label="请输入下3商品名称" prop="downThreeName">
          <el-col :span="10"><el-input v-model="ruleForm.downThreeName"></el-input></el-col>
          <el-col :span="10"><div style="font-family: SourceHanBold;">{{this.ruleForm.downThreeName}}</div></el-col>
        </el-form-item>
      </el-row>
      <el-row :gutter="20">
        <el-form-item label="请输入下3商品价格" prop="downThreePrice">
          <el-col :span="10"><el-input v-model="ruleForm.downThreePrice"></el-input></el-col>
          <el-col :span="10"><div style="font-family: IMPACT;">{{this.ruleForm.downThreePrice}}</div></el-col>
        </el-form-item>
      </el-row>
      <el-row :gutter="20">
        <el-form-item label="请输入商城描述" prop="storeDes">
          <el-col :span="10"><el-input v-model="ruleForm.storeDes"></el-input></el-col>
          <el-col :span="10"><div style="font-family: SourceHanRegular;">{{this.ruleForm.storeDes}}</div></el-col>
        </el-form-item>
      </el-row>
      <el-row :gutter="20">
        <el-form-item >
          <el-button type="primary" @click="submitForm('ruleForm')" class="btn">生成图片</el-button>
          <el-button type="primary" @click="initDraw()" class="btn">生成图片</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-row>
    </el-form>
    <canvas ref="canvas" width="750" height="1450"></canvas>
    <img src="../assets/img/new.png" id="bgImg" style="display:none">
</div>
</template>

<script>
export default {
  name: 'new',
  data: function() {
    return {
      elInput: null,
      mainImg: new Image(),
      upOne: new Image(),
      upTwo: new Image(),
      upThree: new Image(),
      downOne: new Image(),
      downTwo: new Image(),
      downThree: new Image(),
      code: new Image(),
      ruleForm: {
        mainImgName: '',
        mainImgPoint: '',
        mainImgCate: '',
        mainImgActivityPrice: '',
        mainImgMarketPrice: '',
        upOneName: '',
        upOnePrice: '',
        upTwoName: '',
        upTwoPrice: '',
        upThreeName: '',
        upThreePrice: '',
        downOneName: '',
        downOnePrice: '',
        downTwoName: '',
        downTwoPrice: '',
        downThreeName: '',
        downThreePrice: '',
        storeDes: '',
      },
      rules: {
        mainImgName: [
          { required: true, message: '请输入商品名称', trigger: 'blur' }
        ],
        mainImgPoint: [
          { required: true, message: '请输入商品卖点', trigger: 'blur' }
        ],
        mainImgCate: [
          { required: true, message: '请输入商品品类', trigger: 'blur' }
        ],
        mainImgActivityPrice: [
          { required: true, message: '请输入活动价', trigger: 'blur' }
        ],
        mainImgMarketPrice: [
          { required: true, message: '请输入市场价', trigger: 'blur' }
        ],
        upOneName: [
          { required: true, message: '请输入商品名称', trigger: 'blur' }
        ],
        upOnePrice: [
          { required: true, message: '请输入商品价格', trigger: 'blur' }
        ],
        upTwoName: [
          { required: true, message: '请输入商品名称', trigger: 'blur' }
        ],
        upTwoPrice: [
          { required: true, message: '请输入商品价格', trigger: 'blur' }
        ],
        upThreeName: [
          { required: true, message: '请输入商品名称', trigger: 'blur' }
        ],
        upThreePrice: [
          { required: true, message: '请输入商品价格', trigger: 'blur' }
        ],
        downOneName: [
          { required: true, message: '请输入商品名称', trigger: 'blur' }
        ],
        downOnePrice: [
          { required: true, message: '请输入商品价格', trigger: 'blur' }
        ],
        downTwoName: [
          { required: true, message: '请输入商品名称', trigger: 'blur' }
        ],
        downTwoPrice: [
          { required: true, message: '请输入商品价格', trigger: 'blur' }
        ],
        downThreeName: [
          { required: true, message: '请输入商品名称', trigger: 'blur' }
        ],
        downThreePrice: [
          { required: true, message: '请输入商品价格', trigger: 'blur' }
        ],
        storeDes: [
          { required: true, message: '请输入商城描述', trigger: 'blur' }
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
        'upOne': () => {
          return this.$refs.upOne
        },
        'upTwo': () => {
          return this.$refs.upTwo
        },
        'upThree': () => {
          return this.$refs.upThree
        },
        'downOne': () => {
          return this.$refs.downOne
        },
        'downTwo': () => {
          return this.$refs.downTwo
        },
        'downThree': () => {
          return this.$refs.downThree
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
        'upOne': () => {
          return this.upOne
        },
        'upTwo': () => {
          return this.upTwo
        },
        'upThree': () => {
          return this.upThree
        },
        'downOne': () => {
          return this.downOne
        },
        'downTwo': () => {
          return this.downTwo
        },
        'downThree': () => {
          return this.downThree
        },
        'code': () => {
          return this.code
        }
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

      this.context.drawImage(this.mainImg, 2, 300, 200, 200)
      
      
      this.context.beginPath();
      this.context.font = "28px guangbiao";
      this.context.textAlign = 'center'
      this.context.fillStyle = '#ffffff'
      this.context.fillText(this.ruleForm.productName, 290, 714);

      this.context.beginPath();
      this.context.font = "24px Microsoft YaHei";
      this.context.textAlign = 'center'
      this.context.fillStyle = '#f22157'
      this.context.fillText(this.ruleForm.point, 290, 634);

      this.context.beginPath();

      const gradient = this.context.createLinearGradient(0,0,180,0);
      gradient.addColorStop(0,'#f90036');
      gradient.addColorStop(0.35,'#fb517e');
      gradient.addColorStop(0.61,'#f855aa');
      gradient.addColorStop(1,'#f22d87');

      this.context.font = "66px IMPACT";
      this.context.textAlign = 'center'
      this.context.fillStyle = gradient
      this.context.fillText(this.ruleForm.activityPrice, 650, 370);

      this.context.beginPath();
      this.context.font = "24px guangbiao";
      this.context.textAlign = 'center'
      this.context.fillStyle = '#898889'
      this.context.fillText(`市场价：${this.ruleForm.marketPrice}`, 660, 420);

      this.context.beginPath();
      this.context.moveTo(586, 410);
      this.context.lineTo(734,410);
      this.context.closePath();
      this.context.lineWidth = 3;
      this.context.strokeStyle = '#898889'
      this.context.stroke();

      this.context.beginPath();
      this.context.drawImage(bgImg, 0, 0, 750, 1450)
      this.context.drawImage(this.code, 607, 524, 120, 120)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@font-face {
  font-family: 'SourceHanBold';
  src: url('../assets/font/SourceHanSansCN-Bold.otf');
}

@font-face {
  font-family: 'SourceHanRegular';
  src: url('../assets/font/SourceHanSansCN-Regular.otf');
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
  margin: 20px;
}

.btn {
  margin-left:-180px
}
</style>
