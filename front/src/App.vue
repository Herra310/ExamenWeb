<template>
  <div id="app">
    <b-nav id="nav" align="left" toggleable>
      <b-nav-item> <router-link to="/">Inicio</router-link> </b-nav-item>
    </b-nav>
    <router-view class="container mt-3" />
    <notifications position="bottom right" />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav  {
  font-weight: bold;
  background:#563d7c;
  color: #fff;
  padding: 10px 20px;
}
#nav a{
  color: #bbb;
  text-decoration: none;
}
#nav a.router-link-exact-active {
  color: #fff;

}
</style>
