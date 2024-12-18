import RekomenImage1 from "../../assets/images/bibit.jpg";
import RekomenImage2 from "../../assets/images/cabai.jpg";
import RekomenImage3 from "../../assets/images/pestisida.jpg";
import RekomenImage4 from "../../assets/images/pupuk.jpg";
import RekomenImage5 from "../../assets/images/sawit.jpg";

const Rekomendasi = () => {
  return (
    <section id="rekomendasi" className="rekomendasi pt-32" >
                    <h1 className="text-center lg:text-5xl/tight text-3xl font-medium mb-2">Rekomendasi</h1>
                    <p className="text-center">Berikut adalah rekomendasi bahan - bahan tani yang berkualitas!</p>
                    <div className="rekomendasi-box pt-12 grid px-7 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
                        <div className="box p-2 bg-white shadow">
                            <img src={RekomenImage4} alt="rekomendasi image" className="w-full h-[250px]"/>
                            <a href="https://kumparan.com/seputar-hobi/8-merk-pupuk-organik-cair-terbaik-untuk-hasil-optimal-23WIZrFqqqE" className="text-xl font-bold mt-6 mb-2">8 Merk Pupuk Organik Cair Terbaik untuk Hasil Optimal</a>
                            <p className="text-base/loose text-justify pt-4 px-2">Menemukan pupuk organik cair terbaik sangat penting untuk mendukung pertumbuhan tanaman secara optimal.  Dengan memilih pupuk organik cair yang berkualitas, petani dapat memastikan bahwa tanaman mendapatkan nutrisi yang dibutuhkan untuk tumbuh sehat.</p>
                        </div>
                        <div className="box p-2 bg-white shadow">
                            <img src={RekomenImage2} alt="rekomendasi image" className="w-full h-[250px]"/>
                            <a href="https://id.my-best.com/139392" className="text-xl font-bold mt-6 mb-2">10 Rekomendasi Bibit Cabe Rawit Terbaik (Terbaru Tahun 2024)</a>
                            <p className="text-base/loose text-justify pt-4 px-2">Jika Anda tertarik menanam cabe rawit sendiri, Anda perlu membaca artikel ini sampai habis. Dalam artikel ini, kami akan membagikan tips memilih bibit cabai rawit yang unggul. Bibit dari berbagai merek yang bagus, seperti Cap Panah Merah, Bintang Asia, dan Halbanero juga ada dalam rekomendasi kami.</p>
                        </div>
                        <div className="box p-2 bg-white shadow">
                            <img src={RekomenImage3} alt="rekomendasi image" className="w-full h-[250px]"/>
                            <a href="https://www.kliktani.com/2021/01/insektisida-sistemik.html" className="text-xl font-bold mt-6 mb-2">5 Merk Insektisida Sistemik Terbaik Untuk Tanaman Padi</a>
                            <p className="text-base/loose text-justify pt-4 px-2">Dalam artikel ini mengulas 5 merk insektisida sistemik terbaik yang bisa anda gunakan dalam mengatasi hama wereng dan ulat penggerek batang.</p>
                        </div>
                    </div>
                </section>
  );
};

export default Rekomendasi;
