import React, { useEffect, useState } from 'react';
import PageviewIcon from '@mui/icons-material/Pageview';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { fontSize } from '@mui/system';
import ProductCatalog from './ProductCatalog'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useNavigate } from 'react-router';
import './App.css'


const NavBar = (props) => {
	const [search, setSearch] = useState('');
	const [counter, setCounter] = useState(0);
	const navigate = useNavigate();



	const setSearchValue = (e) => {
		setSearch(e.target.value);
		props.myFunck(search);
	}
	// geting counter data from local storage

	useEffect(() => {
		if (localStorage.getItem("data2") != null) {
			const gettedItems = JSON.parse(localStorage.getItem("data2"));
			setCounter(gettedItems.length)
		
		}
	},[counter])

	

	// forceUpdate();

	return (
		<>
			<div className="nav">
				<div>
					<img src="https://pngimg.com/uploads/amazon/small/amazon_PNG25.png" />
				</div>
				<div className='inpuASerach'>
					<input type="text" id="search" placeholder="Enter the item to search...." value={search} onChange={setSearchValue} />
					<div className="searchIcon"><PageviewIcon style={{ fontSize: "47px" }} /></div>
				</div>
				<div className="secondNavBar">
					<div className="singnIn" id="signIn" onClick={()=>navigate("/login")}><div className="navFont"></div >Sign In</div>
					<div className="orders"><div className="navFont">Returns &</div>Orders</div>
					<div className="PrimeVedio"><div className="navFont">Your</div>prime</div>
					<AddShoppingCartIcon style={{ fontSize: "2.5rem", paddingRight:"2px" }} onClick={() => navigate("/shop")} /><span id="spanCount">{counter}</span>
				</div>

			</div>

		</>
	)
}
export default NavBar;