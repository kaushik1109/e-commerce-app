import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { items } from './Data'
import Product from './Product'


const Search = ({setData}) => {
  const {term} =useParams()
  
      const searchFilter=items.filter((prod) => prod.title.toLowerCase().includes(term.toLowerCase()))
      // console.log(searchFilter)
      // setData(searchFilter)

      
      return (
        <div>
          <Product items={searchFilter} />
        </div>
      )


  
  
}

export default Search
