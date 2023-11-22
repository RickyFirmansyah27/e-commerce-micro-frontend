import { useParams } from "react-router-dom";
import Breadcrumbs from "./Breadcrumbs";
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "./Loader";

const ProductPage = ({ loading, setLoading }) => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    if (!product?.title) {
      fetchProduct();
    }
  }, [product]);

  const fetchProduct = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(`https://fakestoreapi.com/products/${productId}`);
      setProduct(data);
    } catch (error) {
      console.error("Error fetching product:", error);
    } finally {
      setLoading(false);
    }
  };

  return loading ? (
    <Loader />
  ) : (
    <div className="antialiased">
      <div className="py-6">
        <Breadcrumbs options={["Home"]} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
          <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
              <div x-data="{ image: 1 }" x-cloak>
                <div className="h-64 md:h-80 rounded-lg bg-gray-100 mb-4">
                  <div
                    x-show="image === 1"
                    className="h-64 md:h-80 rounded-lg bg-gray-100 mb-4 flex items-center justify-center"
                  >
                    <img src={product.image} alt="Product" className="h-72 w-full object-contain object-center" />
                  </div>
                </div>
                {/* Uncomment this section if you want to handle multiple images
                <div className="flex -mx-2 mb-4">
                  <template x-for="i in 4">
                    <div className="flex-1 px-2">
                      <button
                        x-on:click="image = i"
                        :className="{ 'ring-2 ring-indigo-300 ring-inset': image === i }"
                        className="focus:outline-none w-full rounded-lg h-24 md:h-32 bg-gray-100 flex items-center justify-center"
                      >
                        <span x-text="i" className="text-2xl"></span>
                      </button>
                    </div>
                  </template>
                </div>
                */}
              </div>
            </div>
            <div className="md:flex-1 px-4">
              {/* Remaining code is unchanged */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
