# 🎯 SEO Audit — MKG.VN — Hướng dẫn thực hiện cho Agent

> **Dự án:** D:\mkgvn (Next.js App Router + Vercel + Sanity CMS)
> **Domain:** https://mkg.vn
> **Cấu trúc route:** `src/app/(website)/` — route group chính
> **Config:** `next.config.ts` (TypeScript)
> **Layout gốc:** `src/app/(website)/layout.tsx`

---

## HƯỚNG DẪN ĐỌC

Mỗi mục audit có:
- **Hành động:** Mô tả cần làm gì
- **File:** Đường dẫn chính xác trong dự án cần sửa/tạo
- **Code:** Code hoàn chỉnh để thêm/sửa
- **Kiểm tra:** Cách verify kết quả
- **⚠️ Chú ý:** Cảnh báo quan trọng

**Thứ tự thực hiện:** 1.1 → 1.2 → 1.3 → 1.4 → 1.5 → 1.6 → 2.1 → ... → 3.3

---

## 🔴 NHÓM 1 — NGHIÊM TRỌNG

---

### 1.1 Tạo robots.txt

**[NEW] File:** `public/robots.txt`

```
User-agent: *
Allow: /
Disallow: /api/
Disallow: /_next/
Disallow: /admin/
Disallow: /studio/

User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

Sitemap: https://mkg.vn/sitemap.xml
```

**Kiểm tra:** `https://mkg.vn/robots.txt` trả về 200

**⚠️ Chú ý:**
- Chặn `/admin/` và `/studio/` (Sanity Studio)
- Không chặn CSS/JS
- Sau deploy → submit trong Google Search Console

---

### 1.2 Tạo sitemap.xml

**[NEW] File:** `src/app/sitemap.ts` (ở root app, KHÔNG trong route group)

```typescript
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://mkg.vn'

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/gioi-thieu`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/du-an`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/tin-tuc`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.7 },
    { url: `${baseUrl}/khuyen-mai`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.6 },
    { url: `${baseUrl}/lien-he`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
  ]

  // TODO: Fetch dynamic pages from Sanity (projects, posts, promotions)
  // const projects = await client.fetch(...)
  // const projectPages = projects.map(p => ({ url: `${baseUrl}/du-an/${p.slug}`, ... }))

  return staticPages
}
```

**Kiểm tra:** `https://mkg.vn/sitemap.xml` → XML hợp lệ. Submit trong GSC.

**⚠️ Chú ý:**
- File sitemap.ts phải nằm ở `src/app/sitemap.ts`, KHÔNG trong `(website)/`
- Sau này cần fetch dynamic slugs từ Sanity cho /du-an/[slug], /tin-tuc/[slug], /khuyen-mai/[slug]

---

### 1.3 Sửa Meta Description — 6 trang

**[MODIFY] File:** `src/app/(website)/layout.tsx` — sửa metadata.description:

```typescript
export const metadata: Metadata = {
  metadataBase: new URL('https://mkg.vn'),
  title: "MKG - Thiết Kế & Thi Công Nội Thất Cao Cấp TP.HCM",
  description: "Thiết kế & thi công nội thất cao cấp tại TP.HCM. MKG - 15+ năm kinh nghiệm, nhà máy 5000m², cam kết chất lượng gỗ E1. Nhận tư vấn miễn phí.",
  // ... giữ nguyên phần còn lại
};
```

**[MODIFY] File:** `src/app/(website)/gioi-thieu/page.tsx` — thêm/sửa metadata:
```typescript
export const metadata = {
  title: "Giới Thiệu MKG | Công Ty Nội Thất Uy Tín Quận 7 TP.HCM",
  description: "Minh Khuê Group (MKG) - Công ty thiết kế nội thất uy tín Quận 7, TP.HCM. Đội ngũ kiến trúc sư giàu kinh nghiệm, quy trình chuyên nghiệp từ tư vấn đến bàn giao.",
};
```

**[MODIFY] File:** `src/app/(website)/du-an/page.tsx` — sửa metadata:
```typescript
export const metadata = {
  title: "Dự Án Nội Thất Đã Hoàn Thành | MKG - Portfolio 200+ Công Trình",
  description: "Khám phá 200+ dự án nội thất đã hoàn thành bởi MKG: biệt thự, căn hộ, văn phòng, showroom. Xem hình ảnh thực tế before/after và đánh giá khách hàng.",
};
```

