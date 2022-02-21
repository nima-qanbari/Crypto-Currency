import React, { useState, useEffect } from 'react'

//API
import { getCoins } from '../../Services/API'

const Home = () => {
    const [ coins, setCoins ] = useState([])

    useEffect(() => {
        const fetchApi = async () => {
            setCoins(await getCoins())
        }
        return fetchApi()
    }, [])

  return (
    <div>
        {
            coins.map(item => <p>{item.name}</p>)
        }
    </div>
  )
}

export default Home