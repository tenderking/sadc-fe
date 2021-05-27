<template>
  <div id="nav">
    <router-link to="/">SADC Sites</router-link>
    <router-link to="/user">User</router-link>
  </div>
  <router-view />
</template>

<style>
#app {
  font-family: "Calisto MT", Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 1em 6em;
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid #2c3e50;
}

#nav a {
  font-weight: bold;
  font-size: 1.5em;
  text-decoration: none;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: orange;
}
@media only screen and (max-width: 800px) {
  #nav {
    padding: 1em 2em;
  }
}
@media only screen and (max-width: 480px) {
  #nav {
    padding: 1em 1em;
  }
}
</style>
