import { Outlet } from "react-router-dom";
import Header from "./components/Navbar/Navbar";


import "./app.css"







export default function App() {
  return (
    <>
    <Header />
  
  <div className="app">

    <Outlet />
         
      
  
    </div>

    


        
    </>
  );
}