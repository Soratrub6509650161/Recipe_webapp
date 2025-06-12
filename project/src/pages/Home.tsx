import { useState } from 'react';
import { Link } from 'react-router-dom';
import background from '../assets/images/Tom-Yum-Goong.jpg';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const featuredRecipes = [
    {
      id: 1,
      title: "ต้มยำกุ้ง",
      image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=500",
      author: "เชฟสมชาย",
      likes: 1234,
      time: "30 นาที"
    },
    {
      id: 2,
      title: "ผัดไทย",
      image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=500",
      author: "เชฟสมหญิง",
      likes: 856,
      time: "20 นาที"
    },
    // Add more featured recipes
  ];

  const categories = [
    { name: "อาหารไทย", icon: "🌶️" },
    { name: "อาหารญี่ปุ่น", icon: "🍱" },
    { name: "อาหารอิตาเลียน", icon: "🍝" },
    { name: "อาหารจีน", icon: "🥢" },
    { name: "อาหารเกาหลี", icon: "🍜" },
    { name: "ขนมหวาน", icon: "🍰" },
  ];

  return (
    <div className="min-h-screen">
      <div className="bg-gray-100 mb-10 shadow-lg">
        {/* Hero Section */}
        <div className="relative h-[500px] rounded-2xl overflow-hidden">
          {/* Background Image */}
          <img
            src={background}
            alt="Food background"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60"></div>
          {/* Content */}
          <div className="relative container mx-auto px-4 h-full flex items-center">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                ค้นพบสูตรอาหารแสนอร่อย
              </h1>
              <p className="text-xl mb-8 text-white">
                แชร์และค้นพบสูตรอาหารจากเชฟมืออาชีพและผู้รักการทำอาหาร
              </p>
              <div className="relative max-w-2xl mx-auto">
                <input
                  type="text"
                  placeholder="ค้นหาสูตรอาหาร..."
                  className="w-full px-6 py-4 rounded-full text-gray-800 bg-white/80 border-2 border-white focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-300 transition-all duration-300 placeholder-gray-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className="absolute right-2 top-2 bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-all duration-300 transform hover:scale-105">
                  ค้นหา
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Categories Section */}
        <div className="container mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold mb-6">หมวดหมู่</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => (
              <Link
                key={category.name}
                to={`/category/${category.name}`}
                className="bg-white p-4 rounded-2xl shadow-sm hover:shadow-md transition text-center transform hover:scale-105"
              >
                <div className="text-3xl mb-2">{category.icon}</div>
                <div className="font-medium">{category.name}</div>
              </Link>
            ))}
          </div>
        </div>

        {/* Featured Recipes Section */}
        <div className="container mx-auto px-4 py-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">สูตรแนะนำ</h2>
            <Link to="/recipes" className="text-orange-500 hover:text-orange-600">
              ดูทั้งหมด
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredRecipes.map((recipe) => (
              <Link
                key={recipe.id}
                to={`/recipe/${recipe.id}`}
                className="bg-white rounded-2xl shadow-sm hover:shadow-md transition overflow-hidden transform hover:scale-105"
              >
                <div className="relative h-48">
                  <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2">{recipe.title}</h3>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>โดย {recipe.author}</span>
                    <span>⏱️ {recipe.time}</span>
                  </div>
                  <div className="mt-2 text-orange-500">
                    ❤️ {recipe.likes} คนถูกใจ
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-orange-50 py-12 shadow-lg">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">มีสูตรอาหารดีๆ อยากแชร์?</h2>
          <p className="text-gray-600 mb-6">
            แชร์สูตรอาหารของคุณและเป็นส่วนหนึ่งของชุมชนผู้รักการทำอาหาร
          </p>
          <Link
            to="/create-recipe"
            className="inline-block bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 transition transform hover:scale-105"
          >
            แชร์สูตรอาหาร
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home; 