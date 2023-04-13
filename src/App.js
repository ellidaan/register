import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Pages/Home';
import Test from './Pages/Test';


function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Test" element={<Test/>}/>
   
      
      </Routes>

    </BrowserRouter>
  );
}

export default App;
