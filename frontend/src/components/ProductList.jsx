import { useState } from "react";

import { HiPencil } from "react-icons/hi2";
import PropTypes from "prop-types"; // Import PropTypes
// import EditProducts from "./EditProducts";
const ProductList = ({ products, onProductUploaded }) => {
  const [editingProduct, setEditingProduct] = useState(null);

  const handleEdit = (product) => {
    setEditingProduct(product);
  };

  return (
    <div className="py-8 px-6 bg-gray-100 min-h-screen">
      {products.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg shadow-lg bg-white overflow-hidden w-full"
            >
              <img
                src={product.images[0]}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-lg text-gray-900">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-500">{product.brandName}</p>
                <p className="text-sm text-gray-500 mb-2">{product.category}</p>
                <div className="flex justify-between items-center mb-4">
                  <p className="text-green-600 font-semibold">
                    ${product.sellingPrice}
                  </p>
                  <p className="line-through text-gray-400">${product.price}</p>
                </div>
                <button
                  onClick={() => handleEdit(product)}
                  className="px-4 py-2 bg-indigo-600 text-white rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 flex justify-center"
                >
                  <HiPencil />
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No products available</p>
      )}
      {editingProduct && (
        // <UploadProduct
        //   onClose={() => setEditingProduct(null)}
        //   onProductUploaded={onProductUploaded}
        //   productToEdit={editingProduct}
        // />
        // <EditProducts />
        <h1>hii</h1>
      )}
    </div>
  );
};

ProductList.propTypes = {
  products: PropTypes.func.isRequired,
  onProductUploaded: PropTypes.func.isRequired,
};
export default ProductList;
