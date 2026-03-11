import { Link } from "react-router-dom";
import { useState } from "react";
import "../App.css"
import logo from "../assets/Gemini_Generated_Image_450vqi450vqi450v-removebg-preview.png";

export default function Navbar() {
  const [productOpen, setProductOpen] = useState(false);

  return (
    <>
      <style>
{`
.navbar{
height:80px 
}
/* Dropdown container */
.nav-item.dropdown {
  position: relative;
}

/* Dropdown menu style */
.custom-dropdown {
  display: block;
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 220px;
  border-radius: 10px;
  border: none;
  padding: 10px 0;
  background: white;
  box-shadow: 0 10px 30px rgba(0,0,0,0.15);
  opacity: 0;
  visibility: hidden;
  transform: translateY(15px) scale(0.95);
  transition: all 0.35s ease;
}

/* Show dropdown on hover */
.nav-item.dropdown:hover .custom-dropdown {
  opacity: 1;
  visibility: visible;
  transform: translateY(0) scale(1);
}

/* Dropdown items */
.custom-dropdown .dropdown-item {
  padding: 10px 20px;
  font-weight: 500;
  transition: all 0.25s ease;
}

/* Hover effect for items */
.custom-dropdown .dropdown-item:hover {
  background: #0d6efd;
  color: white;
  padding-left: 28px;
}


/* ============================================
   MOBILE VIEW ONLY (max-width: 991px)
   ============================================ */

@media (max-width: 991.98px) {

  .navbar {
    height: auto !important;
  }

  #navbarContent {
    background: #1a1a2e;
    border-radius: 14px;
    margin-top: 10px;
    padding: 14px 12px;
    box-shadow: 0 12px 35px rgba(0,0,0,0.3);
  }

  .navbar-nav {
    gap: 6px !important;
    margin-bottom: 10px;
  }

  .navbar-nav .btn {
    width: 100%;
    text-align: left;
    color: #ffc107 !important;
    background-color: rgba(255, 255, 255, 0.08) !important;
    border-color: rgba(255, 255, 255, 0.15) !important;
    border-radius: 10px !important;
    padding: 10px 14px !important;
    font-size: 0.95rem;
  }

  .navbar-nav .btn:hover {
    background-color: #ffc107 !important;
    color: #1a1a2e !important;
    border-color: #ffc107 !important;
  }

  /* ── Product toggle button ── */
  .mobile-product-toggle {
    display: flex !important;
    width: 100%;
    text-align: left;
    color: #ffc107 !important;
    background-color: rgba(255, 255, 255, 0.08) !important;
    border: 1px solid rgba(255, 255, 255, 0.15) !important;
    border-radius: 10px !important;
    padding: 10px 14px !important;
    font-size: 0.95rem;
    font-weight: 600;
    cursor: pointer;
    align-items: center;
    justify-content: space-between;
    transition: all 0.2s ease;
  }

  .mobile-product-toggle.open {
    background-color: #ffc107 !important;
    color: #1a1a2e !important;
    border-color: #ffc107 !important;
    border-radius: 10px 10px 0 0 !important;
  }

  .mobile-product-toggle .arrow {
    font-size: 0.85rem;
    transition: transform 0.3s ease;
  }

  .mobile-product-toggle.open .arrow {
    transform: rotate(180deg);
  }

  /* ── Dropdown hidden by default ── */
  .custom-dropdown {
    position: static !important;
    opacity: 1 !important;
    visibility: visible !important;
    transform: none !important;
    box-shadow: none !important;
    background: rgba(255, 255, 255, 0.05) !important;
    border-radius: 0 0 12px 12px !important;
    padding: 4px 6px 8px !important;
    margin-top: 0 !important;
    display: none !important;
  }

  /* ── Show when open class applied ── */
  .custom-dropdown.mobile-open {
    display: block !important;
    animation: mobileDropIn 0.3s ease;
  }

  @keyframes mobileDropIn {
    from { opacity: 0; transform: translateY(-8px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  .custom-dropdown .dropdown-item {
    color: #f5e0a0 !important;
    background: transparent !important;
    border-radius: 8px !important;
    padding: 10px 14px !important;
    font-size: 0.9rem;
    font-weight: 500;
    display: flex !important;
    align-items: center;
    gap: 8px;
    border-left: 3px solid transparent !important;
    transition: all 0.2s ease !important;
  }

  .custom-dropdown .dropdown-item:hover {
    background: rgba(255, 193, 7, 0.15) !important;
    color: #ffc107 !important;
    border-left-color: #ffc107 !important;
    padding-left: 18px !important;
  }

  .custom-dropdown .dropdown-item + .dropdown-item {
    border-top: 1px solid rgba(255,255,255,0.06);
  }

  .d-flex.me-5 {
    margin-right: 0 !important;
    width: 100%;
    margin-bottom: 10px;
  }

  .d-flex.me-5 .form-control {
    flex: 1;
    background: rgba(255,255,255,0.1);
    border: 1px solid rgba(255,255,255,0.2);
    color: #fff;
    border-radius: 8px;
  }

  .d-flex.me-5 .form-control::placeholder {
    color: rgba(255,255,255,0.45);
  }

  .d-flex.me-5 .btn-outline-dark {
    color: #ffc107;
    border-color: rgba(255,255,255,0.25);
    background: rgba(255,255,255,0.1);
    border-radius: 8px;
  }

  .d-flex.align-items-center.gap-3 {
    justify-content: space-between;
    padding-top: 10px;
    border-top: 1px solid rgba(255,255,255,0.1);
    width: 100%;
  }

  .d-flex.align-items-center.gap-3 .btn {
    color: #ffc107 !important;
    background: rgba(255,255,255,0.1) !important;
    border: 1px solid rgba(255,255,255,0.2) !important;
    border-radius: 10px !important;
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 !important;
  }

  .d-flex.align-items-center.gap-3 .bi-person {
    color: #ffc107;
    font-size: 1.5rem !important;
  }

  .d-flex.align-items-center.gap-3 .btn-primary {
    padding: 8px 22px !important;
    border-radius: 10px !important;
    font-weight: 700 !important;
    background: #ffc107 !important;
    color: #1a1a2e !important;
    border: none !important;
    width: auto !important;
    height: auto !important;
  }

}
`}
</style>

      <nav className="navbar navbar-expand-lg bg-warning shadow-lg px-4">

        {/* navbar logo */}
        <Link className="navbar-brand" to='/'>
          <img src={logo} alt="Loading" width="150" />
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
              <Link className="nav-link fw-semibold btn btn-primary" to="/">Home</Link>
            </li>

            {/* ── Product item — useState toggle, NO checkbox ── */}
            <li className="nav-item dropdown">

              <button
                className={`mobile-product-toggle nav-link fw-semibold btn btn-primary ${productOpen ? 'open' : ''}`}
                onClick={() => setProductOpen(!productOpen)}
                type="button"
              >
                Products
                <span className="arrow">▾</span>
              </button>

              <ul className={`dropdown-menu custom-dropdown ${productOpen ? 'mobile-open' : ''}`}>
                <li><Link className="dropdown-item" to="/product/processor">⚙️ Processor</Link></li>
                <li><Link className="dropdown-item" to="/product/motherboard">🖥️ Motherboard</Link></li>
                <li><Link className="dropdown-item" to="/product/ram">💾 RAM</Link></li>
                <li><Link className="dropdown-item" to="/product/harddisk">💿 Hard Disk</Link></li>
                <li><Link className="dropdown-item" to="/product/fan">🌀 Cabinet Fan</Link></li>
                <li><Link className="dropdown-item" to="/product/cooler">❄️ Cooler</Link></li>
                <li><Link className="dropdown-item" to="/product/graphicscard">🎮 Graphics Card</Link></li>
                <li><Link className="dropdown-item" to="/product/unit">🔌 Power Supply Unit</Link></li>
                <li><Link className="dropdown-item" to="/product/keyboard">⌨️ Keyboard</Link></li>
                <li><Link className="dropdown-item" to="/product/monitor">🖥️ Monitor</Link></li>
                <li><Link className="dropdown-item" to="/product/mouse">🖱️ Mouse</Link></li>
                <li><Link className="dropdown-item" to="/product/accessories">🔧 Accessories</Link></li>
              </ul>
            </li>

            <li className="nav-item">
              <Link className="nav-link fw-semibold btn btn-primary" to="/pc">PC Build</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link fw-semibold btn btn-primary" to="/laptops">Laptops</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link fw-semibold btn btn-primary" to="/about">About Us</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link fw-semibold btn btn-primary" to="/contact">Contact</Link>
            </li>
          </ul>

          {/* Search */}
          <form className="d-flex me-5 gap-1">
            <button className="btn btn-outline-dark">
              <i className="bi bi-search"></i>
            </button>
            <input className="form-control me-2" type="search" placeholder="Search" />
          </form>

          {/* Icons */}
          <div className="d-flex align-items-center gap-3">
            <Link className="btn" to="/cart">
              <i className="bi bi-bag-fill fs-4"></i>
            </Link>
            <i className="bi bi-person fs-4"></i>
            <Link className="btn btn-primary fw-semibold" to="/login">
              Login
            </Link>
          </div>

        </div>
      </nav>
    </>
  );
}