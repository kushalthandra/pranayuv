import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { FaUserCircle } from 'react-icons/fa';
import supabase from '../utils/supabaseClient';

function NavBar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [user, setUser] = useState(null);
  const modalRef = useRef(null);
  const router = useRouter();

  // Fetch user on mount
  useEffect(() => {
    const getUser = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (session?.user) {
        setUser(session.user);
      }
    };

    getUser();

    // Listen to auth changes
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user || null);
    });

    return () => {
      listener?.subscription?.unsubscribe?.();
    };
  }, []);

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

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    setProfileOpen(false);
    router.push('/');
  };

  return (
    <header className="z-50 fixed w-full top-0">
        <nav className="backdrop-blur-md bg-gradient-to-r from-blue-900 via-blue-800 to-cyan-600/80 border-b border-white/10 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logo.png" alt="Pranayuv Logo" width={40} height={40} />
              <span className="text-white text-2xl font-semibold tracking-wide">Pranayuv</span>
            </Link>

            {/* Desktop Links */}
            <div className="hidden md:flex gap-8 text-white text-base font-medium">
              {[
                { name: "Home", link: "/" },
                { name: "About Us", link: "/pagescomponents/about" },
                { name: "Products", link: "/pagescomponents/PRODUCTS" },
                { name: "Careers", link: "/pagescomponents/Careers" },
                { name: "Services", link: "/pagescomponents/SERVICES" },
                { name: "Contact", link: "/pagescomponents/contact"},
              ].map(({ name, link }) => (
                <Link key={name} href={link} className="hover:text-cyan-300 transition-all duration-200">
                  {name}
                </Link>
              ))}
            </div>

            {/* Icons / Profile */}
            <div className="relative flex items-center gap-4">
              <button
                onClick={() => setProfileOpen(!profileOpen)}
                className="text-white text-base font-semibold"
              >
                {user?.user_metadata?.full_name || user?.email || <FaUserCircle size={24} />}
              </button>

              {/* Profile Dropdown */}
              {profileOpen && (
                <div
                ref={modalRef}
                className="absolute top-full right-0 mt-2 w-48 bg-white text-black rounded-xl shadow-lg border border-gray-200 z-50 origin-top-right"
              >
              
                  {user ? (
                    <>
                      <div className="px-4 py-2 font-semibold border-b border-gray-200">
                        {user.user_metadata?.full_name || user.email}
                      </div>
                      <button
                        onClick={() => handleNavigate('/profile')}
                        className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                      >
                        Profile
                      </button>
                      <button
                        onClick={() => handleNavigate('/cart')}
                        className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                      >
                        Cart
                      </button>
                      <button
                        onClick={handleLogout}
                        className="block w-full text-left px-4 py-2 text-red-500 hover:bg-red-50"
                      >
                        Logout
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => handleNavigate('/login')}
                        className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                      >
                        Login
                      </button>
                      <button
                        onClick={() => handleNavigate('/signup')}
                        className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                      >
                        Signup
                      </button>
                    </>
                  )}
                </div>
              )}

              {/* Hamburger for mobile */}
              <button className="md:hidden" onClick={() => setNavbarOpen(!navbarOpen)}>
                <Image src={navbarOpen ? "/close1.svg" : "/menu.svg"} alt="menu" width={28} height={28} />
              </button>
            </div>
          </div>

          {/* Mobile Nav */}
          {navbarOpen && (
            <div className="md:hidden pb-4">
              <ul className="flex flex-col gap-3 text-white text-base animate-fade-in-down">
                {[
                  { name: "Home", link: "/" },
                  { name: "About Us", link: "/pagescomponents/about" },
                  { name: "Products", link: "/pagescomponents/PRODUCTS" },
                  { name: "Careers", link: "/pagescomponents/Careers" },
                  { name: "Services", link: "/pagescomponents/SERVICES" },
                  { name: "Contact", link: "/#contact", isAnchor: true },
                ].map(({ name, link }) => (
                  <li key={name}>
                    <Link
                      href={link}
                      className="block px-4 py-2 rounded-md hover:bg-white/10 transition"
                      onClick={() => setNavbarOpen(false)}
                    >
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
