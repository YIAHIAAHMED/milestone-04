document.getElementById('login-btn').addEventListener('click', function () {
    // get the mobile number
    const numberInput = document.getElementById('input-number');
    const contactNumber = numberInput.value;
    console.log(contactNumber);
    // get the pin
    const inputPin = document.getElementById('input-pin');
    const pin = inputPin.value;
    console.log(pin);
    //match pin and number
    if (contactNumber === '01637008537' && pin === '1234') {
        // if true
        alert('login success');
        window.location.assign('homepage.html');
    } else {
        //or false
        alert('login failed');
        return;
    }
});




