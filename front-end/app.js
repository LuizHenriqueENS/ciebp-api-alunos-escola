const container = document.getElementById("container")
const encontrarButton = document.getElementById("encontrar")
const inputSearch = document.getElementById("search")
const teste = document.getElementById('teste')

// fetch("http://localhost:5000/alunos")
//     .then(res => res.json())
//     .then(data => {
//         for (let t in data) {
//             alunos = data[t]
//             if (alunos === "1ºB") {
//                 for (let i in alunos) {
//                     const imagemAl = alunos[i]["img_name"]
//                     const nomeAl = alunos[i]["name"]
//                     const divEl = document.createElement("div")
//                     const imgEl = document.createElement("img")
//                     const spanEl = document.createElement("span")

//                     divEl.style = "display: flex; justify-content: center; flex-direction:column"
//                     imgEl.src = "../" + imagemAl
//                     imgEl.alt = `Foto de ${nomeAl}`
//                     imgEl.width = 250
//                     imgEl.height = 250
//                     imgEl.style.objectFit = "cover"
//                     spanEl.textContent = nomeAl

//                     container.append(divEl)
//                     divEl.append(imgEl)
//                     divEl.append(spanEl)

//                 }
//             }
//         }
//     })

encontrarButton.addEventListener("click", () => {
    if (inputSearch.value.length == 0) {
        return
    }
    fetch(`http://NOTE-LUIZ:5000/encontrar?q=${inputSearch.value}`)
        .then(res => res.json())
        .then(data => {

            container.innerHTML = ""

            let alunos = data
            for (let i = 0; i < alunos["resultado"].length; i++) {
                let aluno = alunos["resultado"][i]
                let alunoImg = "../" + aluno["img_name"]
                console.log(alunoImg)
                let alunoNome = aluno["name"]
                let alunoTurma = aluno["turma"]
                container.innerHTML += `<div class="card" style="width: 18rem;">
                    <img src="${alunoImg}" class="card-img-top" alt="...">
                    <div class="card-body">
                    <h5 class="card-text text-center">Turma: ${alunoTurma}</5>
                    <p class="card-text">${alunoNome}</p>
                    </div>
                    </div>`
            }
        })

    let info = document.getElementsByTagName('img')[0]
    teste.textContent = info

})
