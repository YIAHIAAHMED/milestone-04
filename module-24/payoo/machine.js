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

//machine id > hide all > show id
function showOnly(id){
   const addMoney = document.getElementById('add-money');
   const cashout = document.getElementById('cashout');
   const history = document.getElementById('history');
  // console.log(`add Money- ${addMoney}, cash out ${cashout}`);

  // sobai ke hide kore daw
  addMoney.classList.add('hidden');
  cashout.classList.add('hidden');
  history.classList.add('hidden');

  // id wala element ke show koro
  const selected = document.getElementById(id);
  selected.classList.remove('hidden');
}