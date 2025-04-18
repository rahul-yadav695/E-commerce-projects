let counter = 0; 
let ValueCount = document.getElementById("plus1")

let one = document.getElementById("increase")
one.addEventListener('click' , function () {
    counter++
    ValueCount.textContent = counter
})

const two = document.getElementById('decrease')
two.addEventListener('click' , function () {
    if(counter > 0){
        counter--;
    }
    ValueCount.textContent = counter
})


const raj = document.getElementById('rahulk')
raj.addEventListener('click' , function () {
    raj.innerHTML = `
    `
})