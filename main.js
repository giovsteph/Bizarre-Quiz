//RESULTADO
function check() {
    document.getElementById("quizzie").style.display = "none";
    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var correct = 0;


    if (question1 == "Speedwagon") {
        correct++;
    }
    if (question2 == "Germany") {
        correct++;
    }
    if (question3 == "Seiko") {
        correct++;
    }

    var pictures = ["img/win.gif", "img/meh.gif", "img/lose.gif"];
    var messages = ["We are proud of you.", "Jotaro expected this.", "Dio wins this time."];
    var score;

    if (correct == 0) {
        score = 2;
    }

    if (correct > 0 && correct < 3) {
        score = 1;
    }

    if (correct == 3) {
        score = 0;
    }

    document.getElementById("after_submit").style.visibility = "visible";

    document.getElementById("message").innerHTML = messages[score];
    document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
    document.getElementById("picture").src = pictures[score];


}

//COMENZAR JUEGO
document.getElementById("click1").addEventListener("click", comenzarJuego);

function comenzarJuego() {
    document.getElementById('seccionDos').style.display = "block";
    document.getElementById('seccionUno').style.display = "none";
}

//MOSTRAR NOMBRE DE USUARIO
function showMsg() {
    let userInput = document.getElementById('input').value;
    document.getElementById('userMsg').innerHTML = userInput;
}

//MOSTRAR TRIVIA
document.getElementById("click2").addEventListener("click", TriviaA);

function TriviaA() {
    document.getElementById('quizzie').style.display = "block";
    document.getElementById('seccionDos').style.display = "none";
}

//VOLVER A MENU DE SELECCIÓN
document.getElementById("click7").addEventListener("click", reiniciarJuego)

function reiniciarJuego() {
    document.getElementById('seccionUno').style.display = "block";
    document.getElementById('seccionDos').style.display = "none";
    document.getElementById("quizzie").style.display = "none";
    document.getElementById("after_submit").style.display = "none";

    /*CLEAR SELECTION ON RADIO BUTTONS /  no funciona
    document.getElementById("quiz").reset();*/

}
