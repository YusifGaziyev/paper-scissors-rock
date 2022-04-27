//  deyishenin tipi stringlerden ibaret MASSIV (Obyekt)
const siyahi = ["paper.png","scissors.png", "rock.png"]

// ELEMENTIN MASSIVDEN SECILMESI


// console.log(typeof siyahi) //object
// console.log(siyahi)


const kagiz = document.getElementById('paper')
const qayci = document.getElementById('scissors')
const das = document.getElementById('rock')

const komputerinSecimi = document.getElementById('computer-choice')
const oyunNeticesi = document.getElementById('result')
// funksiya cagrilib amma xeta vermir
kagiz.onclick = seciminiEle
qayci.onclick = seciminiEle
das.onclick = seciminiEle


function seciminiEle() {
    const menimSecimim = this.dataset.id
    const komputerinQerari = randomSeciminiEle()

    if(menimSecimim == komputerinQerari) {
        netice = "Yeniden cehd edin"
    }
    else if(menimSecimim == 0 && komputerinQerari == 1){
        netice = "Siz uduzdunuz"
    }
    else if(menimSecimim == 0 && komputerinQerari == 2){
        netice = "Siz qazandiniz"
    }
    else if(menimSecimim == 1 && komputerinQerari == 0) {
        netice = "Siz qazandiniz"
    }
    else if(menimSecimim == 1 && komputerinQerari == 2) {
        netice = "Siz uduzdunuz"
    }
    else if(menimSecimim == 2 && komputerinQerari == 0) {
        netice = "Siz uduzdunuz"
    }
    else if(menimSecimim == 2 && komputerinQerari == 1) {
        netice = "Siz qazandiniz"
    }
}

function randomSeciminiEle() {
    const say = Math.round(Math.random())
    // TEMPLATE LITERAL (STRING LITERAL) - stringlerin birleshdirilmesi
    komputerinSecimi.src = `./img/${siyahi[say]}`
    return say 
}

