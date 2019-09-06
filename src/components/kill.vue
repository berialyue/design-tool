<template>
  <div id="kill">
    <label class="upload">
        请上传商品主图
        <input type='file' @change="getSrc('mainImg')" ref="mainImg">
    </label>
    <label class="upload">
        请上传商城二维码
        <input type='file' @change="getSrc('code')" ref="code">
    </label>
    <label class="upload">
        请上传下方左边图片
        <input type='file' @change="getSrc('downLeft')" ref="downLeft">
    </label>
    <label class="upload">
        请上传下方右边图片
        <input type='file' @change="getSrc('downRight')" ref="downRight">
    </label>
    <label class="upload">
        请上传右1图片
        <input type='file' @change="getSrc('rightOne')" ref="rightOne">
    </label>
    <label class="upload">
        请上传右2图片
        <input type='file' @change="getSrc('rightTwo')" ref="rightTwo">
    </label>
    <label class="upload">
        请上传右3图片
        <input type='file' @change="getSrc('rightThree')" ref="rightThree">
    </label>
    <label class="upload">
        请上传右4图片
        <input type='file' @change="getSrc('rightFour')" ref="rightFour">
    </label>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="180px" class="input-wrapper">
      <el-row :gutter="20">
        <el-form-item label="请输入海报标题" prop="mainName">
          <el-col :span="10"><el-input v-model="ruleForm.mainName"></el-input></el-col>
          <el-col :span="10"><div style="font-family: Microsoft YaHei;">{{this.ruleForm.mainName}}</div></el-col>
        </el-form-item>
      </el-row>
      <el-row :gutter="20">
        <el-form-item label="请输入主图商品名称" prop="mainImgName">
          <el-col :span="10"><el-input v-model="ruleForm.mainImgName"></el-input></el-col>
          <el-col :span="10"><div style="font-family: Microsoft YaHei;">{{this.ruleForm.mainImgName}}</div></el-col>
        </el-form-item>
      </el-row>
      <el-row :gutter="20">
        <el-form-item label="请输入主图商品活动价" prop="mainImgActivityPrice">
          <el-col :span="10"><el-input v-model="ruleForm.mainImgActivityPrice"></el-input></el-col>
          <el-col :span="10"><div style="font-family: shuizhu;">{{this.ruleForm.mainImgActivityPrice}}</div></el-col>
        </el-form-item>
      </el-row>
      <el-row :gutter="20">
        <el-form-item label="请输入主图商品市场价" prop="mainImgMarketPrice">
          <el-col :span="10"><el-input v-model="ruleForm.mainImgMarketPrice"></el-input></el-col>
          <el-col :span="10"><div style="font-family: shuizhu;">{{this.ruleForm.mainImgMarketPrice}}</div></el-col>
        </el-form-item>
      </el-row>
      <el-row :gutter="20">
        <el-form-item label="请输入下左商品名称" prop="downLeftName">
          <el-col :span="10"><el-input v-model="ruleForm.downLeftName"></el-input></el-col>
          <el-col :span="10"><div style="font-family: Microsoft YaHei;">{{this.ruleForm.downLeftName}}</div></el-col>
        </el-form-item>
      </el-row>
      <el-row :gutter="20">
        <el-form-item label="请输入下左商品活动价" prop="downLeftActivityPrice">
          <el-col :span="10"><el-input v-model="ruleForm.downLeftActivityPrice"></el-input></el-col>
          <el-col :span="10"><div style="font-family: shuizhu;">{{this.ruleForm.downLeftActivityPrice}}</div></el-col>
        </el-form-item>
      </el-row>
      <el-row :gutter="20">
        <el-form-item label="请输入下左商品市场价" prop="downLeftMarketPrice">
          <el-col :span="10"><el-input v-model="ruleForm.downLeftMarketPrice"></el-input></el-col>
          <el-col :span="10"><div style="font-family: shuizhu;">{{this.ruleForm.downLeftMarketPrice}}</div></el-col>
        </el-form-item>
      </el-row>
      <el-row :gutter="20">
        <el-form-item label="请输入下右商品名称" prop="downRightName">
          <el-col :span="10"><el-input v-model="ruleForm.downRightName"></el-input></el-col>
          <el-col :span="10"><div style="font-family: Microsoft YaHei;">{{this.ruleForm.downRightName}}</div></el-col>
        </el-form-item>
      </el-row>
      <el-row :gutter="20">
        <el-form-item label="请输入下右商品活动价" prop="downRightActivityPrice">
          <el-col :span="10"><el-input v-model="ruleForm.downRightActivityPrice"></el-input></el-col>
          <el-col :span="10"><div style="font-family: shuizhu;">{{this.ruleForm.downRightActivityPrice}}</div></el-col>
        </el-form-item>
      </el-row>
      <el-row :gutter="20">
        <el-form-item label="请输入下右商品市场价" prop="downRightMarketPrice">
          <el-col :span="10"><el-input v-model="ruleForm.downRightMarketPrice"></el-input></el-col>
          <el-col :span="10"><div style="font-family: shuizhu;">{{this.ruleForm.downRightMarketPrice}}</div></el-col>
        </el-form-item>
      </el-row>
      <el-row :gutter="20">
        <el-form-item label="请输入右1商品名称" prop="rightOneName">
          <el-col :span="10"><el-input v-model="ruleForm.rightOneName"></el-input></el-col>
          <el-col :span="10"><div style="font-family: Microsoft YaHei;">{{this.ruleForm.rightOneName}}</div></el-col>
        </el-form-item>
      </el-row>
      <el-row :gutter="20">
        <el-form-item label="请输入右1商品活动价" prop="rightOneActivityPrice">
          <el-col :span="10"><el-input v-model="ruleForm.rightOneActivityPrice"></el-input></el-col>
          <el-col :span="10"><div style="font-family: shuizhu;">{{this.ruleForm.rightOneActivityPrice}}</div></el-col>
        </el-form-item>
      </el-row>
      <el-row :gutter="20">
        <el-form-item label="请输入右1商品市场价" prop="rightOneMarketPrice">
          <el-col :span="10"><el-input v-model="ruleForm.rightOneMarketPrice"></el-input></el-col>
          <el-col :span="10"><div style="font-family: shuizhu;">{{this.ruleForm.rightOneMarketPrice}}</div></el-col>
        </el-form-item>
      </el-row>
      <el-row :gutter="20">
        <el-form-item label="请输入右2商品名称" prop="rightTwoName">
          <el-col :span="10"><el-input v-model="ruleForm.rightTwoName"></el-input></el-col>
          <el-col :span="10"><div style="font-family: Microsoft YaHei;">{{this.ruleForm.rightTwoName}}</div></el-col>
        </el-form-item>
      </el-row>
      <el-row :gutter="20">
        <el-form-item label="请输入右2商品活动价" prop="rightTwoActivityPrice">
          <el-col :span="10"><el-input v-model="ruleForm.rightTwoActivityPrice"></el-input></el-col>
          <el-col :span="10"><div style="font-family: shuizhu;">{{this.ruleForm.rightTwoActivityPrice}}</div></el-col>
        </el-form-item>
      </el-row>
      <el-row :gutter="20">
        <el-form-item label="请输入右2商品市场价" prop="rightTwoMarketPrice">
          <el-col :span="10"><el-input v-model="ruleForm.rightTwoMarketPrice"></el-input></el-col>
          <el-col :span="10"><div style="font-family: shuizhu;">{{this.ruleForm.rightTwoMarketPrice}}</div></el-col>
        </el-form-item>
      </el-row>
      <el-row :gutter="20">
        <el-form-item label="请输入右3商品名称" prop="rightThreeName">
          <el-col :span="10"><el-input v-model="ruleForm.rightThreeName"></el-input></el-col>
          <el-col :span="10"><div style="font-family: Microsoft YaHei;">{{this.ruleForm.rightThreeName}}</div></el-col>
        </el-form-item>
      </el-row>
      <el-row :gutter="20">
        <el-form-item label="请输入右3商品活动价" prop="rightThreeActivityPrice">
          <el-col :span="10"><el-input v-model="ruleForm.rightThreeActivityPrice"></el-input></el-col>
          <el-col :span="10"><div style="font-family: shuizhu;">{{this.ruleForm.rightThreeActivityPrice}}</div></el-col>
        </el-form-item>
      </el-row>
      <el-row :gutter="20">
        <el-form-item label="请输入右3商品市场价" prop="rightThreeMarketPrice">
          <el-col :span="10"><el-input v-model="ruleForm.rightThreeMarketPrice"></el-input></el-col>
          <el-col :span="10"><div style="font-family: shuizhu;">{{this.ruleForm.rightThreeMarketPrice}}</div></el-col>
        </el-form-item>
      </el-row>
      <el-row :gutter="20">
        <el-form-item label="请输入右4商品名称" prop="rightFourName">
          <el-col :span="10"><el-input v-model="ruleForm.rightFourName"></el-input></el-col>
          <el-col :span="10"><div style="font-family: Microsoft YaHei;">{{this.ruleForm.rightFourName}}</div></el-col>
        </el-form-item>
      </el-row>
      <el-row :gutter="20">
        <el-form-item label="请输入右4商品活动价" prop="rightFourActivityPrice">
          <el-col :span="10"><el-input v-model="ruleForm.rightFourActivityPrice"></el-input></el-col>
          <el-col :span="10"><div style="font-family: shuizhu;">{{this.ruleForm.rightFourActivityPrice}}</div></el-col>
        </el-form-item>
      </el-row>
      <el-row :gutter="20">
        <el-form-item label="请输入右4商品市场价" prop="rightFourMarketPrice">
          <el-col :span="10"><el-input v-model="ruleForm.rightFourMarketPrice"></el-input></el-col>
          <el-col :span="10"><div style="font-family: shuizhu;">{{this.ruleForm.rightFourMarketPrice}}</div></el-col>
        </el-form-item>
      </el-row>
      <el-row :gutter="20">
        <el-form-item >
          <el-button type="primary" @click="submitForm('ruleForm')" class="btn">生成图片</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-row>
    </el-form>
    <canvas ref="canvas" width="750" height="1077"></canvas>
    <img src="../assets/img/miao.png" id="bgImg" style="display:none">
