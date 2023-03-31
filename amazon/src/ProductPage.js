import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import NavBar from "./NavBar";
import Star from './Star'
import './App.css'
import AddCircleSharpIcon from '@mui/icons-material/AddCircleSharp';
import RemoveCircleSharpIcon from '@mui/icons-material/RemoveCircleSharp';
import { useNavigate } from "react-router-dom";
import { LevelContext } from "./LvelContext";
import CartPage from './CartPage'

export default function ProductPage({price}) {
	const navigate = useNavigate();
	const [count, setCount] = useState(0);
	const { id } = useParams();
	const [productDetail, setProductDetails] = useState(null);
	const [isProductPresent, setIsProductPresent] = useState(true);
	const [arrayTotal] = useState([]);
	const [cart, setCart] = useState([]);
	const [adItem, setAdtion] = useState([]);

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

	function handleIncrement() {
		setCount(prev=>prev + 1);
	}

	function handleDecrement() {
		setCount(prev=>prev-1);
	}

	const wrapperFunction = () => {
		subTotal(productDetail.price);
		secondfunck();
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



	const subTotal = (price) => {

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

	const secondfunck = () => {

		if (localStorage.getItem("data2") == null) {

			setCount(prev => prev + 1);
			cart.push(count);
			localStorage.setItem("data2", JSON.stringify(cart));
		}
		else {
			setCount(prev => prev + 1)

			const itemArray = JSON.parse(localStorage.getItem("data2"))
			console.log(itemArray)

			itemArray.push(count);
			localStorage.setItem("data2", JSON.stringify(itemArray));
		}
	}





	if (productDetail) {
		return (

			<>

				<NavBar />
				<div class="product-container">
					<div class="product-image">
						<img src={productDetail.image} alt="Product Image" />
					</div>
					<div class="product-details">

						<h1>{productDetail.title}</h1>
						<Star stars={productDetail.rating.rate} />


						<p>{productDetail.description}</p>

						<p id="price">Price:- ${productDetail.price}</p>
						{/* <div className="incrementBtn">
							<div id="Qty">Quantity</div>
							<AddCircleSharpIcon className="increment" onClick={handleIncrement} />
							<div id="count">{count}</div>
							<RemoveCircleSharpIcon className="decrement" onClick={handleDecrement} />

						</div> */}
						<button onClick={()=>wrapperFunction(price)}>Add to Cart</button>
						<button onClick={() => navigate("/shop")}>Buy Now</button>
					</div>
				</div>

			</>



		);
	} else {
		if (isProductPresent) {
			return "loading";
		} else {
			return "no such product found";
		}
	}

}
