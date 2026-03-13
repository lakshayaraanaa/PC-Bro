import { useState } from "react";

const products = [
  {
    id: 1,
    title: "Laddu",
    text: "Delicious ghee laddu sweet",
    image: "src/assets/download.jpg",
    originalprice: "15000",
    discountprice: "10000",
    discount: 33,
    thumbnails: [
      "src/assets/download.jpg",
      "src/assets/download.jpg",
      "src/assets/download.jpg",
    ],
  },
  {
    id: 2,
    title: "Jalebi",
    text: "Hot and crispy jalebi",
    image: "src/assets/JONSBO TK-3 Black One-Piece Curved Glass ATX Mid Tower Pc Case, One-Piece Curved Glass, SP BTF MB_Dual 360 AIO_ATX PSU_40Series GPU, with 10 Fan Positions, 270 Degree Side View Display,Black Chassis.jpg",
    originalprice: "15000",
    discountprice: "10000",
    discount: 33,
    thumbnails: [
      "src/assets/JONSBO TK-3 Black One-Piece Curved Glass ATX Mid Tower Pc Case, One-Piece Curved Glass, SP BTF MB_Dual 360 AIO_ATX PSU_40Series GPU, with 10 Fan Positions, 270 Degree Side View Display,Black Chassis.jpg",
      "src/assets/JONSBO TK-3 Black One-Piece Curved Glass ATX Mid Tower Pc Case, One-Piece Curved Glass, SP BTF MB_Dual 360 AIO_ATX PSU_40Series GPU, with 10 Fan Positions, 270 Degree Side View Display,Black Chassis.jpg",
      "src/assets/JONSBO TK-3 Black One-Piece Curved Glass ATX Mid Tower Pc Case, One-Piece Curved Glass, SP BTF MB_Dual 360 AIO_ATX PSU_40Series GPU, with 10 Fan Positions, 270 Degree Side View Display,Black Chassis.jpg",
    ],
  },
  {
    id: 3,
    title: "Mysore Pak",
    text: "Traditional mysore pak sweet",
    image: "src/assets/ROG Strix G15 Gaming Desktop PC, Intel Core i7-12700F, GeForce RTX 3060 12GB, 16GB DDR4 RAM, 1TB PCI.jpg",
    originalprice: "15000",
    discountprice: "10000",
    discount: 33,
    thumbnails: [
      "src/assets/ROG Strix G15 Gaming Desktop PC, Intel Core i7-12700F, GeForce RTX 3060 12GB, 16GB DDR4 RAM, 1TB PCI.jpg",
      "src/assets/ROG Strix G15 Gaming Desktop PC, Intel Core i7-12700F, GeForce RTX 3060 12GB, 16GB DDR4 RAM, 1TB PCI.jpg",
      "src/assets/ROG Strix G15 Gaming Desktop PC, Intel Core i7-12700F, GeForce RTX 3060 12GB, 16GB DDR4 RAM, 1TB PCI.jpg",
    ],
  },
  {
    id: 4,
    title: "Mysore Pak",
    text: "Traditional mysore pak sweet",
    image: "src/assets/SZD S580 ATX Mid-Tower PC Case, Desktop Gaming Computer Chasssis, Front I_O USB Type-C Port, Dual Tempered Glass Panels, High-Airflow Perforated Top Panel, Water-Cooling Ready (White).jpg",
    originalprice: "15000",
    discountprice: "10000",
    discount: 33,
    thumbnails: [
      "src/assets/SZD S580 ATX Mid-Tower PC Case, Desktop Gaming Computer Chasssis, Front I_O USB Type-C Port, Dual Tempered Glass Panels, High-Airflow Perforated Top Panel, Water-Cooling Ready (White).jpg",
      "src/assets/SZD S580 ATX Mid-Tower PC Case, Desktop Gaming Computer Chasssis, Front I_O USB Type-C Port, Dual Tempered Glass Panels, High-Airflow Perforated Top Panel, Water-Cooling Ready (White).jpg",
      "src/assets/SZD S580 ATX Mid-Tower PC Case, Desktop Gaming Computer Chasssis, Front I_O USB Type-C Port, Dual Tempered Glass Panels, High-Airflow Perforated Top Panel, Water-Cooling Ready (White).jpg",
    ],
  },
];

