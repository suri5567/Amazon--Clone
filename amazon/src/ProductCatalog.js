
import React, { useState, useEffect, useLayoutEffect } from 'react';
import ItemsList from './ItemsList'
import axios from 'axios'
import PaginationComp from './PaginationComp'
import ProductPage from './ProductPage'


const ProductCatalog = (props) => {
	const [data, setData] = useState([]);
	const [searchResult, setSearchResult] = useState([]);


	useEffect(() => {
		const data2 = axios.get("https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products")
			.then((res) => {
				// console.log(res.data)
				setData(res.data);

			})
	}, [])



	useEffect(() => {

		const ans = data.filter((item1) => {
			return item1.title.toLowerCase().includes(props.valu.toLowerCase())

		})
		console.log(ans)
		setSearchResult(ans);

	}, [props.valu])




	return (
		<>
			{searchResult.length != 0 ?
				<div className="main">
					{
						searchResult.map((item1) =>
							<ItemsList upadteCounter={props.upadteCounter} key={item1.id} id={item1.id} image={item1.image} title={item1.title} price={item1.price} count={item1.rating.count} rating={item1.rating.rate} />
						)}
				</div>
				:

				<div className="main">
					{data.map((item2) =>
						<ItemsList upadteCounter={props.upadteCounter}  key={item2.id} id={item2.id} image={item2.image} title={item2.title} price={item2.price} count={item2.rating.count}  rating={item2.rating.rate} />
					)}
				</div>


			}
			
			
		</>


	)
}

export default ProductCatalog;



