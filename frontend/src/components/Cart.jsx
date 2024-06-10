import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "../store/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      {items.length === 0 ? (
        <p className="text-gray-500">Your cart is empty</p>
      ) : (
        <ul className="space-y-4">
          {items.map((item) => (
            <li key={item.id} className="bg-white p-4 rounded-lg shadow">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <img
                    src={item.images[0]}
                    alt={item.productName}
                    className="w-24 h-24 object-cover rounded"
                  />
                  <div>
                    <h3 className="text-xl font-semibold">
                      {item.productName}
                    </h3>
                    <p className="text-gray-600">{item.brandName}</p>
                    <p className="text-gray-500">{item.category}</p>
                    <div className="mt-2">
                      <p className="text-gray-700">
                        Original Price: ${item.price.toFixed(2)}
                      </p>
                      <p className="text-green-600 font-bold">
                        Selling Price: ${item.sellingPrice.toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => handleRemoveItem(item._id)}
                  className="text-red-500 hover:text-red-700 font-bold"
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
