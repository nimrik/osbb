<template>
  <div class="working" id="app">
    <img src="../assets/photo_2018-12-30_15-52-24.jpg" alt="">

    <div class="working__info">
      <p>Вы вошли в неизвестные земли..</p>

      <span>Давайте вернемся
        <router-link class="fade-link" to="/">домой</router-link>
      </span>
    </div>

  </div>
</template>

<script>
    export default {
        name: "InProgress"
    }
</script>

<style lang="sass" scoped>
@import '../assets/sass/imports'

.working
  height: 100%

  display: flex
  flex-flow: wrap column
  align-items: center
  justify-content: center

  font-size: 1.5em
  text-align: center

  p
    margin-bottom: 1em

  span
    display: block

    font-size: $f-h4

</style>


<!--TODO:
Link "домой" on hover doesn't work after changing router pages
-->
