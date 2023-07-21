'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import Image from 'next/legacy/image'
import styles from '../../styles/navbar.module.css'
import '../../i18n/i18n';
import { useTranslation } from 'react-i18next';
import {RiMenuFoldLine,RiMenuUnfoldLine} from 'react-icons/ri'
const Navbar = () => {
    const { t, i18n } = useTranslation();
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };

    const clickHandle = async (lang) => {
      await i18n.changeLanguage(lang);
    };
    

    useEffect(() => {
        const handleScroll = () => {
          const scrollTop = window.pageYOffset;
          if (scrollTop > 0) {
            setScrolled(true);
          } else {
            setScrolled(false);
          }
        };
    
        if (typeof window !== 'undefined') {
          window.addEventListener('scroll', handleScroll);
    
          return () => {
            window.removeEventListener('scroll', handleScroll);
          };
        }
      }, []);

      const pcClipPath = 'polygon(48% 0, 100% 0, 100% 71%, 100% 50%, 50% 75%, 0 100%, 0 100%, 0 100%, 0 46%, 0 0)';
  const mobileClipPath = 'polygon(50% 0%, 81% 0, 100% 0, 100% 0, 100% 46%, 20% 100%, 0 100%, 0% 70%, 0% 35%, 0 0)';
  
  const clipPath = typeof window !== 'undefined' && window.innerWidth <= 768 ? mobileClipPath : pcClipPath;
  return (
    <header
    id='head'
    className={`fixed text-black w-full z-50
    ${scrolled ? 'bg-white transition-colors duration-300 ease-linear ' : 'bg-transparent'}`}
    style={{
      clipPath: clipPath,
          
    }}
  >
    <div className="container flex flex-row flex-wrap items-center justify-between p-5 mx-auto md:flex-row">

      <Link href="/" className="flex items-center mb-4 font-medium text-gray-900 title-font md:mb-0">
        <Image alt="logo" src="/assets/main/logo.png" width={133} height={85}/>
      </Link>
      
      <div className="mr-10 md:hidden">
        <button onClick={toggleMenu}>
          {menuOpen ? (
            <RiMenuUnfoldLine className="w-6 h-8 text-black" />
          ) : (
            <RiMenuFoldLine className="w-6 h-8 text-black" />
          )}
        </button>
      </div>

      {/* PC Görünüm */}
      <nav className="flex-row flex-wrap items-center justify-between hidden mr-24 md:flex md:ml-auto">
        <Link href="/" className="mr-5 hover:text-gray-900">  
          <span className={styles.link_wrapper}>{t('Home')}</span>
        </Link>

        <Link href="/services" className="mr-5 hover:text-gray-900"> 
          <span className={styles.link_wrapper}>{t('Services')}</span>
        </Link>

        <Link href="/project" className="mr-5 hover:text-gray-900">
          <span className={styles.link_wrapper}>{t('Project')}</span>
        </Link>
        <Link href="/about" className="mr-5 hover:text-gray-900"> 
          <span className={styles.link_wrapper}>{t('About')}</span>
        </Link>
        <Link href="/contact" className="mr-5 hover:text-gray-900"> 
          <span className={styles.link_wrapper}>{t('Contact')}</span>
        </Link>
      </nav>
      
      {/* Dil Değiştirme Butonları */}
      <button variant="text" size="sm" className={`hidden lg:inline-block ${styles.button1}`} onClick={() => clickHandle('tr')}>
        <span>TR /</span>
      </button>
      <button variant="text" size="sm" className={`hidden lg:inline-block ${styles.button2}`} onClick={() => clickHandle('en')}>
        <span>EN</span>
      </button>
    </div>

    {/* Mobil Görünüm */}
    <nav className={`md:hidden ${menuOpen ? 'block' : 'hidden'}`}>
      <Link href="/" className="block my-4 hover:text-gray-900">  
        <span className={styles.link_wrapper}>{t('Home')}</span>
      </Link>

      <Link href="/services" className="block my-4 hover:text-gray-900"> 
        <span className={styles.link_wrapper}>{t('Services')}</span>
      </Link>

      <Link href="/project" className="block my-4 hover:text-gray-900">
        <span className={styles.link_wrapper}>{t('Project')}</span>
      </Link>
      <Link href="/about" className="block my-4 hover:text-gray-900"> 
        <span className={styles.link_wrapper}>{t('About')}</span>
      </Link>
      <Link href="/contact" className="block my-4 hover:text-gray-900"> 
        <span className={styles.link_wrapper}>{t('Contact')}</span>
      </Link>
    </nav>
  </header>
  )
}

export default Navbar