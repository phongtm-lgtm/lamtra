import { Be_Vietnam_Pro } from "next/font/google";
import localFont from "next/font/local";
import { SiteShell } from "@/components/site-shell";
import "./globals.css";

const beVietnam = Be_Vietnam_Pro({
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-be",
});

const langfarm = localFont({
  src: "../public/assets/font/langfarm.woff2",
  variable: "--font-langfarm",
  weight: "500 700",
  display: "swap",
});

export const metadata = {
  title: {
    default: "Đặc Sản Đà Lạt - Mua Hàng Online - Ship Toàn Quốc",
    template: "%s - Langfarm",
  },
  description: "Đặc sản Đà Lạt Langfarm. Mua hàng online, giao hàng toàn quốc.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi" data-scroll-behavior="smooth" className={`${beVietnam.variable} ${langfarm.variable}`}>
      <body>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
