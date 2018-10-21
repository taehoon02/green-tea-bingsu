<template>
  <nav class="navbar">
    <div class="navbar_name">
      <img
        src="@/assets/images/logo_white.png"
        @click="goHome"
        class="navbar_logo">
    </div>
    <div class="navbar_menu">
      <router-link class="navbar_menu-item" to="/seat">Choose Seat</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'VNavbar',
  methods: {
    goHome () {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  display: flex;
  align-items: center;
  background-color: transparent;
  padding: 25px 60px;
}

.navbar_logo {
  cursor: pointer;
  height: 80px;
}

.navbar_menu {
  display: flex;
  margin-left: auto;
}

.navbar_menu-item {
  font-family: "GodoM", sans-serif;
  margin-left: 70px;
  font-size: 20px;
  cursor: pointer;
  text-decoration: none;
  color: #fff;
  :visited {
    color: #000;
  }
}
</style>
