//document.getElemntById("counter").innerText = 5

//inicialize the count as 0
//listen for the clicks on the increment button
//increment the count variable when the button is clicked
//change the counter in the HTML to reflect the new counter

let count = 0
let counter = document.getElementById("counter")
let saveStr = document.getElementById("saveStr")

function increment(){
    count += 1
    counter.innerText = count
}

function reset(){
    count = 0
    counter.innerText = count
}

function save(){
    let string = count + " - "
    saveStr.innerText += string
}