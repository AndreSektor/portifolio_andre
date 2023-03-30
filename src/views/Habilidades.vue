<template>
    <div class="main-container">
        <div>
            <img src="../../public/img/lupa.png" id="lupa">
        </div>
        <div class="container">
		<h2>Habilidades</h2>
		<div class="skills">
                <ul>
                    <li>RUBY (Intermediário)</li>
                    <li>PYTHON (básico)</li>
                    <li>Javascript (Intermediário)</li>
                    <li>HTML (Avançado)</li>
                    <li>CSS (Intermediário)</li>
                    <li>Lógica de programação (Intermadiário)</li>
                    <li>Cypress (Avançado)</li>
                    <li>Robot Framwork (Avançado)</li>
                    <li>Nightwatch (Avançado)</li>
                    <li>POSTMAN (Avançado)</li>
                    <li>Conhecimento em escrita e documentação de testes</li>
                    <li>Jira software (Avançado)</li>
                    <li>Monday (Avançado)</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    
    export default {
    name: "HabilidadesView",
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

    .container {
        max-width: 800px;
        margin: 10px auto;
        padding: 40px;
        background-color: #fff;
        box-shadow: 0 0 10px rgba(0,0,0,0.2);
		border-radius: 10px;        
	}

		h1 {
			font-size: 36px;
			text-align: center;
			margin-bottom: 20px;
		}

		h2 {
			font-size: 24px;
			margin-top: 40px;
			margin-bottom: 20px;
		}

		p {
			font-size: 16px;
			line-height: 1.5;
			margin-bottom: 20px;
		}

		img {
			display: block;
			margin: 0 auto;
			max-width: 100%;
			height: auto;
			border-radius: 50%;
			box-shadow: 0 0 10px rgba(0,0,0,0.2);
		}

		.skills ul {
			list-style: none;
			margin: 0;
			padding: 0;
			display: flex;
			flex-wrap: wrap;
		}

		.skills li {
			background-color: #e6e6e6;
			color: #333;
			font-size: 14px;
			padding: 10px;
			margin-right: 10px;
			margin-bottom: 10px;
			border-radius: 20px;
			box-shadow: 0 0 10px rgba(0,0,0,0.1);
		}

		@media only screen and (max-width: 600px) {
			.container {
				padding: 20px;
                margin-bottom: 30%;
			}

			h1 {
				font-size: 24px;
			}

			h2 {
				font-size: 20px;
			}

			img {
				margin-bottom: 20px;
			}
		}
        
</style>