**[MODIFY] File:** `src/app/(website)/tin-tuc/page.tsx` — sửa metadata:
```typescript
export const metadata = {
  title: "Blog Nội Thất | Xu Hướng & Mẹo Thiết Kế 2026 - MKG",
  description: "Cập nhật xu hướng thiết kế nội thất 2026, mẹo trang trí nhà, kinh nghiệm chọn vật liệu gỗ. Blog chia sẻ từ chuyên gia MKG tại TP.HCM.",
};
```

**[MODIFY] File:** `src/app/(website)/khuyen-mai/page.tsx` — thêm metadata nếu chưa có:
```typescript
export const metadata = {
  title: "Khuyến Mãi Thiết Kế Nội Thất | Ưu Đãi Đến 20% - MKG",
  description: "Ưu đãi thiết kế nội thất MKG: Giảm đến 20% phí thiết kế, tặng tư vấn phong thủy miễn phí. Chương trình có hạn, liên hệ ngay 0817.424.242.",
};
```

**[MODIFY] File:** `src/app/(website)/lien-he/page.tsx` — thêm metadata nếu chưa có:
```typescript
export const metadata = {
  title: "Liên Hệ MKG | Tư Vấn Nội Thất Miễn Phí - 0817.424.242",
  description: "Liên hệ MKG Nội thất: Số 8 đường 79, P. Tân Quy, Q7, TP.HCM. Hotline 0817.424.242. Tư vấn miễn phí, khảo sát tận nơi trong 24h.",
};
```

**Kiểm tra:** View source mỗi trang → `<meta name="description">` unique, 130-160 ký tự

**⚠️ Chú ý:**
- KHÔNG để 2 trang có cùng description
- Số liệu (15+ năm, 200+ dự án) cần xác nhận BGĐ

---

### 1.4 Sửa Title Tag

Đã bao gồm trong mục 1.3 — title được set cùng với description trong metadata export của từng page.

**Kiểm tra:** View source → `<title>` unique, 50-60 ký tự

---

### 1.5 Thêm Canonical Tag + metadataBase

**[MODIFY] File:** `src/app/(website)/layout.tsx` — thêm vào metadata object:

```typescript
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
```

**Từng page cần thêm canonical:**
```typescript
// Trong metadata export của mỗi page
alternates: { canonical: '/gioi-thieu' },  // tùy page
```

**Kiểm tra:** View source → `<link rel="canonical" href="https://mkg.vn/...">`

---

### 1.6 Thêm JSON-LD Schema

**[NEW] File:** `src/components/JsonLd.tsx`

```tsx
export default function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
```

**[MODIFY] File:** `src/app/(website)/layout.tsx` — thêm vào trong `<head>`:

```tsx
import JsonLd from "@/components/JsonLd";

// Trong return, bên trong <head>:
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
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
    "opens": "08:00",
    "closes": "17:30"
  }
}} />
```

**Kiểm tra:** https://search.google.com/test/rich-results

**⚠️ Chú ý:**
- Tọa độ geo check Google Maps cho chính xác
- Email nên dùng @mkg.vn nếu có
- openingHours xác nhận BGĐ

---

## 🟡 NHÓM 2 — QUAN TRỌNG

---

### 2.1 Tối ưu H1 trang chủ

**[MODIFY] File:** `src/components/sections/HeroSection.tsx`

Tìm element chứa tagline/slogan (hiện tại: "KIẾN TẠO Luxury KHÔNG GIAN" hoặc tương tự). Đổi thành:

```tsx
<h1 className="...">Thiết Kế & Thi Công Nội Thất Cao Cấp tại TP.HCM</h1>
<p className="tagline ...">Kiến tạo không gian sống đẳng cấp — MKG</p>
```

**Kiểm tra:** Inspect trang chủ → có đúng 1 thẻ `<h1>` chứa từ "nội thất"

**⚠️ Chú ý:**
- Mỗi trang chỉ có DUY NHẤT 1 `<h1>`
- CSS có thể style H1 nhỏ hơn tagline nếu cần giữ thiết kế

---

### 2.2 Bổ sung Alt Text hình ảnh

**[MODIFY]** Tất cả component trong `src/components/sections/` và `src/components/`:
- Tìm tất cả `<Image>` hoặc `<img>` thiếu alt text
- Thêm alt text tiếng Việt mô tả cụ thể

