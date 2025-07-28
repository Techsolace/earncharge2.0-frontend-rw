"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { href: "/#home", label: "Home" },
    { href: "/#features", label: "Features" },
    { href: "/#about", label: "About Us" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      {/* Liquid Background Effect */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 via-emerald-500/5 to-blue-500/10">
          <div className="absolute top-10 left-10 w-32 h-32 md:w-64 md:h-64 bg-teal-400/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-20 right-20 w-24 h-24 md:w-48 md:h-48 bg-emerald-400/20 rounded-full blur-2xl animate-pulse delay-1000" />
          <div className="absolute bottom-20 left-1/3 w-40 h-40 md:w-80 md:h-80 bg-blue-400/15 rounded-full blur-3xl animate-pulse delay-500" />
        </div>
      </div>

      {/* Header */}
      <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/30 border-b border-white/10 shadow-lg">
        <div className="container mx-auto flex justify-between items-center py-4 px-4 md:py-6">
          {/* Logo */}
          <Link href="/" className="font-bold text-2xl md:text-3xl text-white">
            <span className="text-white">Earn</span>
            <span className="bg-gradient-to-r from-teal-400 to-emerald-600 bg-clip-text text-transparent">
              Charge
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/90 hover:text-teal-400 transition-all duration-300 font-medium relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-400 to-emerald-600 group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <Link
            href="https://play.google.com/store/apps/details?id=com.earnchargemobile.earncharge"
            target="_blank"
            className="hidden lg:block bg-gradient-to-r from-teal-500 to-emerald-700 text-white px-6 py-2.5 rounded-xl font-medium hover:from-teal-600 hover:to-emerald-800 transition-all duration-300 shadow-lg hover:shadow-teal-500/25 hover:scale-105"
          >
            Get Started
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors duration-200"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={toggleMobileMenu}
        />
      )}

      {/* Mobile Sidebar */}
      <div
        className={`lg:hidden fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-black/95 backdrop-blur-xl border-l border-white/10 z-50 transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Header */}
          <div className="flex justify-between items-center p-6 border-b border-white/10">
            <span className="font-bold text-xl bg-gradient-to-r from-teal-400 to-emerald-600 bg-clip-text text-transparent">
              Menu
            </span>
            <button
              onClick={toggleMobileMenu}
              className="text-white p-2 rounded-lg hover:bg-white/10 transition-colors duration-200"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Navigation */}
          <nav className="flex flex-col p-6 space-y-4 flex-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={toggleMobileMenu}
                className="text-white/90 hover:text-teal-400 transition-colors duration-200 font-medium py-3 px-4 rounded-lg hover:bg-white/5 border-l-2 border-transparent hover:border-teal-400"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile CTA */}
          <div className="p-6 border-t border-white/10">
            <Link
              href="https://play.google.com/store/apps/details?id=com.earnchargemobile.earncharge"
              target="_blank"
              onClick={toggleMobileMenu}
              className="w-full bg-gradient-to-r from-teal-950 to-emerald-700 text-white px-6 py-3 rounded-xl font-medium hover:from-teal-600 hover:to-emerald-800 transition-all duration-300 shadow-lg text-center block"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
