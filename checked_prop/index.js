const myCheckbox = document.getElementById('myCheckbox');
const myBtn = document.getElementById('myBtn');
const visaBtn = document.getElementById('visaBtn');
const mastercardBtn = document.getElementById('mastercardBtn');
const paypalBtn = document.getElementById('paypalBtn');
const subResult = document.getElementById('subResult');
const paymentResult = document.getElementById('paymentResult');

myBtn.onclick = function () {
    if(myCheckbox.checked){
       subResult.textContent = 'You are Subscribed';
    }
    else{
        subResult.textContent = 'You are not Subscribed';
    }
    if(visaBtn.checked){
        paymentResult.textContent = 'You have selected Visa';
    }
    else if (mastercardBtn.checked){
        paymentResult.textContent = 'You have selected Mastercard';
    }
    else if (paypalBtn.checked){
        paymentResult.textContent = 'You have selected Paypal';
    }
    else{
        paymentResult.textContent = 'Please select a payment method';
    }
}