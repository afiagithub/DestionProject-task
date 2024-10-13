import { Link } from "react-router-dom";
import { FaRegEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import regImg from "../../public/images/sign-up1.jpg"

const Register = () => {
    const [show, setShow] = useState(false);
    const handleToggle = () => {
        setShow(!show);
    }

    const handleSubmit = async (e) => {
        const { userName, email, pass, confirmPass } = data;
        if (pass.length < 6) {
            toast.error("Password must be at least 6 characters long");
            return;
        }
        else if (!/^(?=.*[a-z])(?=.*[A-Z]).+$/.test(pass)) {
            toast.error("Password must have a uppercase and a lowercase letter");
            return;
        }
        else if (pass !== confirmPass) {
            toast.error("Password does not match Confirm Password");
            return;
        }
    }
    return (
        <div className="flex flex-col lg:flex-row-reverse justify-between items-center w-full rounded-md sm:p-10">
            <div className="hidden lg:flex w-3/6 h-[500px]">
                <img src={regImg} className="h-full object-cover"></img>
            </div>
            <div className="flex flex-col w-3/5 md:w-3/5 lg:w-2/6 mx-auto">
                <div className="mb-8 text-center">
                    <h1 className="my-3 text-4xl font-extrabold font-nun text-[#124E66]">Register</h1>
                    <p className="text-sm dark:text-[#2D3663]">Create your account</p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-12">
                    <div className="space-y-4">
                        <div>
                            <label className="block mb-2 text-sm font-medium">Username</label>
                            <input type="text" name="name" placeholder="Enter Username"
                                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                        </div>

                        <div>
                            <label className="block mb-2 text-sm font-medium">Email address</label>
                            <input type="email" name="email" placeholder="Enter email address"
                                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                        </div>

                        <div className="relative">
                            <div className="flex justify-between mb-2">
                                <label className="text-sm font-medium">Password</label>
                            </div>
                            <input type={show ? "text" : "password"} name="password" id="password" placeholder="********"
                                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                            <div className="absolute top-10 right-4 text-lg" onClick={handleToggle}>
                                {show ? <FaEyeSlash /> : <FaRegEye />}
                            </div>
                        </div>

                        <div>
                            <div className="flex justify-between mb-2">
                                <label className="text-sm font-medium">Confirm Password</label>
                            </div>
                            <input type="password" name="password" id="con-password" placeholder="********"
                                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div>
                            <input type="submit" value="Sign Up"
                                className="w-full px-8 py-3 bg-[#124E66] text-white border-2 border-[#124E66] 
                                hover:border-[#124E66] hover:bg-transparent hover:text-[#124E66] rounded-xl font-bold" />
                        </div>
                        <p className="px-6 text-sm text-center dark:text-[#124E66]">Already have an account?
                            <Link to="/" className="hover:underline dark:text-[#2D3663] font-bold">
                                Sign in</Link>.
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;