let p = new pGen()

let generated = document.querySelector("p.generated")
let generate_btn = document.querySelector("button.generate")

let lowercase = document.getElementById("lowercase")
let uppercase = document.getElementById("uppercase")
let numbers = document.getElementById("numbers")
let symbols = document.getElementById("symbols")
let length = document.getElementById("length")

generate_btn.addEventListener("click", ()=>{
    generated.innerHTML = p.generatePassword(lowercase.checked, uppercase.checked, numbers.checked, symbols.checked, length.value)
})