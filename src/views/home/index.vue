<template>
  <div>
    <el-carousel indicator-position="none">
      <el-carousel-item v-for="(item,index) in banner" :key="index">
        <el-image :src="item.image_src"></el-image>
      </el-carousel-item>
    </el-carousel>

    <van-button type="primary">主要按钮</van-button>

    <van-cell title="选择单个日期" :value="date" @click="show = true" />
    <van-calendar v-model="show" @confirm="onConfirm" />

    <div class="img-list flex">
      <div class="item">
        <el-image style="width: 104px; height: 80px" :src="src" fit="fit"></el-image>
      </div>
      <div class="item">
        <el-image style="width: 104px; height: 80px" :src="src" fit="fit"></el-image>
      </div>
      <div class="item">
        <el-image style="width: 104px; height: 80px" :src="src" fit="fit"></el-image>
      </div>
    </div>
  </div>
</template>

<script>
import { homeswiperdata, homecatitems } from "@/api/home";
export default {
  data() {
    return {
      banner: "",
      date: "",
      show: false,
      src:
        "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",
    };
  },
  created() {
    homeswiperdata().then((res) => {
      console.log(res.data.message);
      this.banner = res.data.message;
    });
    homecatitems().then((res) => {
      console.log(res.data.message);
    });
  },
  methods: {
    formatDate(date) {
      return `${date.getMonth() + 1}/${date.getDate()}`;
    },
    onConfirm(date) {
      this.show = false;
      this.date = this.formatDate(date);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/reset";
.img-list{
  padding: 0px 24px;
  justify-content: space-between;
}
</style>