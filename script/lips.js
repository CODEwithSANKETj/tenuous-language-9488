let lips_ = JSON.parse(localStorage.getItem('lips')) || [];
const card = document.getElementById('right');
let sorted = []
Display(lips_)
const filter = document.getElementById('sort_price');
filter.addEventListener('change',function(e){
    e.preventDefault();
    sorted = lips_
    if(filter.value === 'price_asc'){
        function compare( a, b ) {
            if ( a.price < b.price ){
              return -1;
            }
            if ( a.price > b.price ){
              return 1;
            }
            return 0;
          }
          sorted.sort( compare );
          Display(sorted)
        }
    if(filter.value ==='price_dsc'){
        function compare( a, b ) {
            if ( a.price > b.price ){
              return -1;
            }
            if ( a.price < b.price ){
              return 1;
            }
            return 0;
          }
          sorted.sort( compare );
          Display(sorted)
    }

})
function Display(data){
    card.innerText = '';
    data.forEach(function(element){
            const div = document.createElement('div');
            const img = document.createElement('img');
            const name = document.createElement('p');
            const shade = document.createElement('h4');
            const price = document.createElement('h3');
            const div2 = document.createElement('div');
            const fev = document.createElement('h3');
            const add = document.createElement('h3');
            img.setAttribute('src',element.img)
            name.innerText = element.name
            shade.innerText = element.shade
           
            price.innerText = element.price
            fev.innerHTML = '&#10084;';
            add.innerHTML = '<i class="fa fa-shopping-cart"></i>';
            div2.append(fev,add)
            div.append(img,name,shade,price,div2)
            card.append(div)
        }
    )

}
