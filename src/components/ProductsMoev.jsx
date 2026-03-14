import { useState, useEffect, useRef } from "react";

const products = [
  {
    id: 1,
    title: "Laddu",
    text: "Delicious ghee laddu sweet",
    image: "src/assets/download.jpg",
    originalprice: "15000",
    discountprice: "10000",
    discount: 33,
  },
  {
    id: 2,
    title: "Jalebi",
    text: "Hot and crispy jalebi",
    image: "src/assets/JONSBO TK-3 Black One-Piece Curved Glass ATX Mid Tower Pc Case, One-Piece Curved Glass, SP BTF MB_Dual 360 AIO_ATX PSU_40Series GPU, with 10 Fan Positions, 270 Degree Side View Display,Black Chassis.jpg",
    originalprice: "15000",
    discountprice: "10000",
    discount: 33,
  },
  {
    id: 3,
    title: "Mysore Pak",
    text: "Traditional mysore pak sweet",
    image: "src/assets/ROG Strix G15 Gaming Desktop PC, Intel Core i7-12700F, GeForce RTX 3060 12GB, 16GB DDR4 RAM, 1TB PCI.jpg",
    originalprice: "15000",
    discountprice: "10000",
    discount: 33,
  },
  {
    id: 4,
    title: "Mysore Pak",
    text: "Traditional mysore pak sweet",
    image: "src/assets/SZD S580 ATX Mid-Tower PC Case, Desktop Gaming Computer Chasssis, Front I_O USB Type-C Port, Dual Tempered Glass Panels, High-Airflow Perforated Top Panel, Water-Cooling Ready (White).jpg",
    originalprice: "15000",
    discountprice: "10000",
    discount: 33,
  },
  {
    id: 5,
    title: "Laddu",
    text: "Delicious ghee laddu sweet",
    image: "src/assets/download.jpg",
    originalprice: "15000",
    discountprice: "10000",
    discount: 33,
  },
  {
    id: 6,
    title: "Jalebi",
    text: "Hot and crispy jalebi",
    image: "src/assets/JONSBO TK-3 Black One-Piece Curved Glass ATX Mid Tower Pc Case, One-Piece Curved Glass, SP BTF MB_Dual 360 AIO_ATX PSU_40Series GPU, with 10 Fan Positions, 270 Degree Side View Display,Black Chassis.jpg",
    originalprice: "15000",
    discountprice: "10000",
    discount: 33,
  },
  {
    id: 7,
    title: "Mysore Pak",
    text: "Traditional mysore pak sweet",
    image: "src/assets/ROG Strix G15 Gaming Desktop PC, Intel Core i7-12700F, GeForce RTX 3060 12GB, 16GB DDR4 RAM, 1TB PCI.jpg",
    originalprice: "15000",
    discountprice: "10000",
    discount: 33,
  },
  {
    id: 8,
    title: "Mysore Pak",
    text: "Traditional mysore pak sweet",
    image: "src/assets/SZD S580 ATX Mid-Tower PC Case, Desktop Gaming Computer Chasssis, Front I_O USB Type-C Port, Dual Tempered Glass Panels, High-Airflow Perforated Top Panel, Water-Cooling Ready (White).jpg",
    originalprice: "15000",
    discountprice: "10000",
    discount: 33,
  },
];

const CARD_WIDTH = 200;
const GAP = 20;
const STEP = CARD_WIDTH + GAP;

// Clone N cards at the start and end to make infinite loop seamless
const CLONE_COUNT = 4;
const clonedProducts = [
  ...products.slice(-CLONE_COUNT).map((p, i) => ({ ...p, _key: `clone-start-${i}` })),
  ...products.map((p) => ({ ...p, _key: `real-${p.id}` })),
  ...products.slice(0, CLONE_COUNT).map((p, i) => ({ ...p, _key: `clone-end-${i}` })),
];

// Real cards start at index CLONE_COUNT in the cloned array
const REAL_START = CLONE_COUNT;
const REAL_END = CLONE_COUNT + products.length - 1;

