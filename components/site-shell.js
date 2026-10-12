"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { createContext, useContext, useEffect, useMemo, useRef, useState } from "react";
import { formatMoney, products } from "@/lib/catalog";

const AppContext = createContext(null);

export function useApp() {
  return useContext(AppContext);
}

export function SiteShell({ children }) {
  const pathname = usePathname();
  const [cart, setCart] = useState([]);
  const [toast, setToast] = useState("");
  const [query, setQuery] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const searchRef = useRef(null);

  useEffect(() => {
    if (!toast) return undefined;
    const timer = setTimeout(() => setToast(""), 1800);
    return () => clearTimeout(timer);
  }, [toast]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (searchOpen) searchRef.current?.focus();
  }, [searchOpen]);

  useEffect(() => {
    function onKey(event) {
      if (event.key !== "Escape") return;
      setSearchOpen(false);
      setQuery("");
      setCartOpen(false);
      setLoginOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const api = useMemo(() => ({
    showToast: setToast,
    addItem(product) {
      setCart((current) => {
        const found = current.find((item) => item.name === product.name);
        if (found) {
          return current.map((item) => (
            item.name === product.name ? { ...item, qty: item.qty + 1 } : item
          ));
        }
        return [...current, { ...product, qty: 1 }];
      });
      setToast("Đã thêm vào giỏ hàng");
    },
  }), []);

  const count = cart.reduce((sum, item) => sum + item.qty, 0);
  const total = cart.reduce((sum, item) => sum + item.qty * item.price, 0);
  const hits = query.trim()
    ? products.filter((item) => item.name.toLowerCase().includes(query.trim().toLowerCase())).slice(0, 6)
    : [];
  const current = (href) => (pathname === href || pathname.startsWith(`${href}/`) ? "is-current" : "");

  function changeQty(index, dir) {
    setCart((currentCart) => {
      const next = currentCart.map((item, i) => (
        i === index ? { ...item, qty: item.qty + dir } : item
      ));
      return next.filter((item) => item.qty > 0);
    });
  }

  function closeOverlays() {
    setCartOpen(false);
    setLoginOpen(false);
  }

  return (
    <AppContext.Provider value={api}>
      <header className="header">
        <div className="promo">
          <div className="promo-inner">
            <p>SIÊU SALE GIỮA THÁNG 15.5!!</p>
            <Link className="promo-btn" href="/#khuyen-mai">
              Xem KM
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
                <path d="m17 8 4 4m0 0-4 4m4-4H3" stroke="#29391F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
        <div className="nav-bar">
          <div className="container nav-inner">
            <button className="icon-btn menu-btn" type="button" aria-label="Mở menu" onClick={() => setMenuOpen((open) => !open)}>
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none"><path d="M4 6h16M4 12h16M4 18h7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
            </button>
            <Link className="logo" href="/" aria-label="Lam Trà">
              <img src="/assets/logo-lam-tra.png" alt="Lam Trà" width="84" height="78" />
            </Link>
            <nav className="main-nav" aria-label="Chính">
              <div className="nav-item">
                <Link href="/#san-pham">Sản phẩm</Link>
                <div className="mega">
                  <Link href="/#san-pham">Trái cây sấy, mứt, nước cốt</Link>
                  <Link href="/#san-pham">Bánh mứt, đồ khô đặc sản</Link>
                  <Link href="/#san-pham">Trà, cà phê</Link>
                  <Link href="/#san-pham">Nông sản, dược liệu, quý hiếm</Link>
                </div>
              </div>
              <Link className={current("/cua-hang")} href="/cua-hang">Cửa hàng</Link>
              <Link className={current("/lien-he")} href="/lien-he">Liên hệ</Link>
              <Link className={current("/tin-tuc")} href="/tin-tuc">Tin tức</Link>
            </nav>
            <div className="nav-actions">
              <button className="icon-btn search-btn" type="button" aria-label="Tìm kiếm" onClick={() => setSearchOpen(true)}>
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none"><path d="M21 21 15 15M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
              </button>
              <button className="login-pill" type="button" onClick={() => { setLoginOpen(true); setCartOpen(false); }}>
                <span className="login-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="none"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.828 9.828a4 4 0 1 0-5.656-5.656 4 4 0 0 0 5.656 5.656ZM7.05 16.05A7 7 0 0 1 19 21H5a7 7 0 0 1 2.05-4.95Z" /></svg>
                </span>
                <span>Đăng nhập</span>
              </button>
              <button className="cart-btn" type="button" aria-label="Giỏ hàng" onClick={() => { setCartOpen(true); setLoginOpen(false); }}>
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none">
                  <path fillRule="evenodd" d="M8.25 7.5V6.75a3.75 3.75 0 0 1 7.5 0V7.5h1.2a1.5 1.5 0 0 1 1.49 1.33l.9 8.25A1.5 1.5 0 0 1 17.85 18.75H6.15a1.5 1.5 0 0 1-1.49-1.67l.9-8.25A1.5 1.5 0 0 1 7.05 7.5h1.2Zm1.5 0h4.5V6.75a2.25 2.25 0 0 0-4.5 0V7.5Z" fill="currentColor" />
                </svg>
                <span className="cart-count">{count}</span>
              </button>
            </div>
          </div>
          <div className="nav-line" />
        </div>
      </header>

      <div className="search-overlay" hidden={!searchOpen}>
        <div className="search-box">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none"><path d="M21 21 15 15M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" stroke="#111" strokeWidth="1.5" strokeLinecap="round" /></svg>
          <input
            type="search"
            placeholder="Tìm sản phẩm đặc sản Đà Lạt..."
            value={query}
            ref={searchRef}
            onChange={(event) => setQuery(event.target.value)}
          />
          <button type="button" className="search-close" aria-label="Đóng" onClick={() => { setSearchOpen(false); setQuery(""); }}>×</button>
        </div>
        <div className="search-results">
          {query.trim() && hits.length === 0 && <p className="search-empty">Không tìm thấy sản phẩm phù hợp.</p>}
          {hits.map((item) => (
            <Link className="search-hit" href="/#san-pham" key={item.name} onClick={() => { setSearchOpen(false); setQuery(""); }}>
              <img src={item.image} alt="" />
              <span><strong>{item.name}</strong>{formatMoney(item.price)}</span>
            </Link>
          ))}
        </div>
      </div>

      <aside className="drawer" hidden={!cartOpen}>
        <div className="drawer-head">
          <h2>Giỏ hàng</h2>
          <button type="button" aria-label="Đóng" onClick={() => setCartOpen(false)}>×</button>
        </div>
        <div className="drawer-body">
          {cart.length === 0 && <p className="empty">Giỏ hàng của bạn đang trống.</p>}
          {cart.map((item, index) => (
            <div className="cart-line" key={item.name}>
              <img src={item.image} alt="" />
              <div className="info">
                <strong>{item.name}</strong>
                <div>{formatMoney(item.price)}</div>
                <div className="qty">
                  <button type="button" onClick={() => changeQty(index, -1)}>−</button>
                  <span>{item.qty}</span>
                  <button type="button" onClick={() => changeQty(index, 1)}>+</button>
                </div>
              </div>
            </div>
          ))}
          {cart.length > 0 && (
            <div className="drawer-foot">
              <div className="cart-line"><span>Tạm tính</span><strong>{formatMoney(total)}</strong></div>
              <button
                className="btn forest full"
                type="button"
                onClick={() => {
                  setToast("Đơn hàng demo đã được ghi nhận.");
                  setCart([]);
                  setCartOpen(false);
                }}
              >
                Thanh toán
              </button>
            </div>
          )}
        </div>
      </aside>
      <div className="backdrop" hidden={!cartOpen && !loginOpen} onClick={closeOverlays} />

      <div className="modal" hidden={!loginOpen}>
        <form
          className="modal-card"
          onSubmit={(event) => {
            event.preventDefault();
            setLoginOpen(false);
            setToast("Đăng nhập demo thành công.");
          }}
        >
          <button className="modal-x" type="button" aria-label="Đóng" onClick={() => setLoginOpen(false)}>×</button>
          <h2>Đăng nhập</h2>
          <p>Chào mừng bạn quay lại Langfarm.</p>
          <label>Email<input type="email" required placeholder="ban@email.com" /></label>
          <label>Mật khẩu<input type="password" required placeholder="••••••••" /></label>
          <button className="btn forest full" type="submit">Đăng nhập</button>
          <button className="text-link" type="button">Đăng ký thành viên</button>
        </form>
      </div>

      <nav className="mobile-menu" hidden={!menuOpen}>
        <Link href="/#san-pham">Sản phẩm</Link>
        <Link href="/cua-hang">Cửa hàng</Link>
        <Link href="/lien-he">Liên hệ</Link>
        <Link href="/tin-tuc">Tin tức</Link>
      </nav>

      {children}

      <footer className="footer">
        <div className="store-cta" style={{ backgroundImage: "url('/assets/map-border.png')" }}>
          <div className="container store-row">
            <p className="store-title">Chúng tôi có hơn <span>40 cửa hàng</span> tại các thành phố lớn<br />trên lãnh thổ Việt Nam</p>
            <Link className="btn forest" href="/cua-hang">Xem danh sách cửa hàng</Link>
          </div>
        </div>
        <div className="footer-mid">
          <div className="container footer-mid-row">
            <div className="socials">
              <a href="https://www.facebook.com/langfarmdacsandalat/" target="_blank" rel="noreferrer" aria-label="Facebook">f</a>
              <a href="https://www.instagram.com/langfarmofficial/?hl=en" target="_blank" rel="noreferrer" aria-label="Instagram">◎</a>
              <a href="https://shopee.vn/langfarmdacsandalat" target="_blank" rel="noreferrer" aria-label="Shopee">S</a>
              <a href="https://www.lazada.vn/langfarm/" target="_blank" rel="noreferrer" aria-label="Lazada">L</a>
              <a href="https://tiki.vn/thuong-hieu/l-angfarm.html" target="_blank" rel="noreferrer" aria-label="Tiki">T</a>
              <a href="https://www.tiktok.com/@langfarmdacsandalat" target="_blank" rel="noreferrer" aria-label="Tiktok">♪</a>
            </div>
            <div className="hotline">
              <p>Hotline (7:30-22:00)</p>
              <a href="tel:19009065">19009065</a>
            </div>
          </div>
        </div>
        <div className="footer-links">
          <div className="container link-grid">
            <div>
              <h3>Khách hàng thân thiết</h3>
              <Link href="/lien-he">Đăng ký thành viên</Link>
            </div>
            <div>
              <h3>Chính sách</h3>
              <Link href="/tin-tuc">Chính sách thanh toán</Link>
              <Link href="/tin-tuc">Chính sách giao hàng</Link>
              <Link href="/tin-tuc">Chính sách đổi trả</Link>
              <Link href="/tin-tuc">Chính sách xuất hóa đơn GTGT</Link>
              <Link href="/tin-tuc">Chính sách kiểm hàng</Link>
            </div>
            <div>
              <h3>Chăm sóc khách hàng</h3>
              <Link href="/tin-tuc">Chính sách bảo mật</Link>
              <Link href="/tin-tuc">Điều khoản sử dụng</Link>
              <Link href="/tin-tuc">Hướng dẫn mua hàng</Link>
            </div>
            <div>
              <h3>Langfarm</h3>
              <Link href="/tin-tuc">Tuyển dụng</Link>
            </div>
            <div>
              <h3>Liên hệ</h3>
              <p>Số 1B, Hoàng Văn Thụ, Phường 5, Thành phố Đà Lạt, Tỉnh Lâm Đồng</p>
              <a href="mailto:hotro@langfarm.com">hotro@langfarm.com</a>
            </div>
          </div>
        </div>
        <div className="legal">
          <div className="container legal-row">
            <div>
              <p className="company">CÔNG TY TNHH OLA VIỆT NAM</p>
              <p>Mã số thuế: 0315241288. Giấy chứng nhận đăng ký doanh nghiệp do Sở Kế hoạch và Đầu tư TP. HCM cấp ngày 24/08/2018.</p>
              <p>Trụ sở chính: 25 Đường số 16, KDC Him Lam 6A, ấp 4A, Xã Bình Hưng, Thành phố Hồ Chí Minh, Việt Nam.</p>
            </div>
            <a href="http://online.gov.vn/Home/WebDetails/128106" target="_blank" rel="noreferrer">
              <img src="/assets/bo-cong-thuong.png" alt="Đã thông báo Bộ Công Thương" width="140" />
            </a>
          </div>
        </div>
      </footer>

      <button className="to-top" type="button" aria-label="Lên đầu trang" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>↑</button>
      <div className="toast" hidden={!toast}>{toast}</div>
    </AppContext.Provider>
  );
}
