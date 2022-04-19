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

}

function randomSeciminiEle() {
    const say = Math.round(Math.random())
}

