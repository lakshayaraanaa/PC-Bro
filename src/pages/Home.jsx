import Products from "../components/Products";
import ProductsMoev from "../components/ProductsMoev";
import RamCards from "../components/RamCards";
import ProductTabs from "../components/ProductTabs";

export default function Home() {
  return (
    <>
      <style>{`
        /* ── Banner ── */
        .main-banner img {
          border-radius: 12px;
          width: 100%;
          height: auto;
          object-fit: cover;
          max-height: 500px;
        }

        /* ── Section banners (full-width strips) ── */
        .section-banner img {
          width: 100%;
          height: auto;
          object-fit: cover;
          max-height: 500px;
          display: block;
        }

        /* ── Sidebar product image ── */
        .sidebar-img img {
          border-radius: 12px;
          width: 100%;
          height: auto;
          object-fit: cover;
        }

        /* ── Section spacing ── */
        .home-section {
          margin-bottom: 2rem;
        }

        /* ── Mobile tweaks ── */
        @media (max-width: 767.98px) {
          .main-banner img {
            border-radius: 8px;
            max-height: 200px;
          }

          .section-banner img {
            max-height: 160px;
          }

          .sidebar-img {
            /* On mobile, sidebar image sits above the products */
            max-width: 100%;
          }

          .sidebar-img img {
            border-radius: 8px;
            max-height: 220px;
            width: 100%;
            object-fit: cover;
          }
        }
      `}</style>

      {/* ── Hero Banner ── */}
      <div className="container-fluid px-3 pt-3 home-section main-banner">
        <img
          src="src/assets/Gemini_Generated_Image_26ry4w26ry4w26ry.png"
          alt="Hero Banner"
        />
      </div>

      {/* ── Sidebar + Products Row ── */}
      {/*
        On desktop (md+): sidebar image left (col-md-3), products right (col-md-9)
        On mobile: stacked — sidebar on top, products below
      */}
      <div className="container-fluid px-3 home-section">
        <div className="row g-3 align-items-start">

          {/* Sidebar Banner */}
          <div className="col-12 col-md-3 sidebar-img">
            <img
              src="src/assets/image_3639fa6d.png"
              alt="Side Banner"
            />
          </div>

          {/* Products Grid */}
          <div className="col-12 col-md-9">
            <Products />
          </div>

        </div>
      </div>

      {/* ── Section Banner 1 ── */}
      <div className="container-fluid px-0 home-section section-banner">
        <img
          src="src/assets/Gemini_Generated_Image_9bxqff9bxqff9bxq.png"
          alt="Promo Banner 1"
        />
      </div>

      {/* ── Moving Products Carousel ── */}
      <div className="container-fluid px-3 home-section">
        <ProductsMoev />
      </div>

      {/* ── Section Banner 2 ── */}
      <div className="container-fluid px-0 home-section section-banner">
        <img
          src="src/assets/Gemini_Generated_Image_yzhuswyzhuswyzhu.png"
          alt="Promo Banner 2"
        />
      </div>

      {/* ── Ram Cards Grid ── */}
      <div className="container-fluid px-3 home-section">
        <RamCards />
      </div>

      {/* ── Section Banner 3 ── */}
      <div className="container-fluid px-0 home-section section-banner">
        <img
          src="src/assets/Gemini_Generated_Image_anyl5manyl5manyl.png"
          alt="Promo Banner 3"
        />
      </div>

      {/* ── Product Tabs ── */}
      <div className="container-fluid px-3 home-section">
        <ProductTabs />
      </div>
    </>
  );
}