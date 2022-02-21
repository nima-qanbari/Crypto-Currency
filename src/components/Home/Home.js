import React, { useState, useEffect } from "react";

//API
import { getCoins } from "../../Services/API";

//components
import Coin from "../Coin/Coin";
import Loader from "../Loader/Loader";

const Home = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("")

  useEffect(() => {
    const fetchApi = async () => {
      setCoins(await getCoins());
    };
    return fetchApi();
  }, []);

  const searchHandler = (event) => {
      setSearch(event.target.value)
  }

  const searchedFilter = coins.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))


  return (
    <div>
        <input 
        type="text"
        placeholder="Search"
        value={search}
        onChange={searchHandler}
          />
      {coins.length ? (
        searchedFilter.map((item) => (
          <Coin
            key={item.id}
            image={item.image}
            name={item.name}
            symbol={item.symbol}
            price={item.current_price}
            marketCap={item.market_cap}
            priceChange={item.price_change_percentage_24h}
          />
        ))
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Home;
