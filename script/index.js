function changeDefOut(e){
    e.submenu1.classList.toggle('openit');

}
function changeDefOver(e){
    
    e.submenu1.classList.toggle('openit');
}
let submenu1 = document.getElementById('lips');
submenu1.addEventListener('mouseover', changeDefOver);
submenu1.addEventListener('mouseout', changeDefOut)
let submenu2  = document.getElementById('submenu2');
const add2 = document.getElementById('KAJAL');
const li2 = document.createElement('li');
const add = document.getElementById('Lipstick');
const li = document.createElement('li');
li.innerText = 'This one is added'
add.append(li)
li2.innerText='hey you have done it'
add2.append(li2)