export default function ProductsMoev() {
  // Start at first real card
  const [index, setIndex] = useState(REAL_START);
  const [animated, setAnimated] = useState(true);
  const autoTimer = useRef(null);
  const isJumping = useRef(false);

  const translateX = index * STEP;

  const startAuto = () => {
    autoTimer.current = setInterval(() => {
      setAnimated(true);
      setIndex((prev) => prev + 1);
    }, 2000);
  };

  const resetAuto = () => {
    clearInterval(autoTimer.current);
    startAuto();
  };

  useEffect(() => {
    startAuto();
    return () => clearInterval(autoTimer.current);
  }, []);

  // When transition ends: if we've gone past the real cards, silently jump back
  const handleTransitionEnd = () => {
    if (isJumping.current) return;

    if (index > REAL_END) {
      // Jumped past end — silently reset to real start
      isJumping.current = true;
      setAnimated(false);
      setIndex(REAL_START);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          isJumping.current = false;
        });
      });
    } else if (index < REAL_START) {
      // Jumped before start — silently reset to real end
      isJumping.current = true;
      setAnimated(false);
      setIndex(REAL_END);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          isJumping.current = false;
        });
      });
    }
  };

  const nextSlide = () => {
    setAnimated(true);
    setIndex((prev) => prev + 1);
    resetAuto();
  };

  const prevSlide = () => {
    setAnimated(true);
    setIndex((prev) => prev - 1);
    resetAuto();
  };

  // Dot index: which real card is active (0-based)
  const activeDot = ((index - REAL_START) % products.length + products.length) % products.length;

  const goTo = (i) => {
    setAnimated(true);
    setIndex(REAL_START + i);
    resetAuto();
  };

  return (
    <>
      <style>{`
        .slider-wrapper {
          position: relative;
          overflow: hidden;
          width: 100%;
          padding: 20px 56px;
          box-sizing: border-box;
          background: #f5f5f5;
          border-radius: 12px;
        }

        .slider-track {
          display: flex;
          gap: ${GAP}px;
          will-change: transform;
        }

        .slider-track.animated {
          transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .mv-card {
          width: ${CARD_WIDTH}px;
          min-width: ${CARD_WIDTH}px;
          background: #fff;
          border-radius: 10px;
          padding: 12px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
          box-sizing: border-box;
          flex-shrink: 0;
          transition:
            transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1),
            box-shadow 0.3s ease,
            border-color 0.3s ease;
          border: 1.5px solid transparent;
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }

        .mv-card:hover {
          transform: translateY(-8px) scale(1.03);
          box-shadow: 0 16px 40px rgba(0,0,0,0.14), 0 4px 12px rgba(0,0,0,0.08);
          border-color: #e67e22;
        }

        .mv-card::before {
          content: "";
          position: absolute;
          top: 0; left: -100%;
          width: 60%; height: 100%;
          background: linear-gradient(120deg, transparent 0%, rgba(255,255,255,0.45) 50%, transparent 100%);
          transition: left 0.5s ease;
          z-index: 1;
          pointer-events: none;
        }

        .mv-card:hover::before { left: 160%; }

        .mv-card img {
          width: 100%; height: 140px;
          object-fit: contain; border-radius: 8px;
          background: #f9f9f9;
          transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          display: block;
        }

        .mv-card:hover img { transform: scale(1.08); }

        .mv-card h5 {
          margin: 10px 0 4px; font-size: 15px; font-weight: 600; color: #222;
          transition: color 0.2s ease, transform 0.3s ease;
        }

        .mv-card:hover h5 { color: #e67e22; transform: translateY(-2px); }

        .mv-card .card-text { margin: 0 0 8px; font-size: 13px; color: #666; }

        .mv-card .add-to-cart {
          width: 100%; padding: 7px 0; background: #e67e22;
          color: #fff; border: none; border-radius: 6px;
          font-size: 12px; font-weight: 600; cursor: pointer;
          margin-top: 8px; opacity: 0; transform: translateY(10px);
          transition: opacity 0.3s ease, transform 0.3s ease, background 0.2s;
          position: relative; z-index: 2;
        }

        .mv-card:hover .add-to-cart { opacity: 1; transform: translateY(0); }
        .mv-card .add-to-cart:hover { background: #cf6d17; }

        .price-row {
          display: flex; align-items: center; gap: 8px;
          flex-wrap: wrap; transition: transform 0.3s ease;
        }
        .mv-card:hover .price-row { transform: translateY(-2px); }
        .orig-price { font-size: 13px; color: #999; text-decoration: line-through; }
        .disc-price { font-size: 15px; font-weight: 600; color: #222; }
        .discount-badge {
          font-size: 11px; background: #e6f4ea; color: #2d7a3a;
          padding: 2px 7px; border-radius: 20px; font-weight: 500;
        }

        .arrow {
          position: absolute; top: 50%; transform: translateY(-50%);
          background: #fff; color: #222; border: 1px solid #ddd;
          width: 38px; height: 38px; border-radius: 50%;
          cursor: pointer; font-size: 18px;
          display: flex; align-items: center; justify-content: center;
          z-index: 10; box-shadow: 0 2px 6px rgba(0,0,0,0.1);
          transition: background 0.2s, box-shadow 0.2s;
          padding: 0; line-height: 1;
        }
        .arrow:hover { background: #f0f0f0; box-shadow: 0 3px 10px rgba(0,0,0,0.15); }
        .arrow:active { transform: translateY(-50%) scale(0.95); }
        .arrow.left  { left: 8px; }
        .arrow.right { right: 8px; }

        .dots-row {
          display: flex; justify-content: center;
          align-items: center; gap: 6px; margin-top: 14px;
        }
        .dot {
          width: 7px; height: 7px; border-radius: 50%;
          background: #ccc; cursor: pointer;
          transition: background 0.3s, width 0.3s, border-radius 0.3s;
        }
        .dot.active { width: 20px; border-radius: 4px; background: #333; }
      `}</style>

      <div className="slider-wrapper">
        <button className="arrow left" onClick={prevSlide} aria-label="Previous">&#8592;</button>

        <div
          className={`slider-track${animated ? " animated" : ""}`}
          style={{ transform: `translateX(-${translateX}px)` }}
          onTransitionEnd={handleTransitionEnd}
        >
          {clonedProducts.map((data, i) => (
            <div className="mv-card" key={`${data._key}-${i}`}>
              <img src={data.image} alt={data.title} />
              <h5>{data.title}</h5>
              <p className="card-text">{data.text}</p>
              <div className="price-row">
                <span className="orig-price">₹{data.originalprice}</span>
                <span className="disc-price">₹{data.discountprice}</span>
                <span className="discount-badge">{data.discount}% off</span>
              </div>
              <button className="add-to-cart">🛒 Add to Cart</button>
            </div>
          ))}
        </div>

        <button className="arrow right" onClick={nextSlide} aria-label="Next">&#8594;</button>
      </div>

      <div className="dots-row">
        {products.map((_, i) => (
          <div
            key={i}
            className={`dot${activeDot === i ? " active" : ""}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </>
  );
}