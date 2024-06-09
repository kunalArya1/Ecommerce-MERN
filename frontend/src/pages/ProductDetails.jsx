import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
const ProductDetails = () => {
  const [data, setData] = useState();
  const { id } = useParams();
  const getProduct = async () => {
    const res = await axios.get(`/api/product/${id}`);

    setData(res?.data?.data);
  };
  useEffect(() => {
    getProduct();
  }, []);
  console.log(data);
  return <div>{id}</div>;
};

export default ProductDetails;
