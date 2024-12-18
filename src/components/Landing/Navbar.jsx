import { useEffect, useState } from "react"
import logoImage from "../../assets/images/logo.svg"
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
    const[show, setShow] = useState(false)
    const[scroll, setScroll] = useState(false)
    const navigate = useNavigate();

    const scrollToSection = (sectionId) => {
        navigate("/"); // Pastikan pindah ke halaman utama dulu
        setTimeout(() => {
          const section = document.getElementById(sectionId);
          if (section) {
            section.scrollIntoView({ behavior: "smooth" });
          }
        }, 0); // Timeout diperlukan agar navigasi selesai dulu
      };

    const handleClick = () => {
        setShow(!show)
        // console.log(show);
        
    }

    let menuActive = show ? "right-0" : "-right-full"

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 5) {
                console.log("test");
                setScroll(true)
                setShow(false)
            } else {
                setScroll(false)
            }
        })
    })

    let scrollActive = scroll ? "py-2 shadow" : "py-4"

    return (
    <div className={`navbar fixed w-full transition-all backdrop-blur-md bg-transparent pr-[50px] pl-[50px] py-3 top-0 left-0 right-0 z-50  ${scrollActive}`}>
            <div className="container mx-auto px-4">
                <div className="navbar-box flex items-center justify-between">
                    <div className="logo">
                        <img src={logoImage} alt="logo image" className="w-[100px] h-[60px]"/>
                    </div>
                    <ul className={`flex lg:gap-12 md:static md:flex-row md:shadow-none md:bg-transparent md:w-auto md:h-full md:translate-y-0 md:p-0 md:m-0 md:transition-none gap-8 fixed ${menuActive} top-32 translate-y-1/2 flex-col px-8 py-6 rounded shadow-lg shadow-slate-300 bg-green-400 font-bold transition-all`}>
                        <li className="flex items-center gap-3" onClick={() => navigate("/")}>
                            <i className="ri-home-4-line text-3xl md:hidden block"></i>
                            <a href="#home" className="font-medium opacity-75 border-transparent px-2 py-0.5 rounded-full hover:bg-green-400 transition duration-200">Beranda</a>
                        </li>
                        <li className="flex items-center gap-3" onClick={() => scrollToSection("fitur")}>
                            <i className="ri-stack-line text-3xl md:hidden block"></i>
                            <a href="#fitur" className="font-medium opacity-75 border-transparent px-2 py-0.5 rounded-full hover:bg-green-400 transition duration-200">Fitur</a>
                        </li>
                        <li className="flex items-center gap-3" onClick={() => scrollToSection("rekomendasi")}>
                            <i className="ri-contacts-line text-3xl md:hidden block"></i>
                            <a href="#rekomendasi" className="font-medium opacity-75 border-transparent px-2 py-0.5 rounded-full hover:bg-green-400 transition duration-200">Rekomendasi</a>
                        </li>
                        <li className="flex items-center gap-3" onClick={() => scrollToSection("contact")}>
                            <i className="ri-phone-line text-3xl md:hidden block"></i>
                            <a href="#contact" className="font-medium opacity-75 border-transparent px-2 py-0.5 rounded-full hover:bg-green-400 transition duration-200">Kontak</a>
                        </li>
                        {/* <li className="flex items-center gap-3">
                            <i className="ri-mobile-download-line text-3xl md:hidden block"></i>
                            <a href="#" className="font-medium opacity-75">Unduh</a>
                        </li> */}
                    </ul>
                    <div className="login flex items-center gap-2">
                        <button onClick={() => navigate("/auth")} href="#" className="bg-green-400 px-5 py-2 rounded-full font-bold hover:bg-green-600 transition duration-300 ease-in-out">Masuk | Daftar</button>
                        <i className="ri-menu-3-line text-3xl md:hidden block" onClick={handleClick}></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar