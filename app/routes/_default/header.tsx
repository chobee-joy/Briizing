import { Bars3Icon } from "@heroicons/react/24/solid";
import { Link } from "@remix-run/react";
import { useState } from "react";
import { GNB_MENU } from "../_lib/constant.nav";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const gnb = GNB_MENU;

  return (
    <header className="sticky top-0 z-30 flex items-center justify-between h-[70px] bg-[#f5f7ff] px-4">
      <h1 className="text-3xl text-black">
        <Link to="/" onClick={() => setIsMenuOpen(false)} className="font-bold">RIIZE</Link>
      </h1>
      <button type="button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <Bars3Icon className="text-black size-8" />
      </button>
      { isMenuOpen && (
        <nav className="fixed top-[70px] inset-x-0 bottom-0 bg-white overflow-y-auto">
          {gnb.map((item, index) => (
            <li key={index}>
              <Link to={item.path} onClick={() => setIsMenuOpen(false)} className="block px-6 py-4 border-b border-gray-200">{item.title}</Link>
            </li>
          ))}
        </nav>
      )}
    </header>
  );
}

export default Header;
