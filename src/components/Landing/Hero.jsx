import HeroImage from "../../assets/images/samsung.png";
import PlaystoreImage from "../../assets/images/playstore.svg";

const Hero = () => {
  return (
    <section id="hero" className="hero px-10 grid md:grid-cols-2 grid-cols-1 items-center md:gap-20 gap-10 pt-32">
      <div className="box pl-8">
        <h1 className="lg:text-5xl/tight text-3xl font-medium mb-7">
          Solusi Pintar <span className="font-bold text-green-400 italic">Manajemen</span> Bisnis Pertanian
        </h1>
        <p className="text-base/8 mb-7">
          Tani Master adalah platform manajemen usaha yang dirancang khusus untuk memudahkan petani dalam mengelola
          keuangan, stok bahan baku, produksi, hingga jadwal tanam.
        </p>
        <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
          <h1 className="bg-green-400 py-2 px-4 rounded-full shadow">
            Download<i className="ri-arrow-right-line ms-1"></i>
          </h1>
          <a href="/" target="_blank">
            <img
              src={PlaystoreImage}
              alt="Play Store"
              className="w-[200px] h-[43.08px] object-contain cursor-pointer hover:opacity-80 px-4"
            />
          </a>
        </div>
      </div>
      <div className="box">
        <img src={HeroImage} alt="Hero Image" className="md:w-[250px] w-[100px] mx-auto" />
      </div>
    </section>
  );
};

export default Hero;
