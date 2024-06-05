import axios from "axios";
import { useEffect, useState } from "react";
const CategoryList = () => {
  const [categoryProduct, setCategoryProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchCategoryProduct = async () => {
    const res = await axios.get("/api/get-categoryProduct/");
    // console.log(res.data.data);
    setCategoryProduct(res.data.data);
    setLoading(false);
  };
  useEffect(() => {
    fetchCategoryProduct();
  }, []);
  console.log(categoryProduct);
  return (
    <div className="container mx-auto p-4">
      <div className="flex items-center gap-4 justify-between overflow-scroll scroll-none">
        {categoryProduct?.map((product, index) => (
          <div key={index}>
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden  p-4 bg-slate-200 flex items-center justify-center">
              <img
                src={product?.images[0]}
                alt={product?.category}
                className="h-full object-scale-down mix-blend-multiply hover:scale-125 transition-all"
              />
            </div>
            <p className="text-center text-sm md:text-base capitalize">
              {product?.category}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
