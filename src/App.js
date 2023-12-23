
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Layout from "./Layout";
import Home from "./Home";
import Register from "./Register";
import Display from "./Display"
import Search from "./Search";


const App=()=>
{
  return(

    <>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/display" element={<Display/>}/>
        <Route path="/search" element={<Search/>}/>
        
        

        </Route>
      </Routes>
    </BrowserRouter>
  
    </>
  );
}
export default App;