<template>
  <div id="app">
    <toolbar />
    <transition name="page">
      <router-view />
    </transition>
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

a {
  text-decoration: none;
  color: #34495e;
}

a:hover {
  color: #42b883;
  text-decoration: underline;
}

a.router-link-exact-active {
  text-decoration: underline;
}

.page-enter-active, .page-leave-active {
  transition: opacity .5s;
}

.page-enter, .page-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
