import { Link } from "react-router-dom";
import { FaRegEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import loginImg from "../../public/images/login.jpg"
const Login = () => {
    const [show, setShow] = useState(false);

    const handleToggle = () => {
        setShow(!show);
    }
    const handleSubmit = (e) => {
        
    }
    return (
        <div className="flex flex-col lg:flex-row justify-between items-center w-full rounded-md sm:p-10 mt-5">
            <div className="hidden lg:flex w-3/6 h-[500px]">
                <img src={loginImg} className="h-full object-cover"></img>
            </div>
            <div className="flex flex-col w-3/5 md:w-3/5 lg:w-2/6 mx-auto">
                <div className="mb-8 text-center">
                    <h1 className="my-3 text-4xl font-bold text-[#124E66]">Sign in</h1>
                    <p className="text-sm dark:text-[#2D3663]">Sign in to access your account</p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-12">
                    <div className="space-y-4">
                        <div>
                            <label className="block mb-2 text-sm">Email address</label>
                            <input type="email" name="email" placeholder="leroy@jenkins.com" 
                            
                                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                        </div>
                        
                        <div className="relative">
                            <div className="flex justify-between mb-2">
                                <label htmlFor="password" className="text-sm">Password</label>
                                <a href="#" className="text-xs hover:underline text-[#c46d14] font-bold">Forgot password?</a>
                            </div>
                            <input type={show ? "text" : "password"} name="password" placeholder="*****" 
                                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                            <div className="absolute top-10 right-4 text-lg" onClick={handleToggle}>
                                {show ? <FaEyeSlash /> : <FaRegEye />}
                            </div>
                        </div>                        
                    </div>
                    <div className="space-y-2">
                        <div>
                            <input type="submit" value="Sign In"
                                className="w-full px-8 py-3 bg-[#124E66] text-white border-2 border-[#124E66] 
                                hover:border-[#124E66] hover:bg-transparent hover:text-[#124E66] rounded-xl font-bold" />
                        </div>
                        <p className="px-6 text-sm text-center dark:text-[#124E66]">Don't have an account yet?
                            <Link to="/register" className="hover:underline dark:text-[#2D3663] font-bold">
                                Sign up</Link>.
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;