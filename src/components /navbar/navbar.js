import { useContext } from "react"
import { Link } from "react-router-dom"
import { UserName } from "../../App"


const Navbar =()=>{



     
    const dataFromApp=useContext(UserName) 
    const darkMode=false


    const mode=darkMode ?"dark":"light"
    const navItem={
        textDecoration:"none",
        color:"black",
        fontWeight:"bold",
    
    }
    const liItem={
    marginTop:10,
    marginRight:10
    }
    return(
        <nav className={`navbar navbar-expand-sm bg-${mode} navbar-light`}>
  <div className="container-fluid">
    <ul className="navbar-nav">
      <li className="nav-item" style={liItem} >
        <Link style={navItem} to={"/home"}   >Home</Link>
      </li>
      <li className="nav-item" style={liItem} >
        <Link style={navItem} to={"/about"}  >About</Link>
      </li>
      <li className="nav-item" style={liItem} >
        <Link style={navItem} to={"/settings"}  >Setting</Link>
      </li>
    

      <li className="nav-item" style={liItem} >
        {dataFromApp}
      </li>

    </ul>
  </div>
</nav>

    )
}

export default Navbar