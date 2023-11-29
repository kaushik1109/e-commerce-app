import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { items } from './Data'
import Product from './Product'

const ProductDetail = () => {

    const { id } = useParams()
    const [products, setProducts] = useState({})
    const [relatedProducts, setRelatedProducts] = useState({})
    useEffect(() => {
        const productSelected = items.filter((product) => product.id == id)

        setProducts(productSelected[0])
        const catRelatedProducts = items.filter((related) => related.category === products.category)
        const finalRelatedProducts=catRelatedProducts.filter((final) => final.id!=id)
        setRelatedProducts(finalRelatedProducts)

    }, [id, products.category])

    return (
        <>
        <div className='product-details'>
            <div className='product-details-main'>
                <div className='product-detail-img'>
                    <img src={products.imgSrc} />
                </div>
                <div className='description'>
                    <h1>{products.title}</h1>
                    <p>{products.description}</p>

                </div>
                </div>
                <div className='related-product-details'>

                 
                                
                          

                </div>
            </div>
            <div>
                <h2>Related Products</h2>
            <Product items={relatedProducts} />
            </div>
            

        </>
    )
}

export default ProductDetail
