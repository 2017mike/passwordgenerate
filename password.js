
let generate = document.getElementById("generate")

generate.addEventListener("click",function(){
let length = parseInt(prompt("how long do you want your password?"))
let lowerCase = confirm("lower case?")
let upperCase = confirm("upper case?")
let nums = confirm("nums?")
let specChars = confirm("special characters?")
let lowerArray = ("abcdefghijklmnopqrstuvwxyz")
let upperArray = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
let numArray = ("0123456789")
let specArray = ("!@#$%^&*()")
let chosenArray = ""
let password = ""


if (lowerCase = true) {
  chosenArray = lowerArray + chosenArray
}

console.log(chosenArray)

if (upperCase = true ) {
  chosenArray = upperArray + chosenArray
}

console.log(chosenArray)

if (nums = true) {
  chosenArray = numArray + chosenArray
}

if (specChars = true) {
  chosenArray = specArray + chosenArray
}


  for (let i = 0; i < length; i++) {
    password = password + chosenArray[Math.floor(Math.random() * chosenArray.length)]
  }

  console.log(password)

  

  document.getElementById('password').value = `${password}`

}
)




