<template>
  <header class="header">
    <nuxt-link class="header__logo" to="/">
      <img src="https://a.storyblok.com/f/39898/766x200/643e23f56d/nuxt-doc.svg" alt="NuxtDoc Logo">
    </nuxt-link>
    <nav>
      <ul class="header__nav">
        <li class="header__nav-item header__nav-item--mobile">
          <nuxt-link to="/v1/menu">Menu</nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style lang='scss'>
.header {
  background-color: #fff;
  padding: 20px 60px;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 100;
  height: 80px;
  line-height: 50px;

  background-color: rgba(255,255,255,0.9);
  box-shadow: 0 0 10px rgba(0,0,0,0.15);
  transition: background-color 0.3s ease-in-out;

  display: flex;
  justify-content: space-between;
  box-sizing: border-box;

  @media screen and (min-width: 725px) {
    padding: 20px 80px;
  }
}

.header__logo {
  &:hover {
    border-color: #fff;
  }
  img {
    height: 40px;
    padding-right: 20px;
    padding-top: 10px;
  }
}

.header__nav {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.header__nav-item {
  display: inline-block;
  margin: 0 1em;
  font-size: 1.2em;
}

.header__nav-item--mobile {
  display: inline-block;
  @media screen and (min-width: 835px) {
    display: none;
  }
}
</style>