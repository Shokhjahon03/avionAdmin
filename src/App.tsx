import { BrowserRouter, Route, Routes } from "react-router-dom"
import AddProducts from "./Pages/AddProducts"
import AllProducts from "./Pages/AllProducts"
import { useState } from "react"
import LoginP from "./Pages/LoginP"


function App() {
let [x,setX]=useState(false)
  return (
    <BrowserRouter>
      {
        x?<Routes>
        <Route path="/" element={<AllProducts/>}/>
        <Route path="/add" element={<AddProducts/>}/>
      </Routes>:<LoginP x={x} setX={setX}/>
      }
    </BrowserRouter>
  )
}

export default App
