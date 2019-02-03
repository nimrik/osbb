<template>
  <div class="c-registration" id="app">
    <img class="registration__background" src="../../assets/buildings-bg.png" alt="">

    <form class="o-form"
          name="form"
          action=""
          @submit.prevent="checkForm"
          novalidate="true">

      <div class="o-form__container">
        <div class="o-form__headline">
          <p>ФИО</p><span>*</span>
        </div>

        <div class="o-form__field">
          <input type="text"
                 v-model="form.name"
                 :class="{ 'input--invalid' : isError.name }"
                 @keypress="isError.name = false"
                 required>
          <label></label>
        </div>
      </div>

      <div class="o-form__container">
        <div class="o-form__headline">
          <p>Почта</p>
        </div>

        <div class="o-form__field">
          <input type="email"
                 v-model="form.email"
                 @focus="validEmail"
                 :class="{ 'input--invalid' : isError.email }">
          <label></label>
        </div>
      </div>

      <div class="o-form__container">
        <div class="o-form__headline">
          <p>Телефон</p><span>*</span>
        </div>

        <div class="o-form__field">
          <input @keypress="isNumber()"
                 type="tel"
                 name="phone"
                 v-model="form.phone"
                 maxlength="10"
                 :class="{ 'input--invalid' : isError.phone || !validNumber }"
                 required>
          <label></label>
        </div>
      </div>

      <div class="o-form__container">
        <div class="o-form__headline">
          <p>Пароль</p><span>*</span>
        </div>

        <div class="o-form__field">
          <input type="password"
                 v-model="form.password"
                 :class="{ 'input--invalid' : isError.password }"
                 required>
          <label></label>
        </div>
      </div>

      <div class="o-form__container">
        <div class="o-form__headline">
          <p>Подтверждение</p><span>*</span>
        </div>

        <div class="o-form__field">
          <input type="password"
                 v-model="form.passwordConf"
                 :class="{ 'input--invalid' : isError.passwordConf }"
                 required>
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
import { store } from "../../store/index"

  export default {
    name: 'Registration',
    data() {
      return {
        errors: [],
        form: {
          name: null,
          email: null,
          phone: null,
          password: null,
          passwordConf: null
        },
        isError: {
          name: false,
          email: false,
          phone: false,
          password: false,
          passwordConf: false
        }
      }
    },
    computed: {

    },
    methods: {
      checkForm: function () {
        this.errors = [];

// name
        if (!this.form.name) {
          this.errors.push("Name required.");
          this.isError.name = true;
        }

// email
        if (!this.form.email) {
          this.errors.push('Email required.');
          this.isError.email = true;
        } else if (!this.validEmail(this.form.email)) {
          this.errors.push('Valid email required.');
          this.isError.email = true;
        }

// phone
        if (!this.form.phone) {
          this.errors.push('Phone required.');
          this.isError.phone = true;

        } else if (!this.validNumber(this.form.phone)) {
          this.errors.push('Valid phone required');
          this.isError.phone = true;
        } else {
          this.isError.phone = false;
        }

// password
        if (!this.form.password) {
          this.errors.push('Password is required');
          this.isError.password = true;
        }

        if (!this.form.passwordConf) {
          this.errors.push('Password confirmation is required');
          this.isError.passwordConf = true;
        }

// password confirmation
        if (this.form.password !== this.form.passwordConf ) {
          this.errors.push('Passwords doesn\'t match');
          this.isError.password = true;
          this.isError.passwordConf = true;
        }


        console.log(this.errors);
        console.log(this.form);

        if (!this.errors.length) {
          // return true
          this.changeAuth();
          this.$router.push('/FormDetails');
        }

      },
      validEmail: function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
      },
      isNumber: function(evt) {
        evt = (evt) ? evt : window.event;
        var charCode = (evt.which) ? evt.which : evt.keyCode;

        if ((charCode > 31 && (charCode < 48 || charCode > 57 && charCode !== 46)) ) {
          evt.preventDefault();
        } else {
          return true
        }
      },
      validNumber: function (number) {
        if (number.length < 10) {
          return false
        } else {
          const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
          return re.test(number)
        }
      },
      changeAuth: function () {
        store.dispatch('login', true)
      }
    }
  }
</script>

<style lang="sass" scoped>

.c-registration
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


<!--TODO:
Same bug with the 1px borders only on input--invalid

Bug with 1px border-bottom on button. Appeared after changed router pages
-->
