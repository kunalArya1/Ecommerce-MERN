import { useState } from "react";
import UploadProduct from "../components/UploadProduct";

const AllProduct = () => {
  const [opneUploadProduct, setUploadOpenProduct] = useState(false);
  return (
    <div>
      <div className="bg-white py-2 px-4 flex justify-between items-center">
        <h2 className="font-bold text-lg">All Product</h2>
        <button
          className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white py-1 px-3 rounded-full transition-all"
          onClick={() => setUploadOpenProduct(true)}
        >
          Upload Product
        </button>
      </div>
      {/* upload product component */}
      {opneUploadProduct && (
        <UploadProduct onClose={() => setUploadOpenProduct(false)} />
      )}
    </div>
  );
};

export default AllProduct;
