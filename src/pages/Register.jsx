import { Link } from "react-router-dom";
import { FaRegEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import regImg from "/images/sign-up1.jpg"
import * as Yup from 'yup';

const Register = () => {
    const [show, setShow] = useState(false);
    const handleToggle = () => {
        setShow(!show);
    }

    const [error, setError] = useState({})

    const validationSchema = Yup.object({
        username: Yup.string().required("Username is required"),
        email: Yup.string().email("Invalid Email").required("Email is required"),
        pass: Yup.string().required("Password is required")
            .min(6, "Password must be at least 6 characters long")
            .matches(/^(?=.*[a-z])(?=.*[A-Z]).+$/, "Password must have a uppercase and a lowercase letter"),
        confirmPass: Yup.string().required("Confirm Password is required")
            .oneOf([Yup.ref("pass")], "Password does not match Confirm Password")
    })

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const form = e.target;

            const userData = {
                username: form.userName.value,
                email: form.email.value,
                pass: form.password.value,
                confirmPass: form.conPassword.value
            }
            console.log(userData);
            await validationSchema.validate(userData, {abortEarly: false});
            setError({})
        } catch (error) {
            const newError = {}
            
            error.inner.forEach(err => {
                newError[err.path] = err.message
            });

            setError(newError)
        }
    }
    return (
        <div className="flex flex-col lg:flex-row-reverse justify-between items-center w-full rounded-md sm:p-10">
            <div className="hidden lg:flex w-3/6 h-[500px]">
                <img src={regImg} className="h-full object-cover"></img>
            </div>
            <div className="flex flex-col w-3/5 md:w-3/5 lg:w-2/6 mx-auto">
                <div className="mb-8 text-center">
                    <h1 className="my-3 text-4xl font-extrabold font-nun text-[#124E66]">Sign Up</h1>
                    <p className="text-sm dark:text-[#2D3663]">Create your account</p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-12">
                    <div className="space-y-4">
                        <div>
                            <label className="block mb-2 text-sm font-medium">Username</label>
                            <input type="text" name="userName" placeholder="Enter Username"
                                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 
                                dark:bg-gray-50 dark:text-gray-800" />
                        </div>
                        {error.username && <span className="text-red-700 font-semibold">{error.username}</span>}

                        <div>
                            <label className="block mb-2 text-sm font-medium">Email address</label>
                            <input type="email" name="email" placeholder="Enter email address"
                                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                        </div>
                        {error.email && <span className="text-red-700 font-semibold">{error.email}</span>}

                        <div className="relative">
                            <div className="flex justify-between mb-2">
                                <label className="text-sm font-medium">Password</label>
                            </div>
                            <input type={show ? "text" : "password"} name="password" placeholder="********"
                                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                            <div className="absolute top-10 right-4 text-lg" onClick={handleToggle}>
                                {show ? <FaEyeSlash /> : <FaRegEye />}
                            </div>
                        </div>
                        {error.pass && <span className="text-red-700 font-semibold">{error.pass}</span>}

                        <div>
                            <div className="flex justify-between mb-2">
                                <label className="text-sm font-medium">Confirm Password</label>
                            </div>
                            <input type="password" name="conPassword" placeholder="********"
                                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                        </div>
                        {error.confirmPass && <span className="text-red-700 font-semibold">{error.confirmPass}</span>}
                    </div>
                    <div className="space-y-2">
                        <div>
                            <input type="submit" value="Sign Up"
                                className="w-full px-8 py-3 bg-[#124E66] text-white border-2 border-[#124E66] 
                                hover:border-[#124E66] hover:bg-transparent hover:text-[#124E66] rounded-xl font-bold" />
                        </div>
                        <p className="px-6 text-sm text-center dark:text-[#124E66]">Already have an account?
                            <Link to="/" className="hover:underline dark:text-[#c46d14] font-bold">
                                Sign in</Link>.
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;