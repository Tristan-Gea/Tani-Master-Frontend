import React from "react";

const Contact = () => {
    return (
        <section id="contact" className="pt-36 pb-32">
            <div className="container mx-auto">
                <div className="w-full px-4">
                    <div className="max-w-xl mx-auto text-center mb-16">
                        <h2 className="font-bold text-hitam text-3xl mb-4">Hubungi Kami</h2>
                        <p className="font-medium text-md text-secondary">Jangan ragu untuk menghubungi kami untuk informasi lebih lanjut.</p>
                    </div>
                </div>
                <form className="w-full lg:w-2/3 lg:mx-auto">
                    <div className="w-full px-4 mb-8">
                        <label htmlFor="name" className="text-base font-bold text-green-600">Nama</label>
                        <input
                            type="text"
                            id="name"
                            className="w-full bg-gray-200 text-hitam p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary"
                        />
                    </div>
                    <div className="w-full px-4 mb-8">
                        <label htmlFor="email" className="text-base font-bold text-green-600">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="w-full bg-gray-200 text-hitam p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary"
                        />
                    </div>
                    <div className="w-full px-4 mb-8">
                        <label htmlFor="message" className="text-base font-bold text-green-600">Pesan</label>
                        <textarea id="message" 
                            className="w-full bg-gray-200 text-hitam p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary"
                            rows="4"
                        ></textarea>
                    </div>
                    <div className="w-full px-4">
                        <button
                            type="submit"
                            className="w-full bg-green-500 text-white py-3 rounded-md shadow-md hover:bg-green-600 focus:outline-none"
                        >
                            Kirim Pesan
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Contact;