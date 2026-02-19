document.getElementById('login-btn').addEventListener('click', function(){
    //1. get the mobile number input
    const numberInput = document.getElementById('input-number');
    const contactNumber = numberInput.value;
    console.log(contactNumber);
    //2. get pin input
    const inputPin = document.getElementById('input-pin');
    const pin = inputPin.value;
    console.log(pin);
    //3. match pib & mobile number
    if (contactNumber=='01314235850' && pin == '1234' ) {
         //3.1 true:>> alert> Homepage
         alert('login Success');
        //  window.location.replace('/home.html')
        window.location.assign("/home.html");
    }else {
        alert('login Failed');
        return;
    }
   
    //3.2 false:>> alert> return

});