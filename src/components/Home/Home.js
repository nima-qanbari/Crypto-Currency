import React, { useState, useEffect } from 'react'

//API
import { getCoins } from '../../Services/API'

//components
import Coin from '../Coin/Coin'

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
            coins.map(item => <Coin
                key={item.id}
                image={item.image}
                name={item.name}
                symbol={item.symbol}
                price={item.current_price}
                marketCap={item.market_cap}
                priceChange={item.price_change_percentage_24h}
                />)
        }
    </div>
  )
}

export default Home