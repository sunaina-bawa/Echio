import React, { useState, useEffect } from "react";

export default function Sidebar() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [gender, setGender] = useState([]);
  const [categories, setCategories] = useState([]);
  const [sortBy, setSortBy] = useState(""); // Sorting option: "priceHighToLow" or "priceLowToHigh"

  useEffect(() => {
    getProductDetail();
  }, []);

  async function getProductDetail() {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  }

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const handleGenderChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setGender([...gender, value]);
    } else {
      setGender(gender.filter((g) => g !== value));
    }
  };

  const handleCategoryChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setCategories([...categories, value]);
    } else {
      setCategories(categories.filter((category) => category !== value));
    }
  };

  const handleSortByChange = (event) => {
    setSortBy(event.target.value);
  };

  const applyFilters = (products) => {
    let filteredProducts = products;

    // Apply gender filter
    if (gender.length > 0) {
      filteredProducts = filteredProducts.filter((item) =>
        gender.includes(item.category)
      );
    }

    // Apply category filter
    if (categories.length > 0 && !categories.includes("all")) {
      filteredProducts = filteredProducts.filter((item) =>
        categories.includes(item.category)
      );
    }

    // Apply search filter
    if (search) {
      filteredProducts = filteredProducts.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    return filteredProducts;
  };

  const applySorting = (products) => {
    if (sortBy === "priceHighToLow") {
      return [...products].sort((a, b) => b.price - a.price);
    } else if (sortBy === "priceLowToHigh") {
      return [...products].sort((a, b) => a.price - b.price);
    } else {
      return products;
    }
  };

  const filteredProducts = applyFilters(products);
  const sortedProducts = applySorting(filteredProducts);

  return (
    <div style={{ display: "flex", margin: "30px" }}>
      <div
        style={{
          background: "white",
          width: "30%",
          borderRadius: "10px",
          padding: "20px",
          boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.24)",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h3 style={{ fontWeight: "bold", marginBottom: "10px" }}>
            Filter by Gender
          </h3>
          <label style={{ marginBottom: "5px" }}>
            <input
              type="checkbox"
              name="gender"
              value="men's clothing"
              checked={gender.includes("men's clothing")}
              onChange={handleGenderChange}
            />
            Men's Clothing
          </label>
          <label style={{ marginBottom: "5px" }}>
            <input
              type="checkbox"
              name="gender"
              value="women's clothing"
              checked={gender.includes("women's clothing")}
              onChange={handleGenderChange}
            />
            Women's Clothing
          </label>
          <hr style={{ margin: "20px 0" }} />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h3 style={{ fontWeight: "bold", marginBottom: "10px" }}>
              CATEGORIES
            </h3>
            <label style={{ marginBottom: "5px" }}>
              <input
                type="checkbox"
                name="categories"
                value="all"
                checked={categories.includes("all")}
                onChange={handleCategoryChange}
              />
              All
            </label>
            <label style={{ marginBottom: "5px" }}>
              <input
                type="checkbox"
                name="categories"
                value="electronics"
                checked={categories.includes("electronics")}
                onChange={handleCategoryChange}
              />
              Electronics
            </label>
            <label style={{ marginBottom: "5px" }}>
              <input
                type="checkbox"
                name="categories"
                value="jewelery"
                checked={categories.includes("jewelery")}
                onChange={handleCategoryChange}
              />
              Jewelry
            </label>
          </div>
        </div>
      </div>
      <div
        style={{
          width: "70%",
          borderRadius: "10px",
          padding: "20px",
          background: "white",
        }}
      >
        <h1>Products</h1>
        <div style={{ display: "flex", alignItems: "center" }}>
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={handleSearch}
            style={{ marginRight: "10px", padding: "5px" }}
          />
          <select
            value={sortBy}
            onChange={handleSortByChange}
            style={{ padding: "5px" }}
          >
            <option value="">Sort By</option>
            <option value="priceHighToLow">Price: High to Low</option>
            <option value="priceLowToHigh">Price: Low to High</option>
          </select>
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "flex-start",
            marginTop: "10px",
          }}
        >
          {!sortedProducts ? (
            <h1>Loading...</h1>
          ) : sortedProducts.length === 0 ? (
            <h1>No products found.</h1>
          ) : (
            sortedProducts.map((item) => (
              <div
                key={item.id}
                style={{
                  background: "white",
                  padding: "10px",
                  borderRadius: "5px",
                  width: "100%",
                  marginBottom: "10px",
                  boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.24)",
                }}
              >
                <p style={{ marginBottom: "5px" }}>{item.title}</p>
                <img
                  src={item.image}
                  alt=""
                  style={{ width: "10%", marginBottom: "5px" }}
                />
                <span style={{ fontWeight: "bold" }}>price:${item.price}</span>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}