console.log("Hello world");

let pElement = document.getElementById("myPTag");
console.log(pElement);

function change() {
    let firstName = document.getElementById("nameInput").value;
    pElement.innerHTML = "Hello " + firstName;
}

function changeColor(){
    let color = document.getElementById("mouseOver").style.backgroundColor = "red"
}