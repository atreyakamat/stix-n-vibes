import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function Header() {
  const location = useLocation();
  const { getItemCount } = useCart();
  const itemCount = getItemCount();

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/shop', label: 'Shop' },
    { to: '/collections', label: 'Collections' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' }
  ];

  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f3e7e8] px-10 py-3 bg-white sticky top-0 z-40">
      <div className="flex items-center gap-4 text-[#1b0e0f]">
        <Link to="/" className="flex items-center gap-4">
          <div className="size-4">
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_6_543)">
                <path
                  d="M42.1739 20.1739L27.8261 5.82609C29.1366 7.13663 28.3989 10.1876 26.2002 13.7654C24.8538 15.9564 22.9595 18.3449 20.6522 20.6522C18.3449 22.9595 15.9564 24.8538 13.7654 26.2002C10.1876 28.3989 7.13663 29.1366 5.82609 27.8261L20.1739 42.1739C21.4845 43.4845 24.5355 42.7467 28.1133 40.548C30.3042 39.2016 32.6927 37.3073 35 35C37.3073 32.6927 39.2016 30.3042 40.548 28.1133C42.7467 24.5355 43.4845 21.4845 42.1739 20.1739Z"
                  fill="currentColor"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_6_543">
                  <rect width="48" height="48" fill="white"></rect>
                </clipPath>
              </defs>
            </svg>
          </div>
          <h2 className="text-[#1b0e0f] text-lg font-bold leading-tight tracking-[-0.015em]">Stix N Vibes</h2>
        </Link>
      </div>
      <div className="flex flex-1 justify-end gap-8">
        <div className="flex items-center gap-9">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-[#1b0e0f] text-sm font-medium leading-normal ${
                location.pathname === link.to ? 'text-[#e92932]' : 'hover:text-[#e92932]'
              } transition-colors`}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex gap-2">
            <button 
              onClick={() => {
                // Toggle cart visibility - we'll implement this with the FloatingCart
                const cartEvent = new CustomEvent('toggleCart');
                window.dispatchEvent(cartEvent);
              }}
              className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#e92932] text-white text-sm font-bold leading-normal tracking-[0.015em] min-w-0 relative hover:bg-[#d61f27] transition-colors"
            >
              <div className="text-white" data-icon="ShoppingCart" data-size="20px" data-weight="regular">
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M222.14,58.87A8,8,0,0,0,216,56H54.68L49.79,29.14A16,16,0,0,0,34.05,16H16a8,8,0,0,0,0,16H34.05l48.89,178A16,16,0,0,0,98.68,224H208a8,8,0,0,0,0-16H98.68L94.68,192h118.6a16,16,0,0,0,15.74-12.95l14.28-64A8,8,0,0,0,222.14,58.87ZM213.17,176H91.17L57.05,72H206.41Z"></path>
                  <circle cx="104" cy="232" r="8"></circle>
                  <circle cx="200" cy="232" r="8"></circle>
                </svg>
              </div>
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#ff6b9d] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                  {itemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
