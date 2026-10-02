/* =================================
   ACESSIBILIDADE
================================= */

let tamanhoFonte = 18;


/* AUMENTAR FONTE */

function aumentarFonte() {

    if (tamanhoFonte < 30) {

        tamanhoFonte += 2;

        document.body.style.fontSize =
            tamanhoFonte + "px";
    }
}


/* DIMINUIR FONTE */

function diminuirFonte() {

    if (tamanhoFonte > 14) {

        tamanhoFonte -= 2;

        document.body.style.fontSize =
            tamanhoFonte + "px";
    }
}


/* ALTO CONTRASTE */

function altoContraste() {

    document.body.classList.toggle("contraste");
}


/* LEITURA EM VOZ ALTA */

function lerTexto() {

    pararLeitura();

    const texto =
        document.querySelector("main").innerText;

    const fala =
        new SpeechSynthesisUtterance(texto);

    fala.lang = "pt-BR";

    fala.rate = 0.9;

    window.speechSynthesis.speak(fala);
}


/* PARAR LEITURA */

function pararLeitura() {

    window.speechSynthesis.cancel();
}


/* =================================
   SIMULAÇÃO
================================= */

const canvas =
    document.getElementById("canvas");

const ctx =
    canvas.getContext("2d");

const descricao =
    document.getElementById("descricao");


/* LIMPAR TELA */

function limparCanvas() {

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    ctx.fillStyle = "#020617";

    ctx.fillRect(
        0,
        0,
        canvas.width,
        canvas.height
    );
}


/* DESENHAR LINHA */

function linha(
    x1,
    y1,
    x2,
    y2,
    cor,
    espessura = 5
) {

    ctx.beginPath();

    ctx.moveTo(x1, y1);

    ctx.lineTo(x2, y2);

    ctx.strokeStyle = cor;

    ctx.lineWidth = espessura;

    ctx.stroke();
}


/* REFLEXÃO */

function reflexao() {

    limparCanvas();


    // Espelho

    linha(
        600,
        50,
        600,
        350,
        "#ffffff",
        12
    );


    // Raio que chega

    linha(
        100,
        300,
        600,
        150,
        "#facc15",
        6
    );


    // Raio refletido

    linha(
        600,
        150,
        850,
        75,
        "#facc15",
        6
    );


    // Normal

    linha(
        600,
        150,
        600,
        330,
        "#ef4444",
        2
    );


    ctx.fillStyle = "white";

    ctx.font = "22px Arial";

    ctx.fillText(
        "Espelho",
        620,
        200
    );


    ctx.fillText(
        "Raio incidente",
        180,
        280
    );


    ctx.fillText(
        "Raio refletido",
        680,
        100
    );


    descricao.innerText =
        "Reflexão: a luz atinge uma superfície e retorna para o meio de origem.";
}


/* REFRAÇÃO */

function refracao() {

    limparCanvas();


    // Água

    ctx.fillStyle = "#075985";

    ctx.fillRect(
        0,
        210,
        canvas.width,
        190
    );


    // Superfície da água

    linha(
        0,
        210,
        800,
        210,
        "white",
        3
    );


    // Raio no ar

    linha(
        150,
        50,
        400,
        210,
        "#facc15",
        6
    );


    // Raio dentro da água

    linha(
        400,
        210,
        500,
        350,
        "#38bdf8",
        6
    );


    ctx.fillStyle = "white";

    ctx.font = "22px Arial";

    ctx.fillText(
        "AR",
        50,
        100
    );

    ctx.fillText(
        "ÁGUA",
        50,
        300
    );


    descricao.innerText =
        "Refração: a luz passa de um meio para outro e muda sua velocidade e direção.";
}


/* DISPERSÃO */

function dispersao() {

    limparCanvas();


    // Luz branca chegando

    linha(
        50,
        200,
        300,
        200,
        "white",
        8
    );


    // Prisma

    ctx.beginPath();

    ctx.moveTo(
        300,
        100
    );

    ctx.lineTo(
        300,
        300
    );

    ctx.lineTo(
        500,
        200
    );

    ctx.closePath();

    ctx.fillStyle = "#cbd5e1";

    ctx.fill();

    ctx.strokeStyle = "white";

    ctx.stroke();


    // Cores

    const cores = [
        "#ef4444",
        "#f97316",
        "#eab308",
        "#22c55e",
        "#06b6d4",
        "#3b82f6",
        "#8b5cf6"
    ];


    for (
        let i = 0;
        i < cores.length;
        i++
    ) {

        linha(
            500,
            200,
            780,
            80 + i * 40,
            cores[i],
            5
        );

    }


    ctx.fillStyle = "white";

    ctx.font = "22px Arial";

    ctx.fillText(
        "Prisma",
        340,
        180
    );


    descricao.innerText =
        "Dispersão: a luz branca é separada em diferentes cores.";
}


/* =================================
   QUIZ
================================= */

function corrigirQuiz() {

    let pontos = 0;


    /* RESPOSTA 1 */

    const q1 =
        document.querySelector(
            'input[name="q1"]:checked'
        );

    if (
        q1 &&
        q1.value === "a"
    ) {

        pontos++;

    }


    /* RESPOSTA 2 */

    const q2 =
        document.querySelector(
            'input[name="q2"]:checked'
        );

    if (
        q2 &&
        q2.value === "c"
    ) {

        pontos++;

    }


    /* RESPOSTA 3 */

    const q3 =
        document.querySelector(
            'input[name="q3"]:checked'
        );

    if (
        q3 &&
        q3.value === "a"
    ) {

        pontos++;

    }


    const resultado =
        document.getElementById(
            "resultado"
        );


    if (pontos === 3) {

        resultado.innerHTML =
            "🎉 Parabéns! Você acertou todas as questões!";

    } else {

        resultado.innerHTML =
            "Você acertou " +
            pontos +
            " de 3 questões. Continue estudando! 📚";

    }

}


/* =================================
   TECLADO
================================= */

document.addEventListener(
    "keydown",
    function(event) {

        /*
         Alt + C
         Ativa o contraste
        */

        if (
            event.altKey &&
            event.key.toLowerCase() === "c"
        ) {

            altoContraste();

        }


        /*
         Alt + +
         Aumenta fonte
        */

        if (
            event.altKey &&
            event.key === "+"
        ) {

            aumentarFonte();

        }


        /*
         Alt + -
         Diminui fonte
        */

        if (
            event.altKey &&
            event.key === "-"
        ) {

            diminuirFonte();

        }

    }
);
