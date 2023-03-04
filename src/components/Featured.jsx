import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchFeaturedProducts } from '@/slices/featuredSlice'
import { useEffect } from 'react'
import Products from './Products'

const Featured = () => {
    const featuredProducts = useSelector(state => state.featuredProducts)
    const cartItems = useSelector(state => state.cart.cartItems)
    const total = useSelector(state => state.cart.total)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchFeaturedProducts())
    }, [])
  return (
    <div className='bg-white dark:bg-gray-900 max-w-screen dark:text-white'>
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
      
      <h2 className='font-bold text-3xl'>Best Sellers</h2>
      {featuredProducts.loading && <div>Loading...</div>}
      {!featuredProducts.loading && featuredProducts.error ? <div>Error: {featuredProducts.error}</div> : null}
      {!featuredProducts.loading && featuredProducts.featuredProducts.length ? (
        <div className='flex flex-wrap flex-column md:flex-row justify-center items-stretch'>
          {featuredProducts.featuredProducts.map(product => (
            // <li key={featuredProducts.id}>{featuredProducts.title}</li>
            <div key={product.id} className='m-5 h-full'><Products id={product.id} title={product.title} price={product.price} category={product.category} description={product.description} image={product.image} /></div>
          ))}
        </div>
      ) : null}
    </div>
  )
}

export default Featured