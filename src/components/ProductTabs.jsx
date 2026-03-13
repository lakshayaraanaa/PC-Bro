import { useState } from "react";

const tabs = [
  { id: "latest", label: "Latest", icon: "📢" },
  { id: "selling", label: "Most Selling", icon: "⭐" },
  { id: "trending", label: "Trending", icon: "#" },
  { id: "sale", label: "On Sale", icon: "%" },
];

// 👇 Replace each image path with your actual asset file names in src/assets/
// ✅ READY TO USE — All images are free, public CDN URLs (no download needed)
// Just paste this entire allProducts object into your ProductTabs.jsx

const allProducts = {

  // 📢 LATEST
  latest: [
    {
      id: 1,
      title: "MSI PRO MP341CQW 34 Inch Curved Business Monitor",
      text: "34-inch WQHD curved IPS panel, 100Hz, USB-C",
      image: "https://cdn.dummyjson.com/products/images/laptops/Apple%20MacBook%20Pro%2014%20Inch%20Space%20Grey/1.webp",
      originalprice: "33,999",
      discountprice: "23,750",
      discount: 30,
      thumbnails: [
        "https://cdn.dummyjson.com/products/images/laptops/Apple%20MacBook%20Pro%2014%20Inch%20Space%20Grey/1.webp",
        "https://cdn.dummyjson.com/products/images/laptops/Apple%20MacBook%20Pro%2014%20Inch%20Space%20Grey/2.webp",
        "https://cdn.dummyjson.com/products/images/laptops/Apple%20MacBook%20Pro%2014%20Inch%20Space%20Grey/3.webp",
      ],
    },
    {
      id: 2,
      title: "Ant Esports Titan FE ARGB Mid-Tower Gaming Case",
      text: "Mid-tower chassis with 3x ARGB fans pre-installed",
      image: "https://cdn.dummyjson.com/products/images/laptops/Asus%20Zenbook%20Pro%20Duo%2015/1.webp",
      originalprice: "6,499",
      discountprice: "4,900",
      discount: 25,
      thumbnails: [
        "https://cdn.dummyjson.com/products/images/laptops/Asus%20Zenbook%20Pro%20Duo%2015/1.webp",
        "https://cdn.dummyjson.com/products/images/laptops/Asus%20Zenbook%20Pro%20Duo%2015/2.webp",
        "https://cdn.dummyjson.com/products/images/laptops/Asus%20Zenbook%20Pro%20Duo%2015/3.webp",
      ],
    },
    {
      id: 3,
      title: "Crucial Pro 16GB 6000MHz DDR5 RAM",
      text: "High-speed DDR5 UDIMM for AM5 and LGA1700",
      image: "https://cdn.dummyjson.com/products/images/laptops/Huawei%20Matebook%20X%20Pro/1.webp",
      originalprice: "43,160",
      discountprice: "18,500",
      discount: 57,
      thumbnails: [
        "https://cdn.dummyjson.com/products/images/laptops/Huawei%20Matebook%20X%20Pro/1.webp",
        "https://cdn.dummyjson.com/products/images/laptops/Huawei%20Matebook%20X%20Pro/2.webp",
        "https://cdn.dummyjson.com/products/images/laptops/Huawei%20Matebook%20X%20Pro/3.webp",
      ],
    },
    {
      id: 4,
      title: "MSI MAG A1000GLS PCIE5 GOLD 1000W ATX PSU",
      text: "80+ Gold certified, fully modular, 1000W output",
      image: "https://cdn.dummyjson.com/products/images/laptops/Lenovo%20Yoga%209i/1.webp",
      originalprice: "21,999",
      discountprice: "17,600",
      discount: 20,
      thumbnails: [
        "https://cdn.dummyjson.com/products/images/laptops/Lenovo%20Yoga%209i/1.webp",
        "https://cdn.dummyjson.com/products/images/laptops/Lenovo%20Yoga%209i/2.webp",
        "https://cdn.dummyjson.com/products/images/laptops/Lenovo%20Yoga%209i/3.webp",
      ],
    },
  ],

  // ⭐ MOST SELLING
  selling: [
    {
      id: 5,
      title: "Logitech G502 Hero High Performance Gaming Mouse",
      text: "25,600 DPI HERO sensor, 11 programmable buttons",
      image: "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20AirPods%20Max%20Silver/1.webp",
      originalprice: "5,999",
      discountprice: "3,499",
      discount: 42,
      thumbnails: [
        "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20AirPods%20Max%20Silver/1.webp",
        "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20AirPods%20Max%20Silver/2.webp",
        "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20AirPods%20Max%20Silver/3.webp",
      ],
    },
    {
      id: 6,
      title: "Corsair K95 RGB Platinum XT Mechanical Keyboard",
      text: "Cherry MX Speed switches, per-key RGB, aircraft-grade aluminum",
      image: "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20MagSafe%20Battery%20Pack/1.webp",
      originalprice: "15,999",
      discountprice: "10,200",
      discount: 36,
      thumbnails: [
        "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20MagSafe%20Battery%20Pack/1.webp",
        "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20MagSafe%20Battery%20Pack/2.webp",
        "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20MagSafe%20Battery%20Pack/3.webp",
      ],
    },
    {
      id: 7,
      title: "HyperX Cloud Alpha Wireless Gaming Headset",
      text: "300-hour battery life, dual-chamber drivers, 2.4GHz wireless",
      image: "https://cdn.dummyjson.com/products/images/mobile-accessories/Samsung%2025W%20USB-C%20Charger/1.webp",
      originalprice: "12,490",
      discountprice: "9,990",
      discount: 20,
      thumbnails: [
        "https://cdn.dummyjson.com/products/images/mobile-accessories/Samsung%2025W%20USB-C%20Charger/1.webp",
        "https://cdn.dummyjson.com/products/images/mobile-accessories/Samsung%2025W%20USB-C%20Charger/2.webp",
        "https://cdn.dummyjson.com/products/images/mobile-accessories/Samsung%2025W%20USB-C%20Charger/3.webp",
      ],
    },
    {
      id: 8,
      title: "Razer DeathAdder V3 Pro Wireless Mouse",
      text: "Ultra-lightweight 63g, Focus Pro 30K optical sensor",
      image: "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20USB-C%20Charge%20Cable%20(2m)/1.webp",
      originalprice: "9,999",
      discountprice: "7,500",
      discount: 25,
      thumbnails: [
        "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20USB-C%20Charge%20Cable%20(2m)/1.webp",
        "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20USB-C%20Charge%20Cable%20(2m)/2.webp",
        "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20USB-C%20Charge%20Cable%20(2m)/3.webp",
      ],
    },
  ],

  // # TRENDING
  trending: [
    {
      id: 9,
      title: "NVIDIA GeForce RTX 4070 Ti Super 16GB",
      text: "Ada Lovelace, 16GB GDDR6X, 4K gaming ready",
      image: "https://cdn.dummyjson.com/products/images/smartphones/Samsung%20Galaxy%20S23%20Ultra/1.webp",
      originalprice: "89,999",
      discountprice: "74,500",
      discount: 17,
      thumbnails: [
        "https://cdn.dummyjson.com/products/images/smartphones/Samsung%20Galaxy%20S23%20Ultra/1.webp",
        "https://cdn.dummyjson.com/products/images/smartphones/Samsung%20Galaxy%20S23%20Ultra/2.webp",
        "https://cdn.dummyjson.com/products/images/smartphones/Samsung%20Galaxy%20S23%20Ultra/3.webp",
      ],
    },
    {
      id: 10,
      title: "Samsung 990 Pro 2TB NVMe M.2 SSD",
      text: "PCIe 4.0 x4, up to 7,450MB/s sequential read",
      image: "https://cdn.dummyjson.com/products/images/smartphones/Apple%20iPhone%2014/1.webp",
      originalprice: "18,500",
      discountprice: "13,999",
      discount: 24,
      thumbnails: [
        "https://cdn.dummyjson.com/products/images/smartphones/Apple%20iPhone%2014/1.webp",
        "https://cdn.dummyjson.com/products/images/smartphones/Apple%20iPhone%2014/2.webp",
        "https://cdn.dummyjson.com/products/images/smartphones/Apple%20iPhone%2014/3.webp",
      ],
    },
    {
      id: 11,
      title: "AMD Ryzen 9 7900X Desktop Processor",
      text: "12-core 24-thread, 5.6GHz boost, AM5 socket",
      image: "https://cdn.dummyjson.com/products/images/smartphones/Apple%20iPhone%2015%20Plus%20Blue/1.webp",
      originalprice: "42,000",
      discountprice: "34,990",
      discount: 17,
      thumbnails: [
        "https://cdn.dummyjson.com/products/images/smartphones/Apple%20iPhone%2015%20Plus%20Blue/1.webp",
        "https://cdn.dummyjson.com/products/images/smartphones/Apple%20iPhone%2015%20Plus%20Blue/2.webp",
        "https://cdn.dummyjson.com/products/images/smartphones/Apple%20iPhone%2015%20Plus%20Blue/3.webp",
      ],
    },
    {
      id: 12,
      title: "ASUS ROG Swift OLED 27-inch 360Hz Monitor",
      text: "27-inch QHD OLED, 360Hz, 0.03ms GTG, G-Sync",
      image: "https://cdn.dummyjson.com/products/images/smartphones/Google%20Pixel%208/1.webp",
      originalprice: "75,000",
      discountprice: "62,990",
      discount: 16,
      thumbnails: [
        "https://cdn.dummyjson.com/products/images/smartphones/Google%20Pixel%208/1.webp",
        "https://cdn.dummyjson.com/products/images/smartphones/Google%20Pixel%208/2.webp",
        "https://cdn.dummyjson.com/products/images/smartphones/Google%20Pixel%208/3.webp",
      ],
    },
  ],

  // % ON SALE
  sale: [
    {
      id: 13,
      title: "Logitech C920 HD Pro Webcam 1080p",
      text: "Full HD 1080p/30fps, autofocus, dual stereo mics",
      image: "https://cdn.dummyjson.com/products/images/tablets/Apple%20iPad%20Pro%2011-inch/1.webp",
      originalprice: "8,995",
      discountprice: "3,599",
      discount: 60,
      thumbnails: [
        "https://cdn.dummyjson.com/products/images/tablets/Apple%20iPad%20Pro%2011-inch/1.webp",
        "https://cdn.dummyjson.com/products/images/tablets/Apple%20iPad%20Pro%2011-inch/2.webp",
        "https://cdn.dummyjson.com/products/images/tablets/Apple%20iPad%20Pro%2011-inch/3.webp",
      ],
    },
    {
      id: 14,
      title: "Creative Pebble Plus 2.1 Desktop Speakers",
      text: "8W RMS, down-firing subwoofer, USB-powered",
      image: "https://cdn.dummyjson.com/products/images/tablets/Samsung%20Galaxy%20Tab%20S7/1.webp",
      originalprice: "4,999",
      discountprice: "2,749",
      discount: 45,
      thumbnails: [
        "https://cdn.dummyjson.com/products/images/tablets/Samsung%20Galaxy%20Tab%20S7/1.webp",
        "https://cdn.dummyjson.com/products/images/tablets/Samsung%20Galaxy%20Tab%20S7/2.webp",
        "https://cdn.dummyjson.com/products/images/tablets/Samsung%20Galaxy%20Tab%20S7/3.webp",
      ],
    },
    {
      id: 15,
      title: "Elgato Key Light Air LED Panel",
      text: "45W, 2800K-7000K color temp, app-controlled",
      image: "https://cdn.dummyjson.com/products/images/tablets/Amazon%20Fire%20HD%208/1.webp",
      originalprice: "13,000",
      discountprice: "6,499",
      discount: 50,
      thumbnails: [
        "https://cdn.dummyjson.com/products/images/tablets/Amazon%20Fire%20HD%208/1.webp",
        "https://cdn.dummyjson.com/products/images/tablets/Amazon%20Fire%20HD%208/2.webp",
        "https://cdn.dummyjson.com/products/images/tablets/Amazon%20Fire%20HD%208/3.webp",
      ],
    },
    {
      id: 16,
      title: "SteelSeries Arctis Nova Pro Wireless Headset",
      text: "Multi-system wireless, hi-fi audio, hot-swap battery",
      image: "https://cdn.dummyjson.com/products/images/tablets/Apple%20iPad%20Air/1.webp",
      originalprice: "29,999",
      discountprice: "17,999",
      discount: 40,
      thumbnails: [
        "https://cdn.dummyjson.com/products/images/tablets/Apple%20iPad%20Air/1.webp",
        "https://cdn.dummyjson.com/products/images/tablets/Apple%20iPad%20Air/2.webp",
        "https://cdn.dummyjson.com/products/images/tablets/Apple%20iPad%20Air/3.webp",
      ],
    },
  ],
};

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
        .pc-card-wrap { position: relative; font-family: 'DM Sans', sans-serif; }

        .pc-card {
          width: 100%; display: flex; flex-direction: column; min-height: 400px;
          border: 1px solid #e0e0e0; border-radius: 16px; overflow: visible;
          position: relative; transition: border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
          cursor: pointer; background: #fff;
        }
        .pc-card:hover {
          border-color: #ff6b00;
          box-shadow: 0 0 0 1px #ff6b0033, 0 20px 50px rgba(255, 107, 0, 0.15);
          transform: translateY(-4px);
        }

        .pc-badge {
          position: absolute; top: 12px; left: 12px; background: #ff6b00; color: white;
          font-size: 11px; font-weight: 700; font-family: 'Syne', sans-serif;
          padding: 4px 9px; border-radius: 6px; letter-spacing: 0.5px; z-index: 2;
        }

        .pc-img-wrap {
          display: flex; justify-content: center; align-items: center;
          height: 200px; width: 100%; background: #f7f8fa;
          border-radius: 14px 14px 0 0; overflow: hidden;
        }
        .pc-img-wrap img {
          width: 160px; height: 160px; object-fit: contain;
          transition: transform 1.4s ease;
        }
        .pc-card:hover .pc-img-wrap img { transform: scale(1.06); }

        .pc-body { padding: 14px 16px 18px; flex: 1; display: flex; flex-direction: column; }

        .pc-title {
          font-family: 'Syne', sans-serif; font-size: 14px; font-weight: 700;
          margin: 0 0 4px; color: #222; line-height: 1.4;
          display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical;
          overflow: hidden; min-height: 40px;
        }
        .pc-text { font-size: 12px; color: #888; margin: 0 0 10px; line-height: 1.5; }

        .pc-prices { display: flex; align-items: center; gap: 10px; margin-bottom: 14px; }
        .pc-original { font-size: 12px; color: #aaa; text-decoration: line-through; }
        .pc-discount { font-family: 'Syne', sans-serif; font-size: 20px; font-weight: 800; color: #e67e22; }
        .pc-rupee { font-size: 14px; font-weight: 600; color: #ff6b00; margin-right: 1px; }

        .pc-add-btn {
          width: 100%; padding: 11px 0; background: #ff6b00; color: white; border: none;
          border-radius: 10px; font-family: 'Syne', sans-serif; font-size: 13px;
          font-weight: 700; letter-spacing: 1px; cursor: pointer;
          transition: background 0.2s ease, transform 0.15s ease, opacity 0.3s ease;
          text-transform: uppercase; opacity: 0; transform: translateY(8px); margin-top: auto;
        }
        .pc-card:hover .pc-add-btn { opacity: 1; transform: translateY(0); }
        .pc-add-btn:hover { background: #ff8533; transform: translateY(-1px); }
        .pc-add-btn.added { background: #22c55e; }

        .pc-sidebar {
          position: absolute; top: 0; right: calc(100% + 1px); width: 90px;
          background: #fff; border: 1px solid #ff6b0044; border-radius: 14px;
          padding: 10px 8px; display: flex; flex-direction: column; gap: 8px;
          z-index: 100; opacity: 0; pointer-events: none; transform: translateX(-10px);
          transition: opacity 0.3s ease, transform 0.3s ease;
          box-shadow: -6px 0 30px rgba(255, 107, 0, 0.12);
        }
        .pc-sidebar.visible { opacity: 1; pointer-events: all; transform: translateX(0); }

        .pc-sidebar-label {
          font-family: 'Syne', sans-serif; font-size: 9px; font-weight: 700;
          color: #d9235a; letter-spacing: 1px; text-transform: uppercase; text-align: center;
        }

        .pc-thumb {
          width: 66px; height: 66px; border-radius: 10px; overflow: hidden;
          border: 2px solid transparent; cursor: pointer;
          transition: border-color 0.2s ease, transform 0.2s ease; background: #f7f8fa;
        }
        .pc-thumb:hover, .pc-thumb.active { border-color: #ff6b00; transform: scale(1.05); }
        .pc-thumb img { width: 100%; height: 100%; object-fit: contain; padding: 4px; }
      `}</style>

      <div
        className="pc-card-wrap"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="pc-card">
          <span className="pc-badge">-{data.discount}%</span>
          <div className="pc-img-wrap">
            <img src={data.thumbnails?.[activeThumb] || data.image} alt={data.title} />
          </div>
          <div className="pc-body">
            <p className="pc-title">{data.title}</p>
            <p className="pc-text">{data.text}</p>
            <div className="pc-prices">
              <span className="pc-original">₹{data.originalprice}</span>
              <span className="pc-discount">
                <span className="pc-rupee">₹</span>{data.discountprice}
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
          <div className="pc-sidebar-label">Views</div>
          {data.thumbnails?.map((thumb, i) => (
            <div
              key={i}
              className={`pc-thumb${activeThumb === i ? " active" : ""}`}
              onClick={() => setActiveThumb(i)}
            >
              <img src={thumb} alt={`thumb-${i}`} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default function ProductTabs() {
  const [activeTab, setActiveTab] = useState("latest");

  return (
    <>
      <style>{`
        .pt-wrap { font-family: 'DM Sans', sans-serif; max-width: 1400px; margin: 0 auto; padding: 24px; }

        .pt-tabs {
          display: flex; background: #1a1a1a; border-radius: 10px;
          overflow: hidden; margin-bottom: 28px;
        }
        .pt-tab {
          flex: 1; padding: 14px 8px; border: none; cursor: pointer; font-size: 13px;
          font-weight: 600; display: flex; align-items: center; justify-content: center;
          gap: 6px; transition: background 0.2s, color 0.2s; background: transparent; color: #aaa;
        }
        .pt-tab.active { background: #e67e22; color: #fff; }

        .pt-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
          gap: 32px;
          padding: 10px 60px 10px 10px;
        }
      `}</style>

      <div className="pt-wrap">
        <div className="pt-tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`pt-tab${activeTab === tab.id ? " active" : ""}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <span style={{ fontSize: 14 }}>{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        <div className="pt-grid">
          {allProducts[activeTab].map((data) => (
            <ProductCard key={data.id} data={data} />
          ))}
        </div>
      </div>
    </>
  );
}