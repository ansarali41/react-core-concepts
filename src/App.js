import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = ['Razzak','Salman','Sakib', 'Bappi','Shovo'];
  const products = [
    { name: 'Photoshop', price: '$90.99' },
    { name: 'Illustrator', price: '$60.99' },
    { name: 'PDF Reader', price: '$6.99' },
    { name: 'Premiere El', price: '$256.99' }
  ]
  const nayokNames = nayoks.map(nayok => nayok)
  console.log(nayokNames);
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a person</p>
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            nayoks.map(nayok =><li>{nayok}</li>)
          }
          {
            products.map(product =><li>{product.name}</li>)
          }
        </ul>
        {
          products.map(pd =><Products product={pd}></Products>)
        }
        <Person></Person>
      </header>
    </div>
  );
}

function Counter(props) {
  const [count,setCount]=useState(10);
  const handleIncrease = ()=>setCount(count+1);
  
  return (
    <div>
      <h1>Count:{count}</h1>
      <button onMouseMove={()=>setCount(count-1)}>Decrease</button>
      <button onClick={()=>setCount(count+1)}>Increase</button>
    </div>

  )
}

function Users(props) {
  const [users,setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));//user a set hoye gelo so, users=data;
  },[])
  return (
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      {
        console.log(users)
      }
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}
function Products(props) {
  const productStyle = {
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height: '200px',
    width: '200px',
    float: 'left'
  }
  const { name, price } = props.product;
  console.log(name, price);
  return (
    <div style={productStyle}>
      <h3>{name}</h3>
      <h5>{price}</h5>
      <button>Buy now</button>
    </div>
  )
}

function Person(props) {
  return (
    <div style={{ border: '2px solid gold', width: '400px' }}>
      <h3>My Name: {props.name}</h3>
      <p>My Profession: {props.job}</p>
    </div>
  )

}

export default App;
