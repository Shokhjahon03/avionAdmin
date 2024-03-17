import { BrowserRouter, Route, Routes } from "react-router-dom"
import AddProducts from "./Pages/AddProducts"
import AllProducts from "./Pages/AllProducts"


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AllProducts/>}/>
        <Route path="/add" element={<AddProducts/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
