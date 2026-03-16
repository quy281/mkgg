import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";

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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&display=swap"
          rel="stylesheet"
        />
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
          }
        }} />
      </head>
      <body className="antialiased" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
