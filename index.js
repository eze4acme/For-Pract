const span = document.getElementById('span')
const button = document.getElementById('button')
function countX() {
    let count = 0
    // console.log('Hi');
   function mainFnc() {
     return count = count + 1
    }
    span.innerHTML = count
    mainFnc()
}

button.addEventListener('click', countX)
