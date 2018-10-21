<template>
  <div class="home">
    <section class="main">
      <v-navbar></v-navbar>
      <div class="main_msg-wrapper">
        <p class="main_msg">
          마을과 주민,<br />
          학교를<br />
          잇는 공간
        </p>
      </div>
      <div class="main_illust-wrapper">
        <img
          src="@/assets/images/main-illust.png"
          class="main_illust">
      </div>
    </section>
  </div>
</template>

<script>
import VNavbar from '@/components/VNavbar.vue'

export default {
  name: 'home',
  components: {
    VNavbar
  }
}
</script>

<style lang="scss" scoped>
.home {
  margin: 30px;
}

.main {
  height: 93vh;
  background-color: #ffb400;
}

.main_msg-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: calc(100vh - 300px);
  margin-left: 180px;
  overflow: auto;
}

.main_msg {
  font-family: "Binggrae-Bold", sans-serif;
  font-size: 64px;
  margin: 30px 0;
  color: #fff;
}

.main_illust {
  position: absolute;
  top: 200px; right: 150px;
  height: 600px;
  z-index: 1;
}
</style>
