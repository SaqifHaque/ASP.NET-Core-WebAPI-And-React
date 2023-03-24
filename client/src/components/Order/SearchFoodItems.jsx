import React, { useEffect } from 'react'
import { createApiEndpoint, ENDPOINTS } from '../../api'

const SearchFoodItems = () => {

    useEffect(() => {
        createApiEndpoint(ENDPOINTS.FOODITEM).fetchAll()
        .then(() => {})
        .catch((err) => console.log(err));
    }, [])
    
  return (
    <div>SearchFoodItems</div>
  )
}

export default SearchFoodItems