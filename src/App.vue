<template>

  <NavbarComp :perfil="perfil_src" :alt="app_name" />
  <router-view />
  <FooterComp />
  
</template>

<script>
  import NavbarComp from './components/Navbar.vue';
  import FooterComp from './components/Footer.vue';

  export default {
    components: {
      NavbarComp,
      FooterComp
    },
    data() {
      return {
        perfil_src: "/img/perfil.png",
        app_name: "Meu Portefólio"
      }
    }
  }
</script>

<style>
  * {
    font-family: Arial, Helvetica, sans-serif;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  .main-container {
    margin: 50px;
    min-height: 250px;
  }

  h1 {
    text-align: center;
    font-size: 42px;
    margin-bottom: 30px;
    color: #222;
  }

  @media only screen and (max-width: 768px) {
    .main-container {
      flex-direction: column;
      padding: 15px;
      max-width: 1200px;
      margin: 0 auto;
      display: block;
    }
  }
</style>
