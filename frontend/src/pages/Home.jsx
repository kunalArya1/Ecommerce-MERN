import BannerProduct from "../components/BannerProduct";
import CategoryList from "../components/CategoryList";
import HorizontalCardProduct from "../components/HorizontalCardProduct";
import VerticalCardProduct from "../components/VerticalCardProduct";

const Home = () => {
  return (
    <div>
      <CategoryList />
      <BannerProduct />
      <HorizontalCardProduct
        categoryName={"airpodes"}
        heading={"Top's Airpods"}
      />
      <HorizontalCardProduct
        categoryName={"watches"}
        heading={"Popular's Watches"}
      />
      <VerticalCardProduct categoryName={"mobiles"} heading={"mobiles"} />
    </div>
  );
};

export default Home;
