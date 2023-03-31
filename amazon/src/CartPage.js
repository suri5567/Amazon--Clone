
import './App.css';
import {
	MDBBtn,
	MDBCard,
	MDBCardBody,
	MDBCardImage,
	MDBCol,
	MDBContainer,
	MDBIcon,
	MDBInput,
	MDBRow,
	MDBTypography,
} from "mdb-react-ui-kit";

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import NavBar from './NavBar';

export default function CartPage() {
	const [cartItems, setCartItems] = useState([]);
	// cont [cartValue, setCartValue] = useState(0);
	const [cartTotal, setCartTotal] = useState(0);
	const navigate = useNavigate();


	const wrapperFunction = (id, price, index) => {
		
		removeCartItem(id);
		updateCartIcon(index);
		upadteCartTotal(index);

	};

	const upadteCartTotal=(index)=>{
     if(localStorage.getItem("data3")!=null){
		const ansData = JSON.parse(localStorage.getItem("data3"))
		console.log(ansData)
		 ansData.splice(index, 1);
		 const finalTotal = ansData.reduce((prev, cur) => {
			return prev + cur;
		}, 0)
	
		setCartTotal(Number(finalTotal).toFixed( 2 ));

		localStorage.setItem('data3', JSON.stringify(ansData))

	}
}

	const updateCartIcon=(index)=>{
		if(localStorage.getItem("data2")!=null){
			const ansData = JSON.parse(localStorage.getItem("data2"))
			 ansData.splice(index, 1);
			//  setCartValue(ansData.length);
			 localStorage.setItem("data2", JSON.stringify(ansData))
	}
}

	const removeCartItem=(id)=>{
		const newCart = cartItems.filter((item) => {
			return item.id != id

		})
		setCartItems(newCart);
		localStorage.setItem('data', JSON.stringify(newCart));
	}

	useEffect(() => {
		if (localStorage.getItem("data") != null) {
			setCartItems(JSON.parse(localStorage.getItem("data")))
		}

	}, [])

	useEffect(() => {
		if (localStorage.getItem("data3") != null) {
			const arr = JSON.parse(localStorage.getItem("data3"));
			const finalTotal = arr.reduce((prev, cur) => {
				return prev + cur;
			}, 0)
			// console.log(finalTotal)
			setCartTotal(Number(finalTotal).toFixed( 2 ));
		}

	}, [])

	const finalOrderMessage=()=>{
		if(cartTotal<1){
			alert("please add items in your cart")
		}
		else{
			navigate("/orderPlaced");
		}
	}

	return (
		
		<section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
			<NavBar />
			<MDBContainer className="py-5 h-100">
				<MDBRow className="justify-content-center align-items-center h-100">
					<MDBCol>
						<MDBCard>
							<MDBCardBody className="p-4">
								<MDBRow>
									<MDBCol lg="7">
										<MDBTypography tag="h5">
											<MDBIcon fas icon="arrow-circle-left" style={{ fontSize: "35px" }} onClick={() => navigate("/")} />{" "}Continue Shopping
										</MDBTypography>

										<hr />

										<div className="d-flex justify-content-between align-items-center mb-4">
											<div style={{ textAlign: "center" }}>
												<p className="mb-1" style={{ fontSize: "20px", fontWeight: "bolder" }}>Shopping cart</p>

											</div>
											<div>
												<p>
													<span className="text-muted">Sort by:</span>
													<a href="#!" className="text-body">
														price
														<MDBIcon fas icon="angle-down mt-1" />
													</a>
												</p>
											</div>
										</div>

										<MDBCard className="mb-3">
											<MDBCardBody>{cartItems.map((item, index) =>
												<div className="d-flex justify-content-between">
													<div className="d-flex flex-row align-items-center">

														<div>
															<MDBCardImage
																src={item.image}
																fluid className="rounded-3" style={{ width: "65px" }}
																alt="Shopping item" />
														</div>
														<div className="ms-3">
															<MDBTypography tag="h5">
																{item.title}
															</MDBTypography>

														</div>
													</div>
													<div className="d-flex flex-row align-items-center">
														<div style={{ width: "80px" }}>
															<MDBTypography tag="h5" className="mb-0">
																${" "}{item.price}
															</MDBTypography>
														</div>
														<a href="#!" style={{ color: "#cecece" }}>
															<MDBIcon fas icon="trash-alt" style={{ color: "red" }} onClick={()=> wrapperFunction(item.id, item.price, index)} />
														</a>
													</div>

												</div>)}

											</MDBCardBody>
										</MDBCard>
									</MDBCol>

									<MDBCol lg="5">
										<MDBCard className="bg-primary text-white rounded-3">
											<MDBCardBody>
												<div className="d-flex justify-content-between align-items-center mb-4">
													<MDBTypography tag="h5" className="mb-0">
														Card details
													</MDBTypography>
												</div>

												<p className="small">Card type</p>
												<a href="#!" type="submit" className="text-white">
													<MDBIcon fab icon="cc-mastercard fa-2x me-2" />
												</a>
												<a href="#!" type="submit" className="text-white">
													<MDBIcon fab icon="cc-visa fa-2x me-2" />
												</a>
												<a href="#!" type="submit" className="text-white">
													<MDBIcon fab icon="cc-amex fa-2x me-2" />
												</a>
												<a href="#!" type="submit" className="text-white">
													<MDBIcon fab icon="cc-paypal fa-2x me-2" />
												</a>

												<form className="mt-4">
													<MDBInput className="mb-4" label="Cardholder's Name" type="text" size="lg"
														placeholder="Cardholder's Name" contrast />

													<MDBInput className="mb-4" label="Card Number" type="text" size="lg"
														minLength="19" maxLength="19" placeholder="1234 5678 9012 3457" contrast />

													<MDBRow className="mb-4">
														<MDBCol md="6">
															<MDBInput className="mb-4" label="Expiration" type="text" size="lg"
																minLength="7" maxLength="7" placeholder="MM/YYYY" contrast />
														</MDBCol>
														<MDBCol md="6">
															<MDBInput className="mb-4" label="Cvv" type="text" size="lg" minLength="3"
																maxLength="3" placeholder="&#9679;&#9679;&#9679;" contrast />
														</MDBCol>
													</MDBRow>
												</form>

												<hr />

												<div className="d-flex justify-content-between">
													<p className="mb-2">Total</p>
													<p className="mb-2">${" "}{cartTotal}</p>
												</div>

												<MDBBtn color="info" block size="lg">
													<div className="d-flex justify-content-between">
														<span>${" "}{cartTotal}</span>
														<span onClick={() =>finalOrderMessage() }>
															Checkout{" "}
															<i className="fas fa-long-arrow-alt-right ms-2"></i>
														</span>
													</div>
												</MDBBtn>
											</MDBCardBody>
										</MDBCard>
									</MDBCol>
								</MDBRow>
							</MDBCardBody>
						</MDBCard>
					</MDBCol>
				</MDBRow>
			</MDBContainer>
		</section>
	);
}

