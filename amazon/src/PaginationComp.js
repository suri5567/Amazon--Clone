import  ReactPaginate from 'react-paginate'
import ItemsList from './ItemsList'
const PaginationComp = ({data}) => {

	const handlePageClick =(data)=>{
		
	}

	return (
		<>
			<ReactPaginate
				previousLabel={'previous'}
				nextLabel={'next'} pageCount={10}
				onPageChange={handlePageClick}
				containerClassName={'pagination justify-content-center'}
				pageClassName={'page-item'}
				pageLinkClassName={'page-link'}
				previousClassName={'page-item'}
				previousLinkClassName={'page-link'}
				nextClassName={'page-item'}
				nextLinkClassName={'page-link'}
				activeClassName={'active'} />
		</>
	)
}

export default PaginationComp;