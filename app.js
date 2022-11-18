let inText = document.querySelector(".text")
let outText = document.querySelector(".output")

inText.addEventListener("input", result)

function result() {
    outText.innerText =(inText.value)
}