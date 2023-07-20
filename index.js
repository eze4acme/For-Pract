const span = document.getElementById('span')
const button = document.getElementById('button')
function countX() {
    let count = 0
    console.log('Hi');
    function mainFnc() {
        return count ++
    }
  span.innerText = count
}

button.addEventListener('click', countX)
