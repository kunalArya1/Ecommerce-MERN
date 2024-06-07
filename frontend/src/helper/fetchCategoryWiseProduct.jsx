import axios from "axios";
export const fetchCategoryWiseProduct = async (categoryName) => {
  const res = await axios.get(`/api/product-category/${categoryName}`);
  return res.data.data;
};
