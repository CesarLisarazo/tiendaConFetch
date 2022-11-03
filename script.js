fetch('items.json')
.then ((response) => response.json())
.then ((items=> console.log(items)))
//trato de ver en consola el contenido de "items" pero me muestra un error, no pasa lo mismo que en el video de la clase, me impide cargar el archivo .json y no puedo hacer el forEach en la linea 26


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


function renderizar (){
  items.forEach((item)=>{
      list.innerHTML += `<div>
          <div> ${item.name}</div>
          <div>Precio: $${item.price}</div>
          <image src="${item.image}" />
          <input type="number" placeholder="Cantidad" onchange='inputChange(${i}, "${item.name}", "${item.price}", "${item.image}")'/>
          <button>Agregar al carrito</button>
      </div>`
  })
  }

  renderizar()

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


//aqui uso .fetch para ver si lo estoy escribiendo correctamente con resultados positivos 
fetch('https://jsonplaceholder.typicode.com/posts')
.then ((response) => response.json())
.then ((info=>console.log( info)))


//aqui trato de cargar el archivo .jason local pero la consola dice que el permiso está bloqueado politicas CORS 
fetch('items.json')
.then ((response) => response.json())
.then ((data=>console.log(data)))


