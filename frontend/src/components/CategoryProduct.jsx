import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
const CategoryProduct = () => {
  const { categoryName } = useParams();
  const [product, setProduct] = useState([]);
  const getProduct = async () => {
    const res = await axios.get(`/api/product-category/${categoryName}`);
    // console.log(res);
    setProduct(res?.data?.data);
  };

  useEffect(() => {
    getProduct();
  }, []);
  console.log(product);
  return (
    <div className="py-8 px-6 mx-9 bg-gray-100 min-h-screen">
      {product.length > 0 ? (
        <div className="h-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 h-full overflow-auto">
            {product.map((product) => (
              <div
                key={product.id}
                className="border rounded-lg shadow-lg bg-white overflow-hidden w-full flex flex-col"
              >
                <div className="flex justify-center items-center h-48 bg-gray-200">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="object-contain h-full mix-blend-multiply"
                  />
                </div>
                <div className="p-4 flex-grow">
                  <h3 className="font-bold text-lg text-gray-900 text-ellipsis line-clamp-2">
                    {product.productName}
                  </h3>
                  <div className="flex justify-between items-center mb-4">
                    <p className="text-green-600 font-semibold">
                      ₹{product.sellingPrice}
                    </p>
                    <p className="line-through text-gray-400">
                      ₹{product.price}
                    </p>
                  </div>
                  <button className="px-4 py-2 bg-indigo-600 text-white rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 flex justify-center">
                    ADD TO CART
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-500">No products available</p>
      )}
    </div>
  );
};

export default CategoryProduct;
