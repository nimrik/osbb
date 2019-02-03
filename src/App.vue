<template>
  <div id="app">
    <header class="header line line--header">

      <HeaderComponent></HeaderComponent>
      <!--<img class="header__icon" src="assets/login.svg" alt="">-->
      <span style="cursor: pointer">
        <!--<svg class="header__icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 56 56" style="enable-background:new 0 0 56 56;" xml:space="preserve">-->
          <!--<path d="M25.293,39.293c-0.391,0.391-0.391,1.023,0,1.414C25.488,40.902,25.744,41,26,41s0.512-0.098,0.707-0.293l11.999-11.999   c0.093-0.092,0.166-0.203,0.217-0.326c0.101-0.244,0.101-0.519,0-0.764c-0.051-0.123-0.125-0.234-0.217-0.327L26.707,15.293   c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414L35.586,27H5c-0.553,0-1,0.447-1,1s0.447,1,1,1h30.586L25.293,39.293z"/>-->
          <!--<path d="M51,0H14c-0.553,0-1,0.447-1,1v21c0,0.553,0.447,1,1,1s1-0.447,1-1V2h35v52H15V34c0-0.553-0.447-1-1-1s-1,0.447-1,1v21   c0,0.553,0.447,1,1,1h37c0.553,0,1-0.447,1-1V1C52,0.447,51.553,0,51,0z"/>-->
        <!--</svg>-->

        <svg class="header__icon" xmlns="http://www.w3.org/2000/svg" viewBox="-67 0 416 416.3">
            <path d="m236.449219 0h-140.597657c-25.203124 0-45.703124 20.699219-45.703124 46.199219v65.101562c0 3.863281 3.136718 7 7 7 3.867187 0 7-3.136719 7-7v-65.101562c0-17.699219 14.203124-32.097657 31.601562-32.097657h140.699219c17.402343 0 31.601562 14.398438 31.601562 32.097657v324c0 17.699219-14.199219 32.101562-31.601562 32.101562h-140.597657c-17.402343 0-31.601562-14.402343-31.601562-32.101562v-64.597657c0-3.867187-3.132812-7-7-7s-7 3.132813-7 7v64.597657c0 25.402343 20.5 46.101562 45.601562 46.101562h140.699219c25.199219 0 45.597657-20.699219 45.597657-46.101562v-324c0-25.5-20.5-46.199219-45.699219-46.199219zm0 0"/>
            <path class="header__icon-animation" d="m123.851562 247.398438c-2.480468 2.964843-2.125 7.375.796876 9.902343 1.253906 1.078125 2.847656 1.679688 4.5 1.699219 2.0625.042969 4.023437-.882812 5.300781-2.5l37-43.699219c.199219-.300781.5-.601562.699219-.902343l.101562-.097657c.1875-.324219.355469-.65625.5-1 0-.101562 0-.101562.101562-.199219.097657-.300781.199219-.703124.296876-1v-.203124c.085937-.359376.117187-.730469.101562-1.097657.015625-.371093-.015625-.742187-.101562-1.101562v-.199219c-.097657-.398438-.199219-.699219-.296876-1 0-.101562 0-.101562-.101562-.199219-.125-.351562-.292969-.6875-.5-1 0-.054687-.042969-.101562-.101562-.101562-.199219-.324219-.433594-.625-.699219-.898438l-37-43.699219c-2.511719-2.957031-6.945313-3.316406-9.898438-.800781-2.957031 2.511719-3.3125 6.945313-.800781 9.898438l27.398438 32h-144c-3.863282 0-7 3.136719-7 7 0 3.867187 3.136718 7 7 7h144zm0 0"/>
        </svg>
      </span>

    </header>

    <main class="main">
      <div class="line line--left"></div>
      <div class="line line--right"></div>

      <div class="content">
        <transition name="fade">
          <!--<router-view v-if="!isAuth"></router-view>-->
          <router-view></router-view>
        </transition>
      </div>
    </main>

    <FooterComponent></FooterComponent>
  </div>
</template>

