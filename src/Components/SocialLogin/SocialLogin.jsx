import { FaGoogle } from "react-icons/fa";


const SocialLogin = () => {
    return (
        <div className="w-full text-center mt-5 cursor-pointer">
            <div className="border border-gray-500 p-2 rounded-full inline-block bg-white text-[#3F7EE8]">
                <FaGoogle size='1.5em'></FaGoogle>
            </div>
        </div>
    );
};

export default SocialLogin;