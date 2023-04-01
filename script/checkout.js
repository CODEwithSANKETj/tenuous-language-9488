let price = JSON.parse(localStorage.getItem('checkout'));
const amount  = document.getElementById('amount');
amount.innerText = '₹'+''+price
const show = document.getElementById('show');
let random = 0;
function Submit(){
    random = Math.floor(100000 + Math.random() * 900000);
    console.log(random);
    alert('OTP has been sent on your console you have 10 seconds to submit OTP');
    Display_show();
}
function Display_show(){
    show.style = 'display: flex;';
    const myTimeout = setTimeout(chkstatus, 10000);
    
    function chkstatus(){
        const input = document.getElementById('number');
        if(+input.value===random){
            alert('Transation Successfull')
            Success();
        }
        else{
            alert('Invalid OTP');
            Fail();
        }
    }
}


function Success(){
    let temp = []
    const Success = document.getElementById('success');
    Success.style =  'display: flex;';
    localStorage.setItem('cart_data',JSON.stringify(temp))   
}
function Fail(){
    const Fail = document.getElementById('fail');
    Fail.style =  'display: flex;';   
}