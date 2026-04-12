import { NextRequest, NextResponse } from "next/server";
export const runtime = 'edge';

const SYSTEM_PROMPT = `Bạn là trợ lý tư vấn AI của MKG.VN và FADI — chuyên gia nội thất và sơn nước uy tín tại TP.HCM.

THÔNG TIN CỐT LÕI:
- MKG.VN: thiết kế & thi công nội thất cao cấp, 15+ năm kinh nghiệm, Q7 TP.HCM
- FADI (Father Do It): dịch vụ sơn nước, sửa chữa, gói căn hộ trọn gói
- Hotline: 0817 424 242
- Địa chỉ: Số 8 đường 79, Phường Tân Quy, Quận 7, TP.HCM

GÓI SƠN NHÀ CĂN HỘ (giá cố định, không phát sinh):
- 1 PN < 50m²: 6.500.000 VNĐ
- 2 PN < 70m²: 9.000.000 VNĐ  
- 3 PN < 110m²: 10.500.000 VNĐ
- Bao gồm: sơn 3 lớp (1 lót + 2 phủ), vật tư Dulux/Nippon, nhân công, dọn dẹp
- Khảo sát MIỄN PHÍ, bảo hành 1 năm

THOPHO.COM: dịch vụ thợ nhỏ lẻ (điện, nước, khóa, mộc) — giá niêm yết, có ngay trong 2h

PHONG CÁCH TRẢ LỜI:
- Thân thiện, chuyên nghiệp, trả lời ngắn gọn
- Luôn chào hỏi và xưng "em"
- Với câu hỏi về giá → nêu rõ gói, đề nghị đặt lịch khảo sát miễn phí
- Kết thúc bằng CTA: nhắn Zalo hoặc đặt lịch
- KHÔNG bịa đặt thông tin không có trong context
- Trả lời bằng tiếng Việt`;

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: "Invalid messages" }, { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY || process.env.OPENROUTER_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "AI API chưa được cấu hình" }, { status: 500 });
    }

    // Try Gemini API first, fallback to OpenRouter
    const useOpenRouter = !process.env.GEMINI_API_KEY && process.env.OPENROUTER_API_KEY;

    let response: Response;
    if (useOpenRouter) {
      // OpenRouter API (supports nhiều model)
      response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${apiKey}`,
          "HTTP-Referer": "https://mkg.vn",
          "X-Title": "MKG Chat Assistant",
        },
        body: JSON.stringify({
          model: "google/gemini-flash-1.5",
          messages: [
            { role: "system", content: SYSTEM_PROMPT },
            ...messages.slice(-10), // Giới hạn 10 messages để tránh token limit
          ],
          max_tokens: 500,
          temperature: 0.7,
        }),
      });
      const data = await response.json();
      const reply = data.choices?.[0]?.message?.content || "Em xin lỗi, hệ thống đang bận. Vui lòng gọi trực tiếp 0817 424 242 nhé!";
      return NextResponse.json({ reply });
    } else {
      // Google Gemini API
      const geminiMessages = messages.slice(-10).map((m: { role: string; content: string }) => ({
        role: m.role === "assistant" ? "model" : "user",
        parts: [{ text: m.content }],
      }));

      response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            system_instruction: { parts: [{ text: SYSTEM_PROMPT }] },
            contents: geminiMessages,
            generationConfig: { maxOutputTokens: 500, temperature: 0.7 },
          }),
        }
      );
      const data = await response.json();
      const reply = data.candidates?.[0]?.content?.parts?.[0]?.text
        || "Em xin lỗi, hệ thống đang bận. Vui lòng gọi trực tiếp 0817 424 242 nhé!";
      return NextResponse.json({ reply });
    }
  } catch (err) {
    console.error("[Chat API Error]", err);
    return NextResponse.json({
      reply: "Em xin lỗi, có lỗi xảy ra. Vui lòng gọi trực tiếp 0817 424 242 hoặc nhắn Zalo để được tư vấn ngay nhé!",
    });
  }
}
