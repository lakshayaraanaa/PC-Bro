import { useState } from "react";

const GoogleG = () => (
  <svg width="22" height="22" viewBox="0 0 48 48">
    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
    <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
  </svg>
);

// ── Stars ─────────────────────────────────────────────────
const Stars = ({ count }) => (
  <div>
    {[1,2,3,4,5].map(i => (
      <span key={i} style={{ color: i <= count ? "#f5a623" : "#ddd", fontSize: "1rem" }}>★</span>
    ))}
  </div>
);

// ── Review data ───────────────────────────────────────────
const reviews = [
  { name: "sujit hegde",          initials: "S", bg: "#e8611a", img: "https://i.pravatar.cc/40?img=11", stars: 5, text: "I had a very good experience with them. Had ordered pc parts online. Got it in very short time. Packing quality was excellent." },
  { name: "Saurabh Kumar Suryan", initials: "S", bg: "#4285F4", img: "https://i.pravatar.cc/40?img=33", stars: 5, text: "Got my PC built from Ankit Infotech and had a really good experience. The staff was professional, helpful, and easy to deal with. They have a wide range of products..." },
  { name: "ANIRUDH RAI",          initials: "A", bg: "#222",    img: null,                              stars: 5, text: "Fast service" },
  { name: "Rahul Sharma",         initials: "R", bg: "#e8611a", img: null,                              stars: 5, text: "Amazing quality products and very helpful staff. Will definitely shop again!" },
  { name: "Priya Nair",           initials: "P", bg: "#34A853", img: "https://i.pravatar.cc/40?img=57", stars: 4, text: "Good variety of PC components. Prices are competitive. Delivery was prompt and well-packed." },
  { name: "Vivek Menon",          initials: "V", bg: "#4285F4", img: null,                              stars: 5, text: "Excellent customer support. They helped me choose the best parts within my budget. Highly recommend PC Studio!" },
];
// ── Review Carousel ───────────────────────────────────────
function ReviewCarousel() {
  const [index, setIndex] = useState(0);
  const visible = 3;
  const max = reviews.length - visible;

  const prev = () => setIndex(i => (i <= 0 ? max : i - 1));
  const next = () => setIndex(i => (i >= max ? 0 : i + 1));

  const arrowStyle = {
    background: "#fff", border: "none", width: 38, height: 38,
    borderRadius: "50%", boxShadow: "0 2px 10px rgba(0,0,0,.12)",
    cursor: "pointer", fontSize: "1.2rem", flexShrink: 0,
    display: "flex", alignItems: "center", justifyContent: "center",
  };

  return (
    <div className="bg-white rounded-4 shadow-sm p-4 mt-4">
      {/* Heading */}
      <h5 style={{ fontWeight: 800, fontSize: "1.5rem" }}>
        <span style={{ color: "#e8611a" }}>Customers About</span> PC Studio
      </h5>
      <div style={{ height: 6, width: 120, background: "repeating-linear-gradient(90deg,#e8611a 0,#e8611a 8px,transparent 8px,transparent 14px)", borderRadius: 2, margin: "6px 0 20px" }} />

      <div className="d-flex align-items-center gap-3">
        {/* Summary */}
        <div className="text-center" style={{ minWidth: 140 }}>
          <div style={{ fontWeight: 800, fontSize: "1.8rem", fontFamily: "sans-serif", letterSpacing: ".04em" }}>EXCELLENT</div>
          <div style={{ fontSize: "1.4rem", color: "#f5a623", letterSpacing: 2 }}>
            ★★★★<span style={{ color: "#ddd" }}>★</span>
          </div>
          <div style={{ fontSize: ".75rem", color: "#888", margin: "4px 0 8px" }}>
            Based on <strong>8 reviews</strong>
          </div>
          <div style={{ fontWeight: 700, fontSize: "1.2rem" }}>
            <span style={{ color: "#4285F4" }}>G</span>
            <span style={{ color: "#EA4335" }}>o</span>
            <span style={{ color: "#FBBC05" }}>o</span>
            <span style={{ color: "#4285F4" }}>g</span>
            <span style={{ color: "#34A853" }}>l</span>
            <span style={{ color: "#EA4335" }}>e</span>
          </div>
        </div>

        {/* Left Arrow */}
        <button style={arrowStyle} onClick={prev}>&#8249;</button>

        {/* Cards viewport */}
        <div style={{ overflow: "hidden", flex: 1 }}>
          <div style={{
            display: "flex", gap: 16,
            transform: `translateX(-${index * (100 / visible)}%)`,
            transition: "transform .45s cubic-bezier(.4,0,.2,1)",
          }}>
            {reviews.map((r, i) => (
              <div key={i} style={{
                background: "#f8f8f6", borderRadius: 12, padding: "18px",
                flex: `0 0 calc(${100 / visible}% - 11px)`, minWidth: 0,
                border: "1px solid #eee",
              }}>
                <div className="d-flex justify-content-between align-items-start">
                  <div className="d-flex align-items-center gap-2">
                    {r.img
                      ? <img src={r.img} width={40} height={40} style={{ borderRadius: "50%", objectFit: "cover" }} alt={r.name} />
                      : <div style={{ width: 40, height: 40, borderRadius: "50%", background: r.bg, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700 }}>{r.initials}</div>
                    }
                    <span style={{ fontSize: ".85rem", fontWeight: 600 }}>{r.name}</span>
                  </div>
                  <GoogleG />
                </div>
                <Stars count={r.stars} />
                <p style={{ fontSize: ".82rem", color: "#555", lineHeight: 1.6, marginTop: 6, marginBottom: 0 }}>{r.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <button style={arrowStyle} onClick={next}>&#8250;</button>
      </div>

      <div className="text-end mt-3" style={{ fontSize: ".85rem", fontWeight: 600 }}>
        Please leave us a rating here &nbsp;→
      </div>
    </div>
  );
}
export default function About(){
    return(
        <>
        <div className="container-fluid ">
            
            <div className="d-flex gap-5  mt-5 ps-5 " >
                <div className="bg-white rounded-4  " style={{width:"800px",height:"400px"}}>
        <h5 className="ms-4" style={{ fontWeight: 800, fontSize: "1.5rem" }}>
          <span  style={{ color: "#e8611a" }}>About</span> Us
        </h5>
        <div className="ms-4" style={{ height: 6, width: 120, background: "repeating-linear-gradient(90deg,#e8611a 0,#e8611a 8px,transparent 8px,transparent 14px)", borderRadius: 2, margin: "6px 0 18px" }} />
        <ul style={{ paddingLeft: "1.2rem", listStyle:"none" }}>
          <li className="mb-2 mt-3" style={{ color: "#444", fontSize: "1.rem", lineHeight: 1.65 }}>
            We at ANKIT INFOTECH (www.pcstudio.in) pride in completing 25 years of our existence. Known in the IT market as an innovator of technology, our journey has truly been justified to our name.
          </li>
          <li className="mb-2 mt-3" style={{ color: "#444", fontSize: "1.rem", lineHeight: 1.65 }}>
            ANKIT INFOTECH is dedicated to 100% customer delight ensuring that everything from placing your order to delivering it right to your doorstep is smooth and hassle-free. All your bank details are safe and secure, and will not be shared with any third-party.
          </li>
          <li className="mb-2 mt-3" style={{ color: "#444", fontSize: "1.rem", lineHeight: 1.65 }}>
            ANKIT INFOTECH is one of the leading IT distribution companies in KARNATAKA operating since its inception in 1993.
          </li>
          <li className="mb-2 mt-3" style={{ color: "#444", fontSize: "1.rem", lineHeight: 1.65 }}>
            The company is heading to provide full range of PC components to all customers through its wide sales channels.
          </li>
        </ul>
        </div>
        <div>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/YpyygeMWV9o?si=fY7DsPM7vVm5AvWv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>
             <div className="container">
                <h3>customers about PC Studio</h3>
                <p>The request is missing an API key. Or, The key parameter is invalid.</p>
             </div>
<div>
     <div className="container-fluid mb-5 ">
      {/* About Card */}
     

      {/* Review Carousel */}
      <ReviewCarousel />
    </div>
</div>
        </div>
        </>
    )
}