import './App.css';
import Footer from './components/Footer';
import { Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import MoviePage from './pages/MoviePage';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import Navbar from './components/Navbar';
import AddMovie from './components/AddMovie';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MoviePage />} />
          <Route path='/signin' element={<LoginForm />} />
          <Route path='/signup' element={<SignUpForm />} />
          <Route path='/add' element={<AddMovie />} />
          <Route path='/details/:id' element={<AddMovie />} />
        </Routes>
        <Footer/>
      </BrowserRouter> 
    </div>
  );
}

export default App;
