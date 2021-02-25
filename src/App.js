
import react from 'react'
import {  Route, Link } from 'react-router-dom'
import './App.css';
import Button from "@material-ui/core/Button"

import React, { useState} from 'react'




const PAGE_PRODUCTS = 'Product';
const PAGE_CART = 'cart';

function App() {
  const [page, setPage] = useState(PAGE_PRODUCTS);
  const [cart, setCart] = useState([]);
  const [products] = useState([
    {
    name: 'Camera',
    cost: '30.00$ per month',
    image: 'https://www.bing.com/th?id=OP.RxnhiO09Ap0N5A474C474&o=5&pid=21.1&bw=0&bc=FFFFFF&w=140&h=140&qlt=100',
    },
    {
      name: 'Laptop',
    cost: '72.00$ per month',
    image: 'https://th.bing.com/th?id=OP.3QVjEnM3%2fi7SYQ474C474&w=140&h=140&dpr=1.25&pid=21.1',
    },
    {
      name: 'Soundbar',
      cost: '20.00$ per month',
      image: 'https://www.bing.com/th?id=OP.kOTe127CdwL37Q474C474&o=5&pid=21.1&bw=0&bc=FFFFFF&w=140&h=140&qlt=100',
      },
      {
        name: 'Xbox X series',
        cost: '83.00$ per month',
        image: 'https://www.bing.com/th?id=OP.bUAyKnk0IZ773Q474C474&o=5&pid=21.1&bw=0&bc=FFFFFF&w=140&h=140&qlt=100',
        },
        {
          name: 'Playstation 5',
          cost: '82.00$ per month',
          image: 'https://www.bing.com/th?id=OP.S3B7g0SHYmV2yQ474C474&o=5&pid=21.1&bw=0&bc=FFFFFF&w=140&h=140&qlt=100',
          },
          {
            name: 'Television',
            cost: '67.00$ per month',
            image: 'https://www.bing.com/th?id=OP.ilcinmVdxNubKg474C474&o=5&pid=21.1&bw=0&bc=FFFFFF&w=136&h=136&qlt=100',
            },
  ])

  const addToCart = (product) => {
    setCart([...cart,{ ...product}])
  }

  const removeFromCart = (productToRemove) => {
    setCart(cart.filter(product => product !== productToRemove)
    )

  }

  const navigateTo = (nextPage) => {
    setPage(nextPage);
  }

   const renderProducts = (product) => (
    <>
    <h1>Use my tech Stuff</h1>
    <div className="products">
   { products.map((product, idx) => (
      <div className="product" key={idx}>
      <h3>{product.name}</h3>
      <h4>{product.cost}</h4>
      <img src={product.image} alt={product.name}/>
      <Button variant='contained' color='primary' onClick={()=> addToCart(product)}>Add to cart</Button>
    </div>
   ))}
 </div>
 </>
   );


   const renderCart = () => (
    <>
    <h1>Cart</h1>
    <div className="products">
   { cart.map((product, idx) => (
      <div className="product" key={idx}>
      <h3>{product.name}</h3>
      <h4>{product.cost}</h4>
      <img src={product.image} alt={product.name}/>
      <Button variant='contained' color='primary' onClick={()=> removeFromCart(product)}>Remove</Button>
    </div>
   ))}
 </div>
 </>
   )


  return (
    <div className="App">
      <header>
        <Button variant='contained' color='primary' onClick={() => navigateTo(PAGE_CART)}>Go to Cart ({cart.length})</Button>
        <Button variant='contained' color='primary' onClick={() => navigateTo(PAGE_PRODUCTS)}>View Products </Button>
      </header>
      {page === PAGE_PRODUCTS && renderProducts()}
      {page === PAGE_CART && renderCart()}
    
   </div>

   
  
  );
}

export default App;
