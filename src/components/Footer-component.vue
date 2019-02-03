<template>
  <footer class="footer line line--footer" id="app">
    <div class="footer__items">
      <div class="nav">
        <router-link to="/InProgress">О нас</router-link>
        <router-link to="/InProgress">Услуги</router-link>
        <router-link to="/InProgress">Туториал</router-link>
        <router-link to="/InProgress">Контакты</router-link>
        <router-link to="/InProgress">Саппорт</router-link>
        <router-link to="/Registration">Регистрация</router-link>
        <router-link to="/FormDetails">Шаг 2</router-link>
        <router-link to="/Moderation">Шаг 3</router-link>
        <router-link to="/TenantsIntegration">Шаг 4</router-link>
      </div>
    </div>

    <div class="social"></div>
  </footer>
</template>

<script>
  export default {
    name: "Footer-component",
    data() {
      return {
      }
    },
    methods: {

    }

  }

</script>

<style scoped>

</style>
