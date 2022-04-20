
import './App.css';
import Home from './screens/Home';
import Jewelery from './screens/Jewelery';
import Men from './screens/Men';
import Cart from './screens/Cart';
import Women from './screens/Women';
import ProductDesc from './components/ProductDesc';
import Electronics from './screens/Electronics';
import {BrowserRouter as Router, Route, Routes, useParams ,Link  } from 'react-router-dom';
import Navs from './components/nav';

 

function App() {
  
  return (
    <Router>
        <Navs />
        <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Electronics" element={<Electronics />}/>
        <Route path="/Men" element={<Men/>} />
        <Route path="/Women" element={<Women />} />
        <Route path="/Jewelery" element={<Jewelery />} />
        <Route path=":id/ProductDesc" element={<ProductDesc  />} />
        <Route path="/Cart/:id/ProductDesc" element={<ProductDesc  />} />
        <Route path="/:screens/:id/ProductDesc" element={<ProductDesc  />} />  
  
  
        <Route path="/Cart" element={<Cart  />} />        
        </Routes>
      </Router>
  );
}
export default App;
