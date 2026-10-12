import Link from "next/link";
import { StoresLocator } from "@/components/stores-locator";
import { IntroIcon } from "@/components/store-icons";

export const metadata = {
  title: "Danh sách cửa hàng",
};

export default function StoresPage() {
  return (
    <main className="subpage">
      <div className="container">
        <p className="crumb"><Link href="/">Trang chủ</Link> · Danh sách cửa hàng</p>
        <section className="intro-card">
          <h1>Chúng tôi có hơn <span>40 cửa hàng</span> tại các thành phố lớn trên lãnh thổ Việt Nam</h1>
          <div className="intro-copy">
            <p><strong>Langfarm Store</strong> là hệ thống chuỗi cửa hàng bán lẻ đặc sản Đà Lạt do chúng tôi trực tiếp xây dựng và vận hành nhằm mục đích:</p>
            <ul>
              {[
                "Mang đến những sản phẩm đặc sản Đà Lạt an toàn, chất lượng và đẹp mắt nhất",
                "Lưu chuyển hàng hoá đúng tiêu chuẩn với mức giá được kiểm soát tốt nhất",
                "Cung cấp trải nghiệm mua sắm hoàn hảo nhất",
                "Lắng nghe ý kiến khách hàng thấu đáo nhất",
                "Làm cơ sở hậu cần cho dịch vụ hậu mãi hài lòng nhất",
              ].map((text, index) => (
                <li key={text}><IntroIcon index={index} /><span>{text}</span></li>
              ))}
            </ul>
            <p>Hiện tại, <strong>Langfarm Store</strong> đã có trên 40 cửa hàng tại TP. Đà Lạt, Hồ Chí Minh, Nha Trang, Đà Nẵng, Vũng Tàu và sẽ tiếp tục mở rộng trên toàn quốc.</p>
          </div>
        </section>
        <h2 className="page-heading">Danh sách cửa hàng <span>Langfarm</span></h2>
        <StoresLocator />
      </div>
    </main>
  );
}
