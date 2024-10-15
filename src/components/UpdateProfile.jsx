import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const UpdateProfile = () => {
    const navigate = useNavigate();

    const handleUpdate = () => {
        toast.success("Successfully Updated")
        navigate('/dashboard/profile')
    }
    return (
        <div className="flex flex-col max-w-4xl mx-auto p-6 rounded-md">
            <div className="mb-8 text-center">
                <h1 className="my-3 text-3xl font-bold text-[#124E66]">Update Your Profile</h1>
            </div>
            <form onSubmit={handleUpdate} className="space-y-8 text-left">
                <div className='flex flex-row justify-center gap-8'>
                    <div className="space-y-4 w-2/5">
                        <div>
                            <label className="block mb-2 text-sm">Full Name</label>
                            <input type="text" name="fullName" defaultValue="John Doe"
                                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm">Role</label>
                            <input type="text" name="role" defaultValue="Full-stack developer"
                                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm">Email</label>
                            <input type="email" name="email" defaultValue="john@gmail.com" disabled
                                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm">Phone</label>
                            <input type="number" name="phone" defaultValue="0123456789"
                                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm">Address</label>
                            <input type="text" name="address" defaultValue="Dhaka, Bangladesh"
                                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                        </div>
                    </div>
                    <div className='space-y-4 w-2/5'>
                        <div>
                            <label className="block mb-2 text-sm">Github Profile</label>
                            <input type="text" name="github" defaultValue="john@github.com"
                                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm">LinkedIn Profile</label>
                            <input type="text" name="linkedIn" defaultValue="john@linkedIn.com"
                                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm">Facebook Profile</label>
                            <input type="text" name="facebook" defaultValue="john@facebook.com"
                                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm">Twitter Profile</label>
                            <input type="text" name="twitter" defaultValue="john@twitter.com"
                                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                        </div>
                        <div>
                            <input type="submit" value="Update Profile" className="btn w-full mt-5 text-lg 
                            bg-[#124E66] text-white border-2 border-[#124E66] hover:border-[#124E66] 
                        hover:bg-transparent hover:text-[#124E66] rounded-lg" />
                        </div>
                    </div>
                </div>
            </form>

        </div>
    );
};

export default UpdateProfile;