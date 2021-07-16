import {Link} from "react-router-dom";
import "./topbar.css";

export default function TopBar(){
  const user = false;
  return(
    <div className="top">
      <div className="topLeft"></div>
      <div className="topCenter">
        <ul className="topList">
        
        <li className="topListItem">
        <Link to="/eventCreate">CREATE</Link>
        </li>
        <li className="topListItem">LOGOUT</li>
        </ul>
        
      </div>
     
    </div>
  )
}