import React, { useState } from 'react';
import { Menu, X, ShoppingCart, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { LanguageSwitcher } from './LanguageSwitcher';
import { useLanguage } from '../contexts/LanguageContext';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed w-full bg-gray-900/95 backdrop-blur-sm z-50 border-b border-gray-800">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-white hover:text-amber-500 transition-colors">
            <Logo />
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/products" className="text-gray-300 hover:text-amber-500 transition-colors">
              {t('nav.products')}
            </Link>
            <Link to="/customize" className="text-gray-300 hover:text-amber-500 transition-colors">
              {t('nav.customize')}
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-amber-500 transition-colors">
              {t('nav.about')}
            </Link>
            <Link to="/blog" className="text-gray-300 hover:text-amber-500 transition-colors">
              {t('nav.blog')}
            </Link>
            <Link to="/contact" className="text-gray-300 hover:text-amber-500 transition-colors">
              {t('nav.contact')}
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <LanguageSwitcher />
            <Link to="/cart" className="p-2 hover:bg-gray-800 rounded-full text-gray-300 hover:text-amber-500 transition-colors">
              <ShoppingCart className="w-6 h-6" />
            </Link>
            <Link to="/account" className="p-2 hover:bg-gray-800 rounded-full text-gray-300 hover:text-amber-500 transition-colors">
              <User className="w-6 h-6" />
            </Link>
            <button 
              className="md:hidden p-2 hover:bg-gray-800 rounded-full text-gray-300 hover:text-amber-500 transition-colors"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="absolute left-0 right-0 px-4 pt-2 pb-4 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 shadow-xl">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/products" 
                className="text-gray-300 hover:text-amber-500 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.products')}
              </Link>
              <Link 
                to="/customize" 
                className="text-gray-300 hover:text-amber-500 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.customize')}
              </Link>
              <Link 
                to="/about" 
                className="text-gray-300 hover:text-amber-500 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.about')}
              </Link>
              <Link 
                to="/blog" 
                className="text-gray-300 hover:text-amber-500 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.blog')}
              </Link>
              <Link 
                to="/contact" 
                className="text-gray-300 hover:text-amber-500 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.contact')}
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}