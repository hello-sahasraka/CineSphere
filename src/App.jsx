import './css/App.css'
import NavBar from './components/NavBar.jsx';
import Favourits from './pages/Favourits.jsx';
import Home from './pages/Home.jsx';
import {Routes, Route} from 'react-router-dom'
import { MovieProvider } from './contexts/MovieContext.jsx';

function App() {

  return (
    
      <MovieProvider>
        <NavBar />
        <main className='main-content'>
        <Routes>
          <Route path= "/"  element={<Home />} />
          <Route path= "/favourites"  element={<Favourits />} />
        </Routes>
        </main>
      </MovieProvider>
    
  )
}

export default App;