const formPerguta = document.getElementById('formulario-pergunta');

const OPENAI_API_KEY = "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";

if(formPerguta){

    formPerguta.addEventListener("submit", async (e) =>{

        e.preventDefault();

        document.getElementById('btn-pergunta').value = "Processando a Pergunta...";

        let pergunta = document.getElementById('campo-pergunta').value;
        console.log(pergunta);

document.getElementById('pergunta').innerHTML = pergunta;

document.getElementById('pergunta').innerHTML = "<span></span>";


        await fetch("https://api.openai.com/v1/completions", {

            method: "POST",

            headers: {

                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: "Bearer " + OPENAI_API_KEY,
            },

body: JSON.stringify({
model: "text-davinci-003", 
prompt: pergunta,
max_tokens: 2048,
temperature: 0.5
            }),
        })

        .then((resposta) => resposta.json())
        .then((dados) => {
               //console.log(dados);
               console.log(dados.choices[0].text);
               document.getElementById('resposta').innerHTML = dados.choices[0].text;
        })
        .catch((erro) => {
            console.log(erro);
        });

        document.getElementById('btn-pergunta').value = "Submeter";

    });
}