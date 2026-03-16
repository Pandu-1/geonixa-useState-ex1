import React, { useState, useEffect } from "react";

const URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=l";

const PracticeUseEffect2 = () => {

  const [drinksData, setDrinksdata] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState({ status: false, msg: "" });

  const fetchDrink = async (apiURL) => {
    setLoading(true);
    setIsError({ status: false, msg: "" });

    try {
      const response = await fetch(apiURL);
      const data = await response.json();

      if (data.drinks) {
        setDrinksdata(data.drinks);
      } else {
        setDrinksdata([]);
        setIsError({ status: true, msg: "No drinks found" });
      }

      setLoading(false);

    } catch (error) {
      setLoading(false);
      setIsError({ status: true, msg: "Something went wrong" });
    }
  };

  useEffect(() => {
    fetchDrink(URL + search);
  }, [search]);

  return (
    <div>

      <h1>Drinks count: {drinksData.length}</h1>

      <form>
        <input
          type="text"
          placeholder="Search drink"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>

      <hr />

      {loading && <h3>Loading...</h3>}

      {isError.status && <h3>{isError.msg}</h3>}

      {!loading && !isError.status &&
        drinksData.map((drink) => {
          return (
            <li key={drink.idDrink}>
              <img src={drink.strDrinkThumb} alt={drink.strDrink} width="100" />
              <h3>{drink.strDrink}</h3>
            </li>
          );
        })}
    </div>
  );


};

export default PracticeUseEffect2;