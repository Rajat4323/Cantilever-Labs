import { Link } from "react-router-dom";
import { Instagram, Linkedin, Facebook, Youtube } from "lucide-react";
import '@fontsource/poppins';


const Footer = () => {
  return (
    <footer className="bg-[#1E1E1E] text-white py-16 font-poppins">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <img src="/image20.png" alt="Cantilever" className="h-[56px] w-[300px] mb-4" />
            <p className="mt-8 text-sm text-gray-400">© Copyright 2018 Cantilever Labs - All Rights Reserved</p>
            <div className="mt-4">
              <p className="text-sm text-gray-400">T-HUB Catalyst Building</p>
              <p className="text-sm text-gray-400">IIIT Hyderabad Campus</p>
              <p className="text-sm text-gray-400">Email - info@cantileverlabs.com</p>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Navigation</h4>
            <div className="flex flex-col space-y-2">
              <Link to="" className="text-sm text-gray-400 hover:text-white transition-colors">Work</Link>
              <Link to="" className="text-sm text-gray-400 hover:text-white transition-colors">About Us</Link>
              <Link to="" className="text-sm text-gray-400 hover:text-white transition-colors">Jobs/Internships</Link>
              <Link to="" className="text-sm text-gray-400 hover:text-white transition-colors">Contact</Link>
              <Link to="" className="text-sm text-gray-400 hover:text-white transition-colors">Blogs</Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-sm text-gray-400 hover:text-white">Privacy Policy</Link>
              <Link to="/" className="block text-sm text-gray-400 hover:text-white">Help center</Link>
              <Link to="" className="block text-sm text-gray-400 hover:text-white">Sitemap</Link>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
            <input
              type="email"
              placeholder="Your Email ID"
              className="w-full px-4 py-2 rounded-md bg-white text-black mb-4"
            />
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white"><Instagram className="h-6 w-6" /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Linkedin className="h-6 w-6" /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Facebook className="h-6 w-6" /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Youtube className="h-6 w-6" /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
