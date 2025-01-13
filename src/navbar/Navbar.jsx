import React, { useState } from 'react';
import { gsap } from 'gsap';
import { RiMenu3Line } from 'react-icons/ri';
import { RxCross2 } from 'react-icons/rx';
import { useGSAP } from '@gsap/react';
import ScrollLink from '../ScrollLink';
import Userdeatils from '../Userdeatils/userdeatils';
import { isAuthenticated } from '../auth/auth';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [profile, setProfile] = useState(true);
  const navigate = useNavigate()
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleProfile = () => {
    setProfile(!profile); 
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setProfile(false);
    navigate("/login")
  };

  useGSAP(() => {
    gsap.from(".logo, .navbar-link, .navbar-icon", {
      opacity: 0,
      y: -20,
      duration: 0.5,
      ease: "sine.out",
      stagger: 0.2,
      delay: 0.5,
    });
  }, []);

  useGSAP(() => {
    if (isMenuOpen) {
      gsap.to(".mobile-menu", { x: 0, duration: 0.5, ease: "power3.out" });
      gsap.from(".menu-link", {
        opacity: 0,
        y: 20,
        duration: 0.5,
        ease: "sine.out",
        stagger: 0.2,
      });
    } else {
      gsap.to(".mobile-menu", { x: "-100%", duration: 0.5, ease: "power3.in" });
    }
  }, [isMenuOpen]);

  return (
    <>
      <nav className="flex bg-[#50220E] text-white w-full justify-between items-center h-[70px] px-4 lg:px-8 border-b border-[#c1a18a]">
        <ScrollLink to={'/'}>
          <div className="flex space-x-2 items-center">
            <img src="/images/Frame.png" alt="Markly Logo" className="logo h-8" />
            <h2 className="text-2xl tarjan logo">Markly</h2>
          </div>
        </ScrollLink>
        <ul className="hidden lg:flex space-x-8 text-lg">
          <li className='navbar-link'><ScrollLink to="/">Home</ScrollLink></li>
          <li className='navbar-link'><ScrollLink to="/product">Bags</ScrollLink></li>
          <li className='navbar-link'><ScrollLink to="/product">Accessories</ScrollLink></li>
          <li className='navbar-link'><ScrollLink to="#">Blog</ScrollLink></li>
          <li className='navbar-link'><ScrollLink to="#">Contact</ScrollLink></li>
        </ul>

        <div className='flex space-x-2 items-center'>
          <div className="flex space-x-2 items-center">
            <ScrollLink to={"/cart"}>
              <img src="/images/cart.png" alt="Cart" className="navbar-icon h-[1.8rem] lg:h-8 cursor-pointer" />
            </ScrollLink>

            {isAuthenticated() ? (
              <>
                <img
                  src="/images/user.png"
                  alt="User"
                  className="navbar-icon h-[1.9rem] lg:h-[2.2rem] cursor-pointer"
                  onClick={toggleProfile}
                />
                {profile && <Userdeatils handleLogout={handleLogout} toggleProfile={toggleProfile} />}
              </>
            ) : (
              <ScrollLink to={"/login"}>
                <img
                  src="/images/user.png"
                  alt="User"
                  className="navbar-icon h-[1.9rem] lg:h-[2.2rem] cursor-pointer"
                />
              </ScrollLink>
            )}
          </div>

          <div className="lg:hidden">
            <RiMenu3Line className="text-[1.7rem] cursor-pointer" onClick={toggleMenu} />
          </div>
        </div>
      </nav>

      <div
        className="mobile-menu fixed top-0 left-0 w-[300px] h-[100vh] text-[#50220E] bg-white flex flex-col py-6 z-50 shadow-lg"
        style={{ transform: "translateX(-100%)" }}
      >
        <div className="flex border-b px-2 border-[#50220E] justify-between mb-6">
          <h2 className="text-2xl tarjan">Markly</h2>
          <RxCross2 className="text-2xl cursor-pointer" onClick={toggleMenu} />
        </div>

        <ul className="flex flex-col space-y-4 text-lg px-4 font-bold">
          <li className='menu-link' onClick={() => setIsMenuOpen(false)}><ScrollLink to="/">Home</ScrollLink></li>
          <li className='menu-link' onClick={() => setIsMenuOpen(false)}><ScrollLink to="/product">Bags</ScrollLink></li>
          <li className='menu-link' onClick={() => setIsMenuOpen(false)}><ScrollLink to="/product">Accessories</ScrollLink></li>
          <li className='menu-link' onClick={() => setIsMenuOpen(false)}><ScrollLink to="#">Blog</ScrollLink></li>
          <li className='menu-link' onClick={() => setIsMenuOpen(false)}><ScrollLink to="#">Contact</ScrollLink></li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
