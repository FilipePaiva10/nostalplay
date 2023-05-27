function writeCpyr(idElement) {
    window.document.getElementById(idElement).innerText = `© NostalPlay - ${new Date().getFullYear()} All Rights Reserved`;
}

function writeLgcy(idElement) {
    window.document.getElementById(idElement).innerHTML = `A comercialização <b>exclusiva</b> do NOSTALPLAY ocorre somente neste site. Qualquer outro site que ofereça este sistema é uma falsificação e viola as leis. Proteja-se contra falsificações e rejeite conteúdo ilegal ou pirateado.`;
}

function showResponseCard(idAftr) {

    let aftr = window.document.getElementById(idAftr);

    if (aftr.classList.contains("hidden")) {
        aftr.classList.remove("hidden");
        aftr.classList.add("absolute");
    }

    setTimeout(() => {

        aftr.classList.remove("absolute");
        aftr.classList.add("hidden");

    }, [4000]);

}

function atualizarContador() {
    var dataAtual = new Date();
    var dataFechamento = new Date();
    dataFechamento.setDate(dataAtual.getDate() + 1);

    var dataEncerramento = new Date(dataFechamento.getFullYear(), dataFechamento.getMonth(), dataFechamento.getDate(), 0, 0, 0);

    var diferenca = dataEncerramento - dataAtual;

    var horas = Math.floor(diferenca / 1000 / 60 / 60);
    var minutos = Math.floor((diferenca / 1000 / 60) % 60);
    var segundos = Math.floor((diferenca / 1000) % 60);

    horas = horas.toString().padStart(2, '0');
    minutos = minutos.toString().padStart(2, '0');
    segundos = segundos.toString().padStart(2, '0');

    window.document.getElementById("hour_el").innerText = `${horas}`;
    window.document.getElementById("min_el").innerText = `${minutos}`;
    window.document.getElementById("sec_el").innerText = `${segundos}`;

    setTimeout(atualizarContador, 1000);
}

window.onload = () => {

    writeCpyr("cpry");
    writeLgcy("lgcy");

    atualizarContador();

}