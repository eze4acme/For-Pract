const span = document.getElementById('span')
function count() {
    let count = 0
    console.log('Hi');
    function mainFnc() {
        return count ++
    }
  span.innerText = count
}
count()

