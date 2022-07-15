const checkBox=document.getElementById("toggle")
const hiddenPrice=document.querySelectorAll('.price')
const yearlyPrice=document.querySelectorAll('.yearly-price')

checkBox.addEventListener('click',()=>
{hiddenPrice.forEach(el=> {el.classList.toggle('show');
});
yearlyPrice.forEach(el => {el.classList.toggle('yearly-price');
});
});

