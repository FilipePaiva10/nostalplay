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

function showQtsZap() {

    let question = window.document.getElementById("qtsZap");

    window.document.getElementById("parentZap").addEventListener('mouseover', () => {

        if (question.classList.contains("hidden")) {
            question.classList.remove("hidden");
            question.classList.add("relative");
        }

    });

    window.document.getElementById("parentZap").addEventListener('mouseout', () => {

        if (question.classList.contains("relative")) {
            question.classList.remove("relative");
            question.classList.add("hidden");
        }

    });

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


function addEvent(obj, evt, fn) {
    if (obj.addEventListener) {
        obj.addEventListener(evt, fn, false);
    }
    else if (obj.attachEvent) {
        obj.attachEvent("on" + evt, fn);
    }
}

addEvent(window, "load", function (e) {
    addEvent(document, "mouseout", function (e) {
        e = e ? e : window.event;
        var from = e.relatedTarget || e.toElement;
        if (!from || from.nodeName == "HTML") {
            // Aqui você coloca o seu popup
            //alert("left window");
            const myPopup = window.document.getElementById('popupExit');

            if (myPopup.classList.contains("hidden")) {
                myPopup.classList.remove("hidden");
                myPopup.classList.add("fixed");
            }
        }
    });
});

function closePopup() {
    const myPopup = window.document.getElementById('popupExit');

    if (myPopup.classList.contains("fixed")) {
        myPopup.classList.add("hidden");
        myPopup.classList.remove("fixed");
    }
}

window.addEventListener('popstate', function (event) {
    // Aqui você pode executar o código que deseja quando o evento de voltar página ocorrer
    // Por exemplo, você pode exibir uma mensagem, carregar conteúdo adicional, etc.

    event.preventDefault();

    console.log('Quer Retornar');
});

function showContent() {

    let allElements = Array.from(window.document.querySelectorAll("[data-delay]"));

    allElements.forEach(el => {
        if (el.classList.contains("hidden")) {
            el.classList.remove("hidden");
        }
    });

}

window.onload = () => {

    writeCpyr("cpry");
    writeLgcy("lgcy");

    showQtsZap();
    atualizarContador();

    setTimeout(() => {
        showContent();
    }, [66000]);

}