function ProductCard({ data }) {
  const [hovered, setHovered] = useState(false);
  const [activeThumb, setActiveThumb] = useState(0);
  const [added, setAdded] = useState(false);

  const handleAddToCart = (e) => {
    e.stopPropagation();
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <>
      <style>{`
        .pc-card-wrap {
          position: relative;
          font-family: 'DM Sans', sans-serif;
        }

        .pc-card {
        margin-right:50px;
          width: 340px;
          display: flex;
          flex-direction: column;
          height: 460px;
          border: 1px solid #1e1e28;
          border-radius: 16px;
          overflow: visible;
          position: relative;
          transition: border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
          cursor: pointer;
        }

        .pc-card:hover {
          border-color: #ff6b00;
          box-shadow: 0 0 0 1px #ff6b0044, 0 20px 50px rgba(255, 107, 0, 0.15);
          transform: translateY(-4px);
        }

        .pc-badge {
          position: absolute;
          top: 12px;
          left: 12px;
          background: #ff6b00;
          color: white;
          font-size: 11px;
          font-weight: 700;
          font-family: 'Syne', sans-serif;
          padding: 4px 9px;
          border-radius: 6px;
          letter-spacing: 0.5px;
          z-index: 2;
        }

        .pc-img-wrap {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 28px 20px 12px;
          height: 260px;
          background: linear-gradient(160deg, #13131a 0%, #0e0e12 100%);
          border-radius: 14px 14px 0 0;
        }

        .pc-img-wrap img {
          width: 220px;
          height: 220px;
          object-fit: contain;
          transition: transform 1.4s ease;
          filter: drop-shadow(0 8px 24px rgba(255,107,0,0.18));
        }

        .pc-card:hover .pc-img-wrap img {
          transform: scale(1.06);
        }

        .pc-body {
          padding: 16px 18px 20px;
        }

        .pc-title {
          font-family: 'Syne', sans-serif;
          font-size: 20px;
          font-weight: 700;
          margin: 0 0 4px;
          letter-spacing: 0.2px;
        }

        .pc-text {
          font-size: 13px;
          margin: 0 0 12px;
          line-height: 1.5;
        }

        .pc-prices {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 14px;
        }

        .pc-original {
          font-size: 13px;
          color: #44445a;
          text-decoration: line-through;
        }

        .pc-discount {
          font-family: 'Syne', sans-serif;
          font-size: 20px;
          font-weight: 800;
          color: #f57733;
        }

        .pc-rupee {
          font-size: 14px;
          font-weight: 600;
          color: #ff6b00;
          margin-right: 1px;
        }

        .pc-add-btn {
          width: 100%;
          padding: 11px 0;
          background: #ff6b00;
          color: white;
          border: none;
          border-radius: 10px;
          font-family: 'Syne', sans-serif;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 1px;
          cursor: pointer;
          transition: background 0.2s ease, transform 0.15s ease, box-shadow 0.2s ease;
          text-transform: uppercase;
          opacity: 0;
          transform: translateY(8px);
        }

        .pc-card:hover .pc-add-btn {
          opacity: 1;
          transform: translateY(0);
        }

        .pc-add-btn:hover {
          background: #ff8533;
          box-shadow: 0 4px 20px rgba(255, 107, 0, 0.4);
          transform: translateY(-1px);
        }

        .pc-add-btn.added {
          background: #22c55e;
          box-shadow: 0 4px 20px rgba(34, 197, 94, 0.35);
        }

        .pc-sidebar {
          position: absolute;
          top: 0;
          right: calc(100% + 1px);
          width: 100px;
          background: #ffffff;
          border: 1px solid #00a2ff66;
          border-radius: 14px;
          padding: 10px 8px;
          display: flex;
          flex-direction: column;
          gap: 8px;
          z-index: 100;
          opacity: 0;
          pointer-events: none;
          transform: translateX(-10px);
          transition: opacity 0.3s ease, transform 0.3s ease;
          box-shadow: 6px 0 30px rgba(255, 107, 0, 0.12);
        }

        .pc-sidebar.visible {
          opacity: 1;
          pointer-events: all;
          transform: translateX(0);
        }

        .pc-sidebar-label {
          font-family: 'Syne', sans-serif;
          font-size: 9px;
          font-weight: 700;
          color: #d9235a;
          letter-spacing: 1px;
          text-transform: uppercase;
          text-align: center;
          margin-bottom: 2px;
        }

        .pc-thumb {
          width: 72px;
          height: 72px;
          border-radius: 10px;
          overflow: hidden;
          border: 2px solid transparent;
          cursor: pointer;
          transition: border-color 0.2s ease, transform 0.2s ease;
        }

        .pc-thumb:hover,
        .pc-thumb.active {
          border-color: #ff6b00;
          transform: scale(1.05);
        }

        .pc-thumb img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          padding: 4px;
        }

        .pc-sidebar-divider {
          height: 1px;
          margin: 2px 0;
        }
      `}</style>

      <div
        className="pc-card-wrap"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="pc-card">
          <span className="pc-badge">-{data.discount}%</span>

          <div className="pc-img-wrap">
            <img
              src={data.thumbnails?.[activeThumb] || data.image}
              alt={data.title}
            />
          </div>

          <div className="pc-body">
            <p className="pc-title">{data.title}</p>
            <p className="pc-text">{data.text}</p>
            <div className="pc-prices">
              <span className="pc-original">₹{data.originalprice}</span>
              <span className="pc-discount">
                <span className="pc-rupee">₹</span>
                {data.discountprice}
              </span>
            </div>
            <button
              className={`pc-add-btn${added ? " added" : ""}`}
              onClick={handleAddToCart}
            >
              {added ? "✓ Added!" : "Add to Cart"}
            </button>
          </div>
        </div>

        <div className={`pc-sidebar${hovered ? " visible" : ""}`}>
          {data.thumbnails?.map((thumb, i) => (
            <div
              key={i}
              className={`pc-thumb${activeThumb === i ? " active" : ""}`}
              onClick={() => setActiveThumb(i)}
            >
              <img src={thumb} alt={`thumb-${i}`} />
            </div>
          ))}
          <div className="pc-sidebar-divider" />
        </div>
      </div>
    </>
  );
}

export default function Products() {
  return (
    <>
      <style>{`
        .pc-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 24px;
          padding: 10px;
          justify-content: center;
        }
      `}</style>
      <div className="pc-grid">
        {products.map((data) => (
          <ProductCard key={data.id} data={data} />
        ))}
      </div>
    </>
  );
}