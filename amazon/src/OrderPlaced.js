import React from "react";
import { Navigate, useNavigate } from "react-router";
import './OrderPlacedPage.css';

const OrderGreeting = ({ name }) => {
  return (
	<>
    <div className="order-greeting-container">
      <h1 className="order-greeting-header">Thank You for Your Order, {name}!</h1>
      <p className="order-greeting-text">Your order has been placed and is being processed. We will notify you when your order has shipped.</p>
    </div>
	<div className="containIImage" >
	<img id="deleiveryImg" src="https://clipground.com/images/deliveroo-clipart-6.jpg" />
	<img  id="imgtap" src="https://cdn0.iconfinder.com/data/icons/shopping-e-commerce-black-blue-version/33/package_return-512.png" /> 
	</div>
	</>
  );
};

export default OrderGreeting;
