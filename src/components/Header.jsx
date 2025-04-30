import { useState } from "react";
import { Menu, X, ShoppingCart, Heart, User, Search } from "lucide-react";
import alif_logo from "../assets/alif_logo.png";
import { Input, Space } from "antd";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = [
    "Smartfonlar va gadjetlar",
    "Noutbuklar, kompyuterlar",
    "TV va proektorlar",
    "Audiotexnikalar",
    "Transport",
    "Naborlar",
    "Uy uchun texnika",
    "Oshxona uchun texnika",
  ];

  const modalCategories = [
    "Smartfonlar va gadjetlar",
    "Noutbuklar, kompyuterlar",
    "TV va proektorlar",
    "Audiotexnikalar",
    "Transport",
    "Naborlar",
    "Uy uchun texnika",
    "Oshxona uchun texnika",
    "Telefon aksessuarlari",
    "Fotoapparatlar",
  ];

  return (
    <div>
      <div className="bg-white shadow-md px-4 py-3 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex-col">
          <nav className="">
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
              <div className="flex gap-x-[50px] items-center">
                <img
                  src={alif_logo}
                  alt="Logo"
                  className="w-[113px] h-[32px]"
                />
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="flex items-center gap-4 bg-yellow-400 w-[200px] h-[45px] rounded text-black text-sm px-4 py-2 rounded hover:bg-yellow-500 transition"
                >
                  <Menu className="w-6 h-6 text-gray-600" />
                  Tovarlar katalogi
                </button>

                <div className="relative w-[400px] h-[45px]">
                  <input
                    type="text"
                    placeholder="Tovarlarni izlash"
                    className="pl-3 pr-3 py-1.5 border border-yellow-500 border-4 rounded focus:outline-none text-sm w-full"
                  />
                  <Search className="absolute right-3 top-2.5 text-gray-400 w-5 h-5" />
                </div>
              </div>

              <div className="hidden lg:flex items-center gap-4">
                <div className="flex items-center gap-4 text-gray-600">
                  <ShoppingCart className="cursor-pointer hover:text-[#ED1E26]" />
                  <Heart className="cursor-pointer hover:text-[#ED1E26]" />
                  <User className="cursor-pointer hover:text-[#ED1E26]" />
                  <div className="ml-2 text-sm font-medium">RU / UZ</div>
                </div>
              </div>

              <div className="lg:hidden">
                <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                  {mobileMenuOpen ? <X /> : <Menu />}
                </button>
              </div>
            </div>

            {mobileMenuOpen && (
              <div className="lg:hidden px-4 pb-4 space-y-4">
                <ul className="space-y-2 text-gray-700 font-medium">
                  {categories.map((item) => (
                    <li
                      key={item}
                      className="hover:text-[#ED1E26] cursor-pointer"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <input
                  type="text"
                  placeholder="Tovarlar katalogi"
                  className="mt-3 px-3 py-1.5 border rounded-full w-full focus:outline-none text-sm"
                />
                <div className="flex items-center gap-4 mt-3 text-gray-600">
                  <ShoppingCart className="cursor-pointer hover:text-[#ED1E26]" />
                  <Heart className="cursor-pointer hover:text-[#ED1E26]" />
                  <User className="cursor-pointer hover:text-[#ED1E26]" />
                  <div className="ml-2 text-sm font-medium">RU / UZ</div>
                </div>
              </div>
            )}
          </nav>

          <ul className="justify-between hidden lg:flex gap-6 text-gray-700 font-medium">
            {categories.map((item) => (
              <li
                key={item}
                className="my-2 hover:text-grey-900 pb-2 category cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999]">
          <div className="bg-white w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-lg p-6 relative">
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-red-500 text-xl font-bold"
              onClick={() => setIsModalOpen(false)}
            >
              &times;
            </button>
            <h2 className="text-xl font-semibold mb-4 text-center">
              Tovarlar katalogi
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-800 text-sm font-medium">
              {modalCategories.map((item) => (
                <li
                  key={item}
                  className="cursor-pointer px-4 py-2 hover:bg-gray-100 rounded transition"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
