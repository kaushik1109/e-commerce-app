import React from 'react'
// import { items } from './Data'
import { Link } from 'react-router-dom'


function Product({ items }) {
    return (
        <>
        <div className='container'>
        <div className='row'>
            {
                Object.values(items).map((product) => {
                    return (
                        <>
                        <div className='col-lg-4 my-2 text-center'>
                        <div className="card my-2" >
                            <div className='row'>
                            <Link to={`/product/${product.id}`} >
                            <img src={product.imgSrc} class="card-img-top" alt="..." /></Link>
                            <div className="card-body">
                                <h5 className="card-title">{product.title}</h5>
                                <p className="card-text">{product.description}</p>
                                
                                <a href="#" class="btn btn-primary mx-2">₹ {" "}{product.price}</a>
                                <a href="#" class="btn btn-warning">Add to Cart</a>
                                
                            </div>
                        </div>
                        </div>
                        </div>
                        </>
                    )
                })
            }
            </div>
            </div>
        </>
    )
}

export default Product
