document.getElementById('add-money-btn').addEventListener('click', function(){
   // console.log('add')
   //1.  bank account get
   const bankAccount = getValueFromInput('add-money-bank');
   if (bankAccount==='Select a Bank') {
    alert('please select a bank')
    return;
   }
   //2. get bank account number
   const account = getValueFromInput('add-money-number');
   if (account.length!==11) {
    alert('invalid acc no');
    return;
   }
   //3. get ammount
   const ammount = getValueFromInput('add-money-amount');
   const currentBalance = getBalance();
   const newBalance = currentBalance + Number(ammount);

   const pin = getValueFromInput('add-money-pin');
   if (pin ==='1234') {
    alert(`add money Successful 
        ${bankAccount} 
        at ${new Date()}`);
    setBalance(newBalance);
    //1.History container ke shore niya asbo

    const history = document.getElementById('history-container');
    // 2. new div create korbo

    const newHistory = document.createElement('div');
    //3. new div e innerHTML add korbo
    newHistory.innerHTML = `
    <div class="transaction-card p-5 bg-base-100">
        add money Successful 
        ${bankAccount} , acc-no ${account} at ${new Date()}
    </div>
    `;
    //4. history container e new Dev append korbo
    history.append(newHistory);


   }else{
    alert('Invalid Pin');
    return;
   }
  
});