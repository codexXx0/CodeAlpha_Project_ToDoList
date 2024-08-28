let bluePage = document.getElementById("blur")
let containerPage = document.getElementById("container")
let addNoteBtn = document.getElementById("addPlus")
let createNotePage = document.getElementById("addNew")
let createNoteBtn = document.getElementById("addBtn")
let miniBoxs = document.querySelector(".boxs")
let input = document.getElementById("input")
let textArea = document.getElementById("textarea")



addNoteBtn.addEventListener("click" , function(){
    bluePage.classList.remove("hide")
    createNotePage.classList.remove("hide")
})

createNoteBtn.onclick = function(){
    if (textArea.value && input.value ) {
        miniBoxs.innerHTML += `
        <div class="box">
        <h3>${textArea.value}</h3>
        <p>${input.value}</p>
        </div>
        `
        textArea.value= ""
        input.value= ""
    }
    bluePage.classList.add("hide")
    createNotePage.classList.add("hide")
}