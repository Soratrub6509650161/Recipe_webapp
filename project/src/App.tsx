import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home'; 
import Login from './pages/Login';
import Register from './pages/Register';
import CreateRecipe from './pages/CreateRecipe';
import Recipes from './pages/Recipes';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/create-recipe" element={<CreateRecipe />} />
        </Routes>
      </Layout>
    </Router>
    </AuthProvider>
  );
}

export default App;
