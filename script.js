// Your code goes here
let nameForm = document.getElementById('name-form')
let userInput = document.getElementById('user-input')
let computerResponse = document.getElementById("computer-response")
let enemy = ["Timmy", "George", "Tamamo", "Tom"]

nameForm.addEventListener("submit", function (event) {
    event.preventDefault()
    console.log(userInput.value)
    let userName = userInput.value.trim()
    if (enemy.includes(userName)) {
        computerResponse.textContent = "Go away."
    } else {
        computerResponse.textContent = `Hello, ${userName}.`
    }
})