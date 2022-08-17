<template>
    <div>
        <h3>Welcome</h3>
        <div id="captureId" class="invitationCode" style="width: 250px"  v-show="firstFlag">
          <div id="qrcode" class="code" ref="qrCodeDiv"></div>
        </div>
      <el-button type="primary" @click="saveQrCode">保存</el-button>
        <div v-show="!firstFlag">
          <img class="code_img" :src="canvasImageUrl" alt />
        </div>
    </div>
</template>

<script>
import html2canvas from 'html2canvas'
import QRCode from 'qrcodejs2'
import { Download } from '@/utils/download'
import { pinDirectoryToPinata } from '@/utils/test'

export default {
  data() {
    return {
      firstFlag: true,
      canvasImageUrl: "",
      download: new Download()
    };
  },
  mounted() {
    this.qrcode();
    this.$nextTick(function() {
      this.createPicture(); // 二维码生成后，执行生成图片
    });
  },
  created() {
  },
  methods: {
    qrcode() {
      new QRCode(this.$refs.qrCodeDiv, {
        width: 250,
        height: 250,
        text: "http://4399.com", // 二维码地址
        colorDark: "#000",// 二维码颜色
        colorLight: "#fff"// 二维码背景色
      });
    },
    createPicture() {
      html2canvas(document.querySelector("#captureId"))
          .then(canvas => {
            var imgData = canvas.toDataURL("image/png");
            this.canvasImageUrl = imgData;
            this.firstFlag = false;
          })
          .catch(error => {});
    },
    saveQrCode() {
      // this.downLoad()
      pinDirectoryToPinata()
    },
    downLoad(){
      let downloadName = '测试666.png';//文件名
      let imgData = this.canvasImageUrl;//base64
      this.download.downloadFile(downloadName,imgData);
    }
  }
}
</script>

<style>

</style>
