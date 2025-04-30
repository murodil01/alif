import React from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaTelegramPlane,
  FaOdnoklassniki,
  FaTiktok,
} from "react-icons/fa";
import { SlArrowRight } from "react-icons/sl";

const Footer = () => {
  return (
    <div className="bg-slate-900 text-white py-8">
      <nav className="max-w-7xl mx-auto flex flex-wrap gap-8 justify-between px-4">
        <ul className="space-y-2">
          <li className="text-gray-400 text-lg font-semibold">Hujjatlar</li>
          <li className="hover:text-orange-400 cursor-pointer">
            Sotish uchun umumiy shartlar
          </li>
          <li className="hover:text-orange-400 cursor-pointer">Nizom</li>
          <li className="hover:text-orange-400 cursor-pointer">Guvohnoma</li>
        </ul>
        <ul className="space-y-2">
          <li className="text-gray-400 text-lg font-semibold">Servis</li>
          <li className="hover:text-orange-400 cursor-pointer">Namoz vaqti</li>
          <li className="hover:text-orange-400 cursor-pointer">
            Muddatli to'lov islomda
          </li>
          <li className="hover:text-orange-400 cursor-pointer">
            alif shopda soting!
          </li>
          <li className="hover:text-orange-400 cursor-pointer">Qaytarish</li>
        </ul>
        <ul className="space-y-2">
          <li className="text-gray-400 text-lg font-semibold">
            Tovarlar katalogi
          </li>
          <li className="hover:text-orange-400 cursor-pointer">
            Smartfonlar va telefonlar
          </li>
          <li className="hover:text-orange-400 cursor-pointer">Gadjetlar</li>
          <li className="hover:text-orange-400 cursor-pointer">
            Smartfonlar uchun aksessuarlar
          </li>
          <li className="hover:text-orange-400 cursor-pointer">
            Soat va aksessuarlar
          </li>
          <li className="hover:text-orange-400 cursor-pointer">
            Tegishli tovarlar
          </li>
        </ul>
        <ul className="space-y-2">
          <li className="text-gray-400 text-lg font-semibold">
            Biz ijtimoiy axborot vositalarida
          </li>
          <li className="flex gap-4 mt-2">
            <FaInstagram className="text-xl hover:text-orange-400 cursor-pointer" />
            <FaFacebookF className="text-xl hover:text-orange-400 cursor-pointer" />
            <FaTelegramPlane className="text-xl hover:text-orange-400 cursor-pointer" />
            <FaOdnoklassniki className="text-xl hover:text-orange-400 cursor-pointer" />
            <FaTiktok className="text-xl hover:text-orange-400 cursor-pointer" />
          </li>
          <li className="hover:text-orange-400 cursor-pointer text-gray-400 text-lg font-semibold">
            Axborot xizmati
          </li>
          <li className="hover:text-orange-400 cursor-pointer flex items-center gap-2">
            @alifshop_uz
            <SlArrowRight className="text-xl hover:text-orange-400 cursor-pointer" />
          </li>
          <li className="hover:text-orange-400 cursor-pointer flex items-center gap-2">
            +998 555 12 12 12
            <SlArrowRight className="text-xl hover:text-orange-400 cursor-pointer" />
          </li>
        </ul>
      </nav>
      <div className="max-w-7xl mx-auto mt-[20px] py-[1px] bg-white"></div>
      <p className="max-w-7xl mx-auto mt-[20px] text-gray-400 text-lg font-semibold">
        2025 © alifshop.uz
      </p>
    </div>
  );
};

export default Footer;
