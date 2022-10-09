import './App.css';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemList/ItemListConteiner';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
      <Routes>
        
       <Route path='/' element={<ItemListContainer />} />
       <Route path="/category/:categoryID" element={<ItemListContainer />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
