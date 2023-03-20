<template>
  <footer id="footer">
      <p>André Luís Santos da Silva &reg; 2023</p>
  </footer>
</template>

<script>

  export default {
    name: "FooterComp"
  }
</script>

<style>
#footer {
    position: fixed;
    bottom: 0;
    left: 0;
    height: 90px;
    background-color: #222;
    border-top: 2px solid #111;
    color: #FBCA03;
    display: flex;
    align-items: center;
    justify-items: center;
    justify-content: center;
    width: 100%;
}

@media only screen and (max-width: 768px) {
    #footer {
        position: fixed;
        bottom: 0;
        left: 0;
        height: 10%;
        background-color: #222;
        border-top: 0.4em solid #111;
        color: #FBCA03;
        display: flex;
        align-items: center;
        justify-items: center;
        justify-content: center;
        width: 100%;
    }
}

</style>