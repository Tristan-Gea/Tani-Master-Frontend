import dashboard from "../../assets/images/Dashboard.svg";
import keuangan from "../../assets/images/keuangan.svg";
import inventaris from "../../assets/images/inventaris.svg";
import produksi from "../../assets/images/produksi.svg";

const Fitur = () => {
  return (
    <section id="fitur" className="fitur px-20 grid md:grid-cols-2 grid-cols-1 items-center md:gap-20 gap-10 md:pt-28 pt-32">
      <div className="box md:order-1 order-2">
        <h1 className="text-xl font-bold mb-2 flex item-center gap-3 lg:pt-10">
          <img src={dashboard} alt="Dashboard Icon" className="lg:w-[30px] w-[30px] md:m-0" />
          Dashboard
        </h1>
        <p className="mb-10">Merangkum seluruh aktivitas manajemen yang telah Anda lakukan</p>

        <h1 className="text-xl font-bold mb-2 flex item-center gap-3">
          <img src={keuangan} alt="Keuangan Icon" className="lg:w-[30px] w-[30px] md:m-0" />
          Keuangan
        </h1>
        <p className="mb-10">Mengelola pengeluaran, pemasukan, hingga keuntungan Anda</p>

        <h1 className="text-xl font-bold mb-2 flex item-center gap-3">
          <img src={inventaris} alt="Inventaris Icon" className="lg:w-[30px] w-[30px] md:m-0" />
          Inventaris
        </h1>
        <p className="mb-10">Mengelola ketersediaan bahan baku atau peralatan yang Anda gunakan dalam bisnis Anda</p>

        <h1 className="text-xl font-bold mb-2 flex item-center gap-3">
          <img src={produksi} alt="Produksi Icon" className="lg:w-[30px] w-[30px] md:m-0" />
          Produksi
        </h1>
        <p>Mengelola hasil produksi Anda dengan lebih efisien</p>
      </div>
      <div className="box md:order-2 order-1">
        <h1 className="lg:text-5xl/tight text-3xl font-medium mb-7">
          Hal-hal yang <span className="font-bold text-green-400 italic">Tani Master</span> tawarkan untuk Anda
        </h1>
        <p className="text-base/loose">
          Dengan fitur-fitur intuitif, Tani Master membantu petani meningkatkan efisiensi dan produktivitas, menuju
          pertanian yang lebih modern dan berkelanjutan.
        </p>
      </div>
    </section>
  );
};

export default Fitur;
