import './css/App.css'
import NavBar from './components/NavBar.jsx';
import Favourits from './pages/Favourits.jsx';
import Home from './pages/Home.jsx';
import {Routes, Route} from 'react-router-dom'

function App() {

  return (
    <main>
      <div>
        <NavBar />
        <Routes>
          <Route path= "/"  element={<Home />} />
          <Route path= "/favourites"  element={<Favourits />} />
        </Routes>
      </div>
    </main>
  )
}

export default App;