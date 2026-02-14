


const Background = () => {
    return (
        <div className="fixed inset-0 z-[-1] bg-[#050816] overflow-hidden">
            <div className="absolute inset-0 z-0">
                <div className="stars"></div>
                <div className="stars2"></div>
                <div className="stars3"></div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent z-10" />
        </div>
    );
};

export default Background;
