import { Grid } from '@material-ui/core'
import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Star from './Star'
import axios from 'axios';
import CartContext from './Context/CartContext';



const ItemsList = ({ id, image, title, price, rating }) => {
	const [productDetail, setProductDetails] = useState({});
	const [isProductPresent, setIsProductPresent] = useState(true);
	const [counter, setCounter] = useState(0);
	const [adItem, setAdtion] = useState([]);
	const [cart, setCart] = useState([]);
	const [arrayTotal] = useState([]);

	const navigate = useNavigate();

	useEffect(() => {
		axios
			.get(`https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products/${id}`)
			.then((response) => {
				if (response.status === 200) {
					setProductDetails(response.data);
					// console.log(response.data);
				} else {
					setIsProductPresent(false);
					setProductDetails(null);
				}
			})
			.catch(() => {
				setIsProductPresent(false);
				setProductDetails(null);
			});

	}, [id]);



	const wrapperFunction = () => {
		subTotal();
		updateCartVal();
		addToCart();


	}

	const addToCart = () => {
		if (localStorage.getItem("data") == null) {
			adItem.push(productDetail)
			localStorage.setItem("data", JSON.stringify(adItem));
		}
		else {
			const itemArray = JSON.parse(localStorage.getItem("data"))
			itemArray.push(productDetail);
			localStorage.setItem("data", JSON.stringify(itemArray));
		}
	}

	const subTotal = () => {

		if (localStorage.getItem("data3") == null) {
			arrayTotal.push(price);
			localStorage.setItem("data3", JSON.stringify(arrayTotal));
		}
		else {
			const itemArray = JSON.parse(localStorage.getItem("data3"))
			itemArray.push(price);
			localStorage.setItem("data3", JSON.stringify(itemArray));
		}
	}

	const updateCartVal = () => {

		if (localStorage.getItem("data2") == null) {

			setCounter(prev => prev + 1);
			cart.push(counter);
			localStorage.setItem("data2", JSON.stringify(cart));
		}
		else {
			setCounter(prev => prev + 1)

			const itemArray = JSON.parse(localStorage.getItem("data2"))
			console.log(itemArray)

			itemArray.push(counter);
			localStorage.setItem("data2", JSON.stringify(itemArray));
		}
	}

	const updateProduct=()=>{
		navigate(`/items/${id}`)
	
	}

	return (
		<>

			<Grid item xs={12} container spacing={2} style={{
				display: "grid",
				alignItems: "center",
				justifyItems: "center", boxShadow: "10px 10px 5px grey", borderRadius: "10px"
			}}>
				<Grid item lg={12} xs={12} sm={6}><img className='productsImg' src={image} onClick={updateProduct} /></Grid>
				<Grid item lg={12} xs={12} sm={6}><div className='productTitle'>{title}</div></Grid>
				<Star stars={rating} />
				<Grid item lg={12} xs={12} sm={6}><div className='productPrice'>Price:-${price}</div></Grid>
				<button id="btn" onClick={wrapperFunction}>Add To Cart</button>
			</Grid>


		</>
	)
}
export default ItemsList;
