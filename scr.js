let questions = document.querySelector("#questions")
let answers = document.querySelectorAll(".answers")
let options1 = document.querySelector("#options1")
let options2 = document.querySelector("#options2")
let options3 = document.querySelector("#options3")
let trueandfalse = document.getElementById("trueandfalse")
let hide = document.querySelector("#hide")
let index = 0, right = 0, wrong = 0;
let obj = [
    {
        "question": "What does the abbreviation HTML stand for",
        "options1": "Hyper Text Markup Language",
        "options2": "Hot Mail",
        "options3": "How to Make Lasagna",
        "correct": "A"
    },
    {
        "question": "How many tags are in a regular element?",
        "options1": "2",
        "options2": "1",
        "options3": "3",
        "correct": "A"
    },
    {
        "question": "What is the difference between an opening tag and a closing tag",
        "options1": "Opening tag has a / in front",
        "options2": "Closing tag has a / in front",
        "options3": "There is no difference",
        "correct": "B"
    },
    {
        "question": "Where is the meta tag only found?",
        "options1": "The last page",
        "options2": "The home page",
        "options3": "The second page",
        "correct": "B"
    },
    {
        "question": "What should values always be enclosed in?",
        "options1": "Quotation marks",
        "options2": "Commas",
        "options3": "Parenthesis",
        "correct": "A"
    },
    {
        "question": "Where do all items for the same website need to be saved?",
        "options1": "In the same folder",
        "options2": "Where ever is fine",
        "options3": "In different folders",
        "correct": "A"
    },
    {
        "question": "What is always a welcome page, and explains the purpose or topic of the site?",
        "options1": "Page 4",
        "options2": "Homepage",
        "options3": "Table of contents",
        "correct": "B"
    }
]
console.log(answers)
function startQuiz() {
    let data = obj[index]

    questions.innerHTML = [index + 1] + ") " + data.question
    options1.innerHTML = data.options1
    options2.innerHTML = data.options2
    options3.innerHTML = data.options3
}
startQuiz()



function nextdata() {
    if (index == (obj.length) - 1) {

        restquiz()
    }
    let id_fetch = pankaj()

    // console.log(obj[index].correct,id_fetch)
    if (obj[index].correct == id_fetch) {
        // console.log("first")
        right++
    } else {
        // console.log("2nd")
        wrong++
    }

    index++
    inputclear()
    startQuiz()
    trueandfalse.innerHTML = `R ${right}/W ${wrong}`
    console.log("right", right)
    console.log("wrong", wrong)
}
function pankaj() {
    let checkdata = ""
    answers.forEach(data => {
        if (data.checked == true) {
            checkdata = (data.id)
        }

    })
    return (checkdata)
}

function inputclear() {
    answers.forEach(data => {
        if (data.checked == true) {
            data.checked = false
        }

    })
}

function restquiz() {
    hide.hidden = true
}
let timer = 150

document.getElementById("count").addEventListener("click", () => {
    timer--
    console.log(timer)
})
normal()
// function normal(){
    
// }
// const normal=() 