<script>
import HeaderComponent from './components/Header-component'
import FooterComponent from './components/Footer-component'



export default {
  name: 'App',
  components: {
    HeaderComponent,
    FooterComponent
  },
  data() {
    return {
      users: [],
      errors: [],
      isAuth: this.updateAuth,
      message: ''
    }
  },
  computed: {
    updateAuth() {
      return this.$store.state.isAuth
    }
  },
  watch: {

  },

}
</script>






<style lang="sass">
@import 'assets/sass/imports'



//=============================================
              		  FONTS
//=============================================




@font-face
  font-family: 'Gotham Pro'
  src: url('assets/fonts/GothaProReg.eot')
  src: local('☺'), url('assets/fonts/GothaProReg.woff') format('woff'), url('assets/fonts/GothaProReg.ttf') format('truetype'), url('assets/fonts/GothaProReg.svg') format('svg')
  font-weight: normal
  font-style: normal

@font-face
  font-family: 'Gotham Pro'
  src: url('assets/fonts/GothaProLig.eot')
  src: local('☺'), url('assets/fonts/GothaProLig.woff') format('woff'), url('assets/fonts/GothaProLig.ttf') format('truetype'), url('assets/fonts/GothaProLig.svg') format('svg')
  font-weight: normal
  font-style: normal





//=============================================
                BORDER LINES
//=============================================



.line
  background-color: $c-line-gray
  position: fixed

.line--header, .line--footer
  z-index: 1

.header__items, .footer__items
  display: flex

.line--header
  top: 0
  left: 0
  width: 100%
  height: $l-border-width
  padding: 0 $l-border-width

  align-items: center
  /*justify-content: space-around*/
  p
    width: 25%
    display: flex
    justify-content: center

.header, .footer
  display: flex
  align-items: center






//=============================================
              		  HEADER
//=============================================



.header
  position: relative

  .header__items
    width: 100%
    height: 100%
    position: relative

    display: flex
    align-items: center
    justify-content: space-around

    font-size: $f-h4
    font-weight: 400
    color: $c-primary

    p.is-current
      font-weight: 600

    &::after, &::before
      content: ''
      left: 0
      right: 0
      bottom: 0
      height: 4px
      display: block
      position: absolute

    &::after
      width: 25%
      background-color: $c-accent

    &::before
      width: 100%
      background-color: $c-light-gray

  .header__icon
    /*10vh - line width*/
    top: calc(10vh / 2 - 18px)
    right: calc(10vh / 2 - 19px)
    position: absolute

    width: 40px
    height: 40px
    fill: $c-accent

    .header__icon-animation
      transition: transform 180ms ease

    &:hover .header__icon-animation
      /*opacity: 0*/
      transform: translateX(13%)




//=============================================
              		  MAIN
//=============================================



.main

  .content
    /*20vh - width of 2 border lines*/
    width: calc(100vw - 20vh)
    height: 80vh
    margin: 0 $l-border-width
    position: relative

  .line--left,
  .line--right
    top: 0
    bottom: 0
    width: $l-border-width
    height: 100%

  .line--left
    left: 0
  .line--right
    right:  0





//=============================================
              		  FOOTER
//=============================================



.footer

  .footer__items
    align-items: center
    /*10vh - line width*/
    padding: 0 calc(10vh + 1.094em)


    .nav
      will-change: opacity
      transition: opacity 330ms ease

      a
        margin: 0 1.125em
        will-change: opacity
        transition: opacity 330ms ease
      &:hover a:not(:hover)
        opacity: .4

.line--footer
  right: 0
  left: 0
  bottom: 0
  width: 100%
  height: $l-border-width



.fade-enter,
.fade-leave-to
  opacity: 0

  .fade-link
    opacity: 0
    /*transition: opacity 330ms 1s ease*/

.fade-enter-to,
.fade-leave
  opacity: 1

  .fade-link
    opacity: 1
    /*transition: opacity 330ms 1s ease*/

.fade-enter-active,
.face-leave-active
  transition: opacity 330ms ease-in


::selection
  color: $c-accent

::before,
::after
  box-sizing: border-box

</style>
