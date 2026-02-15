// all sections and by Id

const allSections = document.getElementsByTagName('section');
console.log(allSections);

const firstTitle = document.getElementById('first-title');
console.log(firstTitle.innerText);

firstTitle.innerText = 'Prothom Prothom Valo Laga';

// by class name
const sections = document.getElementsByClassName('section-item');
console.log(sections);

//query Selector css er moto kore

console.log('third-list');

// get the parent
const thirdList = document.getElementById('third-list')

//create the child
const li = document.createElement('li');
li.innerText = 'Brand new list';

thirdList.appendChild(li);


