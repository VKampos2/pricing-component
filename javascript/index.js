const checkBox=getElementById("toggle")
const hiddenPrice=document.querySelectorAll('.price')
const yearllyPrice=document.querySelectorAll('.yearlly-price')

checkBox.addEventListener('click',()=> {hiddenPrice.forEach(el=>{el.classList.toggle('show');});yearPrice.forEach(el.classList.toggle('yearlly-price');});});

