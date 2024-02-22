import './App.css';
import { Outlet, Link } from "react-router-dom";


import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './UTS/Navbar';
import Header from './UTS/Header';
import FlowersKingdom from './UTS/FlowersKingdom';



function Page2() {
  return (
    <div ClassName="App">
     <Navbar/>
      <FlowersKingdom/>
      {/* <div className="container mt-4">
        <Content/>
      </div> */}
       <br/>  
       <Outlet />
     </div>
   );
 }
 
export default Page2