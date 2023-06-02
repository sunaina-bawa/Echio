import React, { useContext, useState, useEffect } from "react";

export default function Product() {
  const [product, setProduct] = useState([]);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState(""); // Sorting option: "priceHighToLow" or "priceLowToHigh"

  useEffect(() => {
    getproductDetail();
  }, []);

  async function getproductDetail() {
    try {
      let res = await fetch("https://fakestoreapi.com/products");
      let data = await res.json();
      setProduct(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const handleSortByChange = (event) => {
    setSortBy(event.target.value);
  };

  const sortedProducts = [...product].sort((a, b) => {
    if (sortBy === "priceHighToLow") {
      return b.price - a.price;
    } else if (sortBy === "priceLowToHigh") {
      return a.price - b.price;
    } else {
      return 0;
    }
  });

  const filteredProducts = sortedProducts.filter((el) =>
    el.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>Product</h1>
      <div>
        <input type="text" placeholder="Search" onChange={handleSearch} />
        <select value={sortBy} onChange={handleSortByChange}>
          <option value="">Sort By</option>
          <option value="priceHighToLow">Price: High to Low</option>
          <option value="priceLowToHigh">Price: Low to High</option>
        </select>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: "10px",
        }}
      >
        {!filteredProducts ? (
          <h1>...loading</h1>
        ) : (
          filteredProducts.map((el, i) => {
            return (
              <div key={i}>
                <p>{el.title}</p>
                <img src={el.image} alt="" style={{ width: "200px" }} />
                <p>{el.description}</p>
                <span>{el.price}</span>
              </div>
            );
          })
        )}
      </div>
      <button onClick={getproductDetail}>Click</button>
    </div>
  );
}
