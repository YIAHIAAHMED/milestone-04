document.getElementById("cashout-btn").addEventListener('click', function(){
    // 1. get agent number
    const cashoutNumber = getValueFromInput('cashout-number');
    if (cashoutNumber.length !==11) {
        alert('Invalid Agent Number');
        return;
    }
    //console.log(cashoutNumber);
    //2. get the cashout amount , validate , convert to number
    const cashoutAmount = getValueFromInput('cashout-amount');
    // 3. get the current balance 
     
    const currentBalance = getBalance();

    //4. calculate the balace
    const newBalance = currentBalance - Number(cashoutAmount);
    console.log(newBalance);

        if (newBalance < 0) {
        alert('Invalid Amount');
        return;
    }

    // get the pin and verify
    const pin = getValueFromInput('cashout-pin');
     if (pin === '1234') {
        // true: show alert > set balance
        alert('Cashout Successful');
       setBalance(newBalance);

    } else {
        //false: show an error alert > return
        alert('invalid pin');
        return;
    }
});



// document.getElementById('cashout-btn').addEventListener('click', function () {
//     // get agent number
//     const cashoutNumberInput = document.getElementById('cashout-number');
//     const cashoutNumber = cashoutNumberInput.value;
//     console.log(cashoutNumber);
//     if (cashoutNumber.length !==11) {
//         alert('Invalid Agent Number');
//         return;
//     }
//     //get the amount , validate , convert to number
//     const cashoutAmountInput = document.getElementById('cashout-amount');
//     const cashoutAmount = cashoutAmountInput.value;
//     console.log(cashoutAmount);
//     //get the current balance , validate , convert to number
//     const balanceElement = document.getElementById('balance');
//     const balance = balanceElement.innerText;
//     console.log(balance);
//     // calculate new balance 
//     const newBalance = Number(balance) - Number(cashoutAmount);

//     if (newBalance < 0) {
//         alert('Invalid Amount');
//         return;
//     }

//     // get the pin and verify
//     const cashoutPinInput = document.getElementById('cashout-pin');
//     const pin = cashoutPinInput.value;
//     if (pin === '1234') {
//         // true: show alert > set balance
//         alert('Cashout Successful');
//         console.log('New Balance', newBalance);
//         balanceElement.innerText = newBalance;

//     } else {
//         //false: show an error alert > return
//         alert('invalid pin');
//         return;
//     }


// })