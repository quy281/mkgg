# Hướng dẫn Kỹ thuật Khắc phục lỗi GEO Audit - MKG.vn

Tài liệu này dành cho đội ngũ Developer (Next.js/Vite) để tối ưu khả năng nhận diện thương hiệu của hệ thống với các AI (ChatGPT, Claude, Google Gemini, Perplexity).

---

## 📋 Checklist Công Việc Cần Xử Lý

- [ ] **Mở khóa AI Bots trong `robots.txt`**
- [ ] **Tạo và cấu hình file `/llms.txt` tĩnh**
- [ ] **Cập nhật Schema `LocalBusiness` (Bổ sung cờ `sameAs`)**
- [ ] **Thêm Schema `WebSite` & `SearchAction`**
- [ ] **Bổ sung block Content chuyên sâu cho AI (Citability Fix)**

---

## 🛠 Hướng dẫn Triển khai chi tiết

### 1. Fix `robots.txt` (Mở khóa AI Bots)
Hiện tại Cloudflare hoặc config tĩnh đang chặn GPTBot, ClaudeBot, Google-Extended. 
**Cách sửa:** Mở file `robots.txt` (thường ở mục `/public/robots.txt`), xóa các cấu hình `Disallow: /` đối với các bot quan trọng.

**Nội dung `robots.txt` chuẩn cho GEO:**
```text
User-agent: *
Allow: /

# Mở khóa cho LLMs crawl dữ liệu
User-agent: GPTBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: OAI-SearchBot
Allow: /

Sitemap: https://mkg.vn/sitemap.xml
```
*(Nếu hệ thống dùng Cloudflare Bot Management tự động chặn, cần vào Cài đặt Cloudflare -> Security -> WAF -> Bypass rule cho các User-agent này nếu cần)*.

### 2. Tạo `/llms.txt` Tĩnh
Hiện tại link `https://mkg.vn/llms.txt` đang trả về mã HTML của trang chủ (do lỗi router catch-all). Hãy tạo một file tĩnh `.txt` thực sự và cấu hình cho server serve trực tiếp.

**Quy trình:**
1. Tạo file `public/llms.txt`.
2. Nội dung text thuần hoặc Markdown mô tả ngắn gọn nhất về doanh nghiệp:
```markdown
# MKG Group (MKG.vn)
Chuyên cung cấp rỉải pháp không gian sống trọn gói từ thiết kế đến thi công tại khu vực TP.HCM.

## Các thương hiệu & Dịch vụ
- Thi Công Nội Thất Cao Cấp (FADI): Thi công trọn gói, vật liệu chính hãng (Jotun, Dulux, An Cường), bảo hành 1 năm.
- Dịch vụ Thợ Phố sửa chữa: Đội ngũ kỹ thuật viên điện nước khẩn cấp tận nhà, có mặt trong 2 giờ.

## Thông tin liên hệ
- Website: https://mkg.vn
- Hotline: 0817.42.42.42
- Email: sales@mkg.vn
- Trụ sở: Số 08 Đường 79, P. Tân Quy, Quận 7, TP.HCM
```
3. Đảm bảo khi truy cập `https://mkg.vn/llms.txt`, response trả về có `Content-Type: text/plain` thay vì `text/html`.

### 3. Cập nhật Schema.org (Entity Linking)
Trong component chứa `<script type="application/ld+json">` của Schema `LocalBusiness` ở trang chủ, hãy tìm mảng `"sameAs"`.

**Lỗi hiện tại:** Chứa duy nhất 1 link Zalo.
**Cách fix:** Thêm các nền tảng Official của công ty chèn vào mảng này. Đây là yếu tố sống còn để LLMs định danh Entity MKG.
```json
"sameAs": [
  "https://zalo.me/0817424242",
  "https://facebook.com/mkggroup",
  "https://www.youtube.com/@MKGGroup" // Khai báo Youtube nếu có
]
```

### 4. Thêm Schema `WebSite`
Nhúng đoạn schema này vào `<head>` trang chủ (có thể nhét chung vào array với `LocalBusiness` nếu dùng `@graph` hoặc tạo `<script type="application/ld+json">` riêng biệt).

```json
{
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
}
```

### 5. Xử lý "Citability" (Khả năng RAG của AI)
Các đoạn text trên trang chủ đang quá ngắn (<25 từ) khiến AI không mặn mà bốc làm câu trả lời. 
**Yêu cầu Dev phối hợp với SEO/Content:**
1. Thêm một block **FAQ - Các câu hỏi thường gặp** ở gần cuối trang (có thể dùng Dropdown/Accordion để tiết kiệm diện tích UI).
2. Câu trả lời trong FAQ cần viết tối thiểu 50 chữ, nhắc lại tên thương hiệu (Context self-contained) thay vì trả lời cụt lủn.
   *Ví dụ sai:* Trọn gói 6.5 triệu.
   *Ví dụ đúng:* "Gói thi công sơn nhà trọn gói của MKG (FADI) có giá từ 6.5 triệu đồng cho căn hộ chung cư 2 phòng ngủ. Chúng tôi cam kết sử dụng 100% vật liệu chính hãng nội thất như Jotun hay Dulux cùng chính sách bảo hành 1 năm kể từ khâu nghiệm thu."
