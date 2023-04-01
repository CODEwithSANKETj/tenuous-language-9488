let cart_data = JSON.parse(localStorage.getItem('cart_data')) || []
const items = document.getElementById('items');
const total = document.getElementById('total');
const final = document.getElementById('final');
var x = document.getElementById('checkout');
function Displaybuy(){
    
    console.log('In display Function');
    x.style = 'display: flex;'
}
Display(cart_data)
function Display(data){
    total.innerText = 0
    final.innerHTML = 0
    let amout = 0;
    items.innerText = '';
    console.log(data.length);
    x.style = 'display: none;'
    if(data.length!==0){
        Displaybuy()
    }
    for(let i=0;i<data.length;i++){
            const div = document.createElement('div');
            const img = document.createElement('img');
            const name = document.createElement('p');
            const price = document.createElement('h3');
            const incr = document.createElement('button');
            const quantity = document.createElement('span');
            const decr = document.createElement('button');
            const delete_ = document.createElement('button');
            const below = document.createElement('div')
            below.append(incr,quantity,decr,delete_)
            img.setAttribute('src',data[i].img)
            name.innerText = data[i].name
            price.innerText = data[i].price
            amout+=data[i].price*data[i].value
            
            delete_.innerText = 'Delete'
            decr.innerText = '-';
            incr.innerText = '+';
            quantity.innerText = data[i].value;
            incr.addEventListener('click',function(e){
                e.preventDefault();
                data[i].value +=1
                localStorage.setItem('cart_data',JSON.stringify(data))
                Display(data)
            })
            decr.addEventListener('click',function(e){
                e.preventDefault();
                if(data[i].value >1){
                    data[i].value-=1;
                    localStorage.setItem('cart_data',JSON.stringify(data))
                    Display(data)
                }

            })
            delete_.addEventListener('click',function(){
              
                data.splice(i,1)
                localStorage.setItem('cart_data',JSON.stringify(data));
                Display(data)
            })
            div.append(img,name,price,below)
            items.append(div)
        }
    
        total.innerHTML = amout
        final.innerText = amout
        localStorage.setItem('checkout',JSON.stringify(amout))
       
}