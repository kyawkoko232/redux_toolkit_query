import React from 'react'
import { useGetAllProductsQuery } from '../store/service/endpoints/products.endpoints'

const AllProducts = () => {
    const {data, isError, isLoading } = useGetAllProductsQuery();

  return (

    <div>

        {data?.products.map((p)=>(
            <>
            <h3 key={p.id}> {p.title} </h3>
            <p>{p.description}</p>
            <hr></hr>
            </>
            
        ))}
    </div>

  )
}

export default AllProducts