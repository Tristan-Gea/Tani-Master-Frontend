const Fitur = () => {
  return (
    <section id="fitur" className="fitur px-20 grid md:grid-cols-2 grid-cols-1 items-center md:gap-20 gap-10 md:pt-28 pt-32">
      <div className="box md:order-1 order-2">
        <h1 className="text-xl font-bold mb-2 flex item-center gap-3 lg:pt-10">
        <svg xmlns="http://www.w3.org/2000/svg"  className="lg:w-[30px] w-[30px] md:m-0" viewBox="0 0 24 24" fill="currentColor"><path d="M3 12C3 12.5523 3.44772 13 4 13H10C10.5523 13 11 12.5523 11 12V4C11 3.44772 10.5523 3 10 3H4C3.44772 3 3 3.44772 3 4V12ZM3 20C3 20.5523 3.44772 21 4 21H10C10.5523 21 11 20.5523 11 20V16C11 15.4477 10.5523 15 10 15H4C3.44772 15 3 15.4477 3 16V20ZM13 20C13 20.5523 13.4477 21 14 21H20C20.5523 21 21 20.5523 21 20V12C21 11.4477 20.5523 11 20 11H14C13.4477 11 13 11.4477 13 12V20ZM14 3C13.4477 3 13 3.44772 13 4V8C13 8.55228 13.4477 9 14 9H20C20.5523 9 21 8.55228 21 8V4C21 3.44772 20.5523 3 20 3H14Z"></path></svg>
          Dashboard
        </h1>
        <p className="mb-10">Merangkum seluruh aktivitas manajemen yang telah Anda lakukan</p>

        <h1 className="text-xl font-bold mb-2 flex item-center gap-3">
        <svg xmlns="http://www.w3.org/2000/svg"  className="lg:w-[30px] w-[30px] md:m-0" viewBox="0 0 24 24" fill="currentColor"><path d="M5 3V19H21V21H3V3H5ZM20.2929 6.29289L21.7071 7.70711L16 13.4142L13 10.415L8.70711 14.7071L7.29289 13.2929L13 7.58579L16 10.585L20.2929 6.29289Z"></path></svg>
          Keuangan
        </h1>
        <p className="mb-10">Mengelola pengeluaran, pemasukan, hingga keuntungan Anda</p>

        <h1 className="text-xl font-bold mb-2 flex item-center gap-3">
        <svg xmlns="http://www.w3.org/2000/svg" className="lg:w-[30px] w-[30px] md:m-0" viewBox="0 0 24 24" fill="currentColor"><path d="M12.6727 1.61162 20.7999 9H17.8267L12 3.70302 6 9.15757V19.0001H11V21.0001H5C4.44772 21.0001 4 20.5524 4 20.0001V11.0001L1 11.0001 11.3273 1.61162C11.7087 1.26488 12.2913 1.26488 12.6727 1.61162ZM14 11H23V18H14V11ZM16 13V16H21V13H16ZM24 21H13V19H24V21Z"></path></svg>
          Inventaris
        </h1>
        <p className="mb-10">Mengelola ketersediaan bahan baku atau peralatan yang Anda gunakan dalam bisnis Anda</p>

        <h1 className="text-xl font-bold mb-2 flex item-center gap-3">
        <svg xmlns="http://www.w3.org/2000/svg" className="lg:w-[30px] w-[30px] md:m-0" viewBox="0 0 24 24" fill="currentColor"><path d="M5.50045 20C6.32888 20 7.00045 20.6715 7.00045 21.5C7.00045 22.3284 6.32888 23 5.50045 23C4.67203 23 4.00045 22.3284 4.00045 21.5C4.00045 20.6715 4.67203 20 5.50045 20ZM18.5005 20C19.3289 20 20.0005 20.6715 20.0005 21.5C20.0005 22.3284 19.3289 23 18.5005 23C17.672 23 17.0005 22.3284 17.0005 21.5C17.0005 20.6715 17.672 20 18.5005 20ZM2.17203 1.75732L5.99981 5.58532V16.9993L20.0005 17V19H5.00045C4.44817 19 4.00045 18.5522 4.00045 18L3.99981 6.41332L0.757812 3.17154L2.17203 1.75732ZM16.0005 2.99996C16.5527 2.99996 17.0005 3.44768 17.0005 3.99996L16.9998 5.99932L19.9936 5.99996C20.5497 5.99996 21.0005 6.45563 21.0005 6.99536V15.0046C21.0005 15.5543 20.5505 16 19.9936 16H8.0073C7.45123 16 7.00045 15.5443 7.00045 15.0046V6.99536C7.00045 6.44562 7.4504 5.99996 8.0073 5.99996L10.9998 5.99932L11.0005 3.99996C11.0005 3.44768 11.4482 2.99996 12.0005 2.99996H16.0005ZM9.99981 7.99932L9.00045 7.99996V14L9.99981 13.9993V7.99932ZM15.9998 7.99932H11.9998V13.9993H15.9998V7.99932ZM19.0005 7.99996L17.9998 7.99932V13.9993L19.0005 14V7.99996ZM15.0005 4.99996H13.0005V5.99996H15.0005V4.99996Z"></path></svg>
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
