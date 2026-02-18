// Page Title change by button

document.getElementById('btn-update-title').addEventListener('mouseout', function(){
    const pageTitle = document.getElementById('page-title');
    pageTitle.innerText = 'Yiahia Ahmed'
})

// Login change by button

document.getElementById('btn-login').addEventListener('click', function(){
    const userInfo = document.getElementById('user-info');
    userInfo.innerText = 'User Login Successfully';
})

document.getElementById('btn-update').addEventListener('click', function(){
    const inputName = document.getElementById('input-name');
    inputName.value = name;
    const nameP = document.getElementById('name');
    nameP.innerText = name;
})


// Mainly Keyboard press abcd... dekha

// document.getElementById('btn-mouse').addEventListener('keyup', function(event){
//     const userName = document.getElementById('user-name');
//     // userName = event.target.value;
//     console.log('User Name Write', event.target.value);
// })

document.getElementById('user-name').addEventListener('keyup', function(event){
    const userName = event.target.value;
    console.log('User Name Write', userName);
})


// github Delete 
document.getElementById('input-delete').addEventListener('keyup', function(event){
    const text = event.target.value;
    const btnDelete = document.getElementById('btn-delete');
    if (text === 'delete') {
        console.log('delete Typed');
        btnDelete.removeAttribute('disabled');
    }
    else{
        console.log('Something else');
        btnDelete.setAttribute('disabled',true);
    }
})

//practice
