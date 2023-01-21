import Map from './pages/Map';
import Home from './pages/Home';
import {Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar';


function App() {
  return (
    <>
        <Navbar></Navbar> {/*I added this comm*/}
        <Routes>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/' element={<Map/>}></Route>
        </Routes>
    </>
    
  );
}

export default App;