**Gợi ý alt text:**

| Loại ảnh | Alt text |
|----------|----------|
| Hero Slider | "Phòng khách biệt thự cao cấp thiết kế bởi MKG" |
| Ảnh dự án | "Thiết kế nội thất căn hộ [tên dự án] - MKG" |
| Ảnh dịch vụ | "Dịch vụ [tên dịch vụ] tại MKG" |
| Logo | "Logo MKG - Minh Khuê Group Nội Thất Cao Cấp" |

**⚠️ Chú ý:**
- Next.js `Image` component BẮT BUỘC prop `alt`
- Ảnh decorative: `alt=""`
- KHÔNG viết "ảnh...", "hình..."

---

### 2.3 Thêm HSTS + Security Headers

**[MODIFY] File:** `next.config.ts`

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cdn.sanity.io" },
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ]
      }
    ]
  },
};

export default nextConfig;
```

**Kiểm tra:** DevTools → Network → Response Headers có `Strict-Transport-Security`

---

### 2.4 Thêm số liệu cụ thể (Section Thành tựu)

**[MODIFY] File:** `src/components/sections/StatsSection.tsx`

Trang chủ đã có `<StatsSection stats={stats} />`. Kiểm tra data tại `src/data/site-data.ts` → đảm bảo có số liệu thực:

```typescript
stats: [
  { number: '15+', label: 'Năm kinh nghiệm' },
  { number: '200+', label: 'Dự án hoàn thành' },
  { number: '5,000', label: 'm² nhà máy sản xuất' },
  { number: '50+', label: 'Nhân sự chuyên môn' },
]
```

**⚠️ SỐ LIỆU PHẢI CHÍNH XÁC — hỏi BGĐ trước khi publish!**

---

### 2.5 Testimonials

Trang chủ đã có `<TestimonialsSection testimonials={...} />`.

**Cần:** Thu thập 5+ đánh giá thật từ khách hàng qua Sanity CMS hoặc `src/data/site-data.ts`.

**Thêm AggregateRating schema** vào layout hoặc trang chủ:
```json
{ "@type": "AggregateRating", "ratingValue": "4.8", "reviewCount": "52" }
```

**⚠️ Review PHẢI LÀ THẬT. Google phạt fake reviews.**

---

### 2.6 Thông tin CEO/Founder

**[NEW] hoặc [MODIFY]** trang giới thiệu `src/app/(website)/gioi-thieu/page.tsx`:

Thêm section Founder với Person schema. Cần BGĐ cung cấp: tên, ảnh, bio.

---

### 2.7 Tạo Privacy Policy & Điều khoản

**[NEW] File:** `src/app/(website)/chinh-sach-bao-mat/page.tsx`
**[NEW] File:** `src/app/(website)/dieu-khoan-su-dung/page.tsx`

Nội dung trang Privacy Policy:

```markdown
# CHÍNH SÁCH BẢO MẬT — MINH KHUÊ GROUP (MKG)

Cập nhật lần cuối: [Ngày/Tháng/Năm]

## 1. Thông tin thu thập
Chúng tôi thu thập họ tên, số điện thoại, email, địa chỉ khi bạn yêu cầu tư vấn hoặc báo giá tại mkg.vn.

## 2. Mục đích sử dụng
- Liên hệ tư vấn và báo giá
- Gửi thông tin khuyến mãi (nếu đồng ý)
- Cải thiện dịch vụ

## 3. Bảo mật
Thông tin được bảo mật theo quy định pháp luật Việt Nam. Không chia sẻ với bên thứ ba.

## 4. Cookies
Website sử dụng cookies (Google Analytics). Bạn có thể tắt trong trình duyệt.

