<template>
  <div id="app">
    <toolbar />
    <router-view />
  </div>
</template>

<script>
import Toolbar from './components/Toolbar';

export default {
  components: {
    Toolbar,
  },
};
</script>

<style>
body {
  padding: 0;
  margin: 0;
}
</style>
