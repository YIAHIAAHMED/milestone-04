// maje maje use kora hobe
function addName(){
// console.log('btn Clicked');
const nameInput = document.getElementById('name-input');
//console.log(nameInput);
const newName = nameInput.value;
//console.log(newName);


//parent 
const nameContainer = document.getElementById('name-container');

// create p

const p = document.createElement('p');
p.innerText = newName;

//append 
nameContainer.appendChild(p);
nameInput.value = '';
}



// Second Method besi use korbo
// add Event listener

document.getElementById('btn-add-name').addEventListener('click', function(){
    
})