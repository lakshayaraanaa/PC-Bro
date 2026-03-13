import { useState } from "react";

const tabs = [
  { id: "latest", label: "Latest", icon: "📢" },
  { id: "selling", label: "Most Selling", icon: "⭐" },
  { id: "trending", label: "Trending", icon: "#" },
  { id: "sale", label: "On Sale", icon: "%" },
];

const products = {
  latest: [
    { id: 1, name: "MSI PRO MP341CQW E12 White 34 Inch Business Monitor", oldPrice: "₹33,999", newPrice: "₹23,750", badge: "-30%", emoji: "🖥️" },
    { id: 2, name: "Ant Esports Titan FE ARGB Mid-Tower Gaming Case", oldPrice: "₹6,499", newPrice: "₹4,900", badge: "-25%", emoji: "🖥️" },
    { id: 3, name: "Crucial Pro 16GB 6000MHz CL48 DDR5 RAM", oldPrice: "₹43,160", newPrice: "₹18,500", badge: "-57%", emoji: "💾" },
    { id: 4, name: "MSI MAG A1000GLS PCIE5 GOLD 1000W ATX PSU", oldPrice: "₹21,999", newPrice: "₹17,600", badge: "-20%", emoji: "🔌" },
  ],
  selling: [
    { id: 5, name: "Logitech G502 Hero Gaming Mouse", oldPrice: "₹5,999", newPrice: "₹3,499", badge: null, emoji: "🖱️" },
    { id: 6, name: "Corsair K95 RGB Platinum XT Mechanical Keyboard", oldPrice: "₹15,999", newPrice: "₹10,200", badge: null, emoji: "⌨️" },
    { id: 7, name: "HyperX Cloud Alpha Wireless Headset", oldPrice: "₹12,490", newPrice: "₹9,990", badge: null, emoji: "🎧" },
    { id: 8, name: "Razer DeathAdder V3 Pro Wireless Mouse", oldPrice: "₹9,999", newPrice: "₹7,500", badge: null, emoji: "🖱️" },
  ],
  trending: [
    { id: 9, name: "NVIDIA GeForce RTX 4070 Ti Super 16GB", oldPrice: "₹89,999", newPrice: "₹74,500", badge: "Hot", emoji: "🎮" },
    { id: 10, name: "Samsung 990 Pro 2TB NVMe M.2 SSD", oldPrice: "₹18,500", newPrice: "₹13,999", badge: "New", emoji: "💿" },
    { id: 11, name: "AMD Ryzen 9 7900X Desktop Processor", oldPrice: "₹42,000", newPrice: "₹34,990", badge: "Hot", emoji: "🖥️" },
    { id: 12, name: "ASUS ROG Swift OLED 27-inch 360Hz Monitor", oldPrice: "₹75,000", newPrice: "₹62,990", badge: "New", emoji: "🖥️" },
  ],
  sale: [
    { id: 13, name: "Logitech C920 HD Pro Webcam 1080p", oldPrice: "₹8,995", newPrice: "₹3,599", badge: "-60%", emoji: "📷" },
    { id: 14, name: "Creative Pebble Plus 2.1 Desktop Speakers", oldPrice: "₹4,999", newPrice: "₹2,749", badge: "-45%", emoji: "🔊" },
    { id: 15, name: "Elgato Key Light Air LED Panel", oldPrice: "₹13,000", newPrice: "₹6,499", badge: "-50%", emoji: "💡" },
    { id: 16, name: "SteelSeries Arctis Nova Pro Wireless Headset", oldPrice: "₹29,999", newPrice: "₹17,999", badge: "-40%", emoji: "🎧" },
  ],
};

function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#fff",
        border: "1px solid #eee",
        borderRadius: 12,
        overflow: "hidden",
        position: "relative",
        transition: "transform 0.2s, box-shadow 0.2s",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        boxShadow: hovered ? "0 8px 24px rgba(0,0,0,0.12)" : "0 2px 8px rgba(0,0,0,0.06)",
        cursor: "pointer",
      }}
    >
      {product.badge && (
        <span style={{
          position: "absolute", top: 10, left: 10,
          background: "#e74c3c", color: "#fff",
          fontSize: 11, fontWeight: 700,
          padding: "3px 8px", borderRadius: 4,
          zIndex: 1,
        }}>
          {product.badge}
        </span>
      )}

      <div style={{
        height: 200, display: "flex", alignItems: "center",
        justifyContent: "center", background: "#f7f8fa", fontSize: 52,
      }}>
        {product.emoji}
      </div>

      <div style={{ padding: "12px 14px" }}>
        <p style={{
          fontSize: 13, color: "#333", lineHeight: 1.5,
          marginBottom: 10, minHeight: 40,
          display: "-webkit-box", WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical", overflow: "hidden",
        }}>
          {product.name}
        </p>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ fontSize: 12, color: "#999", textDecoration: "line-through" }}>
            {product.oldPrice}
          </span>
          <span style={{ fontSize: 17, fontWeight: 700, color: "#e67e22" }}>
            {product.newPrice}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function ProductTabs() {
  const [activeTab, setActiveTab] = useState("latest");

  return (
    <div style={{ fontFamily: "sans-serif", maxWidth: 1500, margin: "0 auto", padding: 24 }}>
      {/* Tab Bar */}
      <div style={{
        display: "flex", background: "#1a1a1a",
        borderRadius: 10, overflow: "hidden", marginBottom: 24,
      }}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              flex: 1, padding: "14px 8px", border: "none", cursor: "pointer",
              background: activeTab === tab.id ? "#e67e22" : "transparent",
              color: activeTab === tab.id ? "#fff" : "#aaa",
              fontSize: 13, fontWeight: 600,
              display: "flex", alignItems: "center", justifyContent: "center", gap: 6,
              transition: "background 0.2s, color 0.2s",
            }}
          >
            <span style={{ fontSize: 14 }}>{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </div>

      {/* Cards Grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
        gap: 16,
      }}>
        {products[activeTab].map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}