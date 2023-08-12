import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Component/Header';
import Home from './Component/Home';
import Login from './Component/Login';
import Register from './Component/Register';
import { BrowserRouter, Routes,Route } from'react-router-dom';
<link
rel="stylesheet"
href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
crossorigin="anonymous"
/>
// https://www.youtube.com/watch?v=nmCeSPGcBnY&ab_channel=TutorialRays
function App() {
  return (
    
    <div className="App">
     <Header/>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
     </Routes>
     
     </BrowserRouter>
     
       
    </div>
    
  );
}

export default App;
