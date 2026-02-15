// console.log('I Have a Plan')
// option -02
function makeYellow(){
    document.body.style.backgroundColor = 'yellow';
}


//  option -03

const btnMakeBlue = document.getElementById('btn-make-blue');
//console.log(btnMakeBlue);
btnMakeBlue.onclick = function makeBlue(){
    document.body.style.backgroundColor = 'blue';
}


//  option -04

const btnMakePurple = document.getElementById('btn-make-purple');
//console.log(btnMakeBlue);
btnMakePurple.onclick = makePurple;
function makePurple(){
    document.body.style.backgroundColor = 'purple';
}

//  option -04 addEventListener
document.getElementById('btn-make-green').addEventListener('click', function makeGreen(){
    // console.log(777);
    document.body.style.backgroundColor = 'green';
} )

document.getElementById('btn-update-title').addEventListener('click', function(){
    const pageTitleElement = document.getElementById('page-title');
    pageTitleElement.innerText = 'update page title text.'
})

//02
document.getElementById('btn-update').addEventListener('click', function(){
    const nameInput = document.getElementById('input-name');
    name = nameInput.value;
    const nameP = document.getElementById('name');
    nameP.innerText = name;
})

// More Event
document.getElementById('btn-mouse').addEventListener('mouseout', function(){
    console.log('Event Trigged');
})

document.getElementById('user-name').addEventListener('keydown', function(event){
    console.log('Your name',event);
})

document.getElementById('user-name').addEventListener('keyup', function(event){
    console.log('Your name',event.target.value);
})

//Git Hub Delete
document.getElementById('input-delete').addEventListener('keyup', function(event){
    const text = event.target.value;
    const btnDelete = document.getElementById('btn-delete');
    if (text==='delete'){
        console.log('Delete type');
        btnDelete.removeAttribute('disabled');
    }
    else{
        console.log('Something else');
        btnDelete.setAttribute('disabled', true);
        
    }
})


//Event Delegate
// const items = document.getElementsByClassName('item');
// for (const item of items){
//     //console.log(item);
//     item.addEventListener('click', function(event){
//         //console.log(event.target.parentNode)
//         event.target.parentNode.removeChild(event.target)
//     })
// }

document.getElementById('item-list').addEventListener('click', function(event){
event.target.parentNode.removeChild(event.target)
})
//add a new item
document.getElementById('btn-add-item').addEventListener('click', function(){
    //console.log('butn clicked')
    //parent to be added to 
    const ol = document.getElementById('item-list');

    // new item
    const li = document.createElement('li');
    li.classList.add('item');
    li.innerText = 'Brand New item added';

    //add the item
    ol.appendChild(li);
})