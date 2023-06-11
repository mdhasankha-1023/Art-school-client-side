import useAuth from "../../../Hooks/useAuth";


const DashBoardHome = () => {
    const { user } = useAuth();

    return (
        <div>
            <div className="w-full text-center my-6">
                <div className="avatar online">
                    <div className="w-32 rounded-full text-center">
                        <img src={user.photoURL} />
                    </div>
                </div>
            </div>
            <h2 className="text-center text-3xl font-bold">Hello <span className="text-[#FF3131] ">{user.displayName}</span>, welcome to your dashboard!!</h2>
            <p className="text-center font-bold text-xl mt-4">Email: {user.email}</p>
        </div>
    );
};

export default DashBoardHome;