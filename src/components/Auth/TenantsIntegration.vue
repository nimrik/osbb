<template>
    <div class="c-tenants" id="app">
      <img class="registration__background" src="../../assets/buildings-bg.png" alt="">

      <form class="o-form"
            name="form"
            action=""
            @submit.prevent="finishReg"
            novalidate="true">

        <div class="o-form__container">
          <div class="o-form__headline">
            <p>ФИО</p><span>*</span>
          </div>

          <div class="o-form__field">
            <input type="text">
            <label></label>
          </div>
        </div>

        <div class="o-form__container">
          <div class="o-form__headline">
            <p>ФИО</p><span>*</span>
          </div>

          <div class="o-form__field">
            <input type="text">
            <label></label>
          </div>
        </div>


        <button class="o-button">
        <span>
          Продолжить
        </span>
          <i class="material-icons teal button__icon">send</i>
        </button>
      </form>
    </div>
</template>

<script>
export default {
  name: "TenantsIntegration",
  methods: {
    finishReg: function () {
      this.$store.commit('isRegistered', true)
    }
  }
}
</script>

<style lang="sass" scoped>
.c-tenants
  height: 100%

  display: flex
  align-items: center
  justify-content: center

  .registration__background
    z-index: -1
    left: 0
    bottom: 0
    position: absolute
    transform: scale(.6)
    transform-origin: bottom left
</style>
