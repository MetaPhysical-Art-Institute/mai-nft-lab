import { Outlet } from "react-router-dom";



import "./app.css"

import Header from "./components/Navbar/Navbar";







export default function App() {
  return (
    <>
      <Header/>
  
   <div className="app">  
     
      <Outlet />

    </div>  

        
    </>
  );
}