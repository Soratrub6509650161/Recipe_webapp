import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import { FaUser, FaPlus, FaSignOutAlt } from 'react-icons/fa';
import { useAuth } from '../../context/AuthContext';

const Navbar = () => {
  const { isAuthenticated, user, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo} alt="ครัวเรา" className="h-8 w-8" />
            <h2 className="text-3xl font-extrabold text-orange-500 tracking-wide">ครัวเรา</h2>
          </Link>
          <div className="flex items-center space-x-6">
            {isAuthenticated ? (
              <>
                <div className="flex items-center space-x-2 text-gray-600">
                  <FaUser className="text-xl" />
                  <span>{user?.name || user?.sub || 'ผู้ใช้'}</span>
                </div>
                <Link 
                  to="/create-recipe" 
                  className="flex items-center space-x-2 bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition-all duration-300 transform hover:scale-105"
                >
                  <FaPlus className="text-lg" />
                  <span>เพิ่มสูตรอาหาร</span>
                </Link>
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-2 text-gray-600 hover:text-orange-500 transition-colors duration-300"
                >
                  <FaSignOutAlt className="text-xl" />
                  <span>ออกจากระบบ</span>
                </button>
              </>
            ) : (
              <>
                <Link 
                  to="/login" 
                  className="flex items-center space-x-2 text-gray-600 hover:text-orange-500 transition-colors duration-300"
                >
                  <FaUser className="text-xl" />
                  <span>เข้าสู่ระบบ</span>
                </Link>
                <Link 
                  to="/create-recipe" 
                  className="flex items-center space-x-2 bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition-all duration-300 transform hover:scale-105"
                >
                  <FaPlus className="text-lg" />
                  <span>เพิ่มสูตรอาหาร</span>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 