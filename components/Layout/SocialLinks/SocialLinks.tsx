import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function SocialLinks() {
  return (
    <div className="flex justify-center gap-4 text-2xl text-blue-600">
      <a href="#" aria-label="Facebook" className="hover:text-blue-800 transition">
        <FaFacebook />
      </a>
      <a href="#" aria-label="Instagram" className="hover:text-pink-600 transition">
        <FaInstagram />
      </a>
      <a href="#" aria-label="LinkedIn" className="hover:text-blue-700 transition">
        <FaLinkedin />
      </a>
    </div>
  );
}
