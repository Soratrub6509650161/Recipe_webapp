import { useState } from 'react';

const CreateRecipe = () => {
  const [recipe, setRecipe] = useState({
    title: '',
    description: '',
    category: '',
    cookingTime: '',
    difficulty: 'medium',
    servings: '',
    ingredients: [{ name: '', amount: '', unit: '' }],
    steps: [{ description: '', image: '' }],
  });

  const handleAddIngredient = () => {
    setRecipe({
      ...recipe,
      ingredients: [...recipe.ingredients, { name: '', amount: '', unit: '' }],
    });
  };

  const handleAddStep = () => {
    setRecipe({
      ...recipe,
      steps: [...recipe.steps, { description: '', image: '' }],
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl font-bold mb-8">สร้างสูตรอาหารใหม่</h1>

        <form className="space-y-8">
          {/* Basic Information */}
          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <h2 className="text-xl font-semibold mb-4">ข้อมูลพื้นฐาน</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  ชื่อสูตรอาหาร
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-orange-300 focus:border-orange-300"
                  value={recipe.title}
                  onChange={(e) =>
                    setRecipe({ ...recipe, title: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  คำอธิบาย
                </label>
                <textarea
                  className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-orange-300 focus:border-orange-300"
                  rows={3}
                  value={recipe.description}
                  onChange={(e) =>
                    setRecipe({ ...recipe, description: e.target.value })
                  }
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    หมวดหมู่
                  </label>
                  <select
                    className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-orange-300 focus:border-orange-300"
                    value={recipe.category}
                    onChange={(e) =>
                      setRecipe({ ...recipe, category: e.target.value })
                    }
                  >
                    <option value="">เลือกหมวดหมู่</option>
                    <option value="thai">อาหารไทย</option>
                    <option value="japanese">อาหารญี่ปุ่น</option>
                    <option value="italian">อาหารอิตาเลียน</option>
                    <option value="chinese">อาหารจีน</option>
                    <option value="korean">อาหารเกาหลี</option>
                    <option value="dessert">ขนมหวาน</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    เวลาในการทำ
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-orange-300 focus:border-orange-300"
                    placeholder="เช่น 30 นาที"
                    value={recipe.cookingTime}
                    onChange={(e) =>
                      setRecipe({ ...recipe, cookingTime: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    ความยาก
                  </label>
                  <select
                    className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-orange-300 focus:border-orange-300"
                    value={recipe.difficulty}
                    onChange={(e) =>
                      setRecipe({ ...recipe, difficulty: e.target.value })
                    }
                  >
                    <option value="easy">ง่าย</option>
                    <option value="medium">ปานกลาง</option>
                    <option value="hard">ยาก</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Ingredients */}
          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">วัตถุดิบ</h2>
              <button
                type="button"
                onClick={handleAddIngredient}
                className="text-orange-500 hover:text-orange-600"
              >
                + เพิ่มวัตถุดิบ
              </button>
            </div>
            <div className="space-y-4">
              {recipe.ingredients.map((ingredient, index) => (
                <div key={index} className="grid grid-cols-12 gap-4">
                  <div className="col-span-5">
                    <input
                      type="text"
                      className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-orange-300 focus:border-orange-300"
                      placeholder="ชื่อวัตถุดิบ"
                      value={ingredient.name}
                      onChange={(e) => {
                        const newIngredients = [...recipe.ingredients];
                        newIngredients[index].name = e.target.value;
                        setRecipe({ ...recipe, ingredients: newIngredients });
                      }}
                    />
                  </div>
                  <div className="col-span-3">
                    <input
                      type="text"
                      className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-orange-300 focus:border-orange-300"
                      placeholder="ปริมาณ"
                      value={ingredient.amount}
                      onChange={(e) => {
                        const newIngredients = [...recipe.ingredients];
                        newIngredients[index].amount = e.target.value;
                        setRecipe({ ...recipe, ingredients: newIngredients });
                      }}
                    />
                  </div>
                  <div className="col-span-3">
                    <input
                      type="text"
                      className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-orange-300 focus:border-orange-300"
                      placeholder="หน่วย"
                      value={ingredient.unit}
                      onChange={(e) => {
                        const newIngredients = [...recipe.ingredients];
                        newIngredients[index].unit = e.target.value;
                        setRecipe({ ...recipe, ingredients: newIngredients });
                      }}
                    />
                  </div>
                  <div className="col-span-1">
                    <button
                      type="button"
                      className="text-red-500 hover:text-red-600"
                      onClick={() => {
                        const newIngredients = recipe.ingredients.filter(
                          (_, i) => i !== index
                        );
                        setRecipe({ ...recipe, ingredients: newIngredients });
                      }}
                    >
                      ลบ
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Steps */}
          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">ขั้นตอนการทำ</h2>
              <button
                type="button"
                onClick={handleAddStep}
                className="text-orange-500 hover:text-orange-600"
              >
                + เพิ่มขั้นตอน
              </button>
            </div>
            <div className="space-y-6">
              {recipe.steps.map((step, index) => (
                <div key={index} className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center mr-4">
                      {index + 1}
                    </div>
                    <h3 className="text-lg font-medium">ขั้นตอนที่ {index + 1}</h3>
                  </div>
                  <div>
                    <textarea
                      className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-orange-300 focus:border-orange-300"
                      rows={3}
                      placeholder="อธิบายขั้นตอนการทำ..."
                      value={step.description}
                      onChange={(e) => {
                        const newSteps = [...recipe.steps];
                        newSteps[index].description = e.target.value;
                        setRecipe({ ...recipe, steps: newSteps });
                      }}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      รูปภาพประกอบ (ถ้ามี)
                    </label>
                    <input
                      type="file"
                      className="w-full"
                      onChange={(e) => {
                        const newSteps = [...recipe.steps];
                        newSteps[index].image = e.target.files?.[0]?.name || '';
                        setRecipe({ ...recipe, steps: newSteps });
                      }}
                    />
                  </div>
                  {index > 0 && (
                    <button
                      type="button"
                      className="text-red-500 hover:text-red-600"
                      onClick={() => {
                        const newSteps = recipe.steps.filter((_, i) => i !== index);
                        setRecipe({ ...recipe, steps: newSteps });
                      }}
                    >
                      ลบขั้นตอนนี้
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 transition transform hover:scale-105"
            >
              บันทึกสูตรอาหาร
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateRecipe; 