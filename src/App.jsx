import { Routes, Route } from "react-router-dom";
import "./App.css";
import ChatPage from './pages/ChatPage/ChatPage'
import LoginPage from './pages/LoginPage/LoginPage'
import RegisterPage from './pages/RegisterPage/RegisterPage'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<ChatPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
