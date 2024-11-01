// document.getElementById('nameForm').addEventListener('submit', function(event) {
//     event.preventDefault();
//     const name = document.getElementById('nameInput').value;
//     const greetingMessage = `Hello, ${name}!`;
//     document.getElementById('greetingMessage').textContent = greetingMessage;
// });

// document.getElementById('nameInput').addEventListener('input', function(event) {
//     const name = event.target.value;
//     const greetingMessage = `Hello, ${name}!`;
//     document.getElementById('greetingMessage').textContent = greetingMessage;
// });

// // document.getElementById('Email').addEventListener('input', function(event) {
// //     const name = event.target.value;
// //     const greetingMessage = `Your mail id is ${name}@gmail.com`;
// //     document.getElementById('greetingMessage').textContent = greetingMessage;
// // });

// var nameInputElement =document.getElementById("email");

// function UpdateValue(event) {
//     const name = event.target.value;
//     const greetingMessage = `Hello, ${name}!`;
//     document.getElementById('greetingMessage').textContent = greetingMessage;
// }
// nameInputElement.onclick=UpdateValue

function submitForm(event) {
    var name = document.getElementById('nameInput').value;
    var date = document.getElementById('date').value;
    var fatherName = document.getElementById('fathernameinput').value;
    var motherName = document.getElementById('mothernameinput').value;
    var password = document.getElementById('password').value;

    console.log(name, date, fatherName, motherName, password);
}

var submitButton = document.getElementById("submitButton");
submitButton.onclick=submitForm;
