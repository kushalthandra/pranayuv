import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { FaUserCircle, FaTimes } from 'react-icons/fa';

function NavBar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const modalRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setProfileOpen(false);
      }
    }

    if (profileOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [profileOpen]);

  const handleNavigate = (path) => {
    setProfileOpen(false);
    router.push(path);
  };

  return (
    <header>
      <nav
        className="w-full fixed top-0 left-0 z-50 shadow-md transition-all duration-300"
        style={{
          background: "rgba(15, 80, 145, 0.85)",
          backdropFilter: "blur(15px)",
          WebkitBackdropFilter: "blur(15px)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/logo.png" alt="Pranayuv Logo" width={40} height={40} />
              <h1 className="text-white text-2xl font-semibold tracking-wide">Pranayuv</h1>
            </Link>

            <div className="hidden md:flex md:space-x-8 text-white text-lg font-medium">
              {[
                { name: "About Us", link: "/pagescomponents/about" },
                { name: "Blog", link: "/pagescomponents/Blogandupdates" },
                { name: "Products", link: "/pagescomponents/PRODUCTS" },
                { name: "Careers", link: "/pagescomponents/Careers" },
                { name: "Services", link: "/pagescomponents/SERVICES" },
                { name: "Contact", link: "/#contact", isAnchor: true },
              ].map(({ name, link, isAnchor }) => (
                <Link key={name} href={link} className="hover:text-gray-200 transition duration-200">
                  {name}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={() => setProfileOpen(true)}
                className="text-white text-3xl focus:outline-none"
              >
                <FaUserCircle />
              </button>

              <button
                className="md:hidden focus:outline-none"
                onClick={() => setNavbarOpen(!navbarOpen)}
              >
                <Image
                  src={navbarOpen ? "/close1.svg" : "/menu.svg"}
                  alt="menu"
                  width={28}
                  height={28}
                />
              </button>
            </div>
          </div>

          {navbarOpen && (
            <div className="md:hidden pb-4">
              <ul className="flex flex-col gap-3 text-white text-lg mt-2">
                {[
                  { name: "About Us", link: "/pagescomponents/about" },
                  { name: "Blog", link: "/pagescomponents/Blogandupdates" },
                  { name: "Products", link: "/pagescomponents/PRODUCTS" },
                  { name: "Careers", link: "/pagescomponents/Careers" },
                  { name: "Services", link: "/pagescomponents/SERVICES" },
                  { name: "Contact", link: "/#contact", isAnchor: true },
                ].map(({ name, link, isAnchor }) => (
                  <li key={name}>
                    {isAnchor ? (
                      <a
                        href={link}
                        className="block px-4 py-2 hover:bg-blue-700 rounded-md"
                        onClick={() => setNavbarOpen(false)}
                      >
                        {name}
                      </a>
                    ) : (
                      <Link
                        href={link}
                        className="block px-4 py-2 hover:bg-blue-700 rounded-md"
                        onClick={() => setNavbarOpen(false)}
                      >
                        {name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </nav>

      {/* Profile Modal */}
      {profileOpen && (
        <>
          {/* Dark overlay */}
          <div
            className="fixed inset-0 z-40 bg-black bg-opacity-50 backdrop-blur-sm"
            onClick={() => setProfileOpen(false)}
          ></div>

          {/* Modal box */}
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <div
              ref={modalRef}
              className="relative w-full max-w-md p-8 rounded-3xl border-4 border-white border-opacity-30 bg-white bg-opacity-10 backdrop-blur-2xl shadow-2xl text-white text-center"
              style={{
                boxShadow: "0 0 30px rgba(255, 255, 255, 0.25), 0 0 50px rgba(0, 191, 255, 0.2)",
              }}
            >
              <button
                onClick={() => setProfileOpen(false)}
                className="absolute top-4 right-4 text-white text-xl hover:text-red-400"
              >
                <FaTimes />
              </button>

              <h2 className="text-3xl font-bold mb-4 tracking-wide">Welcome</h2>
              <p className="mb-6 text-white text-opacity-80 text-sm">Choose your action</p>

              <div className="flex justify-between gap-6">
                <button
                  onClick={() => handleNavigate('/login')}
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-xl transition-all duration-200"
                >
                  Login
                </button>
                <button
                  onClick={() => handleNavigate('/signup')}
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-xl transition-all duration-200"
                >
                  Signup
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
}

export default NavBar;
