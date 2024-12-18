const Footer = () => {
    return (
        <div className="footer bg-white shadow mt-20" id="footer">
            <div className="container mx-auto px-4 flex items-center justify-between">
                <p className="py-6">&copy; Copyright by <span className="font-bold">Tani Master</span></p>
                <div className="footer flex items-center sm:gap-7 gap-2">
                    <i className="ri-instagram-fill text-2xl"></i>
                    <i className="ri-youtube-fill text-2xl"></i>
                    <i className="ri-facebook-circle-fill text-2xl"></i>
                </div>
            </div>
        </div>
    )
}

export default Footer