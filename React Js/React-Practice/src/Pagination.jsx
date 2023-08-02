import React, { useEffect, useState } from "react";
import './pagination.css'

const Pagination = () => {

  const [prodata, setProdata] = useState([])
  const [page, setPage] = useState(1)
  const [totalpages, setTotalPages] = useState(0)

  const products = async () => {
    // from front-end side we use this
    // const res = await fetch('https://dummyjson.com/products?limit=100)
    
    // from back-end side we use this
    const res = await fetch(`https://dummyjson.com/products?limit=10&skip=${page * 10 - 10}`)
    const data = await res.json();


    if (data && data.products) {
      setProdata(data.products)
      setTotalPages(data.total/10)
    }
    console.log(data.products);
  }

  useEffect(() => {
    products()
  }, [page])

  const pageHandle = (selectedPage) => {
    if (selectedPage >= 1 && selectedPage <= totalpages && selectedPage !== page)
      setPage(selectedPage)
  }

  return (
    <>
    <h1>Welcome To Pagination</h1>
      {
        totalpages > 0 && <div className="products">
          {
            // prodata.slice(page * 10 - 10, page * 10).map((curElem,) => {
            prodata.map((curElem,) => {
              return <span key={curElem.id} className="products__single">
                <img src={curElem.thumbnail} alt={curElem.title} />
                <span>{curElem.title}</span>
              </span>

            })
          }
        </div>
      }
      {
        totalpages > 0 && <div className="pagination">
          <span className={ page > 1 ?"":'pagination__disabled'}onClick={() => pageHandle(page - 1)}>⬅️</span>
          {
            [...Array(totalpages)].map((_, i) => {
              return <span className={page === i + 1 ? 'pagination__selected' : ''} onClick={() => pageHandle(i + 1)}>{i + 1}</span>
            })
          }

          <span className={page < totalpages?"":'pagination__disabled'} onClick={() => pageHandle(page + 1)}>➡️</span>
        </div>
        // for front end we use prodata.length/10 to show our pages 
      }
    </>
  );
}
export default Pagination;