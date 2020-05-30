<template>
  <div id="app">
    <Hash />
  </div>
</template>

<script>
import Hash from './components/Hash.vue'

export default {
  name: 'app',
  components: {
    Hash,
  },
}
</script>

<style>
#app {
  font-family: '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', Roboto,
    Helvetica, 'helvetica neue', 'luxi sans', 'dejavu sans', Tahoma,
    'hiragino sans gb', 'microsoft yahei', Arial, sans-serif,
    'Apple Color Emoji', 'EmojiOne', 'Noto Color Emoji', 'Segoe UI Emoji',
    'Segoe UI Symbol';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: 0;
}
body {
  margin: 0;
}
</style>
