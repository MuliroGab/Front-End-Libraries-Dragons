import HomePage from './Pages/Home/HomePage.module';
import Cadastro from './Pages/Cadastro/Cadastro.module';
import Login from './Pages/Login/Login.module';
import Forum from './Pages/Forum/Forum.module';
import { Route,  BrowserRouter, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Cadastro />}/>
          <Route path='/home' element={<HomePage />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/forum' element={<Forum />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
