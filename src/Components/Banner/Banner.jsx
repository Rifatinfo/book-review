
const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-[calc(100vh-86px)] rounded-xl mt-4">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="src\assets\Banner.png" />
                <div>
                    <p className="py-6 text-5xl font-bold">
                    Books to freshen up <br/> your bookshelf
                    </p>
                    <button className="btn bg-[#23BE0A] text-white">View The List</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;