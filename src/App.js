import { Outlet } from "react-router-dom";

import "./app.css"
import Header from "./components/header/header.js";


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