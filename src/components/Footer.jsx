export default function Footer() {
  return (
    <>
      <style>
        {`
        .circle-element{
          background-color:#f57425;
          color:#fff;
          border-radius:50%;
          display:flex;
          align-items:center;
          justify-content:center;
          width:60px;
          height:60px;
        }
        `}
      </style>

      <footer className="bg-light shadow-lg pt-4 mt-auto">

        {/* Top Features */}
        <div className="container py-4">
          <div className="row text-center text-md-start gy-4">

            <div className="col-12 col-md-3 d-flex gap-3 justify-content-center justify-content-md-start">
              <span className="circle-element">
                <i className="bi bi-truck fs-3"></i>
              </span>
              <div>
                <h6>Free Shipping</h6>
                <p className="mb-0">Except Monitor & Cabinet*</p>
              </div>
            </div>

            <div className="col-12 col-md-3 d-flex gap-3 justify-content-center justify-content-md-start">
              <span className="circle-element">
                <i className="bi bi-repeat fs-3"></i>
              </span>
              <div>
                <h6>Hassle-Free Returns</h6>
                <p className="mb-0">7 Days Easy Returns*</p>
              </div>
            </div>

            <div className="col-12 col-md-3 d-flex gap-3 justify-content-center justify-content-md-start">
              <span className="circle-element">
                <i className="bi bi-credit-card fs-3"></i>
              </span>
              <div>
                <h6>Secure Checkout</h6>
                <p className="mb-0">Trusted Payments</p>
              </div>
            </div>

            <div className="col-12 col-md-3 d-flex gap-3 justify-content-center justify-content-md-start">
              <span className="circle-element">
                <i className="bi bi-cart3 fs-3"></i>
              </span>
              <div>
                <h6>10,000+</h6>
                <p className="mb-0">Orders Delivered</p>
              </div>
            </div>

          </div>
        </div>

        <hr />

        {/* Middle Footer */}
        <div className="container py-4">
          <div className="row gy-4">

            {/* Logo + Map */}
            <div className="col-12 col-md-4 text-center text-md-start">
              <img className="mx-5"
                src="src/assets/Gemini_Generated_Image_450vqi450vqi450v-removebg-preview.png"
                style={{ width: "200px" }}
                alt="logo"
              />

              <div className="mt-3">
                <iframe
                  width="90%"
                  height="200"
                  style={{ border: 0 }}
                  loading="lazy"
                  src="https://www.google.com/maps?q=12.9716,77.5946&z=15&output=embed"
                ></iframe>
              </div>
            </div>

            {/* Parking */}
            <div className="col-12 col-md-3">
              <h5>Parking Instructions</h5>

              <h6 className="mt-3">For Car</h6>
              <ol>
                <li>ICICI Bank Bangalore N R Road Parking</li>
                <li>Unity Building Kamata Parking</li>
              </ol>

              <h6>For Bike</h6>
              <ul className="list-unstyled mx-4">
                <li>In front of the store (free)</li>
              </ul>
            </div>

            {/* Information */}
            <div className="col-6 col-md-2">
              <h5>Information</h5>
              <ul className="list-unstyled">
                <li>FAQs</li>
                <li>Privacy Policy</li>
                <li>Shipping Policy</li>
                <li>Refund Policy</li>
                <li>Terms & Conditions</li>
              </ul>
            </div>

            {/* Company */}
            <div className="col-6 col-md-3">
              <h5>Company</h5>
              <ul className="list-unstyled">
                <li>Shop</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>My Account</li>
                <li>Store Location</li>
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Footer */}
        <div className="container-fluid bg-dark text-light py-3">
          <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center text-center text-md-start">

            <h6 className="mb-2 mb-md-0">
              Copyright © 2026 pcstudio.in | Ankit Infotech | All rights reserved.
            </h6>

            <img
              src="/src/assets/footer-icons-2-removebg-preview.png"
              style={{ maxWidth: "300px" }}
              alt="payment-icons"
            />

          </div>
        </div>

      </footer>
    </>
  );
}