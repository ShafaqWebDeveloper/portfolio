// components/Footer.js
import {FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 text-2xl">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Location and Contact Info */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p className="text-lg font-semibold">Al Barkat villas</p>
          <p>Satiana Road, Faisalabad , Pakistan</p>
          <p>Phone: +92 315 4917750</p>
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-6">
        
          <a href="https://github.com/ShafaqWebDeveloper" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-5xl hover:text-gray-400" />
          </a>
          <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=shafaqareej17@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
>
  <FaEnvelope className="text-5xl hover:text-gray-400" />
</a>

        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-6 text-sm">
        <p>&copy; {new Date().getFullYear()} Shafaq Areej. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
