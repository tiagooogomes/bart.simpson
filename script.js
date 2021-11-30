let botaoEnviar = document.querySelector("#enviar");

botaoEnviar.addEventListener("click", function(event){
    event.preventDefault();

    fraseEscolhida = document.getElementById("container");
    fraseEscolhida.innerHTML = "";
    let form = document.getElementById('formulario');
    let quantidade = form.quantidade.value;

    let i = 0;
    
    while(i<quantidade){

        const quadroNegro = document.getElementById('container');
        const fraseEscolhida = document.createElement('p');
        fraseEscolhida.innerHTML = "Peixes não gostam de café";
        quadroNegro.appendChild(fraseEscolhida);
        
        i++;
        let contador = 0;
        let repetido = 0;
     
        if(i>10 && repetido< quantidade/11){

            repetido++
            resetes.innerHTML = `O quadro foi apagado ${Math.trunc(quantidade/11)} vezes` 
            fraseEscolhida = document.getElementById("container");
            fraseEscolhida.innerHTML = "";
        }     
    };
});
 
