"use client"
import Image from "next/image"
import { useState } from "react";

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <div className="h-12 w-12 relative">
                        <Image
                            src="/logo.png"
                            alt="CodeMovement Logo"
                            fill
                            style={{ objectFit: "contain" }}
                            className="rounded-full"
                        />
                    </div>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-10">
                    <a href="#" className="text-white hover:text-blue-900 transition">Home</a>
                    <a href="#" className="text-white hover:text-blue-900 transition">About us</a>
                    <a href="#" className="text-white hover:text-blue-900 transition">Services</a>
                    <a href="#" className="text-white hover:text-blue-900 transition">Digital products</a>
                </nav>

                <button className="hidden md:block bg-gray-900 text-white px-6 py-2 rounded-md transition">
                    Get Started
                </button>

                {/* Mobile menu button */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-white focus:outline-none"
                    >
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Navigation - Glassy Effect */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-16 right-6 rounded-lg p-6 z-50 backdrop-blur-md bg-white/10 border border-white/20 shadow-lg">
                    <nav className="flex flex-col space-y-4">
                        <a href="#" className="text-white hover:text-blue-900 transition font-medium">Home</a>
                        <a href="#" className="text-white hover:text-blue-900 transition font-medium">About us</a>
                        <a href="#" className="text-white hover:text-blue-900 transition font-medium">Services</a>
                        <a href="#" className="text-white hover:text-blue-900 transition font-medium">Digital products</a>
                        <button className="bg-gray-900  text-white px-4 py-2 rounded-md transition text-left">
                            Get Started
                        </button>
                    </nav>
                </div>
            )}
        </header>
    )
}