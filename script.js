


fetch('items.json')
.then ((response) => response.json())
.then ((items=>items.forEach((items,i)=>{
  list.innerHTML += `<li>
      <div> ${items.name}</div>
      <div>Precio: $${items.price}</div>
      <image src="${items.image}" />
      <input type="number" placeholder="Cantidad" onchange='inputChange(${i}, "${items.name}", "${items.price}", "${items.image}")'/>
      <button>Agregar al carrito</button>
  </li>`
}) ))



let cart = [] 
let list = document.getElementById('lista')
let ClearCart = document.getElementById('ClearCart')

document.addEventListener('DOMContentLoaded',() =>
{
  cart=JSON.parse(localStorage.getItem('carrito'))  
  renderCart()
})



ClearCart.addEventListener('click', ()=> { 
cart.length=[]
renderCart()
saveCart()
})





  

function renderCart() 
{ 
  let cartItems = document.getElementById('carrito')
  let total = 0; 
  cartItems.innerHTML = ''
  cart.forEach((item)=>
  {
    total+= item.price * item.quantity
    cartItems.innerHTML += `<li>
    <div>${item.name}</div>
    <div>Cantidad: ${item.quantity}</div>
    <image src="${item.image}" />
    </li>`
  })
  document.getElementById('total').innerHTML = '$' +total
}


function inputChange(i, name, price,image) {
    let listItem = document.querySelectorAll('li')[i]
    let input = listItem.querySelector('input')
    let button = listItem.querySelector('button')

    if(input.value <1)
 {
  input.value =1
  swal(" ", "Debes agregar al menos 1", "error");
 }

else
{

  button.onclick = function(){
  cart.push({
  quantity: input.value,
  name: name,
  price: price,
  image: image
})        
  renderCart()
  saveCart()
}}}


function saveCart()
{
  localStorage.setItem(`carrito`, JSON.stringify(cart))
} 

