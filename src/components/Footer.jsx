    export default function Footer() {
        return (
            <>
                <style>
                    {`
             .circle-element{
    background-color: #f57425;
    color:#ffffff;  
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 70px;
    height: 70px;
}  
    
    
                `}
                </style>
                <footer className="bg-light shadow-lg   pt-4 pb-2 mt-auto    " >
                    <div className="container  d-flex  bg-light text-dark pt-5 pb-2 gap-5 ">
                        <div className="d-flex gap-3">
                        <span className="circle-element p-2">
                            <i class=" bi bi-truck  fs-1"></i>    
                              </span>
                              <div>
                             <h4>Free Shipping</h4>
                            <p>Except Monitor & Cabinet*</p>                    
                      </div>
                      </div>
                       
                        <div className="d-flex  gap-3">
                  
                        <span className="circle-element  p-2">
                            <i class="bi bi-repeat fs-1"></i>
                             </span>
                             <div>
                            <h4>Hassle-Free Returns</h4>
                            <p>7 Days Easy Returns*</p>
                       </div>
                            </div>
             <div className="d-flex  gap-3">
                        <span className="circle-element  p-2">
                            <i class="bi bi-credit-card fs-1"></i>
                            </span>
                             <div>
                            <h4>Secure Checkout</h4>
                            <p>Trusted & Encrypted Payments</p>
                        </div >

                        </div>

                        <div className="d-flex  gap-3">
                        <span className="circle-element  p-2" >
                            <i class="bi bi-cart3 fs-1"></i>
                            </span>
                             <div>
                            <h4>10,000+</h4>
                            <p>Order Successfully Delivereds</p>
                        </div>
                        </div>
                    </div>

<hr className="shadow-lg"></hr>

                    <div className="d-flex justify-content-around mt-5">
                        <div>
  <img src="src\assets\Gemini_Generated_Image_450vqi450vqi450v-removebg-preview.png"style={{width:"250px"}}  alt="loading"/>
                        <div className="container bg-warning" >map implement </div>
                        </div>
                      <div className="d-flex justify-content-around  gap-5 px-5">

                            <div>
                            <h4>parking instructions</h4>

                            <h5>For Car</h5>
                            <ol className="mt-3">
                                <li>ICICI Bank Bangalore N R Road Car Parking (Paid)</li>
                                <li>Unity Building Kamata (Paid)</li>
                            </ol>
                            <h5>For Bike</h5>
                            <ul className="mt-3 list-unstyled">
                                <li>In front of the store (free)</li>
                            </ul>
                        </div>
                        <div>
                            <h4>Information</h4>
                            <ul className="list-unstyled ">
                                <li>FAQs</li>
                                <li>Privacy Policy</li>
                                <li>Shipping Policy</li>
                                <li>Refund Policy</li>
                                <li>Terms & Conditions</li>
                            </ul>
                        </div>
                        <div>
                            <h4>company</h4>
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
                                        <div className="container-fluid bg-dark text-light py-3">
  <div className="container d-flex flex-column flex-md-row align-items-center  ">

    <h6 className="mb-2 mb-md-0">
      Copyright © 2026 pcstudio.in | Ankit Infotech | All rights reserved.
    </h6>

    <img className="mx-5"
      src="/src/assets/footer-icons-2-removebg-preview.png"
      style={{ maxWidth: "350px" }}
      alt="payment-icons"
    />

  </div>
</div>  
                </footer>

            </>
        )
    }