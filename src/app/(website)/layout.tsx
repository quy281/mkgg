import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import ChatWidget from "@/components/ChatWidget";

export const metadata: Metadata = {
  metadataBase: new URL('https://mkg.vn'),
  title: "MKG - Thiết Kế & Thi Công Nội Thất Cao Cấp TP.HCM",
  description: "Thiết kế & thi công nội thất cao cấp tại TP.HCM. MKG - 15+ năm kinh nghiệm, nhà máy 5000m², cam kết chất lượng gỗ E1. Nhận tư vấn miễn phí.",
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  keywords: ["nội thất", "thiết kế nội thất", "thi công nội thất", "Minh Khuê", "MKG", "nội thất cao cấp", "TP.HCM"],
  openGraph: {
    title: "MKG - Thiết Kế & Thi Công Nội Thất Cao Cấp TP.HCM",
    description: "Nâng tầm không gian sống - Thiết kế, thi công nội thất cao cấp",
    url: "https://mkg.vn",
    siteName: "MKG.VN",
    type: "website",
    locale: "vi_VN",
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <head>
        {/* Preconnect for speed */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Preload critical font — non-blocking with display=swap */}
        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:ital,wght@0,400;0,600;0,700;0,800;1,400&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,500&display=swap"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:ital,wght@0,400;0,600;0,700;0,800;1,400&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,500&display=swap"
          rel="stylesheet"
          media="print"
          // @ts-ignore
          onLoad="this.media='all'"
        />
        <noscript>
          <link
            href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:ital,wght@0,400;0,600;0,700;0,800;1,400&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,500&display=swap"
            rel="stylesheet"
          />
        </noscript>
        {/* LocalBusiness Schema */}
        <JsonLd data={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "@id": "https://mkg.vn/#organization",
          "name": "Minh Khuê Group - MKG",
          "alternateName": "MKG Nội Thất",
          "description": "Thiết kế & thi công nội thất cao cấp tại TP.HCM",
          "url": "https://mkg.vn",
          "telephone": "+84817424242",
          "email": "fadifurnitures@gmail.com",
          "image": "https://mkg.vn/logo.png",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Số 8 đường 79, Phường Tân Quy",
            "addressLocality": "Quận 7",
            "addressRegion": "TP.HCM",
            "addressCountry": "VN"
          },
          "geo": { "@type": "GeoCoordinates", "latitude": "10.7379", "longitude": "106.7218" },
          "areaServed": "TP.HCM",
          "priceRange": "$$$$",
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "opens": "08:00",
            "closes": "17:30"
          },
          "sameAs": [
            "https://zalo.me/0817424242",
            "https://facebook.com/mkg.vn",
            "https://youtube.com/c/mkg"
          ]
        }} />
        {/* WebSite Schema */}
        <JsonLd data={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "MKG Group",
          "alternateName": "MKG.vn",
          "url": "https://mkg.vn/",
          "potentialAction": {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://mkg.vn/tin-tuc?q={search_term_string}"
            },
            "query-input": "required name=search_term_string"
          }
        }} />
        {/* Service Schema — Sơn Nước FADI */}
        <JsonLd data={{
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Sơn Nhà Trọn Gói",
          "name": "Dịch vụ sơn nhà căn hộ TP.HCM — FADI × MKG",
          "description": "Gói sơn nước trọn gói theo diện tích căn hộ: 1PN dưới 50m² từ 6.5 triệu, 2PN dưới 70m² từ 9 triệu, 3PN dưới 110m² từ 10.5 triệu. Bao gồm vật tư + nhân công, bảo hành 1 năm.",
          "url": "https://mkg.vn/son-nha",
          "provider": { "@type": "LocalBusiness", "@id": "https://mkg.vn/#organization" },
          "areaServed": "TP.HCM",
          "offers": [
            { "@type": "Offer", "name": "Gói 1 Phòng Ngủ < 50m²", "price": "6500000", "priceCurrency": "VND" },
            { "@type": "Offer", "name": "Gói 2 Phòng Ngủ < 70m²", "price": "9000000", "priceCurrency": "VND" },
            { "@type": "Offer", "name": "Gói 3 Phòng Ngủ < 110m²", "price": "10500000", "priceCurrency": "VND" }
          ]
        }} />
      </head>
      <body className="antialiased" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        {/* Sticky Mobile CTA — hiện trên mobile, ẩn desktop */}
        <div className="sticky-mobile-cta" role="navigation" aria-label="Liên hệ nhanh">
          <a href="tel:+84817424242" className="cta-call" aria-label="Gọi ngay">
            <span>📞</span> Gọi Ngay
          </a>
          <a href="https://zalo.me/0817424242" target="_blank" rel="noopener noreferrer" className="cta-zalo" aria-label="Chat Zalo">
            <span>💬</span> Zalo
          </a>
          <a href="/lien-he#booking" className="cta-quote" aria-label="Xem bảng giá">
            <span>📋</span> Báo Giá
          </a>
        </div>
        {/* AI Chatbot Widget — ẩn trên mobile nhỏ (sticky CTA đủ dùng) */}
        <ChatWidget />
      </body>
    </html>
  );
}
