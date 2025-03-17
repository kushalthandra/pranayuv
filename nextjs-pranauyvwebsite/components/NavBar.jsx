import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
function NavBar() 
  // State to track whether the navbar (mobile menu) is open or closed
  {
  const [navbar, setNavbar] = useState(false);
          {/* 
            Explanation of how setNavbar works:
            - When the button is clicked, `setNavbar(!navbar)` toggles the state.
            - If navbar is `true`, the menu is displayed (`block`).
            - If navbar is `false`, the menu is hidden (`hidden`).
            - The `md:block` ensures that on medium+ screens, the menu is always visible.
         */}
  return (
    <div>
      <nav className="w-full fixed top-0 left-0 right-0  z-50 shadow-lg" style={{ backgroundColor: '#0f5091' }}>
        <div className="justify-between px-4 mx-auto max-width-480 md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              {/* LOGO */}
              <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/logo.png" // Path to your logo in the /public folder
                alt="pranayuv logo"
                width={40} // Set the width of the logo
                height={40} // Set the height of the logo
                className="mr-2" // Add margin to separate the logo and text
              />
                <h2 className="text-2xl text-white font-bold">Pranayuv</h2>
              </Link>
              {/* menu BUTTON FOR MOBILE. Only visible on small screens (md:hidden) */}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  // Toggle the navbar state when the button is clicked
                  onClick={() => setNavbar(!navbar)}
                >
                  {/* If navbar is true (open), show the "close" icon, else show the "menu" icon */}          
                  {navbar ? (
                    <Image src="/close1.svg" width={30} height={30} alt="close" />
                  ) : (
                    <Image
                      src="/menu.svg"
                      width={30}
                      height={30}
                      alt="menu"
                      className="focus:border-none active:border-none"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? 'p-12 md:p-0 block' : 'hidden'
              }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex ">
                         {/* 
                           Link Component:
                           - href="/pagescomponents/about" → Navigates to the About Us page present in pages.
                           - onClick={() => setNavbar(!navbar)} → Closes the mobile menu when a link is clicked.
                           - This ensures that when a user clicks a link in mobile view, the menu closes.
                           - The state is toggled using `setNavbar(!navbar)`, setting `navbar` to `false` after clicking.
                         */}
                <li className="pb-6 text-xl text-white py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-purple-900   md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link href="/pagescomponents/about" onClick={() => setNavbar(!navbar)}>
                    About Us
                  </Link>
                </li>
                <li className="pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600   md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link href="/pagescomponents/Blogandupdates" onClick={() => setNavbar(!navbar)}>
                    Blog & Updates
                  </Link>
                </li>
                <li className="pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link href="/pagescomponents/PRODUCTS" onClick={() => setNavbar(!navbar)}>
                    Products
                  </Link>
                </li> 
                <li className="pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link href="/pagescomponents/Careers" onClick={() => setNavbar(!navbar)}>
                    Careers
                  </Link>
                </li>
                <li className="pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600   md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link href="/pagescomponents/SERVICES" onClick={() => setNavbar(!navbar)}>
                    Services
                  </Link>
                  </li>
                         {/* 
                            Contact Link:
                             - href="/#contact" → Scrolls to the "contact" section on the homepage.
                             - className="cursor-pointer hover:text-blue-600"
                             - 'cursor-pointer' makes it clear it's clickable.
                             - 'hover:text-blue-600' changes text color to blue on hover.
                        */}
                <li className="cursor-pointer pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600   md:hover:text-purple-600 md:hover:bg-transparent">
                  <a href="/#contact" className="cursor-pointer hover:text-blue-600" onClick={() => setNavbar(!navbar)}>
                    Contact
                  </a>
                </li>  
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
