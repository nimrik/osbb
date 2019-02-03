<template>
  <div class="c-moderation" id="app">

    <div class="working__info">
      <p>Ваша заявка на рассмотрении</p>

      <span>Давайте вернемся
        <router-link class="fade-link" to="/">домой</router-link>
      </span>
    </div>

  </div>
</template>

<script>
export default {
  name: "Moderation"
}
</script>

<style lang="sass" scoped>
@import '../../assets/sass/imports'

.c-moderation
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
