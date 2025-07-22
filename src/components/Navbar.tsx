'use client';

import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Improved scroll handler with throttling for better performance
    let lastScrollTop = 0;
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      // Only update state when we cross the threshold to avoid unnecessary re-renders
      if ((scrollTop > 50 && !isScrolled) || (scrollTop <= 50 && isScrolled)) {
        setIsScrolled(scrollTop > 50);
      }
      lastScrollTop = scrollTop;
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check on mount
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolled]);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const navigation = [
    { name: 'About', href: '#about', icon: 'info' },
    { name: 'Skills', href: '#skills', icon: 'package' },
    { name: 'Projects', href: '#projects', icon: 'file-text' },
    { name: 'Education', href: '#education', icon: 'users' },
    { name: 'Contact', href: '#contact', icon: 'mail' },
  ];

  // Smooth scroll function for navigation links
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    // Close mobile menu if open
    if (mobileMenuOpen) {
      closeMobileMenu();
    }
    
    // Extract target element id from href
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      // Smooth scroll to target with offset for header
      window.scrollTo({
        top: targetElement.offsetTop - 100, // Account for header height
        behavior: 'smooth'
      });
      
      // Update URL without page reload
      window.history.pushState(null, '', href);
    }
  };

  return (
    <>
      <nav className={cn(
        "fixed font-sans top-0 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ease-in-out",
        "bg-background/80 backdrop-blur-md border border-border/20",
        "shadow-lg shadow-black/5 dark:shadow-white/5",
        isScrolled 
          ? "w-[90%] md:w-[80%] lg:w-[70%] mt-4 rounded-2xl px-4 py-1.5" 
          : "w-full mt-0 rounded-none px-6 py-3")}>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3 flex-shrink-0">
            <Link 
              href="#about" 
              className="flex items-center space-x-3 group"
              onClick={(e) => handleSmoothScroll(e, '#about')}
            >
              <div className="overflow-hidden h-10 flex items-center">
                <span className="font-bold text-xl text-primary">Kartikey Mishra</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className={cn(
            "hidden md:flex items-center space-x-6 transition-opacity duration-300 ml-8 mr-4",
            isScrolled ? "opacity-0 md:opacity-100" : "opacity-100")}>
            {navigation.map((item) => (
              <a 
                key={item.name} 
                href={item.href}
                onClick={(e) => handleSmoothScroll(e, item.href)}
                className="font-bold text-sm text-muted-foreground hover:text-primary transition-colors duration-200 relative group"
                aria-label={`Navigate to ${item.name}`}
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-3">
            {/* Contact options - Desktop */}
            <div className="hidden md:flex items-center gap-2">
              {/* Email */}
              <a 
                href="mailto:kartikey.m1210@gmail.com" 
                className={cn(
                  "flex items-center gap-1.5 text-sm font-medium",
                  "border border-border/50 rounded-full px-3 py-1.5",
                  "hover:bg-secondary/80 hover:border-primary/30 transition-all",
                  "group",
                  isScrolled ? "opacity-100" : "opacity-90"
                )}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary group-hover:scale-110 transition-transform">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <span>Email</span>
              </a>
              {/* GitHub */}
              <a 
                href="https://github.com/XD-coder" 
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "flex items-center gap-1.5 text-sm font-medium",
                  "border border-border/50 rounded-full px-3 py-1.5",
                  "hover:bg-gray-100 dark:hover:bg-gray-800 hover:border-gray-400 dark:hover:border-gray-600 transition-all",
                  "group",
                  isScrolled ? "opacity-100" : "opacity-90"
                )}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="navbar-github-logo group-hover:scale-110 transition-transform" style={{ color: 'var(--color-foreground)' }}>
                  <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.254-.446-1.272.098-2.652 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.38.202 2.398.1 2.652.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.417-.012 2.747 0 .267.18.577.688.48C19.138 20.2 22 16.448 22 12.021 22 6.484 17.523 2 12 2z" />
                </svg>
                <span>GitHub</span>
              </a>
              {/* LinkedIn */}
              <a 
                href="https://www.linkedin.com/in/kartikey-mishra-028205215/" 
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "flex items-center gap-1.5 text-sm font-medium",
                  "border border-border/50 rounded-full px-3 py-1.5",
                  "hover:bg-blue-50 dark:hover:bg-blue-950/30 hover:border-blue-400 dark:hover:border-blue-600 transition-all",
                  "group",
                  isScrolled ? "opacity-100" : "opacity-90"
                )}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="group-hover:scale-110 transition-transform" style={{ color: 'var(--color-accent-foreground)' }}>
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.87 0-2.156 1.46-2.156 2.968v5.699h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.04 0 3.601 2.002 3.601 4.604v5.592z" />
                </svg>
                <span>LinkedIn</span>
              </a>
            </div>

            {/* Contact options - Mobile */}
            <div className="flex md:hidden items-center gap-2">
              {/* Phone */}
              <a 
                href="tel:+918690686982" 
                className={cn(
                  "flex items-center justify-center",
                  "w-9 h-9 border border-border/50 rounded-full",
                  "hover:bg-secondary/80 hover:border-primary/30 transition-all"
                )}
                aria-label="Call us"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </a>
              
              {/* WhatsApp - Mobile */}
              <a 
                href="https://wa.me/918690686982" 
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "flex items-center justify-center",
                  "w-9 h-9 border border-border/50 rounded-full",
                  "hover:bg-green-50 dark:hover:bg-green-950/30 hover:border-green-300 dark:hover:border-green-800/50 transition-all"
                )}
                aria-label="WhatsApp"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#25D366" stroke="currentColor" strokeWidth="0" className="text-[#25D366]">
                  <path fillRule="evenodd" clipRule="evenodd" d="M18.403 5.633A8.919 8.919 0 0 0 12.053 3c-4.948 0-8.976 4.027-8.978 8.977 0 1.582.413 3.126 1.198 4.488L3 21.116l4.759-1.249a8.981 8.981 0 0 0 4.29 1.093h.004c4.947 0 8.975-4.027 8.977-8.977a8.926 8.926 0 0 0-2.627-6.35m-6.35 13.812h-.003a7.446 7.446 0 0 1-3.798-1.041l-.272-.162-2.824.741.753-2.753-.177-.282a7.448 7.448 0 0 1-1.141-3.971c.002-4.114 3.349-7.461 7.465-7.461a7.413 7.413 0 0 1 5.275 2.188 7.42 7.42 0 0 1 2.183 5.279c-.002 4.114-3.349 7.462-7.461 7.462m4.093-5.589c-.225-.113-1.327-.655-1.533-.73-.205-.075-.354-.112-.504.112s-.58.729-.711.879-.262.168-.486.056-.947-.349-1.804-1.113c-.667-.595-1.117-1.329-1.248-1.554s-.014-.346.099-.458c.101-.1.224-.262.336-.393.112-.131.149-.224.224-.374s.038-.281-.019-.393c-.056-.113-.505-1.217-.692-1.666-.181-.435-.366-.377-.504-.383a9.65 9.65 0 0 0-.429-.008.826.826 0 0 0-.599.28c-.206.225-.785.767-.785 1.871s.804 2.171.916 2.321c.112.15 1.582 2.415 3.832 3.387.536.231.954.369 1.279.473.537.171 1.026.146 1.413.089.431-.064 1.327-.542 1.514-1.066.187-.524.187-.973.131-1.067-.056-.094-.207-.151-.43-.263" />
                </svg>
              </a>
            </div>
            
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-1.5 rounded-full hover:bg-secondary transition-colors duration-200"
              aria-label="Toggle dark mode">
              {isDarkMode ? (
                <Sun className="w-5 h-5 text-yellow-500"/>
              ) : (
                <Moon className="w-5 h-5 text-muted-foreground"/>
              )}
            </button>
            
            {/* Mobile Menu Button - Only visible on mobile */}
            <button
              className="md:hidden p-1.5 rounded-full hover:bg-secondary transition-colors duration-200"
              onClick={toggleMobileMenu}
              aria-label="Open menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-foreground" />
              ) : (
                <Menu className="w-5 h-5 text-foreground" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay with Animation */}
      <AnimatePresence mode="wait">
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col md:hidden overflow-y-auto"
          >
            <div className="flex flex-col h-full w-full p-6">
              {/* Header with Logo */}
              <div className="flex items-center justify-between px-2 pb-4 mb-6 border-b border-border">
                <div className="flex items-center">
                  <img src="/Raviraj Rice Industry - logo.png" alt="Raviraj Rice Industry Logo" className="h-8 mr-2" />
                  <div className="text-sm text-muted-foreground">Premium Rice Manufacturers</div>
                </div>
                <button 
                  onClick={closeMobileMenu}
                  className="p-2 rounded-md hover:bg-secondary/80"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              {/* Navigation Links */}
              <motion.div
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="flex flex-col items-center space-y-8"
              >
                {navigation.map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    className="flex items-center justify-center text-lg font-medium text-foreground hover:text-primary transition-colors py-2 px-4 rounded-md hover:bg-secondary/50 w-full"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 * index + 0.3 }}
                    onClick={(e) => handleSmoothScroll(e, item.href)}
                  >
                    <span className="mr-3 text-primary">
                      {item.icon === 'home' && (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                          <polyline points="9 22 9 12 15 12 15 22"></polyline>
                        </svg>
                      )}
                      {item.icon === 'info' && (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10"></circle>
                          <line x1="12" y1="16" x2="12" y2="12"></line>
                          <line x1="12" y1="8" x2="12.01" y2="8"></line>
                        </svg>
                      )}
                      {item.icon === 'package' && (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                          <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                          <line x1="12" y1="22.08" x2="12" y2="12"></line>
                        </svg>
                      )}
                      {item.icon === 'users' && (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                          <circle cx="9" cy="7" r="4"></circle>
                          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                        </svg>
                      )}
                      {item.icon === 'file-text' && (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                          <polyline points="14 2 14 8 20 8"></polyline>
                          <line x1="16" y1="13" x2="8" y2="13"></line>
                          <line x1="16" y1="17" x2="8" y2="17"></line>
                          <polyline points="10 9 9 9 8 9"></polyline>
                        </svg>
                      )}
                      {item.icon === 'mail' && (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                          <polyline points="22,6 12,13 2,6"></polyline>
                        </svg>
                      )}
                    </span>
                    {item.name}
                  </motion.a>
                ))}
              </motion.div>

              {/* Contact Info in Menu */}
              <motion.div 
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mt-12 space-y-5"
              >
                <div className="text-sm font-medium text-muted-foreground text-center mb-4 uppercase tracking-wider border-b border-border pb-2">Contact Us</div>
                
                <div className="flex flex-col space-y-4">
                  <a href="tel:+918690686982" className="flex items-center space-x-3 hover:text-primary transition-colors group">
                    <div className="w-10 h-10 rounded-full bg-secondary/50 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-medium">Call Us</div>
                      <span className="text-sm text-muted-foreground">+91 8690686982</span>
                    </div>
                  </a>
                
                  <a href="https://wa.me/918690686982" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 hover:text-primary transition-colors group">
                    <div className="w-10 h-10 rounded-full bg-secondary/50 flex items-center justify-center group-hover:bg-green-50 dark:group-hover:bg-green-950/30 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#25D366" stroke="currentColor" strokeWidth="0" className="text-[#25D366]">
                        <path fillRule="evenodd" clipRule="evenodd" d="M18.403 5.633A8.919 8.919 0 0 0 12.053 3c-4.948 0-8.976 4.027-8.978 8.977 0 1.582.413 3.126 1.198 4.488L3 21.116l4.759-1.249a8.981 8.981 0 0 0 4.29 1.093h.004c4.947 0 8.975-4.027 8.977-8.977a8.926 8.926 0 0 0-2.627-6.35m-6.35 13.812h-.003a7.446 7.446 0 0 1-3.798-1.041l-.272-.162-2.824.741.753-2.753-.177-.282a7.448 7.448 0 0 1-1.141-3.971c.002-4.114 3.349-7.461 7.465-7.461a7.413 7.413 0 0 1 5.275 2.188 7.42 7.42 0 0 1 2.183 5.279c-.002 4.114-3.349 7.462-7.461 7.462m4.093-5.589c-.225-.113-1.327-.655-1.533-.73-.205-.075-.354-.112-.504.112s-.58.729-.711.879-.262.168-.486.056-.947-.349-1.804-1.113c-.667-.595-1.117-1.329-1.248-1.554s-.014-.346.099-.458c.101-.1.224-.262.336-.393.112-.131.149-.224.224-.374s.038-.281-.019-.393c-.056-.113-.505-1.217-.692-1.666-.181-.435-.366-.377-.504-.383a9.65 9.65 0 0 0-.429-.008.826.826 0 0 0-.599.28c-.206.225-.785.767-.785 1.871s.804 2.171.916 2.321c.112.15 1.582 2.415 3.832 3.387.536.231.954.369 1.279.473.537.171 1.026.146 1.413.089.431-.064 1.327-.542 1.514-1.066.187-.524.187-.973.131-1.067-.056-.094-.207-.151-.43-.263" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-medium">WhatsApp</div>
                      <span className="text-sm text-muted-foreground">Chat with us</span>
                    </div>
                  </a>
                
                  <a href="mailto:ravirajricemill@gmail.com" className="flex items-center space-x-3 hover:text-primary transition-colors group">
                    <div className="w-10 h-10 rounded-full bg-secondary/50 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-medium">Email Us</div>
                      <span className="text-sm text-muted-foreground">ravirajricemill@gmail.com</span>
                    </div>
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;