<template>
    
    <div class="main-container">
        <h1>Bem vindo ao meu portifólio:</h1>
        <ul class="dados">
            <h3>André Luís</h3>
            <p>Nascido na terra distante e quente de Recife - PE
                 em 1991, é estudante do curso de ADS(Análise e Desenvolvimento de Sistemas)
                 trabalha com Qualidade de Software(QA - Quality Assurance) desde 2021. Começou 
                 sua carreira com a linguagem RUBY fazendo pequenas automações, em 2018,
                    mudou para Javascript, na qual teve a felicidade de 
                 trabalhar no projeto de refatoração de um sistema legado fazendo sua automação.
                  Já trabalhou no isi-tics | Senai onde desenvolveu muitas abilidades de teste.
                  Está atualmente trabalhando na Ambipar Bleu, é responsável 
                 pelo pela Qualidade do Aplicativo de inputação de emissões de gases de efeito estufa chamado 
                 Genio Carbon que é exclusivo nesse segmento ao nível Brasil.
            </p>
            <li>Contato: (81) 98729-8740</li>
            <li>E-mail: andreluissilva012@gmail.com</li>
            <li>Profissão: Quality Assurance (QA) Junior</li>
            <li>Escolaridade: Cursando ADS</li>
            <li>Redes Sociais: <a href="https://www.linkedin.com/in/andr%C3%A9-lu%C3%ADs-santos-da-silva-478263184/"><i class="fa fa-linkedin-square"></i></a><a href="https://github.com/AndreSektor"><i class="fa fa-github"></i></a></li>
        </ul>
    </div>

</template>

<script>


    export default {
        name: "HomeView",
        components: {

        }
    }
</script>

<style scoped>
    a {
      text-decoration: none;
      font-size: 36px;
      color: blue; 
      margin: 5px; 
    }

    .fa-github {
        color: black;
    }
</style>