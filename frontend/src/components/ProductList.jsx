// components/ProductList.jsx

const ProductList = ({ products }) => {
  return (
    <div className="py-8 px-6">
      {products.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg shadow-lg p-4 bg-white"
            >
              <img
                src={product.images[0]}
                alt={product.name}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="font-bold text-lg text-gray-900">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-500">{product.brandName}</p>
                <p className="text-sm text-gray-500 mb-2">{product.category}</p>
                <p className="text-gray-700 mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <p className="text-green-600 font-semibold">
                    ${product.sellingPrice}
                  </p>
                  <p className="line-through text-gray-400">${product.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No products available</p>
      )}
    </div>
  );
};

export default ProductList;
