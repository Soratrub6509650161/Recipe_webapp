import { useState } from 'react';
import { FaSearch, FaFilter, FaSort } from 'react-icons/fa';
import { Link } from 'react-router-dom';

interface Recipe {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  cookingTime: string;
  difficulty: string;
  author: {
    name: string;
    avatar: string;
  };
}

const mockRecipes: Recipe[] = [
  {
    id: 1,
    title: "ต้มยำกุ้ง",
    description: "ต้มยำกุ้งสูตรเด็ด รสชาติจัดจ้าน",
    image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "อาหารไทย",
    cookingTime: "30 นาที",
    difficulty: "ปานกลาง",
    author: {
      name: "เชฟสมชาย",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=60"
    }
  },
  {
    id: 2,
    title: "ผัดไทย",
    description: "ผัดไทยกุ้งสด สูตรต้นตำรับ",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "อาหารไทย",
    cookingTime: "20 นาที",
    difficulty: "ง่าย",
    author: {
      name: "เชฟสมหญิง",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=60"
    }
  },
  // เพิ่ม mock data ตามต้องการ
];

const Recipes = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('ทั้งหมด');
  const [sortBy, setSortBy] = useState('ล่าสุด');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(mockRecipes.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const getCurrentPageRecipes = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return mockRecipes.slice(startIndex, endIndex);
  };

  const categories = ['ทั้งหมด', 'อาหารไทย', 'อาหารญี่ปุ่น', 'อาหารอิตาเลียน', 'อาหารจีน', 'ของหวาน'];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">เมนูอาหารทั้งหมด</h1>
        <p className="text-gray-600">ค้นพบสูตรอาหารมากมายจากเชฟมืออาชีพ</p>
      </div>

      {/* Search and Filter Bar */}
      <div className="bg-white rounded-xl shadow-md p-4 mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search */}
          <div className="flex-1">
            <div className="relative">
              <input
                type="text"
                placeholder="ค้นหาสูตรอาหาร..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <FaSearch className="absolute left-3 top-3 text-gray-400" />
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex items-center gap-2">
            <FaFilter className="text-gray-400" />
            <select
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          {/* Sort */}
          <div className="flex items-center gap-2">
            <FaSort className="text-gray-400" />
            <select
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="ล่าสุด">ล่าสุด</option>
              <option value="ยอดนิยม">ยอดนิยม</option>
              <option value="คะแนนสูงสุด">คะแนนสูงสุด</option>
            </select>
          </div>
        </div>
      </div>

      {/* Recipe Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {getCurrentPageRecipes().map((recipe) => (
          <Link
            key={recipe.id}
            to={`/recipes/${recipe.id}`}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <div className="relative h-48">
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm">
                {recipe.category}
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{recipe.title}</h3>
              <p className="text-gray-600 mb-4">{recipe.description}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <img
                    src={recipe.author.avatar}
                    alt={recipe.author.name}
                    className="w-8 h-8 rounded-full mr-2"
                  />
                  <span className="text-sm text-gray-600">{recipe.author.name}</span>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span>{recipe.cookingTime}</span>
                  <span>{recipe.difficulty}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-8 flex justify-center">
        <nav className="flex items-center gap-2">
          <button 
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-3 py-1 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-50 ${
              currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            ก่อนหน้า
          </button>
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={`px-3 py-1 rounded-lg ${
                currentPage === index + 1
                  ? 'bg-orange-500 text-white'
                  : 'border border-gray-300 text-gray-600 hover:bg-gray-50'
              }`}
            >
              {index + 1}
            </button>
          ))}
          <button 
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-3 py-1 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-50 ${
              currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            ถัดไป
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Recipes; 