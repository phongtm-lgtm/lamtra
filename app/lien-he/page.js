import Link from "next/link";
import { ContactForm } from "@/components/contact-form";

export const metadata = {
  title: "Liên hệ",
};

export default function ContactPage() {
  return (
    <main className="subpage">
      <div className="container">
        <p className="crumb"><Link href="/">Trang chủ</Link> · Liên hệ</p>
        <div className="contact-grid">
          <section>
            <h1 className="contact-lead">Liên hệ</h1>
            <h2>Langfarm</h2>
            <p>Chúng tôi luôn sẵn sàng hỗ trợ, mọi thông tin về hàng hóa, dịch vụ, góp ý, thắc mắc, hợp tác,...</p>
            <h3>Thông tin liên hệ</h3>
            <p><strong>Hotline</strong><br />19009065 (7:30-20:00)</p>
            <p><strong>Email</strong><br /><a href="mailto:info@langfarm.com">info@langfarm.com</a></p>
            <p><strong>Social media</strong></p>
            <div className="social-row">
              <a href="https://www.facebook.com/langfarmdacsandalat/" target="_blank" rel="noreferrer">Facebook</a>
              <a href="https://www.instagram.com/langfarmofficial/?hl=en" target="_blank" rel="noreferrer">Instagram</a>
              <a href="https://www.tiktok.com/@langfarmdacsandalat" target="_blank" rel="noreferrer">Tiktok</a>
            </div>
            <div className="office">
              <div>
                <h3>Văn phòng &amp; Nhà máy Cam Ly, Đà Lạt</h3>
                <p>1B Hoàng Văn Thụ, P.5, TP. Đà Lạt</p>
                <p>07:30 - 17:00 | Thứ 2 - Thứ 7</p>
                <p>0263 381 1081</p>
              </div>
              <a className="linkish" href="https://www.google.com/maps/search/?api=1&query=1B+Hoàng+Văn+Thụ+Đà+Lạt" target="_blank" rel="noreferrer">Xem bản đồ</a>
            </div>
            <div className="office">
              <div>
                <h3>Văn phòng Nguyễn Văn Cừ, TP. HCM</h3>
                <p>126 - 128 Đường Nguyễn Văn Cừ, Phường Nguyễn Cư Trinh, Quận 1, TP. Hồ Chí Minh</p>
                <p>7:30 - 22:00 | Các ngày trong tuần</p>
              </div>
              <a className="linkish" href="https://www.google.com/maps/search/?api=1&query=126+Nguyễn+Văn+Cừ+Quận+1" target="_blank" rel="noreferrer">Xem bản đồ</a>
            </div>
            <div className="office">
              <div>
                <h3>Nhà máy sấy hồng Langfarm</h3>
                <p>Xã Định An, Huyện Đức Trọng, Tỉnh Lâm Đồng</p>
                <p>08:00 - 17:00 | Thứ 2 - Thứ 7</p>
                <p>090 842 7840</p>
              </div>
              <a className="linkish" href="https://www.google.com/maps/search/?api=1&query=Định+An+Đức+Trọng+Lâm+Đồng" target="_blank" rel="noreferrer">Xem bản đồ</a>
            </div>
          </section>
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
