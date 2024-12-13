import React, { useContext, useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import { MyContext } from '../../Context'
import ProductCard from '../Product-Card'

const Products = () => {
  const {data, error, loading} = useFetch("https://fakestoreapi.com/products")
  const {state, dispatch} = useContext(MyContext)
  useEffect(() => {
    if(!error){
      dispatch({type: "SET_PRODUCTS", payload: data})
    }
  }, [data])
  
  return (
    <div className='container lg:px-20 mt-20'>
      <h2 className='text-5xl font-bold text-center mb-10'>Products</h2>
      {loading ? <div></div> :
      <div className='grid grid-cols-3 gap-5 items-stretch'>
        {state.products && state.products.map(p => (
          <ProductCard key={p.id} product={p}/>
        ))}
      </div>
      }
    </div>
  )
}

export default Products