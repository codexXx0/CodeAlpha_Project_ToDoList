let bluePage = document.getElementById("blur");
let containerPage = document.getElementById("container");
let addNoteBtn = document.getElementById("addPlus");
let createNotePage = document.getElementById("addNew");
let createNoteBtn = document.getElementById("addBtn");
let miniBoxs = document.querySelector(".boxs");
let delNoteBtn = document.getElementById("delNote");
let input = document.getElementById("input");
let textArea = document.getElementById("textarea");
let colorArr = ["#FDF2B3", "#D1EAED", "#FFDADA", "#a2e6dd", "#FFD4A9", "#f5bfbf", "#a7f0c7", "#adf0a7", "#d4f0a7", "#ebf0a7", "#f0cea7", "#a7c7f0", "#a7a8f0", "#b7a7f0", "#cfa7f0", "#f0a7e0", "#f0a7b3"];
let editNoteBtn = document.querySelector(".editNote")

let noteArr = JSON.parse(localStorage.getItem("NoteArr")) || []; // Load from local storage

// Render notes on page load
function renderNotes() {
    miniBoxs.innerHTML = `                    
    `;
    noteArr.forEach(noteHTML => {
        miniBoxs.innerHTML += noteHTML;
    });
}

editNoteBtn.addEventListener("click" , function(){
    console.log("shit")
})

// Add event listener for adding new notes
addNoteBtn.addEventListener("click", function () {
    bluePage.classList.remove("hide");
    createNotePage.classList.remove("hide");
});

createNoteBtn.onclick = function () {
    let randColor = Math.floor(Math.random() * colorArr.length);
    if (textArea.value && input.value) {
        let noteHTML = `
        <div class="box" style="background-color : ${colorArr[randColor]} ;" >
        <i id="editNote"  class="fa-regular fa-pen-to-square"></i>
            <h3>${input.value}</h3>
            <p>${textArea.value}</p>
            <i id="delNote" class="fa-regular fa-trash-can"></i>
        </div>
        `;
        noteArr.push(noteHTML);
        localStorage.setItem("NoteArr", JSON.stringify(noteArr)); // Save to local storage
        renderNotes(); // Render updated notes
        textArea.value = "";
        input.value = "";
    }
    bluePage.classList.add("hide");
    createNotePage.classList.add("hide");
};

// Event delegation for deleting a note
miniBoxs.addEventListener("click", function (event) {
    if (event.target.classList.contains("fa-trash-can")) {
        let noteToDelete = event.target.parentElement;
        let noteIndex = Array.from(miniBoxs.children).indexOf(noteToDelete);
        noteArr.splice(noteIndex - 1, 1); // Adjust for the initial "Welcome" note
        localStorage.setItem("NoteArr", JSON.stringify(noteArr));
        noteToDelete.remove();
    }
});


// Initial render
renderNotes();



