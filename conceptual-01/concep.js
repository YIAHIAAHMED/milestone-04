const itemText = document.querySelectorAll('.item');
console.log(itemText);
console.log(itemText[0]);
const mainDiv = document.querySelector('#mainDiv');
console.log(mainDiv.children[1]);



//button e click korle 1 kore barbe

const btn = document.getElementById('btn');
const count = document.getElementById('count');
btn.addEventListener('click', function(){
    let currentCount = parseInt(count.innerText);
    currentCount++;
    count.innerText = currentCount;
})