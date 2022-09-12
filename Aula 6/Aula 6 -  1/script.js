let res = document.querySelector('section')
let computador = 0
let jogador = 0

function sortear() {
    let min = 1
    let max = 100
    let dif = max - min
    let aleatorio = Math.random()
    computador = min + Math.trunc(dif * aleatorio)
}

function jogar() {
    jogador = Number(window.prompt('Qual é seu palpite?'))
    if (jogador < computador) {
        res.innerHTML += `<p>Você falou <strong>${jogador}</strong>. meu número é <strong>MAIOR</strong>!</p>`
    }
    else if (jogador > computador) {
        res.innerHTML += `<p>Você falou <strong>${jogador}</strong>. meu número é <strong>MENOR</strong>!</p>`
    }
    else if (jogador == computador) {
        res.innerHTML += `<p><strong>PARABÉNS!</strong> Você acertou! Eu tinha sorteado o valor <strong>${computador}</strong>!</p>`
        document.getElementById('botao').style.visibility = 'hidden'
    }
}