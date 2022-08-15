
let contador = 0;
function SelecionarPrato(numprato) {
    const selectedprato = document.querySelector(".pratos .selected");
    const selectedicone = document.querySelector(".pratos .selected .iconeVerde");
    if (selectedprato !== null) {
    selectedprato.classList.remove("selected");
    selectedicone.classList.add("escondido");
    contador--;
    }
    const prato = document.querySelector(numprato);
    const icone = prato.querySelector(".iconeVerde");
    prato.classList.add("selected");
    icone.classList.remove("escondido");
    contador++;
    if (selectedprato == prato) {
        prato.classList.remove("selected");
        icone.classList.add("escondido");
        contador--;
    }

    if (contador == 3) {
        const botao = document.querySelector(".pedir");
        botao.classList.add("verde");
        botao.innerHTML="Fechar pedido";
      
    } else  {
        const botao = document.querySelector(".pedir");
        botao.classList.remove("verde");
    
    }

}

function SelecionarBebida(numbebida) {
    const selectedbebida = document.querySelector(".bebidas .selected");
    const selectedicone = document.querySelector(".bebidas .selected .iconeVerde");
    if (selectedbebida !== null) {
    selectedbebida.classList.remove("selected");
    selectedicone.classList.add("escondido");
    contador--;
    }
    const bebida = document.querySelector(numbebida);
    const icone = bebida.querySelector(".iconeVerde");
    icone.classList.remove("escondido");
    bebida.classList.add("selected");
    contador++;
    if (selectedbebida == bebida) {
        bebida.classList.remove("selected");
        icone.classList.add("escondido");
        contador--;
    }
    if (contador == 3) {
        const botao = document.querySelector(".pedir");
        botao.classList.add("verde");
        botao.innerHTML="Fechar pedido";
    } else  {
        const botao = document.querySelector(".pedir");
        botao.classList.remove("verde");
    }
}

function SelecionarSobremesa(numsobremesa) {
    const selectedsobremesa = document.querySelector(".sobremesas .selected");
    const selectedicone = document.querySelector(".sobremesas .selected .iconeVerde");
    if (selectedsobremesa !== null) {
    selectedsobremesa.classList.remove("selected");
    selectedicone.classList.add("escondido");
    contador--;
    }
    const sobremesa = document.querySelector(numsobremesa);
    const icone = sobremesa.querySelector(".iconeVerde");
    sobremesa.classList.add("selected");
    icone.classList.remove("escondido");
    contador++;
    if (selectedsobremesa == sobremesa) {
        sobremesa.classList.remove("selected");
        icone.classList.add("escondido");
        contador--;
    }
        if (contador == 3) {
            const botao = document.querySelector(".pedir");
            botao.classList.add("verde");
            botao.innerHTML="Fechar pedido";
        } else  {
            const botao = document.querySelector(".pedir");
            botao.classList.remove("verde");
        }
}

function mostrarConfirmacao() {
    const habilita = document.querySelector(".verde");
    if (habilita !== null) {
    const confirm = document.querySelector(".confirm-background");
    confirm.style.display = "flex";
    }
}

function ocultarConfirmacao() {
    const confirm = document.querySelector(".confirm-background");
    confirm.style.display = "none";
}

function somar() {
    const habilita = document.querySelector(".verde");
    if (habilita !== null) {
    const valor1 = Number(document.querySelector(".pratos .selected .preco").innerHTML.replace(",","."));
    const valor2 = Number(document.querySelector(".bebidas .selected .preco").innerHTML.replace(",","."));
    const valor3 = Number(document.querySelector(".sobremesas .selected .preco").innerHTML.replace(",","."));
    const total = (valor1 + valor2 + valor3).toFixed(2);

    let pedido1 = document.querySelector(".pedido1-titulo");
    let prato = document.querySelector(".pratos .selected .prato-titulo").innerHTML;
    pedido1.innerHTML = `${prato}`;

    let valorPedido1 = document.querySelector(".pedido1-valor");
    valorPedido1.innerHTML = `${valor1.toFixed(2)}`;

    let pedido2 = document.querySelector(".pedido2-titulo");
    let bebida = document.querySelector(".bebidas .selected .bebida-titulo").innerHTML;
    pedido2.innerHTML = `${bebida}`;

    let valorPedido2 = document.querySelector(".pedido2-valor");
    valorPedido2.innerHTML = `${valor2.toFixed(2)}`;

    let pedido3 = document.querySelector(".pedido3-titulo");
    let sobremesa = document.querySelector(".sobremesas .selected .sobremesa-titulo").innerHTML;
    pedido3.innerHTML = `${sobremesa}`;

    let valorPedido3 = document.querySelector(".pedido3-valor");
    valorPedido3.innerHTML = `${valor3.toFixed(2)}`;

    let valorTotal = document.querySelector(".total-valor");
    valorTotal.innerHTML = `${total}`;
    
    }
}

function confirmarPedido() {
    let nome = prompt("Digite seu nome:");
    let endereco = prompt("Informe seu endereço:");
    let prato = document.querySelector(".pratos .selected .prato-titulo").innerHTML;
    let bebida = document.querySelector(".bebidas .selected .bebida-titulo").innerHTML;
    let sobremesa = document.querySelector(".sobremesas .selected .sobremesa-titulo").innerHTML;
    let valorTotal = document.querySelector(".total-valor").innerHTML;
    let mystring = `Olá, gostaria de fazer o pedido:\n- Prato: ${prato}\n- Bebida: ${bebida}\n- Sobremesa: ${sobremesa}\nTotal: R$ ${valorTotal}\n\nNome: ${nome}\nEndereço: ${endereco}`;
    let uri = encodeURIComponent(mystring);
    let url =`https://wa.me/5584998294154?text=${uri}`;
    let win = window.open(url, '_blank');
    win.focus();
}
