---
description: GEO-SEO analysis — audit toàn diện AI search visibility (citability, AI crawlers, brand authority, schema, platform optimization, PDF reports)
---

# /geo Workflow — AI Search Optimization

> GEO-first, SEO-supported. Tối ưu website cho AI search engines (ChatGPT, Claude, Perplexity, Gemini, Google AI Overviews).

## Cách sử dụng

Khi user gõ `/geo`, hãy đọc skill chính tại `.agents/skills/geo/SKILL.md` để biết hướng dẫn chi tiết.

## Quick Reference

| Command | Chức năng |
|---------|-----------|
| `/geo audit <url>` | Full GEO + SEO audit với 5 subagent song song |
| `/geo quick <url>` | Snapshot nhanh 60 giây |
| `/geo citability <url>` | Đánh giá khả năng AI trích dẫn nội dung |
| `/geo crawlers <url>` | Kiểm tra AI crawler access (robots.txt) |
| `/geo llmstxt <url>` | Phân tích hoặc tạo llms.txt |
| `/geo brands <url>` | Quét brand mentions trên YouTube, Reddit, Wikipedia, LinkedIn |
| `/geo platforms <url>` | Tối ưu theo từng platform (Google AIO, ChatGPT, Perplexity) |
| `/geo schema <url>` | Kiểm tra & tạo structured data / JSON-LD |
| `/geo technical <url>` | Audit kỹ thuật SEO |
| `/geo content <url>` | Đánh giá chất lượng nội dung & E-E-A-T |
| `/geo report <url>` | Tạo báo cáo client-ready (markdown) |
| `/geo report-pdf <url>` | Tạo PDF báo cáo chuyên nghiệp |
| `/geo prospect <cmd>` | CRM-lite: quản lý pipeline khách hàng |
| `/geo proposal <domain>` | Tạo proposal tự động từ audit data |
| `/geo compare <domain>` | So sánh monthly delta report |

## Quy trình

// turbo-all

1. Đọc skill chính: `.agents/skills/geo/SKILL.md`
2. Xác định command user yêu cầu (audit, citability, crawlers, etc.)
3. Load sub-skill tương ứng từ `.agents/skills/geo-*/SKILL.md`
4. Nếu là full audit → delegate tới 5 agents song song:
   - `.agents/agents/geo-ai-visibility.md`
   - `.agents/agents/geo-platform-analysis.md`
   - `.agents/agents/geo-technical.md`
   - `.agents/agents/geo-content.md`
   - `.agents/agents/geo-schema.md`
5. Tổng hợp kết quả → GEO Score (0-100) → Action plan

## Python Scripts (nếu cần)

```bash
# Fetch & parse page
python3 .agents/skills/geo/scripts/fetch_page.py <url> page

# Citability scoring
python3 .agents/skills/geo/scripts/citability_scorer.py <url>

# Brand scanning
python3 .agents/skills/geo/scripts/brand_scanner.py <brand_name>

# Generate PDF report
python3 .agents/skills/geo/scripts/generate_pdf_report.py data.json output.pdf
```

## Yêu cầu Python

```bash
pip install requests beautifulsoup4 lxml reportlab
```
