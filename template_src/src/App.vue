<template>
  <div id="app" class='fullscreen'>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  created () {
    document.addEventListener('deviceready', this.deviceReady, false)
  },
  methods: {
    deviceReady () {
    }
  }
}
</script>

<style lang="less">
html body {
  width: 100%;
  height: 100%;
}

.fullscreen {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
