<template>
    <div class="main-container">
        <h1>Experiências:</h1>
        <div class="experiencias">      
            <ul>
                <li>Empresa: SENAI - ISITICS</li>
                <li>Tempo: 9 meses</li>
                <li>Competências: 
                    <br>* Cuidando da Qualidade de entrega dos produtos
                    <br>* Participação em Planning 
                    <br>* Participação em Dailys 
                    <br>* Participação em Chapter de teste
                    <br>* Documentação de testes realizados 
                    <br>* Uso de Ferramenta Jira software
                    <br>* Realizando testes de endpoint com POSTMAN
                    <br>* Realizando testes automatizados com ROBOT FRAMEWORK
                    <br>* Realizando teste automatizados com CYPRESS
                    <br>* Realizando testes de carga com JMETER
                </li>
            </ul>
            <ul>    
                <li>Empresa: Ambipar Bleu</li>
                <li>Tempo: 'Estou trabalhando atualmente'</li>
                <li>Competências: 
                    <br>* Uso de Ferramenta monday para documentar e criar tasks 
                    <br>* Testes manuais e2e
                    <br>* Realizando testes automatizados com Nightwatch js
                    <br>* Realizando testes automatizados com CYPRESS
                    <br>* Realizando testes de endpoint com POSTMAN
                </li>
            </ul>

        </div>
        
    </div>
</template>

<script>
    

    export default {
    name: "ExperienciasView",
    components: { 
        
    }
}
</script>

<style>
.experiencias {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

ul {
  flex-basis: calc(50% - 20px);
  padding: 0 10px;
  margin-bottom: 100px;
  width: auto;
}

</style>


  