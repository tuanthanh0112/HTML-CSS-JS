let carts = document.querySelectorAll('.add-cart');

let product =[
    {
        name: 'Grey Tshirt',
        tag: 'greyshirt',
        price: 15,
        incart:0
    },
    {
        name: 'Grey Hoddle',
        tag: 'GreyHoddle',
        price: 20,
        incart:0
    },
    {
        name: 'Black Tshirt',
        tag: 'BlackTshirt',
        price: 10,
        incart:0
    },
    {
        name: 'Black Hoddle',
        tag: 'BlackHoddle',
        price: 20,
        incart:0
    },
];

for(let i = 0; i < carts.length; i++){
    carts[i].addEventListener('click', () => {
        cartNumbers(product[i]);
        totalCost(product[i]);
    })
}

function onLoadCartNumber(){
    let productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers){
        document.querySelector('.cart span').textContent = productNumbers
    }
}

function cartNumbers(product){
    console.log("the product clicked is", product);
    let productNumber = localStorage.getItem('cartNumbers');
    console.log(productNumber)
    productNumber = parseInt(productNumber);

    if(productNumber){
        localStorage.setItem('cartNumbers', productNumber + 1);
        document.querySelector('.cart span').textContent = productNumber + 1;
    }else{
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;
    }
    setItems(product);
}

function setItems(){
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    
    if(cartItems != null){
        if(cartItems[product.tag] != null){
            cartItems = {
                ...cartItems,
                [product.tag]:product
            }
        }
        cartItems[product.tag].incart +=1;
    }else{
        product.incart = 1;
        cartItems = {
            [product.tag]:product
    }
   
    }
    localStorage.setItem("productsInCart",JSON.stringify(cartItems));
}

function totalCost(product){
    //console.log("the product price is", product.price);
    let cartCost = localStorage.getItem('totalCost');
    if(cartCost != null){
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost",cartCost + product.price);
    }else{
        localStorage.setItem("totalCost",product.price);
    }
    
}
function displayCarts(){
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productsContainer = document.querySelector(".products");
    console.log(cartItems)
    if(cartItems && productsContainer ){
        productsContainer.innerHTML = '';
        Object.values(cartItems).map( item => {
            productsContainer.innerHTML += 
            `<div class ="product">
                <ion-icon name "close-circle"></ion-icon>
                <img src=".images/${item.tag}.jpg" />
                <span>${item.name}</span>
             </div>
            
            `
        });
    }
}
onLoadCartNumber();