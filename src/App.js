import { Form } from './components/pages/Form'
import { Register} from './components/pages/Register'
import "./App.css"
import {BrowserRouter, Route, Routes} from "react-router-dom";
function App() {
  return (
    <div className="main">
      <BrowserRouter>
            <Routes>
              <Route path="/" element={<Form/>}/>
              <Route path="/FormRegister" element={<Register/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  
  );
}

export default App;
