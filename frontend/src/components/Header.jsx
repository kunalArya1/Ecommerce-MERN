import { Link } from "react-router-dom";
import shopsy from "../assets/shopsy.png";
import { GrSearch } from "react-icons/gr";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
const Header = () => {
  const userData = useSelector((state) => state?.user?.user);
  console.log("userData", userData);
  return (
    <header className="h-16 shadow-md bg-white">
      <div className="h-full container mx-auto flex items-center px-2 justify-between">
        <div className="cursor-pointer">
          <Link to={"/"}>
            <img src={shopsy} alt="" width={50} height={20} />
          </Link>
        </div>
        <div className="hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow pl-2">
          <input
            type="text"
            placeholder="search product here..."
            className="w-full outline-none"
          />
          <div className="text-lg min-w-[50px] h-8 bg-red-600 flex items-center justify-center rounded-r-full text-white">
            <GrSearch />
          </div>
        </div>
        <div className="flex items-center gap-7">
          <div className="text-3xl cursor-pointer">
            {userData ? (
              <img src={userData.profilePic} width={50} height={20} />
            ) : (
              <FaRegCircleUser />
            )}
          </div>
          {/* <div className="text-2xl">
            <FaShoppingCart />
          </div> */}
          <div className="col-span-2 sm:col-span-1 text-center">
            <Link to="/cart" className="relative inline-block">
              <span className="font-bold absolute top-0 right-0 -mt-2 -mr-2 px-2 py-1 rounded-full bg-red-500 text-white">
                {0}
              </span>
              <FaShoppingCart className="w-10 h-10 cursor-pointer" />
            </Link>
          </div>
          <Link to="login">
            <button className="px-3 py-1 rounded-full text-white bg-red-600 hover:bg-red-700">
              {userData ? "Logout" : "Login"}
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
