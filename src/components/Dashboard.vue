<template>
  <div class="dashboard" id="app">
    <h1>dashboard</h1>
    <div>{{timer}}</div>
    <div>{{timespamp}}</div>
  </div>
</template>

<script>
  export default {
    name: "Dashboard",
    computed: {
      timer() {
        let d = new Date();
        let minZero = ''
        let time = {
          hour: d.getHours(),
          minutes: d.getMinutes()
        }
        if(time.minutes < 10) minZero = '0'
        // setTimeout(function() {})
        return 'current time is ' + time.hour + ':' + minZero + time.minutes
      },
      timespamp() {
        return + new Date()
      }
    }
  }
</script>

<style scoped>

</style>