</div>
</template>

<script>
export default {
  name: 'kill',
  data: function() {
    return {
      elInput: null,
      mainImg: new Image(),
      code: new Image(),
      downLeft: new Image(),
      downRight: new Image(),
      rightOne: new Image(),
      rightTwo: new Image(),
      rightThree: new Image(),
      rightFour: new Image(),
      ruleForm: {
        mainName: '',
        mainImgName: '',
        mainImgMarketPrice: '',
        mainImgActivityPrice: '',
        downLeftName: '',
        downLeftMarketPrice: '',
        downLeftActivityPrice: '',
        downRightName: '',
        downRightMarketPrice: '',
        downRightActivityPrice: '',
        rightOneName: '',
        rightOneMarketPrice: '',
        rightOneActivityPrice: '',
        rightTwoName: '',
        rightTwoMarketPrice: '',
        rightTwoActivityPrice: '',
        rightThreeName: '',
        rightThreeMarketPrice: '',
        rightThreeActivityPrice: '',
        rightFourName: '',
        rightFourMarketPrice: '',
        rightFourActivityPrice: '',
      },
      rules: {
        mainName: [
          { required: true, message: '请输入海报标题', trigger: 'blur' }
        ],
        mainImgName: [
          { required: true, message: '请输入商品名称', trigger: 'blur' }
        ],
        mainImgMarketPrice: [
          { required: true, message: '请输入市场价', trigger: 'blur' }
        ],
        mainImgActivityPrice: [
          { required: true, message: '请输入活动价', trigger: 'blur' }
        ],
        downLeftName: [
          { required: true, message: '请输入商品名称', trigger: 'blur' }
        ],
        downLeftMarketPrice: [
          { required: true, message: '请输入市场价', trigger: 'blur' }
        ],
        downLeftActivityPrice: [
          { required: true, message: '请输入活动价', trigger: 'blur' }
        ],
        downRightName: [
          { required: true, message: '请输入商品名称', trigger: 'blur' }
        ],
        downRightMarketPrice: [
          { required: true, message: '请输入市场价', trigger: 'blur' }
        ],
        downRightActivityPrice: [
          { required: true, message: '请输入活动价', trigger: 'blur' }
        ],
        rightOneName: [
          { required: true, message: '请输入商品名称', trigger: 'blur' }
        ],
        rightOneMarketPrice: [
          { required: true, message: '请输入市场价', trigger: 'blur' }
        ],
        rightOneActivityPrice: [
          { required: true, message: '请输入活动价', trigger: 'blur' }
        ],
        rightTwoName: [
          { required: true, message: '请输入商品名称', trigger: 'blur' }
        ],
        rightTwoMarketPrice: [
          { required: true, message: '请输入市场价', trigger: 'blur' }
        ],
        rightTwoActivityPrice: [
          { required: true, message: '请输入活动价', trigger: 'blur' }
        ],
        rightThreeName: [
          { required: true, message: '请输入商品名称', trigger: 'blur' }
        ],
        rightThreeMarketPrice: [
          { required: true, message: '请输入市场价', trigger: 'blur' }
        ],
        rightThreeActivityPrice: [
          { required: true, message: '请输入活动价', trigger: 'blur' }
        ],
        rightFourName: [
          { required: true, message: '请输入商品名称', trigger: 'blur' }
        ],
        rightFourMarketPrice: [
          { required: true, message: '请输入市场价', trigger: 'blur' }
        ],
        rightFourActivityPrice: [
          { required: true, message: '请输入活动价', trigger: 'blur' }
        ],
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
        'downLeft': () => {
          return this.$refs.downLeft
        },
        'downRight': () => {
          return this.$refs.downRight
        },
        'rightOne': () => {
          return this.$refs.rightOne
        },
        'rightTwo': () => {
          return this.$refs.rightTwo
        },
        'rightThree': () => {
          return this.$refs.rightThree
        },
        'rightFour': () => {
          return this.$refs.rightFour
        }
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
        'downLeft': () => {
          return this.downLeft
        },
        'downRight': () => {
          return this.downRight
        },
        'rightOne': () => {
          return this.rightOne
        },
        'rightTwo': () => {
          return this.rightTwo
        },
        'rightThree': () => {
          return this.rightThree
        },
        'rightFour': () => {
          return this.rightFour
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
      this.$nextTick(() => {
        const canvas = this.$refs.canvas
        this.context = canvas.getContext('2d')

        this.context.drawImage(this.mainImg, 2, 200, 487, 461)
        this.context.drawImage(this.downLeft, 4, 730, 244, 300)
        this.context.drawImage(this.downRight, 251, 730, 244, 300)
        this.context.drawImage(this.rightOne, 502, 198, 242, 180)
        this.context.drawImage(this.rightTwo, 502, 418, 242, 180)
        this.context.drawImage(this.rightThree, 502, 634, 242, 180)
        this.context.drawImage(this.rightFour, 502, 852, 242, 180)
        this.context.drawImage(bgImg, 0, 0, 750, 1077)
        this.context.drawImage(this.code, 566, 20, 120, 120)
        
        this.context.beginPath();
        this.context.font = "bold 22px Microsoft YaHei";
        this.context.textAlign = 'center'
        this.context.fillStyle = '#ffffff'
        this.context.fillText(this.ruleForm.mainName, 260, 164);

        this.context.beginPath();
        this.context.font = "bold 30px Microsoft YaHei";
        this.context.textAlign = 'center'
        this.context.fillStyle = '#ffffff'
        this.context.fillText(this.ruleForm.mainImgName, 334, 706);

        this.context.beginPath();
        this.context.font = "48px shuizhu";
        this.context.textAlign = 'center'
        this.context.fillStyle = '#ffffff'
        this.context.fillText(this.ruleForm.mainImgActivityPrice, 96, 680);

        this.context.beginPath();
        this.context.font = "28px shuizhu";
        this.context.textAlign = 'center'
        this.context.fillStyle = '#ffffff'
        this.context.fillText(this.ruleForm.mainImgMarketPrice, 114, 710);

        this.context.beginPath();
        this.context.moveTo(12, 700);
        this.context.lineTo(150,700);
        this.context.closePath();
        this.context.lineWidth = 3;
        this.context.strokeStyle = '#ffffff'
        this.context.stroke();

        this.context.beginPath();
        this.context.font = "bold 17px Microsoft YaHei";
        this.context.textAlign = 'center'
        this.context.fillStyle = '#ffffff'
        this.context.fillText(this.ruleForm.downLeftName, 168, 1056);

        this.context.beginPath();
        this.context.font = "24px shuizhu";
        this.context.textAlign = 'center'
        this.context.fillStyle = '#ffffff'
        this.context.fillText(this.ruleForm.downLeftActivityPrice, 51, 1038);

        this.context.beginPath();
        this.context.font = "17px shuizhu";
        this.context.textAlign = 'center'
        this.context.fillStyle = '#ffffff'
        this.context.fillText(this.ruleForm.downLeftMarketPrice, 68, 1058);

        this.context.beginPath();
        this.context.moveTo(10, 1052);
        this.context.lineTo(84, 1052);
        this.context.closePath();
        this.context.lineWidth = 2;
        this.context.strokeStyle = '#ffffff'
        this.context.stroke();

        this.context.beginPath();
        this.context.font = "bold 17px Microsoft YaHei";
        this.context.textAlign = 'center'
        this.context.fillStyle = '#ffffff'
        this.context.fillText(this.ruleForm.downRightName, 420, 1056);

        this.context.beginPath();
        this.context.font = "24px shuizhu";
        this.context.textAlign = 'center'
        this.context.fillStyle = '#ffffff'
        this.context.fillText(this.ruleForm.downRightActivityPrice, 300, 1038);

        this.context.beginPath();
        this.context.font = "17px shuizhu";
        this.context.textAlign = 'center'
        this.context.fillStyle = '#ffffff'
        this.context.fillText(this.ruleForm.downRightMarketPrice, 320, 1058);

        this.context.beginPath();
        this.context.moveTo(256, 1052);
        this.context.lineTo(340, 1052);
        this.context.closePath();
        this.context.lineWidth = 2;
        this.context.strokeStyle = '#ffffff'
        this.context.stroke();

        this.context.beginPath();
        this.context.font = "bold 17px Microsoft YaHei";
        this.context.textAlign = 'center'
        this.context.fillStyle = '#ffffff'
        this.context.fillText(this.ruleForm.rightOneName, 678, 404);

        this.context.beginPath();
        this.context.font = "28px shuizhu";
        this.context.textAlign = 'center'
        this.context.fillStyle = '#ffffff'
        this.context.fillText(this.ruleForm.rightOneActivityPrice, 558, 388);

        this.context.beginPath();
        this.context.font = "17px shuizhu";
        this.context.textAlign = 'center'
        this.context.fillStyle = '#ffffff'
        this.context.fillText(this.ruleForm.rightOneMarketPrice, 576, 406);

        this.context.beginPath();
        this.context.moveTo(510, 400);
        this.context.lineTo(596, 400);
        this.context.closePath();
        this.context.lineWidth = 2;
        this.context.strokeStyle = '#ffffff'
        this.context.stroke();

        this.context.beginPath();
        this.context.font = "bold 17px Microsoft YaHei";
        this.context.textAlign = 'center'
        this.context.fillStyle = '#ffffff'
        this.context.fillText(this.ruleForm.rightTwoName, 678, 622);

        this.context.beginPath();
        this.context.font = "28px shuizhu";
        this.context.textAlign = 'center'
        this.context.fillStyle = '#ffffff'
        this.context.fillText(this.ruleForm.rightTwoActivityPrice, 558, 604);

        this.context.beginPath();
        this.context.font = "17px shuizhu";
        this.context.textAlign = 'center'
        this.context.fillStyle = '#ffffff'
        this.context.fillText(this.ruleForm.rightTwoMarketPrice, 576, 622);

        this.context.beginPath();
        this.context.moveTo(510, 616);
        this.context.lineTo(596, 616);
        this.context.closePath();
        this.context.lineWidth = 2;
        this.context.strokeStyle = '#ffffff'
        this.context.stroke();

        this.context.beginPath();
        this.context.font = "bold 17px Microsoft YaHei";
        this.context.textAlign = 'center'
        this.context.fillStyle = '#ffffff'
        this.context.fillText(this.ruleForm.rightThreeName, 678, 838);

        this.context.beginPath();
        this.context.font = "28px shuizhu";
        this.context.textAlign = 'center'
        this.context.fillStyle = '#ffffff'
        this.context.fillText(this.ruleForm.rightThreeActivityPrice, 558, 822);

        this.context.beginPath();
        this.context.font = "17px shuizhu";
        this.context.textAlign = 'center'
        this.context.fillStyle = '#ffffff'
        this.context.fillText(this.ruleForm.rightThreeMarketPrice, 576, 840);

        this.context.beginPath();
        this.context.moveTo(510, 834);
        this.context.lineTo(596, 834);
        this.context.closePath();
        this.context.lineWidth = 2;
        this.context.strokeStyle = '#ffffff'
        this.context.stroke();

        this.context.beginPath();
        this.context.font = "bold 17px Microsoft YaHei";
        this.context.textAlign = 'center'
        this.context.fillStyle = '#ffffff'
        this.context.fillText(this.ruleForm.rightFourName, 678, 1058);

        this.context.beginPath();
        this.context.font = "28px shuizhu";
        this.context.textAlign = 'center'
        this.context.fillStyle = '#ffffff'
        this.context.fillText(this.ruleForm.rightFourActivityPrice, 558, 1040);

        this.context.beginPath();
        this.context.font = "17px shuizhu";
        this.context.textAlign = 'center'
        this.context.fillStyle = '#ffffff'
        this.context.fillText(this.ruleForm.rightFourMarketPrice, 576, 1058);

        this.context.beginPath();
        this.context.moveTo(510, 1052);
        this.context.lineTo(596, 1052);
        this.context.closePath();
        this.context.lineWidth = 2;
        this.context.strokeStyle = '#ffffff'
        this.context.stroke();
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
  font-family: 'shuizhu';
  src: url('../assets/font/shuizhu.TTF');
}

canvas { 
  letter-spacing: 1px; 
}

.upload {
  display: inline-block;
  margin: 20px;
}

.btn {
  margin-left:-180px
}
</style>
