import { useState } from "react";
import { CgClose } from "react-icons/cg";
import toast from "react-hot-toast";
import axios from "axios";

const UploadProduct = ({ onClose }) => {
  const initialUserState = {
    brandName: "",
    category: "",
    productImageFile: null,
    description: "",
    price: "",
    sellingPrice: "",
  };

  const [product, setProduct] = useState(initialUserState);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "productImage" && files.length > 0) {
      const file = files[0];
      setProduct((prevUser) => ({
        ...prevUser,
        productImageFile: file,
      }));
    } else {
      setProduct((prevUser) => ({
        ...prevUser,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !product.brandName ||
      !product.category ||
      !product.description ||
      !product.price ||
      !product.sellingPrice
    ) {
      toast.error("All fields are required", { position: "top-right" });
      return;
    }

    const formData = new FormData();
    formData.append("brandName", product.brandName);
    formData.append("category", product.category);
    formData.append("productImage", product.productImageFile);
    formData.append("description", product.description);
    formData.append("price", product.price);
    formData.append("sellingPrice", product.sellingPrice);

    try {
      const response = await axios.post("/api/add-product", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 201) {
        toast.success("Product uploaded successfully", {
          position: "top-right",
        });
        setProduct(initialUserState);
        onClose();
      } else {
        toast.error("Failed to upload product", { position: "top-right" });
      }
    } catch (error) {
      console.error("Error uploading product:", error);
      toast.error("An error occurred while uploading the product", {
        position: "top-right",
      });
    }
  };

  return (
    <div className="fixed w-full bg-slate-200 bg-opacity-35 top-0 left-0 right-0 bottom-0 flex justify-center items-center">
      <div className="bg-white p-4 rounded w-full max-w-2xl h-full max-h-[80%] overflow-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-bold text-lg">Upload Product</h2>
          <div
            className="w-fit ml-auto text-2xl hover:text-red-600 cursor-pointer"
            onClick={onClose}
          >
            <CgClose />
          </div>
        </div>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Brand Name
            </label>
            <input
              type="text"
              name="brandName"
              value={product.brandName}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter brand name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Category
            </label>
            <input
              type="text"
              name="category"
              value={product.category}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter category"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Product Image
            </label>
            <input
              type="file"
              name="productImage"
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              name="description"
              value={product.description}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter product description"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Price
            </label>
            <input
              type="number"
              name="price"
              value={product.price}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter price"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Selling Price
            </label>
            <input
              type="number"
              name="sellingPrice"
              value={product.sellingPrice}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter selling price"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-4 py-2 bg-indigo-600 text-white rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Upload
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UploadProduct;
