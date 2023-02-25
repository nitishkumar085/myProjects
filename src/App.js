import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Details from "./pages/Details";


function App() {
  return (
    <BrowserRouter>
     <NavBar/>
    <Routes>
      <Route path='/' element={ <Home/>}/>
      <Route path='/details/:id' element={<Details/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
