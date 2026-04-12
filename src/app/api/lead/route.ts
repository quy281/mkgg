import { NextRequest, NextResponse } from "next/server";
export const runtime = 'edge';

// POST /api/lead
// Nhận lead từ form → lưu + forward n8n webhook
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, address, package: pkg, note, source, timestamp } = body;

    // Validate cơ bản
    if (!name || !phone) {
      return NextResponse.json({ error: "Thiếu thông tin bắt buộc" }, { status: 400 });
    }

    const payload = {
      name: name.trim(),
      phone: phone.trim(),
      address: address?.trim() || "",
      package: pkg || "",
      note: note?.trim() || "",
      source: source || "mkg.vn",
      timestamp: timestamp || new Date().toISOString(),
      // Telegram-friendly message
      message: `🏠 *Lead mới từ ${source || "mkg.vn"}*\n\n*Tên:* ${name}\n*SĐT:* ${phone}\n*Địa chỉ:* ${address || "Chưa điền"}\n*Gói:* ${pkg || "Chưa chọn"}\n*Ghi chú:* ${note || "-"}\n\n⏰ ${new Date().toLocaleString("vi-VN", { timeZone: "Asia/Ho_Chi_Minh" })}`,
    };

    // Forward tới n8n webhook (non-blocking)
    const webhookUrl = process.env.N8N_WEBHOOK_URL;
    if (webhookUrl) {
      fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }).catch((err) => console.error("[Lead Webhook Error]", err));
    }

    return NextResponse.json({ success: true, message: "Lead đã được ghi nhận" });
  } catch (err) {
    console.error("[Lead API Error]", err);
    return NextResponse.json({ error: "Lỗi server" }, { status: 500 });
  }
}
