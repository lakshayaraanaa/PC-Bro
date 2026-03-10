import { Link } from "react-router-dom";
import "../App.css"
import logo from "../assets/Gemini_Generated_Image_450vqi450vqi450v-removebg-preview.png";
export default function Navbar() {

  
  return (
    
    
    <nav className="navbar navbar-expand-lg bg-warning shadow-lg px-4 ">
      
      {/* navbar logo */}
      <Link className="navbar-brand" to='/'>
              <img src={logo}  alt=" Loading"  width="200" />
      </Link>

      {/* Toggler Button */}
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent">
        <span className="navbar-toggler-icon"></span>
      </button>
       
          {/* Navbar content */}
      <div className="collapse navbar-collapse" id="navbarContent">

          {/* Links */}
        <ul className="navbar-nav mx-auto gap-3">
          <li className="nav-item">
            <Link className="nav-link fw-semibold  btn btn-primary " to="/">Home</Link>
          </li>
<li className="nav-item dropdown">
  <Link className="nav-link fw-semibold btn btn-primary dropdown-toggle" to="/product">
    Product
  </Link>

  <ul className="dropdown-menu custom-dropdown">
    <li><Link className="dropdown-item" to="/product/burger">Burger</Link></li>
    <li><Link className="dropdown-item" to="/product/pizza">Pizza</Link></li>
    <li><Link className="dropdown-item" to="/product/drinks">Drinks</Link></li>
    <li><Link className="dropdown-item" to="/product/dessert">Dessert</Link></li>
  </ul>
</li>
          <li className="nav-item">
            <Link className="nav-link fw-semibold  btn btn-primary " to="/about">About Us</Link>
          </li>

          <li className="nav-item ">
            <Link className="nav-link fw-semibold  btn btn-primary "  to="/contact">Contact</Link>
          </li>
        </ul>

        </div>


        {/* Search */}
        <form className="d-flex me-5 gap-2">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
          />
           <button className="btn btn-outline-dark">
            <i className="bi bi-search"></i>
          </button>
         
        </form>

        {/* Icons */}
        <div className="d-flex gap-3">
          <i className="bi bi-bag-fill fs-4"></i>
          <i className="bi bi-person fs-4"></i>
        </div>
       
     
    </nav>
  );
}