## 5. Liên hệ
Công ty TNHH Kiến trúc & Nội thất Minh Khuê
Số 8 đường 79, P. Tân Quy, Q7, TP.HCM
Email: fadifurnitures@gmail.com | SĐT: 0817.424.242
```

**[MODIFY] File:** `src/components/Footer.tsx` — thêm link:
```tsx
<Link href="/chinh-sach-bao-mat">Chính sách bảo mật</Link>
<Link href="/dieu-khoan-su-dung">Điều khoản sử dụng</Link>
```

---

## 🟢 NHÓM 3 — CẢI THIỆN

---

### 3.1 FAQ Section

**[NEW] File:** `src/components/sections/FAQSection.tsx`

10 câu FAQ cho ngành nội thất:

1. **Chi phí thiết kế nội thất tại MKG bao nhiêu?** → 150,000 - 500,000 VNĐ/m². Tư vấn miễn phí.
2. **Thời gian thi công bao lâu?** → 45-90 ngày tùy quy mô.
3. **Bảo hành thế nào?** → 2-5 năm tùy hạng mục.
4. **Vật liệu gỗ tiêu chuẩn gì?** → Gỗ E1, FSC certified.
5. **Quy trình làm việc?** → 5 bước: Tư vấn → Thiết kế 3D → Báo giá → Thi công → Bàn giao.
6. **Có thiết kế theo phong thủy?** → Có chuyên gia tư vấn.
7. **Hỗ trợ trả góp?** → Qua ngân hàng đối tác.
8. **Phục vụ khu vực nào?** → TP.HCM và các tỉnh lân cận.
9. **Xem showroom ở đâu?** → Số 8 đường 79, Q7, T2-T7.
10. **Làm sao bắt đầu?** → Hotline 0817.424.242 hoặc form website.

**Thêm FAQPage Schema JSON-LD** vào trang chứa FAQ.

**[MODIFY] File:** `src/app/(website)/page.tsx` — thêm FAQSection vào trang chủ.

**⚠️ Giá và thời gian cần xác nhận BGĐ.**

---

### 3.2 Kỹ thuật phụ

**[NEW] File:** `src/components/Breadcrumb.tsx` — breadcrumb navigation cho trang con

**[NEW] File:** `src/app/(website)/not-found.tsx` — custom 404 page

**[NEW] File:** `public/og-image.jpg` — OG image 1200×630px (logo MKG + tagline + ảnh nội thất)

**[MODIFY]** Metadata trong layout.tsx đã bao gồm og:image (xem mục 1.5).

**[MODIFY]** Tin tức pages: hiển thị "Cập nhật: DD/MM/YYYY" rõ ràng.

---

### 3.3 Xây dựng Authority

**Không cần code — thao tác thủ công:**

1. **Google Business Profile:** business.google.com → "Minh Khuê Group - MKG Nội Thất" → Danh mục "Công ty thiết kế nội thất" → Upload 10+ ảnh
2. **Google Search Console:** search.google.com/search-console → Thêm https://mkg.vn → Xác minh DNS → Submit sitemap
3. **Backlink:** Đăng bài trên Kienviet.net, Homedy, Houzz Vietnam. KHÔNG MUA LINK.

---

## 📊 CHECKLIST TỔNG HỢP

| # | Hạng mục | File chính | Loại |
|---|----------|-----------|------|
| 1.1 | robots.txt | `public/robots.txt` | [NEW] |
| 1.2 | sitemap.xml | `src/app/sitemap.ts` | [NEW] |
| 1.3 | Meta Description ×6 | `layout.tsx` + 5 page.tsx | [MODIFY] |
| 1.4 | Title Tag ×6 | (cùng 1.3) | [MODIFY] |
| 1.5 | Canonical + metadataBase | `layout.tsx` | [MODIFY] |
| 1.6 | JSON-LD Schema | `src/components/JsonLd.tsx` + `layout.tsx` | [NEW+MODIFY] |
| 2.1 | H1 trang chủ | `src/components/sections/HeroSection.tsx` | [MODIFY] |
| 2.2 | Alt Text ảnh | Tất cả components có Image | [MODIFY] |
| 2.3 | HSTS Headers | `next.config.ts` | [MODIFY] |
| 2.4 | Số liệu | `src/data/site-data.ts` | [MODIFY] |
| 2.5 | Testimonials | Sanity CMS / site-data | [DATA] |
| 2.6 | Thông tin CEO | `gioi-thieu/page.tsx` | [MODIFY] |
| 2.7 | Privacy Policy | 2 page mới + Footer | [NEW+MODIFY] |
| 3.1 | FAQ | `FAQSection.tsx` + page.tsx | [NEW+MODIFY] |
| 3.2 | Kỹ thuật phụ | Breadcrumb, 404, og:image | [NEW] |
| 3.3 | Authority | Thao tác thủ công | [MANUAL] |

> **11/16 mục agent có thể làm hoàn toàn.** 5 mục cần thông tin từ BGĐ/khách hàng (2.4, 2.5, 2.6, 3.1 giá, 3.3).
