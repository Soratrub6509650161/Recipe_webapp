import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const RecipeDetail = () => {
  const { id } = useParams();
  const [isSaved, setIsSaved] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  // Mock data - replace with actual API call
  const recipe = {
    id: 1,
    title: "ต้มยำกุ้ง",
    description: "ต้มยำกุ้งสูตรเด็ด รสชาติจัดจ้าน กลมกล่อม",
    author: {
      name: "เชฟสมชาย",
      avatar: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=500",
    },
    images: [
      "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=500",
      "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=500",
    ],
    cookingTime: "30 นาที",
    difficulty: "ปานกลาง",
    servings: "2-3 คน",
    likes: 1234,
    saves: 856,
    ingredients: [
      { name: "กุ้ง", amount: "500", unit: "กรัม" },
      { name: "เห็ดฟาง", amount: "200", unit: "กรัม" },
      { name: "มะเขือเทศ", amount: "2", unit: "ลูก" },
      { name: "พริกขี้หนู", amount: "5", unit: "เม็ด" },
      { name: "น้ำปลา", amount: "2", unit: "ช้อนโต๊ะ" },
    ],
    steps: [
      {
        description: "ล้างกุ้งให้สะอาด ผ่าหลังกุ้งเพื่อเอาเส้นดำออก",
        image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=500",
      },
      {
        description: "ต้มน้ำให้เดือด ใส่กุ้งลงไปต้มจนสุก",
        image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=500",
      },
      {
        description: "ใส่เห็ดฟางและมะเขือเทศลงไปต้มต่อ",
        image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=500",
      },
      {
        description: "ปรุงรสด้วยน้ำปลาและพริกขี้หนู",
        image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=500",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-96">
        <img
          src={recipe.images[0]}
          alt={recipe.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40">
          <div className="container mx-auto px-4 h-full flex items-end pb-8">
            <div className="text-white">
              <h1 className="text-4xl font-bold mb-2">{recipe.title}</h1>
              <p className="text-lg mb-4">{recipe.description}</p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <img
                    src={recipe.author.avatar}
                    alt={recipe.author.name}
                    className="w-10 h-10 rounded-full mr-2"
                  />
                  <span>{recipe.author.name}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>⏱️ {recipe.cookingTime}</span>
                  <span>•</span>
                  <span>👥 {recipe.servings}</span>
                  <span>•</span>
                  <span>📊 {recipe.difficulty}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Action Buttons */}
          <div className="flex justify-end space-x-4 mb-8">
            <button
              onClick={() => setIsLiked(!isLiked)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full ${
                isLiked
                  ? 'bg-red-500 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
            >
              <span>❤️</span>
              <span>{recipe.likes}</span>
            </button>
            <button
              onClick={() => setIsSaved(!isSaved)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full ${
                isSaved
                  ? 'bg-orange-500 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
            >
              <span>🔖</span>
              <span>บันทึก</span>
            </button>
          </div>

          {/* Ingredients */}
          <div className="bg-white p-6 rounded-2xl shadow-sm mb-8">
            <h2 className="text-2xl font-bold mb-4">วัตถุดิบ</h2>
            <ul className="space-y-2">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="flex items-center">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                  <span>
                    {ingredient.name} {ingredient.amount} {ingredient.unit}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Steps */}
          <div className="space-y-8">
            <h2 className="text-2xl font-bold">ขั้นตอนการทำ</h2>
            {recipe.steps.map((step, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center mr-4">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold">
                    ขั้นตอนที่ {index + 1}
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">{step.description}</p>
                {step.image && (
                  <img
                    src={step.image}
                    alt={`ขั้นตอนที่ ${index + 1}`}
                    className="w-full h-64 object-cover rounded-2xl"
                  />
                )}
              </div>
            ))}
          </div>

          {/* Comments Section */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">ความคิดเห็น</h2>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <div className="flex space-x-4 mb-6">
                <img
                  src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=500"
                  alt="User"
                  className="w-10 h-10 rounded-full"
                />
                <div className="flex-grow">
                  <textarea
                    className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-orange-300 focus:border-orange-300"
                    rows={3}
                    placeholder="แสดงความคิดเห็น..."
                  />
                  <div className="flex justify-end mt-2">
                    <button className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition transform hover:scale-105">
                      แสดงความคิดเห็น
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail; 