import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import NavBar from './NavBar';
import Banner from './SliderBanner'
import ProductCatalog from './ProductCatalog'
import CartContext from './Context/CartContext';




function App() {
	const [cart, setCart] = useState([]);
	const [loading, setLoading] = useState(true);
	const [val, setVal] = useState();
	const [counter, setCounter] = useState(0);
	

	const valuesetting = (d) => {
		setVal(d);

	}

	const upadteCounter = (data)=>{
        setCounter(data);
	}

	
	return (

		<>
          <CartContext.Provider value={{cart, setCart}}>			
			<NavBar loading={loading} setLoading={setLoading} myFunck={valuesetting} counter={counter} />
			<Banner />
			<ProductCatalog valu={val} upadteCounter={upadteCounter} />
			</CartContext.Provider>

		</>

	);



}

export default App;
