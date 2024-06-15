import { useParams } from "react-router-dom";

import productCategory from "../helper/productCategory";
import VerticalCardProduct from "./VerticalCardProduct";
import RecommendedProduct from "./RecommendedProduct";
const CategoryProduct = () => {
  const { categoryName } = useParams();

  return (
    <div className="container mx-auto p-4">
      {/* desktop version */}
      <div className="hidden lg:grid grid-cols-[200px,1fr] ">
        {/* left side */}
        <div className="bg-white p-2 min-h-[calc(100vh-120px)] overflow-y-scroll">
          {/* sort by */}
          <div>
            <h3 className="text-base uppercase font-medium text-slate-500 border-b pb-1 border-slate-300 ">
              Sort by
            </h3>
            <form action="" className="text-sm flex flex-col gap-2 py-2">
              <div className="flex items-center gap-3">
                <input type="radio" name="sortBy" />
                <label>Price - Low To High</label>
              </div>
              <div className="flex items-center gap-3">
                <input type="radio" name="sortBy" />
                <label>Price - High To Low</label>
              </div>
            </form>
          </div>
          {/* filter by */}
          <div>
            <h3 className="text-base uppercase font-medium text-slate-500 border-b pb-1 border-slate-300 ">
              Category
            </h3>
            <form action="" className="text-sm flex flex-col gap-2 py-2">
              {productCategory.map((categoryName, index) => (
                <div key={index} className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    name={"category"}
                    id={categoryName?.value}
                  />
                  <label htmlFor={categoryName?.value}>
                    {categoryName?.label}
                  </label>
                </div>
              ))}
            </form>
          </div>
        </div>
        {/* right side */}
        <div>
          {CategoryProduct && (
            <RecommendedProduct
              categoryName={categoryName}
              heading=""
              currentProduct={[]}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryProduct;
