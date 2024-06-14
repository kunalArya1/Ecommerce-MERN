import axios from "axios";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SearchProduct = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("q");

  const search = async () => {
    try {
      const res = await axios.get(`/api/search?q=${query}`);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (query) {
      search();
    }
  }, [query]);

  return <div>Search results for: {query}</div>;
};

export default SearchProduct;
