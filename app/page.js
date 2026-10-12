import Link from "next/link";
import { Hero } from "@/components/hero";
import { ProductSlider } from "@/components/product-slider";
import { homeSections } from "@/lib/catalog";

const categories = [
  { tone: "peach", image: "/assets/categories/trai-cay.png", label: "Trái cây sấy, mứt, nước cốt" },
  { tone: "lilac", image: "/assets/categories/mut.png", label: "Bánh mứt, đồ khô đặc sản" },
  { tone: "mint", image: "/assets/categories/tra.png", label: "Trà, cà phê" },
  { tone: "banana", image: "/assets/categories/nong-san.png", label: "Nông sản, dược liệu, quý hiếm" },
];

export default function HomePage() {
  return (
    <main>
      <Hero />
      <section className="categories" id="san-pham">
        <div className="container">
          <h1>Danh mục nổi bật</h1>
          <div className="cat-grid">
            {categories.map((category) => (
              <Link className={`cat-card ${category.tone}`} href="/#san-pham" key={category.label}>
                <img src={category.image} alt={category.label} />
                <p>{category.label}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {homeSections.map((section) => (
        <div key={section.title}>
          <section className="banner">
            <img src={section.banner} alt={section.bannerAlt} />
          </section>
          <ProductSlider title={section.title} products={section.products} />
        </div>
      ))}

      <section className="story">
        <img className="stripe" src="/assets/divider-forest.jpg" alt="" />
        <div className="band banana-band">Chúng tôi là một thương hiệu có xuất xứ từ Đà Lạt</div>
        <div className="band forest-band">
          Chúng tôi làm việc chăm chỉ mỗi ngày để tạo ra những sản phẩm<br />
          đặc sản Đà Lạt uy tín, chất lượng cao, tốt cho sức khoẻ,<br />
          bao bì đẹp mắt, hậu mãi hài lòng
        </div>
        <div className="band mango-band">
          Chúng tôi luôn mang trong mình khát vọng có thể giới thiệu<br />
          cho toàn Thế Giới những sản phẩm tốt từ quê hương mình
        </div>
        <img className="stripe" src="/assets/divider-primary.jpg" alt="" />
      </section>

      <section className="benefits">
        <div className="benefit">
          <span className="blob" aria-hidden="true">
            <svg viewBox="0 0 64 64" width="88" height="88"><ellipse cx="32" cy="34" rx="26" ry="22" fill="#F7E9D0" /><path d="M14 36h22l4-8h8l3 6h3v6H14v-4Z" fill="none" stroke="#29391F" strokeWidth="2" strokeLinejoin="round" /><circle cx="22" cy="46" r="3" fill="#29391F" /><circle cx="44" cy="46" r="3" fill="#29391F" /></svg>
          </span>
          <p>Miễn phí vận chuyển cho<br />đơn hàng từ 490k</p>
        </div>
        <div className="benefit">
          <span className="blob" aria-hidden="true">
            <svg viewBox="0 0 64 64" width="88" height="88"><ellipse cx="32" cy="34" rx="26" ry="22" fill="#F7E9D0" /><path d="M32 16c6 8 10 14 10 20a10 10 0 1 1-20 0c0-6 4-12 10-20Z" fill="none" stroke="#29391F" strokeWidth="2" /><path d="M32 28v14" stroke="#29391F" strokeWidth="2" strokeLinecap="round" /></svg>
          </span>
          <p>Nông sản chất lượng cao,<br />từ vườn nhà đến tay bạn</p>
        </div>
        <div className="benefit">
          <span className="blob" aria-hidden="true">
            <svg viewBox="0 0 64 64" width="88" height="88"><ellipse cx="32" cy="34" rx="26" ry="22" fill="#F7E9D0" /><path d="M22 40c0-8 4-14 10-18 6 4 10 10 10 18" fill="none" stroke="#29391F" strokeWidth="2" /><path d="M18 34h28" stroke="#29391F" strokeWidth="2" strokeLinecap="round" /><circle cx="32" cy="30" r="2.2" fill="#29391F" /></svg>
          </span>
          <p>Tự hào thương hiệu thuần<br />Việt</p>
        </div>
      </section>
    </main>
  );
}
