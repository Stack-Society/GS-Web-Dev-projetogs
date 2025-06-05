import { BrowserRouter, Routes, Route } from "react-router-dom"
import Nav from "./components/Nav"
import Footer from "./components/Footer"
import Home from "./routes/Home"
import Error from "./routes/Error"
import Cadastrar from "./routes/Cadastrar"
import Login from "./routes/Login"
import Sobre from "./routes/Sobre"
import Solução from "./routes/Solução"
import Portal from './routes/Portal'
import "./index.css"

function App() {

  return (
    <BrowserRouter>
      <Nav/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="*" element={<Error/>} />
          <Route path="/Solução" element={<Solução/>} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/Cadastrar" element={<Cadastrar/>} />
          <Route path="/Sobre" element={<Sobre/>} />
          <Route path="/Portal" element={<Portal/>} />
        </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
