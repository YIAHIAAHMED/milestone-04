//console.log('Machine Added');
// machine id -> input value
function getValueFromInput(id){
    const input = document.getElementById(id);
    const value = input.value;
    console.log(id, value);
    return value;
}
// machine -> balance
function getBalance(){
    const balanceElement = document.getElementById('balance');
    const balace = balanceElement.innerText;
    console.log('Current Balance', Number(balace));
    return Number(balace);
}

// machine -> set Balance
function setBalance (value){
    const balanceElement = document.getElementById('balance');
    balanceElement.innerText = value;
}