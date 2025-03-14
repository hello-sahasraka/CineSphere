import './App.css'
import Favourits from './pages/Favourits.jsx';
import Home from './pages/Home.jsx';
import {Routes, Route} from 'react-router-dom'

function App() {

  return (
    <main>
      <Routes>
        <Route path= "/"  element={<Home />} />
        <Route path= "/favourites"  element={<Favourits />} />
      </Routes>
    </main>
  )
}

export default App;