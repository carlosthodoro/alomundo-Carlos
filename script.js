function inserirNome(){
let nomeUsuario = prompt("Qual oseu nome");
    let elemento = document.querySelector("#nome-usuario");
    console.log(elemento);
    elemento.textContent = nomeUsuario;
}