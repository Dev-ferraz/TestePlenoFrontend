import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Login } from "./components/login"; 
import { CadastroUsuarioView } from "./views/CadastroUsuarioView/CadastroUsuarioView";
import { HomeView } from "./views/HomeView/HomeView";

function App() {
  return (
    <Router>
      <Routes>
        {/* Login */}
        <Route path="/login" element={<Login />} />

        {/* Cadastro */}
        <Route path="/CadastroUsuarioView" element={<CadastroUsuarioView />} />

        {/* Home */}
        <Route path="/HomeView" element={<HomeView />} />

        {/* Outras rotas, se tiver */}
      </Routes>
    </Router>
  );
}

export default App;
