import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaLine, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 shadow-lg">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">ครัวเรา</h3>
            <p className="text-sm">
              แพลตฟอร์มแชร์สูตรอาหารที่รวบรวมสูตรอาหารอร่อยๆ จากเชฟมืออาชีพและผู้รักการทำอาหาร
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">เมนูด่วน</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-orange-400 transition-colors">หน้าแรก</Link>
              </li>
              <li>
                <Link to="/recipes" className="hover:text-orange-400 transition-colors">สูตรอาหาร</Link>
              </li>
              <li>
                <Link to="/categories" className="hover:text-orange-400 transition-colors">หมวดหมู่</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-orange-400 transition-colors">เกี่ยวกับเรา</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">ติดต่อเรา</h3>
            <ul className="space-y-2 text-sm">
              <li>📧 contact@kruarua.com</li>
              <li>📞 02-XXX-XXXX</li>
              <li>🏢 กรุงเทพมหานคร, ประเทศไทย</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">ติดตามเรา</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-2xl hover:text-orange-400 transition-colors">
                <FaFacebook />
              </a>
              <a href="#" className="text-2xl hover:text-orange-400 transition-colors">
                <FaInstagram />
              </a>
              <a href="#" className="text-2xl hover:text-orange-400 transition-colors">
                <FaLine />
              </a>
              <a href="#" className="text-2xl hover:text-orange-400 transition-colors">
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} ครัวเรา. สงวนลิขสิทธิ์</p>
          <div className="mt-2 space-x-4">
            <Link to="/privacy" className="hover:text-orange-400 transition-colors">นโยบายความเป็นส่วนตัว</Link>
            <Link to="/terms" className="hover:text-orange-400 transition-colors">เงื่อนไขการใช้งาน</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 