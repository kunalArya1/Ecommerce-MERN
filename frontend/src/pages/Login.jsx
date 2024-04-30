import { useState } from "react";
import loginIcons from "../assets/signin.gif";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaEyeSlash } from "react-icons/fa";
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handlePassword = () => {
    setShowPassword(!showPassword);
    // console.log("clicked");
  };
  return (
    <section>
      <div className="mx-auto container p-4">
        <div className="bg-white p-2 py-5 w-full max-w-md mx-auto ">
          <div className="w-20 h-20 mx-auto ">
            <img src={loginIcons} alt="login-icon" />
          </div>
          <form className="pt-6 flex flex-col gap-2">
            <div className="grid">
              <label>Email : </label>
              <div className="bg-slate-100 p-2">
                <input
                  type="email"
                  placeholder="enter email"
                  name="email"
                  className="w-full h-full outline-none bg-transparent"
                />
              </div>
            </div>

            <div>
              <label>Password : </label>
              <div className="bg-slate-100 p-2 flex">
                <input
                  placeholder="enter password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  className="w-full h-full outline-none bg-transparent"
                />
                <div className="cursor-pointer text-xl">
                  <span onClick={handlePassword}>
                    {" "}
                    {showPassword ? <FaEye /> : <FaEyeSlash />}
                  </span>
                </div>
              </div>
              <Link
                to={"/forgot-password"}
                className="block w-fit ml-auto hover:underline hover:text-red-600"
              >
                Forgot password ?
              </Link>
            </div>

            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-6">
              Login
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
