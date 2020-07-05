let p = new pGen()

let generated = document.querySelector("textarea.generated")
let generate_btn = document.querySelector("button.generate")

let lowercase = document.getElementById("lowercase")
let uppercase = document.getElementById("uppercase")
let numbers = document.getElementById("numbers")
let symbols = document.getElementById("symbols")
let length = document.getElementById("length")

generate_btn.addEventListener("click", ()=>{
    generated.value = p.generatePassword(lowercase.checked, uppercase.checked, numbers.checked, symbols.checked, length.value)
})


let chars_to_use = document.querySelector("textarea.chars")
let length_with_chars = document.getElementById("length_with_chars")
let generated_with_chars = document.querySelector("textarea.generated_with_chars")
let generate_with_chars_btn = document.querySelector("button.generate_with_chars")

generate_with_chars_btn.addEventListener("click", () => {
    generated_with_chars.value = p.generatePasswordWithChars(chars_to_use.value, length_with_chars.value)
})
