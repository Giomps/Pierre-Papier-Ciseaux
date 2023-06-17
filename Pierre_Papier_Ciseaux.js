function rockScissorPaper() {

    let simonTextContent = document.querySelector('.simonTextContent')
    let bryanTextContent = document.querySelector('.bryanTextContent')

    const textResult = document.querySelector('.textResult');

    let RPS = ["🧱", "📃", "✂️"];

    let Simon = RPS[Math.floor(Math.random() * RPS.length)]
    let Bryan = RPS[Math.floor(Math.random() * RPS.length)]

    simonTextContent.textContent = `Simon dit ${Simon}`;
    bryanTextContent.textContent = `Bryan dit ${Bryan}`;

    if (Simon === "🧱" && Bryan === "✂️") {
        textResult.textContent = `Simon a gagné`
    
    } else if(Simon === "🧱" && Bryan === "📃") {
        textResult.textContent = `Bryan a gagné`
    
    } else if(Simon === "📃" && Bryan === "🧱") {
        textResult.textContent = `Simon a gagné`
    
    } else if (Simon === "📃" && Bryan === "✂️") {
        textResult.textContent = `Bryan a gagné`

    } else if(Simon === "✂️" && Bryan === "🧱") {
        textResult.textContent = `Bryan a gagné`
    
    } else if(Simon === "✂️" && Bryan === "📃") {
        textResult.textContent = `Simon a gagné`

    } else {
        textResult.textContent = ``
    }
Hello world
}

setInterval(rockScissorPaper, 3500)
    
