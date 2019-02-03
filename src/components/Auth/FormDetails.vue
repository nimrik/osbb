<template>
    <div class="c-form-details" id="app">
      <img class="registration__background"
           src="../../assets/buildings-bg.png"
           alt="">

      <form class="o-form"
            name="form"
            action=""
            @submit.prevent="checkForm"
            novalidate="true">

        <div class="o-form__container">
          <div class="o-form__headline">
            <p>Адресс</p>
          </div>

          <div class="o-form__field">
            <input type="text"
                   v-model="form.adress"
                   :class="{ 'input--invalid' : isError.adress }">
            <label></label>
          </div>
        </div>

        <div class="o-form__container">
          <div class="o-form__headline">
            <p>Название ОСББ</p>
          </div>

          <div class="o-form__field">
            <input type="email"
                   v-model="form.osbbName"
                   :class="{ 'input--invalid' : isError.osbbName }">
            <label></label>
          </div>
        </div>

        <div class="o-form__container">
          <div class="o-form__headline">
            <p>Код ОСББ</p>
          </div>

          <div class="o-form__field">
            <input type="tel"
                   name="phone"
                   v-model="form.osbbCode"
                   maxlength="10"
                   :class="{ 'input--invalid' : isError.osbbCode }">
            <label></label>
          </div>
        </div>

        <button class="o-button">
        <span>
          Отправить заявку
        </span>
          <i class="material-icons teal button__icon">send</i>
        </button>
      </form>
    </div>
</template>

<script>
export default {
  name: "FormDetails",
  data() {
    return {
      errors: [],
      form: {
        adress: null,
        osbbName: null,
        osbbCode: null,
      },
      isError: {
        adress: false,
        osbbName: false,
        osbbCode: false
      }
    }
  },
  methods: {
    checkForm: function () {
      this.errors = [];


      // if (!this.form.adress) this.errors.push("Adress required.");
      // if (!this.form.osbbName) this.errors.push('OSBB name required.');
      // if (!this.form.osbbCode) this.errors.push('OSBB code required');


      console.log(this.form);

      if (!this.errors.length) {
        // return true

        this.$router.push('/Moderation');
      }

    }
  }
}
</script>

<style lang="sass" scoped>
.c-form-details
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


.o-form__container
  padding: .313em 0
</style>
