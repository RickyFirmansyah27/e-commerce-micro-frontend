import axios from "axios";
import { useEffect, useState } from "react";
import ProudctCard from "./ProuductCard";
import Seach from "./Seach";
import Loader from "./Loader";

const ProductList = ({ loading, setLoading }) => {
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState({
    category: "",
    title: "",
  });

  useEffect(() => {
    if (!products.length) {
      fetchProducts();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [products]);

  async function fetchProducts() {
    setLoading(true);
    try {
      const { data } = await axios.get("https://fakestoreapi.com/products");
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  }

  const handleChange = (e) => {
    setQuery({ ...query, [e.target.name]: e.target.value });
  };

//   const handleSubmit = () => {
//     // Handle form submission based on your requirements
//     // For example, you can filter products based on the query and update the state
//     const filteredProducts = /* Your filtering logic here */;
//     setProducts(filteredProducts);
//   };

  return loading ? (
    <Loader />
  ) : (
    <>
      <Seach query={query} handleChange={handleChange} />
      <section className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
        {products.map((product, index) => (
          <ProudctCard key={index} product={product} />
        ))}
      </section>
    </>
  );
};

export default ProductList;
