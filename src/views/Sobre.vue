<template>
    <div class="main-container">
        <h1>Sobre:</h1>
        <div>
            <img src="../../public/img/lupa.png" id="lupa">
        </div>
        <ul>
            Olá me chamo André, sou uma pessoa amante da tecnologia voltado extremamente para a área de Qualidade de software.
            Iniciei minha carreira no ISITICS, que é um braço do SENAI PE voltado para a tecnologia, de lá iniciei minha jornada e 
            tenho sempre entregado demandas com o máximo de qualidade possível, prevendo não ter dor de cabeça posteriormente.
        </ul>
        
    </div>
</template>

<script>
    
    export default {
    name: "SobreView",
    components: { 
        
    },
    data() {
        return {
            alt: "/img/lupa/.png"
        }
    }
}
</script>

<style scoped>

    #lupa {
        border-radius: 50%;
        width: 60px;
        height: 60px;
        border: 4px solid #ccc;
        border-bottom: 20px 20px;
    }
</style>